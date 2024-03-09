export interface CategoriesState {
  categories: ICategory[]
  bestSellers: string
  onSale: string
  loading: boolean
}

export interface ICategory {
  type: string
  title: string
  src: string
  id: string
  description: string
}

export interface IGetCategoryData {
  description: string
  id: string
  internal_id: string
  is_parent: boolean
  meta_description: string | null
  page_title: string | null
  parent_id: string | null
  title: string
  url_handle: null
}

export interface ICategoryDataMeta {
  type: 'all' | 'best_sellers' | 'on_sale'
  img: string
}
