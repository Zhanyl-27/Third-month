const postsEl = document.getElementById("postscontent");
const postform = document.getElementById("postform");

function generatePosts(event)
{
    postsEl.InnerHTML = "";
    let formData = new FormData(postform);
    let uid = formData.get("userid");
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => data.forEach((posts) => 
  {
    if(posts.userId == uid)
    {
        let container = document.createElement("div");
        let text = document.createElement('p');
        let title = document.createElement('h3');

        title.innerText = posts.title;
        text.innerText = posts.body;

        container.appendChild(title);
        container.appendChild(text);

        postsEl.appendChild(container);
        
    }
    console.log(posts);
  }));
  event.preventDefault();
}

postform.addEventListener('submit', generatePosts);