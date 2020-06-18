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
        divRow.className = "row flex-wrap justify-content-center pt-3";
        posts.forEach(element => {
            const title = element.Titulo;
            const img = element.Img;
            const prepost = element.Prepost;
            const divPosteo = document.createElement("div");
                divPosteo.className = "col-md-3 col-xs-12 card paddingcero mx-2 my-2";
            const portada = document.createElement("img");
                portada.className = "card-img portadaimg";
                portada.dataset.toggle = "modal"
                portada.dataset.target = "#modal"
                portada.src = img;
            const portadafooter = document.createElement("div")
                portadafooter.className = "card-img-overlay paddingcero  d-flex flex-column  justify-content-end"
            const textoTitulo = document.createElement("p");
                textoTitulo.className = "text-dark textoportada paddingcero text-bottom rounded";
                textoTitulo.innerHTML = title;
    
                divPosteo.appendChild(portada);
                portadafooter.appendChild(textoTitulo);
                divPosteo.appendChild(portadafooter)
                divRow.appendChild(divPosteo);
                blog.appendChild(divRow)

        divPosteo.addEventListener("mouseenter",()=>{
            textoTitulo.innerHTML = prepost
        })
        divPosteo.addEventListener("mouseleave",()=>{
            textoTitulo.innerHTML = title
        })              

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
