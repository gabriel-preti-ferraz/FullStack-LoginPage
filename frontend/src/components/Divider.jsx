import "../css/Divider.css"

function Divider({ text }) {
    return (
        <div className='divider'>
            {text && <span>{text}</span>}
        </div>
    )
}

export default Divider