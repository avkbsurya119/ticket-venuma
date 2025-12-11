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


const scheduleData = [
    // Today's schedule
    {
        cinema: "PVR: Nexus Mall Kukatpally, Hyderabad",
        times: ["10:00 AM", "02:20 PM", "07:45 PM"],
        date: new Date(),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.726654149198!2d78.3867756153532!3d17.49308068804422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc09b35a4e3f8f%3A0x90fe4f098a4c3f77!2sPVR%20Cinemas!5e0!3m2!1sen!2sin!4v1633528056675!5m2!1sen!2sin"
    },
    {
        cinema: "INOX: GSM Mall, Hyderabad",
        times: ["01:30 PM", "05:45 PM", "09:00 PM"],
        date: new Date(),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8610638557966!2d78.46308131535319!3d17.491319988049005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc08f5a5ae858b%3A0x638fcf6b635f7eb0!2sINOX!5e0!3m2!1sen!2sin!4v1633528472980!5m2!1sen!2sin"
    },
    {
        cinema: "Cinepolis: Manjeera Mall, Hyderabad",
        times: ["12:00 PM", "03:30 PM", "08:00 PM"],
        date: new Date(),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.726654149198!2d78.3867756153532!3d17.49308068804422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc09b35a4e3f8f%3A0x90fe4f098a4c3f77!2sPVR%20Cinemas!5e0!3m2!1sen!2sin!4v1633528056675!5m2!1sen!2sin"
    },
    // Tomorrow's schedule
    {
        cinema: "PVR: Preston, Gachibowli Hyderabad",
        times: ["11:30 AM", "04:25 PM", "08:45 PM"],
        date: addDays(new Date(), 1),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0809780121064!2d78.3419988153543!3d17.44320428782406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccbf121a1268a9%3A0x5696de0492b1b194!2sPVR%20Cinemas!5e0!3m2!1sen!2sin!4v1633528298705!5m2!1sen!2sin"
    },
    {
        cinema: "INOX: Sattva Necklace Mall, Kavadiguda",
        times: ["12:30 PM", "06:40 PM", "10:15 PM"],
        date: addDays(new Date(), 1),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.982736526826!2d78.48971231535257!3d17.418229588089704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb925d9d0c76b5%3A0x3c8a432ecb3dbd29!2sINOX!5e0!3m2!1sen!2sin!4v1633528808089!5m2!1sen!2sin"
    },
    {
        cinema: "PVR: AMB Cinemas, Kondapur",
        times: ["10:15 AM", "02:50 PM", "07:30 PM"],
        date: addDays(new Date(), 1),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.726654149198!2d78.3867756153532!3d17.49308068804422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc09b35a4e3f8f%3A0x90fe4f098a4c3f77!2sPVR%20Cinemas!5e0!3m2!1sen!2sin!4v1633528056675!5m2!1sen!2sin"
    },
    // Day after tomorrow's schedule
    {
        cinema: "PVR: Central Mall, Panjagutta",
        times: ["10:20 AM", "03:45 PM", "08:00 PM"],
        date: addDays(new Date(), 2),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.256785702274!2d78.4507506153536!3d17.51419588799277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccbadfa6d5f6c1%3A0x536d28c614e89e33!2sPVR%20Cinemas!5e0!3m2!1sen!2sin!4v1633528664401!5m2!1sen!2sin"
    },
    {
        cinema: "Cinepolis: Manjeera Mall, Hyderabad",
        times: ["01:00 PM", "04:45 PM", "09:30 PM"],
        date: addDays(new Date(), 2),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.726654149198!2d78.3867756153532!3d17.49308068804422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc09b35a4e3f8f%3A0x90fe4f098a4c3f77!2sPVR%20Cinemas!5e0!3m2!1sen!2sin!4v1633528056675!5m2!1sen!2sin"
    },
    {
        cinema: "Prasads: IMAX, Hyderabad",
        times: ["11:00 AM", "03:30 PM", "08:00 PM"],
        date: addDays(new Date(), 2),
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0257246997645!2d78.45167821535288!3d17.412299888112944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc0b5d3c22f4db%3A0x17d6062aaf8f1d0d!2sPrasads%20Multiplex!5e0!3m2!1sen!2sin!4v1633529087818!5m2!1sen!2sin"
    }
];

