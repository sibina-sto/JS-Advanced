function getFibonator() {
    let [prev, curr] = [1, 0];

    return () => {
        let next = prev + curr;
        prev = curr;
        curr = next;
        return curr;
    }
}

//let fib = getFibonator();
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
//console.log(fib());
