
if (typeof gdjs.evtsExt__DynamicResource__CustomBitmapFont !== "undefined") {
  gdjs.evtsExt__DynamicResource__CustomBitmapFont.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__CustomBitmapFont = {};
gdjs.evtsExt__DynamicResource__CustomBitmapFont.GDSpriteObjectObjects1= [];


gdjs.evtsExt__DynamicResource__CustomBitmapFont.userFunc0x4450458 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function getPixiTextureFromResourceName(resourceName) {
    return runtimeScene.getGame().getImageManager().getPIXITexture(resourceName);
}

function loadFont(fontData, image) {
  const charMap = {};
  const lines = fontData.split("\n");

  lines.forEach((line) => {
    if (line.startsWith("char id=")) {
      const charInfo = line.match(
        /id=([\-\d]+).*?x=([\-\d]+).*?y=([\-\d]+).*?width=([\-\d]+).*?height=([\-\d]+).*?xoffset=([\-\d]+).*?yoffset=([\-\d]+).*?xadvance=([\-\d]+)/
      );
      if (charInfo) {
        const [_, id, x, y, width, height, xoffset, yoffset, xadvance] = charInfo.map(Number);
        charMap[id] = { x, y, width, height, xoffset, yoffset, xadvance };
      }
    }
  });

  return { charMap, image };
}

function tintWhitePixels(imageData, color) {
  const data = imageData.data;
  let [rTint, gTint, bTint, aTint] = color.match(/\d+/g).map(Number);

  if(!aTint) aTint = 1;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If the pixel is close to white (can adjust the threshold)
    if (r == 255 && g == 255 && b == 255) {
      // Apply the tint to white pixels
      data[i] = rTint;
      data[i + 1] = gTint;
      data[i + 2] = bTint;
    }
  }

  return imageData;
}

function drawColoredBitmapText(canvas, fntPath, imagePath, textSegments, startX, startY, wordWrap = false, rightPadding = 0) {
  const { charMap, image } = loadFont(fntPath, imagePath);
  const ctx = canvas.getContext("2d");

  let x = startX;
  let y = startY;
  let colorUsed = "rgb(255, 255, 255)";

  // Iterate over each text segment
  for (const segment of textSegments) {
    const { type, value } = segment;

    let text = null;

    if (type === "color") {
      colorUsed = value;
      continue;
    }

    if (type === "text") {
      text = value;
    }

    if (type === "tab") {
      x += 8 * 4;
      continue;
    }

    if (type === "newline") {
      y += 16;
      x = startX;
      continue;
    }

    // Apply the color when the segment starts
    ctx.fillStyle = colorUsed;
    let currentX = x;
    let currentY = y;

    // Split text into words
    const words = text.split(" ");

    for (const word of words) {
      // Calculate the width of the word
      let wordWidth = 0;
      for (const char of word) {
        const charCode = char.charCodeAt(0);
        const glyph = charMap[charCode];
        if (glyph) {
          wordWidth += glyph.xadvance;
        }
      }

      // Check if the word fits in the current line
      if (wordWrap && currentX + wordWidth + rightPadding > canvas.width) {
        currentX = startX; // Reset to the start of the line
        currentY += 16; // Move down to the next line
      }

      // Draw each character in the word
      for (const char of word) {
        const charCode = char.charCodeAt(0);
        const glyph = charMap[charCode];

        if (!glyph) continue; // Skip missing characters

        // Create an offscreen canvas to apply color tint
        const offCanvas = document.createElement("canvas");
        const offCtx = offCanvas.getContext("2d");

        offCanvas.width = glyph.width;
        offCanvas.height = glyph.height;

        // Draw the character onto the offscreen canvas
        offCtx.drawImage(
          image,
          glyph.x,
          glyph.y,
          glyph.width,
          glyph.height,
          0,
          0,
          glyph.width,
          glyph.height
        );

        if (offCanvas.height > 0) {
          // Get the image data for the character
          const imageData = offCtx.getImageData(0, 0, glyph.width, glyph.height);

          // Apply the tint to only white pixels
          const tintedData = tintWhitePixels(imageData, colorUsed);

          // Put the modified image data back onto the canvas
          offCtx.putImageData(tintedData, 0, 0);

          // Draw the tinted character on the main canvas
          ctx.drawImage(offCanvas, currentX + glyph.xoffset, currentY + glyph.yoffset);
        }

        currentX += glyph.xadvance; // Advance the cursor
      }

      // Add space between words
      const spaceGlyph = charMap[" ".charCodeAt(0)];
      if (spaceGlyph) {
        currentX += spaceGlyph.xadvance;
      }
    }

    x = currentX; // Update x position for the next segment
    y = currentY; // Update y position for the next segment
  }
}


