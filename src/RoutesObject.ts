interface RoutesType {
  mainPage: string;
  savedProducts: string;
  bag: string;
  productPage: string;
}

export const RoutesObject: RoutesType = {
  mainPage: "/",
  savedProducts: "/saved-products",
  bag: "/bag",
  productPage: "/product/:productId",
};
