//3.	Add and Remove Elements

function foo(arr) {
    let count = 1
    const temp = []
    const actions = {
        add: x => temp.push(x),
        remove: () => temp.pop(),
    }

    arr.forEach(x => actions[x](count++))
    return temp.length !== 0 ? temp.join("\n") : "Empty"
}


//////
function addAndRemove(commands) {
    let result = [];
    let number = 1;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'add') {
            result.push(number);
        } else if (commands[i] == 'remove') {
            result.pop();
        }
        number++;
    }

    return result.length != 0 ? result.join("\n") : "Empty";
}

// console.log(addAndRemove(['remove', 
// 'remove', 
// 'remove']
// ));
