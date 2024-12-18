// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.style.textDecoration = "underline";
        }
    });

    // Handle dynamic content loading for specific pages
    if (document.getElementById("collegeTableBody")) {
        loadColleges();
    }

    if (document.getElementById("courseForm")) {
        populateCollegeDropdown();
    }

    if (document.getElementById("collegeForm")) {
        handleCollegeFormSubmission();
    }

    if (document.getElementById("courseTableBody")) {
        loadCourses();
    }

    if (document.getElementById("courseDetails")) {
        loadCourseDetails();
    }
});

// Show a loading spinner
function showLoadingSpinner(parent) {
    parent.innerHTML = `<div class="spinner">Loading...</div>`;
}

// Hide the loading spinner
function hideLoadingSpinner(parent) {
    const spinner = parent.querySelector(".spinner");
    if (spinner) {
        spinner.remove();
    }
}

// Load the list of colleges for the homepage
function loadColleges() {
    const tableBody = document.getElementById("collegeTableBody");
    showLoadingSpinner(tableBody);

    fetch("php/get_colleges.php")
        .then(response => response.json())
        .then(data => {
            hideLoadingSpinner(tableBody);

            if (data.error) {
                tableBody.innerHTML = `<tr><td colspan="3">Error: ${data.error}</td></tr>`;
                return;
            }

            if (data.length > 0) {
                data.forEach(college => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${college.id}</td>
                        <td>${college.name}</td>
                        <td>
                            <a class="table-action" href="college_details.html?college_id=${college.id}">View</a>
                            <button class="table-action" onclick="deleteCollege(${college.id})">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                tableBody.innerHTML = "<tr><td colspan='3'>No colleges found.</td></tr>";
            }
        })
        .catch(err => {
            hideLoadingSpinner(tableBody);
            tableBody.innerHTML = `<tr><td colspan="3">Error fetching colleges: ${err.message}</td></tr>`;
        });
}

// Populate the college dropdown for the Add Course page
function populateCollegeDropdown() {
    const collegeSelect = document.getElementById("collegeSelect");

    fetch("php/get_colleges.php")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(college => {
                    const option = document.createElement("option");
                    option.value = college.id;
                    option.textContent = college.name;
                    collegeSelect.appendChild(option);
                });
            } else {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "No colleges available";
                collegeSelect.appendChild(option);
            }
        })
        .catch(err => {
            alert("Error fetching colleges for dropdown: " + err.message);
        });
}

// Handle Add College form submission
function handleCollegeFormSubmission() {
    const collegeForm = document.getElementById("collegeForm");

    collegeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(collegeForm);

        fetch("php/add_college.php", {
            method: "POST",
            body: formData,
        })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(err => alert("Error adding college: " + err.message));
    });
}

// Handle Add Course form submission
function handleCourseFormSubmission() {
    const courseForm = document.getElementById("courseForm");

    courseForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(courseForm);

        fetch("php/add_course.php", {
            method: "POST",
            body: formData,
        })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(err => alert("Error adding course: " + err.message));
    });
}

// Load the list of courses for a specific college
function loadCourses() {
    const urlParams = new URLSearchParams(window.location.search);
    const collegeId = urlParams.get("college_id");
    const tableBody = document.getElementById("courseTableBody");

    showLoadingSpinner(tableBody);

    fetch(`php/get_courses.php?college_id=${collegeId}`)
        .then(response => response.json())
        .then(data => {
            hideLoadingSpinner(tableBody);

            if (data.length > 0) {
                data.forEach(course => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${course.id}</td>
                        <td>${course.name}</td>
                        <td>${course.description}</td>
                        <td>
                            <a class="table-action" href="course_details.html?course_id=${course.id}">View</a>
                            <button class="table-action" onclick="deleteCourse(${course.id})">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                tableBody.innerHTML = "<tr><td colspan='4'>No courses found.</td></tr>";
            }
        })
        .catch(err => {
            hideLoadingSpinner(tableBody);
            tableBody.innerHTML = `<tr><td colspan="4">Error fetching courses: ${err.message}</td></tr>`;
        });
}

// Load course details for the Course Details page
function loadCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("course_id");
    const courseDetails = document.getElementById("courseDetails");

    showLoadingSpinner(courseDetails);

    fetch(`php/get_course_details.php?course_id=${courseId}`)
        .then(response => response.json())
        .then(data => {
            hideLoadingSpinner(courseDetails);

            if (data) {
                courseDetails.innerHTML = `
                    <p><strong>Course Name:</strong> ${data.name}</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                    <p><strong>College:</strong> ${data.college_name}</p>
                `;
            } else {
                courseDetails.innerHTML = "<p>Course details not found.</p>";
            }
        })
        .catch(err => {
            hideLoadingSpinner(courseDetails);
            courseDetails.innerHTML = `<p>Error fetching course details: ${err.message}</p>`;
        });
}

// Delete a college
function deleteCollege(collegeId) {
    if (confirm("Are you sure you want to delete this college?")) {
        fetch(`php/delete_college.php?id=${collegeId}`, { method: "GET" })
            .then(response => response.text())
            .then(data => {
                alert(data);
                location.reload();
            })
            .catch(err => alert("Error deleting college: " + err.message));
    }
}

// Delete a course
function deleteCourse(courseId) {
    if (confirm("Are you sure you want to delete this course?")) {
        fetch(`php/delete_course.php?id=${courseId}`, { method: "GET" })
            .then(response => response.text())
            .then(data => {
                alert(data);
                location.reload();
            })
            .catch(err => alert("Error deleting course: " + err.message));
    }
}

// Go Back to the Previous Page
function goBack() {
    window.history.back();
}