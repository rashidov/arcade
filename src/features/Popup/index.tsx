import { CSSProperties, FC, ReactNode, useRef } from 'react'
import { Transition } from 'react-transition-group'
import { useDebounce } from '../../hooks/useDebounce'
import arrowLeft from '../../assets/icons/dark_arrow_left.svg'
import './style.scss'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const defStyle: CSSProperties = {
  width: 0,
  transition: 'width 300ms ease-in-out',
}

const defStyleBackground: CSSProperties = {
  opacity: 0,
  display: 'none',
  transition: 'opacity 200ms ease-in-out',
}
const transitionStylesBackground: any = {
  entering: { opacity: 1, display: 'block' },
  entered: { opacity: 1, display: 'block' },
  exiting: { opacity: 0, display: 'none' },
  exited: { opacity: 0, display: 'none' },
}

const defStyleWrapper: CSSProperties = {
  opacity: 0,
  transition: 'opacity 300ms ease-in-out',
}
const transitionStylesWrapper: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

interface PopupProps {
  open: boolean
  width: CSSProperties['width']
  timeout?: number
  onClose: () => void
  body: ReactNode
  title: string
}

export const Popup: FC<PopupProps> = ({ open, width, onClose, timeout = 300, body, title }) => {
  const popupRef = useRef<HTMLDivElement>(null)

  const timeoutBody = timeout - 70
  const visibleBody = useDebounce(open, timeoutBody)

  const transitionStyles: any = {
    entering: { width },
    entered: { width },
    exiting: { width: '0' },
    exited: { width: '0' },
  }

  useOnClickOutside(popupRef, onClose)

  return (
    <>
      <Transition in={open} timeout={timeout}>
        {(state) => (
          <div
            ref={popupRef}
            className="popup"
            style={{
              ...defStyle,
              ...transitionStyles[state],
            }}
          >
            <Transition in={open ? visibleBody : open} timeout={timeoutBody}>
              {(wrapperState) => (
                <div
                  className="popup-wrapper"
                  style={{
                    ...defStyleWrapper,
                    ...transitionStylesWrapper[wrapperState],
                  }}
                >
                  <div className="popup-wrapper-header">
                    <div className="popup-wrapper-header-close" onClick={onClose}>
                      <img src={arrowLeft} alt="close popup" />
                    </div>
                    <span className="popup-wrapper-header-title">{title}</span>
                  </div>
                  <div className="popup-wrapper-body">{body}</div>
                </div>
              )}
            </Transition>
          </div>
        )}
      </Transition>
      <Transition in={open} timeout={timeout}>
        {(backgroundState) => (
          <div
            className="popup_background"
            style={{
              ...defStyleBackground,
              ...transitionStylesBackground[backgroundState],
            }}
          />
        )}
      </Transition>
    </>
  )
}
