import React, { useState, useEffect } from 'react';
import './styles.css';
import Image, { StaticImageData } from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images?: StaticImageData[];
  link?: string;
  siteUrl?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, images, link, siteUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setCurrentIndex(0); // Reset currentIndex on modal open
  }, [isOpen]);

  const handlePrev = () => {
   if(images){
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setTransitioning(false);
    }, 500);
   }
  };

  const handleNext = () => {
    if(images) {
      setTransitioning(true);
      setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitioning(false);
    }, 500); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {siteUrl ? (
          <div className="iframe-container">
            <iframe src={siteUrl} title={title} className="iframe-content" />
          </div>
        ) : (
          <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrev}><FaArrowLeft size={20}/></button>
            <div className={`carousel-image ${transitioning ? 'transition' : ''}`}>
              {images && images.length > 0 && (
                <Image
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  layout="responsive"
                  objectFit="cover"
                />
              )}
            </div>
            <button className="carousel-button next" onClick={handleNext}><FaArrowRight size={20}/></button>
          </div>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="modal-link">
            Veja Mais
          </a>
        )}
        <button className="modal-close" onClick={onClose}>
          <IoMdClose size={30} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
