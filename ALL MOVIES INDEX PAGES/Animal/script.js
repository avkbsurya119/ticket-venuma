document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });


    const openModalBtn = document.getElementById('rate-now-button');
    const closeModalBtn = document.getElementById('close-rating-form-btn');
    const modal = document.getElementById('rating-modal');
    const overlay = document.getElementById('modal-overlay');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', (event) => {
        if (event.target === overlay) {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    
    document.getElementById('watch-trailer-button').addEventListener('click', () => {
        window.open("https://www.youtube.com/watch?v=8FkLRUJj-o0", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 
    });

    const castList = [
        { name: 'Ranbir Kapoor', role: 'Actor', image: 'https://filmfare.wwmindia.com/content/2023/nov/animalranbirkapoor41700722296.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Ranbir_Kapoor' },
	    { name: 'Rashmika Mandanna', role: 'Actress', image: 'https://imagevars.gulfnews.com/2023/06/21/Rashmika-Mandanna._188ddfd005d_medium.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Rashmika_Mandanna' },
        { name: 'Anil Kapoor', role: 'Actor', image: 'https://images.news18.com/ibnlive/uploads/2022/07/anil-kapoor.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Anil_Kapoor' },
	    { name: 'Bobby Deol', role: 'Actor', image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/bobby-deol-338-1708943147.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Bobby_Deol' },
	    { name: 'Tripti Dimri', role: 'Actress', image: 'https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2024/02/09175831/Tripti-Dimri-Kundli-Analysis-Secret-Of-Being-A-Celebrity-Crush.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Triptii_Dimri' }
];

const crewList = [
    { name: 'Sandeep Reddy Vanga', role: 'Director', image: 'https://www.m9.news/wp-content/uploads/2023/12/Sandeep-Reddy-Vanga-4.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Sandeep_Reddy_Vanga' },
    { name: 'Bhusan Kumar', role: 'Producer', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bhushan_Kumar_at_the_launch_of_%E2%80%98Simran%E2%80%99_trailer.jpg/330px-Bhushan_Kumar_at_the_launch_of_%E2%80%98Simran%E2%80%99_trailer.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Bhushan_Kumar' },
    { name: 'Pritam', role: 'Music Director', image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj', wikipedia: 'https://en.wikipedia.org/wiki/Pritam' },
];
const movieDetails = {
        title: document.getElementById('movie-title').innerText,
        genre: "Action, Drama, Violence",
        releaseDate: "10th December, 2023",
        posterImage: "https://imgs.search.brave.com/Y3Cf9chExHuhPdIJAUcqgcvTh6jtIRj4UkzObfM-7bE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MTIvYW5pbWFsLTIw/MjMtbW92aWUtcG9z/dGVyLXNob3dpbmct/YS1tYW4td2l0aC1h/LWxpZ2h0ZXItc21v/a2luZy1hLWNpZ2Fy/ZXR0ZS5qcGVn",
        backgroundImage: "https://imgs.search.brave.com/frmoGbGhix-8eel-0HIAm_qjnGzitgedwwZFHG2BDfo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4LzA5/LzA1LzQ4MDkwNWZm/OTE5MGZkMDM3NDQ4/MjczYTdmMGQxMGM0/LmpwZw",
        cast: [
          { name: 'Ranbir Kapoor', role: 'Actor' },
          { name: 'Anil Kapoor', role: 'Actor' },
          { name: 'Rashmika Mandanna', role: 'Actress' },
          { name: 'Bobby Deol', role: 'Actor' },
          { name: 'Tripti Dimri', role: 'Actress' }
        ],
        crew: [
          { name: 'Sandeep Reddy Vanga', role: 'Director' },
          { name: 'Bhushan Kumar', role: 'Producer' },
          { name: 'Pritam', role: 'Music Director' }
        ]
      };

    const castListElement = document.getElementById('cast-list');
    castList.forEach(castMember => {
        const castMemberElement = document.createElement('div');
        castMemberElement.classList.add('cast-member');

        const castLink = document.createElement('a');
        castLink.href = castMember.wikipedia;
        castLink.target = "_blank";

        const castImage = document.createElement('img');
        castImage.src = castMember.image;
        castImage.alt = castMember.name;

        castLink.appendChild(castImage);

        const castName = document.createElement('p');
        castName.textContent = castMember.name;

        const castRole = document.createElement('p');
        castRole.textContent = castMember.role;

        castMemberElement.appendChild(castLink);
        castMemberElement.appendChild(castName);
        castMemberElement.appendChild(castRole);

        castListElement.appendChild(castMemberElement);
    });

    const crewListElement = document.getElementById('crew-list');
    crewList.forEach(crewMember => {
        const crewMemberElement = document.createElement('div');
        crewMemberElement.classList.add('crew-member');

        const crewLink = document.createElement('a');
        crewLink.href = crewMember.wikipedia;
        crewLink.target = "_blank";

        const crewImage = document.createElement('img');
        crewImage.src = crewMember.image;
        crewImage.alt = crewMember.name;

        crewLink.appendChild(crewImage);

        const crewName = document.createElement('p');
        crewName.textContent = crewMember.name;

        const crewRole = document.createElement('p');
        crewRole.textContent = crewMember.role;

        crewMemberElement.appendChild(crewLink);
        crewMemberElement.appendChild(crewName);
        crewMemberElement.appendChild(crewRole);

        crewListElement.appendChild(crewMemberElement);
    });
});
