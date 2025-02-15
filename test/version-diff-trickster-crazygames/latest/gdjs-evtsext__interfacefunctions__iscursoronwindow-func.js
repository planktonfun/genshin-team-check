
if (typeof gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow = {};
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects1= [];
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects2= [];
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects3= [];


gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.mapOfGDgdjs_9546evtsExt_9595_9595InterfaceFunctions_9595_9595IsCursorOnWindow_9546GDItemViewBObjects2Objects = Hashtable.newFrom({"ItemViewB": gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects2});
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("AllowItemDrag"), false);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ItemViewB"), gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.mapOfGDgdjs_9546evtsExt_9595_9595InterfaceFunctions_9595_9595IsCursorOnWindow_9546GDItemViewBObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("AllowItemDrag"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("AllowItemDrag"), true);
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("AllowItemDrag"), false);
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.func = function(runtimeScene, ItemViewB, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ItemViewB": ItemViewB
},
  _objectArraysMap: {
"ItemViewB": gdjs.objectsListsToArray(ItemViewB)
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

gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects2.length = 0;
gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.GDItemViewBObjects3.length = 0;

gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InterfaceFunctions__IsCursorOnWindow.registeredGdjsCallbacks = [];