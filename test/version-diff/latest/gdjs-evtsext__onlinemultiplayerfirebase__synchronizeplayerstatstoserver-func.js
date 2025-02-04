
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer = {};
gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.GDPlayerObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.GDPlayerObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.userFunc0x2aa70b8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(window['lobby']) {
    var PlayerVariables = objects[0].getVariables();
    
    // compress stuff so they don't bulk the server
    const itemObtainedArray = compressInventory(
        runtimeScene.getGame().getVariables().get('ItemObtained').toJSObject(),"AddedItemName", "AddedItemQty"
    );

    const localBankArray = compressInventory(
        runtimeScene.getGame().getVariables().get('LocalBank').toJSObject(),"AddedItemName", "AddedItemQty"
    );
    
    function makeArrayUnique(arr) {
        return [...new Set(arr)];
    }
    
    // console.log({itemObtainedArray})

    lobby.setPlayerBaseStats(
        runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
        eventsFunctionContext.getArgument("PlayerName").toString(),
        {
            baseStats: PlayerVariables.get('BaseStats').toJSObject(),
            GlobalVariables: {
                AppliedPoints: runtimeScene.getGame().getVariables().get('AppliedPoints').toJSObject(),
                BossKills: runtimeScene.getGame().getVariables().get('BossKills').toJSObject(),
                Equipment: runtimeScene.getVariables().get('Equipment').toJSObject(),
                Raw: runtimeScene.getGame().getVariables().get('Raw').toJSObject(),
                Indicators:  runtimeScene.getGame().getVariables().get('Indicators').toJSObject(),
                DistributedLevels:  runtimeScene.getGame().getVariables().get('DistributedLevels').toJSObject(),
                SelectedCharacter:  runtimeScene.getGame().getVariables().get('SelectedCharacter').toJSObject(),
                QuestState: runtimeScene.getGame().getVariables().get('QuestState').toJSObject(),
                LearnedSkills:  makeArrayUnique(runtimeScene.getGame().getVariables().get('LearnedSkills').toJSObject()),
                SkillLevels:  runtimeScene.getGame().getVariables().get('SkillLevels').toJSObject(),
                ItemObtainedArray: itemObtainedArray,
                LocalBankArray: localBankArray,
                LocalBankGalders: runtimeScene.getGame().getVariables().get('LocalBankGalders').toJSObject(),
                SaveData:  runtimeScene.getGame().getVariables().get('SaveData').toJSObject(),
                SpawningPointId: runtimeScene.getGame().getVariables().get('SpawningPointId').toJSObject(),
                Type: runtimeScene.getGame().getVariables().get('Type').getAsString(),
                ShortcutSlots: runtimeScene.getGame().getVariables().get('ShortcutSlots').toJSObject()
            }
        },
        'PlayerStats'
    );
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PlayerObject"), gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.GDPlayerObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.GDPlayerObjectObjects1);
gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.userFunc0x2aa70b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.func = function(runtimeScene, PlayerName, PlayerObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"PlayerObject": PlayerObject
},
  _objectArraysMap: {
"PlayerObject": gdjs.objectsListsToArray(PlayerObject)
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
if (argName === "PlayerName") return PlayerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.GDPlayerObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.GDPlayerObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SynchronizePlayerStatsToServer.registeredGdjsCallbacks = [];