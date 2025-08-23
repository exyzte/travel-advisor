const nav = document.querySelector('nav')
fetch('./navbar.html')
.then(response => response.text())
.then(data=>{
    nav.innerHTML = data;
})
