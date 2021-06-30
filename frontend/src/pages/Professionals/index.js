import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { MdClose } from "react-icons/md";

import { useProfessional, useProfession } from "../../hooks";
import { professionalSchema } from "../../util";
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
  const { professionals, listProfessionals, isLoading, storeProfessional, editProfessional } = useProfessional();
  const { professions, listProfessions } = useProfession();

  const [selectedProfessional, setSelectedProfessional] = useState({});
  const [selectedValue, setSelectedValue] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const { id } = selectedProfessional;

  useEffect(() => {
    listProfessions();
    listProfessionals();
  }, [listProfessionals, listProfessions]);

  useEffect(() => {
    setRows(professionals.map(professional => ({
      ...professional,
      profession: professional.professionId,
      status: professional.active ? 'Sim' : 'Não'
    })))
  }, [professionals]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChangeSelect = (e) => {
    setSelectedValue(parseInt(e.target.value));
  };

  const handleSubmit = (values) => {
    const data = { 
      ...values,
      professionId: selectedValue
    };

    console.log(data);

    if (id) { 
      editProfessional(data, id);
      handleCloseModal(true); 
    } else {
      storeProfessional(data);
      handleCloseModal(true);
    }
  }

  return (
    <Container>
      <Header>
        <Title>Profissionais</Title>

        <Button onClick={handleOpenModal}>Adicionar profissional</Button>
      </Header>

      <Content>
        <Table 
          columns={columns} 
          rows={rows} 
          loading={isLoading} 
          onCellClick={(val) => {
            setSelectedProfessional(val)
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
            initialValues={selectedProfessional}
            validationSchema={professionalSchema}
            onSubmit={values => handleSubmit(values)}
          > 
            <Form style={{ display: "grid" }}>
              <HeaderModal>
                <TitleModal>
                  {
                    !editMode ? 
                    "Adicionar Profissional" : 
                    "Editar Profissional"
                  }
                </TitleModal>

                <MdClose size={25} onClick={handleCloseModal} style={{ cursor: "pointer" }}/>
              </HeaderModal>
              <Input 
                placeholder="Nome" 
                name="name" 
                type="text" 
                style={{ width: "100%" }} 
                required
              />
              <Input 
                placeholder="Email" 
                name="email" 
                type="email" 
                style={{ width: "100%" }} 
                required
              />
              <Input 
                placeholder="Telefone" 
                name="phone" 
                type="number" 
                style={{ width: "100%" }} 
                required
                maxLength={9}
                //mask={phoneMask}
              />
              <Input 
                name="professionId" 
                as="select"
                initialValue={1}
                style={{ width: "100%" }} 
                onChange={(e) => handleChangeSelect(e)}
                required
              >
                {professions.map(({ id, description}) => (
                  <option 
                    value={id} 
                    key={id} 
                  >
                    {description}
                  </option>
                ))}
              </Input>

              <InputGroupsModal>
                <Input 
                  type="checkbox" 
                  name="active" 
                  style={{ width: "20px", height: "20px" }} 
                />
                <label 
                  style={{ marginLeft: "10px" }}
                >
                  Ativo
                </label> 
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