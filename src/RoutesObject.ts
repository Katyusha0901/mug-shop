interface RoutesType {
  mainPage: string;
  savedProducts: string;
  bag: string;
  productPage: string;
}

export const RoutesObject: RoutesType = {
  mainPage: "/mug-shop",
  savedProducts: "/mug-shop/saved-products",
  bag: "/mug-shop/bag",
  productPage: "/mug-shop/product/:productId",
};
