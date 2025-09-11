import './App.css'
import bg_img from './assets/bg_img.jpg'
import PortfolioBook from './components/PortfolioBook'

function App() {
  return (
    <div style={{backgroundImage: `url(${bg_img})`}}
      className="w-full min-h-[100vh] flex justify-center items-center
      bg-no-repeat bg-center bg-cover"
    >
      <PortfolioBook/>
    </div>
  )
}

export default App
