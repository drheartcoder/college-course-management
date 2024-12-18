# College & Course Management System

This is a simple web application for managing colleges and courses. The application allows you to:

- Add colleges
- Add courses
- View courses related to specific colleges
- Display detailed information about each course

## Features

1. User-friendly frontend designed with HTML and CSS.
2. Backend implemented in PHP for handling data processing and database interactions.
3. MySQL database to store information about colleges and courses.
4. Interactive JavaScript for user interactions.

---

## Installation and Setup

### **1. Prerequisites**

Before you begin, ensure you have the following installed:

- [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/) for running PHP and MySQL.
- A modern web browser (e.g., Chrome, Firefox).
- A text editor (e.g., VS Code, Sublime Text).

---

### **2. Setting Up the Project**

1. Clone or download this repository to your local machine:

   ```bash
   git clone https://github.com/drheartcoder/college-course-management.git
   ```

2. Move the project folder to the `htdocs` directory if using XAMPP, or to the equivalent directory in your server setup.

3. Navigate to the project folder:
   ```bash
   cd college-course-management
   ```

---

### **3. Setting Up the Database**

1. Start your Apache and MySQL services from the XAMPP/WAMP control panel.

2. Open [phpMyAdmin](http://localhost/phpmyadmin) in your browser.

3. Create a new database:

   ```sql
   CREATE DATABASE college_courses;
   USE college_courses;
   ```

4. Import the `sql/database.sql` file:
   - In phpMyAdmin, go to the `Import` tab.
   - Choose the `sql/database.sql` file from this project.
   - Click `Go` to execute the script and create the necessary tables.

---

### **4. Configuring the Database Connection**

1. Open the `php/db.php` file in your text editor.

2. Update the following variables as per your MySQL setup:
   ```php
   $servername = "localhost";
   $username = "root";  // Update if your MySQL username is different
   $password = "";      // Update if your MySQL password is set
   $dbname = "college_courses";
   ```

---

### **5. Running the Application**

1. Open your web browser and navigate to:

   ```
   http://localhost/college-course-management/index.html
   ```

2. Use the navigation links to:
   - Add a new course.
   - Add a new college.
   - View courses related to a specific college.

---

## Project File Structure

```
project/
│
├── index.html               # Main page
├── add_course.html          # Page to add courses
├── add_college.html         # Page to add colleges
├── css/
│   ├── style.css            # CSS for styling
├── js/
│   ├── main.js              # JavaScript for interactions
├── php/
│   ├── db.php               # Database connection
│   ├── add_course.php       # Script to add courses
│   ├── add_college.php      # Script to add colleges
│   ├── get_colleges.php     # Script to retrieve colleges
│   ├── get_courses.php      # Script to retrieve courses for a college
│   ├── get_college_details.php # Script to retrieve college details
│   ├── get_course_details.php # Script to retrieve course details
│   ├── delete_college.php   # Script to delete a college
│   ├── delete_course.php    # Script to delete a course
├── sql/
│   ├── database.sql         # SQL schema for the project
```

---

## Usage Guide

### **Adding a College**

1. Navigate to `Add Colleges` from the homepage.
2. Fill in the college name in the form.
3. Submit the form to save the college in the database.

### **Adding a Course**

1. Navigate to `Add Courses` from the homepage.
2. Fill in the course name and description in the form.
3. Submit the form to save the course in the database.

### **Viewing Related Courses for a College**

1. Navigate to `Add Colleges` and scroll to the `View Courses for a College` section.
2. Select a college from the dropdown menu.
3. The courses related to the selected college will be displayed dynamically.

### **Viewing Course Details**

1. Use the course link from the related courses list.
2. Detailed information about the course, including its description and associated college, will be displayed.

---

## Troubleshooting

### Common Issues

1. **Database Connection Error**:

   - Ensure your MySQL server is running.
   - Verify the database credentials in `php/db.php`.

2. **CSS or JavaScript Not Loading**:

   - Ensure the correct file paths for `css/style.css` and `js/main.js`.

3. **404 Not Found Errors**:
   - Verify that the project is placed in the correct server directory (`htdocs` for XAMPP).
