import { useStudents } from '../context/StudentsContext.jsx'

function Footer() {
  const { showStudents, toggleStudents } = useStudents()

  return (
    <footer className="dashboard-footer">
      <button type="button" onClick={toggleStudents}>
        {showStudents ? 'Hide Student Details' : 'Show Student Details'}
      </button>
      <p>Use the toggle button to control whether the student list is visible.</p>
    </footer>
  )
}

export default Footer
