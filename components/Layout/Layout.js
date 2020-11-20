import Head from "next/head";
import NavBar from "./components/NavBar";
const Layout = ({ children }) => (
  <div>
    <Head>
      <title>A very sad Noon Test Application</title>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
    <NavBar />
  </div>
);

export default Layout;
