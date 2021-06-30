import { useCallback, useState } from "react";

import { getAllProfessionals, getProfession } from "../../apis";

const useProfessional = () => {
  const [professionals, setProfessionals] = useState([]);
  const [professionName, setProfessionName] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const listProfessionals = useCallback(() => {
    const list = async () => {
      setIsLoading(true);
      await getAllProfessionals().then(({ data }) => {
        setProfessionals(data);
        setIsLoading(false);
      }).catch(error => setError(error)); 
    };

    list();
  }, []);

  const getProfessionName = useCallback((id) => {
    const get = async () => {
      await getProfession(id).then(response => {
        setProfessionName(response.description);
      });
    }

    get();
  }, [])

  return {
    professionals,
    professionName,
    error,
    isLoading,

    listProfessionals,
    getProfessionName,
  }
};

export { useProfessional };
