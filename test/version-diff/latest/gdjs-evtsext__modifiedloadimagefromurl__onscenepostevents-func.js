
if (typeof gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents = {};


gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.userFunc0x1cbd540 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.imgLoaders) window.imgLoaders = [];

if(window.imgLoaders.length>0) {
    var a = window.imgLoaders.shift();
    a.callback();
}
};
gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.userFunc0x1cbd540(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(75830404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pointtwotimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pointtwotimer") >= 0.2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pointtwotimer");
}
{ //Subevents
gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__ModifiedLoadImageFromURL__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
