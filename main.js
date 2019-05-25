function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".noticias-direita").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
        //var div2 = document.createElement("div");
        //div2.innerHTML = p;
        //document.body.appendChild(div2);
    });
}



// TESTE - DANILO
function montarPagina1(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".grid_8").forEach(function(div){
        alert("1 forEach");
        var as = div;
        Array.from(as).forEach(function(a){
            alert("1 array");
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
        //var div2 = document.createElement("div");
        //div2.innerHTML = p;
        //document.body.appendChild(div2);
    });
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //montarPagina1(this.responseText);
        montarPagina(this.responseText);
        alert("OI");
      }
    };
    
  //https://yesodaula-romefeller.c9users.io/url/s/www.sosma.org.br
  xhttp.open("GET", "https://yesodaula-romefeller.c9users.io/url/s/www.sosma.org.br", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;