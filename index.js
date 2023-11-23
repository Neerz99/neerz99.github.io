// hides the menu when a link is clicked
document.querySelectorAll('.menuItems li a').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.checkbox').checked = false;
    });
});

function showMore() {
    let showMoreBtn = document.querySelector('#showMoreBtn');
    let skills = ['skillSql', 'skillPython', 'skillLinux', 'skillApi'];
    skills.forEach(skill => {
        let element = document.querySelector(`.${skill}`);
        if (element.style.display !== 'block') {
            element.style.display = 'block';
            showMoreBtn.innerHTML = 'Voir moins';
        } else {
            element.style.display = 'none';
            showMoreBtn.innerHTML = 'Voir plus';
        }
    });
}



// // making the opened menu non-scrollable
// // NOT WORKING YET !!! (CLICKED-ON LINKS MAKES THE WHOLE PAGE NON-SCROLLABLE)
// document.querySelector('.checkbox').addEventListener('click', event => {
//     if (document.querySelector('.checkbox').checked) {
//         document.querySelector('body').style.overflow = 'hidden';
//     } else {
//         document.querySelector('body').style.overflow = 'auto';
//     }
// });