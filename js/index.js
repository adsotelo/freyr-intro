const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = "Adrian Sotelo " + thisYear;
footer.appendChild(copyright);
console.log(thisYear);

let skills = ['Bilingual', 'Great leader', 'Extremely productive', 'Self-starter', 'Good attitude', 'Communicative', 'Multitasker', 'Organized', 'Hard worker'];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
    console.log(skills[i]);
}

