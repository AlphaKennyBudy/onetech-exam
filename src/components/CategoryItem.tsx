import React from "react";
import { categoryItemPropsType } from "../store/types";
import DeleteModal from "./DeleteModal";
import { DeleteFilled } from "@ant-design/icons";
import { Tag } from "antd";
import { useDispatch } from "react-redux";
import { filterProducts } from "../store/actions";

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
      <Tag onClick={() => dispatch(filterProducts(name))}>{name}</Tag>
    </>
  );
}

export default CategoryItem;
