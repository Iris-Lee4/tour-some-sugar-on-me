import { Bands } from "./bands.js"
import { Venues } from "./venues.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="top">
    <section class="bookings details">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
</article>
<article class="bottom">
    <section class="venues details">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="bands details">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
    
`

mainContainer.innerHTML = applicationHTML