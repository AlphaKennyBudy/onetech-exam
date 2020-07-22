import React from "react";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { stateType, CategoryType } from "../store/types";
import { getCategoryList } from "../utils/dispatchedData";
import CategoryItem from "./CategoryItem";

function CategoriesList() {
  const state = useSelector((state: stateType) => state.categoryState);
  const dispatch = useDispatch();
  const categoryList = getCategoryList(state, dispatch);
  return (
    <List
      dataSource={categoryList}
      renderItem={({ name, onDelete }) => (
        <List.Item>
          <CategoryItem name={name} onDelete={onDelete} />
        </List.Item>
      )}
    />
  );
}

export default CategoriesList;
