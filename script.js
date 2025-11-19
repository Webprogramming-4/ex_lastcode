const user = {
    name : "김예은",
    age : 20,
    major : "IT학부"
};
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    result.innerHTML = `
        이름 : ${user.name} <br>
        나이 : ${user.age} <br>
        전공 : ${user.major}
    `;
});

const students = [
    {name: '김예은', age: 20, major: 'IT학부'},
    {name: '이수민', age: 22, major: '경영학부'},
    {name: '박지훈', age: 21, major: '경제학부'}
];
const arrayBtn = document.getElementById('arrayBtn');
const studentList = document.getElementById('studentList');

arrayBtn.addEventListener('click', () => {
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `이름: ${student.name}, 나이: ${student.age}, 전공: ${student.major}`;
        studentList.appendChild(li);
    });
});
