import "../css/components/TextField.css"

function TextField({type, label, children, ...props}) {
    return (
        <div className='text-field'>
            {label && <label>{label}</label>}
            <input type={type} {...props} />
            {children && children}
        </div>
    )   
}

export default TextField