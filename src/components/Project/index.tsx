"use client"

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import './styles.css';
import Modal from '../Modal';

interface ProjectProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
  modalImages?: StaticImageData[];
  modalLink?: string;
  siteUrl?: string;
}

export function Project({ imageSrc, title, description, link, modalImages, modalLink, siteUrl }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    if (modalImages && modalImages.length > 0) {
      setIsModalOpen(true);
    } else if (siteUrl) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project" onClick={handleModalOpen}>
        <div className="project-image">
          <Image src={imageSrc} alt={title} layout="responsive" objectFit="cover" />
        </div>
        <div className="project-details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={title}
          images={modalImages}
          link={modalLink}
          siteUrl={siteUrl}
        />
      )}
    </>
  );
}
