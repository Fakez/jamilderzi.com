import { useTranslation } from "react-i18next";

import Section from "../Section";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const TechStackSection = () => {
    const { t } = useTranslation();
  
    return (
      <Section>
        <Heading text='Tech stack' />
        <Paragraph text={'Frontend: HTML, CSS, Javascript, React, Next.js'} />
        <Paragraph text={'Backend: Django, Ruby on Rails, Node.js'} />
        <Paragraph text={`${t('home:databases')}: PostgreSQL, MongoDB`} />
        <Paragraph text={`${t('home:tools')}: Git, Docker, Heroku, AWS`} />
      </Section>
    );
}

export default TechStackSection;
