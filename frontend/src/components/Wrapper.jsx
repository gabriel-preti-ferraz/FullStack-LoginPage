import "../css/components/Wrapper.css"

function Wrapper({ children, headerContent, footContent }) {
    return (
        <div className="wrapper">
            <div className="card">
                {headerContent}
                {children}
                {footContent}
            </div>
        </div>
    )
}

export default Wrapper