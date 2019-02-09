const fs = require('fs').promises;

class MyString {
  constructor(str) {
    this.str = str;
  }

  makePlural() {
    const pluralChar = 's';
    const lastChar = this.str[this.str.length - 1];
    const pluralized = lastChar === pluralChar ? this.str : `${this.str}${pluralChar}`;
    return new MyString(pluralized);
  }

  toUpperCase() {
    const uppercased = this.str.toUpperCase();
    return new MyString(uppercased);
  }

  getString() {
    return this.str;
  }
}

class MyList {
  constructor(list) {
    this.list = list;
  }

  filter(fn = () => true) {
    const newList = this.list.filter(fn);
    return new MyList(newList);
  }

  sort(fn = (a, b) => a - b) {
    const newList = this.list.sort(fn);
    return new MyList(newList);
  }

  getMiddleElement() {
    const middleIndex = Math.round(this.list.length / 2);
    return this.list[middleIndex];
  };
}

class Main {
  async run() {
    const filenames = await fs.readdir('.');
    const list = new MyList(filenames);
    const middleElementName = list
      .filter(file => file[0] !== '.')
      .sort()
      .getMiddleElement();

    const fileName = new MyString(middleElementName);
    const result = fileName.makePlural().toUpperCase().getString();
    console.log(result);
  }
}

export default Main;
