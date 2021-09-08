var json = {
    "action": "getStats",
    "guild": serverId
};
var state = document.getElementById('state');
state.innerText = "Envoi de "+JSON.stringify(json);
sendRequest(json);

function displayText(txt) {
    var parsedTxt = JSON.parse(txt);
    state.innerHTML = txt+"<br/>guild: "+parsedTxt.guild+"<br/>name:"+parsedTxt.name+"<br/>Icon:<a style=\"color:lightblue;\" href=\""+parsedTxt.iconUrl+"\" target=\"_blank\">"+parsedTxt.iconUrl+"</a><br/>";
}
