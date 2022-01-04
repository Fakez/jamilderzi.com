import { useTranslation } from "react-i18next";

import Heading from "./Heading";
import SiteLink from "./SiteLink";

const Footer = () => {
  const { t } = useTranslation();

    return (
      <footer className="">
        <Heading text={'Links'} />
        <SiteLink text={'Github'} href={'https://github.com/Fakez'} />
        <SiteLink text={'Linkedin'} href={'https://www.linkedin.com/in/jamil-derzi/'} />
        <SiteLink text={t('common:footer-phone')} href={'https://api.whatsapp.com/send?phone=5511995242134&text=Olá, tenho interesse em seus serviços.'} />
        <SiteLink text={'Email'} href={'mailto:drzjamil@gmail.com'} />
        <p className="text-xs mt-20 mb-5">JRD SERVICOS E SOFTWARE LTDA<br /> CNPJ 43.348.054/0001-55</p>
      </footer>
    )
  }

export default Footer;