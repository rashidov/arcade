import { combineReducers } from '@reduxjs/toolkit'
import { categoriesSlice } from './categories'
import { productsSlice } from './products'

export const rootReducer = combineReducers({
  categoriesStore: categoriesSlice.reducer,
  productsStore: productsSlice.reducer,
})
