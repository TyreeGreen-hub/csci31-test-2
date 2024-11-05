import Footer from './compnents/Footer'
import Header from './compnents/Header'
import Main from './compnents/Main'
import Navbar from './compnents/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-12">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}