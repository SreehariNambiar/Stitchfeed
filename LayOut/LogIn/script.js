// alert("File is linked")
const button = document.querySelector(".btn");
const user = document.querySelector(".user");
const password = document.querySelector(".user-2");
const form = document.querySelector(".form");

//To get the password and the username
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(`Username:${form.elements[0].value}`)
    console.log(`Password:${form.elements[1].value}`)
})
