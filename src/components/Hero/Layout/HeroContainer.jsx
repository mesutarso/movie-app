import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { HeroContainerStyle } from "../styles/HeroContainerStyle";
import poster from "../../../assets/movies assets/mainImage.jpeg";
import { MovieContext } from "../../../context/MovieContext";
import { endpoints } from "../../../config/api/api";
import { useGenre } from "../../../hooks/useGenre";

export default function HeroContainer() {
  const [movies, setMovies, isLoading, setIsLoading] = useContext(MovieContext);
  const movie = movies.slice(0, 1)[0];
  const genreIDs = movie && movie.genre_ids;
  const genres = useGenre(genreIDs);
  const url = endpoints.image_url;

  console.log(movie);

  return (
    <HeroContainerStyle
      bgImage={movie && url + movie.backdrop_path}
      alignText="left"
    >
      <div className="heroContainer">
        <div className="heroContainer__detail">
          <p>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>

        <h1 className="heroContainer__title">{movie && movie.title}</h1>
        <Link className="heroContainer__link" to="/films">
          Trailer <FontAwesomeIcon icon={faPlayCircle} />
        </Link>
        <Link
          className="heroContainer__link heroContainer__link--details"
          to="/films"
        >
          Voir Plus <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
    </HeroContainerStyle>
  );
}
