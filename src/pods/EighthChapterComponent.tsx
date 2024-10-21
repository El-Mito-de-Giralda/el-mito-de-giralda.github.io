import React from 'react'
import { Link } from 'react-router-dom'
import * as ChapterScene from './ImageImport'

export const EighthChapterComponent = () => {
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
        <h2>Capítulo 8</h2>

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

            <Link to="/fifth">
              <div>
                <img
                  src={ChapterScene.parte6}
                  alt="El Mito de Giralda: Capítulo 5"
                />
              </div>
            </Link>

            <Link to="/sixth">
              <div>
                <img
                  src={ChapterScene.parte7}
                  alt="El Mito de Giralda: Capítulo 6"
                />
              </div>
            </Link>

            <Link to="/seventh">
              <div>
                <img
                  src={ChapterScene.parte8}
                  alt="El Mito de Giralda: Capítulo 7"
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
              src={ChapterScene.escena153}
              className="oeuvre"
              data-index="155"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena154}
              className="oeuvre"
              data-index="156"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena155}
              className="oeuvre"
              data-index="157"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena156}
              className="oeuvre"
              data-index="158"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena157}
              className="oeuvre"
              data-index="159"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena158}
              className="oeuvre"
              data-index="160"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena159}
              className="oeuvre"
              data-index="161"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena160}
              className="oeuvre"
              data-index="162"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena161}
              className="oeuvre"
              data-index="163"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena162}
              className="oeuvre"
              data-index="164"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena163}
              className="oeuvre"
              data-index="165"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena164}
              className="oeuvre"
              data-index="166"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena165}
              className="oeuvre"
              data-index="167"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena166}
              className="oeuvre"
              data-index="168"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena167}
              className="oeuvre"
              data-index="169"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena168}
              className="oeuvre"
              data-index="170"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena169}
              className="oeuvre"
              data-index="171"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena170}
              className="oeuvre"
              data-index="172"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena171}
              className="oeuvre"
              data-index="173"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena172}
              className="oeuvre"
              data-index="174"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena173}
              className="oeuvre"
              data-index="175"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src={ChapterScene.escena174}
              className="oeuvre"
              data-index="176"
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

          <Link to="/fifth">
            <div>
              <img
                src={ChapterScene.parte6}
                alt="El Mito de Giralda: Capítulo 5"
              />
            </div>
          </Link>

          <Link to="/sixth">
            <div>
              <img
                src={ChapterScene.parte7}
                alt="El Mito de Giralda: Capítulo 6"
              />
            </div>
          </Link>

          <Link to="/seventh">
            <div>
              <img
                src={ChapterScene.parte8}
                alt="El Mito de Giralda: Capítulo 7"
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
  )
}
