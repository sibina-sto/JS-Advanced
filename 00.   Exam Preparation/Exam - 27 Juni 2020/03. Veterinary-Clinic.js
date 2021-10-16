class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.clients = [];
    this.totalProfit = 0;
    this.currentWorkload = [];
  }

  newCustomer(ownerName, petName, kind, procedures) {
    if (this.currentWorkload.length + 1 === this.capacity) {
      throw new Error('Sorry, we are not able to accept more patients!');
    }
    if (
      this.currentWorkload.find(
        (x) => x.ownerName == ownerName && x.pet.petName == petName
      )
    ) {
      throw new Error(
        `This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${procedures.join(
          ', '
        )}.`
      );
    }
    const pet = {
      petName,
      kind,
      procedures,
    };
    const client = {
      ownerName,
      pets: [pet],
    };

    const clientFromBase = this.clients.find((x) => x.ownerName == ownerName);
    if (clientFromBase === undefined) {
      this.clients.push(client);
    } else {
      clientFromBase.pets.push(pet);
    }
    this.currentWorkload.push({ ownerName, pet });
    return `Welcome ${petName}!`;
  }

  onLeaving(ownerName, petName) {
    const client = this.clients.find((x) => x.ownerName === ownerName);
    if (client === undefined) {
      throw new Error('Sorry, there is no such client!');
    }
    const pet = this.currentWorkload.find(
      (x) => x.ownerName == ownerName && x.pet.petName == petName
    ).pet;
    if (pet === undefined) {
      throw new Error(`Sorry, there are no procedures for ${petName}!}.`);
    } else {
      this.totalProfit += pet.procedures.length * 500;
      pet.procedures = null;
      this.currentWorkload.pop(client);
    }
    return `Goodbye ${petName}. Stay safe!`;
  }

  toString() {
    const percentage = Math.floor(
      (this.currentWorkload.length / this.capacity) * 100
    );
    this.clients
      .sort((x, y) => x.ownerName.localeCompare(y.ownerName))
      .forEach((x) =>
        x.pets.sort((x, y) => x.petName.localeCompare(y.petName))
      );
    let result = [
      `${this.clinicName} is ${percentage}% busy today!`,
      `Total profit: ${this.totalProfit.toFixed(2)}$`,
    ];
    this.clients.forEach((x) => {
      result.push(`${x.ownerName} with:`);
      x.pets.forEach((y) => {
        result.push(
          `---${y.petName} - a ${y.kind.toLowerCase()} that needs: ${
            y.procedures === null ? '' : y.procedures.join(', ')
          }`
        );
      });
    });

    return result.join('\n');
  }
}

// let clinic = new VeterinaryClinic('SoftCare', 10);
// console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
// console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
// console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
// console.log(clinic.toString());
