# Quickstart Guide

In the quick start guide, we'll delve into how to use the Effect Network Effect-SDK so that you can publish tasks on the platform. 
The purpose of the Effect Network quickstart guide is to provide guided instruction on how to use the Effect Network Effect-SDK to interface with the Effect Network.

This guide goes through the following steps:
- Installing and initializing the Effect-SDK.
- Creating and using a burner-wallet
- Getting Testnet EFX 
- Publishing a campaign
- Publishing tasks to Effect Network
- Retrieving results

This will use a basic hello world example; the idea is that you (the developer) will type along with this example to get a feel for how the Effect-SDK works and how to get set up and use the Effect Network.
So let's get started!

# Check out the Repo! 
Just want to jump right into it right away? You can follow along with this guide or get started right away by going to the following link: [Hackathon-Boilerplate](https://github.com/effectai/hackathon-boilerplate)
There you will find boilerplate code for your node and browser examples.

# Requirements

## Node
At the moment, our Effect-SDK is built using [TypeScript](https://www.typescriptlang.org/). You will need [NodeJS](https://nodejs.org/en/) in order to install the npm package. If you do not have NodeJS installed, you can find it here:
[Download NodeJS for your platform.](https://nodejs.org/en/download/)

:::tip 
Typescript is optional, but the Effect-SDK does provide types for those that enjoy programming with Typescript.
:::

## Setup

### Step 1. Initializing project

Start the project by creating a directory and initializing it as an npm directory.

```bash
mkdir awesome-efx-project
cd awesome-efx-project
```

### Installing the Effect-SDK
In your project folder, you can now start installing packages that will assist you in your journey.

<code-group>
<code-block title="NPM">
```bash
npm i @effectai/effect-js
```
</code-block>

<code-block title="YARN">
```bash
yarn add @effectai/effect-js
```
</code-block>
</code-group>



To start, import the Effect-SDK using either `require` or `import` as needed. 

### Import the Effect-SDK

Depending on the environment that you are working in you will need to import the sdk in different ways. 
### Node
Using require:
```js
const effectsdk = require('@effectai/effect-js');
```

Using import:
```js
import * as effectsdk from '@effectai/effect-js';
```

### Browser
Using import (Path needs to be relative) in your own Javascript code that you import at the end of your `<body>` tag in your HTML.
```js
// Import from you local node_modules folder.
import "/node_modules/@effectai/effect-js/dist/index.umd.js"

// import from unpkg
import 'https://unpkg.com/@effectai/effect-js@0.0.34/dist/index.umd.js'
```

Src Tag import:
Using your favorite cdn js provider, you can import the Effect-SDK in the `<head>` tag of your html file.
```html
<script type="module" src="https://unpkg.com/@effectai/effect-js@0.0.34/dist/index.umd.js"></script>
```

:::danger Name of the import
The object name that you will be using to interact with the Effect-SDK is called `effectsdk`
:::
<br>

### Initializing the Effect Client
The first step is to import and initialize the effectsdk client. Which will be the main object from which methods can be called in order to interact with the Effect Network. Import or require `@effectai/effect-js` and pass the name of the network you want to connect to.
The constructor can take a configuration object, but the constructor will initialize with a default configuration object if no configuration object is passed. Take a look at [Effect-SDK Configuration](../sdk/README.md) for more information on the configuration object.
It is useful, though, to pass a `web3` object so that the SDK has access to it. 
The first parameter for the constructor is which network to use. At the moment, only testnet on `kylin` is supported. 


```js
const client = new effectsdk.EffectClient('kylin')
```
## Connect with burner wallet
For this quickstart guide, we will be using a burner wallet. You can use the `createAccount()` method in order to generate a random keypair for you. Then it becomes possible to use `connectAccount()` method in order to use your burner wallet. 
```js
const burnerWallet = client.createAccount();
const burnerAccount = await effectsdk.connectAccount(burnerWallet);
```

## Create Campaign

The next step now is to create a campaign object. 
This campaign object contains essential information such as; description, template, instructions, reward per task, example tasks. Creating a campaign is easy when you've managed to lay down the basic information.

Use the example given below in order to create your own campaign object. 
Use the `makeCampaign()` method in order to upload and publish your campaign to the blockchain.

```js
const uploadCampaignIpfs = {

  // The title of the campaign
  title: 'Tree Friends 🐻',

  // Description of the campaign
  description: 'All the tree friends are lost. They need you to find them.',   

  // Instructions for workers on how to complete tasks, accepts Markdown
  instructions: 'Identify all the happy tree friends!',  

  // The template that will be used for the tasks
  template: `<div id="task">
                <image src='` + '${image_url}' + `'></image>
                <h2>Image Classification</h2>
                <option submit name="button-answer" type="button" :options="['Cat','Dog','Mechanical Turk','Other']" label="What do you see in the picture above?"></option>
              </div>`,      

  // Campaign image
  image: 'https://ipfs.image.store/ipfs/1234...xyz',    

    // The category of the campaign
  category: 'Image labeling',     

  // Example task that will prefill the task template
  example_task: {'https://ipfs.image.store/ipfs/1234...xyz' },  

  // Version of the campaign
  version: 1,        

  // Amount of EFX to reward for completinga task
  reward: 100        
}

const makeCampaignResponse = await client.force.makeCampaign(campaignToIpfs, '11')
```
### Visit Testnet 
Visit [https://testnet.effect.network](https://testnet.effect.network) to see the campaign. Follow the link and join your campaign to work on the tasks.

### Creating batches and uploading task data

The campaign should be up and running now; the way we add data into the campaign is through batches. Every time new tasks are added, they are added as a batch. That way, the tasks are neatly organised. 
The task is already defined by the template as stated above, so now all that needs to be done is to pass the `place_holder` into the template every time it is presented to the worker. 

This example relies on an image being loaded into the placeholder. This is done by passing a URL string into the image tag that is defined in the template. 
So we will first create the task image URLs and then create the batch so that it can be published.


Define the tasks (These tasks have already been uploaded to IPFS), create and publish the batch. 
```js

const content = {
    'tasks': [
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4"}, 
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreidrxwhqsxa22uyjamz7qq3lh7pv2eg3ykodju6n7cgprmjpal2oga"}, 
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreid2ocabg7mo235uuwactlcf7vzxyagoxeroyrubfufwobtqz3q27q"}, 
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreifu5xciyxpwnmkorzddanqtc66i43q5cn4sdkb3l563yjzd7s3274"}
    ]
}

const batch = await sdk.force.createBatch(campaign.id, batches.length, content, repetitions)

```

## Wait for response
When the batch is published, it will become visible to the workers, and they will start working on it as soon as possible. Completion time can vary a bit depending on the type of the campaign and campaign qualifications. 
When a task is done within a batch, you will be able to retrieve the results using the following method. 

```js
const taskResults = await client.force.getTaskSubmissionsForBatch(batches.length)
```

## Summary

So in summary, the following things are needed to create a campaign:
- Installing the Effect-SDK
- Creating a burner wallet
- Creating a campaign
- Creating templates
- Creating batches and tasks
- Waiting for workers to complete the tasks
- Retrieving the results
- ...
- Profit! 💸💸💸

