import type { NextPage } from 'next'
import Image from 'next/image';
import React, { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";

import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import SiteLink from '../components/SiteLink'
import ProjectLink from '../components/ProjectLink';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
    revalidate: 10,
  };
};

const TechStackSection = () => {
  const { t } = useTranslation();

  return (
    <section className='my-10'>
      <Heading text='Tech stack' />
      <Paragraph text={'Frontend: HTML, CSS, Javascript, React, Next.js'} />
      <Paragraph text={'Backend: Django, Ruby on Rails, Node.js'} />
      <Paragraph text={`${t('home:databases')}: PostgreSQL, MongoDB`} />
      <Paragraph text={`${t('home:tools')}: Git, Docker, Heroku, AWS`} />
    </section>
  );
}

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className='my-10'>
      <Heading text={t('home:experience')} />
      <Paragraph text={t('home:experience1')} />
      <Paragraph text={t('home:experience2')} />
      <Paragraph text={t('home:experience3')} />
    </section>
  );
}

const LinksSection = () => {
  const { t } = useTranslation();

  return (
    <section className='my-10'>
      <Heading text={'Links'} />
      <SiteLink text={'Github'} href={'https://github.com/Fakez'} />
      <SiteLink text={'Linkedin'} href={'https://www.linkedin.com/in/jamil-derzi/'} />
      <SiteLink text={t('common:footer-phone')} href={'https://api.whatsapp.com/send?phone=5511995242134&text=Olá, tenho interesse em seus serviços.'} />
      <SiteLink text={'Email'} href={'mailto:drzjamil@gmail.com'} />
    </section>
  )
}

const ProjectsSection = ({ setModalIsOpen, setCurrentImgPath }: 
  {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentImgPath: React.Dispatch<React.SetStateAction<string>>
  }) => {
  const { t } = useTranslation();

  return (
    <section className='my-10'>
      <Heading text={t('home:projects-title')} />
      <ProjectLink 
        text={'Dynasty Website'}
        description='Next.js + Typescript + Tailwind CSS + Django'
        imgPath={'/images/dynasty-desktop.jpg'}
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
        />
      <ProjectLink 
        text={'Dynasty OTC App'}
        description='Ruby on Rails'
        imgPath={'/images/otc-desktop.jpg'}
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
        />
      <ProjectLink 
        text={'Dynasty BI Dashboards'}
        description='Next.js + Django + Google Cloud Functions + Power BI'
        imgPath={'/images/dynasty-dashboards-desktop.jpg'}
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
        />
      <ProjectLink 
        text={'Contas de Fadas Ecommerce'}
        description={t('home:project-contas-desc')}
        imgPath={'/images/contas-desktop.jpg'}
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
        />
      <ProjectLink 
        text={'Jack Vartanian Ecommerce'}
        description='HTML + CSS + Javascript + Vtex + Django'
        imgPath={'/images/jv-desktop.jpg'}
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
        />
      <ProjectLink 
        text={'JV Toolbox'}
        description='React + Django'
        imgPath={'/images/jvtoolbox-desktop.jpg'}
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
        />
    </section>
  )
}

const ProjectsModal = ({ imgPath, modalIsOpen, setModalIsOpen }:
   {
     imgPath: string,
     modalIsOpen: boolean,
     setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   }) => {
  return (
    <div className={modalIsOpen ? 'visible' : 'hidden'}>
      <div onClick={()=> setModalIsOpen(false)} className='fixed top-0 bottom-0 left-0 bg-black min-h-full min-w-full opacity-70 cursor-pointer'></div>
      <div className='centered-modal fixed w-11/12 h-fit top-1/2 left-1/2 xl:w-9/12' style={{minHeight: '10vh'}}>
        <div className='relative flex items-center justify-center'>
          <img className='w-full' src={imgPath}></img>
        </div>
        {/* <Image
          src={imgPath}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          className="object-cover object-center rounded shadow-lg"
        /> */}
      </div>
    </div>
  )
}

const Home: NextPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImgPath, setCurrentImgPath] = useState('');

  return (
    <>
      <ProjectsModal imgPath={currentImgPath} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection 
        setModalIsOpen={setModalIsOpen} 
        setCurrentImgPath={setCurrentImgPath} 
      />
      <LinksSection />
    </>
  )
}

export default Home
