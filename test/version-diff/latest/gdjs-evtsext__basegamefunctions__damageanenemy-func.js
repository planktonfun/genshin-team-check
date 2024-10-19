
if (typeof gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy = {};
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects2= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects7= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects2= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects3= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects4= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects5= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects6= [];
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects7= [];


gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595DamageAnEnemy_9546GDPlayerSpawnObjects5Objects = Hashtable.newFrom({"PlayerSpawn": gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects5});
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595DamageAnEnemy_9546GDMobsObjects5Objects = Hashtable.newFrom({"Mobs": gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5});
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("hasCrited"), false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "physical", "normal", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("hasCrited"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "physical", "critical", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("hasCrited"), false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "magical", "normal", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("hasCrited"), true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4 */
{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "magical", "critical", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("totalDamage")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("MonsterDictionary").getChild((( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[0].getName())).getChild("sounds").getChild("hurt")) != "0");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5 */
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects5);

{gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.func(runtimeScene, 500, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595DamageAnEnemy_9546GDPlayerSpawnObjects5Objects, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595DamageAnEnemy_9546GDMobsObjects5Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("MonsterDictionary").getChild((( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5[0].getName())).getChild("sounds").getChild("hurt")), 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("attackType")) == "physical");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("attackType")) == "gun");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("attackType")) == "magic");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isBlocked"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isDodged"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Health")).Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[k] = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isDodged"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "miss", 0, (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isShield"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "shield", 0, (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("RecievedDamageObject").getChild("isBlocked"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1, gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3);

{gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func(runtimeScene, "normal", "block", 0, (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3[0].getAABBTop()) + 32, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.func(runtimeScene, runtimeScene.getScene().getVariables().get("DamageObject"), runtimeScene.getScene().getVariables().get("RecievingBaseStats"), gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.func(runtimeScene, 0, 100, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Seed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__BaseGameFunctions__CreateNormalDamageObject.func(runtimeScene, runtimeScene.getScene().getVariables().get("BaseStats"), runtimeScene.getScene().getVariables().get("Equipment"), gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.func(runtimeScene, 0, 100, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Seed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 100, "physical", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{



}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("DamageObject").getChild("numberOfAttacks"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerSpawn"), gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1.length !== 0 ? gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1[0] : null), ((gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1[0].getVariables()).get("BaseStats")), runtimeScene.getScene().getVariables().get("BaseStats"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("MonsterDictionary").getChild((( gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1.length === 0 ) ? "" :gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1[0].getName())).getChild("baseStats")), runtimeScene.getScene().getVariables().get("RecievingBaseStats"));
}{runtimeScene.getScene().getVariables().get("BaseStats").getChild("level").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PlayerLevel")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("BaseStats").getChild("remainingHP").setNumber(1);
}{runtimeScene.getScene().getVariables().get("Equipment").getChild("GunAP").setNumber(0);
}{runtimeScene.getScene().getVariables().get("Equipment").getChild("ThrowAP").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mobs"), gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1);
{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1[i].getVariables().get("LastAttackedBy")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("event").getChild("peerId")));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1[i].setVariableBoolean(gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1[i].getVariables().get("Attributes").getChild("Aggro"), true);
}
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.func = function(runtimeScene, Mobs, Health, PlayerSpawn, Seed, PlayerLevel, parentEventsFunctionContext) {
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
if (argName === "PlayerLevel") return PlayerLevel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects3.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects4.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects5.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects6.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDMobsObjects7.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects3.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects4.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects5.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects6.length = 0;
gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.GDPlayerSpawnObjects7.length = 0;

gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.eventsList7(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__DamageAnEnemy.registeredGdjsCallbacks = [];