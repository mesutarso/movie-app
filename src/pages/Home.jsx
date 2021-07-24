import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import { MovieProvider } from "../context/MovieContext";

export default function Home() {
  return (
    <MovieProvider>
      <Header />
      <Hero />
      <Container titre="Tendances" type="films" />
      <Container titre="Les Films" type="films" />
      <Container titre="Les Series" type="series" />
      <Footer />
    </MovieProvider>
  );
}
