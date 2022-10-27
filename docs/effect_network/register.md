# Approving dApp and Campaign

With the Effect Network built on top of the blockchain and powered by developers around the world, we need to ensure that the dApps and campaigns are legitimate and not malicious. This is done by the Effect Network team and the community. These are the steps that you can take to register and approve your dApp or campaign.

## Approve your campaign

You will notice on the homepage of [Effect Force](http://app.effect.network) there is a toggle to switch between the campaigns that have been approved by the Effect Network team and those that have not. 

When you are ready to have your campaign approved, you can submit a pull request:

- Go to [https://github.com/effectai/force-frontend-prd/edit/mainnet-config/approvedCampaigns.json](https://github.com/effectai/force-frontend-prd/edit/mainnet-config/approvedCampaigns.json) (you need a github account)
- Add your campaign id to the list of campaigns (comma seperated in the array)
- Click the **Propose changes** button and then click create **Pull Request** button
- The Effect Network team will review your pull request and your campaign to make sure that there is no abuse of the platform. If everything looks good, we will merge your pull request and your campaign will be approved.
- You campaign will now be approved for the public to see.

---

## Add your dApp to the Ecosystem

On the Effect Network, we have a [dApp ecosystem](https://effect.network/ecosystem) that is built on top of the Effect Network. This ecosystem is a place where developers can build their own dApps on top of the Effect Network.

In order to get your effect dApp listed on the ecosystem, you will need to submit a pull request.

Copy and edit the following JSON to fit the details of your dApp:

```json
    {
      "id": 21,
      "group_name": "Effect Socials",
      "description": "Real engagements on your social media posts from genuine fans. The most effective way to have the social media algorithms work for you is to increase your engagement rate. Quality engagement is rewarded 80% more than anything else.",
      "github_url": "https://github.com/effectai/effect-socials",
      "campaign_url": "https://app.effect.network/campaigns/14",
      "youtube_url": "",
      "website": "https://socials.effect.network",
      "devpost": "",
      "image_url": "effect-socials.png",
      "tags": ["social"],
      "twitter": "",
      "discord": "",
      "instagram": "",
      "reddit": "",
      "featured": 1
    },
```

- Go to [https://github.com/effectai/effect-network-website/blob/master/static/json/dapps.json](https://github.com/effectai/effect-network-website/blob/master/static/json/dapps.json) (you need a github account)
- Add your json to the list of dApps.
- Click the **Propose changes** button and then click create **Pull Request** button
- The Effect Network team will review your pull request and your campaign to make sure that there is no abuse of the platform. If everything looks good, we will merge your pull request and your campaign will be approved.
- Your dApp will now be listed on the ecosystem.



## Add your campaign to efxtaskproxy

[Efxtaskproxy](https://app.effect.network/profile/efxtaskproxy) is an Effect Network controlled account that let's anyone to post a task to it's campaign. This is useful for campaigns that want to have tasks are bought by the community.

Let's sketch it out a bit, you've managed to your dApp added to the ecosystem. But now what's left? You need to get people to use your dApp and buy tasks from it.  
But in order to have anyone buy a task from your dApp and post it to a campaign you need to use the efxtaskproxy account.  
This account is controlled by the Effect Network team and is used to post tasks to campaigns.  

In order to do these actions your dApp needs to be able to call these following two actions: `force.efx::mkbatch` and `force.efx::posttask`

This is easy if you are owner of the campaign and you want to post tasks to it. But it is not possible if you are not the owner of the campaign.

That's why we've created the `efxtaskproxy` account. It's permissions are set up in such a way that you're dApp can post any task that your dApp creates from anyone at anytime.

Build your Campaign as you normally would on [Testnet](https://testnet.effect.network) and then submit a pull request to add your campaign to the efxtaskproxy account.

- First build your campaign on [Testnet](https://testnet.effect.network)
- After you've finished testing it go to your Task page, and click `Edit Task` button.
- You should be able to see the `exort` button in upper right corner of the page, click it.
- Go to [Github.com/effectai/efxtaskproxy](https://github.com/effectai/efxtaskproxy)
- Fork the repository
- Add the `exort` output to the forked repository
- Commit your changes and make a new pull request.

We'll review your PR, merge it if everything looks good and we'll upload it for you to the efxtaskproxy account.
Please allow us one business day to review your PR and merge it.
