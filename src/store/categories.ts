import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { categoriesApi } from '../api/categories'
import { deserialize } from '../deserializer'
import { CategoriesState, ICategory, ICategoryDataMeta, IGetCategoryData } from '../interfaces/categories'
import { MOCK_CATEGORIES } from '../mocks/categories'

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  bestSellers: '',
  onSale: '',
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await categoriesApi.getCategories()
  const data: IGetCategoryData[] = await deserialize(response?.data)
  return data
})

const createCategory = (category: IGetCategoryData, img: string): ICategory => ({
  type: category.title.toLowerCase(),
  description: category.description,
  title: category.title,
  src: img,
  id: category.id,
})

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const data = action.payload.reduce<{ categories: ICategory[]; bestSellers: string; onSale: string }>(
        (acc, category) => {
          const meta = JSON.parse(category.description) as ICategoryDataMeta
          if (meta.type === 'all') acc.categories.push(createCategory(category, meta.img))
          if (meta.type === 'best_sellers') acc.bestSellers = category.id
          if (meta.type === 'on_sale') acc.onSale = category.id
          return acc
        },
        { categories: [], bestSellers: '', onSale: '' },
      )
      state.categories = data.categories
      state.bestSellers = data.bestSellers
      state.onSale = data.onSale
      state.loading = false
    })
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categories = MOCK_CATEGORIES
      state.loading = false
    })
  },
})

// export const {} = categoriesSlice.actions
