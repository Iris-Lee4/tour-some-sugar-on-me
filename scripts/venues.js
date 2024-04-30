import { getVenues, getBookings} from "./database.js";

const venues = getVenues();
const bookings = getBookings();

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === 'venue') {
            let bandsBooked = ""
            for (const booking of bookings) {
                
                if (itemClicked.dataset.name === booking.venueName) {
                    bandsBooked += `\n${booking.bandName}`;
                }
            // return bandsBooked;
            }
        window.alert(`Bands booked: ${bandsBooked}`)
        }
    }
)

export const Venues = () => {
    let html = '<ul>'

    for (const venue of venues) {
        html += `<li data-type="venue"
                data-name="${venue.name}"
                >${venue.name}</li>`
    }
    html += '</ul>'
    return html
}