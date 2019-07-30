const steem = require('steem')
const colors = require('colors')
const config = require('./config.json')
const fs = require("fs")
steem.api.setOptions({
    url: 'https://anyx.io'
})
var transferLOG = {}

function initTimer () {
    console.log("---------------------------------------------------".yellow)
    var TimeTimer = (function() {    
        return setInterval(function() {
            currentTime = new Date().toLocaleString(undefined, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
            process.stdout.write("\rCURRENT LOCAL TIME : ".yellow + currentTime.green)
            var currentHour = new Date().getHours()
            if (currentHour == config.distribution_hour && new Date().getMinutes() == config.minutes) {
                clearInterval(TimeTimer)
                console.log("\n")
                InitMint()
            }
        }, 1000);
    })()
}

function mint(callback) {
    var json = {
        "contractName":"tokens",
        "contractAction":"issue",
        "contractPayload":{
            "symbol": config.token.symbol,
            "to": config.mint_to_account,
            "quantity": config.amount
        }
    }
    steem.broadcast.customJson(
        config.keys.active, 
        [config.username], [], 
        "ssc-mainnet1", JSON.stringify(json), 
        function(err, result) {
            if (!err) {
                console.log("MINTING SUCCESSFULL".green)
            }
            else
                console.log("ERR".bgRed,  "WHILE MINTING".yellow)

            callback()
    })
}

function InitMint () {
    console.log("MINTING WAS CALLED, CURRENT TIME = ".yellow, new Date().toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).green)
    console.log("NOW MINTING".yellow)
    console.log("")
    mint(function() {
        console.log("TIMER WILL AGAIN START IN 10 MINUTES".yellow)
        console.log("")
        setTimeout(function () {
            initTimer()
        }, 10 * 60 * 1000)
    })
}

console.log('\033[2J')
console.log("#---------------------------------#".green)
console.log("#             Daily Mint          #".green)
console.log("#---------------------------------#".green)
console.log("")

if (config.isset == false) {
	console.log(" ERR ".bgRed, "Please Configure the bot first, edit config.json file".yellow)
}
else {
    initTimer()
}