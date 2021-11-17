# Effect Network

## Template


A template is simply some vanilla HTML that has a placeholder value that will be replaced with data when it is presented to the worker as a task. That's a bit of a mouthful; let's break it down.

Let's imagine we have an image classification campaign; we want to identify if there are cats in the picture. We present a picture to the worker, and it is their task to identify what is in the picture. They see an image and are provided a list of options to choose from. 

:::tip Placeholder
Note the use of `${image_url}` in the template.

This is the variable that will be replaced by the array of data that is provided later on.
So later, the placeholder will be filled with `https://i.imgur.com/NP3BDFD.jpg` and rendered as the template below.
Of course, you can pass any `image_url` that you choose; in this quickstart guide, we will be looking at how to use IPFS.
:::

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


## Account

Something here about dragons and accounts.
## Creating an Effect Account
Before you can publish campaigns on Effect Network, you need to create an account. This example will demonstrate how to do that using a virtual account. 

Create an account so you can start making transactions on the Effect Network. This way, you can pay for creating the campaigns and running them.

```js
await sdk.account.openAccount('tree_friend')
await sdk.account.getVAccountByName('tree_friend')
```

## Get Money 💸
Now that you have created an account, you will need to load up your account with EFX. As we are building on our app on testnet, we will need to get testnet EFX (called: UTL). Join our Discord server, join the hackathon channel and request EFX (UTL) from the Discord-bot 🤖.

:::tip Join to access the EFX Faucet
[Join Discord ](https://discord.gg/WsPVmaVhu3)
:::

## Check balance
After you have used the faucet to get your tokens, you will be able to get your account balance, make withdrawals and do transfers.

```js
// from account, to vaccount, amount in EFX
const account = await sdk.account.getVAccountByName('account_name')
const balance = await sdk.account.getPendingBalance(account.id)


// from vaccount, to account, amount in EFX
await sdk.account.withdraw('from_vaccount_name', 'to_account_name', '1.0000')

// from vaccount, to vaccount, amount in EFX
await sdk.account.vtransfer('from_vaccount_name', 'to_vaccount_name', '1.0000')
```

## Campaign --- this piece needs to be rewritten.
The next step now is to create the campaign object. This campaign object contains essential information such as; what kind of campaign it is, which template is used, and how much workers are rewarded. When the campaign object is uploaded to an IPFS service, retrieve your hash. This hash is used to create the campaign. Storing data directly on the blockchain is possible, but it is costly; thus, for now, we will be using the method. That way the campaign data is not stored on the blockchain itself but can be easily referenced from the smart contract and your dApps.


:::danger EFFECT NETWORK INTERNAL
Figure out how to pass the template string with the `place_holder` value elegantly. 
At the moment, the `place_holder` is appended to the template string.
:::

