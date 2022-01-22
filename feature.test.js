const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('2 + 2 = ', () => {
    expect(sum(2, 2)).toBe(4)
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toStrictEqual( {one: 1, two: 2}); 
});

test('contradiction', () => {
    expect(10 + 10).not.toBe(10);
})