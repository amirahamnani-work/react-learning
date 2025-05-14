
interface ButtonsProps {
  children: string
  // color?: 'primary' | 'secondary'
  color?: string //question mark is for optional
  onClick: () => void
}

const Buttons = ({children, color, onClick}: ButtonsProps) => {
  return (
    <div>
        <button type="button" className={"btn btn-" + color}
        onClick={onClick}
        >
            {children}
        </button>

    </div>
  )
}

export default Buttons