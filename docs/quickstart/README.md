# Quickstart Guide

Introduction, Quick start, init client, create campaign, create task, publish task, response

With this quickstart guide, we'll delve into how to use the Effect Network SDK so that you can publish tasks on the platform. 

### Requirements

#### Node
At the moment, our SDK is built using Typescript and runs on NodeJS. If you do not have NodeJS installed, you can find it here:
[Download NodeJS for your platform.](https://nodejs.org/en/download/)

#### Keys - Is this even needed?
Valid BSC keys are needed to use the SDK.
We recommend you start with a burner wallet and generate a new key for initializing the client.

You can create a new one via the force interface.
Take a look at 

### Step 1. Initializing project

Start the project by creating a directory and initializing it as an npm directory.

```bash
mkdir awesome-efx-project
cd awesome-efx-project
```

### Step 2. Installing the SDK
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

:::tip 
If you are also building with Typescript, the types are included with the NPM package. You should be able to see 
:::


### Initializing the Effect Client
To start you will need to import the sdk using either `require` or `import` as needed. 
At the moment the npm package only supports CommonJS exports. If it does not work as needed you can clone the GitHub repo and build the needed module format yourself. 
There are three module formats supported at the moment: [commonjs, umd, es6]
```
git clone git@github.com:effectai/developer-docs.git
npm i
npm run build:umd
# OR
npm run build:es
```

<code-group>
<code-block title="Javscript">
```ts
const effectSdk = require('@effectai/effect-js')

const signatureProvider = new JsSignatureProvider([PRIVATE_KEY])
const options = {
  network: "kylin",
  host: 'https://api.kylin.alohaeos.com',
  signatureProvider: signatureProvider
}
const sdk = new effectSdk.EffectClient(options);


```

</code-block>

<code-block title="Typescript">
```ts
const effectSdk = require('@effectai/effect-js')

const options = {
  network: "kylin",
  host: 'https://api.kylin.alohaeos.com',
  signatureProvider: signatureProvider
}
const sdk = new effectSdk.EffectClient(options);

sdk.account.openAccount('account_name')
sdk.account.getVAccountByName('account_name')

// from account, to vaccount, amount in EFX
sdk.account.deposit('from_account_name', 'to_vaccount_name', '1.0000')

// from vaccount, to account, amount in EFX
sdk.account.withdraw('from_vaccount_name', 'to_account_name', '1.0000')

// from vaccount, to vaccount, amount in EFX
sdk.account.vtransfer('from_vaccount_name', 'to_vaccount_name', '1.0000')

```
</code-block>
</code-group>

## Create Campaign

```js
  await createCampaign (owner: string, accountId: number, nonce: number, hash: string, quantity: string, options: object)


```


## Create Task
Task reservations are only done by workers, it is not needed by requesters.


## Publish Task

## Wait for response
When the task is published, a worker will start working on it as soon as possible. When the worker is done with the task, it will be published on the blockchain and then you will be able to retrieve it by calling the following method.

```js
sdk.account.openAccount('account_name')
sdk.account.getVAccountByName('account_name')

// from account, to vaccount, amount in EFX
sdk.account.deposit('from_account_name', 'to_vaccount_name', '1.0000')

// from vaccount, to account, amount in EFX
sdk.account.withdraw('from_vaccount_name', 'to_account_name', '1.0000')

// from vaccount, to vaccount, amount in EFX
sdk.account.vtransfer('from_vaccount_name', 'to_vaccount_name', '1.0000')
```

## Code blocks 
<code-group>
<code-block title="Javscript">
```
lorem
```
</code-block>

<code-block title="Typescript">
```
lorem
```
</code-block>
</code-group>