import "./candidate-interface.css";

import { useContext } from "react";
import { Header } from "../components/Header.jsx";
import { OffersContext } from "../context/offers.jsx";
import { JobOfferCard } from "../components/JobOfferCard.jsx";

export function CandidateInterface() {
  const { offers } = useContext(OffersContext);

  return (
    <>
      <Header />
      <section className="jobs-section">
        <div className="searchbox">
          <div className="search-input-container">
            <form>
              <label>Buscar ofertas de...</label>
              <input className="search-input" />
            </form>
          </div>

          <button className="orange-button search-button">Buscar</button>
        </div>

        <div className="jobs-container">
          {offers.map((offer) => (
            <JobOfferCard
              key={offer.offerId}
              offerTitle={offer.offerTitle}
              vacancyNumber={offer.vacancyNumber}
              offerDescription={offer.offerDescription}
              isTestIncluded={offer.isTestIncluded}
              testDescription={offer.testDescription}
            />
          ))}
        </div>
      </section>
    </>
  );
}
