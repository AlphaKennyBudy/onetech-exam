import React from "react";
import { categoryItemPropsType } from "../store/types";
import DeleteModal from "./DeleteModal";
import { DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/actions";
import { Button } from "antd";

function CategoryItem({ name, onDelete }: categoryItemPropsType) {
  const dispatch = useDispatch();
  return (
    <>
      <DeleteModal
        text="Все товары в этой категории будут помечены 'Без категории'"
        title="Хотите удалить категорию?"
        onDelete={onDelete}
        buttonText=""
        icon={<DeleteFilled />}
      />
      <Button onClick={() => dispatch(setFilter(name))}>{name}</Button>
    </>
  );
}

export default CategoryItem;
