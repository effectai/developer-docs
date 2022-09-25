# Quickstart Guide

In the quick start guide, we will delve into how to use the Effect Network Effect-SDK so that you can publish tasks on the platform.
The purpose of this quickstart guide is to provide guided instructions on how to use the Effect-SDK to interface with the Effect Network.

This guide goes through the following steps:

- Installing and initializing the Effect-SDK.
- Creating and using a burner-wallet
- Getting Testnet EFX
- Publishing a campaign
- Publishing tasks to Effect Network
- Retrieving results

This guide will use a basic hello world example; the idea is that you (the developer) will type along with this example to get a feel for how the Effect-SDK works and use the Effect Network through it.
So let's get started!

# Check out the Repo! 
Just want to jump right into it right away? You can follow along with this guide or get started right away by going to the following link: [Hackathon-Boilerplate](https://github.com/effectai/hackathon-boilerplate)
There you will find boilerplate code with node and browser examples.

# Checkout the SDK-Reference
There is also a reference availbe for you with detailed information about the classes and methods: [SDK-Reference](https://effectai.github.io/effect-js/).


# Requirements

## NodeJS
At the moment, our Effect-SDK is built using [TypeScript](https://www.typescriptlang.org/). You will need [NodeJS](https://nodejs.org/en/) in order to install the npm package. If you do not have NodeJS installed, you can find it here:
[Download NodeJS for your platform.](https://nodejs.org/en/download/)


:::tip 
Typescript is optional, but the Effect-SDK does provide types for those that enjoy programming with Typescript.
:::

## Setup

### Initializing your project

Start the project by creating a directory, then go to that directory.

```bash
mkdir awesome-efx-project
cd awesome-efx-project
```

Afterward, create your main javascript file and the main HTML file inside of your project directory.

```bash
touch index.js
touch index.html
```

### Creating package.json

When you are inside of your project directory, initialize npm or yarn. Either one will help you to create a `package.json`.
```bash
npm init
```

### Installing the Effect-SDK
In your project folder, you can now start installing packages that will assist you in your journey.

```bash
npm install @effectai/effect-js
```

### Importing the Effect-SDK

Depending on the environment that you are working in, you will need to import the SDK in different ways.
#### Node
Due to the way that NodeJS works, you can `import` or `require` the Effect-SDK as needed. Depending on your needs, both ways are provided for you.

<code-group>
<code-block title="index.js (CommonJS)">
```js
// index.js
const effectsdk = require('@effectai/effect-js');
```
</code-block>

<code-block title="index.js (ES6)">
```js
// index.js
import * as effectsdk from '@effectai/effect-js';
```
</code-block>
</code-group>

#### Browser
When using the Effect SDK in the browser, import the SDK from the `node_modules/` directory in your project to your main HTML file. Alternatively we can use [unpkg](https://unpkg.com/@effectai/effect-js/) to import `Effect-JS` from a CDN. While we are at it, we will add our main javascript file `index.js` to the HTML file.

:::warning Import/Export
The name of the export is `effectsdk` and the import path of the sdk has to be **relative**.
:::

<!-- Browser -->
<!-- <script src="path/to/dayjs/dayjs.min.js"></script> -->
<!-- <script> -->
  <!-- // dayjs().format() -->
<!-- </script> -->
<!-- CDN resource -->
<!-- Day.js can be included by way of a CDN provider like cdnjs.com, unpkg and jsDelivr ... -->

<!-- CDN example (unpkg) -->
<!-- <script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script> -->
<!-- <script>dayjs().format()</script> -->
 

<code-group>
<code-block title="index.html">
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Effect dApp</title>
    <meta charset="UTF-8">
    
    <script src="./node_modules/@effectai/effect-js/dist/index.js"></script>
    <!-- 👆️ relative import from node_modules -->

    <script src="https://unpkg.com/@effectai/effect-js/dist/index.js"></script>
    <!-- 👆️ Or import from unpkg -->
  </head>
  <body>
    <!-- 🏗️ -->

    <!-- 👇️ Script at bottom of body -->
    <script src="./index.js"></script>
  </body>
</html>
```
</code-block>
</code-group>



<br>

:::tip Live-Server
When developing locally for your browser it might be useful to use a local server.
You can quickly start a local server with the following command.
```bash
npx http-server -c -1
```
:::

### Initializing the Effect Client
Now that we have installed the Effect SDK, it is time to initialize the EffectClient. Which will be the main object from which methods can be called in order to interact with the Effect Network.

<code-group>
<code-block title="index.js">
```js
const client = new effectsdk.EffectClient('jungle');
```
</code-block>
</code-group>

The constructor can take a configuration object, but the constructor will initialize with a default configuration object if no configuration object is passed. Take a look at [Effect-SDK Configuration](../sdk/README.md) for more information on the configuration object.
The first parameter for the constructor is which network to use, there are three networks available: ['mainnet', 'testnet', 'local']. The default network is 'testnet'. 

The constructor will take as its first argument the network to use. There are three networks available: ['mainnet', 'testnet', 'local']. The default network is 'testnet'.
In order to use the local network, you will need to spin up a local network. Refer to the [local network guide](../local/README.md) for more information.
The second parameter that is taken by the constructor is the configuration object. The configuration object is an object that contains all the configuration options for SDK, such as the EOSIO endpoint, IPFS endpoint, etc. Please refer to the [Effect-SDK Configuration](../sdk/README.md) or [Effect-JS-Reference/EffectClientConfig](https://effectai.github.io/effect-js/interfaces/EffectClientConfig.html) for more information.

## Connect with burner wallet
For this quickstart guide, we will be using a burner wallet. You can use the `createAccount()` method in order to generate a random keypair for you. If you already have a keypair, you could use the private key to instantiate the bsc account with it by using `createAccount('privateKey')`.

<code-group>
<code-block title="index.js">
```js
// Instantiating bsc account.
const account = effectsdk.createAccount();

// Or: instantiate bsc account from existing private key.
const account = effectsdk.createAccount('privateKey');
```
</code-block>
</code-group>

After creating your account, you have to add it to your wallet. With `createWallet(account)` you can create a wallet with your account.

<code-group>
<code-block title="index.js">
```js
// Generate web3 instance from account.
const web3 = effectsdk.createWallet(account);
```
</code-block>
</code-group>

After creating your wallet, all you have to do is connect your account to the SDK by passing the web3 object that gets returned by the `createWallet()` method to `connectAccount()`.

<code-group>
<code-block title="index.js">
```js
// Connect your account to the Effect Client.
const effectAccount = await client.connectAccount(web3);
```
</code-block>
</code-group>

## Create Campaign

The next step now is to create a campaing json structure. This campaign object contains essential information such as; description, template, instructions, reward per task, example tasks. Creating a campaign is easy when you've managed to lay down the basic information.

Use the example given below in order to create your own campaign object.

The most dificult part of making the campaign is the html itself that needs to be passed to the `template` property. This html will be used to render the campaign.

As can be seen below the template is not complete html. It does not contain the HTML tag: `<html>`, `head` nor `body`. This is because the html is rendered by the Effect-SDK.

Another important thing to note is that you can import stylesheets and your js libraries in the html.

It is recomended to use Effect Network's default style sheet, which you can import into the html template by adding this tag: `<link href="https://app.effect.network/force-defaults.css" rel="stylesheet" />
`

Also note that in the html template we have a `${tweet_id}` variable that will be replaced with an actual tweet id for every new task. The notation `${variable_name}` is called a placeholder. The placeholder will be replaced with the actual value when the task is created.

<code-group>
<code-block title="index.js">
```js
const uploadCampaignIpfs = {

  // The title of the campaign
  title: 'Twitter Sentiment Analysis',

  // Description of the campaign
  description: 'This is a campaign to analyze the sentiment of tweets from the Twitter API.',   

  // Instructions for workers on how to complete tasks, accepts Markdown
  instructions: 'Indicate the sentiment of the tweet in the task description.',  

  // The template that will be used for the tasks
  template: 
  `<section class="section">
        <div class="container has-text-centered">
            <div id="tweet">
                <h1 class="title">Tweet Sentiment</h1>
            </div>

            <form>
                <div class="question question-sentiment">
                    <h2 class="subtitle">What is the <b>sentiment of this post</b>?</h2>
                    <div class="field">
                        <input class="is-checkradio" id="negative" value="negative" type="radio" name="sentiment" required>
                        <label for="negative">Negative</label>
                        <input class="is-checkradio" id="neutral" value="neutral" type="radio" name="sentiment">
                        <label for="neutral">Neutral</label>
                        <input class="is-checkradio" id="positive" value="positive" type="radio" name="sentiment">
                        <label for="positive">Positive</label>
                    </div>
                </div>

                <button type="submit" class="button is-primary is-large mt-6">Submit</button>
            </form>
        </div>
    </section>

    <link href="https://app.effect.network/force-defaults.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-checkradio@2.1.2/dist/css/bulma-checkradio.min.css">
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

    <script>
    window.addEventListener('load', function() {
      // Note that the `createTweet` method is called after the `load` event has fired. 
      // This happens because the Twitter library needs to be loaded first. 

    // Tweet is added to div with the id container.
    // 
    twttr.widgets.createTweet('${tweet_id}', document.getElementById('tweet', {theme: 'dark'})).then(() => {forceResize()})

    })

    </script>
    <style>
    .twitter-tweet {
        margin-left: auto;
        margin-right: auto;
    }
    </style>`,      

  // Campaign image
  image: 'https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4',  

    // The category of the campaign
  category: 'Image labeling',     

  // Example task that will prefill the task template
  example_task: {
    'tweet_id': 'https://ipfs.effect.ai/ipfs/bafkreidrxwhqsxa22uyjamz7qq3lh7pv2eg3ykodju6n7cgprmjpal2oga'
  },

  // Version of the campaign
  version: 1,        

  // Amount of EFX to reward for completinga task
  reward: 42        
}
```
</code-block>
</code-group>

Use the `makeCampaign()` method in order to upload and publish your campaign to the blockchain.

<code-group>
<code-block title="index.js">
```javascript
const makeCampaign = await client.force.makeCampaign(campaignToIpfs, '10')
```
</code-block>
</code-group>

### Visit Testnet 
Visit [https://testnet.effect.network](https://testnet.effect.network) to see the campaign. Follow the link, sign in with your keypair and join your campaign to work on the tasks. Don't forget to use the keypair that you generated in the begining of this tutorial.

### Getting funds
Before we can continue creating a batch, you will need funds to create a batch.
You will need to provide your Virtual Effect Account name in order to get your tokens. See [Connect with burner wallet](https://developer.effect.network/quickstart/#connect-with-burner-wallet) on how to create an Virtual Effect Account. you will be able to see your account name with the following code. 

```js
console.log(effectAccount)
```

```json
 effectAccount: {
  "accountName": "bd9b69af4f6ed393e9c4ba7c503e80ea2fbfa1fb", // This is the account name.
  "address": "0xe345E6eD90333135288B780A37672F2d98cC9E3B",
  "privateKey": "0x123...321"
}
```

Join our discord and use the faucet bot to get funds. Find the Hackathon section, and join the `faucet` channel to find more information to get funds. 
Find the Effect.AI Bot and use the command `!get_tokens <account_name>` to get your funds.

:::tip Get tokens from the faucet. 💸
### [Join the Effect Network Discord](https://discord.gg/effectnetwork)
:::
### Creating batches and uploading task data

The campaign should be up and running now; the way we add data into the campaign is through batches. Every time new tasks are added, they are added as a batch. That way, the tasks are neatly organized. 
The task is already defined by the template as stated above, so now all that needs to be done is to pass the `place_holder` into the template every time it is presented to the worker. 

This example relies on an image being loaded into the placeholder. This is done by passing a URL string into the image tag that is defined in the template. 
So we will first create the task image URLs and then create the batch so that it can be published.

Define the tasks (These tasks have already been uploaded to IPFS), create and publish the batch. 

<code-group>
<code-block title="index.js">
```js
const content = {
    'tasks': [
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4"}, 
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreidrxwhqsxa22uyjamz7qq3lh7pv2eg3ykodju6n7cgprmjpal2oga"}, 
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreid2ocabg7mo235uuwactlcf7vzxyagoxeroyrubfufwobtqz3q27q"}, 
        {"place_holder": "https://ipfs.effect.ai/ipfs/bafkreifu5xciyxpwnmkorzddanqtc66i43q5cn4sdkb3l563yjzd7s3274"}
    ]
}

// Retrieve the campaign that was last created/
const campaign = await client.force.getMyLastCampaign()

await client.force.createBatch(campaign.id, content, repetitions)
```
</code-block>
</code-group>

## Wait for response
When the batch is published, it will become visible to the workers, and they will start working on it as soon as possible. Completion time can vary a bit depending on the type of the campaign and campaign qualifications. 
When a task is done within a batch, you will be able to retrieve the results using the following method. 

<code-group>
<code-block title="index.js">
```js
const submission = await client.force.getTaskSubmissionsForBatch(batch.batch_id)
```
</code-block>
</code-group>

## Summary
You now know how to setup the SDK, create an account, connect said account it to the SDK, create campaigns, batches, tasks and retrieve submissions from said tasks. 

That's it! the following things are needed to create a campaign:
- Installing the Effect-SDK
- Creating a burner wallet
- Creating a campaign
- Creating templates
- Creating batches and tasks
- Waiting for workers to complete the tasks
- Retrieving the results
- ...
- Profit! 💸💸💸
