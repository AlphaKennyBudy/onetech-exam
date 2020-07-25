import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Row, Col, Divider } from "antd";
import { Wrapper } from "../../styles";
import ProductTable from "../../components/ProductTable";
import CategoriesList from "../../components/CategoriesList";
import ProductFormModal from "../../components/ProductFormModal";
import { useDispatch } from "react-redux";
import {
  addProduct,
  addCategory,
  fetchCategories,
  fetchProducts,
} from "../../store/actions";
import CategoryModal from "../../components/CategoryModal";
import store from "../../store/store";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    let state = store.getState();
    store.subscribe(() => {
      let newState = store.getState();
    });
  }, []);
  return (
    <Wrapper>
      <Row>
        <Col span={12}>My App</Col>
        <Col span={12}>
          <ProductFormModal
            title="Добавить товар"
            onSave={(product) => dispatch(addProduct(product))}
            buttonText="Добавить товар"
            icon={undefined}
            product={undefined}
          />
          <CategoryModal
            title="Добавить категорию"
            buttonText="Добавить категорию"
            onSave={(category) => dispatch(addCategory(category))}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={10}>
        <Col span={6}>
          <CategoriesList />
        </Col>
        <Col span={18}>
          <ProductTable />
        </Col>
      </Row>
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
}

export default MainPage;
