
var Ability={
    createDefault:function () {
        ability = {};
        ability.force = 50;
        ability.command = 50;
        ability.intelligence = 50;
        ability.political = 50;
        return ability;
    },

    createNew:function () {
        ability = {};
        ability.force = Math.floor(Math.random() * 100);
        ability.command = Math.floor(Math.random() * 100);
        ability.intelligence =Math.floor(Math.random() * 100);
        ability.political = Math.floor(Math.random() * 100);
        return ability;
    }
}

var BasicInfo={
    createDefault:function() {
        basecInfo = {};
        basecInfo.name = "opq";
        basecInfo.age = 18;
        return basecInfo;
    }
}

var General={
    createNew:function(){
        general = {};
        general.ability = Ability.createNew();
        general.basicInfo = BasicInfo.createDefault();
        general.addCommand=function () {
            if (general.ability.command < 100){
                general.ability.command += 1;
            }
        }
        general.addForce=function () {
            if (general.ability.force < 100){
                general.ability.force += 1;
            }
        }
        general.addIntelligence=function () {
            if (general.ability.intelligence < 100){
                general.ability.intelligence += 1;
            }
        }
        general.addPolitical=function () {
            if (general.ability.political < 100){
                general.ability.political += 1;
            }
        }
        return general;
    }
}