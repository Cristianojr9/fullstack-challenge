import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { MdClose } from "react-icons/md";

import { useProfessional } from "../../hooks";
import { Table } from "../../components";

import { 
  Container, 
  Content, 
  Header, 
  Title, 
  Button,
  ModalProfession,
  Form,
  HeaderModal,
  TitleModal,
  Input,
  InputGroupsModal,
  ButtonModal
} from "./styles";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nome", flex: 1 },
  { field: "phone", headerName: "Telefone", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "profession", headerName: "Profissão", flex: 1 },
  { field: "status", headerName: "Ativo", width: 200 },
];

const Professionals = () => {
  const { professionals, listProfessionals, isLoading } = useProfessional();
 
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    listProfessionals();
  }, [listProfessionals]);

  useEffect(() => {
    setRows(professionals.map(professional => ({
      ...professional,
      status: professional.active ? 'Sim' : 'Não'
    })))
  }, [professionals]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Header>
        <Title>Profissionais</Title>

        <Button onClick={handleOpenModal}>Adicionar profissional</Button>
      </Header>

      <Content>
        <Table columns={columns} rows={rows} onCellClick={() => handleOpenModal()} loading={isLoading} />
      </Content>

      <ModalProfession
        open={isOpen}
        onClose={() => handleCloseModal()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {(
          <Formik
            // initialValues={selectedProfession}
            // validationSchema={professionSchema}
            /* onSubmit={(values) => {
              if (selectedProfession) return editProfession(values, selectedProfession.id)
              storeProfession(values)
              setIsOpen(false)
            }} */
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

export { Professionals };