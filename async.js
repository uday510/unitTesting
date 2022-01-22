    function fetch(cb) {
    setTimeout(function() {
        const data = 'relevel';
        cb(data);
    }, 4000);
}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const data = 'relevel';
            resolve(data);
        }, 4000);
    }
  )
}
module.exports = {fetch, fetchPromise};

