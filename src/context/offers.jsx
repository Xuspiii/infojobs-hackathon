/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { jobOffers as initialOffers } from "../mocks/initialOffers.json"

export const OffersContext = createContext();

export const OffersProvider = ({ children }) => {
  const [offers, setOffers] = useState(initialOffers);

  const addOffer = (offer) => {
    setOffers([...offers, offer]);
  };

  return (
    <OffersContext.Provider value={{ offers, addOffer }}>
      {children}
    </OffersContext.Provider>
  );
};
