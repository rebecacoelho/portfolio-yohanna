import { AboutMe } from '@/components/AboutMe';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin']})

export default function About() {
  return (
    <main className={playfair.className}>
      <Header />
      <AboutMe />
      <Footer />
    </main>
  );
}
