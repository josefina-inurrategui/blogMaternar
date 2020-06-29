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
        divRow.className = "row flex-wrap justify-content-center pt-3 mb-5";
        posts.forEach(element => {
            const title = element.Titulo;
            const img = element.Img;
            const prepost = element.Prepost;
            const divPosteo = document.createElement("div");
                divPosteo.className = "col-3 card paddingcero mx-2 my-2";
                divPosteo.dataset.toggle = "modal"
                divPosteo.dataset.target = "#modal1"
                const portada = document.createElement("img");
                portada.className = "card-img portadaimg";
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
        document.getElementById("close").addEventListener("click",()=>{
            document.getElementById("heart").className = "far fa-heart fa-2x"
        })
};
const searchInput = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")
const keywords = ["acuerdo","cambios","carga mental","carrera","celeste","compartir","comunidad","contacto","contención","contrato","crianza","cuarentena","cuentos","cuerpo","cuidado","cuidados","cultura","decisión","demanda","desafío","desahogo","Encierro","espera","estereotipo","estereotipos","experto","feminismo","fuerza","género","historia","ilusión","información","juego","juegos","juguetes","libertad","lucha","mandatos","maternidad","medicina","miedo","mitos","moraleja","niñez","normalidad","odio","pandemia","parto","paternidad","patrones","películas","pobreza","poder","profesión","programas","promesa","recuerdos","red","roles","rosa","rutina","sensibilidad","sociedad","sororidad","subjetividad","tareas","televisión","tiempo","vergüenza"]

/*
async function posteosEncontrados(){
    const posts = await getposts();
    const divRow = document.createElement("div");
    divRow.className = "row flex-wrap justify-content-center pt-3 mb-5";
    posts.forEach(element => {  
        const busqueda = searchInput.value 
        const findKey = element.clave.includes(busqueda) 

        findKey.forEach(element =>{
            if(findKey = true){
            console.log("miraa mamaa")  
            /*     blog.innerHTML = ""
            const title = element.Titulo;
            const img = element.Img;
            const prepost = element.Prepost;
            const divPosteo = document.createElement("div");
                divPosteo.className = "col-3 card paddingcero mx-2 my-2";
            divPosteo.dataset.toggle = "modal"
            divPosteo.dataset.target = "#modal1"
            const portada = document.createElement("img");
            portada.className = "card-img portadaimg";
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

            divPosteo.addEventListener("click",()=>{
            document.getElementById("TituloModal").innerHTML = element.Titulo
            document.getElementById("fotoModal").src = element.foto
            document.getElementById("posteoModal").innerHTML = element.Prepost + element.Post
            const heart = document.getElementById("heart")
            heart.addEventListener("click",()=>{
                heart.className = "fas fa-heart fa-2x text-danger"
            })
            })
        document.getElementById("close").addEventListener("click",()=>{
            document.getElementById("heart").className = "far fa-heart fa-2x"
        })  
         } 
        }) 
    })
}*/

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
        b.addEventListener("click", posteosEncontrados)
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }


  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
  autocomplete(searchInput,keywords)
