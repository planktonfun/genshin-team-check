
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill = {};
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects1= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects2= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects3= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects1= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects2= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects3= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects1= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects3= [];


gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.userFunc0x3630c08 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
try{
    var data = objects[0].getVariables().get('skill').toJSObject();
    const uid = objects[0].getVariables().get('target').getAsString();
    const fromUid = objects[0].getVariables().get('from').getAsString();
    const hash = [uid,fromUid].join(':');

    if(data == 0) {
        data = {};
    }

    if(!data) {
        data = {};
    }

    if(!data[hash]) {
        data[hash] = {
            seed: {
                start: getTimeStamp(),
                end: getTimeStamp()
            },
            fromUid: fromUid,
            target: uid
        };
    }

    objects[0].getVariables().get('end').setNumber(data[hash].seed.end);

    data[hash].seed.end++;

    objects[0].getVariables().get('skill').fromJSObject(data);

} catch(e) {
    console.log('error: ', e);
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Container"), gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Mobs"), gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerSpawn"), gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects2);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2[i].returnVariable(gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2[i].getVariables().get("target")).setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects2[0].getVariables()).get("uid"))));
}
}{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2[i].returnVariable(gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2[i].getVariables().get("from")).setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects2[0].getVariables()).get("uid"))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Container"), gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects1);
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.userFunc0x3630c08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.func = function(runtimeScene, Mobs, PlayerSpawn, Container, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Mobs": Mobs
, "PlayerSpawn": PlayerSpawn
, "Container": Container
},
  _objectArraysMap: {
"Mobs": gdjs.objectsListsToArray(Mobs)
, "PlayerSpawn": gdjs.objectsListsToArray(PlayerSpawn)
, "Container": gdjs.objectsListsToArray(Container)
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

gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects2.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDMobsObjects3.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects2.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDPlayerSpawnObjects3.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects2.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.GDContainerObjects3.length = 0;

gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SendBufferSkill.registeredGdjsCallbacks = [];