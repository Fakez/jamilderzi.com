import type { NextPage } from 'next'
import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";

import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import SiteLink from '../components/SiteLink'

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


const Home: NextPage = () => {

  return (
    <>
      <TechStackSection />
      <ExperienceSection />
      <LinksSection />
    </>
  )
}

export default Home
