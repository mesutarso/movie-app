import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Container titre="Tendances" />
      <Container titre="Les Films" />
      <Container titre="Les Series" />
      <Footer />
    </div>
  );
}
