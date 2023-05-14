import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.galleryItem}>
        <img src={this.props.smallImgURL} alt={this.props.id} />
      </li>
    );
  }
  
}


ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};

// другий варіант

// import React, { Component } from 'react';
// import s from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

// export default class ImageGalleryItem extends Component {
// handleClick = () => {
// this.props.onClick(this.props.id);
// };

// render() {
// return (
// <li className={s.galleryItem} onClick={this.handleClick}>
// <img src={this.props.smallImgURL} alt={this.props.id} />
// </li>
// );
// }
// }

// ImageGalleryItem.propTypes = {
// id: PropTypes.number.isRequired,
// smallImgURL: PropTypes.string.isRequired,
// onClick: PropTypes.func.isRequired,
// };