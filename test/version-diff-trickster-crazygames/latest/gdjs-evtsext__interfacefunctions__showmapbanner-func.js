
if (typeof gdjs.evtsExt__InterfaceFunctions__ShowMapBanner !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__ShowMapBanner = {};
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1= [];
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2= [];


gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.mapOfGDgdjs_9546evtsExt_9595_9595InterfaceFunctions_9595_9595ShowMapBanner_9546GDBannerMapObjects1Objects = Hashtable.newFrom({"BannerMap": gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1});
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.userFunc0x30f8700 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const BannerMap = [
	'Abyss',
	'Alteo_Empire',
	'Black_Ash_Dungeon',
	'Black_Swamp',
	'Blue_Ice_Dungeon',
	'Caballa_Relics',
	'Chaos_Tower',
	'Coral_Beach',
	'Desert_Beach',
	'Ghost_Blue',
	'Megalopolis_Square',
	'Mermaid_Dungeon',
	'Mermaid_Field',
	'Nora_Sewer',
	'Oops_Wharf',
	'Phantom_School',
	'Poppuri_Dungeon',
	'Pyramid_Dungeon',
	'Relics_Dungeon',
	'Rose_Garden',
	'Snow_Hill',
	'Swamp_Dungeon',
	'Tapasco_Volcano',
	'Techichi_Volcano',
	'Underground_Dev_Room',
	'Vamp_Castle',
];


if(!window.cycle) {
    window.cycle = 0;
}

var mapName = eventsFunctionContext.getArgument("MapName").toString();
var frameIndex = BannerMap.indexOf(mapName);

objects[0].setAnimationFrame(frameIndex);

};
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.asyncCallback60978620 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("BannerMap"), gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2);

{for(var i = 0, len = gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2.length ;i < len;++i) {
    gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween("", 0, "linear", 500, true);
}
}}
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1) asyncObjectsList.addObject("BannerMap", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.asyncCallback60978620(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1, gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2);
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.userFunc0x30f8700(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1 */
{for(var i = 0, len = gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0));
}
}{for(var i = 0, len = gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween("", 255, "linear", 500, false);
}
}
{ //Subevents
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("LastBannerMap")) != (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MapName") : "");
if (isConditionTrue_0) {
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.mapOfGDgdjs_9546evtsExt_9595_9595InterfaceFunctions_9595_9595ShowMapBanner_9546GDBannerMapObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), 52.4, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{runtimeScene.getScene().getVariables().get("LastBannerMap").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MapName") : ""));
}
{ //Subevents
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.func = function(runtimeScene, BannerMap, Opacity, Tween, MapName, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"BannerMap": BannerMap
},
  _objectArraysMap: {
"BannerMap": gdjs.objectsListsToArray(BannerMap)
},
  _behaviorNamesMap: {
"Opacity": Opacity
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
if (argName === "MapName") return MapName;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.GDBannerMapObjects2.length = 0;

gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__ShowMapBanner.registeredGdjsCallbacks = [];