import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="main-content">
        {currentPage === 'dashboard' && (
          <>
            <Header title="Dashboard" />
            <Dashboard />
          </>
        )}
        {currentPage === 'settings' && <Settings />}
      </div>
    </div>
  )
}

export default App
