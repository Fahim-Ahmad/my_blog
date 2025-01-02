////////////////////////////////////////// for debugging
// const body = document.querySelector('body');
// const elements = document.querySelectorAll('div, .container, nav, footer');
// let debug = false;

// body.addEventListener('click', function () {
//     elements.forEach(element => {
//         if (!debug) {
//             element.style.border = '1px solid var(--col-primary)';
//         } else {
//             element.style.border = '';
//         }
//     });
//     debug = !debug;
// });

////////////////////////////////////////// dark-light background
const target = ['body', 'nav', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'i', 'u', 'pre']
const changeTheme = document.querySelector('.change-theme');

function addDarkTheme(e) {
    const target = document.querySelectorAll(e);
    target.forEach(element => {
        element.classList.add('dark-theme');
    });
    console.log('dark: ', changeTheme.querySelector('i'));
    changeTheme.querySelector('i').classList.add('fa-sun');
    changeTheme.querySelector('i').classList.remove('fa-moon');
}

function removeDarkTheme(e) {
    const target = document.querySelectorAll(e);
    target.forEach(element => {
        element.classList.remove('dark-theme');
    });
    console.log('light: ', changeTheme.querySelector('i'));
    changeTheme.querySelector('i').classList.remove('fa-sun');
    changeTheme.querySelector('i').classList.add('fa-moon');
}

var dark = localStorage.getItem('dark-theme') === 'true';
if (dark) {
    addDarkTheme(target);
}

changeTheme.addEventListener('click', function () {
    dark = !dark;
    if (dark) {
        addDarkTheme(target);
        
    } else {
        removeDarkTheme(target);
    }
    localStorage.setItem('dark-theme', dark);
});


////////////////////////////////////////// EN/DE Languages

////////////////////////////////////////// update footer year
const currentYear = new Date().getFullYear();
const currentYearElement = document.querySelector('.currentYear')
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

////////////////////////////////////////// add margin-right to eeach element in education & skills section
const educationSkills = document.querySelectorAll('.education-skills ul li i')
console.log(educationSkills);
educationSkills.forEach(e => {
    e.classList.add('mr-3');
});
