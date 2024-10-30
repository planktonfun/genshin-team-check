
if (typeof gdjs.evtsExt__InterfaceFunctions__UnequipItem !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__UnequipItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__UnequipItem = {};
gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachIndex2 = 0;

gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachObjects2 = [];

gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachTemporary2 = null;

gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachTotalCount2 = 0;

gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects1= [];
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects2= [];
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3= [];
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects4= [];


gdjs.evtsExt__InterfaceFunctions__UnequipItem.userFunc0x1359db0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var type = objects[0].getVariables().get('EquipType').getAsString();

equipmentManager.setItem(type, {});
};
gdjs.evtsExt__InterfaceFunctions__UnequipItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3, gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects4);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects4);
gdjs.evtsExt__InterfaceFunctions__UnequipItem.userFunc0x1359db0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3 */
{runtimeScene.getScene().getVariables().get("Temp").getChild("name").setString((( gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3.length === 0 ) ? "" :gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName()));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("qty").setNumber(1);
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("ItemQueue"), runtimeScene.getScene().getVariables().get("Temp"));
}{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("Temp"));
}{for(var i = 0, len = gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3.length ;i < len;++i) {
    gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("blank");
}
}}

}


};gdjs.evtsExt__InterfaceFunctions__UnequipItem.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects2, gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() != "blank" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3[k] = gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3 */
{runtimeScene.getScene().getVariables().get("Equipment").getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3[0].getVariables()).get("EquipType")))).setString("");
}
{ //Subevents
gdjs.evtsExt__InterfaceFunctions__UnequipItem.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__InterfaceFunctions__UnequipItem.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("itemIcons"), gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects1);

for (gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachIndex2 = 0;gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachIndex2 < gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects1.length;++gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachIndex2) {
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects2.length = 0;


gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachTemporary2 = gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects1[gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachIndex2];
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects2.push(gdjs.evtsExt__InterfaceFunctions__UnequipItem.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__InterfaceFunctions__UnequipItem.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__InterfaceFunctions__UnequipItem.func = function(runtimeScene, itemIcons, Animation, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"itemIcons": itemIcons
},
  _objectArraysMap: {
"itemIcons": gdjs.objectsListsToArray(itemIcons)
},
  _behaviorNamesMap: {
"Animation": Animation
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

gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects2.length = 0;
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects3.length = 0;
gdjs.evtsExt__InterfaceFunctions__UnequipItem.GDitemIconsObjects4.length = 0;

gdjs.evtsExt__InterfaceFunctions__UnequipItem.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__UnequipItem.registeredGdjsCallbacks = [];