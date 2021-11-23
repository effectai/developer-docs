(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{405:function(t,a,e){"use strict";e.r(a);var s=e(51),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quickstart-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-guide"}},[t._v("#")]),t._v(" Quickstart Guide")]),t._v(" "),e("p",[t._v("In the quick start guide, we'll delve into how to use the Effect Network Effect-SDK so that you can publish tasks on the platform.\nThe purpose of the Effect Network quickstart guide is to provide guided instruction on how to use the Effect Network Effect-SDK to interface with the Effect Network.")]),t._v(" "),e("p",[t._v("This guide goes through the following steps:")]),t._v(" "),e("ul",[e("li",[t._v("Installing and initializing the Effect-SDK.")]),t._v(" "),e("li",[t._v("Creating and using a burner-wallet")]),t._v(" "),e("li",[t._v("Getting Testnet EFX")]),t._v(" "),e("li",[t._v("Publishing a campaign")]),t._v(" "),e("li",[t._v("Publishing tasks to Effect Network")]),t._v(" "),e("li",[t._v("Retrieving results")])]),t._v(" "),e("p",[t._v("This will use a basic hello world example; the idea is that you (the developer) will type along with this example to get a feel for how the Effect-SDK works and how to get set up and use the Effect Network.\nSo let's get started!")]),t._v(" "),e("h1",{attrs:{id:"check-out-the-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-out-the-repo"}},[t._v("#")]),t._v(" Check out the Repo!")]),t._v(" "),e("p",[t._v("Just want to jump right into it right away? You can follow along with this guide or get started right away by going to the following link: "),e("a",{attrs:{href:"https://github.com/effectai/hackathon-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hackathon-Boilerplate"),e("OutboundLink")],1),t._v("\nThere you will find boilerplate code for your node and browser examples.")]),t._v(" "),e("h1",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("h2",{attrs:{id:"node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),e("p",[t._v("At the moment, our Effect-SDK is built using "),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v(". You will need "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),e("OutboundLink")],1),t._v(" in order to install the npm package. If you do not have NodeJS installed, you can find it here:\n"),e("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download NodeJS for your platform."),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Typescript is optional, but the Effect-SDK does provide types for those that enjoy programming with Typescript.")])]),t._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("h3",{attrs:{id:"step-1-initializing-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-initializing-project"}},[t._v("#")]),t._v(" Step 1. Initializing project")]),t._v(" "),e("p",[t._v("Start the project by creating a directory and initializing it as an npm directory.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" awesome-efx-project\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" awesome-efx-project\n")])])]),e("h3",{attrs:{id:"installing-the-effect-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-effect-sdk"}},[t._v("#")]),t._v(" Installing the Effect-SDK")]),t._v(" "),e("p",[t._v("In your project folder, you can now start installing packages that will assist you in your journey.")]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"NPM"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @effectai/effect-js\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"YARN"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @effectai/effect-js\n")])])])])],1),t._v(" "),e("p",[t._v("To start, import the Effect-SDK using either "),e("code",[t._v("require")]),t._v(" or "),e("code",[t._v("import")]),t._v(" as needed.")]),t._v(" "),e("h3",{attrs:{id:"import-the-effect-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-the-effect-sdk"}},[t._v("#")]),t._v(" Import the Effect-SDK")]),t._v(" "),e("p",[t._v("Depending on the environment that you are working in, you will need to import the SDK in different ways.")]),t._v(" "),e("h3",{attrs:{id:"node-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-2"}},[t._v("#")]),t._v(" Node")]),t._v(" "),e("p",[t._v("Using require:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effectsdk "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@effectai/effect-js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Using import:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" effectsdk "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@effectai/effect-js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"browser-using-relative-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser-using-relative-path"}},[t._v("#")]),t._v(" Browser using relative path.")]),t._v(" "),e("p",[t._v("Using import (Path needs to be relative) in your own Javascript code that you import at the end of your "),e("code",[t._v("<body>")]),t._v(" tag in your HTML.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import from you local node_modules folder.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/node_modules/@effectai/effect-js/dist/index.js"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import from unpkg")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://unpkg.com/@effectai/effect-js/dist/index.js'")]),t._v("\n")])])]),e("p",[t._v("Src Tag import:\nUsing your favorite cdn js provider, you can import the Effect-SDK in the "),e("code",[t._v("<head>")]),t._v(" tag of your html file.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@effectai/effect-js/dist/index.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("export name")]),t._v(" "),e("p",[t._v("The name of the export is "),e("code",[t._v("effectsdk")])])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"initializing-the-effect-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initializing-the-effect-client"}},[t._v("#")]),t._v(" Initializing the Effect Client")]),t._v(" "),e("p",[t._v("The first step is to import and initialize the effectsdk client. Which will be the main object from which methods can be called in order to interact with the Effect Network. Import or require "),e("code",[t._v("@effectai/effect-js")]),t._v(" and pass the name of the network you want to connect to.\nThe constructor can take a configuration object, but the constructor will initialize with a default configuration object if no configuration object is passed. Take a look at "),e("RouterLink",{attrs:{to:"/sdk/"}},[t._v("Effect-SDK Configuration")]),t._v(" for more information on the configuration object.\nThe first parameter for the constructor is which network to use. At the moment, only testnet on "),e("code",[t._v("junglenet")]),t._v(" is supported.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The code snippets written for the docs assume that they will be executed within the node repl using version: v16.10.0.")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("effectsdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EffectClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testnet'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"connect-with-burner-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect-with-burner-wallet"}},[t._v("#")]),t._v(" Connect with burner wallet")]),t._v(" "),e("p",[t._v("For this quickstart guide, we will be using a burner wallet. You can use the "),e("code",[t._v("createAccount()")]),t._v(" method in order to generate a random keypair for you. Then it becomes possible to use "),e("code",[t._v("connectAccount()")]),t._v(" method in order to use your burner wallet.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generate private key pair for burner wallet.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" burnerWallet "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" effectsdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAccount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the account based on the burnerwallet")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" burnerAccount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" effectsdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAccount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect Virtual Effect Account with burnerAccount")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effectAccount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectAccount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("burnerWallet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"create-campaign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-campaign"}},[t._v("#")]),t._v(" Create Campaign")]),t._v(" "),e("p",[t._v("The next step now is to create a campaign object.\nThis campaign object contains essential information such as; description, template, instructions, reward per task, example tasks. Creating a campaign is easy when you've managed to lay down the basic information.")]),t._v(" "),e("p",[t._v("Use the example given below in order to create your own campaign object.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" uploadCampaignIpfs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The title of the campaign")]),t._v("\n  title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tree Friends 🐻'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Description of the campaign")]),t._v("\n  description"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'All the tree friends are lost. They need you to find them.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instructions for workers on how to complete tasks, accepts Markdown")]),t._v("\n  instructions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Identify all the happy tree friends!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The template that will be used for the tasks")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>\n                <image src='")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${image_url}'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'></image>\n                <h2>What do you see in the picture above? 🐸</h2>\n                <input type='radio' name='radio-answer' id=\"original\" label=''>Stars 🤩</input><br>\n                <input type='radio' name='radio-answer' id=\"original\" label=''>Mechanical Turk 😏</input><br>\n                <input type='radio' name='radio-answer' id=\"original\" label=''>Dog 🤐</input> <br>\n                <input type='radio' name='radio-answer' id=\"original\" label=''>Cat 😵</input><br>\n                <hr>\n                <button type=\"submit\">Submit</button> \n              </div>\n              <script><\/script>\n              <style></style>")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      \n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Campaign image")]),t._v("\n  image"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The category of the campaign")]),t._v("\n  category"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Image labeling'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     \n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example task that will prefill the task template")]),t._v("\n  example_task"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image_url'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ipfs.effect.ai/ipfs/bafkreidrxwhqsxa22uyjamz7qq3lh7pv2eg3ykodju6n7cgprmjpal2oga'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Version of the campaign")]),t._v("\n  version"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        \n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Amount of EFX to reward for completinga task")]),t._v("\n  reward"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("        \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Use the "),e("code",[t._v("makeCampaign()")]),t._v(" method in order to upload and publish your campaign to the blockchain.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" makeCampaign "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCampaign")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("campaignToIpfs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"visit-testnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visit-testnet"}},[t._v("#")]),t._v(" Visit Testnet")]),t._v(" "),e("p",[t._v("Visit "),e("a",{attrs:{href:"https://testnet.effect.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://testnet.effect.network"),e("OutboundLink")],1),t._v(" to see the campaign. Follow the link, sign in with your keypair and join your campaign to work on the tasks. Don't forget to use the keypair that you generated in the begining of this tutorial.")]),t._v(" "),e("h3",{attrs:{id:"getting-funds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-funds"}},[t._v("#")]),t._v(" Getting funds")]),t._v(" "),e("p",[t._v("Before we can continue creating a batch, you will need funds to create a batch.\n"),t._v("\nYou will need to provide your Virtual Effect Account name in order to get your tokens. When you create your account, using the "),e("code",[t._v("connectAccount()")]),t._v(" you will be able to see your account name.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectAccount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v(" effectAccount"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accountName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bd9b69af4f6ed393e9c4ba7c503e80ea2fbfa1fb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the account name.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xe345E6eD90333135288B780A37672F2d98cC9E3B"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"privateKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x123...321"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Join our discord and use the faucet bot to get funds. Find the Hackathon section, and join the "),e("code",[t._v("faucet")]),t._v(" channel to find more information to get funds.\n")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Get tokens from the faucet. 💸")]),t._v(" "),e("h3",{attrs:{id:"join-the-effect-network-discord"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join-the-effect-network-discord"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://discord.gg/bq4teBnH3V",target:"_blank",rel:"noopener noreferrer"}},[t._v("Join the Effect Network Discord"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"creating-batches-and-uploading-task-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-batches-and-uploading-task-data"}},[t._v("#")]),t._v(" Creating batches and uploading task data")]),t._v(" "),e("p",[t._v("The campaign should be up and running now; the way we add data into the campaign is through batches. Every time new tasks are added, they are added as a batch. That way, the tasks are neatly organized.\nThe task is already defined by the template as stated above, so now all that needs to be done is to pass the "),e("code",[t._v("place_holder")]),t._v(" into the template every time it is presented to the worker.")]),t._v(" "),e("p",[t._v("This example relies on an image being loaded into the placeholder. This is done by passing a URL string into the image tag that is defined in the template.\nSo we will first create the task image URLs and then create the batch so that it can be published.")]),t._v(" "),e("p",[t._v("Define the tasks (These tasks have already been uploaded to IPFS), create and publish the batch.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tasks'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"place_holder"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"place_holder"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ipfs.effect.ai/ipfs/bafkreidrxwhqsxa22uyjamz7qq3lh7pv2eg3ykodju6n7cgprmjpal2oga"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"place_holder"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ipfs.effect.ai/ipfs/bafkreid2ocabg7mo235uuwactlcf7vzxyagoxeroyrubfufwobtqz3q27q"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"place_holder"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ipfs.effect.ai/ipfs/bafkreifu5xciyxpwnmkorzddanqtc66i43q5cn4sdkb3l563yjzd7s3274"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve the campaign that was last created/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" campaign "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMyLastCampaign")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve the batches for this campaign.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" batches "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCampaignBatches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("campaign"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("campaign"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batches"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repetitions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"wait-for-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wait-for-response"}},[t._v("#")]),t._v(" Wait for response")]),t._v(" "),e("p",[t._v("When the batch is published, it will become visible to the workers, and they will start working on it as soon as possible. Completion time can vary a bit depending on the type of the campaign and campaign qualifications.\nWhen a task is done within a batch, you will be able to retrieve the results using the following method.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" submission "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTaskSubmissionsForBatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),e("p",[t._v("So in summary, the following things are needed to create a campaign:")]),t._v(" "),e("ul",[e("li",[t._v("Installing the Effect-SDK")]),t._v(" "),e("li",[t._v("Creating a burner wallet")]),t._v(" "),e("li",[t._v("Creating a campaign")]),t._v(" "),e("li",[t._v("Creating templates")]),t._v(" "),e("li",[t._v("Creating batches and tasks")]),t._v(" "),e("li",[t._v("Waiting for workers to complete the tasks")]),t._v(" "),e("li",[t._v("Retrieving the results")]),t._v(" "),e("li",[t._v("...")]),t._v(" "),e("li",[t._v("Profit! 💸💸💸")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);