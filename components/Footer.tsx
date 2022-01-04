import { useTranslation } from "react-i18next";

import Heading from "./Heading";
import SiteLink from "./SiteLink";

const Footer = () => {
  const { t } = useTranslation();

    return (
      <footer className="text-xs mt-20 mb-5">
        <p>JRD SERVICOS E SOFTWARE LTDA<br /> CNPJ 43.348.054/0001-55</p>
      </footer>
    )
  }

export default Footer;