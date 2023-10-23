---
slug: /spending
sidebar_position: 4
sidebar_label: Spending Yield
---

# Spending Yield

The yield earned by the Sunrise Stake platform is spent on climate-positive projects. 
The system that controls the spending of yield is called the [Yield Controller](https://github.com/sunrise-stake/yield-controller).

The Yield Controller is responsible for:
- Collecting yield from the stake program
- Splitting it among the various spending destinations (called "targets")
- Triggering the spending processes of these targets.

![yield-controller-router.jpg](/img/yield-controller-router.jpg)

## 1. Yield transfer to the yield account

The yield earned from staking SOL is transferred to the [__yield account__](https://solscan.io/account/6HQrvpMJFqMj35JqMReyhnUrRXNucAAB6FywdDu7xPKA).

It is a Program Derived Address ([PDA](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses))
meaning that it is owned and controlled by a smart contract (the yield controller), not a private key.

The yield account is specified in the [state](https://solana.fm/address/43m66crxGfXSJpmx5wXRoFuHubhHA1GCvtHgmHW6cM1P/anchor-account)
of the Sunrise program (labelled 'treasury'). The permissionless `extract_yield` instruction transfers any accrued yield to this account.

## 2. Splitting to targets

The Yield Controller protocol includes a program called the `Yield Router`.

This program is configured with a number of `targets` and `proportions`. 

Executing the yield router's `allocate_yield` instruction sends funds from the `yield account`
to a number of target `input accounts`. 

Each input account is a PDA owned by a given target program.

## 3. Targets

### 3.1 Toucan Nature Carbon Tonne

Sunrise Stake currently spends its yield by buying and retiring the Toucan Nature Carbon Tonne (NCT) token.

NCT represents a tonne of CO2 or equivalent greenhouse gas removed from the atmosphere in various nature-based projects.
It is issued on the Polygon and Celo blockchains.

More on the NCT can be found on Toucan’s [blog](https://blog.toucan.earth/announcing-nct-nature-carbon-tonne/) or [GitHub](https://github.com/ToucanProtocol/contracts) repository.

#### 3.1.1 Buying and Retiring NCT

Sunrise has built the [Offset Bridge](https://offset.sunrisestake.com/), a cross-chain protocol
that to bridge funds from Solana to Polygon and Celo, and then uses them to buy and retire
carbon credits using the Toucan protocol.

##### Structure of the Offset Bridge

The Offset Bridge is made up of:
- The TokenSwap contract on Solana
- The Holding contract on Polygon/Celo
- The CarbonOffsetSettler contract on Polygon/Celo

The steps are as follows:
1. The Yield Controller transfers funds to the Offset Bridge target
2. The Offset Bridge Solana program swaps SOL to USDCpo (Wormhole-wrapped Polygon USDC)
3. The Offset Bridge Solana program bridges the USDCpo to Polygon and deposits it into a Holding Contract on Polygon
4. The Holding Contract is a smart contract that is configured to retire carbon to a particular project on Toucan
5. The Holding Contract calls the Toucan CarbonOffsetSettler contract and sends all USDC to it
6. The CarbonOffsetSettler contract performs the following steps (atomically)
   6a. Buys NCT with the USDC using SushiSwap
   6b. Converts the NCT to tCO2 tokens using Toucan contracts
   6c. Retires the tCO2 to the project specified in the Holding Contract
   6d. Sends the resultant retirement certificate NFT to the Holding Contract
7. The Holding Contract then bridges the NFT back through Wormhole, resulting in a retirmenet certificate NFT on Solana

More details for the Offset Bridge can be found at https://github.com/sunrise-stake/offset-bridge.

![offset-bridge.jpg](/img/offset-bridge.jpg)

### 3.2 ecoToken

Starting in Q4 2023, Sunrise Stake will also be sending a portion of its funds to [ecoToken](https://eco-token.io/),
a Solana-native project that issues a variety of eco-credits.

ecoToken is linked with Regen Network, that certifies the credits.
