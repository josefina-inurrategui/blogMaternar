const blog = document.getElementById("blog");


async function getposts (){
    const posts = await fetch('/post.json');
    const jsonPost = await posts.json();
            console.log("yeahp");
    return jsonPost;
};
placeAllPosts();
async function placeAllPosts(){
    const posts = await getposts();
              console.log(posts);
    const divRow = document.createElement("div");
        divRow.className = "row flex-wrap justify-content-center pt-5";
    posts.forEach(element => {
        const title = element.Titulo;
        const img = element.Img;
        const divPosteo = document.createElement("div");
            divPosteo.className = "col-md-4 col-xs-12 text-center py-3";
        const portada = document.createElement("img");
            portada.className = "img-thumbnail portadas shadow";
            portada.dataset.toggle = "modal"
            portada.dataset.target = "#modal"
            portada.src = img;
        const textoTitulo = document.createElement("p");
            textoTitulo.className = "text-dark bg-warning postTitulo mx-auto rounded";
            textoTitulo.innerHTML = title;

            divPosteo.appendChild(portada);
            divPosteo.appendChild(textoTitulo);
            divRow.appendChild(divPosteo);
            blog.appendChild(divRow)

    portada.addEventListener("click",()=>{
        document.getElementById("TituloModal").innerHTML = element.Titulo
        document.getElementById("fotoModal").src = element.foto
        document.getElementById("posteoModal").innerHTML = element.Prepost + element.Post
        const heart = document.getElementById("heart")
        heart.addEventListener("click",()=>{
            heart.className = "fas fa-heart fa-2x text-danger"
        })
    })
})
    document.getElementById("close").addEventListener("click",()=>{
        document.getElementById("heart").className = "far fa-heart fa-2x"
    })




};
    /* modal */

/* <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
    Launch demo modal */
