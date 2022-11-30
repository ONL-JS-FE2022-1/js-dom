setTimeout(func, 2000);

function func() {
    console.log(2+2);
}

const helloTimeoutId = setTimeout(function () {console.log('LOGGING')}, 15000);
clearTimeout(helloTimeoutId);

// func();