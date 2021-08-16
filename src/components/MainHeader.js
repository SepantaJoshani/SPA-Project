import { Link } from "react-router-dom"

const MainHeader = (props)=>{
return <header>
    <na>
        <ul>
            <li>
                <Link to="/welcome" >Welcome</Link>
            </li>
            <li>
                <Link to="/products" >Products</Link>
            </li>
        </ul>
    </na>
</header>
}

export default MainHeader