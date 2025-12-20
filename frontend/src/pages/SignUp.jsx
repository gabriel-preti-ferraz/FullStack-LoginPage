import "../css/SignUp.css"
import { BsArrowRightShort } from "react-icons/bs"
import { useState } from "react"
import Wrapper from "../components/Wrapper"
import TextField from "../components/TextField"
import Button from "../components/Button"
import PasswordField from "../components/PasswordField"

function SignUp() {
    const [values, setValues] = useState({
        email: '',
        user: '',
        password: '',
        confirmPassword: '',
    })
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.password != values.confirmPassword) {
            setError(`The passwords don't match!`)
            return
        }
        if (!checked) {
            setError("You must accept the Terms of Use and Privacy Policy.")
            return
        }
    }

    return (
        <Wrapper
            headerContent={<>
                <h1>Create account</h1>
                <h5>Already have an account? <a href="/login">Sign in</a></h5>
            </>}

            formProps={{onSubmit: handleSubmit}}
            
            formContent={<>
                <TextField
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                    value={values.email}
                    onChange={handleChange}
                />

                <TextField
                    name="user"
                    type="text"
                    placeholder="Username"
                    required
                    value={values.user}
                    onChange={handleChange}
                />                

                <PasswordField
                    name="password"
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                />

                <PasswordField
                    name="confirmPassword"
                    placeholder="Confirm your Password"
                    required
                    values={values.confirmPassword}
                    onChange={handleChange}
                />

                <label className="check-field">
                    <input type="checkbox" name="checkbox" onChange={(e) => setChecked(e.target.checked)}/>
                    <span></span>
                    <p>I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                </label>
            
                {error && <p  style={{ color: "red", fontSize: "0.9rem", marginTop: "4px", textAlign: "center" }}>{error}</p>}

                <Button
                    type="submit"
                    icon="right"
                    span={<BsArrowRightShort />}
                    text="Sign Up"
                />
            </>}
        />
    )
}

export default SignUp