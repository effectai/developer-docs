# SDK

## Client
The client is used to create a connection to interact with Effect Network.

## Account
The account class lets you interact with the accounting system of Effect Network

## Force
The Force class is the interface with the components of the Effect Network, such as Campaigns, Templates, Batches, and Qualifications.
## Configuration
Every time you instantiate the client, a configuration object with default values is passed to the constructor depending on the network chosen. 
There is still some flexibility when creating a new Client instance. But you can still pass a configuration object to the constructor to set default values.

```js
const client = new EffectClient('mainnet', {
    bscRpcUrl: 'https://bscrpc.com',
    ipfsNode: 'https://yourOwnIpfsNode.com'
});
```

### Default Mainnet configuration

These are the default values that are passed to the constructor when you instantiate the client on the **mainnet**, the same is given to the client when you instantiate it on the **testnet**.

```js
{
    network:                : 'mainnet',
    signatureProvider:      : null,
    web3:                   : 'https://bsc-dataseed.binance.org'),
    ipfsNode:               : 'https://ipfs.effect.ai',
    forceContract:          : 'force.efx',
    accountContract:        : 'vaccount.efx',
    efxTokenContract:       : 'effecttokens',
    efxSymbol:              : 'EFX',
    efxPrecision:           : 4,
    efxExtendedSymbol:      : '4,EFX',
    eosRelayerAccount:      : 'efxtxrelayer',
    eosRelayerPermission:   : 'active',
    eosRelayerUrl:          : 'https://vaccount-relayer-service-mainnet-qyy9z.ondigitalocean.app',
    forceVaccountId:        : 0,
    payoutDelaySec:         : 3600,
    releaseTaskDelaySec:    : 1800,
    bscNetworkId:           : 56,
    bscHexId:               : '0x38',
    bscChainName:           : 'Binance Smart Chain',
    bscNetworkType:         : 'Mainnet',
    bscTokenName:           : 'Binance Coin',
    bscTokenSymbol:         : 'BNB',
    bscTokenDecimals:       : 18,
    bscRpcUrl:              : 'https://bsc-dataseed.binance.org',
    bscExplorerUrl:         : 'https://bscscan.com',
    bscEfxTokenContract:    : '0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0',
    eosExplorerUrl:         : 'https://bloks.io',
    eosNodeUrl:             : 'https://api.eostitan.com',
    eosNodeProtocol:        : 'https',
    eosNodePort:            : 443,
    eosNodeHost:            : 'api.eostitan.com',
    eosChainId:             : 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    batchSizeLimit:         : 300,
    taskEstimatedTime:      : 1.5,
    qualifierAccountId:     : 127,
    eosQualifierContract:   : 'efxqualifier',
    validationUrl:          : 'https://validation-bot-mainnet-t4o43.ondigitalocean.app/',
    ipfsCache:              : true
}
```

### Default Testnet Configuration
```js
{
    network:                : 'testnet',
    signatureProvider:      : null,
    web3:                   : new Web3( 'https://bsc-dataseed.binance.org'),
    ipfsNode:               : 'https://ipfs.effect.ai',
    forceContract:          : 'efxforce1112',
    forceVaccountId:        : 333,
    accountContract:        : 'efxaccount11',
    efxTokenContract:       : 'efxtoken1112',
    efxSymbol:              : 'EFX',
    efxPrecision:           : 4,
    efxExtendedSymbol:      : '4,EFX',
    eosRelayerAccount:      : 'efxrelayer11',
    eosRelayerPermission:   : 'active',
    eosRelayerUrl:          : 'https://vaccount-relayer-service-jungle-rn7et.ondigitalocean.app',
    payoutDelaySec:         : 3600,
    releaseTaskDelaySec:    : 1800,
    bscNetworkId:           : 56,
    bscHexId:               : '0x38',
    bscChainName:           : 'Binance Smart Chain',
    bscNetworkType:         : 'Mainnet',
    bscTokenName:           : 'Binance Coin',
    bscTokenSymbol:         : 'BNB',
    bscTokenDecimals:       : 18,
    bscRpcUrl:              : 'https://bsc-dataseed.binance.org',
    bscExplorerUrl:         : 'https://bscscan.com',
    bscEfxTokenContract:    : '0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0',
    eosExplorerUrl:         : 'https://jungle3.bloks.io',
    eosNodeUrl:             : 'https://api.jungle3.alohaeos.com/',
    eosNodeProtocol:        : 'https',
    eosNodePort:            : 443,
    eosNodeHost:            : 'api.jungle3.alohaeos.com',
    eosChainId:             : '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
    batchSizeLimit:         : 300,
    taskEstimatedTime:      : 1.5,
    qualifierAccountId:     : 389,
    eosQualifierContract:   : 'efxdavid1bot',
    validationUrl:          : 'https://validation-bot-jungle-mlolk.ondigitalocean.app',
    ipfsCache:              : true
}
```