import { useCallback, useState } from "react";

import { getAllProfessions, createProfession} from "../../apis";

const useProfession = () => {
  const [professions, setProfessions] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const listProfessions = useCallback(() => {
    const list = async () => {
      setIsLoading(true);
      await getAllProfessions().then(({ data }) => {
        setProfessions(data);
        setIsLoading(false);
      }).catch(error => setError(error));
    };

    list();
  }, []);
  
  const storeProfession = useCallback((data) => {
    const create = async () => {
      await createProfession(data).then(({ data }) => {
        setProfessions(list => [...list, data])
      })
    };

    create();
  }, []);

  return {
    professions,
    error,
    isLoading,

    listProfessions,
    storeProfession,
  }
};

export { useProfession };
