async function loadBookings(){

const res = await fetch("http://localhost:5000/bookings")

const bookings = await res.json()

const table = document.getElementById("table")

bookings.forEach(b=>{

table.innerHTML += `
<tr>

<td>${b.name}</td>
<td>${b.phone}</td>
<td>${b.service}</td>
<td>${b.problem}</td>

</tr>
`

})

}

loadBookings()