import React from "react";
import { SynopsisStyle } from "../styles/SynopsisStyle";
import Poster from "../../../assets/movies assets/poster-films/R5572bcc20c14c151f1339c2774df892e.png";
import director from "../../../assets/movies assets/poster-films/Ra3bad80e65554727fd77910916b5767c.png";

export default function Sinopsis() {
  return (
    <SynopsisStyle>
      <div className="overview">
        <h2>Synopsis</h2>
        <h3>tagline</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          voluptates numquam consequuntur, ab autem commodi doloribus, vel porro
          repellat libero assumenda aspernatur modi, molestiae molestias
          quibusdam quo neque? Non, suscipit. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ullam perspiciatis amet officiis,
          assumenda recusandae sunt beatae facere quas vero aliquid dolor a non
          laborum, alias voluptatum quibusdam eius impedit deleniti! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Natus recusandae corporis
          et, voluptas nisi rem dolorem hic perspiciatis dolor, assumenda
          provident, amet animi voluptates harum iusto perferendis. Unde tenetur
          autem aperiam dolorem eaque illo est tempore suscipit in reiciendis
          maiores ex, culpa dignissimos ducimus. Unde laudantium recusandae
          voluptates enim animi tenetur ex voluptate quibusdam! Dicta inventore
          voluptas pariatur aperiam voluptate officia blanditiis. Perspiciatis
          dolorum beatae assumenda. Reiciendis nesciunt, voluptates vitae
          obcaecati quos dolorem odio ipsum sed, iure a officia veritatis
          assumenda quo facilis accusantium commodi soluta sint? Excepturi porro
          iste magnam repellat officiis illo ipsam animi. Eius ullam inventore
          repudiandae, et mollitia eos voluptas dolor ducimus reprehenderit
          quaerat aperiam quasi dolorem ratione beatae blanditiis, sit
          doloribus, at laudantium. Dolore, delectus fugiat? Necessitatibus
          eveniet sed, nemo quisquam consectetur possimus illum inventore
          nesciunt, vitae, doloremque sint! Quisquam numquam quidem voluptate
          blanditiis ipsam sequi reprehenderit aspernatur nihil error quam?
          Distinctio quae deleniti rerum dolorum voluptatum, repellat,
          temporibus voluptate, nulla perspiciatis atque odio ratione rem vero.
          Perspiciatis assumenda pariatur natus nesciunt animi reiciendis
          mollitia quaerat autem cum, error consectetur nihil voluptatem,
          tempora aspernatur incidunt quibusdam nemo. Ad, soluta maxime?
          Deleniti distinctio pariatur reiciendis sequi, magni quas quod magnam
          aliquam vitae vel harum soluta a possimus sapiente exercitationem
        </p>
        <ul className="categories">
          <li>Catégories 1</li>
          <li>Catégories 2</li>
          <li>Catégories 3</li>
          <li>Catégories 4</li>
          <li>Catégories 5</li>
        </ul>
        <ul className="directors">
          <li>
            <img src={director} alt="poster du film" width="100" height="100" />
            <p>Réalisateur</p>
          </li>
        </ul>
      </div>
      <div className="poster">
        <img src={Poster} alt="poster du film" />
      </div>
    </SynopsisStyle>
  );
}
