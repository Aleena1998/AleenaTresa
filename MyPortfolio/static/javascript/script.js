
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// scroll sections


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {




    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });



    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)



    // remove toggle icon and navbar when click navbar links 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbx1SARikGY51b_Xy2xs_5zHJGGxcBsQsyDuQY8uXJtTL90Sy1lkWNF8-QPG0tFSlXyH/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response=>{
        msg.innerHTML="Message Sent Successfully...............!"
        serTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();

            // Reload the form after submission
            location.reload();


    })
    .catch(error=>console.error('Error!',error.message))
})
