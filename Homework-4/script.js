const postsEl = document.getElementById("posts");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => data.forEach((posts) => 
{

let container = document.createElement("div");
let userIdp = document.createElement('p');
let idp = document.createElement('p');
let title = document.createElement('p');
container.classList.add("post");

userIdp.innerText = "UserId: " + posts.userId;
idp.innerText = "Id: " + posts.id;
title.innerText = posts.title;

container.appendChild(userIdp);
container.appendChild(idp);
container.appendChild(title);

postsEl.appendChild(container);
}))