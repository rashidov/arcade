import { FC, useEffect } from 'react'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { IProduct, IProductPopup } from '../../interfaces/products'
import { closePopup, fetchProductFile } from '../../store/products'
import { Popup } from '../Popup'
import { Loader } from '../../ui-kit/Loader'
import { Carousel } from '../Carousel'
import { Button } from '../../ui-kit/Button'
import './style.scss'

export const ProductPopup: FC = () => {
  const dispatch = useAppDispatch()
  const popup = useSelector<RootState, IProductPopup>((state) => state.productsStore.popup)
  const product = useSelector<RootState, IProduct | undefined>(
    (state) => state.productsStore.products?.[popup.category]?.[popup.product],
  )
  const close = () => dispatch(closePopup())
  return product ? (
    <Popup width="60%" open={popup.is} onClose={close} title={product.title} body={<PopupBody />} />
  ) : null
}

const PopupBody: FC = () => {
  const dispatch = useAppDispatch()
  const popup = useSelector<RootState, IProductPopup>((state) => state.productsStore.popup)
  const product = useSelector<RootState, IProduct | undefined>(
    (state) => state.productsStore.products?.[popup.category]?.[popup.product],
  )
  const media = product?.media || []
  const slides = media.map((image, index) => {
    return {
      children: (
        <div key={image.id} className="product_popup-media">
          {image.loading && <Loader withoutWrapper />}
          {!!image.file && (
            <img src={URL.createObjectURL(image.file)} alt={image.file_id} key={`${image.file_id}-${index}`} />
          )}
        </div>
      ),
    }
  })

  useEffect(() => {
    media.forEach((img, index) => {
      if (img.file === undefined && !img.loading) {
        const args = { fileId: img.file_id, product: popup.product, index, category: popup.category }
        dispatch(fetchProductFile(args))
      }
    })
  }, [media])

  return (
    <div className="product_popup">
      {!!media.length && <Carousel slides={slides} slidesPerView={1} />}
      <div className="product_popup-description">
        <span className="product_popup-description-title">Description product:</span>
        {parse(product?.description || '')}
      </div>
      <div className="product_popup-buy">
        <Button color="white">Add to card ${product?.price}</Button>
      </div>
    </div>
  )
}
