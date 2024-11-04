import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ChapterScene from "./ImageImport";


export const ChapterComponent: React.FC =()=> {
const navigate = useNavigate();

const handleNavigation= ()=> {
  navigate("/list");
}

    return (
        <div>
        <header>
            <Link to="/">
      <img src={ChapterScene.logo} alt="El Mito de Giralda" />
      <p>El Mito de <br />Giralda</p></Link>
      </header>
       <div className="container">
      <div className="panel2">
        <p>Hola, lector. Este es mi proyecto más preciado y en el que he puesto más esfuerzo hasta ahora.
            <br /><br />
          Es un intento de combinar una serie española con un manga/anime, con cosas de Word por el medio... 
          Es un batiburrillo que he escrito porque encuentro el mundo de las series de
          toda la vida y de los animes de hoy en día muy banales. Entretenimiento y poco más. Creo de verdad que se puede pedir un poco más de cualquier creación y de su propósito y que se puede profundizar más en los temas y conclusiones que presentas.
          <br /><br />
     Empecé a "escribir" El mito de Giralda más o menos cuando comencé a buscar trabajo y entre estudios y currículums, no he sido todo lo constante
     que he querido a la hora de seguirlo, así que quizá la temática y mi situación vayan unidos de la mano por ello.
     <br />
          Con el Mito de Giralda intento hacer algo que despunte como más interesante en temática y argumento.  Si esta parte va bien, no dudaré en escribir otra. Este viaje acaba de empezar, para ti, para mí y espero que para mucha gente más.
          Es una obra muy pictórica para que puedas interpretar todo lo que ocurre en él. Es bastante experimental con todas estas flechas imágenes y monigotes dando vueltas, así que ya me contarás
          si ha funcionado o no. No te distraigo más. 
          <br /><br />
          ¡Que aproveche y muchas gracias por entrar en la web!
            </p>
            </div>
      <div className="panel">
         <h1>El mito de Giralda. Introducción</h1>
        <h2>Capítulo 1</h2>
        <div className="obra">
          
           <img src={ChapterScene.portada} className="oeuvre" data-index="0" alt="El mito de Giralda por Jorge Miranda" />
        
           
           <img src={ChapterScene.portada2} className="oeuvre" data-index="0" alt="“Para todas aquellas manos encallecidas que escribieron las hazañas de aquellos que por casa tienen el Cielo y que, sin embargo, no consiguieron desenmarañar el secreto al que esta diestra escritura ha llegado. Para todos aquellos que el nombre de la diosa Giralda sea oscuro o difuso y en cuya misma ignominia se vea reflejado el resultado de los hados. En toda la tierra de España, 
             se cuentan desde siglos la razón de su viaje y los grandes hallazgos que la llevaron a agrandar su leyenda”. " />
        
           
           <img src={ChapterScene.escena1} className="oeuvre" data-index="1" alt="En el cielo, más allá de las nubes, también hay
        gente buscando sus trapicheos celestiales. Ahora mismo hay una cola de ellos esperando a entrar para una entrevista." />
        
           
            <img src={ChapterScene.escena2} className="oeuvre" data-index="2" alt="Entre ellos, hay una mujer muy campechana que va vestida de la dama de Elche. Su tocado
        es tan grande que cada vez que la cola avanza, se le cae." />
        
          
            <img src={ChapterScene.escena3} className="oeuvre" data-index="3" alt="Anda un poco aburrida, así que gira la cabeza para ver cómo va la cola.
     ¡Nah! Hay mucha gente aún..." />
        
           
           <img src={ChapterScene.escena4} className="oeuvre" data-index="4" alt="Se gira y ve a la persona que tiene detrás. El muy cochino tiene las uñas mordidas" />
                
        
          
           <img src={ChapterScene.escena5} data-index="5" className="oeuvre" alt="La cola avanza y se le mueve el tocado. Segunda vez. Ya va caldeada." />
            
        
           
           <img src={ChapterScene.escena6} data-index="6" className="oeuvre" alt="Vuelve a avanzar, se le vuelve a mover el tocado, le jura que lo va a incinerar junto a toda su familia
    y le llama su madre, que está muy nerviosa, y le da la plasta y ella se enfada más... Esto es un festival de la comedia" />
        
          
            <img src={ChapterScene.escena7} data-index="7" className="oeuvre" alt="Cuelga, aprieta una bola antiestrés que tenía guardada en el bolso y mira hacia arriba. El edificio al que va a entrar se llama Plus Ultra" />
            
        
           
    <img src={ChapterScene.escena8} data-index="8" className="oeuvre" alt="Total, que ya ha entrado. La recepción es un bar de pinchos de toda la vida y dentro hay una empresaria que está entre el soponcio y el teatro, que también se lo trae de fábrica.
     La tipa esta le ofrece una copa. Ella acepta, pero entonces la empresaria le dice que no se la va a dar, que qué empleada sería si bebiese delante de su jefa, entonces ella puntualiza que AÚN no ha sido contratada y se siente muy tonta. " />             
     
        
          
           <img src={ChapterScene.escena9} data-index="9" className="oeuvre" alt="Ahora viene la empresaria esta y la acaba sirviendo, 
    la riñe porque no ha bebido y ella sale como puede diciendo que aún queda entrevista, que ya se la tomará, lo que es una contradicción de narices con lo que ha dicho antes y... Sí, todos los alts van a ser así." />
            
        
           
            <img src={ChapterScene.escena10} data-index="10" className="oeuvre" alt="La empresaria se llama Adina Grana. Se presenta y dice que necesitan a alguien que se encargue de la propagación de cultura española al exterior, porque los mortales como que no están haciendo
     muy buen trabajo, así que tienen que ir los del cielo a resolver el asunto. Tras esto, la pregunta dónde ha trabajado. Por cierto, la entrevistada se llama Giralda Vantes. La cuestión es que dice que dice ha trabajado en Difusión Lingüística. Adina la espeta diciendo básicamente que ese trabajo no es para tanto. 
    Que la empresa casi se suicida al intentar una palabra en bable para tupper. Giralda la intenta copiar el tono con un chistecito de valencianos, pero está claro que Adina tiene algo en contra de los asturianos porque la amenaza diciendo que cuidadín con lo que dices. Por el momento el asunto pinta mal para Giralda" />
            
        
          
            <img src={ChapterScene.escena11} data-index="11" className="oeuvre" alt="Adina aclara: Quiero alguien para Japón en concreto. ¿Cómo vas de japonés? Giralda sabe euskera, que es lo más parecido y Adina le saca el sarcasmo otra vez y acaba preguntándola que hacía exactamente en
                         difusión lingüística. Giralda le explica que estuvo en mantenimiento de lenguas y la explica una aventura (no seas mal pensado) que tuvo con un mortal que sabía aranés y con el que hizo un plan super elaborado para que tuviese un harem de mujeres con los que compartir su aranés." />
            
        
           
           <img src={ChapterScene.escena12} data-index="12" className="oeuvre" alt="Adina se lo imagina y la pide que pare y la pregunta por qué ha venido. Entonces, Giralda se marca un discursito en el que la cuenta si le gusta el español, que si las estucherías so unas tontas porque
                         son más de escribir las cosas y ella es más de comunicación oral. Luego compara el inglés con un dron que viene y que va y es un incordio para acabar diciendo que los españoles son tontos y por eso tienes que ayudarnos, todo con mucho desparpajo y labia, la jodía." />
             
        
          
            <img src={ChapterScene.escena12} data-index="13" className="oeuvre" alt="Entre otras cosas, se le va la lengua declarando que no está allí para desarrollarse como persona, que eso lo tiene superado, así que acaba la intervención como pensando que la ha cagado pero mucho. ¡Sorpresa, sorpresa!
                          Resulta que a Adina le gusta esa actitud tan directa y alejada de chorradas que lleva la niña. Confiesa que el trabajo en Japón va a ser bastante desagradable y como ella ya parece acostumbrada, pues que la pilla. Eso y que ha metido la pata enviando los email a los entrevistados y que prefiere
                          pegarse un tiro antes de seguir con más entreevistas." />
        
           
            <img src={ChapterScene.escena13} data-index="14" className="oeuvre" alt="Adina la pone a prueba intentando que firme una servilleta como contrato, pero Giralda no cae en la trampa y la dice que le enviará el de verdad a su cuenta de mail. Giralda se la da y se despiden." />
        
          
            <img src={ChapterScene.escena13} className="oeuvre" data-index="15" alt="...A ver, en verdad, como Adina se lo ha pedido amablemente, va corriendo hacia la salida.
          Sale y manda a cagar a todos y cada uno de los candidatos que faltaban en la cola con una chulería que yo por lo menos no se la permitiría en el lugar de ellos." />
        
           
            <img src={ChapterScene.escena14} className="oeuvre" data-index="16" alt="Al día siguiente, Giralda ya tiene todo firmado y se reune con Adina. Intercambia un chascarrillo sobre su cambio de ropa a uno menos rimbombante y Adina le comenta que no quiere enseñarle todo el edificio y
              que para eso está un tal Deremnis que aparece en acción: un ángel" />
          
        
          
            <img src={ChapterScene.escena15} data-index="17" className="oeuvre" alt="Adina les deja solitos en el ascensor y resulta que el angel se siente muy raro con toda esta situación porque le contrataron en el último minuto
          para tener a alguien que supiese hablar japonés, convirtiendo a Giralda en su jefa. Muy raro para los dos."/>
        
           
            <img src={ChapterScene.escena16} data-index="18" className="oeuvre" alt="Salen del ascensor y Giralda dice que mejor que se habitúen a su dinámica, así que se presentan, ella le pregunta por la razón por la que trabaja allí y él comienza a soltarle la parrafada habitual de quiero progresar en 
            mi carrera profesional, que si es una oportunidad... así que Giralda le detiene y vigila que Adina no esté cerca para escucharlo" />
        
          
            <img src={ChapterScene.escena17} data-index="19" className="oeuvre" alt="Llegan a la oficina de la división asiática de Propagación de cultura. Está petada y tienen que sortear a todos los trabajadores hasta llegar al lugar que se les ha destinado, que ni sillas tiene." />
        
           
            <img src={ChapterScene.escena18} className="oeuvre" data-index="20" alt="Se instalan y Giralda le pregunta por lo que tiene que hacer exactamente. Él le dice que el ordenador funciona con Heaven Analytics. Ella se burla respondiendo que hasta el microondas funciona
              con Heaven. Él le añade una lista de palabros raros para callarle la boca, que así está más guapa." />
        
          
            <img src={ChapterScene.escena19} className="oeuvre" data-index="21" alt="Giralda simplifica su trabajo a asignar palabras específicas a base de posicionamiento SEC a las almas mortales para acercarlas a la cultura española. Va a buscar información de los antiguos trabajadores
              , pero son unos rencorosos y le han dejado una notita en la que pone que no la van a dar ni agua" />
        
           
            <img src={ChapterScene.escena20} className="oeuvre" data-index="22" alt="Giralda se caga en todo y decide ir a Heaven Analytics. El ordenador celestial va a su ritmo, así que pregunta a Deremnis donde estudió. Estudié en Gabriel, dice. ¿Cómo es que un ángel se mete en rollos manipuladores de almas.
            Necesito trabajar. Ajá, OK." />
          
        
         </div>
        <div className="flechas">
          <h2>Otros capítulos</h2>
       <div> 
        <Link to="/second">
       
         <img src={ChapterScene.parte2} alt="El Mito de Giralda: Capítulo 2" />
         
         </Link>
                        
          
          
         <Link to="/third">
            
         <img src={ChapterScene.parte3} alt="El Mito de Giralda: Capítulo 3" />             
          
          </Link>

          <Link to="/forth">
           
         <img src={ChapterScene.parte4} alt="El Mito de Giralda: Capítulo 4" />
            
            </Link>

        <Link to="/fifth">        
           
         <img src={ChapterScene.parte5} alt="El Mito de Giralda: Capítulo 5" />
            
            </Link>

            <Link to="/sixth">
          
         <img src={ChapterScene.parte6} alt="El Mito de Giralda: Capítulo 6" />          
          
          </Link>

          <Link to="/seventh">
           
         <img src={ChapterScene.parte7} alt="El Mito de Giralda: Capítulo 7" />          
          
          </Link>

          <Link to="/eighth">
         
         <img src={ChapterScene.parte8} alt="El Mito de Giralda: Capítulo 8" />          
          
          </Link>

          <Link to="/nineth">
         
         <img src={ChapterScene.parte9} alt="El Mito de Giralda: Capítulo 9" />             
          
            </Link>

            <Link to="/tenth">
                     
         <img src={ChapterScene.parte10} alt="El Mito de Giralda: Capítulo 10" />
                        
          </Link>
                      </div>
      </div>
    </div>
    </div>
  </div>
    )
}