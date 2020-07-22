import React from "react";
import { Table, Button, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { stateType } from "../store/types";
import Column from "antd/lib/table/Column";
import { getProductTable } from "../utils/dispatchedData";
import DeleteModal from "./DeleteModal";
import { filterProducts } from "../store/actions";
import ProductFormModal from "./ProductFormModal";

function ProductTable() {
  const state = useSelector((state: stateType) => state.productState);
  const dispatch = useDispatch();
  const productTable = getProductTable(state, dispatch);
  return (
    <Table
      dataSource={productTable}
      pagination={{ pageSize: 5 }}
      locale={{
        filterConfirm: "Ok",
        filterReset: "Reset",
        emptyText: "No Products",
      }}
    >
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Название товара" dataIndex="name" key="name" />
      <Column
        title="Категория"
        dataIndex="category"
        key="category"
        render={(category) => (
          <Tag
            key={category}
            color="blue"
            onClick={() => dispatch(filterProducts(category))}
          >
            {category}
          </Tag>
        )}
      />
      <Column
        title="Цена / Закуп"
        dataIndex="purchasePrice"
        key="purchasePrice"
      />
      <Column title="Цена" dataIndex="sellPrice" key="sellPrice" />
      <Column
        render={({ onDelete, onChange, id }) => (
          <>
            <DeleteModal
              title=""
              text={`Точно удалить товар id${id}?`}
              onDelete={onDelete}
              buttonText="Удалить"
              icon={undefined}
            />
            <ProductFormModal
              title="Изменить товар"
              onSave={onChange}
              buttonText="Изменить"
              icon={undefined}
            />
          </>
        )}
      />
    </Table>
  );
}

export default ProductTable;
