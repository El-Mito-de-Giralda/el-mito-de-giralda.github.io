import React from 'react'
import { Link } from 'react-router-dom'
import * as ChapterScene from './ImageImport'

export const FifthChapterComponent = () => {
  return (
    <div>
      <Link to="/">
        <header>
          <img src={ChapterScene.logo} alt="El Mito de Giralda" />
          <p>
            <span>El mito de Giralda</span>
          </p>
        </header>
      </Link>
      <div className="container"></div>
      <div className="panel">
        <h1>El mito de Giralda. Introducción: </h1>
        <h2>Capítulo 5</h2>

        <div className="flechas">
          <h2>Otros capítulos</h2>
          <Link to="/">
            <div>
              <img
                src={ChapterScene.parte1}
                alt="El Mito de Giralda: Capítulo 1"
              />
            </div>
          </Link>

          <div>
            <Link to="/second">
              <div>
                <img
                  src={ChapterScene.parte2}
                  alt="El Mito de Giralda: Capítulo 2"
                />
              </div>
            </Link>

            <Link to="/third">
              <div>
                <img
                  src={ChapterScene.parte3}
                  alt="El Mito de Giralda: Capítulo 3"
                />
              </div>
            </Link>

            <Link to="/forth">
              <div>
                <img
                  src={ChapterScene.parte4}
                  alt="El Mito de Giralda: Capítulo 4"
                />
              </div>
            </Link>

            <Link to="/sixth">
              <div>
                <img
                  src={ChapterScene.parte6}
                  alt="El Mito de Giralda: Capítulo 6"
                />
              </div>
            </Link>

            <Link to="/seventh">
              <div>
                <img
                  src={ChapterScene.parte7}
                  alt="El Mito de Giralda: Capítulo 7"
                />
              </div>
            </Link>

            <Link to="/eighth">
              <div>
                <img
                  src={ChapterScene.parte8}
                  alt="El Mito de Giralda: Capítulo 8"
                />
              </div>
            </Link>

            <Link to="/nineth">
              <div>
                <img
                  src={ChapterScene.parte9}
                  alt="El Mito de Giralda: Capítulo 9"
                />
              </div>
            </Link>

            <Link to="/tenth">
              <div>
                <img
                  src={ChapterScene.parte10}
                  alt="El Mito de Giralda: Capítulo 10"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="obra">
          <div className="text">
            <img
              src={ChapterScene.escena87}
              className="oeuvre"
              data-index="89"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena88}
              className="oeuvre"
              data-index="90"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena89}
              className="oeuvre"
              data-index="91"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena90}
              className="oeuvre"
              data-index="92"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena91}
              className="oeuvre"
              data-index="93"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena92}
              className="oeuvre"
              data-index="94"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena93}
              className="oeuvre"
              data-index="95"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena94}
              className="oeuvre"
              data-index="96"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena95}
              className="oeuvre"
              data-index="97"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena96}
              className="oeuvre"
              data-index="98"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena97}
              className="oeuvre"
              data-index="99"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena98}
              className="oeuvre"
              data-index="100"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena99}
              className="oeuvre"
              data-index="101"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena100}
              className="oeuvre"
              data-index="102"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena101}
              className="oeuvre"
              data-index="103"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena102}
              className="oeuvre"
              data-index="104"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena103}
              className="oeuvre"
              data-index="105"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena104}
              className="oeuvre"
              data-index="106"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena105}
              className="oeuvre"
              data-index="107"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena106}
              className="oeuvre"
              data-index="108"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena107}
              className="oeuvre"
              data-index="109"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena108}
              className="oeuvre"
              data-index="110"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flechas">
        <h2>Otros capítulos</h2>
        <Link to="/">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (1).webp"
              alt="El Mito de Giralda: Capítulo 1"
            />
          </div>
        </Link>

        <Link to="/second">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (2).webp"
              alt="El Mito de Giralda: Capítulo 2"
            />
          </div>
        </Link>

        <Link to="/third">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (3).webp"
              alt="El Mito de Giralda: Capítulo 3"
            />
          </div>
        </Link>

        <Link to="/forth">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (4).webp"
              alt="El Mito de Giralda: Capítulo 4"
            />
          </div>
        </Link>

        <Link to="/sixth">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (6).webp"
              alt="El Mito de Giralda: Capítulo 6"
            />
          </div>
        </Link>

        <Link to="/seventh">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (7).webp"
              alt="El Mito de Giralda: Capítulo 7"
            />
          </div>
        </Link>

        <Link to="/eighth">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (8).webp"
              alt="El Mito de Giralda: Capítulo 8"
            />
          </div>
        </Link>

        <Link to="/nineth">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (9).webp"
              alt="El Mito de Giralda: Capítulo 9"
            />
          </div>
        </Link>

        <Link to="/tenth">
          <div>
            <img
              src="./images/Partes/El mito de Giralda Parte (10).webp"
              alt="El Mito de Giralda: Capítulo 10"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
