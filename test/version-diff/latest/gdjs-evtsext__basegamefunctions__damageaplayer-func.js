
if (typeof gdjs.evtsExt__BaseGameFunctions__DamageAPlayer !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__DamageAPlayer = {};
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects3= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects4= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects5= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects6= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects1= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects3= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5= [];
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects6= [];


gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2, gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5[k] = gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("hasCrited"), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5 */
{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "normal", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2, gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[k] = gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("hasCrited"), true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4 */
{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "critical", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.func(runtimeScene, runtimeScene.getScene().getVariables().get("DamageObject"), runtimeScene.getScene().getVariables().get("RecievingBaseStats"), gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.func(runtimeScene, 0, 100, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Seed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isBlocked"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isDodged"), false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isDodged"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2, gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "miss", 0, (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isShield"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2, gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "shield", 0, (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isBlocked"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2, gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "block", 0, (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__BaseGameFunctions__CreateNormalDamageObject.func(runtimeScene, runtimeScene.getScene().getVariables().get("BaseStats"), runtimeScene.getScene().getVariables().get("Equipment"), gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.func(runtimeScene, 0, 100, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Seed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 100, "physical", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


const repeatCount3 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("DamageObject").getChild("numberOfAttacks"));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1, gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("PlayerSpawn"), gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2.length !== 0 ? gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2[0] : null), ((gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2[0].getVariables()).get("BaseStats")), runtimeScene.getScene().getVariables().get("RecievingBaseStats"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("MonsterDictionary").getChild((( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2[0].getName())).getChild("baseStats")), runtimeScene.getScene().getVariables().get("BaseStats"));
}{runtimeScene.getScene().getVariables().get("BaseStats").getChild("level").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("MonsterDictionary").getChild((( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2[0].getName())).getChild("level")));
}{runtimeScene.getScene().getVariables().get("BaseStats").getChild("remainingHP").setNumber(1);
}{runtimeScene.getScene().getVariables().get("Equipment").getChild("GunAP").setNumber(0);
}{runtimeScene.getScene().getVariables().get("Equipment").getChild("ThrowAP").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Mobs"), gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("MonsterDictionary"), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1[0].getName()));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Mobs"), gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("MonsterDictionary"), (( gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1[0].getName())));
if (isConditionTrue_0) {
}

}


};

gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.func = function(runtimeScene, Mobs, PlayerSpawn, Health, Seed, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Mobs": Mobs
, "PlayerSpawn": PlayerSpawn
},
  _objectArraysMap: {
"Mobs": gdjs.objectsListsToArray(Mobs)
, "PlayerSpawn": gdjs.objectsListsToArray(PlayerSpawn)
},
  _behaviorNamesMap: {
"Health": Health
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Seed") return Seed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects3.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects4.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects5.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDMobsObjects6.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects3.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects4.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects5.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.GDPlayerSpawnObjects6.length = 0;

gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__DamageAPlayer.registeredGdjsCallbacks = [];