// Retrieve the array from the URL
const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');

// Decode the URL parameter and parse it back to an array
const decodedData = decodeURIComponent(dataParam);
const transferredArray = JSON.parse(decodedData);
console.log(transferredArray);

if (!transferredArray.tickets) {
    transferredArray.tickets = [];
}

// Function to format date as "24th May, 2024"
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


// Update header with movie details
const movieTitle = document.getElementById('movie-title');
const movieGenre = document.getElementById('movie-genre');
const releaseDate = document.getElementById('release-date');
const posterImage = document.getElementById('poster-image');

// Check if transferredArray is not empty and update the header
if (transferredArray) {
    // Extract movie details from the transferred array
    const { title, genre, releaseDate: release, posterImage: poster } = transferredArray;

    // Update HTML elements with movie details
    movieTitle.textContent = title;
    movieGenre.textContent = genre;
    releaseDate.textContent = `Release Date: ${release}`;
    posterImage.src = poster;
    document.querySelector('.header').style.backgroundImage = `url('${transferredArray.backgroundImage}')`;
}



// Function to add days to a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Function to create filter buttons for dates
function createFilterButtons() {
    const filterButtonsContainer = document.getElementById('filter-buttons');
    filterButtonsContainer.innerHTML = '';
    
    const today = new Date();
    for (let i = 0; i < 3; i++) {
        const date = addDays(today, i);
        const button = document.createElement('button');
        button.textContent = formatDate(date);
        button.onclick = () => filterDay(formatDate(date));
        if (i === 0) button.classList.add('active');
        filterButtonsContainer.appendChild(button);
    }
}

// Function to filter schedule by selected day
function filterDay(day) {
    const scheduleItems = document.getElementById('schedule-items');
    scheduleItems.innerHTML = '';

    scheduleData.filter(item => formatDate(item.date) === day).forEach(item => {
        const scheduleItem = createScheduleItem(item);
        scheduleItems.appendChild(scheduleItem);
    });

    // Toggle active class for date buttons
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === day) {
            button.classList.add('active');
        }
    });
}

// Function to create a schedule item element
const createScheduleItem = (item) => {
    const scheduleItem = document.createElement('div');
    scheduleItem.classList.add('schedule-item');

    const cinemaDiv = document.createElement('div');
    cinemaDiv.textContent = item.cinema;

    const infoButton = document.createElement('button');
    infoButton.innerHTML = '<i class="fas fa-map-marker-alt"></i>'; // Location icon
    infoButton.classList.add('info-button');
    infoButton.onclick = () => openModal(item.location);
    cinemaDiv.appendChild(infoButton);

    scheduleItem.appendChild(cinemaDiv);

    const timesDiv = document.createElement('div');
    timesDiv.classList.add('times');
    item.times.forEach(time => {
        const timeButton = document.createElement('button');
        timeButton.textContent = time;
        timeButton.onclick = () => bookTicket(item.cinema, time);
        timesDiv.appendChild(timeButton);
    });

    scheduleItem.appendChild(timesDiv);

    return scheduleItem;
};

// Function to book a ticket
// Function to book a ticket
function bookTicket(cinema, time) {
    // Create a new ticket object with additional details
    const newTicket = {
        theater: cinema,
        date: new Date().toLocaleDateString(),
        time: time
    };

    // Push the new ticket to the transferredArray
    transferredArray.tickets.push(newTicket);

    // Convert the array to JSON and encode it
    const updatedArrayJson = encodeURIComponent(JSON.stringify(transferredArray));

    // Construct the URL for the next page
    const nextPageUrl = `nw/book.html?data=${updatedArrayJson}`;

    // Redirect to the next page
    window.location.href = nextPageUrl;
}


// Function to open modal with theater location
function openModal(location) {
    const modal = document.getElementById('modal');
    const locationIframe = document.getElementById('location-iframe');
    locationIframe.src = location;
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Initial setup
createFilterButtons();
filterDay(formatDate(new Date()));
