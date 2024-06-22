import { Outlet} from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import ChatBot from '../ChatBot/ChatBot'
import ScrollToTopButton from '../Scroll Up/Scrollup'

function Layout() {
  return <>
      <Nav /> 
        <Outlet />
      <Footer />
      <ScrollToTopButton />
      <ChatBot />
  </>
}
export default Layout
