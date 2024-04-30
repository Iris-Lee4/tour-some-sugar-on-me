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
        bandName: 'Monophonics',
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
        bandName: 'Monophonics',
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
        name:'Monophonics',
        members: 8,
        genre:'Psychedelic Soul',
        formation: 2012
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