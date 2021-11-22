# Template

A template is simply some vanilla HTML that has a placeholder value that will be replaced with data when it is presented to the worker as a task. That's a bit of a mouthful; let's break it down.

Let's imagine we have an image classification campaign; we want to identify if there are cats in the picture. We present a picture to the worker, and it is their task to identify what is in the picture. They see an image and are provided a list of options to choose from. 


This is a template:
```html
<div id="task">
  <image src='${image_url}'></image>
  <h2>Image Classification</h2>
  <option submit name="button-answer" type="button" :options="['Cat','Dog','Mechanical Turk','Other']" label="What do you see in the picture above?"></option>
</div>
````

The template will render into the following image:
![](./template.png)

The worker is presented with an image that is loaded in via the placeholder annotation: `${variable_name}` and they are presented some kind of input field such as buttons in this case. But it could also be something else such as a textbox.

They then submit the results which get posted right away to the blockchain. But there are more features when it comes to the template engine of Effect Network. So let's break it down

## The Break Down

As we can see, the template has different elements to is. The one showcased above is a simple example, but it can be much more complex than that. 
One of our favorite use cases up until now that we've had is the polygon annotator 

![Polygon Annotator](./polygon.png)

As you can see it is also possible to add javascript to the template. In order to make the whole template dynamic and make it a full fledged application within the the worker interface. 


## Placeholder

Note the use of `${image_url}` in the template, the placeholde variable name can be  anything you want. You do need to make sure that when it is loaded into the html template it is valid. 


This is the variable that will be replaced by the array of data that is provided later on.
So later, the placeholder will be filled with `https://i.imgur.com/NP3BDFD.jpg` and rendered as the template below.
Of course, you can pass any `image_url` that you choose; in this quickstart guide, we will be looking at how to use IPFS.

## How input fields are processed


### How to encode json data


## Pipes

## Submit results


## Resize
Use `forceResize` in order to adjust the size of the iframe.


## Example Github Examples
https://github.com/effectai/effect-force-templates