import './qualifications.css';
import Profes from '../props/Profes.png'
import Zshop from '../props/Zshop.png'
import Wheel from '../props/Wheel.png'
import Dashboard from '../props/dashboard.png'

//Portfolio function
const Portfolio = () => {
    const soloProjects = [
      {
        id: 1,
        title: "Plataforma profesores colombianos",
        img: Profes,
        description:
          "Esta es una pagina web donde se podra encontrar material de clase para los profesores de colombia.",
        technologies: "Html | React. js |",
        link: "https://ideas-project-final.vercel.app/carouselcomponent",
        github: "https://github.com/CarlosEmartinezC/ideas-project-final.git",
      },
      {
        id: 2,
        title: "Zshop",
        img: Zshop,
        description:
          "Diseño atractivo y llamativo de landing page con css, y html, con cuatro pestañas de navegabilidad.",
        technologies: "html|css|git|",
        link: "https://neyryvargasd.github.io/zshop-2/single.html",
        github: "https://github.com/NeyryVargasD/zshop-2.git",
      },
      {
        id: 3,
        title: "Wheel of doom",
        img: Wheel,
        description: "Juego basado en colombia.",
        technologies: "Html| Css | JavaScript",
        link: "https://deploy-preview-16--wheel-of-doom-colombia.netlify.app/",
        github: "https://github.com/Juanpak12/Hide_in_the-world-B13.git",
      },
      {
        id: 4,
        title: "Dashboard",
        img: Dashboard ,
        description:
          "App de consumo de API. ",
        technologies: "Html | CSS | React.Js",
        link: "https://cripto-d.vercel.app/",
        github: "https://github.com/NeyryVargasD/cripto-D",
      },
      
    ];
  
    return (
        
      <section id="portfolio">
        <div className='Portafolio'>
        <h5>Mis trabajos recientes </h5>
        <h2>Portafolio</h2>
        </div>
        <div className="container portfolio__container">
          {soloProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      
    );
  };
  
  export default Portfolio;