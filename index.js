const reviews = [
{
    id: 1,
    name: 'Susan Smith',
    job: 'Web Developer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate commodi, doloribus perspiciatis maxime ratione!'
},
{
    id: 2,
    name: 'Elysse Perry',
    job: 'UI/Ux Designer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate commodi, doloribus perspiciatis maxime ratione!'
},
{
    id: 3,
    name: 'Sara Jones',
    job: 'Back-End Engineer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate commodi, doloribus perspiciatis maxime ratione!'
},
{
    id: 4,
    name: 'Max Runner',
    job: 'Python Programmer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate commodi, doloribus perspiciatis maxime ratione!'
},
];

const prevbtn = document.querySelector('.prev');
const nxtbtn = document.querySelector('.nxt');
const surbtn = document.querySelector('.surprise');

const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

let crntItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson(crntItem);
})

function showPerson () {
    const item = reviews[crntItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nxtbtn.addEventListener("click", function() {
    crntItem++;
    if (crntItem > reviews.length - 1 ) {
        crntItem = 0;
    }
    showPerson(crntItem);
});

prevbtn.addEventListener("click", function() {
    crntItem--;
    if (crntItem < 0 ) {
        crntItem = reviews.length - 1;
    }
    showPerson(crntItem);
});

surbtn.addEventListener("click", function() {
    crntItem = randomNumber();
    showPerson(crntItem);
})

function randomNumber () {
    return Math.floor(Math.random() * reviews.length);
}
