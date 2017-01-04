loadPic = function (field, src) {
    field.src = src;
    field.onload=function () {
        checkReady();
    }
}

var SoldierFactory = {
    createNew: function () {
        soldierFactory = {};
        soldierFactory.attackPics = {};
        //imgLoad
            //load_attack
        soldierFactory.attackPics.hero = new Image();
        loadPic(soldierFactory.attackPics.hero, "js/hero_attack.png");
        
        //creteSoldier
        soldierFactory.createHero=function () {
            return Hero.createNew(soldierFactory.attackPics.hero);
        }
        return soldierFactory;
    }
}

var Soldier = {
    createNew: function(picAttack) {
        var soldier = {};
        soldier.picAttack=picAttack;
        soldier.face=2;
        soldier.step=0;
        soldier.showAttackPic=function (cxt) {
            cxt.drawImage(soldier.picAttack,64 * soldier.step, 64 * soldier.face, 64, 64,  0, 0, 64, 64);
        }
        soldier.nextStep=function () {
            soldier.step=(soldier.step+1)%4;
        }
        soldier.faceSouth=function () {
            soldier.face= 0;
        }
        soldier.faceWest=function () {
            soldier.face=1;
        }
        soldier.faceEast=function () {
            soldier.face=2;
        }
        soldier.faceNorth=function () {
            soldier.face=3;
        }
        return soldier;
    }
}


var Hero = {
    createNew: function (picAttack) {
        var hero = Soldier.createNew(picAttack);
        return hero;
    }
}