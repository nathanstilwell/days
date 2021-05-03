import toNumerals from "./modules/numerals.js";
import formatDate from "./modules/datesSuck.js";

// Convinience
const doc = window.document;
const humanOffset = 1; // Humans don't start counting at 0;
const aDay = 24 * 60 * 60 * 1000;
const aYear = 365; // days

/*
 * Time calculation
 */

/*
 * @function
 * @name timeDiff
 * @param {Date} historicDate
 * @return {number} Number of milliseconds difference between historicDate and now
 */
const timeDiff = historicDate => Date.now() - historicDate.getTime();
/*
 * @function
 * @name daysSince
 * @param {Date} when
 * @returns {number} Number of days since supplied date
 */
const daysSince = when => Math.floor(timeDiff(when) / aDay) + humanOffset;

/*
 * Display today's date
 */
const today = new Date();
doc.getElementById("today").innerText = formatDate(today);

/*
 * Display number of days since "COVID" in numerals
 */
const beginCovid = new Date("15 MAR 2020");
const daysOfCovid = daysSince(beginCovid);
doc.getElementById("covid").innerText = toNumerals(daysOfCovid);

/*
 * In memorial. RIP MDG
 *
const deathDay = new Date("27 APR 2020");
const daysOfMourning = daysSince(deathDay);
const getDaysOfMourning = days => days > aYear ? "Nullius in verba" : toNumerals(days);
doc.getElementById("death").innerText = getDaysOfMourning(daysOfMourning);
*/

