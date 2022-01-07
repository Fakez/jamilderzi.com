import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import SiteLink from "../SiteLink"

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

export default LinksSection;