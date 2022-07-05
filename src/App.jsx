import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
const Home = lazy(() => import('./components/Home/Home'))


const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className=''>Loading ...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App