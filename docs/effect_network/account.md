## Account

The Effect Network account system is completely decentralized. It's one of the pieces we are proud of. It's built in such a way that any user can log in using the keys of their EOS or BSC keypairs. Users can log in and interact with Effect Network without any central party authorizing their access to the platform.

All you need to start is an EOS account, 
Add information here about how to open an eos account, should we add ad information here about how to open an account with

Or an BSC account, which can be generated for you when signing up for the first time.

Smart contracts handle all of the tr:::danger EFFECT NETWORK INTERNAL
Figure out how to pass the template string with the `place_holder` value elegantly. 
At the moment, the `place_holder` is appended to the template string.
:::
vaditional back end logic in such a way that transactions of every action is relayed from one blockchain to the other.

Now that that we have an overview let's get started with login in, and opening an account with Effect Network.

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

