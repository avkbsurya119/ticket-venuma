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
        window.open("https://www.youtube.com/watch?v=Po3jStA673E", "_blank");
    });

document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 
 
    });

    const castList = [
        { name: 'Vijay', role: 'Actor', image: 'https://pbs.twimg.com/profile_images/1644061982239387648/4pxcTG5J_400x400.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Vijay_(actor)' },
	{ name: 'Trisha', role: 'Actress', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tisha_Krishnan_at_PS1_pre_release_event_%281%29_%28cropped%29.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Trisha_(actress)' },
    { name: 'Sanjay Dutt', role: 'Actor', image: 'https://filmfare.wwmindia.com/content/2024/may/sanjayduttthumbnail1716278443.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Sanjay_Dutt' },
	{ name: 'Arjun Sarja', role: 'Actor', image: 'https://m.media-amazon.com/images/M/MV5BYTFjNjNkYTMtNjQ4My00OGI4LWJjNDMtNTViYzY5ZmYxYzhmXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Arjun_Sarja' }
];

const crewList = [
        { name: 'Lokesh Kanagaraj', role: 'Director', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHhY1iUKTmbC33Sols0CplwOzN8GDu12lsWyPlxZ8fw&s', wikipedia: 'https://en.wikipedia.org/wiki/Lokesh_Kanagaraj' },
        { name: 'Lalit Kumar', role: 'Producer', image: 'https://m.behindwoods.com/tamil-movies/slideshow/vijay-sethupathi-nayanthara-kaathuvaakula-rendu-kaadhal-cast-and-crew-list/images/lalit-kumar-producer.png', wikipedia: '' },
        { name: 'Anirudh Ravichander', role: 'Music Director', image: 'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/10/14/anirudh.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Anirudh_Ravichander' },
];

const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action, Sci-Fi, Thriller",
    releaseDate: "19th October, 2023",
    posterImage: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
    backgroundImage: "https://images.filmibeat.com/img/2023/09/leotamilpostermain-1695213936.jpg",
    cast: [
      { name: 'Vijay', role: 'Actor' },
      { name: 'Trisha', role: 'Actress' },
      { name: 'Sanjay Dutt', role: 'Actor' },
      { name: 'Arjun Sarja', role: 'Actor' }
    ],
    crew: [
      { name: 'Lokesh Kanagaraj', role: 'Director' },
      { name: 'Lalit Kumar', role: 'Producer' },
      { name: 'Anirudh Ravichander', role: 'Music Director' }
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
