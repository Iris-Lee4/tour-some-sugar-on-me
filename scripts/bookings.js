import { getBookings, getBands } from "./database.js";

const bookings = getBookings();
const bands = getBands();

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === 'booking') {
            for (const band of bands) {
                if (itemClicked.dataset.bandname === band.name) {
                    window.alert(`${band.name}\n${band.genre}\nFormed in ${band.formation}\n${band.members} band members`)
                }
            }
        }
    }
)

export const Bookings = () => {
    let html = '<ul>'

    for (const booking of bookings) {
        html += `<li data-type="booking"
                data-bandName="${booking.bandName}"
                >${booking.bandName} are playing at ${booking.venueName} on ${booking.date}</li>`
    }
    html += '</ul>'
    return html
}