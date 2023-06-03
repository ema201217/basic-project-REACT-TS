import { ProductInitialState } from '../../types/product';

export default {
  getProducts: (state: ProductInitialState): any => state.products,
};
