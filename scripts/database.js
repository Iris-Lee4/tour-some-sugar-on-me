const database = {
    bookings: [{
        id: 1,
        bandName: 'The xx',
        venueName: 'The Atrium',
        date: '5/8/2024'
    }, {
        id: 2,
        bandName: 'Two Door Cinema Club',
        venueName: 'The Ampitheater',
        date: '6/9/2024'
    }, {
        id: 3,
        bandName: 'ODESZA',
        venueName: 'The Arena',
        date: '7/10/2024'
    }, {
        id: 4,
        bandName: 'Japanese Breakfast',
        venueName: 'The Arena',
        date: '7/10/2024'
    }, {
        id: 5,
        bandName: 'The xx',
        venueName: 'The Arena',
        date: '8/11/2024'
    }, {
        id: 6,
        bandName: 'The xx',
        venueName: 'The Ampitheater',
        date: '8/11/2024'
    }, {
        id: 7,
        bandName: 'Japanese Breakfast',
        venueName: 'The Ampitheater',
        date: '10/11/2024'
    }], 
    venues: [{
        name: 'The Atrium',
        address: '1234 wayward way',
        squareFootage: 1234,
        maxOccupancy: 900
    },{
        name: 'The Ampitheater',
        address: '4321 wayward ln',
        squareFootage: 43210,
        maxOccupancy: 120000
    },{
        name: 'The Arena',
        address: '55 wayward ave',
        squareFootage: 55,
        maxOccupancy: 10
    }],
    bands: [{
        name:'The xx',
        members: 3,
        genre:'Indie Rock',
        formation: 2005
    }, {
        name:'Two Door Cinema Club',
        members: 3,
        genre: 'Indie Pop',
        formation: 2007
    }, {
        name:'ODESZA',
        members: 2,
        genre:'Electronic',
        formation: 2012
    }, {
        name:'Japanese Breakfast',
        members: 4,
        genre:'Alt Pop',
        formation: 2013
    }],
    members: [{
        id: 1,
        firstName: 'Romy',
        lastName: 'Madley Croft',
        yearBorn: 1989,
        role: 'vocals, guitar',
        bandName: 'The xx'
    }, {
        id: 2,
        firstName: 'Oliver',
        lastName: 'Sim',
        yearBorn: 1989,
        role: 'vocals, bass, guitar',
        bandName: 'The xx'
    }, {
        id: 3,
        firstName: 'Jamie',
        lastName: 'xx',
        yearBorn: 1988,
        role: 'synthesizers, drums, keyboards, etc',
        bandName: 'The xx'
    }, {
        id: 4,
        firstName: 'Alex',
        lastName: 'Trimble',
        yearBorn: 1989,
        role: 'lead vocals, guitar, keyboard, etc',
        bandName: 'Two Door Cinema Club'
    }, {
        id: 5,
        firstName: 'Sam',
        lastName: 'Halliday',
        yearBorn: 1988,
        role: 'lead guitar, synth, vocals',
        bandName: 'Two Door Cinema Club'
    }, {
        id: 6,
        firstName: 'Kevin',
        lastName: 'Baird',
        yearBorn: 1990,
        role: 'bass, synth, keyboards',
        bandName: 'Two Door Cinema Club'
    }, {
        id: 7,
        firstName: 'Harrison',
        lastName: 'Mills',
        yearBorn: 1990,
        role: 'all the things',
        bandName: 'ODESZA'
    }, {
        id: 8,
        firstName: 'Clayton',
        lastName: 'Knight',
        yearBorn: 1990,
        role: 'all the things',
        bandName: 'ODESZA'
    }, {
        id: 9,
        firstName: 'Michelle',
        lastName: 'Zauner',
        yearBorn: 1989,
        role: 'lead vocals, guitar',
        bandName: 'Japanese Breakfast'
    }, {
        id: 10,
        firstName: 'Craig',
        lastName: 'Hendrix',
        yearBorn: 1989,
        role: 'drums, percussion, keyboards',
        bandName: 'Japanese Breakfast'
    }, {
        id: 11,
        firstName: 'Devin',
        lastName: 'Craige',
        yearBorn: 1989,
        role: 'bass',
        bandName: 'Japanese Breakfast'
    }, {
        id: 12,
        firstName: 'Peter',
        lastName: 'Bradley',
        yearBorn: 1989,
        role: 'guitar',
        bandName: 'Japanese Breakfast'
    }]
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
};

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
};

export const getBands = () => {
    return database.bands.map(band => ({...band}))
};

export const getMembers = () => {
    return database.members.map(member => ({...member}))
}