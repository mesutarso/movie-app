import React from "react";
import LogoanDetail from "./layout/LogoAndDetail";
import FooterMenu from "./layout/FooterMenu";
import SocialNetworkContainer from "./layout/SocialNetworkContainer";
import NewsletterContainer from "./layout/NewsletterContainer";
import { FooterStyle } from "./styles/FooterStyle";

export default function Footer() {
  return (
    <FooterStyle>
      <LogoanDetail />
      <FooterMenu />
      <SocialNetworkContainer />
      <NewsletterContainer />
    </FooterStyle>
  );
}
