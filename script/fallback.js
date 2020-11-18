      (function (win, doc) {
        const _ = Math.floor;
        const aDay = 24 * 60 * 60 * 1000;
        const beginCovid = new Date("15 MAR 2020");
        const deathDay = new Date("27 APR 2020");
        const M = 1000;
        const CM = 900;
        const D = 500;
        const CD = 400;
        const C = 100;
        const XC = 90;
        const L = 50;
        const XL = 40;
        const X = 10;
        const IX = 9;
        const V = 5;
        const IV = 4;
        const I = 1;
        const romanNumerals = [
          { label: "M", value: M },
          { label: "CM", value: CM },
          { label: "D", value: D },
          { label: "CD", value: CD },
          { label: "C", value: C },
          { label: "XC", value: XC },
          { label: "L", value: L },
          { label: "XL", value: XL },
          { label: "X", value: X },
          { label: "IX", value: IX },
          { label: "V", value: V },
          { label: "IV", value: IV },
          { label: "I", value: I },
        ];
        const timeDiff = historicDate => Date.now() - historicDate.getTime();
        const daysSince = when =>
          Math.floor(timeDiff(when) / aDay) + humanOffset;
        const sinceCovid = timeDiff(beginCovid);
        const humanOffset = 1; // Humans don't start counting at 0;
        const daysOfCovid = daysSince(beginCovid);
        const daysOfMourning = daysSince(deathDay);
        const toNumerals = (num, $ = [], numerals = romanNumerals) => {
          const next = numerals.find(n => Math.floor(num / n.value));
          if (next) {
            return toNumerals(num - next.value, [...$, next.label]);
          }
          return $.join("");
        };

        doc.getElementById("covid").innerText = toNumerals(daysOfCovid);
        doc.getElementById("death").innerText = toNumerals(daysOfMourning);
      })(window, window.document);