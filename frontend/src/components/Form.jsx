function Form({formContent, formProps}) {
    return (
        <form {...formProps}>
            {formContent}
        </form>
    )
}

export default Form()