import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list"); // "list" | "form" | "details"
  const [selectedStudent, setSelectedStudent] = useState(null);

  async function handleLoadStudents() {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      alert(err.message);
    }
  }

  function handleAddClick() {
    setSelectedStudent(null);
    setMode("form");
  }

  function handleEditClick(student) {
    setSelectedStudent(student);
    setMode("form");
  }

  function handleViewClick(student) {
    setSelectedStudent(student);
    setMode("details");
  }

  async function handleDeleteClick(id) {
    if (!window.confirm("Delete this student?")) return;
    try {
      await deleteStudent(id);
      alert("Student deleted. Click 'Load Students' to refresh.");
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleSave(studentData) {
    try {
      if (studentData.id) {
        await updateStudent(studentData.id, studentData);
        alert("Student updated. Click 'Load Students' to refresh.");
      } else {
        await addStudent(studentData);
        alert("Student added. Click 'Load Students' to refresh.");
      }
      setMode("list");
      setSelectedStudent(null);
    } catch (err) {
      alert(err.message);
    }
  }

  function handleCancelForm() {
    setMode("list");
    setSelectedStudent(null);
  }

  function handleBackFromDetails() {
    setMode("list");
    setSelectedStudent(null);
  }

  return (
    <div style={{ padding: "16px" }}>
      <h1>Student Result Management System</h1>

      {mode === "list" && (
        <StudentList
          students={students}
          onLoad={handleLoadStudents}
          onAdd={handleAddClick}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onViewDetails={handleViewClick}
        />
      )}

      {mode === "form" && (
        <StudentForm
          initialData={selectedStudent}
          onCancel={handleCancelForm}
          onSave={handleSave}
        />
      )}

      {mode === "details" && (
        <StudentDetails student={selectedStudent} onBack={handleBackFromDetails} />
      )}
    </div>
  );
}

export default App;
