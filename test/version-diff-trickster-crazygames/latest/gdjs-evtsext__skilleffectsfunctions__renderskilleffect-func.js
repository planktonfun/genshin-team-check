
if (typeof gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect = {};
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachIndex2 = 0;

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachObjects2 = [];

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachTemporary2 = null;

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachTotalCount2 = 0;

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects1= [];
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects2= [];
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3= [];
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4= [];
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects5= [];


gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("effectType")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[k] = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectStringParameter("GlowEffect", "color", "245;166;35");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("effectType")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[k] = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectStringParameter("GlowEffect", "color", "189;16;224");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("effectType")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[k] = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectStringParameter("GlowEffect", "color", "208;2;27");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("effectType")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[k] = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectStringParameter("GlowEffect", "color", "74;144;226");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("effectType")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[k] = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("BloomEffect", "bloomScale", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("brightValueA"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("GlowEffect", "outerStrength", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getVariables().get("brightValueB"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectStringParameter("GlowEffect", "color", "255;255;255");
}
}}

}


{

/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("effectType")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[k] = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("BloomEffect", "bloomScale", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("brightValueA"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("GlowEffect", "outerStrength", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("brightValueB"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectStringParameter("GlowEffect", "color", "245;166;35");
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects2, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3);

{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("BloomEffect", "bloomScale", Math.min(1.5, gdjs.evtTools.common.normalize(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("Created"))), 0, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("EffectSeconds")))) * 1.5));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("GlowEffect", "outerStrength", Math.min(10, gdjs.evtTools.common.normalize(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("Created"))), 0, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].getVariables().get("EffectSeconds")))) * 10));
}
}
{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects2, gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[0].getVariables()).get("LifeTimeSeconds"))) > 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects1);

for (gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachIndex2 = 0;gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachIndex2 < gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects1.length;++gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachIndex2) {
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects2.length = 0;


gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachTemporary2 = gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects1[gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachIndex2];
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects2.push(gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.func = function(runtimeScene, NewShapePainter, Effect, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"NewShapePainter": NewShapePainter
},
  _objectArraysMap: {
"NewShapePainter": gdjs.objectsListsToArray(NewShapePainter)
},
  _behaviorNamesMap: {
"Effect": Effect
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

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects1.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects2.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects3.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects4.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.GDNewShapePainterObjects5.length = 0;

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__RenderSkillEffect.registeredGdjsCallbacks = [];