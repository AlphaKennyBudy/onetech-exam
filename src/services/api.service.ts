import { ProductType, CategoryType } from "../store/types";

const API_URL = "https://onetech-exam-api.now.sh";

export async function addProductAPI(product: ProductType) {
  return fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());
}

export async function changeProductAPI(product: ProductType) {
  return fetch(`${API_URL}/products/${product._id}`, {
    method: "PATCH",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());
}

export async function deleteProductAPI(id: number) {
  return fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

export async function fetchProductsAPI() {
  return fetch(`${API_URL}/products`).then((response) => response.json());
}

export async function addCategoryAPI(category: CategoryType) {
  return fetch(`${API_URL}/categories`, {
    method: "POST",
    body: JSON.stringify(category),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());
}

export async function deleteCategoryAPI(id: number) {
  return fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

export async function fetchCategoriesAPI() {
  return fetch(`${API_URL}/categories`).then((response) => response.json());
}
