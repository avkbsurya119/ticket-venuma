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
        window.open("https://www.youtube.com/watch?v=rc61YHl1PFY", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });

    const castList = [
        { name: 'N. T. Rama Rao Jr.', role: 'Actor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2-IGNFAXGT5uWepQyva4Nfq66uRthyutiWk72XPE7Q&s', wikipedia: 'https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr.' },
	    { name: 'Janhvi Kapoor', role: 'Actress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFd-ou-EzZg80O5ESk0rY79gsxMboiYtvlaZnN55GTK11MNA1Rux9s86sHoRplcO9C2ho&usqp=CAU', wikipedia: 'https://en.wikipedia.org/wiki/Janhvi_Kapoor' },
	    { name: 'Saif Ali Khan', role: 'Actor', image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-161189,resizemode-75,msid-77734783/magazines/panache/saif-ali-khan-coming-up-with-an-autobiography-in-2021.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Saif_Ali_Khan' }
];


const crewList = [
       { name: 'Koratala Siva', role: 'Director', image: 'https://pbs.twimg.com/profile_images/1547454408161521665/iJUDF7Ps_400x400.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Koratala_Siva' },
       { name: 'Nandamuri Kalyan Ram', role: 'Producer', image: 'https://i.pinimg.com/736x/f4/a1/87/f4a187f76cd572da5b505152007d68fb.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Nandamuri_Kalyan_Ram' },
       { name: 'Anirudh Ravichander', role: 'Music Director', image: 'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/10/14/anirudh.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Anirudh_Ravichander' },
];
const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action, Thriller",
    releaseDate: "10th October, 2024",
    posterImage: "https://m.media-amazon.com/images/M/MV5BYmYyYzZkZTEtOGNjYy00ZWUyLWFiYzYtYjViMzU1ZDk4ODhiXkEyXkFqcGdeQXVyNzI4NjYyMzk@._V1_.jpg",
    backgroundImage: "https://www.indiaherald.com/Assets/ArticleUpload/202418225713448_GDUrDOzbYAA1O8y.jpeg",
    cast: [
      { name: 'NTR Jr', role: 'Actor' },
      { name: 'Jahnvi Kapoor', role: 'Actress' },
      { name: 'Saif Ali Khan', role: 'Actor' }
    ],
    crew: [
      { name: 'Koratala Siva', role: 'Director' },
      { name: 'Kalyan Ram', role: 'Producer' },
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
