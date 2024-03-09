import { FC, useEffect } from 'react'
import parse from 'html-react-parser'
import { Loader } from '../../ui-kit/Loader'
import { IGetProductFileData, IProduct } from '../../interfaces/products'
import { RootState, useAppDispatch } from '../../store'
import { fetchProductFile } from '../../store/products'
import { Button } from '../../ui-kit/Button'
import { useSelector } from 'react-redux'
import './style.scss'

interface ProductsProps {
  loading: boolean
  category: string
  products: IProduct[]
  onClickToProduct: (product: number) => void
}

export const Products: FC<ProductsProps> = ({ loading, products, category, onClickToProduct }) => {
  return (
    <div className="products_list">
      {loading && <Loader />}
      {products.map((product, index) => (
        <Product
          key={product.id}
          index={index}
          category={category!}
          {...product}
          onOpen={() => onClickToProduct(index)}
        />
      ))}
    </div>
  )
}

interface ProductProps extends IProduct {
  onOpen: (id: string) => void
  index: number
  category: string
}

const Product: FC<ProductProps> = ({ id, price, description, title, onOpen, media, index, category }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isFetch = media.length && !media[0].file
    if (isFetch) dispatch(fetchProductFile({ fileId: media[0].file_id, product: index, index: 0, category }))
  }, [])

  return (
    <div className="products_list-product" onClick={() => onOpen(id)}>
      {/*<div className="products_list-product-image">image</div>*/}
      <ProductImage product={index} category={category} />
      <div className="products_list-product-body">
        <div className="products_list-product-body-title">
          <span className="products_list-product-body-title-name">{title}</span>
          <span className="products_list-product-body-title-price">${price}</span>
        </div>
        <span className="products_list-product-body-description">{description !== null ? parse(description) : ''}</span>
        <div className="products_list-product-body-actions">
          <Button color="white">Add to card</Button>
        </div>
      </div>
    </div>
  )
}

interface ProductImageProps {
  product: number
  category: string
}

const ProductImage: FC<ProductImageProps> = ({ product, category }) => {
  const image = useSelector<RootState, IGetProductFileData>(
    (state) => state.productsStore.products[category][product].media[0],
  )
  const is = !image?.loading && image?.file !== undefined
  return (
    <div className="products_list-product-image">
      {is && <img alt="" src={URL.createObjectURL(image!.file as any)} />}
    </div>
  )
}
