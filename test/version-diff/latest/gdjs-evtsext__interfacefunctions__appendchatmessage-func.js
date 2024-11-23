
if (typeof gdjs.evtsExt__InterfaceFunctions__AppendChatMessage !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage = {};
gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.GDChatObjectObjects1= [];


gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.userFunc0xf4b4c8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(!window.lad) {
    function LimitedArrayDisplayer() {
        // Define an array to store the strings
        let stringArray = [];

        // Function to append a string to the array
        function append(str) {
            // Add the new string to the beginning of the array
            stringArray.push(str);

            // Check if the array exceeds the limit of 100 elements
            if (stringArray.length > 250) {
                // If it does, remove the last element
                stringArray.shift();
            }

            return {
                text: stringArray.join("\n"),
                length: stringArray.length-1
            };
        }

        return append;
    }

    window.lad = LimitedArrayDisplayer();
    // console.log(objects[0].getY())
    objects[0].getVariables().get('initialY').setNumber(objects[0].getY());
    // objects[0].getVariables().get('initialY').setNumber(687);
}

function splitStringIntoChunks(str, chunkSize) {
    const result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.slice(i, i + chunkSize));
    }
    return result;
}

function appendChatObject(text) {
    // if its a command don't display it
    if(text.search(': /') > -1) return;

    var compress = window.lad(text.trim().slice(0, 75));
    objects[0].setText(compress.text); // objects[0].getText()+"\n"+text.trim());
    // objects[0].setY(objects[0].getVariables().get('initialY').getAsNumber()-(16*compress.length))
    objects[0].setY(objects[0].getVariables().get('initialY').getAsNumber()-objects[0].getHeight()+16)
}

const chunks = splitStringIntoChunks(eventsFunctionContext.getArgument("TextContent"), 75);

chunks.forEach(c=>appendChatObject(c))

};
gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ChatObject"), gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.GDChatObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.GDChatObjectObjects1);
gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.userFunc0xf4b4c8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.func = function(runtimeScene, TextContent, ChatObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ChatObject": ChatObject
},
  _objectArraysMap: {
"ChatObject": gdjs.objectsListsToArray(ChatObject)
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
if (argName === "TextContent") return TextContent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.GDChatObjectObjects1.length = 0;

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.registeredGdjsCallbacks = [];