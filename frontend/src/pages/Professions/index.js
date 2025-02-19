import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { MdClose } from "react-icons/md";

import { professionSchema } from "../../util";

import { useProfession } from "../../hooks";
import { Table } from "../../components";

import { 
  Container, 
  Content, 
  Header, 
  Title, 
  Button, 
  Form, 
  Input, 
  ModalProfession, 
  HeaderModal,
  TitleModal,
  InputGroupsModal,
  ButtonModal,
} from "./styles";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "description", headerName: "Descrição", flex: 1 },
  { field: "status", headerName: "Ativo", width: 200 },
];

const Professions = () => {
  const { 
    professions, 
    listProfessions, 
    isLoading, 
    storeProfession, 
    editProfession 
  } = useProfession();
 
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState({});
  const [rows, setRows] = useState([]);

  const { id } = selectedProfession;

  useEffect(() => {
    listProfessions();
  }, [listProfessions]);

  useEffect(() => {
    setRows(professions.map(profession => ({
      ...profession,
      status: profession.active ? "Sim" : "Não"
    })));
  }, [professions]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (refresh = false) => {
    setIsOpen(false);

    setSelectedProfession({});
    setEditMode(false);

    if (refresh) listProfessions();
  };

  const handleSubmit = (values) => {
    if (values.active) {
      if (id) { 
        editProfession(values, id);
        handleCloseModal(true); 
      } else {
        storeProfession(values)
        handleCloseModal(true);
      }
    }

    const data = { 
      description: values.description,
      active: false
    };

    if (id) { 
      editProfession(data, id);
      handleCloseModal(true); 
    } else {
      storeProfession(data);
      handleCloseModal(true);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Profissões</Title>

        <Button onClick={handleOpenModal}>Adicionar profissão</Button>
      </Header>

      <Content>
        <Table 
          columns={columns} 
          rows={rows}  
          loading={isLoading} 
          pageSize={7}
          onCellClick={(val) => {
            setSelectedProfession(val)
            setIsOpen(true)
            setEditMode(true)
          }}  
        />
      </Content>

      <ModalProfession
        open={isOpen}
        onClose={() => handleCloseModal()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {(
          <Formik
            initialValues={selectedProfession}
            validationSchema={professionSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          > 
            <Form style={{ display: "grid" }}>
              <HeaderModal>
                <TitleModal>{!editMode ? "Adicionar Profissão" : "Editar Profissão"}</TitleModal>

                <MdClose size={25} onClick={handleCloseModal} style={{ cursor: "pointer" }}/>
              </HeaderModal>
              <Input placeholder="Descrição" name="description" type="text" style={{ width: "100%" }} required/>

              <InputGroupsModal>
                <Input type="checkbox" name="active" style={{ width: "20px", height: "20px" }} />
                <label style={{ marginLeft: "10px" }}>Ativo</label> 
              </InputGroupsModal>
              <ButtonModal type="submit">{isLoading ? "Carregando" : "Salvar"}</ButtonModal>
            </Form>
          </Formik>
        )}
      </ModalProfession>
    </Container>
  );
}

export { Professions };