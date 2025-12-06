import React from "react";

function StudentDetails({ student, onBack }) {
  if (!student) return null;

  return (
    <div className="card">
      <h2 className="section-title">Student Details</h2>
      <div className="details-grid">
        <div>
          <span className="detail-label">ID</span>
          <span className="detail-value">{student.id}</span>
        </div>
        <div>
          <span className="detail-label">Name</span>
          <span className="detail-value">{student.name}</span>
        </div>
        <div>
          <span className="detail-label">Section</span>
          <span className="detail-value">{student.section}</span>
        </div>
        <div>
          <span className="detail-label">Marks</span>
          <span className="detail-value">{student.marks}</span>
        </div>
        <div>
          <span className="detail-label">Grade</span>
          <span className="detail-value">{student.grade}</span>
        </div>
      </div>
      <button className="btn btn-outline" onClick={onBack}>
        Back to List
      </button>
    </div>
  );
}

export default StudentDetails;
