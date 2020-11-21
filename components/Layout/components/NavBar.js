import Link from "next/link";
import { useRouter } from "next/router";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const router = useRouter();

  return (
    <div>
      <div className="navbar">
        <Link href="/">
          <a className={router.pathname === "/" && "active"}>
            <p className="hide-label">Home</p>
            <div className="hide-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </a>
        </Link>
        <Link href="/favorites">
          <a className={router.pathname === "/favorites" && "active"}>
            <p className="hide-label">Liked</p>
            <div className="hide-icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        @media only screen and (min-device-width: 1440px) {
          .navbar {
            top: 0;
            background-color: #4392f1;
            overflow: hidden;
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
          }
          .hide-icon {
            display: none !important;
          }
        }
        @media only screen and (max-device-width: 1440px) {
          .navbar {
            background-color: #4392f1;
            overflow: hidden;
            position: fixed;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            height: 5%;
          }
          .hide-label {
            display: none !important;
          }
        }
        @media only screen and (min-device-width: 500px) and (max-device-width: 1440px) {
          .navbar {
            height: 15%;
          }
        }
        .active {
          color: white !important;
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
