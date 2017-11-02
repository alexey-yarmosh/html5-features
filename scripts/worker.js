function fibonacci(num) {
    if (num === 1) return 1;
    else if (num === 2) return 1;
    else return fibonacci(num - 2) + fibonacci(num - 1);
}

onmessage = function(e) {
    postMessage(fibonacci(42));
}
