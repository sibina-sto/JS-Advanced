function solve(speed, area) {
    speed = Number(speed);

    const areaLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (areaLimits[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${areaLimits[area]} zone`);
    } else {
        let status = '';

        if (speed - areaLimits[area] <= 20) {
            status = 'speeding';
        } else if (speed - areaLimits[area] <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speed - areaLimits[area]} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`);
    }
}

//solve(40, 'city');
//solve(21, 'residential');
//solve(120, 'interstate');
//solve(200, 'motorway');
