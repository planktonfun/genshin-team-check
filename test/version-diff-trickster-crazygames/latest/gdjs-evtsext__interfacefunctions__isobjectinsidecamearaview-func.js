
if (typeof gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView = {};
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1= [];
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects2= [];


gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("VisibleObject"), gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getAABBLeft() >= gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getLayer()), 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[k] = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getAABBRight() <= gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getLayer()), 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[k] = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getAABBTop() >= gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getLayer()), 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[k] = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getAABBBottom() <= gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i].getLayer()), 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[k] = gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.func = function(runtimeScene, VisibleObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"VisibleObject": VisibleObject
},
  _objectArraysMap: {
"VisibleObject": gdjs.objectsListsToArray(VisibleObject)
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

gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.GDVisibleObjectObjects2.length = 0;

gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InterfaceFunctions__IsObjectInsideCamearaView.registeredGdjsCallbacks = [];