function AttendanceList() {
  const students = [
    { id: 1, name: "Ravi", present: true },
    { id: 2, name: "Meena", present: false },
    { id: 3, name: "Suresh", present: true }
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.present ? "Present" : "Absent"}
        </li>
      ))}
    </ul>
  );
}