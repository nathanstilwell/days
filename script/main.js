import toNumerals from "./modules/numerals.js";
import formatDate from "./modules/datesSuck.js";

const doc = window.document;
const humanOffset = 1; // Humans don't start counting at 0;
const aDay = 24 * 60 * 60 * 1000;
const aYear = 365; // days
const beginCovid = new Date("15 MAR 2020");
const deathDay = new Date("27 APR 2020");
const today = new Date();

const timeDiff = historicDate => Date.now() - historicDate.getTime();
const daysSince = when => Math.floor(timeDiff(when) / aDay) + humanOffset;

const daysOfCovid = daysSince(beginCovid);
const daysOfMourning = daysSince(deathDay);

const getDaysOfMourning = days => days > aYear ? "Nullius in verba" : toNumerals(days);

doc.getElementById("today").innerText = formatDate(today);
doc.getElementById("covid").innerText = toNumerals(daysOfCovid);
doc.getElementById("death").innerText = getDaysOfMourning(daysOfMourning);
