import { useTranslation } from "react-i18next";

import Section from "../Section";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const TechStackSection = () => {
    const { t } = useTranslation();
  
    return (
      <Section>
        <Heading text='Tech stack' />
        <Paragraph text={'Frontend: HTML, CSS, Javascript, React, Next.js, Vue, Tailwind CSS'} />
        <Paragraph text={'Backend: Django, Ruby on Rails, Node.js, Java Spring Boot'} />
        <Paragraph text={`${t('home:databases')}: PostgreSQL, MongoDB, Microsoft SQL Server`} />
        <Paragraph text={`${t('home:tools')}: Git, Docker, Heroku, AWS, Azure Dev Ops, Power BI, Tableau`} />
      </Section>
    );
}

export default TechStackSection;
