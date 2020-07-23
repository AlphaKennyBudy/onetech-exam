import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, ResetButton, Input } from "formik-antd";
import CategorySchema from "../utils/schemas/CategorySchema";
import { categoryModalType } from "../store/types";

function CategoryModal({ onSave, buttonText, title }: categoryModalType) {
  const [state, setState] = useState({
    ModalText: "",
    visible: false,
    confirmLoading: false,
  });

  const showModal = () => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
    }));
  };

  const handleOk = (values: any) => {
    setState((prevState) => ({
      ...prevState,
      ModalText: "Идет загрузка, пожалуйста, подождите",
      confirmLoading: true,
    }));
    onSave(values);
    setState((prevState) => ({
      ModalText: "",
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
      <Button onClick={() => showModal()}>{buttonText}</Button>
      <Modal
        title={title}
        visible={state.visible}
        confirmLoading={state.confirmLoading}
        onCancel={() => handleCancel()}
        footer={[<Button></Button>]} //Просто заглушка
      >
        <Formik
          initialValues={{ name: "" }}
          validationSchema={CategorySchema}
          onSubmit={(values) => handleOk(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Form.Item name="name">
                <Input name="name" placeholder="Категория" />
              </Form.Item>
              <SubmitButton loading={state.confirmLoading}>
                Сохранить
              </SubmitButton>
              <ResetButton>Стереть</ResetButton>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default CategoryModal;
