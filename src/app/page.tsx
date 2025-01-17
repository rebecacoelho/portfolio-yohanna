import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SectionAbout } from '@/components/SectionAbout';
import { Work } from '@/components/Work';
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin']})

export default function Home() {
  return (
    <main className={playfair.className}>
      <Header />
      <SectionAbout />
      <Work />
      <Footer />
    </main>
  );
}
