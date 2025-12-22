import "../css/components/Wrapper.css"

function Wrapper({ children, headerContent, footContent, cardProps, wrapperProps }) {
    return (
        <div className="wrapper" {...wrapperProps}>
            <div className="card" {...cardProps}>
                {headerContent}
                {children}
                {footContent}
            </div>
        </div>
    )
}

export default Wrapper