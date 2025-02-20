
if (typeof gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect = {};
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects1= [];
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects2= [];
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3= [];
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects4= [];


gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.userFunc0x149e068 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createObjectsInCircle(numObjects, maxRadius) {
  const objects = [];

  for (let i = 0; i < numObjects; i++) {
    const randomRadius = randomInRange(50, 100);
    const randomAngle = Math.random() * 2 * Math.PI;

    const x = randomRadius * Math.cos(randomAngle);
    const y = randomRadius * Math.sin(randomAngle);

    const object = {
      x: x,
      y: y,
      angle: (randomAngle * (180 / Math.PI)),
    };

    objects.push(object);
  }

  return objects;
}

const numberOfObjects = 40;
const circleRadius = 100; // Adjust the radius as needed

const objectsInCircle = createObjectsInCircle(numberOfObjects, circleRadius);


runtimeScene.getVariables().get('circleDots').fromJSObject(objectsInCircle);
};
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.mapOfGDgdjs_9546evtsExt_9595_9595SkillEffectsFunctions_9595_9595DisplayCritWhiteEffect_9546GDNewSpriteObjects3Objects = Hashtable.newFrom({"NewSprite": gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3});
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.mapOfGDgdjs_9546evtsExt_9595_9595SkillEffectsFunctions_9595_9595DisplayCritWhiteEffect_9546GDNewSpriteObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("child").getChild("x")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("child").getChild("y")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(10);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(125);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.randomInRange(25, 50), 568);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getVariables().get("angle")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("child").getChild("angle")) - 270);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].setAngle((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getVariables().get("angle"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getVariables().get("angle"))) + 270, 380, 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectWidthTween("critA", 1, "linear", 553, true);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween("critB", 0, "linear", 553, true);
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.userFunc0x149e068(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("child");
const iterableReference2 = runtimeScene.getScene().getVariables().get("circleDots");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.func = function(runtimeScene, NewSprite, Animation, Opacity, Resizable, Tween, X, Y, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"NewSprite": NewSprite
},
  _objectArraysMap: {
"NewSprite": gdjs.objectsListsToArray(NewSprite)
},
  _behaviorNamesMap: {
"Animation": Animation
, "Opacity": Opacity
, "Resizable": Resizable
, "Tween": Tween
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects2.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects3.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.GDNewSpriteObjects4.length = 0;

gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__DisplayCritWhiteEffect.registeredGdjsCallbacks = [];