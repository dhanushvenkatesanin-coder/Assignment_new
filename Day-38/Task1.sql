CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100),
    marks INT
);
INSERT INTO students (student_name, marks) VALUES
('John', 98),
('Priya', 92),
('rahul', 88),
('Ravi', 60),
('ramesh', 95),
('rajesh', 82);
create view vw_student as
select student_name,marks from students where marks>80;
select * from vw_student;