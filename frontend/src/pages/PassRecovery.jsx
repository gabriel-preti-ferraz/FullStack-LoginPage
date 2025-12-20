import "../css/PassRecovery.css"
import { BsArrowLeftShort } from "react-icons/bs"

function PassRecovery() {
    return (
        <div className='recovery-wrapper'>
            <div className='recovery-card'>
                <span><BsArrowLeftShort /></span>
                <h1>Forget Password</h1>
                <form action="">
                    <div className='text-field'>
                        <input type="email" name="email" placeholder='E-mail' required/>
                    </div>
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default PassRecovery