import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './styles.css';

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="left">
          <Link href='/'>
            <h1>Yohanna Massett</h1>
          </Link>
        </div>
        <div className="right">
          <nav>
            <Link href="/about">Sobre mim</Link>
            <Link href="mailto:yohannamassett07@gmail.com">Contato</Link>
          </nav>
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
    </header>
  );
}
