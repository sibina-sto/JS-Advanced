class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this._soldTickets = 0;
        this._profit = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(s => s.date == date && s.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }
        this.screenings.push({
            date: date,
            hall: hall,
            description: description,
        });
        return `New screening of ${this.movieName} is added.`


    }

    endScreening(date, hall, soldTickets) {
        const screening = this.screenings.find(s => s.date == date && s.hall == hall)
        if (screening == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }

        const index = this.screenings.indexOf(screening);
        this.screenings.splice(index, 1);

        const profit = this.ticketPrice * soldTickets;
        this._soldTickets += soldTickets;
        this._profit += profit;
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit

    }

    toString() {
        const result = [`${this.movieName} full information:`,
            `Total profit: ${this._profit.toFixed(0)}$`,
            `Sold Tickets: ${this._soldTickets}`,
        ];
        if (this.screenings.length === 0) {
            result.push('No more screenings!')
        } else {
            result.push(`Remaining film screenings:`)
            this.screenings
                .sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(s => result.push(`${s.hall} - ${s.date} - ${s.description}`))
        }

        return result.join('\n');

    }
}
