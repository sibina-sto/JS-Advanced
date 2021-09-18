//6.	List of Names

function sortNames(names) {
    return names
        .slice(0)
        .sort((a, b) => a.localeCompare(b))
        .map((name, index) => {
            let result = `${index + 1}.${name}`;
            return result;
        })
        .join('\n');
}

// console.log(sortNames(
//     ["John", "Bob", "Christina", "Ema"]
// ));
