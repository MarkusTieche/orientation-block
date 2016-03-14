# orientation-block for cocos 2d-x
Orientation lock for mobile web app

Blocks your content while the devices is on a wrong oriantation. Modify the basic script to fit into your dev envoirement.
Customize your content block element with css, add links or animated objects via Dom to the orientation block elments.

Just create a new orientation block element. And your done.
```javascript
//new orientationBlock(desired Orientation,path to blockimg);
new orientationBlock("portrait","res/rotate.jpg"); or
new orientationBlock("landscape","res/rotate.jpg");
```

## How it works
