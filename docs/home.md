---
slug: /
---

# Sunrise Stake

:::caution

The Sunrise Stake protocol is currently in development. Use at own risk

:::

## The Basics

### What is Sunrise Stake?

Sunrise Stake is a ReFi staking protocol,
that directs staking yield to climate-positive projects.

By staking SOL with Sunrise, you are strengthening the Solana blockchain,
while simultaneously offsetting your climate impact.

### What is ReFi?

Regenerative Finance, or ReFi, is the union of web3 decentralised finance
with regenerative economics. 

Regenerative economics is a theoretical framework for understanding and
guiding economic activity that is focused on creating positive social and ecological outcomes.

This approach to economics emphasizes the importance of building and
maintaining healthy ecosystems and communities,
and views economic activity as a means to that end rather than an end in itself.

### How to Stake?

1. Visit [the app](https://app.sunrisestake.com) and connect your wallet.
2. Select the amount of SOL you want to stake.
3. Click "Stake" and confirm the transaction.

The SOL will be locked in the smart contract until you unstake. You will receive
the equivalent amount of gSOL, which you can either keep and unstake in the future,
or trade with platforms that support it.

### How to Unstake?

1. Visit [the app](https://app.sunrisestake.com) and connect your wallet.
2. Select the amount of gSOL you want to unstake.
3. Click "Unstake" and confirm the transaction.

:::caution

While Sunrise is in development, unstaking incurs a fee from the
underlying [Marinade Finance protocol](https://docs.marinade.finance/faq/faq#what-fees-does-marinade-charge).

:::

## The Details

### What is Liquid Staking?

Liquid staking is a method of staking that allows stakers to unstake without
the typical 2-3 day withdrawal period.

Sunrise proxies the [Marinade Finance](https://docs.marinade.finance/) protocol,
which allows liquid staking through the use of liquidity pools.

### What is gSOL?

gSOL is a synthetic derivative of SOL, which is minted by the Sunrise Stake protocol
when you stake SOL. It is a 1:1 representation of SOL, and can be used in the same
way as SOL, by protocols or recipients that support it.

For example, if you are asked to pay a recipient in SOL, you can pay them in gSOL instead.
The recipient can then choose to either keep the gSOL, or unstake it and receive SOL.

Keeping SOL staked in Sunrise as long as possible maximises the climate impact of each stake
as well as the stability of the Solana blockchain.

### I am interested in integrating gSOL into my project, how can I do that?

gSOL is a standard SPL token, and can be integrated into any project that supports SPL tokens.

The gSOL token address is `gso12BFMxXD7RJaTUFfZZyuLW32M1hA9LoLZN7u9Und`.

You can convert the gSOL back to SOL either by unstaking it manually
in the [Sunrise Stake app](https://app.sunrisestake.com), through the upcoming JS library, or directly
via the protocol itself.

### I am a validator, how can I get involved?

In conjunction with the [Solana Foundation](https://solana.org/), we are exploring
establishing a green stake pool, composed of validators that use renewable energy for
their operations.

Once the pool is established, Sunrise will direct stake to this pool, resulting in positive
climate impact on both sides of the transaction:

- Validators have an incentive to use renewable energy, reducing the carbon cost of the Solana network.
- Stake yield is directed towards offsetting carbon emissions outside the solana network.

### Where does the earned yield go?

While the protocol is in development, yield remains in the protocol itself. 

In the future, yield will be directed to purchasing carbon offset tokens, which will be
subsequently burned in order to retire the underlying carbon credits.

Long-term, the decision of where to direct yield will be made by the community, governed by
the [Sunrise Stake DAO](https://app.realms.today/realm/SunriseStake).

## Governance

:::tip

Governance for Sunrise Stake is planned for 2023. Stay tuned!

:::

### How is Sunrise Stake governed?

Sunrise Stake is governed by the [Sunrise Stake DAO](https://app.realms.today/realm/SunriseStake),
running on the Realms platform.

### How can I participate in governance?

### How can I propose a change?

### How can I vote?

### How can I delegate my vote?

## Security

### Is this a custodial solution?

No. Sunrise Stake is non-custodial and permissionless protocol.

This means that your tokens are always under your control and can be accessed by you at any time.
The protocol can be used by anyone, without interaction from the Sunrise team.

### Is Sunrise Stake audited?

Audit is planned for early 2023. Stay tuned!

### Where is the source code?

You can view (and submit pull-requests to) the source code on
[GitHub](https://github.com/sunrise-stake).