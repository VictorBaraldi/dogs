import React from 'react';
import { PHOTO_GET } from '../api';
import Error from '../components/Helper/Error';
import Loading from '../components/Helper/Loading';
import PhotoContent from '../components/Photo/PhotoContent';
import UseFetch from '../Hooks/UseFetch';
import styles from '../styles/feed/Modal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = UseFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error erro={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
