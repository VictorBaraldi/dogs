import React from 'react';
import { PHOTOS_GET } from '../api';
import UseFetch from '../Hooks/UseFetch';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../components/Helper/Error';
import Loading from '../components/Helper/Loading';
import styles from '../styles/feed/Photos.module.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = UseFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
};

export default FeedPhotos;
