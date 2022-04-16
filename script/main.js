import toNumerals from "./modules/numerals.js";
import formatDate from "./modules/datesSuck.js";

// Convinience
const doc = window.document;
const humanOffset = 1; // Humans don't start counting at 0;
const aDay = 24 * 60 * 60 * 1000;

/*
 * Time calculation
 */

const invalidDateString = (datestring) => isNaN(Date.parse(datestring));

const d = (datestring) => new Date(datestring);

/**
 * @function
 * @name t
 * @param {string} datestring RFC 2822 timestamp
 * @returns {number | null} Date in milliseconds or null if invalid datestring
 */
const t = (datestring) => invalidDateString(datestring) ? null : d(datestring).getTime();

/**
 * @function
 * @name timeDiff
 * @param {Date} historicDate
 * @return {number} Number of milliseconds difference between historicDate and now
 */
const timeDiff = historicDate => Date.now() - historicDate.getTime();
/**
 * @function
 * @name daysSince
 * @param {Date} when
 * @returns {number} Number of days since supplied date
 */
const daysSince = when => Math.floor(timeDiff(when) / aDay) + humanOffset;

const daysFrom = when => Math.abs(daysSince(when));

/**
 * @function
 * @name daysBetween
 * @param {string} from RFC 2822 timestamp
 * @param {string} to RFC 2822 timestamp
 * @returns {number} Number of days between "from" date and "to" date
 */
const daysBetween = (from, to) => (t(to) - t(from)) / aDay;

const moments = Array.from(doc.querySelectorAll("[data-type]"));

moments.forEach(m => {
  const { type } = m.dataset;

  switch (type) {
    case "time-span": {
      const { begin, end } = m.dataset;
      m.innerText = toNumerals(daysBetween(begin, end));
      break;
    }
    case "date" : {
      const { date } = m.dataset;
      m.innerText = toNumerals(daysFrom(d(date)));
      break;
    }
    case "now":
      m.innerText = formatDate(new Date());
      break;
  }
});

/*
 * Display number of days since "COVID" in numerals
 * // The count of COVID days began on 15 MAR 2020 when both my office
 * // and my church had shut their doors due to COVID safety. My last day
 * // in the office was 13 MAR 2020. The 15th was the first Sunday we
 * // held a "remote service" on Zoom. West End Church reopened the Sanctuary
 * // on 03 OCT 2021 (see below). My first day back in our new office was
 * // 05 APR 2022. It did not feel right to stop the count then, so I deferred
 * // until Easter (17 APR 2022). The final count of the days of COVID is DCCLXIII.
const beginCovid = new Date("15 MAR 2020");
const daysOfCovid = daysSince(beginCovid);
doc.getElementById("covid").innerText = toNumerals(daysOfCovid);
 */

/*
 * Display number of days since returning to the Sanctuary in numerals
 * // West End Church reopened it's Sancturary on 03 Oct 2021. Due
 * // to the rise of COVID cases due to Omicron and Delta, we closed
 * // the Sanctuary again on Christmas 2021 after LXXXIII days.
const welcomeBack = new Date("03 OCT 2021");
const aNewThing = daysSince(welcomeBack);
doc.getElementById("resurrection").innerText = toNumerals(aNewThing);
*/

/*
 * In memorial. RIP MDG
 *
const deathDay = new Date("27 APR 2020");
const daysOfMourning = daysSince(deathDay);
const getDaysOfMourning = days => days > aYear ? "Nullius in verba" : toNumerals(days);
doc.getElementById("death").innerText = getDaysOfMourning(daysOfMourning);
*/

