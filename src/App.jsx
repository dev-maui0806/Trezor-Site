import { useState, useEffect, Suspense, lazy } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import ContentLoading from './components/ContentLoading'
import './App.css'

// Lazy load components for code splitting
const Dashboard = lazy(() => import('./components/Dashboard'))
const Settings = lazy(() => import('./components/Settings'))

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isLoading, setIsLoading] = useState(true)

  // Show loading screen on initial load and refresh
  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Show loading screen for 1.5 seconds

    return () => clearTimeout(timer)
  }, []) // Empty dependency array means this runs once on mount

  return (
    <div className="app">
      {isLoading && <LoadingScreen />}
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="main-content">
        <Suspense fallback={<ContentLoading />}>
          {currentPage === 'dashboard' && (
            <>
              <Header title="Dashboard" />
              <Dashboard setIsLoading={setIsLoading} />
            </>
          )}
          {currentPage === 'settings' && <Settings />}
        </Suspense>
      </div>
    </div>
  )
}

export default App
