import "./company-interface.css";
import { Header } from "../components/Header";
import { useId } from "react";
import { useForm } from "../hooks/useForm";

export function CompanyInterface() {
  const {
    formState,
    error,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    submited,
  } = useForm();

  const offerTitleId = useId();
  const vacancyNumberId = useId();
  const offerDescriptionId = useId();
  const testDescriptionId = useId();
  const isTestIncludedId = useId();

  return (
    <>
      <Header />
      <section className="form-section">
        <p className="form-disclaimer">
          Se ha simplificado el formulario para facilitar el testeo de la
          aplicación
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">Detalles de la oferta</h2>

          <div className="flex">
            <div className="offer-title">
              <label htmlFor={offerTitleId}>Título de la oferta</label>
              <input
                className="input"
                type="text"
                id={offerTitleId}
                name="offerTitle"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor={vacancyNumberId}>Vacantes</label>
              <input
                className="input"
                type="number"
                id={vacancyNumberId}
                name="vacancyNumber"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label htmlFor={offerDescriptionId}>Descripción del puesto</label>
          <textarea
            name="offerDescription"
            id={offerDescriptionId}
            onChange={handleInputChange}
          />

          <div className="checkbox-div">
            <label htmlFor={isTestIncludedId}>Incluir prueba técnica</label>
            <input
              type="checkbox"
              id={isTestIncludedId}
              name="isTestIncluded"
              value={formState.isTestIncluded}
              onChange={handleCheckboxChange}
            />
          </div>

          {formState.isTestIncluded && (
            <div>
              <label htmlFor={testDescriptionId}>
                Descripción de la prueba (prueba de ejemplo)
              </label>
              <textarea
                name="testDescription"
                id={testDescriptionId}
                onChange={handleInputChange}
              />
            </div>
          )}

          {error && <p className="form-disclaimer error-disclaimer">{error}</p>}

          <button className="blue-button submit-button" type="submit">
            Subir Prueba
          </button>

          {submited && <p className="submited-message">Se ha publicado la oferta, cambia a la vista de candidatos para verlo</p>}
        </form>
      </section>
    </>
  );
}
