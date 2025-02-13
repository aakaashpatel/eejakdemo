import Router from "../../router/Router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout = () => {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default Layout