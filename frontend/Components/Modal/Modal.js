import { useRef, useEffect } from 'react'

const Modal = ({ children, toggle }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (evt) => {
      const onModal =
        modalRef?.current && modalRef?.current.contains(evt.target)

      if (!onModal) {
        toggle(false)
      }
    }
    const handleKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        toggle(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggle, modalRef])

  return (
    <div
      className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-gray-500"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7' }}
    >
      <div className="h-screen flex flex-col items-center justify-center">
        <div
          ref={modalRef}
          className="w-full sm:w-600 flex flex-col justify-center fixed border bg-white border-gray-300 rounded-lg shadow-lg p-4 pb-8"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
export default Modal