import { GameMode } from "./types";

const isEven = (number: number) => number % 2 == 0;

const isOdd = (number: number) => number % 2 == 1;

export const gameModes: { [key in GameMode]: (number: number) => boolean } = {
    Even: isEven,
    Odd: isOdd,
};
