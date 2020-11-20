import Link from "next/link";
import { useRouter } from "next/router";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
  const router = useRouter();

  return (
    <div>
      <div className="navbar">
        <Link href="/" className={router.pathname === "/favorites" && "active"}>
          <a>
            <FontAwesomeIcon
              icon={faHome}
              style={router.pathname === "/" && { color: "white" }}
            />
          </a>
        </Link>
        <Link href="/favorites">
          <a>
            <FontAwesomeIcon
              icon={faHeart}
              style={router.pathname === "/favorites" && { color: "white" }}
            />
          </a>
        </Link>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #4392f1;
          overflow: hidden;
          position: fixed;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }

        /* Style the links inside the navigation bar */
        .navbar a {
          display: block;
          color: #000;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
