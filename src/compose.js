import { compose } from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const comp = compose(embolden, repeatThreeTimes, makeLouder);
console.log(comp("hello"));
