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
