import React from 'react';
import { PHOTO_DELETE } from '../../api';
import UseFetch from '../../Hooks/UseFetch';
import styles from '../../styles/photo/Delete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = UseFetch();

  function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.detete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.detete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
