import { useTranslation } from "react-i18next";

import Section from "../Section";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const ExperienceSection = () => {
    const { t } = useTranslation();
  
    return (
      <Section>
        <Heading text={t('home:experience')} />
        <Paragraph text={t('home:experience1')} />
        <Paragraph text={t('home:experience2')} />
        <Paragraph text={t('home:experience3')} />
      </Section>
    );
}

export default ExperienceSection;