import { createSlice, Slice } from '@reduxjs/toolkit';
import { ProductInitialState } from '../../types/product';
import exampleReducer from '../reducers/exampleReducer';

const initialState: ProductInitialState = {
  products: [{ name: 'Producto de Prueba', price: 123 }],
  loading: true,
};

export const exampleSlice: Slice = createSlice({
  name: 'example',
  initialState,
  reducers: exampleReducer,
});

export const { getProducts } = exampleSlice.actions;
