export type ProductType = {
  _id: number;
  name: string;
  purchasePrice: number;
  sellPrice: number;
  category: string;
};

export type CategoryType = {
  _id: number;
  name: string;
};

export type stateType = {
  productState: ProductType[];
  categoryState: CategoryType[];
  filterState: string;
};

export type deleteModalPropsType = {
  text: string;
  title: string;
  buttonText: string;
  icon: undefined | React.ReactNode;
  onDelete: () => void;
};

export type categoryItemPropsType = {
  name: string;
  onDelete: () => void;
};

export type productFormModalPropsType = {
  title: string;
  onSave: (values: ProductType) => void;
  buttonText: string;
  product: undefined | ProductType;
  icon: undefined | React.ReactNode;
};

export type categoryModalType = {
  title: string;
  onSave: (values: CategoryType) => void;
  buttonText: string;
};
