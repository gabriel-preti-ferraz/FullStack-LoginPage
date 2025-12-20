import "../css/components/Wrapper.css"

function Wrapper({ headerContent, formContent, footContent, formProps }) {
    return (
        <div className="wrapper">
            <div className="card">
                {headerContent}
                <form {...formProps}>
                    {formContent}
                </form>
                {footContent}
            </div>
        </div>
    )
}

export default Wrapper