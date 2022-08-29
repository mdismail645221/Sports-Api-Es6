const commentPostAPI = () =>{
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res=>res.json())
    .then(data => displaycomment(data.slice(0, 20)))
}

const displaycomment = (data) => {
    // console.log(data)
    const commentsElement = document.getElementById('comments-api');
    commentsElement.classList.add('comment');
    data.forEach(comment => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('single-comment');
        newDiv.innerHTML = `
            <div>
                <h2>ID:${comment.id}</h2>
                <h3>NAME:${comment.name}</h3>
                <h4>EMAIL:${comment.email}</h4>
                <p>DETAILS:${comment.body}</p>
                <button onclick="posttedId('${comment.postId}')"> Posted Id: ${comment?.postId}
            </div>
        `;
        commentsElement.appendChild(newDiv);
    })
}

const posttedId = (postId) =>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res=>res.json())
  .then(data=>DisplayPostedID(data))
}

const DisplayPostedID = (data) =>{
    console.log(data)
   const abc = document.getElementById('posted-container');
   abc.textContent = '';
   const div = document.createElement('div');
   div.innerHTML = `
    <h1>${data.title}</h1>
   `;
   abc.appendChild(div)

}


commentPostAPI('')