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


### What is ReFi?

Regenerative Finance, or ReFi, is the union of web3 decentralised finance with regenerative economics.

Regenerative economics is a theoretical framework for understanding and guiding economic activity that is focused on creating positive social and ecological outcomes.

This approach to economics emphasizes the importance of building and maintaining healthy ecosystems and communities, and views economic activity as a means to that end rather than an end in itself.


### What are the benefits of staking with Sunrise Stake?

#### Supporting carbon offset projects comes at no cost
Users deposit their SOL with Sunrise Stake and receive gSOL (green SOL) in return as a wrapped token representing the total amount staked. 
gSOL is a synthetic derivative of SOL, and can be used in the same way as SOL, by protocols or recipients that support it.
For example, if you are asked to pay a recipient in SOL, you can pay them in gSOL instead. The recipient can then choose to either keep the gSOL, or unstake it and receive SOL.
The gSOL to SOL ratio is always 1:1 thus stakers experience no fund loss in the process. Additionally, gSOL is a fully fungible token - stakers can continue to trade it, leaving their SOL to earn rewards for nature-based projects!

#### Transparent unstaking 

The deposited stake retains full liquidity and can be traded back to SOL by  the user any time. At present, no fees (beyond the solana network fee of 5000 lamports) apply to unstaking high values when the user withdraws with a delay of 2-3 days, otherwise a fee of 0.3% is incurred for immediate withdrawals. This is done to secure sufficient liquidity of the staking pool. 

