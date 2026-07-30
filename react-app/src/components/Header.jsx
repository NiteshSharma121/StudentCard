import { useStudents } from '../context/StudentsContext.jsx'

function Header({ title }) {
  const { students } = useStudents()

  return (
    <header className="dashboard-header">
      <div>
        <p className="dashboard-subtitle">Academic Overview</p>
        <h1>{title}</h1>
        <p>{students.length} students currently enrolled</p>
      </div>
    </header>
  )
}

export default Header
