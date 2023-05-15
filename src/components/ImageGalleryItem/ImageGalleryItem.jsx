// import React from 'react';
// import s from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

// export const ImageGalleryItem = ({handleImageClick, largeImageURL}) => {

//     return (
//       <li className={s.galleryItem}>
//         <img onClick={()=> handleImageClick(largeImageURL)} src={this.props.smallImgURL} alt={this.props.id} />
//       </li>
//     );
//   }
  



// ImageGalleryItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   smallImgURL: PropTypes.string.isRequired,
//   handleImageClick: PropTypes.func.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   };

import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ handleImageClick, smallImgURL, largeImageURL }) => {
  return (
    <li className={s.galleryItem}>
      <img onClick={() => handleImageClick(largeImageURL)} src={smallImgURL} alt={largeImageURL} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImgURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
