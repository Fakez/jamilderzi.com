import type { NextPage } from 'next'
import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
    revalidate: 10,
  };
};

const Home: NextPage = () => {


  return (
    <>
      Hello world
    </>
  )
}

export default Home
