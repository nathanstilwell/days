import toNumerals from "./modules/numerals.js";

const doc = window.document;
const humanOffset = 1; // Humans don't start counting at 0;
const aDay = 24 * 60 * 60 * 1000;
const beginCovid = new Date("15 MAR 2020");
const deathDay = new Date("27 APR 2020");

const timeDiff = historicDate => Date.now() - historicDate.getTime();
const daysSince = when => Math.floor(timeDiff(when) / aDay) + humanOffset;

const daysOfCovid = daysSince(beginCovid);
const daysOfMourning = daysSince(deathDay);

doc.getElementById("covid").innerText = toNumerals(daysOfCovid);
doc.getElementById("death").innerText = toNumerals(daysOfMourning);

console.log("loaded date for ", beginCovid)
console.log("loaded date for ", deathDay)