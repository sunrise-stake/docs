---
slug: /details
sidebar_position: 2
sidebar_label: Details
---

# The Details

## A Deep Dive into the Staking Process
Let’s take a closer look at the SOL-gSOL wrapping process.

## Step 1: Wrapping SOL into green SOL (gSOL)

![staking_white_without_comments.png](/img/staking_white_without_comments.png)

The process begins when you wrap your SOL into green SOL via the Sunrise Stake smart contract.

Your SOL will be staked in the underlying third-party pools.

The majority of the SOL is automatically routed into a set of [Stake Pools](https://solana.org/stake-pools).
At present, Sunrise Stake routes into the [Marinade Finance](https://docs.marinade.finance/) and [SolBlaze](https://stake-docs.solblaze.org/) pools.

A proportion of the SOL is also routed into the [Marinade Unstake Pool](https://docs.marinade.finance/marinade-protocol/system-overview/unstake-liquidity-pool). This pool is used during the unstaking process to provide fee-less unstaking, ensuring that users can unwrap their gSOL back to SOL at any time without incurring a fee.
When you wrap your SOL, you will receive an equivalent amount of gSOL in your wallet. gSOL can be used in the same way as SOL, by supporting protocols and recipients.

## Step 2: Accruing yield

![accruing_yield_white.png](/img/accruing_yield_white.png)

### Stake Pools

At the end of each epoch (every 2 or 3 days), yield gets paid out into stake accounts, and the value of the overall stake pool increases.

As mSOL and bSOL represent a share of their respective stake pools, the value of mSOL and bSOL also increases.

The yield accrued on your staked SOL is equal to the value of mSOL and bSOL minus the value of SOL staked (calculated as the circulating supply of gSOL).

### Liquidity Pool

The Marinade Unstake Pool also accrues yield through fees from the Marinade liquid unstaking feature. The total value of holdings are therefore:

- The value of mSOL and bSOL
- The value of the liquidity pool tokens


## Step 3: Unwrapping green SOL back to SOL

![unstaking_white_without_comments.png](/img/unstaking_white_without_comments.png)

If you want to unwrap your green SOL (gSOL) to  SOL, Sunrise calculates how much of its share of the underlying stake and liquidity pools to swap in order to receive your SOL.

Unwrapping draws from the liquidity pool balance first, and then from the stake pool as needed.

For example, if you decide to unwrap 100 green SOL back to 100 SOL, and the value of the liquidity pool tokens are currently at 90, you will withdraw 90 from the liquidity pool, and the remaining 10 from the stake pool.

Sunrise will also trigger a "rebalancing" transaction that moves SOL from the stake pool into the liquidity pool, in order to maintain a 10% liquidity pool balance.


![rebalancing_white.png](/img/rebalancing_white.png)