#### Liquid Staking
Liquid staking is a method of staking that allows stakers to unstake without the typical 2-3 day withdrawal period.
Sunrise proxies the [Marinade Finance](https://docs.marinade.finance/) protocol, which allows liquid staking through the use of liquidity pools.

_NOTE_: In the future, Sunrise Stake aims at offering entirely feeless liquid unstaking. Sunrise will also proxy additional staking protocols.

#### Strengthening the Solana Ecosystem
Our protocol also secures and decentralizes the Solana blockchain; staking your SOL with liquid staking protocols such as Marinade Finance and Solblaze means that your SOL is distributed to a wider network of validators.

#### The longer the staking, the higher the reward
Keeping your SOL staked in Sunrise as long as possible maximises the climate-positive impact of your SOL, as well as the security of the Solana blockchain.
This is because the longer you stake your SOL, the more yield it will accrue, thus increasing the funds directed towards climate-positive causes.
The decision to unstake is entirely up to the user however the accrued yield is being directed towards offsetting carbon throughout the entire staking period, not only upon unstaking. This way stakers have the possibility to passively invest in green projects while retaining access to their tokens at the same time.


### What are carbon tokens?
Carbon tokens serve a similar purpose as carbon credits by allowing individuals and institutions to offset their carbon emissions by purchasing tokens from projects that decrease greenhouse gas emissions. When these tokens are burned, they are permanently removed from circulation and can no longer be used to offset carbon. Sunrise Stake realises climate impact by purchasing carbon tokens thanks to the yield accrued via staking. 

### How to Stake?
Depositing your SOL via Sunrise Stake only takes only a few clicks:

1. Visit [the app](https://app.sunrisestake.com/) and connect your wallet.    
2. Select the amount of SOL you want to stake.
3. Click "Stake" and confirm the transaction.

The SOL will be locked in the smart contract until you unstake. You will receive the equivalent amount of gSOL, which you can either keep and unstake in the future, or trade with platforms that support it.


### How to Unstake?

1. Visit [the app](https://app.sunrisestake.com/) and connect your wallet.
2. Select the amount of gSOL you want to unstake.
3. Click "Unstake" and confirm the transaction.

:::caution

While Sunrise is in development, unstaking incurs a fee from the
underlying [Marinade Finance protocol](https://docs.marinade.finance/faq/faq#what-fees-does-marinade-charge).

:::

## The Details

### A Deep Dive into the Staking Process
Let’s take a deep dive into what happens when you deposit your SOL with Sunrise Stake

#### Step 1: Depositing SOL with Sunrise Stake
The staking process begins with you depositing your SOL via Sunrise Stake’s app.

Your SOL will be deposited in Sunrise Stake’s Treasury Account, which is controlled by a smart contract (called Treasury Controller). 
The Treasury Account is a Programme Derived Account (PDA) that is controlled by a smart contract called Treasury Controller; this means that only Treasury Controller can move the funds in the Treasury Account.

When you deposit your SOL, you will also receive an equivalent amount of gSOL in your wallet.
You can either keep your gSOL in your wallet, or use it on platforms that support it.

#### Step 2: Sending your SOL to a staking protocol
Once your SOL is deposited, Treasury Controller will send your SOL from the Treasury Account to non-custodial liquid staking protocols such as Marinade Finance (Marinade) and SolBlaze.                                        

Treasury Controller will stake your SOL in:
1. Marinade's stake pool 
2. Solblaze's stake pool - called BlazeStake 
3. Marinade's liquidity pool 

_NOTE_: Sunrise Stake has future plans to integrate other staking protocols (in addition to Marinade and SolBlaze).
 
##### Stake Pool 
When Treasury Controller stakes your SOL in Marinade's stake pool, Marinade mints an amount of msOL tokens (Marinade Staked SOL tokens) which represents the size of your holding of the stake pool, which is redeemable for SOL.

For example, if Marinade's stake pool contains 20 SOL and the total minted mSOL is 10, then if you add 1 SOl, Marinade mints something like (1/20) * 10 = 0.5 mSOL. 
The stake pool size is now 21, you hold 0.5 out of a total 10.5 mSOL, so you own (0.5 / 10.5) of the pool of 21 sol, which equals 1 SOL.

The staking process for SolBlaze is the same as above; when Treasury Controller stakes your SOL into BlazeStake's stake pool (BlazeStake is), when Sunrise stakes your SOL, Sunrise receives bSOL tokens (BlazeStake Staked SOL tokens) relative to your SOL's size of the stake pool. Just like mSOL, bSOL is redeemable for SOL.

##### Liquidity Pool 
2.  A  mSOL/SOL unstake pool - through which Sunrise becomes a liquidity provider to Marinade
The liquidity pool is made up of SOL, mSOL and Liquidity Pool tokens

  
#### Step 3: Accruing yield on staked SOL

#### Step 4: Marinade sends minted mSOL to Treasury Controller
i.e. Marinade “swaps” the SOL sent by Sunrise with the mSOL from Marinade’s Stake Pool

                                                                                   
## Sunrise Stake treasury spending 

Thanks to the yield earned in the staking process, Sunrise can purchase carbon tokens and burn them to offset carbon emissions. 

#### 1. Yield transfer to the treasury account

The yield earned from staking SOL is transferred to the __treasury account__. It is a Program Derived Address ([PDA](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses)) meaning that it is owned and controlled by a smart contract, not a private key. This smart contract is known as the __treasury controller__. It can trigger a state change to buy or burn carbon tokens, thus retiring underlying carbon credits.

#### 2. Purchasing carbon tokens
The carbon token used in Sunrise Stake is the Nature Carbon Tonne token. NCT represents a tonne of CO2 or equivalent greenhouse gas removed from the atmosphere in various nature-based projects. It is issued on the Polygon and Celo blockchains. More on the NCT can be found on Toucan’s [blog](https://blog.toucan.earth/announcing-nct-nature-carbon-tonne/) or [GitHub](https://github.com/ToucanProtocol/contracts) repository.

As the controller cannot purchase tokens directly from a different chain, Sunrise Stake employs a __holding account__ to buy NCT by bridging it to Solana through [Wormhole](https://www.portalbridge.com/#/transfer).

#### 3. Burning the carbon tokens

The Sunrise controller delegates the holding account to automatically burn a portion of NCT, removing them from the circulating supply.

_NOTE_:
Until sufficient liquidity is present on Solana for NCT, Sunrise is maintaining a reserve of bridged NCT, and is automatically burning from this pot at a fixed price.


## Governance
:::tip

Governance for Sunrise Stake is planned for 2023. Stay tuned!

:::
### How is Sunrise Stake governed?

Sunrise Stake is governed by the [Sunrise Stake DAO](https://app.realms.today/realm/SunriseStake), running on the Realms platform.
### How can I participate in governance?
### How can I propose a change?
### How can I vote?
### How can I delegate my vote?

## Security

### Will I lose custody of my SOL / private keys/ wallet?
No. Sunrise Stake is a non-custodial and permissionless protocol.
Non-custodial means that your SOL is always under your control, you retain your wallet’s private keys, and that you can withdraw your SOL at any time.
Permissionless means that the protocol can be used by you or anyone else, without any interaction from the Sunrise team.


##FAQs
### I am interested in integrating gSOL into my project, how can I do that?

gSOL is a standard SPL token, and can be integrated into any project that supports SPL tokens.

The gSOL token address is `gso12BFMxXD7RJaTUFfZZyuLW32M1hA9LoLZN7u9Und`.

You can convert the gSOL back to SOL either by unstaking it manually in the Sunrise Stake app, through the upcoming JS library, or directly via the protocol itself.

### Why is Sunrise staking with Marinade and SolBlaze?
Marinade and SolBlaze offer: 

#### Enhanced Decentralisation
Usually when you stake SOL, your SOL is staked against to a single validator account, however Marinade and SolBlaze distribute staked SOL to a wide network of hundreds of validators (and growing!).
Thus staking with Marinade and SolBlaze (and similar staking protocols) makes the Solana blockchain more decentralised, secure and censorship resistant, as it is harder for validators to stage a 51% attack or have control over how transactions are validated.

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
