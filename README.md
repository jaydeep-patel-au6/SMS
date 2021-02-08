SMS
The Student Management System is especially designed for PCM and PCB streams students . Nowadays in the corona pandemic all teaching, learning and admission processes are going online so we decided to develop a web application. In our project Admin department manages online inquiry, grants admission, creates timetables, manages attendance and marks,  manages fees and salaries. Students can see their attendance, marks, leave etc.  Students can create and manage tickets if they have any issues they can see and submit work assigned to them. Students can ask questions in forum and other fellow students can reply with solutions. 


Technologies used 
BackEnd : Expressjs, Nodejs
Database : MongoDB
FrontEnd : Html, Css
Javascript : Es6
Packages :  bcrypt, body-parser, dotenv, ejs, express, express-session, hbs, js-alert, jsonwebtoken, method-override,   mongoose, mongoose-findorcreate, passport, passport-local-mongoose, path, socket.io, popups


Operations with Functionality 

1) School Web Page(Dummay) 
Admission form inq
Admin login and sign up
Student login and sign up
Teacher login and sign up
display announcement
display timetable
Help desk - live chat

2) Admin Panel 
Admission Enquiry //display form data
Student data (display student table)
Manage student attendance (create form or mark system)
Time-Table (for student)
Tickets (read update only)

3) Student panel 
personal data // read, update
Marks (read only)
Attendance (read only)
Create tickets(CURD)

4) teacher panel
create marksheets monthly and 6 months test



Collections
Admin - admin login registration
admission_inquiries, inquiries for admission
announcement - for announcement
attendance - for student attendance
stud_regs - student data
student - student login registration
teacher - teacher login and registration
tickets - for ticket
timetable - student timetable


Routes
app.use("/adminlogin", adminlogin); - for admin login
app.use("/admin-deshboard", deshboard); - to go admin deshboard
app.use("/register-student", student); - display student list in admin deshboard
app.use("/anno", anno); for announment curd
app.use("/timetable", timetable); for timetable curd
app.use("/marksix", sixMonth); for 6 moth mark add 
app.use("/att", att); for student attendance
app.use("/admission-inq", admission); for admission inq
app.use("/ticket", ticket); for ticket
app.use("/admin", admin); for admin display
app.use("/return-deshboard", returnDesboard) retun to admin deshboard

app.use("/student", studentRoute); student login, register
app.use("/teacher", teacherRoute); teacher login register
app.use("/stu_reg", studRegRoute); student data
app.use("/dshbrd", studDash); student deshboard
app.use("/teacher", teacher); teacher deshboard


	          

