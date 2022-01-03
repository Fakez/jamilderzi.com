import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";


const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='sticky top-0 bg-white z-50 border-b '>
      
    </header>
  );
}

export default Header;