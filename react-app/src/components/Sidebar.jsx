import { useStudents } from '../context/StudentsContext.jsx'

function Sidebar() {
  const { activeSection, setActiveSection } = useStudents()
  const sections = ['Overview', 'Students', 'Courses', 'Reports']

  return (
    <aside className="dashboard-sidebar">
      <h2>Navigation</h2>
      <ul>
        {sections.map((section) => (
          <li key={section} className={section === activeSection ? 'active' : ''}>
            <button type="button" onClick={() => setActiveSection(section)}>
              {section}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar

