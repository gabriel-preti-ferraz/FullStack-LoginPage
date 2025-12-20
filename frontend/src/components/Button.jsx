import "../css/components/Button.css"

function Button({text, span, icon, ...props}) {
    return (
        <button {...props}>
            {icon === "left" && <span className="icon-left">{span}</span>}
            {text}
            {icon === "right" && <span className="icon-right">{span}</span>}
        </button>
    )
}

export default Button