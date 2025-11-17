let count = 0;

function increment() {
    function update() {
        count = count + 1;
    }
    update();
    console.log("Count:", count);
}

function decrement() {
    function update() {
        count = count - 1;
    }
    update();
    console.log("Count:", count);
}

increment();
increment();
decrement();
increment();