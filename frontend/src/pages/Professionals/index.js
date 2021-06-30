import React, { useState, useEffect } from "react";

import { useProfessional } from "../../hooks";
import { Table, FormModal } from "../../components";

import { Container, Content, Header, Title, Button } from "./styles";

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

      {isOpen && 
        <FormModal
          modalIsOpen={isOpen}
          closeModal={() => handleCloseModal()}
        />
      }
    </Container>
  );
}

export { Professionals };