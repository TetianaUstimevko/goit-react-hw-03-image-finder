// import React, { Component } from 'react';
// import s from './ImageGallery.module.css';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// export default class ImageGallery extends Component {
//   state = {
//     showModal: false,
//     bigPic: null,
//   };

//   componentDidMount() {
//     document.addEventListener('click', e => {
//       if (e.target.nodeName !== 'IMG') {
//         this.setState({ showModal: false });
//         return;
//       } else {
//         let picture = this.props.images.filter(obj => {
//           return obj.id === parseInt(e.target.alt);
//         });
//         this.setState({ bigPic: picture[0].largeImageURL });
//       }
//     });
//   }

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   render() {
//     const { showModal, bigPic } = this.state;
//     return (
//       <>
//         <ul className={s.gallery} onClick={this.toggleModal}>
//           {this.props.images.map(img => {
//             return (
//               <ImageGalleryItem
//                 key={nanoid()}
//                 smallImgURL={img.webformatURL}
//                 id={img.id}
//               />
//             );
//           })}
//         </ul>
//         {showModal && bigPic && (
//           <Modal onClose={this.toggleModal} pic={bigPic} />
//         )}
//       </>
//     );
//   }
// }

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//     })
//   ),
// };

import React, { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [bigPic, setBigPic] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.nodeName !== 'IMG') {
        setShowModal(false);
        return;
      } else {
        let picture = images.filter((obj) => {
          return obj.id === parseInt(e.target.alt);
        });
        setBigPic(picture[0].largeImageURL);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [images]);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      <ul className={s.gallery} onClick={toggleModal}>
        {images.map((img) => (
          <ImageGalleryItem key={nanoid()} smallImgURL={img.webformatURL} id={img.id} />
        ))}
      </ul>
      {showModal && bigPic && <Modal onClose={toggleModal} pic={bigPic} />}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
