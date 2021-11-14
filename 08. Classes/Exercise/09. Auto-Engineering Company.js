function AutoEngineeringCompany(inputArr) {

    let cars = {};
    for (let line of inputArr) {
        let [brand, model, qty] = line.split(' | ')
        qty = Number(qty)
        if (!cars[brand]) {
            cars[brand] = {}
        }
        if (!cars[brand][model]) {
            cars[brand][model] = 0
        }
        cars[brand][model] += qty
    }
    
    let result = '';
    for (let key in cars) {
        result += `${key}\n`
        for (let mod in cars[key]) {
            result += `###${mod} -> ${cars[key][mod]}\n`;
        }
    }
    return result;
}
    
