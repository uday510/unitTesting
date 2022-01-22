const sum = require('./sum');
const lib = require('./async');

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

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).toBeFalsy();
    expect(z).not.toBeTruthy();
})

test('2 + 2', () => {
    const val = sum(2, 2);
    expect(val).toBeGreaterThan(3);
    expect(val).toBeLessThan(5);

    expect(val).toBeGreaterThanOrEqual(4);
    expect(val).toBeLessThanOrEqual(4);

    //! both toBe and toEqual works same to same for numbers

    expect(val).toBe(4);
    expect(val).toEqual(4);
})

const shoppingList = ['milk', 'butter', 'panner'];

test( 'shoppingList', () => {
    expect(shoppingList).toContain('panner');
});

test('data is relevel', () => {
    function cb(data){
        expect(data).toBe('relevel');
    }
    lib.fetch(cb);
});

test('The data is relevel in promise', () => {
    return lib.fetchPromise().then(data => {
        expect(data).toBe('relevel');
    })
})

test('The data is relevel in promise', () => {
    return expect(lib.fetchPromise()).resolves.toBe('relevel');
})


test('The data is relevel in promise', async () => {
    const data = await lib.fetchPromise();
    expect(data).toBe('relevel');
})

