import React, { createContext, useContext, useState } from 'react'

const StudentsContext = createContext(null)

export function StudentsProvider({ children }) {
  const [activeSection, setActiveSection] = useState('Overview')
  const [showStudents, setShowStudents] = useState(true)

  const students = [
    { id: 1, name: 'Aarav Patel', age: 19, course: 'Computer Science', grade: 'A', attendance: '96%' },
    { id: 2, name: 'Nitesh Sharma', age: 20, course: 'Physics', grade: 'B+', attendance: '88%' },
    { id: 3, name: 'Ashish Tomar', age: 18, course: 'Mathematics', grade: 'A-', attendance: '92%' },
    { id: 4, name: 'Priyanshu Rajput', age: 21, course: 'History', grade: 'B', attendance: '85%' },
    { id: 5, name: 'Shakti Tripathi', age: 22, course: 'Economics', grade: 'A+', attendance: '98%' },
  ]

  const toggleStudents = () => setShowStudents((prev) => !prev)

  return (
    <StudentsContext.Provider
      value={{ students, showStudents, toggleStudents, activeSection, setActiveSection }}
    >
      {children}
    </StudentsContext.Provider>
  )
}

export function useStudents() {
  const ctx = useContext(StudentsContext)
  if (!ctx) throw new Error('useStudents must be used within StudentsProvider')
  return ctx
}

export default StudentsContext
