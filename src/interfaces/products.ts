export interface ProductsState {
  products: Record<string, IProduct[]>
  loading: boolean
  popup: IProductPopup
}

export interface IProductPopup {
  is: boolean
  product: number
  category: string
}

export interface IProduct {
  id: string
  status: string
  title: string
  description: string | null
  price: number
  media: IGetProductFileData[]
}

export interface IGetProductData {
  barcode: string | null
  id: string
  price: number
  sku: string | null
  title: string
  description: string
  status: string
  internal_id: string
  media: IGetProductFileData[]
  disable_from_discounts: boolean
}

export interface IGetProductFileData {
  file_id: string
  id: string
  type: string
  url: string
  file?: File
  loading: boolean
}

export interface IFetchProductFileArgs {
  fileId: string
  index: number
  product: number
  category: string
}
