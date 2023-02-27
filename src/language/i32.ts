import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class I32 extends Feat {
  constructor(c) {
    super(c);
  }
  static k = "I32";
  lex() {
    return new Type("I32", Tag.DTYPE);
  }
  parse() {
    this.node(Tag.ID);
    this.node("=");
    this.node(Tag.NUM);
    this.node(";");
  }
  eval() {
    throw new Error("Method not implemented.");
  }
}