function parseText(input) {
    const colorMap = {
        "<red>": "rgb(0, 0, 255)",
        "<red>": "rgb(255, 0, 0)",
        "<white>": "rgb(255, 255, 255)",
        "<green>": "rgb(0, 255, 0)"
    };
    const tabMap = {
        "<tab>": "taby tab"
    };

    const result = [];
    const lines = input.split("\n");

    lines.forEach((line, lineIndex) => {
        let currentColor = "rgb(255, 255, 255)";
        let textBuffer = "";

        for (let i = 0; i < line.length; i++) {
            if (line[i] === "<") {
                // If there's text in the buffer, push it to result
                if (textBuffer) {
                    result.push({ type: "text", value: textBuffer });
                    textBuffer = "";
                }

                // Extract the color tag
                const endTag = line.indexOf(">", i);
                if (endTag !== -1) {
                    const tag = line.substring(i, endTag + 1);
                    if (colorMap[tag]) {
                        currentColor = colorMap[tag];
                        result.push({ type: "color", value: currentColor });
                    }
                    if (tabMap[tag]) {
                        result.push({ type: "tab" });
                    }
                    i = endTag; // Move index to the end of the tag
                }
            } else {
                // Collect text
                textBuffer += line[i];
            }
        }

        // Push remaining text in buffer
        if (textBuffer) {
            result.push({ type: "text", value: textBuffer });
        }

        // Add newline if not the last line
        if (lineIndex < lines.length - 1) {
            result.push({ type: "newline" });
        }
    });

    return result;
}

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width=eventsFunctionContext.getArgument("Width").valueOf();
canvas.height=eventsFunctionContext.getArgument("Height").valueOf();

const wordWrap = eventsFunctionContext.getArgument("WordWrap").valueOf();
const paddingPixels = eventsFunctionContext.getArgument("PaddingPixels").valueOf();

const TipA = getPixiTextureFromResourceName(`Tip\\TipA.webp`).baseTexture.resource.source;
ctx.drawImage(TipA, paddingPixels, paddingPixels);

const fontImg = getPixiTextureFromResourceName(
  eventsFunctionContext.getArgument("fontImg").toString()
).baseTexture.resource.source;

//const input = "<tab><white>When hunting a monster,\n<green>click once <white>on the monster to\nbegin attacking.";
const inputText = eventsFunctionContext.getArgument("StringContent").toString();
const fontFnt = runtimeScene.getGame().getBitmapFontManager()._loadedFontsData[
  eventsFunctionContext.getArgument("fontFnt").toString()
];

drawColoredBitmapText(
  canvas,
  fontFnt, fontImg, parseText(inputText),
  10,
  11,
  wordWrap,
  paddingPixels
);

objects.forEach(obj=>{
    const frameData = {
        image: '',
        originPoint: {x:0,y:0},
        centerPoint: {x:0,y:0,automatic:true},
        hasCustomCollisionMask: false,
        points: [],
    };

    const newFrame = new gdjs.SpriteAnimationFrame(
        runtimeScene.getGame().getImageManager(),
        frameData
    );

    newFrame.texture = PIXI.Texture.from(canvas);
    newFrame.baseTexture = PIXI.BaseTexture.from(canvas);
    newFrame.center.x = canvas.width/2;
    newFrame.center.y = canvas.height/2;

    obj._animations[0].directions[0].frames.push(newFrame);
});
};
gdjs.evtsExt__DynamicResource__CustomBitmapFont.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("SpriteObject"), gdjs.evtsExt__DynamicResource__CustomBitmapFont.GDSpriteObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__DynamicResource__CustomBitmapFont.GDSpriteObjectObjects1);
gdjs.evtsExt__DynamicResource__CustomBitmapFont.userFunc0x4450458(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__CustomBitmapFont.func = function(runtimeScene, fontImg, fontFnt, SpriteObject, PaddingPixels, WordWrap, StringContent, Width, Height, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SpriteObject": SpriteObject
},
  _objectArraysMap: {
"SpriteObject": gdjs.objectsListsToArray(SpriteObject)
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
if (argName === "fontImg") return fontImg;
if (argName === "fontFnt") return fontFnt;
if (argName === "PaddingPixels") return PaddingPixels;
if (argName === "WordWrap") return WordWrap;
if (argName === "StringContent") return StringContent;
if (argName === "Width") return Width;
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DynamicResource__CustomBitmapFont.GDSpriteObjectObjects1.length = 0;

gdjs.evtsExt__DynamicResource__CustomBitmapFont.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__CustomBitmapFont.registeredGdjsCallbacks = [];