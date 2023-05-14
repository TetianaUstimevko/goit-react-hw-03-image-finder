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

// другий варіант

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

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   handleImageClick = (id) => {
//     const picture = this.props.images.find((obj) => obj.id === id);
//     if (picture) {
//       this.setState({ bigPic: picture.largeImageURL, showModal: true });
//     }
//   };

//   render() {
//     const { showModal, bigPic } = this.state;
//     return (
//       <>
//         <ul className={s.gallery}>
//           {this.props.images.map((img) => (
//             <ImageGalleryItem
//               key={nanoid()}
//               smallImgURL={img.webformatURL}
//               id={img.id}
//               onClick={this.handleImageClick}
//             />
//           ))}
//         </ul>
//         {showModal && bigPic && <Modal onClose={this.toggleModal} pic={bigPic} />}
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

// третій варіант

import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    showModal: false,
    bigPic: null,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImageClick = (e) => {
    if (e.target.nodeName !== 'IMG') {
      this.setState({ showModal: false });
      return;
    } else {
      let picture = this.props.images.filter((obj) => {
        return obj.id === parseInt(e.target.alt);
      });
      this.setState({ bigPic: picture[0].largeImageURL });
      this.toggleModal();
    }
  };

  render() {
    const { showModal, bigPic } = this.state;
    return (
      <>
        <ul className={s.gallery} onClick={this.handleImageClick}>
          {this.props.images.map((img) => {
            return (
              <ImageGalleryItem
                key={nanoid()}
                smallImgURL={img.webformatURL}
                id={img.id}
              />
            );
          })}
        </ul>
        {showModal && bigPic && <Modal onClose={this.toggleModal} pic={bigPic} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
