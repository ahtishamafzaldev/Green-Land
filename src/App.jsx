import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from'./components/Category'
import Product from'./components/Product'
import PlantGuide from './components/PlantGuide'
import PlantProducts from './components/PlantProducts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="min-h-screen bg-white">
      <Header />
      <Hero />
     <Category/>
     <Product/>
     <PlantGuide/>
     <PlantProducts/>
    </div>
  
  )
}

export default App;