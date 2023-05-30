/* eslint-disable react/prop-types */
import "./job-offer-card.css";
import { useState } from "react";

export function JobOfferCard({
  offerTitle,
  vacancyNumber,
  offerDescription,
  isTestIncluded,
  testDescription,
}) {
  const [expandedOffer, setExpandedOffer] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (offerTitle === "Disfrazarse de Mickey Mouse en la sagrada familia") {
      setMessage("¿Cómo vas a trabajar de esto? Tira a estudiar.");
      return;
    }
    isTestIncluded
      ? setMessage(
          "Sube tu respuesta a la prueba para poder inscribirte a esta oferta"
        )
      : setMessage("¿Pa' qué te inscribes si no te van a contratar?");
  };

  return (
    <div className="job-offer-card">
      <h2
        onClick={() => {
          setExpandedOffer(!expandedOffer);
          setMessage("");
        }}
        className="job-offer-title"
      >
        {offerTitle}
      </h2>
      <div className="job-offer-info-container">
        <span>Barcelona</span>
        <span>Presencial</span>
        <span>Hace 2h</span>
        <div className="job-offer-icon job-offer-new-icon">Nueva</div>
        {isTestIncluded && (
          <div className="job-offer-icon job-offer-test-icon">
            Prueba técnica
          </div>
        )}
      </div>
      {expandedOffer && (
        <>
          <h3>Descripción</h3>
          <p className="job-offer-description job-offer-description--expanded">
            {offerDescription}
          </p>
        </>
      )}
      {!expandedOffer && (
        <p className="job-offer-description job-offer-description--unexpanded">
          {offerDescription}
        </p>
      )}

      <div className="job-offer-info-container">
        <span>Contrato indefinido</span>
        <span>Jornada parcial</span>
        <span>Salario no disponible</span>
      </div>

      {expandedOffer && (
        <>
          <h4>Número de vacantes</h4>
          <p className="job-offer-description">{vacancyNumber}</p>
          {isTestIncluded && (
            <>
              <h3>Prueba técnica</h3>
              <p className="job-offer-description">{testDescription}</p>
              <div
                onClick={() =>
                  setMessage("Desactivado hasta que configuremos un antivirus")
                }
                className="upload-file"
              >
                <img className="upload-icon" src="/upload.svg" />
                <span>Upload file</span>
              </div>
            </>
          )}
          {message && <p className="prank-message">{message}</p>}
          <button onClick={handleClick} className="orange-button apply-button">
            Inscribirme en esta oferta
          </button>
        </>
      )}
    </div>
  );
}
