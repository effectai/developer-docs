# Local Deployment

This documentation is intended for local development and testing.

# Quick and Easy
The quick and easy way is to use the local deployment scripts provided at [GitHub.com/effectai/effect-network/scripts](https://github.com/effectai/effect-network/tree/master/scripts).

# Detailed Instructions

The first is getting started with EOS, which is the blockchain where the smart contract logic is deployed.
So we need to run a local network, retrieve the contracts and deploy them locally.

The second part of this guide will look at deploying the frontend interacting with the smart contract. Primarily this will be the worker interface. But there are features built-in as well for requesters.

The third part will focus on deploying the relayer; this is the interface between the BSC blockchain and the eos blockchain.
This reminds me that we might need to look into deploying a BSC testnet as well, or we'll need to look at using an existing one. 
It feels kind of silly to deploy a new blockchain for every new project.



[TODO]: # (# Docker Images Provide docker images that users can pull and run on their machine.)

## EOS
EOS is where the smart contract logic will be deployed, so we'll focus on this step first. 

### EOSIO Binaries

First we'll need to install the eosio binaries in order to run the local network and a client in order to interact with the network. 
At the following link, you can find instructions on how to build it for your specific platform.
https://developers.eos.io/manuals/eos/v2.0/install/install-prebuilt-binaries

Now you should be able to run `cleos` and `keosd` locally, which allows you to interact with your local version of the eos blockchain.

### EOS Wallet
This step is important, as it allows us to deploy the smart contract in a bit to the blockchain. 
Follow this guide in order to create a wallet with the key pair.

Create a local wallet, save the password in the `local.wallet` file. Afterwards you can use this password to unlock the wallet. 
```bash
cleos wallet create --file default.wallet 
```

Open wallet and unlock
```bash
cleos wallet open
cleos wallet unlock --password $(cat local.wallet)
```
### Run the EOS Local Testnet

To run a local testnet, the following command will be used. using the `chain-api-plugin` and `history-api-plugin` which will allow us to interact with the blockchain and use a blockchain explorer.
```bash 
nodeos \
-e -p eosio \
--plugin eosio::chain_api_plugin \
--plugin eosio::history_api_plugin \
--data-dir ~/.local/share/eosio/nodeos_local \
--access-control-allow-origin="*" \
--access-control-allow-headers="*" \
--http-validate-host=false \
--delete-all-blocks \
> nodeos.log 2>&1 & 
```

Check to see if nodeos is running at `localhost:8888`.
You can check the `nodeos.log` file to see if there are any new blocks being produced or use one of the following commands to see the current block number.
```bash
cleos get info
# Or
curl http://localhost:8888/v1/chain/get_info
```

When you want to stop the nodeos process, you can use the following command.
```bash
pkill nodeos
```

[Local Wallet](https://developers.eos.io/welcome/latest/getting-started-guide/local-development-environment/development-wallet)

### Importing EOSIO
A default system account is provided when you instantiate a new local blockchain, `eosio` is the name of the account. The private key for this account is the following:
`5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3`

:::danger
This key is used as a default for EOSIO development and should never be used for anything but local development!
:::

Import this account into your local eos client:
```bash
cleos wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```
Reference
https://developers.eos.io/welcome/latest/smart-contract-guides/before-you-begin/running-a-blockchain


So now we managed to spin up our local eos blockchain and import the keys to the wallet. The next steps are to figure out accounts and permissions. Later we can continue to the deployment of the contracts.

After we have imported the EOSIO account, we can create a new account for the contract. 
We will need a new account for each contract. 

## Creating an EOS accounts

Now that the main EOSIO account has been imported into our local wallet, and we have the local EOSIO blockchain running. We can start making accounts for each contract so that we can push our contracts to each of them.

Create an account for the contract using the key of the eosio account, using the key for the `eosio` account.

#### 1. effect.force
Effect Network contract with core functionalities for campaigns and tasks.
```bash
cleos create account eosio effect.force EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

#### 2. effect.accnt
Effect Network virtual account system.
```bash
cleos create account eosio effect.accnt EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

#### 3. effect.token
Effect Network token used for paying for tasks.
```bash
cleos create account eosio effect.token EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

#### 4. effect.relay
This is needed for the relayer account for the EOS <=> BSC relayer
```bash
cleos create account eosio effect.relay EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```
Now we should be able to push the contract to the newly created address.

## Downloading the Smart Contract
[TODO]: # (Take a look at the GitHub repo for effect network smart contracts. There seems to be a docker image that we can use or at least a script that makes the process a bit easier. 
https://github.com/effectai/effect-network/tree/master/contracts
Then, download the contracts one by one and deploy them locally.)

For this guide, we'll focus on downloading the contracts in WASM and ABI formats from the blockchain and deploying them locally. That way, we won't need to deal with compiling the contracts, making it easier to use the most up-to-date contracts.

```bash
mkdir effect.force effect.token effect.accnt
```

1. Force Contract - efxforce1111 
```bash
cleos --url https://jungle3.greymass.com get code efxforce1111 --wasm -c force/effect.force.wasm -a force/effect.force.abi
```

2. Token Contract - efxtoken1112
```bash
cleos --url https://jungle3.greymass.com get code efxtoken1112 --wasm -c token/effect.token.wasm -a token/effect.token.abi
```

3. Account Contract - efxaccount11
```bash
cleos --url https://jungle3.greymass.com get code efxaccount11 --wasm -c account/effect.accnt.wasm -a account/effect.accnt.abi
```

[Connecting to Specific Chain](https://developers.eos.io/manuals/eos/v2.1/cleos/how-to-guides/how-to-connect-to-a-specific-network)
[Get Code](https://developers.eos.io/manuals/eos/v2.1/cleos/how-to-guides/how-to-connect-to-a-specific-network)

## Deploying the Smart Contracts

Now that we have the contracts, we can start looking at deploying them to the local chain.

1. Force Contract - effect.force
```bash
cleos --url http://localhost:8888 set contract effect.force effect.force --abi effect.force.abi -p effect.force@active
```

2. Token Contract - effect.token
```bash
cleos --url http://localhost:8888 set contract effect.token effect.token --abi effect.token.abi -p effect.token@active
```

3. Account Contract - effect.accnt
```bash
cleos --url http://localhost:8888 set contract effect.accnt effect.accnt --abi effect.accnt.abi -p effect.accnt@active
```

## Pushing EOS actions to get the Rube Goldberg machine started.

Initialize the effect.force contract.
```bash
cleos push action effect.force init '[ "effect.accnt" ]' -p effect.force@active
```

Create a v-account for the relayer and for effect.admin
```bash
cleos push action effect.accnt open '{ "acc": ["name", "effect.force"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active

cleos push action effect.accnt open '{ "acc": ["name", "effect.admin"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active

```

Create the token supply.
```bash
cleos push action effect.token create '[ "effect.admin", "1000000.0000 EFX" ]' -p effect.token@active
cleos push action effect.token issue '[ "effect.admin", "50000.0000 EFX", "m" ]' -p effect.admin@active
```

## SDK
Clone the SDK and `cd` into it. Change the SignatureProvider for the local environment with the private_key for your relayer account.

```bash
git clone https://github.com/effectai/effect-js
cd effect-js
npm install
```

[TODO]: # (Consider changing the way this is done to something a bit more concise. Such as creating a `.env.local.example` file and letting the dev change that file to `.env.development`)
Find the `.env.development` file and uncomment the `local` section of the `NUXT_ENV` variables and comment out other sections.
Now build the SDK so that the local version of the frontend can interact with the local blockchain.
```bash
npm run build:cjs
```

## Relayer
Clone the GitHub and start the relayer, install the dependencies and then start the relayer using local configuration.

```bash
git clone https://github.com/effectai/vaccount-relayer
cd vaccount-relayer
npm install 
node index.js local &
```
## FrontEnd
Clone and start up the Force-Frontend. The force frontend will display information about campaigns and tasks. 
```bash
git clone https://github.com/effectai/force-frontend-new
cd force-frontend-new
rm .env.development
cp .env.local.development .env.development
npm install
npm link ../path/to/effect-js
npm run dev
```

## Get Funds
In order to do transactions on the local network, we need to send ourselves some EFX. This is not required for all actions but is required for making batches, for example.

Using the frontend, you can register a new account, use the generated account name in order to send yourself funds  using the following command (remebmer to unlock your wallet):
```bash
cleos push action effect.token transfer '["effect.admin", "effect.accnt", "1000.0000 EFX", "<YOUR_EFFECT_ACCOUNT_ID>"]' -p effect.admin@active
```

# Local Blockchain explorer.
You'll be able to use the local blockchain explorer to see the transactions that have been made on the local blockchain. Go to [local.bloks.io](https://local.bloks.io) and using the default provided values, you can see the transactions that have been made on the local blockchain.


## Conclusion
Congratulations, we now have a local version of all the main components to run Effect Network! It is now possible to make campaigns, create batches, make tasks, pay for the tasks and get paid doing the tasks. 