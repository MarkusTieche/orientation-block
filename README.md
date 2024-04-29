# orientation-block for cocos 2d-x
Orientation lock for mobile web app

Blocks your content while the device is on a wrong oriantation. Modify the basic script to fit into your dev envoirement.
Customize your content block element with css, add links or animations, add objects via Dom to the orientation block elment.

Just create a new orientation block element. And your done.
```javascript
//new orientationBlock(desired Orientation,path to blockimg);
new orientationBlock("portrait","res/rotate.jpg");
or
new orientationBlock("landscape","res/rotate.jpg");
```


## Test it
Test cocos2d-x orientation lock now with your mobile device -> <a href="http://markustieche.github.io/orientation-block/" target="_blank">testRun</a>

## How it works
The scipt is made for cocos2d-x but the technique will apply to any html5 app.
