// Constant variables 

const sections = document.querySelectorAll('.section');
const pageBtns = document.querySelectorAll('.controlls');
const pageBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-body');
const subBtn = document.querySelector('#btn-submit');


// functions 

function pageSwitch() {
  // change active-pg class on clicked button 
  for(let i =0; i < pageBtn.length; i++) {
    pageBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.active-pg');
      currentBtn[0].className = currentBtn[0].className.replace('active-pg', '');
      this.className += ' active-pg';
    })
  }
  // Add active class to the section linked by id to the active-pg button 
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id) {
      // remove active class from other buttons, and add it to the current one
      pageBtn.forEach((btn) => {
        btn.classList.remove('active')

        console.log(btn)
      })
      e.target.classList.add('active')

      //Hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })
      const element = document.getElementById(id);
      element.classList.add('active')
      
    }
  })
  subBtn.addEventListener('click', () => alert("Thank you for submiting! I will look prettier in the future :)"));
}

pageSwitch()