import type { NextPage } from 'next'
import React, { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ProjectsModal from '../components/home/ProjectsModal';
import TechStackSection from '../components/home/TechStackSection';
import ExperienceSection from '../components/home/ExperienceSection';
import ProjectsSection from '../components/home/ProjectsSection';
import LinksSection from '../components/home/LinksSection';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
    revalidate: 10,
  };
};

const Home: NextPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImgPath, setCurrentImgPath] = useState('');

  return (
    <>
      { modalIsOpen && <ProjectsModal imgPath={currentImgPath} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> }
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
