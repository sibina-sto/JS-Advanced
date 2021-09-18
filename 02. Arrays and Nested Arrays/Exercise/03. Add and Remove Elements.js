//3.	Add and Remove Elements  

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
