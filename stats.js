var json = {
    "action": "getStats",
    "guild": vulcain.serverId
};
var state = document.getElementById('state');
state.innerText = "Envoi de "+JSON.stringify(json);
vulcain.sendRequest(json);

function displayText(txt) {
    var parsedTxt = JSON.parse(txt);
    state.innerHTML = txt+"<br/>guild: "+parsedTxt.guild+"<br/>name:"+parsedTxt.name+"<br/>Icon:<a style=\"color:lightblue;\" href=\""+parsedTxt.iconUrl+"\" target=\"_blank\">"+parsedTxt.iconUrl+"</a><br/>";
}
class Stats{
    //part 1
    #membersOwner;
    #membersCount
    #channelsCount
    #channelsMessageCount
    #guildBoostCount
    #guildInviteCount
    #memberLast
    #guildCreation
    #memberGanymedejoin

    //part 2
    #rolesCount
    #rolesHigher
    #rolesMostPopular
    #rolesdefault
    #rolesBoosters

    //part 3
    #membersConnectedCount
    #membersAdminCount
    #memberBoostersCount
    
    //part 4
    #channelsCatCount
    #channelsTextCount
    #channelsVoiceCount
    #channelsVoiceUserCount
    #channelsAnnCount

    //part 4 of variable
    get channelsAnnCount(){
        return this.#channelsAnnCount;
    }
      
    set channelsAnnCount(id){
        this.#channelsAnnCount = id;
    }
    get channelsVoiceUserCount(){
        return this.#channelsVoiceUserCount;
    }
      
    set channelsVoiceUserCount(id){
        this.#channelsVoiceUserCount = id;
    }
    get channelsVoiceCount(){
        return this.#channelsVoiceCount;
    }
      
    set channelsVoiceCount(id){
        this.#channelsVoiceCount = id;
    }
    get channelsTextCount(){
        return this.#channelsTextCount;
    }
      
    set channelsTextCount(id){
        this.#channelsTextCount = id;
    }
    get channelsCatCount(){
        return this.#channelsCatCount;
    }
      
    set channelsCatCount(id){
        this.#channelsCatCount = id;
    }

    //part 3 of variable
    get memberBoostersCount(){
        return this.#memberBoostersCount;
    }
      
    set memberBoostersCount(id){
        this.#memberBoostersCount = id;
    }
    get membersAdminCount(){
        return this.#membersAdminCount;
    }
      
    set membersAdminCount(id){
        this.#membersAdminCount = id;
    }
    get membersConnectedCount(){
        return this.#membersConnectedCount;
    }
      
    set membersConnectedCount(id){
        this.#membersConnectedCount = id;
    }
    //part 2 of variable
 
    get rolesBoosters(){
        return this.#rolesBoosters;
    }
      
    set rolesBoosters(id){
        this.#rolesBoosters = id;
    }

    get rolesdefault(){
        return this.#rolesdefault;
    }
    set rolesMostPopular(id){
        this.#rolesMostPopular = id;
    }

    get rolesMostPopular(){
        return this.#rolesMostPopular;
    }
    set rolesHigher(id){
        this.#rolesHigher = id;
    }

    get rolesHigher(){
        return this.#rolesHigher;
    }
    set rolesCount(id){
        this.#rolesCount = id;
    }

    get rolesCount(){
        return this.#rolesCount;
    }

    //first part of variable
    set memberGanymedejoin(id){
        this.#memberGanymedejoin = id;
    }

    get memberGanymedejoin(){
        return this.#memberGanymedejoin;
    }
    set guildCreation(id){
        this.#guildCreation = id;
    }

    get guildCreation(){
        return this.#guildCreation;
    }
    set memberLast(id){
        this.#memberLast = id;
    }

    get memberLast(){
        return this.#memberLast;
    }
    set guildInviteCount(id){
        this.#guildInviteCount = id;
    }

    get guildInviteCount(){
        return this.#guildInviteCount;
    }
    set guildBoostCount(id){
        this.#guildBoostCount = id;
    }

    get guildBoostCount(){
        return this.#guildBoostCount;
    }
    set channelsMessageCount(id){
        this.#channelsMessageCount = id;
    }

    get channelsMessageCount(){
        return this.#channelsMessageCount;
    }
    set membersOwner(id){
        this.#membersOwner = id;
    }

    get membersOwner(){
        return this.#membersOwner;
    }

    set membersCount(id){
        this.#membersCount = id;
    }

    get membersCount(){
        return this.#membersCount;
    }

    set channelsCount(id){
        this.#membersCount = id;
    }

    get channelsCount(){
        return this.#membersCount;
    }

}

