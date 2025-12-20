import "../css/SignUp.css"
import { BsArrowRightShort, BsEye, BsEyeSlash } from "react-icons/bs"
import { useState } from "react"

function SignUp() {
    const [email, setEmail, user, setUser, password, setPassword] = useState('')
    const [visible, setVisible] = useState('')

    return (
        <div className='signup-wrapper'>
            <div className='signup-card'>
                <h1>Create account</h1>
                <h5>Already have an account? <a href="/login">Sign in</a></h5>
                <form action="">
                    <div className='text-field'>
                        <input type="email" name="email" placeholder='E-mail' required value={email} onchange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='text-field'>
                        <input type="text" name="user" placeholder='User' required value={user} onchange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div className='text-field'>
                        <input name="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} />
                        <div className='eye' onClick={() => setVisible(!visible)}>
                            {visible ? <BsEye /> : <BsEyeSlash />}
                        </div>
                    </div>
                    <div className='text-field'>
                        <input name="password-confirm" placeholder='Confirm Password' required value={password} onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} />
                        <div className='eye' onClick={() => setVisible(!visible)}>
                            {visible ? <BsEye /> : <BsEyeSlash />}
                        </div>
                    </div>
                    <label className="check-field">
                        <input type="checkbox" name="checkbox" required />
                        <span></span>
                        <p>I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                    </label>
                    <button type="submit">Sign Up <span><BsArrowRightShort /></span></button>
                </form>
            </div>
        </div>
    )
}

// TODO: confirm password input

export default SignUp