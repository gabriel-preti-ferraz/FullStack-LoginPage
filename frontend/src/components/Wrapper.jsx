import "../css/components/Wrapper.css"

function Wrapper({ children, headerContent, footContent, cardProps }) {
    return (
        <div className="wrapper">
            <div className="card" {...cardProps}>
                {headerContent}
                {children}
                {footContent}
            </div>
        </div>
    )
}

export default Wrapper