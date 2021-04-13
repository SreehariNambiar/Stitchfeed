// alert("File is linked");

// To stop the elements from moing when resizing the window
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

/* box-shadow: -5px -5px 10px rgb(238, 238, 238), 5px 5px 5px #d9d9d9; */
    /* box-shadow: -5px -5px 10px rgb(255, 0, 0), 5px 5px 5px #ff0000; */
    /* box-shadow: -5px -5px 10px rgb(0, 255, 34), 5px 5px 5px #2bff00; */
    // box-shadow: -5px -5px 10px rgb(0, 162, 255), 5px 5px 5px #00c3ff;

    const people = document.querySelector(".people");
  const interest = document.querySelector(".interest");
  const arr = [people,interest];
  people.classList.add('is-active-2');
  
  people.addEventListener("click",()=>{
  
    people.classList.add('is-active-2');
    for(let l of arr){
      if(l != people){
        l.classList.remove('is-active-2');
      }
    }
  })

  interest.addEventListener("click",()=>{

    interest.classList.add('is-active-2');
    for(let l of arr){
      if(l != interest){
        l.classList.remove('is-active-2');
      }
    }
  })