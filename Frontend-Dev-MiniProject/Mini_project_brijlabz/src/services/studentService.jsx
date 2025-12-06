const API_URL = "http://localhost:3001/students";

export async function getStudents() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to load students");
  return res.json();
}

export async function addStudent(student) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error("Failed to add student");
  return res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error("Failed to update student");
  return res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete student");
  return true;
}

export async function getStudentById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to load student details");
  return res.json();
}

