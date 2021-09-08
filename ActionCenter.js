const menuList = ['Audio', 'Statistiques', 'Serveur', 'Console', 'Changer de serveur', 'Paramètres'];
const menuIcons = ['fa-music', 'fa-chart-bar', 'fa-server', 'fa-laptop-code','fa-undo-alt', 'fa-wrench'];
function toggleMenu() {
    var menuItem = document.getElementById("include-header");
    var navItem = document.getElementById("menu");
    var selected = navItem.querySelector(".selected");
    selected.classList.toggle("beautify");
    var i = 0;
    if(menuItem.clientWidth > 95){//Il faut réduire le menu
        document.getElementById("content").style.gridTemplateColumns = "50px auto";
        menuItem.querySelector("#header").innerHTML = '<h1><i class="fas fa-plus" id="toggleMenu" onclick="toggleMenu();"></i></h1>';
        navItem.querySelectorAll("a").forEach(ele => {
            ele.innerHTML = '<li><i class="fas '+menuIcons[i]+'"></i></li>';
            ele.style.fontSize="35px";
            i++;
        });
    }else{
        document.getElementById("content").style.gridTemplateColumns = "min(30%, 300px) auto";
        menuItem.querySelector("#header").innerHTML = '<h1>Vulcain <i class="fas fa-minus auto" id="toggleMenu" onclick="toggleMenu();"></i></h1>\n<h2>Contrôle ton bot préféré !</h2>';
        navItem.querySelectorAll("a").forEach(ele => {
            ele.innerHTML = menuList[i];
            ele.style.fontSize="18px";
            i++;
        });
    }
}

function shortString(sel){
    var i = 0;
    const ele = document.querySelectorAll(sel);
    if(ele && ele.length){
        var limit;
        for(const element of ele){
            limit = element.getAttribute('size-limit');
            if(limit){
                let text = element.innerText;
                if(text.length > limit){
                    element.innerText = `${text.substring(0, limit - 3).trim()}...`;
                }
            }
        }
    }
}

function openLink(page, element){
    var pageName = page.replace(".html", "");
    var currentElement = $(".selected");
    $("#include-content")[0].className = '';
    $("#include-content").load(page, function(resp, status, xhr){
        if(status == "error"){
            $("#include-content").html("Error "+xhr.status+"\nImpossible de charger la page. Redirection...");
            currentElement.click();
        }else{
            element.classList.addClass("selected");
        }
    }).addClass(pageName);
    //Changer l'affichage
    if(element !== undefined){
        document.getElementById('menu').getElementsByClassName('selected')[0].className = "";
        element.className  = "selected beautify";
    }
}
