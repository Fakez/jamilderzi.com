import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";


const Header = () => {
  const { t } = useTranslation();

  return (
    <header className='flex flex-col items-center my-20 xl:justify-center'>
      <h1 className='flex flex-col gap-4 xl:text-center'>
        <span className='text-5xl font-extrabold xl:text-7xl'>Jamil Derzi</span>
        <p className='text-2xl font-bold xl:text-3xl'>{t('common:header-subtitle')}</p>
      </h1>
      <div className="my-5 text-sm">
        <Link href='/' locale='en'>
          <a className="hover:opacity-60 capitalize">English</a>
        </Link>
        <span> | </span>
        <Link href='/' locale='pt-BR'>
          <a className="hover:opacity-60 capitalize">Português</a>
        </Link>
      </div>
    </header>
  )
}

export default Header;