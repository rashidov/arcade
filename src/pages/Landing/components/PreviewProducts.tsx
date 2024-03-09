import { CSSProperties, FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SwiperSlideProps } from 'swiper/react'
import { RootState, useAppDispatch } from '../../../store'
import { fetchProductFile, fetchProductsByCategory } from '../../../store/products'
import { IGetProductFileData, IProduct } from '../../../interfaces/products'
import { MainLayout } from '../../../layouts/Main'
import { Button } from '../../../ui-kit/Button'
import { Carousel } from '../../../features/Carousel'
import { Loader } from '../../../ui-kit/Loader'

interface PreviewProductsProps {
  style?: CSSProperties
}

const mockProducts: IProduct[] = [
  {
    title: '',
    media: [],
    price: 0,
    status: '',
    description: '',
    id: '1',
  },
  {
    title: '',
    media: [],
    price: 0,
    status: '',
    description: '',
    id: '2',
  },
  {
    title: '',
    media: [],
    price: 0,
    status: '',
    description: '',
    id: '3',
  },
]

export const PreviewProducts: FC<PreviewProductsProps> = ({ style }) => {
  const bestSellersCategory = useSelector<RootState, string>((state) => state.categoriesStore.bestSellers)
  return (
    <MainLayout.Container className="landing-preview_products landing-section" style={style}>
      <div className="landing-section-header">
        <MainLayout.Title text="BEST SELLERS" />
        <Link to={`/products/${bestSellersCategory}`}>
          <Button text="View All" heightSize="lg" color="white" />
        </Link>
      </div>
      <PreviewProductsCarousel category={bestSellersCategory} />
      <PreviewProductEmpty />
    </MainLayout.Container>
  )
}

const PreviewProductsCarousel: FC<{ category: string }> = ({ category }) => {
  const dispatch = useAppDispatch()
  const bestSellers =
    useSelector<RootState, IProduct[]>((state) => state.productsStore.products[category])?.slice(0, 5) || []

  useEffect(() => {
    if (!!category.length && !bestSellers.length) {
      dispatch(fetchProductsByCategory(category))
    }
  }, [category])

  const slides: SwiperSlideProps[] = bestSellers.map((product, index) => ({
    children: (
      <PreviewProduct
        key={`${product.id}-${product.title}-${index}`}
        product={index}
        {...product}
        category={category}
      />
    ),
    // virtualIndex: index,
    // children: <div style={{ width: '300px', height: '300px', background: '#FFFFFF' }}>asd{index}</div>,
  }))

  return bestSellers.length ? <Carousel slides={slides} /> : null
}

export interface PreviewProductProps extends IProduct {
  category: string
  product: number
}

const PreviewProduct: FC<PreviewProductProps> = ({ title, media, price, category, product }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isFetch = media.length && !media[0].file
    if (isFetch) dispatch(fetchProductFile({ fileId: media[0].file_id, index: 0, product, category }))
  }, [])

  return (
    <div className="landing-preview_products-product">
      <PreviewProductImage product={product} category={category} />
      <span className="landing-preview_products-product-name">{title}</span>
      <span className="landing-preview_products-product-price">${price}</span>
      <Button text="Add to card" heightSize="lg" widthSize="lg" />
    </div>
  )
}

interface PreviewProductImageProps {
  product: number
  category: string
}

const PreviewProductImage: FC<PreviewProductImageProps> = ({ product, category }) => {
  const image = useSelector<RootState, IGetProductFileData>(
    (state) => state.productsStore.products[category][product].media[0],
  )
  const is = !image?.loading && image?.file !== undefined
  return (
    <div className="landing-preview_products-product-image">
      {is && <img alt="" src={URL.createObjectURL(image!.file as any)} />}
    </div>
  )
}

const PreviewProductEmpty = () => {
  const category = useSelector<RootState, string>((state) => state.categoriesStore.bestSellers)
  const loading = useSelector<RootState, boolean>((state) => state.productsStore.loading)
  const besSellers = useSelector<RootState, IProduct[] | undefined>((state) => state.productsStore.products[category])
  const is = (besSellers === undefined && loading) || (Array.isArray(besSellers) && !besSellers.length && !loading)
  return is ? <div className="landing-preview_products-empty">{loading && <Loader withoutWrapper />}</div> : null
}
