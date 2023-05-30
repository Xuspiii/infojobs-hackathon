import { ToggleAccess } from "../components/ToggleAccess";
import "./homepage.css";

export function Homepage() {
  return (
    <section className="homepage-section">
      <div className="home-info-container">
        <header>
          <h2 className="welcome">
            Bienvenida/o a la nueva funcionalidad de Infojobs
          </h2>
          <h1 className="title">Pruebas técnicas integradas</h1>
        </header>

        <div className="info">
          <p>
            Con esta funcionalidad, las empresas pueden optar por incluir
            pruebas técnicas en sus ofertas de empleo, proporcionando una vía
            para que los candidatos demuestren sus habilidades prácticas
            directamente en la plataforma.
          </p>
          <p>
            Esta funcionalidad no solo simplifica el proceso de contratación al
            gestionar las pruebas técnicas dentro de InfoJobs, sino que también
            permite a los candidatos destacar más allá de su currículum,
            mostrando sus habilidades.
          </p>
          <p className="homepage-disclaimer">
            <strong>Nota:</strong> Esta aplicación presenta una versión
            simplificada de la interfaz de InfoJobs, con el fin de centrarse en
            la demostración de la nueva funcionalidad de pruebas técnicas
            integradas.
          </p>
        </div>
        <ToggleAccess />
      </div>
    </section>
  );
}
