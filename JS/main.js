document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("errorMessage");
    // Placeholder credentials
    const DEMO_EMAIL = "admin@school.com";
    const DEMO_PASSWORD = "admin123";
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        // Goes to dashboard once logged in successfully
        window.location.href = "index.html";
    } else {
        error.style.display = "block";
        error.textContent = "Incorrect email or password.";
    }
});

// Logout function
function logout() {
    window.location.href = 'login.html';
}

// Classes logic
let classes = [];
function renderClasses() {
    const tbody = document.getElementById('classesTableBody');
    tbody.innerHTML = '';
    classes.forEach(cls => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cls.className}</td>
            <td>${cls.capacity}</td>
            <td>${cls.studentCount || 0}</td>
            <td>${cls.teacherID || ''}</td>
            <td>
                <button class='btn btn-sm btn-custom me-2' onclick='editClass(${cls.classID})'>Edit</button>
                <button class='btn btn-sm btn-danger' onclick='deleteClass(${cls.classID})'>Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
function addOrUpdateClass(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('classID').value);
    const name = document.getElementById('className').value;
    const capacity = parseInt(document.getElementById('classCapacity').value);
    const teacherID = parseInt(document.getElementById('teacherID').value);

    if(id) {
        // Update
        const cls = classes.find(c => c.classID === id);
        cls.className = name;
        cls.capacity = capacity;
        cls.teacherID = teacherID;
    } else {
        // Add
        const newClass = { classID: Date.now(), className: name, capacity: capacity, studentCount: 0, teacherID: teacherID };
        classes.push(newClass);
    }
    renderClasses();
    bootstrap.Modal.getInstance(document.getElementById('classModal')).hide();
    document.getElementById('classForm').reset();
}
function editClass(id) {
    const cls = classes.find(c => c.classID === id);
    document.getElementById('classID').value = cls.classID;
    document.getElementById('className').value = cls.className;
    document.getElementById('classCapacity').value = cls.capacity;
    document.getElementById('teacherID').value = cls.teacherID;
    new bootstrap.Modal(document.getElementById('classModal')).show();
}
function deleteClass(id) {
    if(confirm('Are you sure you want to delete this class?')) {
        classes = classes.filter(c => c.classID !== id);
        renderClasses();
    }
}
document.getElementById('classForm').addEventListener('submit', addOrUpdateClass);
renderClasses();