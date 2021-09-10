class VulcainWebSocket{
    #serverId;
    addr;
    constructor(stateElement, addr){
        this.stateElement = stateElement;
        this.addr = addr;
        this.ws = this.#openWebSocket(addr, stateElement);
    }
    
    set serverId(id){
        this.#serverId = id;
    }

    get serverId(){
        return this.#serverId;
    }

    handleJSON = function (json) {
        switch (json.action) {
            case "GuildList":
                var list = document.getElementById('guilds');
                var innHtml = list.innerHTML;
                console.log('Ajout des guildes. Taille: %o', json.data.length);
                this.serverId = json.data[0].id;
                for(var i = 0; i< json.data.length; i++){
                    innHtml += '<option value="'+json.data[i].id+'">'+json.data[i].name+' - '+json.data[i].owner+'</option>';
                }
                innHtml += '<optgroup label="Nom du serveur - Nom du propriétaire"></optgroup>'
                list.innerHTML = innHtml;
                this.stateElement.innerText = "Prêt à l'utilisation!";
                break;
        
            default:
                displayText(JSON.stringify(json));
                break;
        }
    }

    sendRequest = function (json){
        console.log(json);
        this.ws.send(JSON.stringify(json));
    }

    refresh = function(){
        this.ws.close(1000);
        this.#openWebSocket(this.addr, this.stateElement);
    }
    showError = function(errText){
        var div = document.getElementById("notify");
        console.log("Erreur: %o", errText);
        if(div.style.display === ""){
            div.style.display = "block";
        }
        div.innerHTML += errText+"<br/>";
        setTimeout(function(){
            div.style.display = "none";
            div.innerHTML= "";
        }, 3500);
    }

    #openWebSocket = function(addr, stateElement){
        this.stateElement.innerText = "Connexion en cours...";
        this.ws = new WebSocket(addr);
        this.ws.onopen = () =>{
            console.log(stateElement.innerText);
            stateElement.innerText = "Connecté! En attente du premier paquet...";
            this.ws.send('ping!');
        }
        this.ws.onclose = (event) =>{
            if(event.code == 1006){//impossible d'atteindre le serveur
                stateElement.innerText = "Impossible de se connecter.";
                this.showError("Erreur! Code:"+event.code+". Le serveur est fermé!");
                this.#showRetryButton();
            }else{
                this.showError("Erreur inconnue! Code:"+event.code+". <a href=\"https://github.com/Luka967/websocket-close-codes#websocket-close-codes\" style=\"color:white;text-decoration:underline;\" target=\"_blank\">Liste des codes d'erreurs</a>");
            }
        }
        this.ws.onmessage = (e) =>{
            var json = JSON.parse(e.data);
            console.log('Message du serveur: %o', json);
            this.handleJSON(json);
        }
        return this.ws;
    }

    updateGuildList = function(){
        var json = {
            "action": "getGuildList",
            "guild": "null"
        };
        this.sendRequest(json);
        document.getElementById("guilds").innerHTML = '<optgroup label="Mais qui va-t-on contrôler ?"></optgroup>';
    }

    #showRetryButton = function(){
        var listItem = document.createElement('li');
        var retryBtn = document.createElement('button');
        var text = document.createTextNode('Réessayer la connexion');
        retryBtn.append(text);
        retryBtn.setAttribute('type', 'button');
        retryBtn.classList.add('btn');
        retryBtn.classList.add('btn-success');
        retryBtn.classList.add('nav-link');
        retryBtn.classList.add('text-white');
        listItem.classList.add('nav-item');
        listItem.appendChild(retryBtn);
        document.querySelector("#menu").append(listItem);
        retryBtn.addEventListener('click', (e) =>{this.connect(retryBtn)});
    }

    connect = function(element){
        element.remove();//Remove the button
        this.ws.close(1000);//Make sure the socket is closed before opening it again
        this.#openWebSocket(this.addr, this.stateElement);
    }

}