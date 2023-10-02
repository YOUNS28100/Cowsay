const info = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `My bro ${info.name} is studiyng in ${info.campus}`,
    e: "^^",
    T: "U",
}));
