const M̅ = 1000000;
const C̅M̅ = 900000;
const D̅ = 500000;
const C̅D̅ = 400000;
const C̅ = 100000;
const X̅C̅ = 90000;
const L̅ = 50000;
const X̅L̅ = 40000;
const X̅ = 10000;
const I̅X̅ = 9000;
const V̅ = 5000;
const I̅V̅ = 4000;
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
  { label: "M̅", value: M̅ },
  { label: "C̅M̅", value: C̅M̅ },
  { label: "D̅", value: D̅ },
  { label: "C̅D̅", value: C̅D̅ },
  { label: "C̅", value: C̅ },
  { label: "X̅C̅", value: X̅C̅ },
  { label: "L̅", value: L̅ },
  { label: "X̅L̅", value: X̅L̅ },
  { label: "X̅", value: X̅ },
  { label: "I̅X̅", value: I̅X̅ },
  { label: "V̅", value: V̅ },
  { label: "I̅V̅", value: I̅V̅ },
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

const toNumerals = (num, $ = [], numerals = romanNumerals) => {
  if (num < 0) {
    return toNumerals(Math.abs(num), ["-", ...$]);
  }

  const next = numerals.find(n => Math.floor(num / n.value));

  if (next) {
    return toNumerals(num - next.value, [...$, next.label]);
  }

  return $.join("");
};

export default toNumerals;
