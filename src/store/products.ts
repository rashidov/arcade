import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFetchProductFileArgs, IGetProductData, IProductPopup, ProductsState } from '../interfaces/products'
import { productsApi } from '../api/products'
import { deserialize } from '../deserializer'
import { storageApi } from '../api/storage'
import { formatToFile } from '../helpers/formatTofile'

const initialPopupState: IProductPopup = {
  is: false,
  category: '',
  product: 0,
}

const initialState: ProductsState = {
  products: {},
  loading: false,
  popup: initialPopupState,
}

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category_id: string) => {
    const response = await productsApi.getProducts([category_id])
    const data: IGetProductData[] = await deserialize(response.data)
    return { data, category_id }
  },
)

export const fetchProductFile = createAsyncThunk(
  'products/fetchProductFile',
  async (payload: IFetchProductFileArgs) => {
    const response = await storageApi.getFileById(payload.fileId)
    const file = formatToFile(response, payload.fileId)
    return { ...payload, file }
  },
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    /**
     * Product popup actions
     */

    openPopup: (state, action: PayloadAction<Omit<IProductPopup, 'is'>>) => {
      state.popup = { ...action.payload, is: true }
    },
    closePopup: (state) => {
      state.popup.is = false
    },
  },

  extraReducers: (builder) => {
    /**
     * Fetch product media
     */
    builder.addCase(fetchProductFile.pending, (state, action) => {
      const { product, index, category } = action.meta.arg
      state.products[category][product].media[index].loading = true
    })
    builder.addCase(fetchProductFile.fulfilled, (state, action) => {
      const { product, index, file, category } = action.payload
      state.products[category][product].media[index] = {
        ...state.products[category][product].media[index],
        file,
        loading: false,
      }
    })
    builder.addCase(fetchProductFile.rejected, (state, action) => {
      const { product, index, category } = action.meta.arg
      state.products[category][product].media[index].loading = false
    })

    /**
     * Fetch products list cases
     */
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.products[action.payload.category_id] = action.payload.data.map((product) => ({
        id: product.id,
        description: product.description,
        price: product.price,
        status: product.status,
        title: product.title,
        media: product.media.map((i) => ({ ...i, loading: false })),
      }))
      state.loading = false
    })
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.loading = false
    })
  },
})

export const { openPopup, closePopup } = productsSlice.actions

// const products: PreviewProductProps[] = [
//   {
//     name: 'Wave Gen RX',
//     price: '$579.99',
//     src: consoleImg,
//   },
//   {
//     name: 'X-2 Wireless Mouse',
//     price: '$579.99',
//     src: mouse,
//   },
//   {
//     name: 'Ancient Souls',
//     price: '$579.99',
//     src: game1,
//   },
//   {
//     name: 'Chronosplit',
//     price: '$579.99',
//     src: game2,
//   },
// ]
