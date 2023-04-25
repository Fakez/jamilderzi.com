import { useTranslation } from "react-i18next";

import Section from "../Section";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const ExperienceSection = () => {
    const { t } = useTranslation();
  
    return (
      <Section>
        <Heading text={t('home:experience')} />
        <Paragraph text={t('home:experience5')} />
        <div className="text-sm ml-5">
          <p>{t('home:experience5-stack')}</p>
          <p>{t('home:experience5-text')}</p>
        </div>
        <Paragraph text={t('home:experience4')} />
        <div className="text-sm ml-5">
          <p>{t('home:experience4-stack')}</p>
          <p>{t('home:experience4-text')}</p>
        </div>
        <Paragraph text={t('home:experience3')} />
        <div className="text-sm ml-5">
          <p>{t('home:experience3-stack')}</p>
          <p>{t('home:experience3-text')}</p>
        </div>
        {/* <Paragraph text={t('home:experience2')} /> */}
        <Paragraph text={t('home:experience1')} />
        <div className="text-sm ml-5">
          <p>{t('home:experience1-stack')}</p>
          <p>{t('home:experience1-text')}</p>
        </div>
      </Section>
    );
}

export default ExperienceSection;