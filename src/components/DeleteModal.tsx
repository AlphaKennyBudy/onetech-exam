import React, { useState } from "react";
import { Button, Modal } from "antd";
import { deleteModalPropsType } from "../store/types";

function DeleteModal({
  text,
  title,
  onDelete,
  buttonText,
  icon,
}: deleteModalPropsType) {
  const [state, setState] = useState({
    ModalText: text,
    visible: false,
    confirmLoading: false,
  });

  const showModal = () => {
    setState((prevState) => ({ ...prevState, visible: true }));
  };

  const handleOk = () => {
    setState((prevState) => ({
      ...prevState,
      ModalText: "Идет загрузка, пожалуйста, подождите",
      confirmLoading: true,
    }));
    onDelete();
    setState((prevState) => ({
      ModalText: text,
      visible: false,
      confirmLoading: false,
    }));
  };

  const handleCancel = () => {
    setState((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  return (
    <>
      <Button onClick={showModal} icon={icon}>
        {buttonText}
      </Button>
      <Modal
        title={title}
        visible={state.visible}
        onOk={() => handleOk()}
        confirmLoading={state.confirmLoading}
        onCancel={() => handleCancel()}
      >
        <p>{state.ModalText}</p>
      </Modal>
    </>
  );
}

export default DeleteModal;
