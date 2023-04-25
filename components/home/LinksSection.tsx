import { useTranslation } from "react-i18next";

import Section from "../Section";
import Heading from "../Heading";
import SiteLink from "../SiteLink"

const LinksSection = () => {
    const { t } = useTranslation();
  
    return (
      <Section>
        <Heading text={'Links'} />
        <SiteLink text={'CV in PDF'} href={'/files/Jamil R. Derzi - CV - EN.pdf'} />
        <SiteLink text={'Github'} href={'https://github.com/Fakez'} />
        <SiteLink text={'Linkedin'} href={'https://www.linkedin.com/in/jamil-derzi/'} />
        <SiteLink text={t('common:footer-phone')} href={'https://api.whatsapp.com/send?phone=5511995242134&text=Olá, tenho interesse em seus serviços.'} />
        <SiteLink text={'Email'} href={'mailto:drzjamil@gmail.com'} />
      </Section>
    )
}

export default LinksSection;