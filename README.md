# dailyMint
A tool for Minting Custom amount of Steem Engine Token Daily.

It can be used with anykind of Token, it will Mint tokens daily at the time provided.

## Configuration
Bot is easy to config, your will have to edit the `config.json` file according to your bot.

```javascript
{
    "username" : "", // the username of the account which will do the mint
    "keys" : {
        "active" : "" // active key of the account to do distribution
    },
    "mint_to_account" : "", // username of the acount you want to mint the tokens to
    "amount" : "", // the amount you want to mint
    "token" : {
        "symbol" : "" // symbol of the token
    },
    "distribution_hour" : 0, // distrubution happens daily, set it to 0 for 12:00 PM 
    "minute" : 0, // The minutes of the hour in which the distrubution should start
    "isset" : false // set it true after configuring the bot
}
```

***

## Finalizing
Now install Dependencies and you can Run it
```javascript
$ npm install
$ node app.js
```

***

## Development
If you want to contribute or have any suggestions so you can Express them on my Discord `A-jaX#9816` or on Steemit @ali-h.

If you Encounter any issue or Bugs, Please report them [Here](https://github.com/alihassanah/PoS-Distribution/issues). Thanks!
