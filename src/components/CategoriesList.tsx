import React from "react";
import { List, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { stateType } from "../store/types";
import { getCategoryList } from "../utils/dispatchedData";
import CategoryItem from "./CategoryItem";
import { setFilter } from "../store/actions";

function CategoriesList() {
  const { categoryState } = useSelector((state: stateType) => ({
    categoryState: state.categoryState,
  }));
  const dispatch = useDispatch();
  const categoryList = getCategoryList(categoryState, dispatch);
  return (
    <List
      dataSource={categoryList}
      header={
        <Button danger onClick={() => dispatch(setFilter(""))}>
          Сбросить
        </Button>
      }
      renderItem={({ name, onDelete }) => (
        <List.Item>
          <CategoryItem name={name} onDelete={onDelete} />
        </List.Item>
      )}
    />
  );
}

export default CategoriesList;
