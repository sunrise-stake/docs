---
slug: /
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
Our protocol also secures and decentralizes the Solana blockchain; staking your SOL with liquid staking protocols such as Marinade Finance and Solblaze means that your SOL is distributed to a wider network of validators. A more detailed explanation on staking and validators can be found in [Solana's docs] (https://solana.com/staking).

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

## The Details

### A Deep Dive into the Staking Process
Let’s take a deep dive into what happens when you deposit your SOL with Sunrise Stake

#### Step 1: Depositing SOL with Sunrise Stake

![staking_white_without_comments.png](/img/staking_white_without_comments.png)

The staking process begins with you depositing your SOL via Sunrise Stake’s app.

Your SOL will be deposited into the underlying pools.

The majority of the SOL is deposited into a set of [Stake Pools](https://solana.org/stake-pools).
At present, Sunrise Stake deposits into the [Marinade Finance](https://docs.marinade.finance/) and [SolBlaze] (https://stake-docs.solblaze.org/) pools.
The stake pool tokens (mSOL and bSOL) will be held by the protocol in a [Program Derived Address (PDA)](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses).

A proportion of the deposited SOL is also deposited into the [Marinade Unstake Pool](https://docs.marinade.finance/marinade-protocol/system-overview/unstake-liquidity-pool).
This pool is used during the unstaking process to provide feeless unstaking, ensuring that users can withdraw their SOL at any time without incurring a fee.

When you deposit your SOL, you will receive an equivalent amount of gSOL in your wallet.
gSOL can be used in the same way as SOL, by protocols or recipients that support it.
  
#### Step 2: Accruing yield

![accruing_yield_white.png](/img/accruing_yield_white.png)

###### Stake Pools
At the end of each epoch (every 2 or 3 days), yield gets paid out into stake accounts,
and the value of the overall stake pool increases. 

As mSOL and bSOL represent a share of their respective stake pools, the value of mSol and bSOL also increases.

The yield accrued on the staked SOL is equal to the value of mSOL and bSOL held by Sunrise
minus the value of SOL staked (calculated as the circulating supply of gSOL).

###### Liquidity Pool

The Marinade Unstake Pool also accrues yield through fees from the marinade liquid unstaking feature.
The total value of the holdings of the Sunrise protocol are therefore:

- The value of mSOL and bSOL held by Sunrise
- The value of the liquidity pool tokens held by Sunrise

### Step 3: Unstaking

![unstaking_white_without_comments.png](/img/unstaking_white_without_comments.png)

If you unstake your SOL, Sunrise calculates how much of its share of the underlying stake and liquidity pools to sell, in order to receive your SOL.

Unstaking draws from the liquidity pool balance first, and then from the stake pool as needed.

For example, if you decide to unstake 100 SOL, and the value of the Sunrise-held liquidity pool tokens are currently at 90,
Sunrise will withdraw 90 from the liquidity pool, and the remaining 10 from the stake pool.

Sunrise will also trigger a "rebalancing" transaction, that moves SOL from the stake pool into the liquidity pool,
in order to maintain a 10% liquidity pool balance.

![rebalancing_white.png](/img/rebalancing_white.png)
                                                                    
## Sunrise Stake treasury spending 

Thanks to the yield earned in the staking process, Sunrise can purchase carbon tokens and burn them to offset carbon emissions.

![yield_controller_white_without_comments.png](/img/yield_controller_white_without_comments.png)

#### 1. Yield transfer to the treasury account

The yield earned from staking SOL is transferred to the __treasury account__.

It is a Program Derived Address ([PDA](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses))
meaning that it is owned and controlled by a smart contract, not a private key.

This smart contract is known as the __treasury controller__.
It can trigger a state change to buy or burn carbon tokens, thus retiring underlying carbon credits.

#### 2. Purchasing carbon tokens

The carbon token used by Sunrise Stake is the Toucan Nature Carbon Tonne token.

NCT represents a tonne of CO2 or equivalent greenhouse gas removed from the atmosphere in various nature-based projects.
It is issued on the Polygon and Celo blockchains and has been bridged to Solana via [Wormhole](https://wormhole.com/).

More on the NCT can be found on Toucan’s [blog](https://blog.toucan.earth/announcing-nct-nature-carbon-tonne/) or [GitHub](https://github.com/ToucanProtocol/contracts) repository.

The Solana bridged token mint address is [7sbtAMfAuSfsUvZKPWiXUXaizYCnpLL2BBnKNTU3wjfT](https://solscan.io/token/7sbtAMfAuSfsUvZKPWiXUXaizYCnpLL2BBnKNTU3wjfT).

#### 3. Burning the carbon tokens

The Sunrise treasury controller purchases NCT from a DEX, and burns them.

_NOTE_:
Until sufficient liquidity is present on Solana for NCT, Sunrise is maintaining a reserve of bridged NCT, and is automatically burning from this pot at a fixed price.


## Governance

### How is Sunrise Stake governed?

Sunrise Stake will be governed by the [Sunrise Stake DAO](https://app.realms.today/realm/SunriseStake), running on the Realms platform.
Via Realms you'll be able to participate in governance, propose changes, vote and delegate your vote.

## Security

### Will I lose custody of my SOL / private keys/ wallet?
No. Sunrise Stake is a non-custodial and permissionless protocol.
Non-custodial means that your SOL is always under your control, you retain your wallet’s private keys, and that you can withdraw your SOL at any time.
Permissionless means that the protocol can be used by you or anyone else, without any interaction from the Sunrise team.


## Other Questions
### I am interested in integrating gSOL into my project, how can I do that?

gSOL is a standard SPL token, and can be integrated into any project that supports SPL tokens.

The gSOL token address is [gso1xA56hacfgTHTF4F7wN5r4jbnJsKh99vR595uybA](https://explorer.solana.com/address/gso1xA56hacfgTHTF4F7wN5r4jbnJsKh99vR595uybA).

You can convert the gSOL back to SOL either by unstaking it manually in the Sunrise Stake app, through the upcoming JS library, or directly via the protocol itself.

### Why is Sunrise staking with Marinade and SolBlaze?
Marinade and SolBlaze offer: 

#### Enhanced Decentralisation
Usually when you stake SOL, your SOL is staked against to a single validator account, however Marinade and SolBlaze distribute staked SOL to a wide network of hundreds of validators (and growing!).
Thus staking with Marinade and SolBlaze (and similar staking protocols) makes the Solana blockchain more decentralised, secure and censorship resistant, as it is harder for validators to stage a 51% attack or alter transactions.

#### Liquid unstaking
- This means users receive funds immediately
- Normally unstaking is delayed - one has to wait until the end of the epoch (on average 2 days) to receive funds

In the future, Sunrise plans to stake with other non-custodial liquid staking protocols.


### I am a validator, how can I get involved?

In conjunction with the [Solana Foundation](https://solana.org/), we are exploring establishing a green stake pool, composed of validators that use renewable energy for their operations.

Once the pool is established, Sunrise will direct stake to this pool, resulting in positive climate impact on both sides of the transaction:

* Validators have an incentive to use renewable energy, reducing the carbon cost of the Solana network.
* Stake yield is directed towards offsetting carbon emissions outside the Solana network.


### Is Sunrise Stake audited?

Audit is planned for early 2023. Stay tuned!


### Where is the source code?

You can view (and submit pull-requests to) the source code on [GitHub](https://github.com/sunrise-stake).
