import Head from 'next/head'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { NavbarProvider } from '../context/contextNavbar'
import axios from 'axios'
import { getCookie } from "cookies-next"
import { FotoProvider } from '../context/fotoNavbar'

function MyApp({ Component, pageProps }) {
  axios.defaults.headers.common = { Authorization: `Bearer ${getCookie("token")}` }

  return (
    <>
      <Head>
        <title>Segoro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <FotoProvider>
        <NavbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavbarProvider>
      </FotoProvider>
    </>
  )
}

export default MyApp
