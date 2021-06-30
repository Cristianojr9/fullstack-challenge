import { useCallback, useState } from "react";

import { getAllProfessionals, updateProfessional, createProfessional, getProfession } from "../../apis";

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
      setIsLoading(true);
      await getProfession(id).then(response => {
        setProfessionName(response.description);
        setIsLoading(false);
      }).catch(error => setError(error)); 
    }

    get();
  }, []);

  const storeProfessional = useCallback((data) => {
    const create = async () => {
      setIsLoading(true);
      await createProfessional(data).then(({ data }) => {
        setProfessionals(list => [...list, data]);
        setIsLoading(false);
      }).catch(error => setError(error)); 
    };

    create();
  }, []);

  const editProfessional = useCallback((data, id) => {
    const update = async () => {
      setIsLoading(true);
      await updateProfessional(data, id).then(({ data }) => {
        setProfessionals(list => [...list, data]);
        setIsLoading(false);
      }).catch(error => setError(error)); 
    };

    update();
  }, [])

  return {
    professionals,
    professionName,
    error,
    isLoading,

    listProfessionals,
    getProfessionName,
    storeProfessional,
    editProfessional,
  }
};

export { useProfessional };
