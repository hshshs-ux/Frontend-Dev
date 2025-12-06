import React from "react";

function StudentList({
  students,
  searchText,
  onSearchChange,
  onLoad,
  onAdd,
  onEdit,
  onDelete,
  onViewDetails,
  onSortByName,
  onSortByMarks,
}) {
  const normalized = searchText.trim().toLowerCase();
  const filteredStudents =
    normalized.length === 0
      ? students
      : students.filter((s) => {
          return (
            s.name.toLowerCase().includes(normalized) ||
            s.section.toLowerCase().includes(normalized)
          );
        });

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="section-title">Student List</h2>
        <div>
          <button className="btn btn-primary" onClick={onLoad}>
            Load Students
          </button>
          <button className="btn btn-outline" onClick={onAdd}>
            Add Student
          </button>
        </div>
      </div>

      <div className="toolbar">
        <input
          className="input search-input"
          type="text"
          placeholder="Search by name or section..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div>
          <button className="btn btn-small btn-outline" onClick={onSortByName}>
            Sort by Name
          </button>
          <button className="btn btn-small btn-outline" onClick={onSortByMarks}>
            Sort by Marks
          </button>
        </div>
      </div>

      {filteredStudents.length === 0 ? (
        <p className="muted">No students to show.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button
                    className="btn btn-small"
                    onClick={() => onEdit(s)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-small btn-danger"
                    onClick={() => onDelete(s.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-small btn-outline"
                    onClick={() => onViewDetails(s)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
