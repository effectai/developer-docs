(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{403:function(t,s,a){"use strict";a.r(s);var n=a(51),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[t._v("#")]),t._v(" SDK")]),t._v(" "),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),a("p",[t._v("The client is used to create a connection to interact with Effect Network.")]),t._v(" "),a("h2",{attrs:{id:"force"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#force"}},[t._v("#")]),t._v(" Force")]),t._v(" "),a("p",[t._v("The Force class is the interface with the components of the Effect Network, such as Campaigns, Templates, Qualifications.")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Every time you instantiate the client, a configuration object passes to it. For now, the development happens on the testnet.")]),t._v(" "),a("h3",{attrs:{id:"default-testnet-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-testnet-configuration"}},[t._v("#")]),t._v(" Default Testnet Configuration")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kylin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    signatureProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsSignatureProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5AbC...4yXz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api.kylin.alohaeos.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    web3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Web3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    apiKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    secure"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    authentication"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    authUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ipfs_node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ipfs.effect.ai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    force_contract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forceonkyli2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    account_contract"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'acckylin1111'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efx_token_account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tokenonkylin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efx_symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efx_precision"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    efx_extended_symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4,UTL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eos_relayer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pixeos1gswap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eos_relayer_permission"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"active"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);