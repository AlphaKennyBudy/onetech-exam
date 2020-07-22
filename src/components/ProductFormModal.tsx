import React, { useState } from "react";
function ProductFormModal({ title, onSave }: any) {
  const [state, setState] = useState({
    ModalText: "",
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
    onSave();
    setState((prevState) => ({
      ...prevState,
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

  return <div></div>;
}

export default ProductFormModal;
