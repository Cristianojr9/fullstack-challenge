import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from '@material-ui/core/Modal';
import { Formik } from 'formik';
import { MdClose } from "react-icons/md"

import { Header, Title, Input, Form } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "500px",
    height: "300px",
    fontSize: "16px",
    border: "2px solid #036672",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FormModal = (modalIsOpen, closeModal, editMode, profession) => {
  const [initialValue, setInitialValue] = useState({});

  useEffect(() => {
    if (profession) {
      const { 
        id, 
        description,
        active
      } = profession;

      setInitialValue({
        id: id,
        description: description,
        active: active
      })
    };

  },[profession]);

  return (
    <Modal
      open={modalIsOpen}
      style={customStyles}
      onClose={closeModal}
    >
      <Header>
        <Title>{!editMode ? "Adicionar Profissão" : "Editar Profissão"}</Title>

        <button onClick={closeModal}>
          <MdClose size={25} />
        </button>
      </Header>

      <Formik
        initialValues={initialValue}
        // validationSchema={professionSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form style={{ display: "grid" }}>
          <Input placeholder="Descricao" name="description" type="text" style={{ width: "200px" }}/>

          <button>Salvar</button>
        </Form>
      </Formik>
    </Modal>
  );
}

FormModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  editMode: PropTypes.bool,
  profession: PropTypes.object,
};
FormModal.defaultProps = {
  modalIsOpen: false,
  closeModal: () => {},
  editMode: false,
  profession: null,
};

export { FormModal };