const jestMock = require('jest-mock');
function run(arr, cb) {
    for( let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

const mockCB = jestMock.fn(x => x*x);

run([1, 2, 3, 4], mockCB);

test('checks for callBack', () => {
    expect(mockCB.mock.calls.length).toBe(4);
    expect(mockCB.mock.results[0].value).toBe(1);
    expect(mockCB.mock.results[1].value).toBe(4);
    expect(mockCB.mock.results[2].value).toBe(9);
    expect(mockCB.mock.results[3].value).toBe(16);
    
})