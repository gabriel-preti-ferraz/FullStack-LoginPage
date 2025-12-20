import "../css/components/Wrapper.css"

function Wrapper({ headerContent, formContent, footContent, ...props }) {
    return (
        <div className="wrapper">
            <div className="card">
                {headerContent}
                <form {...props}>
                    {formContent}
                </form>
                {footContent}
            </div>
        </div>
    )
}

export default Wrapper