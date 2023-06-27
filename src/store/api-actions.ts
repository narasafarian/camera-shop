import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { APIRoute, NameSpace } from '../consts';
import { Banner } from '../types/banner';
import { addReviewToStart, setAllReviews, setBanner, setCurrentProduct, setProductCards, setSimilarProducts } from './actions';
import { Product } from '../types/product';
import { Review } from '../types/reviews';

export const fetchBannerAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Banner}/fetchBanner`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Banner>(APIRoute.Banner);

    dispatch(setBanner(data));
  },
);

export const fetchAllProductsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetchAllProducts`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Product[]>(APIRoute.Products);

    dispatch(setProductCards(data));
  },
);

export const fetchCurrentProductAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetchCurrentProduct`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Product>(`${APIRoute.Products}/${id}`);
    dispatch(setCurrentProduct(data));
  },
);

export const fetchSimilarProductsAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetchSimilarProducts`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Product[]>(`${APIRoute.Products}/${id}${APIRoute.Similar}`);
    dispatch(setSimilarProducts(data));
  },
);

export const fetchAllReviewsById = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/fetchAllReviews`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Products}/${id}${APIRoute.Reviews}`);
    dispatch(setAllReviews(data));
  },
);

export const postReviewForCamera = createAsyncThunk<void, {
  cameraId: number;
  rating: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/postReviewForCamera`,
  async (formData, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Reviews, formData);
    dispatch(addReviewToStart(data));
  },
);


