import { getBands, getBookings, getMembers } from "./database.js";

const bands = getBands();
const bookings = getBookings();
const members = getMembers();

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === 'band') {
            let venuesList = "";
            let membersList = "";
            for (const member of members) {
                if(itemClicked.dataset.name === member.bandName) {
                    membersList += `${member.firstName} ${member.lastName} (${member.role})\n`;
                }
            }
            for (const booking of bookings) {
                if (itemClicked.dataset.name === booking.bandName) {
                    venuesList += `\n${booking.venueName}`;
                }
            }
            window.alert(`${membersList}\nUpcoming shows: ${venuesList}`)
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