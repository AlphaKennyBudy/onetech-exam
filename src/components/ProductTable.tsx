import React from "react";
import { Table, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { stateType } from "../store/types";
import Column from "antd/lib/table/Column";
import { getProductTable } from "../utils/dispatchedData";
import DeleteModal from "./DeleteModal";
import ProductFormModal from "./ProductFormModal";

function ProductTable() {
  const { productState, filterState } = useSelector((state: stateType) => ({
    productState: state.productState,
    filterState: state.filterState,
  }));
  const dispatch = useDispatch();
  const productTable = getProductTable(productState, filterState, dispatch);
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
          <Tag key={category} color="blue">
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
        render={(product) => (
          <>
            <DeleteModal
              title=""
              text={`Точно удалить товар id${product.id}?`}
              onDelete={product.onDelete}
              buttonText="Удалить"
              icon={undefined}
            />
            <ProductFormModal
              title="Изменить товар"
              onSave={product.onChange}
              buttonText="Изменить"
              icon={undefined}
              product={product}
            />
          </>
        )}
      />
    </Table>
  );
}

export default ProductTable;
