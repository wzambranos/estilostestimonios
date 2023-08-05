import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
             <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
             <Testimonio
               nombre="Shawn Wang"
               pais="Singapore"
               imagen="shawn"
               cargo="Software Engineer"
               empresa="Amazon"
               testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life." />

             <Testimonio
              nombre="Sarah Chima"
              pais="Nigeria"
              imagen="sarah"
              cargo="Ingeniera de Sofware"
              empresa="ChatDesk"
              testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble." />

              <Testimonio
              nombre="Valentina Vargas"
              pais="Colombia"
              imagen="emma"
              cargo="Ingeniera de Sofware"
              empresa="Spotify"
              testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en"
              habilidades="freeCodeCamp me dio las habilidades"  
              habilidadestexto=" y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />
        
        </div>
    </div>
  );
}

export default App;
