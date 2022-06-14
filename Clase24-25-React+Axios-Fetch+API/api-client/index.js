const usersContainer = document.getElementById("users")
const postsContainer = document.getElementById("posts")
const btnGetPosts = document.getElementById("btnGetPosts")
btnGetPosts.addEventListener("click", handleGetPosts)
const formLogin = document.getElementById("formLogin")
const formPost = document.getElementById("formPost")



//apenas se monta la app, lanzamos una petición HTTP de tipo GET a la API
let data = [];

function handleGetPosts() {
    fetch("http://localhost:3030/posts")
        .then(res => res.json())
        .then(json => renderPosts(json))
        .catch(err => console.log(err));
}

function renderPosts(posts) {
    posts.forEach(post => {

        let postTitle = document.createElement("h4")
        let postBody = document.createElement("p")
        postTitle.innerText = post.title
        postBody.innerText = post.body
        postsContainer.append(postTitle, postBody)
    })
}

function renderData(data) {
    data.forEach((el) => {
        const p = document.createElement("p")
        p.textContent = el.email
        usersContainer.append(p)
    })
}
fetch("http://localhost:3030/users")
    .then(res => res.json())
    .then(json => {
        data = json
        renderData(data)
    })
    .catch(err => console.log(err));


//El evento submit de formLogin lanzará una petición HTTP de tipo POST al endpoint auth/users. En el body cargaremos los campos del formulario, email y password.

formLogin.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formLogin)
    const obj = {
        email: data.get("email"),
        password: data.get("password")
    }

    fetch("http://localhost:3030/auth/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            localStorage.setItem("access_token", json.Access_Token)
        })
}
formPost.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formPost)
    const obj = {
        userid: +data.get("userid"),
        title: data.get("title"),
        body: data.get("body")
    }
    fetch("http://localhost:3030/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("access_token")
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}


