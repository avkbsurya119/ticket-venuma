document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
})


document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const bookButton = document.getElementById('book_ticket');
    const backButton = document.getElementById('back_ticket');
    const priceDisplay = document.getElementById('price_display');
    const transferredArray = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get('data')));

    // Define seat prices
    const seatPrices = {
        economy: 175,
        standard: 250,
        premium: 350
    };

    let totalPrice = 0;
    let selectedSeatsInfo = [];

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // Toggle seat selection
            if (!seat.classList.contains('booked')) {
                seat.classList.toggle('selected');
                const seatType = seat.dataset.type;
                const seatNumber = seat.innerText;
                
                if (seat.classList.contains('selected')) {
                    totalPrice += seatPrices[seatType]; // Adding seat price
                    selectedSeatsInfo.push({ number: seatNumber, type: seatType }); // Store selected seat info
                } else {
                    totalPrice -= seatPrices[seatType]; // Subtracting seat price
                    selectedSeatsInfo = selectedSeatsInfo.filter(seatInfo => seatInfo.number !== seatNumber); // Remove deselected seat info
                }

                updatePriceDisplay(totalPrice); // Update the displayed price
            }
        });
    });

    // Function to update the price display
    function updatePriceDisplay(price) {
        priceDisplay.textContent = `Total Price: $${price}`;
    }

    bookButton.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedSeatNumbers = Array.from(selectedSeats).map(seat => seat.innerText);
        
        if (selectedSeatNumbers.length > 0) {
            transferredArray.selectedSeats = selectedSeatsInfo; // Add selected seats info to transferred array
            transferredArray.totalPrice = totalPrice; // Add total price to transferred array
            alert(`You have selected the following seats: ${selectedSeatNumbers.join(', ')}`);
            // Additional logic for booking the seats goes here
        } else {
            alert('No seats selected');
        }

        const arrayJson = JSON.stringify(transferredArray);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);

        window.location.href = `payments/paymentpage.html?data=${encodedArrayJson}` 

    });
    backButton.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
        });
        totalPrice = 0;
        selectedSeatsInfo = [];
        updatePriceDisplay(totalPrice);
    });

    // Function to update the price display
    function updatePriceDisplay(price) {
        priceDisplay.textContent = `Total Price: $${price}`;
    }

    // Update transferred array with movie details
    document.getElementById('movieTitle').innerText = transferredArray.title;
    document.getElementById('movieGenre').innerText = transferredArray.genre;
    document.getElementById('movieReleaseDate').innerText = transferredArray.releaseDate;
    document.getElementById('theater_name').innerText = transferredArray.tickets[0].theater;
    document.getElementById('date').innerText = transferredArray.tickets[0].date;
    document.getElementById('showtime').innerText = transferredArray.tickets[0].time;
    document.getElementById('posterImage').src = transferredArray.posterImage;
    document.querySelector('.book .right .top').style.backgroundImage = `url('${transferredArray.backgroundImage}')`;

    // Display cast members
    const castList = document.getElementById('castList');
    transferredArray.cast.forEach(member => {
        const listItem = document.createElement('li');
        listItem.innerText = `${member.name} - ${member.role}`;
        castList.appendChild(listItem);
    });

    // Display crew members
    const crewList = document.getElementById('crewList');
    transferredArray.crew.forEach(member => {
        const listItem = document.createElement('li');
        listItem.innerText = `${member.name} - ${member.role}`;
        crewList.appendChild(listItem);
    });

    // Display ticket details
    const ticketList = document.getElementById('ticketList');
    transferredArray.tickets.forEach(ticket => {
        const listItem = document.createElement('li');
        listItem.innerText = `${ticket.theater}, Date: ${ticket.date}, Time: ${ticket.time}`;
        ticketList.appendChild(listItem);
    });
});
