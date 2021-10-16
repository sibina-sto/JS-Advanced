class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        let customer = {
            ownerName: ownerName,
            pets: []
        }

        let pet = {
            petName: petName,
            kind: kind,
            procedures: procedures
        }

        customer.pets.push(pet);

        if (this.currentWorkload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        } else if (this.clients.find(c => c.ownerName === ownerName && c.pets.find(p => p.petName === petName) &&
            c.pets.find(p => p.petName === petName).procedures.length > 0)) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${procedures.join(", ")}.`);
        } else {
            this.clients.push(customer);
            this.currentWorkload += procedures.length;
            return `Welcome ${petName}!`;
        }
    }

    onLeaving(ownerName, petName) {
        let currClientPets = this.clients.find(c => c.ownerName === ownerName).pets;
        let currPetProcedures = this.clients.find(c => c.pets.find(p => p.petName === petName).procedures);

        if (this.clients.find(c => c.ownerName === ownerName && c.pets.find(p => p.petName === petName) &&
            c.pets.find(p => p.petName === petName).procedures.length > 0)) {
            this.totalProfit += currPetProcedures.length * 500;
            this.currentWorkload -= currPetProcedures.length;
            currPetProcedures = [];
            return `Goodbye ${petName}. Stay safe!`;
        } else if (this.clients.find(c => c.ownerName != ownerName)) {
            throw new Error("Sorry, there is no such client!");
        } else {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
    }
    toString() {
        let output = [];
        output.push(`${this.clinicName} is ${(this.currentWorkload / this.capacity) * 100}% busy today!`);
        output.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);
        this.clients.sort((c1, c2) => c1.ownerName - c2.ownerName);
        this.clients.forEach(client => {
            output.push(`${client.ownerName} with:`);
            client.pets.sort((p1, p2) => p1.petName - p2.petName);
            client.pets.forEach(p => {
                output.push(`---${p.petName} - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(", ")}`);
            });
        })
        return output.join("\n");
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
