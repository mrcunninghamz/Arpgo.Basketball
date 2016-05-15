module Arpgo.Controllers {
    export class PlayerUtilities {
        NumberPadding = (number: string, max: number) => {
            number = number.toString();
            return number.length < max ? this.NumberPadding(`0${number}`, max) : number;
        }
    }

    export interface IPlayerUtilities {
        NumberPadding(): void;
    }
}