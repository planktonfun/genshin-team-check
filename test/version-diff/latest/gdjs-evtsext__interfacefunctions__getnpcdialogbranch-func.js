
if (typeof gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch = {};


gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.userFunc0x45cde20 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const area = eventsFunctionContext.getArgument('Area');
const npc = eventsFunctionContext.getArgument('NpcName');
const id = area + "_" + npc;

function getSceneVar(VarName) {
    return runtimeScene.getVariables().get(VarName).toJSObject();
}

function getGlobalVar(VarName) {
    return runtimeScene.getGame().getVariables().get(VarName).toJSObject();
}

function getDefaultBranch(npc) {
    const npcStates = getGlobalVar('NPCStates');
    const saveData = getGlobalVar('SaveData');
    const mapList = getGlobalVar('MapList');
    const layout = mapList[saveData.CurrentMap].Layout;

    if(!npcStates[layout]) return "idle";
    if(!npcStates[layout][npc]) return "idle";

    return npcStates[layout][npc];
}



// default dialog
eventsFunctionContext.returnValue = getDefaultBranch(npc);

if(!window['questManager']) {
    eventsFunctionContext.returnValue = getDefaultBranch(npc);
    return;
}

runtimeScene.getGame().getVariables().get('QuestState').fromJSObject({
    A: JSON.stringify(questManager.saveState()),
    B: questData.toJSON()
});

// questManager.checkAllQuests();
// check for quest individually
if(npcDialogMapEnd.has(id)) {
    let result = npcDialogMapEnd.get(id);

    // complete quest if it exist
    questManager.checkQuestById(result.id);
}

if(npcDialogMapStart.has(id)) {
    let result = npcDialogMapStart.get(id);
    const completed = questManager.checkCompletedId(result.id);
    const questIsAccepted = questManager.addQuest(result);

    if(questIsAccepted) {
        eventsFunctionContext.returnValue = !completed ? result.dialogStart : result.dialogEnd;
    } else {
        eventsFunctionContext.returnValue = getDefaultBranch(npc);
    }
} else {
    eventsFunctionContext.returnValue = getDefaultBranch(npc);
}
};
gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.userFunc0x45cde20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.func = function(runtimeScene, Area, NpcName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "Area") return Area;
if (argName === "NpcName") return NpcName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InterfaceFunctions__GetNPCDialogBranch.registeredGdjsCallbacks = [];