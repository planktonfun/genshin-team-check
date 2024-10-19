
if (typeof gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect = {};


gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("GunSource").getChild("Source").getChild("X").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X1")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("GunSource").getChild("Source").getChild("Y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y1")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("GunSource").getChild("Target").getChild("X").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X2")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("GunSource").getChild("Target").getChild("Y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y2")) || 0 : 0));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("GunSources"), runtimeScene.getScene().getVariables().get("GunSource"));
}}

}


};

gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect.func = function(runtimeScene, X1, Y1, X2, Y2, parentEventsFunctionContext) {
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
if (argName === "X1") return X1;
if (argName === "Y1") return Y1;
if (argName === "X2") return X2;
if (argName === "Y2") return Y2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__DisplayGunSourceEffect.registeredGdjsCallbacks = [];