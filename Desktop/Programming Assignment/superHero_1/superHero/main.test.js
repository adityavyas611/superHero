const genMain = require("./main");

test('4855 will decode into Hulk', () => {
    expect(genMain('0 4855')).toEqual('HULK');
  });

test('228626 will decode into Batman', () => {
    expect(genMain('0 228626')).toEqual('BATMAN');
  });

test('78737626 will decode into Superman', () => {
    expect(genMain('0 78737626')).toEqual('SUPERMAN');
  });

test('8467 will decode into Thor', () => {
    expect(genMain('0 8467')).toEqual('THOR');
  });

test('35274 will decode into Flash', () => {
    expect(genMain('0 35274')).toEqual('FLASH');
  });
