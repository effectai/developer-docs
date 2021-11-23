(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{400:function(t,a,n){"use strict";n.r(a);var s=n(51),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"account"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[t._v("#")]),t._v(" Account")]),t._v(" "),n("p",[t._v("The Effect Network account system is completely decentralized. It's one of the pieces we are proud of. It's built in such a way that any user can log in using the keys of their EOS or BSC keypairs. Users can log in and interact with Effect Network without any central party authorizing their access to the platform.")]),t._v(" "),n("p",[t._v("All you need to start is an EOS account,\nAdd information here about how to open an eos account, should we add ad information here about how to open an account with")]),t._v(" "),n("p",[t._v("Or an BSC account, which can be generated for you when signing up for the first time.")]),t._v(" "),n("p",[t._v("Smart contracts handle all of the tr:::danger EFFECT NETWORK INTERNAL\nFigure out how to pass the template string with the "),n("code",[t._v("place_holder")]),t._v(" value elegantly.\nAt the moment, the "),n("code",[t._v("place_holder")]),t._v(" is appended to the template string.\n:::\nvaditional back end logic in such a way that transactions of every action is relayed from one blockchain to the other.")]),t._v(" "),n("p",[t._v("Now that that we have an overview let's get started with login in, and opening an account with Effect Network.")]),t._v(" "),n("h2",{attrs:{id:"creating-an-effect-account"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-effect-account"}},[t._v("#")]),t._v(" Creating an Effect Account")]),t._v(" "),n("p",[t._v("Before you can publish campaigns on Effect Network, you need to create an account. This example will demonstrate how to do that using a virtual account.")]),t._v(" "),n("p",[t._v("Create an account so you can start making transactions on the Effect Network. This way, you can pay for creating the campaigns and running them.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("openAccount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tree_friend'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVAccountByName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tree_friend'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"get-money-💸"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-money-💸"}},[t._v("#")]),t._v(" Get Money 💸")]),t._v(" "),n("p",[t._v("Now that you have created an account, you will need to load up your account with EFX. As we are building on our app on testnet, we will need to get testnet EFX (called: UTL). Join our Discord server, join the hackathon channel and request EFX (UTL) from the Discord-bot 🤖.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Join to access the EFX Faucet")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://discord.gg/WsPVmaVhu3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Join Discord "),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"check-balance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-balance"}},[t._v("#")]),t._v(" Check balance")]),t._v(" "),n("p",[t._v("After you have used the faucet to get your tokens, you will be able to get your account balance, make withdrawals and do transfers.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from account, to vaccount, amount in EFX")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVAccountByName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'account_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" balance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPendingBalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from vaccount, to account, amount in EFX")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withdraw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'from_vaccount_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to_account_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from vaccount, to vaccount, amount in EFX")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vtransfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'from_vaccount_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to_vaccount_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);