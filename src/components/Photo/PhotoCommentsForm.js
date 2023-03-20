import React from 'react';
import useFetch from '../../Hooks/UseFetch';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import style from '../../styles/photo/CommentsForm.module.css';

const PhotoCommentsForm = (props) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(props.id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      props.setComment((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${style.form} ${props.single ? style.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={style.textarea}
        value={comment}
        id="comment"
        name="comment"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.button}>
        <Enviar />
      </button>
      <Error erro={error} />
    </form>
  );
};

export default PhotoCommentsForm;
