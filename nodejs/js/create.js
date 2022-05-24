const form = document.querySelector("form")
const url = "http://localhost:3000/posts"
const createPost = async(e) => {
    e.preventDefault()
    let data = {
        title: form.title.value,
        content: form.content.value,
        author: 'Admin'
    }
    await fetch(url, {
        metho: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json '
        }
    })
}
form.addEventListener("submit", createPost)
    // const renderposts = async() => {
    //     let uri = "http://localhost:3000/posts";
    //     const res = await fetch(uri);
    //     const posts = await res.json();
    //     console.log(posts);
    // }
    // window.addEventListener('DOMContentLoaded', () => renderposts());