import {Choice} from './Choice';

export class PersonalQuestion {
  private _questionTitle: string;
  private _choices: Choice[];
  private _link: string;

  static createWith(questionTitle: string, link: string): PersonalQuestion {
    let question = new PersonalQuestion();
    question._questionTitle = questionTitle;
    question._link = link;

    return question;
  }

  constructor() {
    this._questionTitle = '';
    this._choices = [];
    this._link = '';

  }

  addChoice(imagePath: string, link: string, posX: string, posY: string, zIndex: string) {
    let choice = new Choice(imagePath, link, posX, posY, zIndex);
    this.add(choice);
  }

  private add(...choices: Choice[]) {
    this._choices.push(...choices);
  }

  get choices() {
    return this._choices;
  }

  get questionTitle() {
    return this._questionTitle;
  }

  set questionTitle(value: string) {
    this._questionTitle = value;
  }

  get link() {
    return this._link;
  }
}
