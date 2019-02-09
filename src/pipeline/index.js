const fs = require('fs').promises;

const getMiddleElement = (list) => {
  const middleIndex = Math.round(list.length / 2);
  return list[middleIndex];
};

const makePlural = (str) => {
  const pluralChar = 's';
  const lastChar = str[str.length - 1];
  return lastChar === pluralChar ? str : `${str}${pluralChar}`;
};

const main = async () => {
  const fileNames = await fs.readdir('.');
  const preparedFilesNames = fileNames
    .filter(file => file[0] !== '.')
    .sort();
  const middleFileName = getMiddleElement(preparedFilesNames);
  const pluralFileName = makePlural(middleFileName);
  const uppercaseFileName = pluralFileName.toUpperCase();
  console.log(uppercaseFileName);
};

export default main;
