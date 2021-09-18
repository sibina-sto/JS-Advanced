///8.	Sort an Array by 2 Criteria

function sortArr(arr) {
    return arr.sort((a,b) => {
        if(a.length === b.length){
            return a.localeCompare(b);
        }

        return a.length - b.length;
    }).join('\n');
}
