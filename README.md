
![PancakeSwap-Logo-Big](https://user-images.githubusercontent.com/37302442/142642313-475cd6f8-0050-4925-8604-0c0370b0a69c.png)

This bot wins the majority of Epochs on PancakeSwap & CandleGenie Prediction based on market conditions & the strategy chosen.

## Table of Content
* [Installation](#installation)
* [Strategies](#strategies)
* [License](#license)
* [Disclaimers](#disclaimers)

## 💡 Installation

Download & Install Node here :
https://nodejs.org/en/download/

Then run command prompt or powershell.  

- Type ``cd PancakeSwap-Prediction-v2`` (replace with your cloned/downloaded bot folder)
- Type ``npm i``

Follow these instructions below:

1. Copy/rename **.env_sample** to **.env** ``cp .env_sample .env``
2. Provide your private key to .env PRIVATE_KEY field.
3. Install dependencies `npm i` or `yarn` if not already completed above.
4. Start the bot using `npm run start` or `yarn start`
5. Enjoy!

Feel free to contribute. Good Luck!

### 🦊 How to Export Private Key from MetaMask
1. Open your account
2. Click on three points at top-right corner
3. Account details
4. Export Private Key

Using CandleGenie? If you want to play with Candle Genie instead of Pancake, start the bot with `npm run cg` or `yarn cg`

!!! READ ~~
			To use the alternate `with` strategy, start the bot using `npm run start -- --with` or `yarn start -- --with`.
			For CandleGenie, use `npm run cg -- --with` or `yarn cg -- --with`

### 🧰 Sample ``.ENV`` file
```
# Your wallet private key. 
PRIVATE_KEY="YOUR_PRIVATE_KEY_HERE"
# The maximum bet amount you are willing to execute.
BET_AMOUNT="0.002"
# RPC is the default network for Ether transactions. For Binance Smart Chain, leave it as it is.
RPC="https://bsc-dataseed.binance.org/"
```

## 🧑‍🎨 Strategies
- Default Strategy: Bets against what the majority of money is betting on. It generally aims for the higher payout bet. Better for sideways trends where its harder for the majority of people to bet correctly & confidently.

- `--with` Strategy: Bets with what the majority of money is betting on. It generally aims to follow the lower payout bet. Better for swinging trends where its easier for the majority of people to bet correctly & confidently.

### 🧪 Results (Screenshots)

![Wins](https://user-images.githubusercontent.com/93492689/139600566-39dd4cdb-b895-4988-9b08-a487dc5f562e.png)

#### 📢 Advice:
- Run the bot with your wallet at a ratio of 10x the amount you choose to bet.
- Adjust the bot accordingly to bet with or against the majority.
- When the chart swings, use the "--with" strategy.
- When the chart trends sideways, use the default, against strategy. 
- Always monitor & adjust the bot accordingly but allow room for error.
- Consistent gains will be made by running smaller betting amounts over longer periods of time. 
- Always account & allow room for error. Losing 3 sucks, but stopping it only prevents it from potentially winning the next 4 & bringing you to a profit. 
- Majority of the runs with over 2k plays I have a standard 54-66% win rate depending on how well I monitor it & based on market conditions.

## 💼 License
MIT License

## 💥 Disclaimers
All investment strategies and investments involve risk of loss.

**Nothing contained in this program, scripts, code or repository should be construed as investment advice.**
Any reference to an investment's past or potential performance is not, and should not be construed as, a recommendation or as a guarantee of any specific outcome or profit. By using this program you accept all liabilities, and that no claims can be made against the developers or others connected with the program.
