import './qualifications.css';
import Deezer from '../props/dezeer.png'
import Sabujcha from '../props/sabujcha.png'
import Pokedex from '../props/pokedex.png'
import Dashboard from '../props/dashboard.png'

//Portfolio function
const Portfolio = () => {
    const soloProjects = [
      {
        id: 1,
        title: "Diseño de deezer con CSS",
        img: Deezer,
        description:
          "Diseño de landing page con css",
        technologies: "Html | CSS ",
        link: "https://neyryvargasd.github.io/Paginadeezer/",
        github: "https://github.com/NeyryVargasD/Paginadeezer",
      },
      {
        id: 2,
        title: "Sabujcha ",
        img: Sabujcha,
        description:
          "Sabujcha es una nueva marca de té matcha que busca incursionar",
        technologies: "html|css|git|",
        link: "https://neyryvargasd.github.io/sabujcha/",
        github: "https://github.com/NeyryVargasD/Paginadeezer",
      },
      {
        id: 3,
        title: "Pokedex",
        img: Pokedex ,
        description: "Consumo de api ",
        technologies: "Html| Css | JavaScript",
        link: "https://neyryvargasd.github.io/pokedex/",
        github: "https://github.com/NeyryVargasD/pokedex",
      },
      {
        id: 4,
        title: "Dashboard",
        img: Dashboard ,
        description:
          "App de consumo de API ",
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