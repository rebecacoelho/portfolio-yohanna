import Link from 'next/link';
import './styles.css';

export function Footer() {
  return (
    <footer>
      <div className='footer'>
        <Link href='/'>
          <span>Yohanna Massett</span>
        </Link>
        <Link href='/'>
          <p>yohannamassett07@gmail.com</p>
        </Link>
      </div>
    </footer>
  );
}
