(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{414:function(t,s,a){"use strict";a.r(s);var r=a(54),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[t._v("#")]),t._v(" SDK")]),t._v(" "),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),a("p",[t._v("The client is used to create a connection to interact with Effect Network.")]),t._v(" "),a("h2",{attrs:{id:"account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[t._v("#")]),t._v(" Account")]),t._v(" "),a("p",[t._v("The account class lets you interact with the accounting system of Effect Network")]),t._v(" "),a("h2",{attrs:{id:"force"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#force"}},[t._v("#")]),t._v(" Force")]),t._v(" "),a("p",[t._v("The Force class is the interface with the components of the Effect Network, such as Campaigns, Templates, Batches, and Qualifications.")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Every time you instantiate the client, a configuration object with default values is passed to the constructor depending on the network chosen.\nThere is still some flexibility when creating a new Client instance. But you can still pass a configuration object to the constructor to set default values.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EffectClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mainnet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bscRpcUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bscrpc.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ipfsNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://yourOwnIpfsNode.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"default-mainnet-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-mainnet-configuration"}},[t._v("#")]),t._v(" Default Mainnet configuration")]),t._v(" "),a("p",[t._v("These are the default values that are passed to the constructor when you instantiate the client on the "),a("strong",[t._v("mainnet")]),t._v(", the same is given to the client when you instantiate it on the "),a("strong",[t._v("testnet")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mainnet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    signatureProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    web3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bsc-dataseed.binance.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ipfsNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ipfs.effect.ai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    forceContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'force.efx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    accountContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vaccount.efx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxTokenContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'effecttokens'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxSymbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EFX'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxPrecision"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxExtendedSymbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4,EFX'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosRelayerAccount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxtxrelayer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosRelayerPermission"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosRelayerUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://vaccount-relayer-service-mainnet-qyy9z.ondigitalocean.app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    forceVaccountId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    payoutDelaySec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    releaseTaskDelaySec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscNetworkId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscHexId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x38'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscChainName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Binance Smart Chain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscNetworkType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mainnet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscTokenName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Binance Coin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscTokenSymbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BNB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscTokenDecimals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscRpcUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bsc-dataseed.binance.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscExplorerUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bscscan.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscEfxTokenContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosExplorerUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bloks.io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodeUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.eostitan.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodeProtocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodePort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodeHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api.eostitan.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosChainId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    batchSizeLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    taskEstimatedTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    qualifierAccountId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosQualifierContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxqualifier'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    validationUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://validation-bot-mainnet-t4o43.ondigitalocean.app/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ipfsCache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"default-testnet-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-testnet-configuration"}},[t._v("#")]),t._v(" Default Testnet Configuration")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testnet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    signatureProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    web3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bsc-dataseed.binance.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ipfsNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ipfs.effect.ai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    forceContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxforce1112'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    forceVaccountId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    accountContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxaccount11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxTokenContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxtoken1112'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxSymbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EFX'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxPrecision"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efxExtendedSymbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4,EFX'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosRelayerAccount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxrelayer11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosRelayerPermission"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosRelayerUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://vaccount-relayer-service-jungle-rn7et.ondigitalocean.app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    payoutDelaySec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    releaseTaskDelaySec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscNetworkId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscHexId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x38'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscChainName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Binance Smart Chain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscNetworkType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mainnet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscTokenName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Binance Coin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscTokenSymbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BNB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscTokenDecimals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscRpcUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bsc-dataseed.binance.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscExplorerUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bscscan.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bscEfxTokenContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosExplorerUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jungle3.bloks.io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodeUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.jungle3.alohaeos.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodeProtocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodePort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosNodeHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api.jungle3.alohaeos.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosChainId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    batchSizeLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    taskEstimatedTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    qualifierAccountId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("389")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eosQualifierContract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efxdavid1bot'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    validationUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://validation-bot-jungle-mlolk.ondigitalocean.app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ipfsCache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);