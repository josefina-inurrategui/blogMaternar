const lastPostSpace = document.getElementById("lastPost");

placeLastPosts();
async function getposts (){
    const posts = await fetch('/post.json');
    const jsonPost = await posts.json();
            console.log("yeahp");
    return jsonPost;
};

async function placeLastPosts(){
    const posts = await getposts();
    const lastPosts = posts.slice(0,3);
            console.log(lastPosts);
    const divRow = document.createElement("div");
        divRow.className = "row flex-wrap justify-content-between pt-5 mb-5";
    lastPosts.forEach(element => {
        const title = element.Titulo;
        const img = element.Img;
        const prepost = element.Prepost;
        const divPosteo = document.createElement("div");
            divPosteo.className = "col-8 col-md-3 card paddingcero mx-2 my-2 ";
            divPosteo.dataset.toggle = "modal"
            divPosteo.dataset.target = "#modal1"
        const portada = document.createElement("img");
            portada.className = "card-img portadaimg ";
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
            lastPostSpace.appendChild(divRow)

        divPosteo.addEventListener("mouseenter",()=>{
            textoTitulo.innerHTML = prepost
        })
        divPosteo.addEventListener("mouseleave",()=>{
            textoTitulo.innerHTML = title
        })
        divPosteo.addEventListener("click",()=>{
            document.getElementById("TituloModal").innerHTML = element.Titulo
            document.getElementById("fotoModal").src = element.foto
            document.getElementById("posteoModal").innerHTML = element.Prepost + element.Post
            const heart = document.getElementById("heart")
            heart.addEventListener("click",()=>{
                heart.className = "fas fa-heart fa-2x text-danger"
            })
        })
        

    })
};
