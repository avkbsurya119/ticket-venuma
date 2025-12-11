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
        window.open("https://www.youtube.com/watch?v=rDoFiOjoC2Y", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });

    const castList = [
        { name: 'Prabhas', role: 'Actor', image: 'https://cdn.siasat.com/wp-content/uploads/2022/03/prabhas-1.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Prabhas' },
	    { name: 'Shraddha Kapoor', role: 'Actress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AE5_-JUh3MIBkvAJq3R7HB-fMJhC29DXpjT3e2HNmw&s', wikipedia: 'https://en.wikipedia.org/wiki/Shraddha_Kapoor' },
	    { name: 'Jackie Shroff', role: 'Actor', image: 'https://images.mubicdn.net/images/cast_member/30182/cache-108898-1427067311/image-w856.jpg?size=800x', wikipedia: 'https://en.wikipedia.org/wiki/Jackie_Shroff' }
];
const crewList = [
    { name: 'Sujeeth', role: 'Director', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/BeFunky-collage_-_2020-06-04T0.jpeg?size=690:388', wikipedia: 'https://en.wikipedia.org/wiki/Sujeeth' },
    { name: 'Bhushan Kumar', role: 'Producer', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bhushan_Kumar_at_the_launch_of_%E2%80%98Simran%E2%80%99_trailer.jpg/330px-Bhushan_Kumar_at_the_launch_of_%E2%80%98Simran%E2%80%99_trailer.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Bhushan_Kumar' },
    { name: 'Gibhran', role: 'Music Director', image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ghibran-1057249-29-06-2021-01-50-57.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Ghibran' },
];
const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action, Drama, Thriller",
    releaseDate: "30th August, 2019",
    posterImage: "https://m.media-amazon.com/images/M/MV5BNDExZjFiYjItMmM3OS00OGUxLTliMTctMzFhZDkzMmFhMzY1XkEyXkFqcGdeQXVyMTA1NTAyMjAw._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    backgroundImage: "https://survi.in/wp-content/uploads/2019/08/Survi-Review-Saaho-Review.jpeg",
    cast: [
      { name: 'Prabhas', role: 'Actor' },
      { name: 'Shradha kapoor', role: 'Actress' },
      { name: 'Jackie Shroff', role: 'Actor' }
    ],
    crew: [
      { name: 'Sujeeth', role: 'Director' },
      { name: 'Bhushan Kumar', role: 'Producer' },
      { name: 'Gibhran', role: 'Music Director' }
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
