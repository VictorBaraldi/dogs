import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from '../../styles/photo/Comments.module.css';

const PhotoComments = ({ id, comments, single }) => {
  const [comment, setComment] = React.useState(() => comments);
  const commentSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comment]);

  return (
    <>
      <ul
        className={`${styles.comments} ${single ? styles.single : ''}`}
        ref={commentSection}
      >
        {comment.map((result) => (
          <li key={result.comment_ID}>
            <b>{result.comment_author}:</b>
            <span>{result.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm single={single} id={id} setComment={setComment} />
      )}
    </>
  );
};

export default PhotoComments;
