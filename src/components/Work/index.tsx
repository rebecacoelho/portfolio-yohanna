import { Project } from '../Project';
import './styles.css';
import Miolo from '../../../public/images/miolo.png';
import YOMAG from '../../../public/images/capa1.jpeg';
import YOMAG2 from '../../../public/images/capa2.jpeg'
import YOMAG3 from '../../../public/images/capa3.jpeg';
import Cineduca from '../../../public/images/cineduca1.jpeg';
import Cineduca2 from '../../../public/images/postcine1.jpeg';
import Cineduca3 from '../../../public/images/postcine2.jpeg';
import Cineduca4 from '../../../public/images/postcine3.jpeg';
import Cineduca5 from '../../../public/images/postcine4.jpeg';
import Mar from '../../../public/images/mar1.jpeg';
import Mar2 from '../../../public/images/mar2.jpeg';
import Mar3 from '../../../public/images/mar3.jpeg';
import Mar4 from '../../../public/images/mar4.jpeg';
import Mar5 from '../../../public/images/mar5.jpeg';
import Trilhas from '../../../public/images/trilhas1.jpeg';
import Trilhas2 from '../../../public/images/trilhas2.jpeg';
import Trilhas3 from '../../../public/images/trilhas3.jpeg';
import Trilhas4 from '../../../public/images/trilhas4.jpeg';
import Trilhas5 from '../../../public/images/trilhas5.jpeg';
import Trilhas6 from '../../../public/images/trilhas6.jpeg';
import Trilhas7 from '../../../public/images/trilhas7.jpeg';


export function Work() {
  return (
    <div className='work-container'>
      <h2 className='work-title'>Meus Trabalhos</h2>
      <div className='work-project'>
        <Project 
          imageSrc={YOMAG}
          description='Neste projeto, desenvolvi uma série de capas de revista que exploram e combinam as funções prática, simbólica e emocional do design gráfico. Cada capa foi cuidadosamente projetada para não apenas capturar a atenção visual, mas também para comunicar mensagens e evocar sentimentos específicos.'
          link='https://www.canva.com/design/DAF9_2RT4X0/dMLHCzqa_t_tr4xGDxubPg/edit'
          title='YOMAG'
          modalImages={[YOMAG, YOMAG2, YOMAG3]}
          modalLink='https://www.canva.com/design/DAF9_2RT4X0/dMLHCzqa_t_tr4xGDxubPg/edit'
        />
         <Project 
          imageSrc={Miolo}
          description='No âmbito deste projeto interdisciplinar, nossa turma colaborou para criar um site de webjornalismo. Minha contribuição principal foi a redação de uma matéria jornalística detalhada sobre o cenário do ciclismo maranhense, abordando seus desafios, conquistas e perspectivas futuras.'
          link='https://turmadejornalismot.wixsite.com/my-site-1/post/o-fortalecimento-do-ciclismo-no-maranh%C3%A3o'
          title='Miolo Da Cidade'
          modalLink='www.canva.com/design/DAF9_2RT4X0/dMLHCzqa_t_tr4xGDxubPg/edit?utm_content=DAF9_2RT4X0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
          siteUrl='https://turmadejornalismot.wixsite.com/my-site-1/post/o-fortalecimento-do-ciclismo-no-maranh%C3%A3o'
        />
         <Project 
          imageSrc={Mar}
          description='Este projeto disciplinar consiste em uma fotorreportagem temática focada no meio ambiente na cidade de Raposa, MA. O objetivo principal foi documentar e sensibilizar sobre os impactos da pesca predatória na região, destacando suas consequências ecológicas.'
          link='https://www.canva.com/design/DAF1HB5WSLc/crlnlUzZ2m8NDXzXkepTqg/edit'
          title='O Mar não descansa'
          modalImages={[Mar, Mar2, Mar3, Mar4, Mar5]}
          modalLink='https://www.canva.com/design/DAF1HB5WSLc/crlnlUzZ2m8NDXzXkepTqg/edit'
        />
         <Project 
          imageSrc={Cineduca}
          description='Post de Instagram para o projeto de extensão "CinEduca", buscando introduzir e promover a iniciativa. Este projeto visa fomentar a cultura cinematográfica, incentivando debates e discussões sobre filmes entre estudantes e a comunidade em geral.'
          link='https://www.instagram.com/p/C5lxjtILEBe/?utm_source=ig_web_copy_link'
          title='CinEduca'
          modalImages={[Cineduca2, Cineduca3, Cineduca4, Cineduca5]}
          modalLink='https://www.instagram.com/p/C5lxjtILEBe/?utm_source=ig_web_copy_link'
        />
         <Project 
          imageSrc={Trilhas}
          description='No projeto de extensão "Trilhas Digitais", criei um post de Instagram focado na Geração Z e golpes na internet.'
          modalLink='https://www.instagram.com/p/C7FSddluXC8/?igsh=MW0zYmd4YmM3emRhNg=='
          title='Trilhas Digitais'
          modalImages={[Trilhas, Trilhas2, Trilhas3, Trilhas4, Trilhas5, Trilhas6, Trilhas7]}
          link='https://www.instagram.com/p/C7FSddluXC8/?igsh=MW0zYmd4YmM3emRhNg=='
        />
      </div>
    </div>
  );
}
