# Local Deployment

The first is getting started with EOS, which is the blockchain where the smart contract logic is deployed.
So we need to run a local network, retrieve the contracts and deploy them locally.

The second part of this guide will look at deploying the frontend interacting with the smart contract. Primarily this will be the worker interface. But there are features built-in as well for requesters.

The third part will focus on deploying the relayer; this is the interface between the BSC blockchain and the eos blockchain.
This reminds me that we might need to look into deploying a BSC testnet as well, or we'll need to look at using an existing one. 
It feels kind of silly to deploy a new blockchain for every new project.

Lastly, we will finish up with using the effect-js library to develop our own application.f

# Docker Images
[TODO]: # (Provide docker images that users can pull and run on their machine.)


# EOS
EOS is where the smart contract logic will be deployed, so we'll focus on this step first. 

## EOSIO Binaries

First we'll need to install the eosio binaries in order to run the local network and a client in order to interact with the network. 
At the following link, you can find instructions on how to build it for your specific platform.
https://developers.eos.io/manuals/eos/v2.0/install/install-prebuilt-binaries

Now you should be able to run `cleos` and `keosd` locally, which allows you to interact with your local version of the eos blockchain.

## EOS Wallet
This step is important, as it allows us to deploy the smart contract in a bit to the blockchain. 
Follow this guide in order to create a wallet with the key pair.

Create a local wallet, save the password in the `local.wallet` file. Afterwards you can use this password to unlock the wallet. 
```bash
cleos wallet create --file default.wallet 
```

Open wallet
```bash
cleos wallet open
```

## Run the EOS Local Testnet

Run keys
```bash
keosd &
```

Run nodeos // local simple node // Recomended
```bash
nodeos -e -p eosio --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --verbose-http-errors --http-validate-host=false > nodeos.log 2>&1 &
```


Check to see if nodeos is running at `localhost:8888`.
You can check the `nodeos.log` file to see if there are any new blocks being produced.
```bash
curl http://localhost:8888/v1/chain/get_info
```

Stop nodeos
```bash
pkill nodeos
```

[Local Wallet](https://developers.eos.io/welcome/latest/getting-started-guide/local-development-environment/development-wallet)

## Importing EOSIO
A default system account is provided when you instantiate a new local blockchain.


`eosio` is the name of the account.
Will we deploy the contracts to this account?

The private key for this account is the following:
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

# Creating an EOS accounts

Now that the main EOSIO account has been imported into our local wallet, and we have the local EOSIO blockchain running. We can start making accounts for each contract, so that we can push our contracts to each of them.

Create an account for the contract, using the key of the eosio account. [Note the naming convetion for EOSIO](https://developers.eos.io/manuals/eosio.cdt/v1.8/best-practices/naming-conventions). 

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

### 4. effect.relay
This is needed for the relayer account for the EOS <=> BSC relayer
```bash
cleos create account eosio effect.relay EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```


Now we should be able to push the contract to the newly created address.


## Downloading the Smart Contract
[TODO]: # (Take a look at the GitHub repo for effect network smart contracts. There seems to be a docker image that we can use or at least a script that makes the process a bit easier. 
https://github.com/effectai/effect-network/tree/master/contracts
Then, download the contracts one by one and deploying them locally.)

For this guide, we'll focus on downloading the contracts in wasm and abi formats from the blockchain and deploying them locally. That way, we won't need to deal with compiling the contracts, making it easier to use the most up-to-date contracts.

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

cleos push action effect.token create '[ "effect", "1000000.0000 EFX" ]' -p effect.token@active
## Pushing EOS actions to get the Rube Goldberg machine started.

Create a v-account for the relayer.
```bash
cleos push action effect.accnt open '{ "acc": ["name", "effect.relay"], "symbol": { "contract": "eosio.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active
```

Create the token supply.
```bash
cleos push action effect.token create '[ "effect", "1000000.0000 EFX" ]' -p effect.token@active
```



[TODO // optional???]: # (Add deployment of token contract?
    # BSC 
    Start a local ETH chain, by using [Hardhat](https://github.com/nomiclabs/hardhat) or [Ganache](https://github.com/trufflesuite/ganache).
)


# SDK
Clone the sdk and `cd` into it. Change the SignatureProvider for the local environment, with the private_key for your relayer account.

```bash
git clone https://github.com/effectai/effect-js
npm install
```

Find the `.env.development` file and uncomment the `local` section of the `NUXT_ENV` variables and comment out other sections.
Now build the sdk so that the local version of the frontend can interact with the local blockchain.
```bash
npm run build:cjs
```

# Relayer
Clone the github and start the relayer, install the dependencies and then start the relayer using local configuration.

```bash
git clone https://github.com/effectai/vaccount-relayer
cd vaccount-relayer
npm install 
node index.js local
```
# FrontEnd
Clone and start up the Force-Frontend. The force frontend will display information about campaigns and tasks. After you have adjusted the 
```bash
git clone https://github.com/effectai/force-frontend-new
```

Now `cd` in to the created folder, find the `.env.development` file and comment out the _Local_ configuration variables and comment the _Jungle_ or _Kylin_ configuration variables.

Now we can install and run the frontend.

```bash
npm install
npm link path/to/sdk
npm run dev
```
