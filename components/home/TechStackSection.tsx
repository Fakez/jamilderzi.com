import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Paragraph from "../Paragraph";

const TechStackSection = () => {
    const { t } = useTranslation();
  
    return (
      <section className='my-10'>
        <Heading text='Tech stack' />
        <Paragraph text={'Frontend: HTML, CSS, Javascript, React, Next.js'} />
        <Paragraph text={'Backend: Django, Ruby on Rails, Node.js'} />
        <Paragraph text={`${t('home:databases')}: PostgreSQL, MongoDB`} />
        <Paragraph text={`${t('home:tools')}: Git, Docker, Heroku, AWS`} />
      </section>
    );
}

export default TechStackSection;
