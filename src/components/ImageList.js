import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  return (
      <div className="image-list">
        {
          props.image.map((image) => {
            return <ImageCard key={image.id} image={image} />
          })
        }
      </div>
    )
}

export default ImageList;