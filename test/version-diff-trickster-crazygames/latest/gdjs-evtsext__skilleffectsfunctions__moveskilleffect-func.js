
if (typeof gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect = {};
gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1= [];
gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects2= [];


gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SkillEffectPainter"), gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1[i].getVariables().get("Position").getChild("X")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1[i].getVariables().get("Position").getChild("Y")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.func = function(runtimeScene, SkillEffectPainter, PositionX, PositionY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SkillEffectPainter": SkillEffectPainter
},
  _objectArraysMap: {
"SkillEffectPainter": gdjs.objectsListsToArray(SkillEffectPainter)
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects1.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.GDSkillEffectPainterObjects2.length = 0;

gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__MoveSkillEffect.registeredGdjsCallbacks = [];