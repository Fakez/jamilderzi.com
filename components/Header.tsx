import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";


const Header = () => {
  const { t } = useTranslation();

  return (
    <header className='flex flex-col items-left my-12 xl:my-16 xl:items-center xl:justify-center xl:text-center'>
      <h1 className='flex flex-col gap-4 text-5xl font-extrabold xl:text-6xl'>
        Jamil Derzi <span className='block text-xl font-bold xl:text-2xl'>{t('common:header-subtitle')}</span>
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