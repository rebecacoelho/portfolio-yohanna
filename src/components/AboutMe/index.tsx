import React from 'react';
import Image from 'next/image';
import './styles.css'; 
import AboutMePic from '../../../public/images/about-me.jpeg'
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-image">
        <Image src={AboutMePic} alt='Yohanna Massett' layout="responsive" objectFit="cover" />
      </div>
      <div className="about-me-content">
        <div>
          <h2>Um pouco sobre mim...</h2>
          <p>Olá! Meu nome é Yohanna, graduanda de Jornalismo e amante do cinema. Motivada e criativa, já me envolvi em projetos como editora e redatora na faculdade.</p>
          <p>Participo de um projeto de extensão envolvido com a democratização e fomento do cinema em São Luís do Maranhão.</p>
          <p>Uso minhas habilidades usando ferramentas de edição e a escrita de textos, buscando excelência em todos os meus trabalhos.</p>
        </div>
        <div className="icons">
            <a href="https://www.instagram.com/yohannambo/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:yohannamassett07@gmail.com">
              <FaEnvelope />
            </a>
      </div>
      </div>
    </div>
  );
};

