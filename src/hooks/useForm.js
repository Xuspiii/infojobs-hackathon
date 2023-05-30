import { useContext, useState } from "react";
import { OffersContext } from "../context/offers";

export function useForm() {
  const { addOffer } = useContext(OffersContext);

  const [formState, setFormState] = useState({
    offerId: null,
    offerTitle: "",
    vacancyNumber: "",
    offerDescription: "",
    isTestIncluded: false,
    testDescription: "",
  });

  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false)

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formState.offerTitle === "" ||
      formState.vacancyNumber === "" ||
      formState.offerDescription === ""
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (formState.vacancyNumber <= 0) {
      setError("El número de vacantes tiene que ser mayor que 0");
      return;
    }

    if (formState.isTestIncluded && formState.testDescription === "") {
      setError("Es obligatorio poner una descripción de la prueba");
      return;
    }

    formState.offerId = Date.now();

    setError("");

    console.log(formState)
    addOffer(formState);
    setSubmited(true);
  };

  return {
    formState,
    error,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    submited,
  };
}
