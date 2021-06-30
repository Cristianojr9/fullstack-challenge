import React, { useState, useEffect } from "react";
import { Formik } from 'formik';
import { MdClose } from "react-icons/md"

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
  TitleModal
} from "./styles";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "description", headerName: "Descrição", flex: 1 },
  { field: "status", headerName: "Ativo", width: 200 },
];

const Professions = () => {
  const { professions, listProfessions, isLoading, storeProfession } = useProfession();
 
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState({});
  const [rows, setRows] = useState([]);

  useEffect(() => {
    listProfessions();
  }, [listProfessions]);

  useEffect(() => {
    setRows(professions.map(profession => ({
      ...profession,
      status: profession.active ? "Sim" : "Não"
    })))
  }, [professions]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);

    setSelectedProfession({});
    setEditMode(false);
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
            // validationSchema={professionSchema}
            onSubmit={(values) => {
              storeProfession(values)
              setIsOpen(false)
            }}
          > 
            <Form style={{ display: "grid" }}>
              <HeaderModal>
                <TitleModal>{!editMode ? "Adicionar Profissão" : "Editar Profissão"}</TitleModal>

                <MdClose size={25} onClick={handleCloseModal} style={{ cursor: "pointer" }}/>
              </HeaderModal>
              <Input placeholder="Descrição" name="description" type="text" style={{ width: "100%" }}/>

              <div className="checkboxActive" style={{ display: "flex", alignItem: "center", height: "20px" }}>
                <Input type="checkbox" name="active" style={{ width: "20px", height: "20px" }} />
                <label style={{ marginLeft: "10px" }}>Ativo</label> 
              </div>
              <button>Salvar</button>
            </Form>
          </Formik>
        )}
      </ModalProfession>
    </Container>
  );
}

export { Professions };