import Head from "next/head";
import NavBar from "./components/NavBar";
const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Noon Test Application</title>
      <meta name="viewport" content="width=device-width,maximum-scale=1.0" />
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
