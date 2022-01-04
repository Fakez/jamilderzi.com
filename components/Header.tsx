import React from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t } = useTranslation();

  return (
    <header className='flex items-center my-20 xl:justify-center'>
      <h1 className='flex flex-col gap-4 xl:text-center'>
        <span className='text-5xl font-extrabold xl:text-7xl'>Jamil Derzi</span>
        <p className='text-2xl font-bold xl:text-3xl'>{t('common:header-subtitle')}</p>
      </h1>
    </header>
  )
}

export default Header;