import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  const [PhotoModal, setPhotoModal] = React.useState(null);

  return (
    <div>
      {PhotoModal && (
        <FeedModal photo={PhotoModal} setPhotoModal={setPhotoModal} />
      )}
      <FeedPhotos setPhotoModal={setPhotoModal} />
    </div>
  );
};

export default Feed;
