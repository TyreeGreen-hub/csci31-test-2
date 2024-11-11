import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Main />
      </div>
    </div>
  )
}
