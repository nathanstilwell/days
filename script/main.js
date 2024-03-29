import TIME from "@nathanstilwell/time";

import toNumerals from "./modules/numerals.js";
import formatDate from "./modules/datesSuck.js";

const doc = window.document;
const moments = Array.from(doc.querySelectorAll("[data-type]"));

moments.forEach(m => {
  const { type } = m.dataset;

  switch (type) {
    case "time-span": {
      const { begin, end } = m.dataset;
      m.innerText = toNumerals(TIME.daysBetween(begin, end));
      break;
    }
    case "date" : {
      const { date } = m.dataset;
      m.innerText = toNumerals(TIME.daysFrom(TIME.d(date)));
      break;
    }
    case "now":
      const covidCount = toNumerals(TIME.daysBetween(TIME.d("2020-03-15"), TIME.now()));
      m.innerText = `${covidCount} - ${formatDate(new Date())}`;
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

