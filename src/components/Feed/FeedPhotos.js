import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setPhotoModal }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.table(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            setPhotoModal={setPhotoModal}
            photo={photo}
            key={photo.id}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
