import * as Yup from "yup";

const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Введите категорию!"),
});

export default CategorySchema;
