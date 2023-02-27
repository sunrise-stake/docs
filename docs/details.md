---
slug: /details
---

## The Details

### A Deep Dive into the Staking Process
Let’s take a deep dive into what happens when you deposit your SOL with Sunrise Stake

#### Step 1: Depositing SOL with Sunrise Stake

![staking_white_without_comments.png](/img/staking_white_without_comments.png)

The staking process begins with you depositing your SOL via Sunrise Stake’s app.

Your SOL will be deposited into the underlying pools.

The majority of the SOL is deposited into a set of [Stake Pools](https://solana.org/stake-pools).
At present, Sunrise Stake deposits into the [Marinade Finance](https://docs.marinade.finance/) and [SolBlaze](https://stake-docs.solblaze.org/) pools.
The stake pool tokens (mSOL and bSOL) will be held by the protocol in a [Program Derived Address (PDA)](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses).

A proportion of the deposited SOL is also deposited into the [Marinade Unstake Pool](https://docs.marinade.finance/marinade-protocol/system-overview/unstake-liquidity-pool).
This pool is used during the unstaking process to provide fee-less unstaking, ensuring that users can withdraw their SOL at any time without incurring a fee.

When you deposit your SOL, you will receive an equivalent amount of gSOL in your wallet.
gSOL can be used in the same way as SOL, by protocols or recipients that support it.

#### Step 2: Accruing yield

![accruing_yield_white.png](/img/accruing_yield_white.png)

###### Stake Pools
At the end of each epoch (every 2 or 3 days), yield gets paid out into stake accounts,
and the value of the overall stake pool increases.

As mSOL and bSOL represent a share of their respective stake pools, the value of mSOL and bSOL also increases.

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