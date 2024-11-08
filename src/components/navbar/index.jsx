import { Link } from "react-router-dom";
import logo from '../../assets/svg/logo.svg'
import { Button } from "antd";

const Navbar = () => {
    return (
        <nav className="flex-b py-[64px]">
            <img src={logo} alt="" />
            <ul className="flex-c gap-[42px] uppercase tracking-[2px]">
                <li>
                    <Link to="/our-company">OUR company</Link>
                </li>
                <li>
                    <Link to="/locations">LOCATIONS</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
            <div className="flex items-center gap-2">
                <Button type="link">
                    <Link to="/sign-in">Sign in</Link>
                </Button>
                <Button type="link">
                    <Link to="/sign-up">Sign up</Link>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar