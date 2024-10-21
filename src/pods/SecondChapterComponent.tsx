import React from 'react'
import { Link } from 'react-router-dom'
import * as ChapterScene from './ImageImport'

export const SecondChapterComponent = () => {
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
        <h2>Capítulo 2</h2>
        <div className="flechas">
          <h2>Otros capítulos</h2>
          <div>
            <Link to="/">
              <div>
                <img
                  src={ChapterScene.parte1}
                  alt="El Mito de Giralda: Capítulo 1"
                />
              </div>
            </Link>

            <div>
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

              <Link to="/fifth">
                <div>
                  <img
                    src={ChapterScene.parte5}
                    alt="El Mito de Giralda: Capítulo 5"
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
        </div>

        <div className="obra">
          <div className="text">
            <img
              src={ChapterScene.escena21}
              className="oeuvre"
              data-index="23"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena22}
              className="oeuvre"
              data-index="24"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena23}
              className="oeuvre"
              data-index="25"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena24}
              className="oeuvre"
              data-index="26"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena25}
              className="oeuvre"
              data-index="27"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena26}
              className="oeuvre"
              data-index="28"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena27}
              className="oeuvre"
              data-index="29"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena28}
              className="oeuvre"
              data-index="30"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena29}
              className="oeuvre"
              data-index="31"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena30}
              className="oeuvre"
              data-index="32"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena31}
              className="oeuvre"
              data-index="33"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena32}
              className="oeuvre"
              data-index="34"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena33}
              className="oeuvre"
              data-index="35"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena34}
              className="oeuvre"
              data-index="36"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena35}
              className="oeuvre"
              data-index="37"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena36}
              className="oeuvre"
              data-index="38"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena37}
              className="oeuvre"
              data-index="39"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena38}
              className="oeuvre"
              data-index="40"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena39}
              className="oeuvre"
              data-index="41"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena40}
              className="oeuvre"
              data-index="42"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena41}
              className="oeuvre"
              data-index="43"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena42}
              className="oeuvre"
              data-index="44"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flechas">
        <h2>Otros capítulos</h2>
        <div>
          <Link to="/">
            <div>
              <img
                src={ChapterScene.parte2}
                alt="El Mito de Giralda: Capítulo 1"
              />
            </div>
          </Link>

          <div>
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

            <Link to="/fifth">
              <div>
                <img
                  src={ChapterScene.parte5}
                  alt="El Mito de Giralda: Capítulo 5"
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
      </div>
    </div>
  )
}
