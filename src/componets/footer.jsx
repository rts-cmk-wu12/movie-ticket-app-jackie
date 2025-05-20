import { RiMovie2Line } from "react-icons/ri";
import { CiBookmark, CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { MdPerson } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
export default function Footer() {



    return (
        <>

            <footer className="footer">
                <ul>
                    <li> <Link to={`/`}><IoMdHome /></Link></li>
                    <li> <Link to={`/Explore`}><RiMovie2Line /></Link></li>
                    <li><Link to=""><CiBookmark /></Link></li>
                    <li><Link to=""><MdPerson /></Link></li>

                </ul>
            </footer>
        </>
    );
}