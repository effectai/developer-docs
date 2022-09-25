# Approve your campaign

You will notice on the homepage of [Effect Force](http://app.effect.network) there is a toggle to switch between the campaigns that have been approved by the Effect Network team and those that have not. 

When you are ready to have your campaign approved, you can submit a pull request:

- Go to [https://github.com/effectai/force-frontend-prd/edit/mainnet-config/approvedCampaigns.json](https://github.com/effectai/force-frontend-prd/edit/mainnet-config/approvedCampaigns.json) (you need a github account)
- Add your campaign id to the list of campaigns (comma seperated in the array)
- Click the **Propose changes** button and then click create **Pull Request** button
- The Effect Network team will review your pull request and your campaign to make sure that there is no abuse of the platform. If everything looks good, we will merge your pull request and your campaign will be approved.
- You campaign will now be approved for the public to see.

---

# Add your dApp to the Ecosystem

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

