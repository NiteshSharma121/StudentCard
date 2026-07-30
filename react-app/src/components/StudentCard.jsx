import Attendence from './Attendence.jsx'

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Grade: {student.grade}</p>
      <Attendence attendance={student.attendance} />
    </div>
  )
}

export default StudentCard
