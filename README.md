# orientation-block for cocos 2d-x
Orientation lock for mobile web app

Blocks your content while the device is on a wrong oriantation. Modify the basic script to fit into your dev envoirement.
Customize your content block element with css, add links or animations, add objects via Dom to the orientation block elments.

Just create a new orientation block element. And your done.
```javascript
//new orientationBlock(desired Orientation,path to blockimg);
new orientationBlock("portrait","res/rotate.jpg");
or
new orientationBlock("landscape","res/rotate.jpg");
```
<p align="center">
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
<p>

## Test it
Test orientation lock now with your mobile device at [testRun](http://inkfood.github.io/orientation-block/)

## How it works
The scipt is made for cocos2d-x but the technique will apply to any html5 app.
Take a look at [inkfood.com/display-block](https://inkfood.com/display-block) to understand how it work and what it does.
