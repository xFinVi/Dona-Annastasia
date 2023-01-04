const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const nav = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    nav.classList.toggle('active')
})




const text = document.querySelectorAll('.ptext')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry =>{
            console.log(entry)
            entry.target.classList.toggle('fade-in', entry.isIntersecting)
            /* if (entry.isIntersecting) observer.unobserve(entry.target) */
   })
},
{
    rootMargin: "-150px"
})

text.forEach(fade => {
    observer.observe(fade)
})

