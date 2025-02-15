
if (typeof gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder = {};
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1= [];
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2= [];
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects3= [];
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1= [];
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2= [];
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects3= [];


gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595AdjustPlayerZOrder_9546GDMobsObjects1Objects = Hashtable.newFrom({"Mobs": gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1});
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595AdjustPlayerZOrder_9546GDPlayerSpawnObjects1Objects = Hashtable.newFrom({"PlayerSpawn": gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1});
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1, gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2);

gdjs.copyArray(gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1, gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2[i].getCenterYInScene() < (( gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2[0].getCenterYInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2[k] = gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2 */
/* Reuse gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2 */
{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2[i].setZOrder((( gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2[0].getZOrder()) + 1);
}
}}

}


{

/* Reuse gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1 */
/* Reuse gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1[i].getCenterYInScene() > (( gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1[0].getCenterYInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1[k] = gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1 */
/* Reuse gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1[i].setZOrder((( gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1[0].getZOrder()) - 1);
}
}}

}


};gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Mobs"), gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerSpawn"), gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595AdjustPlayerZOrder_9546GDMobsObjects1Objects, gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595AdjustPlayerZOrder_9546GDPlayerSpawnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.func = function(runtimeScene, Mobs, PlayerSpawn, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDMobsObjects3.length = 0;
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.GDPlayerSpawnObjects3.length = 0;

gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__AdjustPlayerZOrder.registeredGdjsCallbacks = [];