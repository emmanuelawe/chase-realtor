import Head from "next/head"
import {Box} from '@chakra-ui/react'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Chase Realtor</title>
        </Head>

        <Box maxW='1280px' m='auto'>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
        </Box>
    </>
  )
}

export default Layout