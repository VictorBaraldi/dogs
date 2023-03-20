import React from 'react';
import { PHOTOS_GET } from '../api';
import UseFetch from '../Hooks/UseFetch';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../components/Helper/Error';
import Loading from '../components/Helper/Loading';
import styles from '../styles/feed/Photos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = UseFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.lenght < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page]);

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
