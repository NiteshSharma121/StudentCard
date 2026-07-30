import { useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import StudentList from './components/StudentList.jsx'
import Footer from './components/Footer.jsx'
import { StudentsProvider } from './context/StudentsContext.jsx'

function App() {
  const FetchData = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const api = await fetch('https://jsonplaceholder.typicode.com/posts')
          const result = await api.json()
          console.log('fetching data', result)
        } catch (err) {
          console.error('Fetch error', err)
        }
      }
      fetchData()
    }, [])

    return null
  }

  return (
    <StudentsProvider>
      <div className="dashboard-app">
        <Header title="Academic Dashboard" />
        <div className="dashboard-layout">
          <Sidebar />
          <main className="dashboard-main">
            <StudentList />
          </main>
        </div>
        <Footer />
      </div>
      <FetchData />
    </StudentsProvider>
  )
}

export default App
