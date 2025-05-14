// racef for shortcut

import { ReactNode } from "react"

interface AlertProps {
    // text: string
    children: ReactNode // senang nak buat element lain
    onClose?: () => void
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
      <div className="alert alert-danger alert-dismissible " role="alert">
          {children}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
              onClick={onClose}
          ></button>
      </div>
  )
}

export default Alert