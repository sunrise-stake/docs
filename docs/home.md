---
slug: /
sidebar_position: 1
sidebar_label: Welcome
sidebar_class_name: green
---

# Welcome to Sunrise Stake

:::caution

The Sunrise Stake protocol is currently in development. Use at your own risk and always do your own research.
:::

## The Basics

### What is Sunrise Stake?

Sunrise Stake is a Regenerative Finance (ReFi) smart contract that helps you donate your staking yield towards climate-positive action.

At Sunrise Stake we believe in the power of ReFi to create positive outcomes for people and the planet. We’ve created a non-custodial and permissionless protocol to direct the yield earned through staking SOL towards retiring carbon tokens and supporting climate-positive projects. Sunrise Stake is one of the pioneering ReFi initiatives within the Solana ecosystem; we provide a seamless way for SOL holders to participate in the ReFi movement, while simultaneously strengthening the Solana blockchain.

![high_level_white.png](/img/high_level_white.png)

### What is ReFi?

Regenerative Finance, or ReFi, is the union of Web3 Decentralised Finance with regenerative economics.

Regenerative economics is a theoretical framework for understanding and guiding economic activity that is focused on creating positive social and ecological outcomes.

This approach to economics emphasises the importance of building and maintaining healthy ecosystems and communities, and views economic activity as a means to that end rather than an end in itself.

### Why stake with Sunrise Stake?

#### Supporting carbon offset projects comes at no cost

Sunrise Stake is a volunteer-driven project and charges no fees; 100% of your staking rewards are donated to offset carbon. As only the staking yield is being used, offsetting carbon comes at no cost to you.

Users swap their SOL via Sunrise Stake and receive gSOL (green SOL) in return as a wrapped token representing the total amount staked. gSOL is a synthetic derivative of SOL, and can be used in the same way as SOL by protocols or recipients that support it.
The recipient can then choose to either keep the gSOL, or unwrap back to SOL. The gSOL to SOL ratio is always 1:1 thus stakers experience no fund loss in the process. Additionally, gSOL is a fully fungible token - stakers can continue to use it, leaving their SOL to earn rewards for nature-based projects!

The ReFi ecosystem, just like any climate movement, necessitates infrastructure growth to achieve its ambitious regenerative goals. Sunrise Stake plays its part by being a layer bringing carbon tokenomics to users wanting to make a positive impact on the planet. Sunrise does not own or hold users’ SOL.

#### Feeless Liquid Unstaking 

Liquid staking is a method of staking that allows stakers to unstake without the typical 2-3 day withdrawal period.
Sunrise proxies the [Marinade Finance](https://docs.marinade.finance/) and [SolBlaze](https://stake-docs.solblaze.org/), which allow liquid staking through the use of liquidity pools.

In Sunrise, unlike the underlying stake pools, users may unstake their SOL instantly with no fee, except for the inherent Solana network fee of 5000 lamports (< $0.01), up to a limit, after which the underlying stake pool fee is incurred.

To achieve feeless unstaking, the Sunrise smart contract also proxies the [Marinade Unstake Pool](https://docs.marinade.finance/marinade-protocol/system-overview/unstake-liquidity-pool).

This pool is free from [Impermanent Loss](https://www.solana.news/post/cryptonomics-what-is-impermanent-loss) risk, and, under normal operating conditions, has zero withdrawal fees.

Alternatively, users may unstake with no limit with a delay of 2-3 days.
This option is preferable for users who do not need their funds immediately,
as it avoids spending some of the earned yield on the stake pool fee,
and therefore maximises the amount of yield that is sent to the climate-positive projects.
This option may also be used in cases where the Marinade Unstake Pool has insufficient liquidity
to meet the unstake requirement.

#### Strengthening the Solana Ecosystem

Our protocol also secures and decentralises the Solana blockchain;
staking your SOL with third-party liquid staking protocols such as Marinade Finance and SolBlaze means that your SOL
is distributed to a wider network of validators. A more detailed explanation on staking and validators can be found in [Solana's docs](https://solana.com/staking).

#### The longer the staking, the higher the reward

Keeping your SOL staked via the proxy protocols  as long as possible maximises the climate-positive impact of your SOL, as well as the security of the Solana blockchain. This is because the longer you stake your SOL, the more yield it will accrue, thus increasing the funds directed towards climate-positive causes.

Unlike staking protocols, where reward is only realised upon unstaking, the Sunrise protocol constantly "rebases" the gSOL token, with respect to the underlying assets:
- Stake rewards are paid into the stake pools
- The value of the pool tokens of the stake pools increases
- The value of the issued gSOL remains the same
- Once per epoch, the difference between the gSOL value and the underlying pool value is extracted as yield and sent to climate-positive projects.

This way, stakers have the possibility to passively offset their carbon emissions  via climate projects while retaining the ability to redeem 100% of their SOL at any point.

### What are carbon tokens?

Carbon tokens serve a similar purpose as carbon credits by allowing individuals and institutions to offset their carbon emissions.
Sunrise's permissionless smart contract directs donated yield to two separate issuers of carbon credits: [Toucan NCT Carbon Token](https://blog.toucan.earth/announcing-nct-nature-carbon-tonne/) and [EcoToken](https://ecotoken.earth/).
Toucan's NCT token represents 1 tonne of CO2 equivalent. Burning the token represents retiring the underlying carbon credit. NCT is traded on the Polygon and Celo blockchains, and Sunrise has developed an open-source and permissionless Offset Bridge to allow yield on Solana stake pools to be used to buy and retire NCT.

EcoToken bridges carbon credits issued on the [Regen Network](https://www.regen.network/) to Solana, allowing Solana smart contracts to natively and permissionlessly offset carbon on-chain.

### How to Stake?
Staking via Sunrise Stake takes only a few clicks:

![stake.png](/img/screenshots/mini/stake.png)

1. Visit [the app](https://app.sunrisestake.com/) and connect your wallet.    
2. Select the amount of SOL you want to stake.
3. Click "Stake" and confirm the transaction.

The SOL will be wrapped into an equivalent amount of gSOL by the smart contract until you swap back. You will receive the equivalent amount of gSOL, which you can either keep and unwrap back to SOL in the future, or use with platforms that support it.

### How to Unstake?

![unstake.png](/img/screenshots/mini/unstake.png)

1. Visit [the app](https://app.sunrisestake.com/) and connect your wallet.
2. Select the amount of gSOL you want to unstake.
3. Click "Unstake" and confirm the transaction.

                                                                    

