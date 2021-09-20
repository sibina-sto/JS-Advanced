function createSortedList() {
    let list = [];

    return {
        size: 0,
        add,
        remove,
        get
    }

    function add(element) {
        list.push(element);
        this.size++;
        list.sort((a, b) => a - b);
    }

    function remove(index) {
        if(index >= 0 && index < list.length){
            list.splice(index,1);
            this.size--;
        }
    }

    function get(index) {
        if(index >= 0 && index < list.length){
          return list[index];
        }
    }
}