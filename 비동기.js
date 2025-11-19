// document.getElementById("acync").addEventListener("click", function() {
//     const result = document.getElementById("acync");
//     result.textContent = "비동기 처리 완료!";

//     setTimeout(() => {
//         result.textContent += " 2초 후에 업데이트 되었습니다.";
//     }, 2000);

//     console.log("비동기 처리 시작");
// });

console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);
console.log("C");

