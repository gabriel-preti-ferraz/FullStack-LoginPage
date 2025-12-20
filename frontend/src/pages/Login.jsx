import '../css/Login.css'
import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"
import TextField from "../components/TextField"
import Button from "../components/Button"
import Divider from "../components/Divider"
import Wrapper from "../components/Wrapper"
import PasswordField from '../components/PasswordField';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Wrapper 
            headerContent={<>
                <h1>Log in to <br />your account</h1>
                <h5>Don't have an account? <a href="/signup">Sign up</a></h5>
            </>}

            formContent={<>
                <TextField
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                    value={values.email}
                    onChange={handleChange}
                />

                <PasswordField
                    name="password"
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    icon="right"
                    span={<BsArrowRightShort />}
                    text="Log in"
                />
            </>}

            footContent={<>
                <h5 className='forgot-h5'><a href="/pass-recovery">Forgot password?</a></h5>
                <Divider text="or" />
                <Button
                    className="google"
                    icon="left"
                    span={<FcGoogle />}
                    text="Sign In with google"
                />
            </>}
        />
    )
}

export default Login