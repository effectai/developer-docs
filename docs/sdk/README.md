# SDK

## Client
The client is used to create a connection to interact with Effect Network.


## Force
The Force class is the interface with the components of the Effect Network, such as Campaigns, Templates, Qualifications.
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
    signatureProvider:      new JsSignatureProvider(['5AbC...4yXz']),
    host:                   'api.kylin.alohaeos.com',
    web3:                   new Web3, 
    apiKey:                 '',
    secure:                 false,
    authentication:         false,
    authUrl:                '',
    ipfs_node:              'https://ipfs.effect.ai',
    force_contract:         "forceonkyli2",
    account_contract:       'acckylin1111',
    efx_token_account:      "tokenonkylin",
    efx_symbol:             "UTL",
    efx_precision:          4,
    efx_extended_symbol:    '4,UTL',
    eos_relayer:            "pixeos1gswap",
    eos_relayer_permission: "active"
}
```