import { Tag } from "../tag";
import { Token } from "../token";
import { Word } from "../word";
import { Feat } from "./feat";

export class And extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "&";
  lex() {
    if (this.c.checkAhead("&")) return new Word("&&", Tag.AND);
    else return new Token("&");
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
