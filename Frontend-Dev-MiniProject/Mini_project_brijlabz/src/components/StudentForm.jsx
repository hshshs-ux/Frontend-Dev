import React, { useState } from "react";

function StudentForm({ initialData, onCancel, onSave }) {
  const [name, setName] = useState(initialData?.name || "");
  const [section, setSection] = useState(initialData?.section || "");
  const [marks, setMarks] = useState(
    initialData?.marks !== undefined ? String(initialData.marks) : ""
  );
  const [grade, setGrade] = useState(initialData?.grade || "");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedSection = section.trim();
    const trimmedGrade = grade.trim().toUpperCase();
    const numericMarks = Number(marks);

    if (trimmedName.length === 0) {
      alert("Name is required.");
      return;
    }
    if (trimmedSection.length === 0) {
      alert("Section is required.");
      return;
    }
    if (Number.isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) {
      alert("Marks must be a number between 0 and 100.");
      return;
    }

    const allowedGrades = ["A", "B", "C", "D", "E", "F"];
    if (!allowedGrades.includes(trimmedGrade)) {
      alert("Grade must be one of A, B, C, D, E, or F.");
      return;
    }

    onSave({
      ...initialData,
      name: trimmedName,
      section: trimmedSection,
      marks: numericMarks,
      grade: trimmedGrade,
    });
  }

  return (
    <div className="card">
      <h2 className="section-title">
        {initialData ? "Edit Student" : "Add Student"}
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Section</label>
          <input
            className="input"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Marks (0–100)</label>
          <input
            className="input"
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Grade (A–F)</label>
          <input
            className="input"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
