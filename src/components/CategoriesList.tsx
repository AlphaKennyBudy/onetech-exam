import React from "react";
import { List, Tag, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { stateType, CategoryType } from "../store/types";
import { getCategoryList } from "../utils/dispatchedData";
import CategoryItem from "./CategoryItem";
import { setFilter } from "../store/actions";

function CategoriesList() {
  const { categoryState, filterState } = useSelector((state: stateType) => ({
    categoryState: state.categoryState,
    filterState: state.filterState,
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
