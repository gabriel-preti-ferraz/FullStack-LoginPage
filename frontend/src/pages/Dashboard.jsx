import "../css/Dashboard.css"
import Wrapper from "../components/Wrapper"

function Dashboard() {
    return (
        <Wrapper>
            <div className="dash-search">
                <input type="text" />
                <span>SIMBL DA BUSSOLA</span>
            </div>
            <div classname="users-field"></div>
        </Wrapper>
    )
}

export default Dashboard()