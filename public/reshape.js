const listNav = document.getElementById('listNav');

const reshapeNavbar = () => {
    const status = sessionStorage.getItem('status');

    if(status == 'loggedIn'){
        const newElement = document.createElement('li');
        newElement.classList.add('nav-item');

        const insideElement = document.createElement('a');
        insideElement.classList.add('nav-link');
        insideElement.href = '#';
        insideElement.innerHTML = 'Profile';

        newElement.appendChild(insideElement);
        listNav.appendChild(newElement);
    }
};

window.onload = reshapeNavbar;