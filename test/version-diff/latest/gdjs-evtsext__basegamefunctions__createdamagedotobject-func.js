
if (typeof gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject = {};
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1= [];
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects2= [];


gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595CreateDamageDotObject_9546GDSkillTesterObjects1Objects = Hashtable.newFrom({"SkillTester": gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1});
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.userFunc0xcbeec8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var Equipment = eventsFunctionContext.getArgument("Equipment").toJSObject();
var BaseStats = eventsFunctionContext.getArgument("BaseStats").toJSObject();

objects[0].getVariables().get("Equipment").fromJSObject(Equipment);
objects[0].getVariables().get("BaseStats").fromJSObject(BaseStats);
};
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1);
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.userFunc0xcbeec8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595CreateDamageDotObject_9546GDSkillTesterObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].setCenterPositionInScene(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("event").getChild("data").getChild("startX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("event").getChild("data").getChild("startY")));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("targetUid")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("event").getChild("data").getChild("targetUid")));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("seed")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("event").getChild("data").getChild("startSeed")));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("repetition")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("repetition")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("min")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("max")).setNumber(5);
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("totalDurationMiliseconds")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("totalDurationMiliseconds")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("intervalMiliseconds")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("totalDurationMiliseconds"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("repetition"))));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("uid")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("event").getChild("data").getChild("uid")));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("finalCalculation")).setNumber(gdjs.evtsExt__OnlineMultiplayerFirebase__GetPredeterminedDamage.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("seed"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("min"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("max"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("repetition"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].returnVariable(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("createdTime")).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].setVariableBoolean(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("sent"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].getVariables().get("finalCalculation")))));
}
}{for(var i = 0, len = gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1[i].hide();
}
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.func = function(runtimeScene, SkillTester, event, Equipment, BaseStats, repetition, totalDurationMiliseconds, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SkillTester": SkillTester
},
  _objectArraysMap: {
"SkillTester": gdjs.objectsListsToArray(SkillTester)
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
if (argName === "event") return event;
if (argName === "Equipment") return Equipment;
if (argName === "BaseStats") return BaseStats;
if (argName === "repetition") return repetition;
if (argName === "totalDurationMiliseconds") return totalDurationMiliseconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.GDSkillTesterObjects2.length = 0;

gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__CreateDamageDotObject.registeredGdjsCallbacks = [];