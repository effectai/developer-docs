# SDK

## Client
The client is used to create a connection to interact with Effect Network.

## Account
The account class let's you interact with the account system of Effect Network

## Force
The Force class is the interface with the components of the Effect Network, such as Campaigns, Templates, Batches, Qualifications.
## Configuration
Every time you instantiate the client, a configuration object passes to it. For now, the development happens on the testnet. 

<!-- ### Default Mainnet configuration

```js
{
    network:                "mainnet",
    signatureProvider:      new JsSignatureProvider(['5abc...5xyz']),
    host:                   'eos.greymass.com',
    web3:                   new Web3,
    apiKey:                 '',
    secure:                 false,
    authentication:         false,
    authUrl:                '',
    ipfs_node:              'https://ipfs.effect.ai',
    force_contract:         "forceonkyli2",
    account_contract:       'acckylin1111',
    efx_token_account:      "tokenonkylin",
    efx_symbol:             "EFX",
    efx_precision:          4,
    efx_extended_symbol:    '4,EFX',
    eos_relayer:            "pixeos1gswap",
    eos_relayer_permission: "active"
}
``` -->

### Default Testnet Configuration
```js
{
    network:                "kylin",
    signatureProvider:      new JsSignatureProvider(['5KKjmMyCfdvmw1bhGJ8gsUDGmaW1Dph3B9WVjYvyiQNMGJuvPG2']),
    host:                   https://api.kylin.alohaeos.com',
    web3:                    Web3, // TODO double check this, I think it should be something else.
    apiKey:                 '',
    secure:                 false,
    authentication:         false,
    authUrl:                '',
    ipfs_node:              'https://ipfs.effect.ai',
    force_contract:         "forceonkyli2",
    force_vaccount_id:      163,
    account_contract:       'acckylin1111',
    efx_token_account:      "tokenonkylin",
    efx_symbol:             "UTL",
    efx_precision:          4,
    efx_extended_symbol:    '4,UTL',
    eos_relayer:            "kylinrelayer",
    eos_relayer_permission: "active",
    eos_relayer_url:        "https://vaccount-relayer-service-bsrkv.ondigitalocean.app"
}
```