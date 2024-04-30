import { getBands, getBookings } from "./database.js";

const bands = getBands();
const bookings = getBookings();

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === 'band') {
            let venuesList = "";
            for (const booking of bookings) {
                if (itemClicked.dataset.name === booking.bandName) {
                    venuesList += `\n${booking.venueName}`;
                }
            }
            window.alert(`${itemClicked.dataset.name} is playing at ${venuesList}`)
        }
    }
)

export const Bands = () => {
    let html = '<ul>'

    for (const band of bands) {
        html += `<li data-type="band"
                data-name="${band.name}"
                >${band.name}</li>`
    }
    html += '</ul>'
    return html
}