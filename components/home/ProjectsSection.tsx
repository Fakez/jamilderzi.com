import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import ProjectLink from "../ProjectLink";

const ProjectsSection = ({ setModalIsOpen, setCurrentImgPath }: 
    {
      setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
      setCurrentImgPath: React.Dispatch<React.SetStateAction<string>>
    }) => {
    const { t } = useTranslation();
  
    const projects = [
      {
        text: 'Dynasty Website',
        description: 'Next.js + Typescript + Tailwind CSS + Django',
        imgPath: '/images/dynasty-desktop.jpg',
      },
      {
        text: 'Dynasty OTC App',
        description: 'Ruby on Rails',
        imgPath: '/images/otc-desktop.jpg',
      },
      {
        text: 'Dynasty BI Dashboards',
        description: 'Next.js + Django + Google Cloud Functions + Power BI',
        imgPath: '/images/dynasty-dashboards-desktop.jpg',
      },
      {
        text: 'Contas de Fadas Ecommerce',
        description: t('home:project-contas-desc'),
        imgPath: '/images/contas-desktop.jpg',
      },
      {
        text: 'Jack Vartanian Ecommerce',
        description: 'HTML + CSS + Javascript + Vtex + Django',
        imgPath: '/images/jv-desktop.jpg',
      },
      {
        text: 'JV Toolbox',
        description: 'React + Django',
        imgPath: '/images/jvtoolbox-desktop.jpg',
      },
    ];
  
    return (
  
      <section className='my-10'>
        <Heading text={t('home:projects-title')} />
        
        { projects.map(project => (
          <ProjectLink key={project.text}
            text={project.text}
            description={project.description}
            imgPath={project.imgPath}
            setModalIsOpen={setModalIsOpen} 
            setCurrentImgPath={setCurrentImgPath} 
          />
        )) }
  
      </section>
    )
}

export default ProjectsSection;