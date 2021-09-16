export function bowlingPins(arr) {
  let pins2 = [
    { num: 1, pos: 25 },
    { num: 2, pos: 17 },
    { num: 3, pos: 19 },
    { num: 4, pos: 9 },
    { num: 5, pos: 11 },
    { num: 6, pos: 13 },
    { num: 7, pos: 1 },
    { num: 8, pos: 3 },
    { num: 9, pos: 5 },
    { num: 10, pos: 7 },
  ];
  let field = '';
  let rowCount = 1;
  for (let i = 1; i < 29; i++) {
    let isPin = pins2.filter((p) => p.pos === i);
    if (isPin.length === 1) {
      let isUp = arr.find((p) => p === isPin[0].num) === undefined;
      field += isUp === true ? 'I' : ' ';
    } else {
      field += ' ';
    }
    if (i % 7 === 0 && rowCount < 4) {
      rowCount++;
      field += '\n';
    }
  }
  console.log(field);
  return field;
}
