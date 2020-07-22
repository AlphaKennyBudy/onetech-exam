import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  category: Yup.string().required("Выберите категорию!"),
  name: Yup.string().required("Введите название продукта!"),
  purchasePrice: Yup.number().required("Введите закупочную стоимость!"),
  sellPrice: Yup.number().required("Введите розничную цену!"),
});

export default ProductSchema;
