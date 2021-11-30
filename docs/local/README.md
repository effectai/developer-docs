# Local Deployment

At the moment we are noticing that there is an issue with too many campaigns being generated and added to the smart contract. 
So we need to figure out a way in order to run everything locally in order to make it easier for other developers to also develop on the platform without congesting the testnet.

First is getting started with EOS, which is the blockchain where the smart contract logic is deployed.
So we need to run a local network, retrieve the contracts and deploy them locally.

Second part of this guide will look at deploying the frontend interacting with the smart contract. Primarly this will be the worker interface. But there are features built in as well for requesters.

Third part will focus on deploying the relayer, this is the interface between the bsc blockchain and the eos blockchain.
This reminds me that we might need to look into deploying a bsc testnet as well, or we'll need to look at using an existing one. 
It feels kind of silly to deploy a new blockchain for every new project.

Lastly we will finish up with using the effect-js library to develop our own application.f

# Docker Images
TODO Provide docker images that users can pull and run on their machine.

# EOS
EOS is where the smart contract logic will be deployed to, so we'll focus on this step first. 

## EOSIO Binaries

First we'll need to install the eosio binaries, in order to run the local network and a client in order to interact with the network. 
At the following link you can find instructions on how to build it for your specific platform.
https://developers.eos.io/manuals/eos/v2.0/install/install-prebuilt-binaries

Now you should be able to run `cleos` and `keosd` locally. Which allow you to interact with your local version of the eos blockchain.

## EOS Wallet
This step is important, as it allows us to deploy the smart contract in a bit to the blockchain. 
Follow this guid in order to create a wallet with the key pair.

Create new wallet. Use the 
```bash
cleos wallet create --to-console // 
```

Open wallet
```bash
cleos wallet open
```

## Run the EOS Local Testnet

Run keosd
```bash
keosd &
```

Run nodeos
```bash
nodeos -e -p eosio \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_plugin \
--plugin eosio::history_api_plugin \
--filter-on="*" \
--access-control-allow-origin='*' \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors >> nodeos.log 2>&1 &
```

Check to see if nodeos is running at `localhost:8888`.
```bash
curl http://localhost:8888/v1/chain/get_info
```

[Local Wallet](https://developers.eos.io/welcome/latest/getting-started-guide/local-development-environment/development-wallet)



## Downloading the Smart Contract

TODO
Take a look at the github repo for effect network smart contracts. There seems to be a docker image that we can use, or atleast a script that makes the process a bit easier. 
https://github.com/effectai/effect-network/tree/master/contracts
Than downloading the contracts one by one and deploying them locally.

For this guide we'll focus on downloading the contracts in wasm and abi formats from the blockchain and deploying them locally. That way we won't need to deal with compiling the contracts, making it easier to use the most up to date contracts.

1. Force Contract - efxforce1111 
```bash
cleos --url https://jungle3.greymass.com get code efxforce1111 --wasm -c efxforce1111.wasm -a efxforce1111.abi
```

2. Token Contract - efxtoken1112
```bash
cleos --url https://jungle3.greymass.com get code efxtoken1112 --wasm -c efxtoken1112.wasm -a efxtoken1112.abi
```

3. Account Contract - efxaccount11
```bash
cleos --url https://jungle3.greymass.com get code efxaccount11 --wasm -c efxaccount11.wasm -a efxaccount11.abi
```

[Connecting to Specific Chain](https://developers.eos.io/manuals/eos/v2.1/cleos/how-to-guides/how-to-connect-to-a-specific-network)
[Get Code](https://developers.eos.io/manuals/eos/v2.1/cleos/how-to-guides/how-to-connect-to-a-specific-network)

## Deploying the Smart Contracts

Now that we have the contracts we can start looking at deploying them to the localchain.

cleos --url https://localhost:8888 set contract efxforce1111 efxforce1111.wasm --abi efxforce1111.abi -p efxforce1111@active


# BSC

# Relayer

# FrontEnd

# SDK