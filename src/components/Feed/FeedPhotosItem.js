import React from "react";

import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setPhotoModal }) => {
  const ChangePhoto = () => {
    setPhotoModal(photo);
  };
  return (
    <li className={styles.photo} onClick={ChangePhoto}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
