
if (typeof gdjs.evtsExt__InterfaceFunctions__EquipItem !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__EquipItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__EquipItem = {};


gdjs.evtsExt__InterfaceFunctions__EquipItem.userFunc0x30f8700 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Use javascript as a workaround to pick all itemIcons
var itemIcons = runtimeScene.getObjects("itemIcons");
var type = runtimeScene.getVariables().get("type").getAsString();
var ItemName = eventsFunctionContext.getArgument("ItemName").toString();
const ItemDetails = runtimeScene.getVariables().get('ItemDetails').toJSObject();
const item = ItemDetails[ItemName].page;

// console.log('extracting...', ItemName);
extractor(item, function(EquipmentDetails) {
    // console.log('extracted: ', ItemName);
    function calculateValueFromPercentage(min, max, percent) {
        if (min==max) return min;
        if (min >= max) {
            throw new Error("Minimum value must be less than the maximum value.");
        }
        
        if (percent < 0 || percent > 100) {
            throw new Error("Percentage must be between 0 and 100.");
        }

        return min + (percent / 100) * (max - min);
    }

    const percentage = randomInRange(0, 100, EquipmentDetails.seed);

    if(EquipmentDetails.PossibleAttributes) {
        EquipmentDetails.attributes = Object.keys(EquipmentDetails.PossibleAttributes).reduce((acc, key)=>{
                acc[key] = Math.round(
                    calculateValueFromPercentage(
                        EquipmentDetails.PossibleAttributes[key][0],
                        EquipmentDetails.PossibleAttributes[key][1],
                        percentage
                    )
                );
                
            return acc;
        },{});

        equipmentManager.setItem(type, EquipmentDetails.attributes);
    }
});

itemIcons.forEach(itemIcon => {
    const EquipType = itemIcon.getVariables().get("EquipType").getAsString();
    if(EquipType == type) {
        itemIcon.setAnimationName(ItemName);
    }
});
};
gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__EquipItem.userFunc0x30f8700(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Equipment").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("type")))) != "";
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("AddItem"), true);
}{runtimeScene.getScene().getVariables().get("AddedItemName").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Equipment").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("type")))));
}{runtimeScene.getScene().getVariables().get("AddedItemQty").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Equipment").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("type"))).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""));
}
{ //Subevents
gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.func(runtimeScene, runtimeScene.getScene().getVariables().get("ItemProperties").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("type"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("type");
const iterableReference2 = runtimeScene.getScene().getVariables().get("ItemProperties").getChild("equipmentIndex");
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
gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};

gdjs.evtsExt__InterfaceFunctions__EquipItem.func = function(runtimeScene, ItemName, parentEventsFunctionContext) {
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
if (argName === "ItemName") return ItemName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__EquipItem.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__EquipItem.registeredGdjsCallbacks = [];