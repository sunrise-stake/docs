---
slug: /
sidebar_position: 1
sidebar_label: Welcome
sidebar_class_name: green
---

# Welcome to Sunrise Stake

:::caution

The Sunrise Stake protocol is currently in development. Use at own risk
:::

## The Basics

### What is Sunrise Stake?

Sunrise Stake is a ReFi staking protocol that directs staking yield to climate-positive projects.

At Sunrise Stake we believe in the power of Regenerative Finance to create positive outcomes for people and the planet.
So we’ve created a non-custodial and permissionless protocol to send the yield earned through staking SOL towards retiring carbon tokens and other climate-positive projects.
Sunrise Stake is one of the first ReFi projects on the Solana blockchain; we provide a seamless way for holders of SOL to participate in the ReFi movement, while simultaneously strengthening the Solana blockchain.

![high_level_white.png](/img/high_level_white.png)

### What is ReFi?

Regenerative Finance, or ReFi, is the union of web3 decentralised finance with regenerative economics.

Regenerative economics is a theoretical framework for understanding and guiding economic activity that is focused on creating positive social and ecological outcomes.

This approach to economics emphasizes the importance of building and maintaining healthy ecosystems and communities, and views economic activity as a means to that end rather than an end in itself.

### Why stake with Sunrise Stake?

#### Supporting carbon offset projects comes at no cost

Users deposit their SOL with Sunrise Stake and receive gSOL (green SOL) in return as a wrapped token representing the total amount staked. 
gSOL is a synthetic derivative of SOL, and can be used in the same way as SOL, by protocols or recipients that support it.
For example, if you are asked to pay a recipient in SOL, you can pay them in gSOL instead. The recipient can then choose to either keep the gSOL, or unstake it and receive SOL.
The gSOL to SOL ratio is always 1:1 thus stakers experience no fund loss in the process. Additionally, gSOL is a fully fungible token - stakers can continue to trade it, leaving their SOL to earn rewards for nature-based projects!

#### Feeless Liquid Unstaking 

Liquid staking is a method of staking that allows stakers to unstake without the typical 2-3 day withdrawal period.
Sunrise proxies the [Marinade Finance](https://docs.marinade.finance/) and [SolBlaze](https://stake-docs.solblaze.org/) protocols,
which allow liquid staking through the use of liquidity pools.

In Sunrise, unlike the underlying stake pools, users may withdraw their SOL instantly with no fee, 
beyond the Solana network fee of 5000 lamports (< $0.01), up to a limit,
after which the underlying stake pool fee is incurred.

To achieve feeless unstaking, a portion of the invested SOL is invested in the
[Marinade Unstake Pool](https://docs.marinade.finance/marinade-protocol/system-overview/unstake-liquidity-pool).

This pool is free from [Impermanent Loss](https://www.solana.news/post/cryptonomics-what-is-impermanent-loss) risk,
and has zero withdrawal fees.

Alternatively, users may withdraw with no limit with a delay of 2-3 days. This option is preferable for users
who do not need their funds immediately, as it avoids spending some of the earned yield on the stake pool fee, 
and therefore maximizes the amount of yield that is sent to the climate-positive projects.

#### Strengthening the Solana Ecosystem
Our protocol also secures and decentralizes the Solana blockchain; staking your SOL with liquid staking protocols such as Marinade Finance and Solblaze means that your SOL is distributed to a wider network of validators. A more detailed explanation on staking and validators can be found in [Solana's docs](https://solana.com/staking).

#### The longer the staking, the higher the reward
Keeping your SOL staked in Sunrise as long as possible maximises the climate-positive impact of your SOL, as well as the security of the Solana blockchain.
This is because the longer you stake your SOL, the more yield it will accrue, thus increasing the funds directed towards climate-positive causes.

Unlike staking protocols, where profit is only realised upon unstaking, the Sunrise protocol constantly "rebases"
the gSOL token, with respect to the underlying assets.:

- Stake rewards are paid into the stake pools
- The value of the pool tokens held by Sunrise increases
- The value of the issued gSOL remains the same
- Once per epoch, the difference between the gSOL value and the underlying pool value is extracted as yield and sent to climate-positive projects.

This way stakers have the possibility to passively invest
in climate projects while retaining the ability to unstake their SOL at any point.

### What are carbon tokens?

Carbon tokens serve a similar purpose as carbon credits by allowing
individuals and institutions to offset their carbon emissions.

Sunrise uses the [Toucan NCT Carbon Token](https://blog.toucan.earth/announcing-nct-nature-carbon-tonne/).

Each token represents 1 tonne of CO2 equivalent, Burning a token permanently retires the underlying carbon credit.

Sunrise is focusing on carbon offsetting at present, however, in future we plan to support a range of climate-positive projects,
including ones with more direct climate impact, such as reforestation projects.

### How to Stake?
Depositing your SOL via Sunrise Stake takes only a few clicks:

![stake.png](/img/screenshots/mini/stake.png)

1. Visit [the app](https://app.sunrisestake.com/) and connect your wallet.    
2. Select the amount of SOL you want to stake.
3. Click "Stake" and confirm the transaction.

The SOL will be locked in the smart contract until you unstake. You will receive the equivalent amount of gSOL, which you can either keep and unstake in the future, or trade with platforms that support it.

### How to Unstake?

![unstake.png](/img/screenshots/mini/unstake.png)

1. Visit [the app](https://app.sunrisestake.com/) and connect your wallet.
2. Select the amount of gSOL you want to unstake.
3. Click "Unstake" and confirm the transaction.

                                                                    

