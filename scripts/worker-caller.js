var myWorker = new Worker("worker.js");

myWorker.onmessage = function(e) {
    console.log(e.data);
}
