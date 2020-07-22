import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Button, Space, Divider } from "antd";
import { Wrapper } from "../../styles";
import ProductTable from "../../components/ProductTable";
import CategoriesList from "../../components/CategoriesList";

function MainPage() {
  return (
    <Wrapper>
      <Row>
        <Col span={12}>My App</Col>
        <Col span={12}>
          <Button>Добавить товар</Button>
          <Button>Добавить категорию</Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={6}>
          <CategoriesList />
        </Col>
        <Col span={18}>
          <ProductTable />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default MainPage;
