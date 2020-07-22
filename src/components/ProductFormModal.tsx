import React, { useState } from "react";
import { Formik } from "formik";
import {
  Form,
  Input,
  AutoComplete,
  SubmitButton,
  ResetButton,
} from "formik-antd";
import { Button, Modal } from "antd";
import ProductSchema from "../utils/schemas/ProductSchema";
import { useSelector } from "react-redux";
import { stateType, CategoryType } from "../store/types";

function ProductFormModal({ title, onSave, buttonText }: any) {
  const [state, setState] = useState({
    ModalText: "",
    visible: false,
    confirmLoading: false,
  });

  const categoryList = useSelector(
    (state: stateType) => state.categoryState
  ).map((category: CategoryType) => category.name);

  const showModal = () => {
    setState((prevState) => ({ ...prevState, visible: true }));
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
          initialValues={{
            category: "",
            name: "",
            purchasePrice: undefined,
            sellPrice: undefined,
          }}
          validationSchema={ProductSchema}
          onSubmit={(values) => handleOk(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Form.Item name="category">
                <AutoComplete
                  name="category"
                  placeholder="Категория"
                  dataSource={categoryList}
                  showArrow={true}
                />
              </Form.Item>
              <Form.Item name="name">
                <Input name="name" placeholder="Название" />
              </Form.Item>
              <Form.Item name="purchasePrice">
                <Input
                  name="purchasePrice"
                  placeholder="Закупочная стоимость"
                />
              </Form.Item>
              <Form.Item name="sellPrice">
                <Input name="sellPrice" placeholder="Розничная цена" />
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

export default ProductFormModal;
