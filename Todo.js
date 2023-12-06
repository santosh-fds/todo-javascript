let enrollStudentname = document.getElementById("student-name")
let enrolledStudentlist = document.getElementById("student-list")
let enrollButton = document.getElementById("enroll")
let enrolledStudents = []

enrollButton.addEventListener("click", () => {
    let studentName = enrollStudentname.value
    // console.log(studentName);
    if (studentName) {
        let repeatedName = enrolledStudents.find((item) => {
            return item == studentName
        })
        if (repeatedName) {
            alert('This student is already in the list')
        }
        else {
            enrolledStudents.push(studentName)
            updateEnrolledStudentlist()
            enrollStudentname.value = ''
        }

    }
})

// enrollStudentname.addEventListener('keypress', event => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       enrollButton.click();
//     }
//   });

function updateEnrolledStudentlist(stu, ind) {
    enrolledStudentlist.innerHTML = '';
    enrolledStudents.forEach((student, index) => {
        let listItem = document.createElement('li');

        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        enrolledStudentlist.appendChild(deleteButton)

        let editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        enrolledStudentlist.appendChild(editButton)

        deleteButton.addEventListener("click", () => {
            deleteStudent(student)
        })

        editButton.addEventListener('click', () => {
            editStudent(student, index)

        })

        listItem.textContent = student;
        enrolledStudentlist.appendChild(listItem);
    })
}

function deleteStudent(students) {
    let data = enrolledStudents.filter((item) => {
        return item != students
    })
    enrolledStudents = [...data]
    updateEnrolledStudentlist()
}

function editStudent(students, index) {
    enrollStudentname.value = students

    enrolledStudents.map((x, ind) => {
        if (x == students) {
          return   value = ind
        }
    })
    enrollStudentname.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(value);
            enrolledStudents[value] = enrollStudentname.value
            updateEnrolledStudentlist(students, index)

        }
    })
    

}