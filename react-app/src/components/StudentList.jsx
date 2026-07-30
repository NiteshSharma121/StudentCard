import StudentCard from './StudentCard.jsx'
import { useStudents } from '../context/StudentsContext.jsx'

function StudentList() {
  const { students, showStudents, activeSection } = useStudents()

  if (activeSection === 'Overview') {
    return (
      <section className="dashboard-section">
        <h2>Overview</h2>
        <p>Welcome to the academic dashboard. Use the navigation to explore student data, course summaries, and performance reports.</p>
        <p>There are currently {students.length} students in the system.</p>
      </section>
    )
  }

  if (activeSection === 'Courses') {
    return (
      <section className="dashboard-section">
        <h2>Courses</h2>
        <ul>
          <li>Computer Science</li>
          <li>Biology</li>
          <li>Mathematics</li>
          <li>History</li>
          <li>Economics</li>
        </ul>
      </section>
    )
  }

  if (activeSection === 'Reports') {
    return (
      <section className="dashboard-section">
        <h2>Reports</h2>
        <p>Student grades are monitored in real time and accessible through the dashboard.</p>
        <p>Toggle the student list to control which sections are visible.</p>
      </section>
    )
  }

  // default: Students section
  if (!showStudents) {
    return (
      <section className="dashboard-section empty-state">
        <h2>Students</h2>
        <p>Student details are currently hidden. Use the footer toggle to reveal the list.</p>
      </section>
    )
  }

  return (
    <section className="dashboard-section">
      <h2>Students</h2>
      <div className="student-card-list">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}

export default StudentList
