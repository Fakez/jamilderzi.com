import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Paragraph from "../Paragraph";

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

export default ExperienceSection;