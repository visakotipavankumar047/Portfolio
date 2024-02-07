var typed = new Typed('.text', {
    strings: ['Web Developer','Full-Stack Developer','Java Developer','Back-End Developer','Front-End Developer','Python Developer'],
    typeSpeed: 50,
    loop:true
  });

 var type = new Typed('.info', {
    strings: ['Web Developer','Full-Stack Developer','Java Developer','Back-End Developer','Front-End Developer','Python Developer'],
    typeSpeed: 50,
    loop:true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a [href * =' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onClick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

