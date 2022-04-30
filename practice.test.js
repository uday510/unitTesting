/**
 * Write any test
 */

// test("First test", () => {
//     console.log("Hello World");
// })

// function add(a, b) {
//     return a + b;
// }

// test("Testing the output", () => {
    //Expectation,    actual
//     expect(add(3, 4)).toBe(7);
// });

// test("Testing two objects", () => {
//     const obj = {
//         foo: "bar"
//     }

//     expect(obj).toEqual({
//         foo: "bar"
//     });
// });

// test("testing null", () => {
//     let n = null;
//     let a = undefined;
//     let c = 7;

//     expect(n).toBeNull();
//     expect(a).toBeUndefined();
//     expect(c).toBeDefined();
// });


// const person = {
//     name: "uday",
//     age: 10,
//     address: {
//         lane1: "Mountain View",
//         city: "San Francisco",
//         state: "CA"
//     }
// }


//! Testing async code

//! Wrong way
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("San Francisco");
//     }, 2000);
// }

// test("Testing the callback", () => {
    
//     function callback(data) {
//         expect(data).toEqual("San Francisco");
//     }
//     fetchData(callback);
// });

function fetchData(callback) {
    setTimeout(() => {
        callback("San Francisco");
    }, 2000);
}

test("Testing the callback", (done) => {
    
    try {
        function callback(data) {
        expect(data).toEqual("San Francisco");
        done(); // Unless until done is called test will wait.
        }
    } catch (err) {
        done(err);
    }
    fetchData(callback);
});