import { useCallback, useState } from "react";

import { getAllProfessions, createProfession, updateProfession, getProfession } from "../../apis";

const useProfession = () => {
  const [professions, setProfessions] = useState([]);
  const [professionName, setProfessionName] = useState("");
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

  const showProfession = useCallback((id) => {
    const show = async () => {
      await getProfession(id).then(({ data }) => {
        setProfessionName(data.description);
      })
    };

    show();
  }, []);
  
  const storeProfession = useCallback((data) => {
    const create = async () => {
      setIsLoading(true);
      await createProfession(data).then(({ data }) => {
        setProfessions(list => [...list, data]);
        setIsLoading(false);
      }).catch(error => setError(error));
    };

    create();
  }, []);

  const editProfession = useCallback((data, id) => {
    const update = async () => {
      setIsLoading(true);
      await updateProfession(data, id).then(({ data }) => {
        setProfessions(list => [...list, data]);
        setIsLoading(false);
      }).catch(error => setError(error));
    };

    update();
  }, [])

  return {
    professions,
    error,
    isLoading,
    professionName,

    listProfessions,
    storeProfession,
    editProfession,
    showProfession,
  }
};

export { useProfession };
