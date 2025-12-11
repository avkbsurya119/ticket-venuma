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
        window.open("https://www.youtube.com/watch?v=TcMBFSGVi1c", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });


    const castList = [
        { name: 'Robert Downey Jr', role: 'Actor', image: 'https://assets.telegraphindia.com/telegraph/2023/Apr/1680674805_robert-downey-jr.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Robert_Downey_Jr.' },
	{ name: 'Chris Evans', role: 'Actor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaKKeIBMezXzqQZqrrHQ4djGvXHK6oIt3bZe2gZ4ehMQUNT4jxzJrwuQpXcZNFTXsF8c&usqp=CAU', wikipedia: 'https://en.wikipedia.org/wiki/Chris_Evans_(actor)' },
    { name: 'Chris Hermsworth', role: 'Actor', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Chris_Hemsworth' },
	{ name: 'Josh Brolin', role: 'Actor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Josh_Brolin_LF.jpg/170px-Josh_Brolin_LF.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Josh_Brolin' }
];

const crewList = [
    { name: 'Joe Russo', role: 'Director', image: 'https://media.themoviedb.org/t/p/w500/ph1GRCWVKk6Mz9lMBrxKvlb6Imo.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Russo_brothers' },
    { name: 'Anthony Russo', role: 'Director', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/303030_v9_bc.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Russo_brothers' },
    { name: 'Kevin Feige', role: 'Producer', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Kevin_Feige' },
    { name: 'Alan Silvestri', role: 'Music Director', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAIGy2GMcw3Kq-qDeHomoNcvZhsjKQQYUpbo_0h9rsA&s', wikipedia: 'https://en.wikipedia.org/wiki/Alan_Silvestri' },
];

const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Adventure,Superhero,Science Fiction",
    releaseDate: "26th April, 2019",
    posterImage: "https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA.jpg?format=jpg&height=600&width=1200&fit=bounds",
    backgroundImage: "https://writinguntilragnarok.com/wp-content/uploads/2021/01/avengers-endgame-review.jpg?w=1200",
    cast: [
      { name: 'Robert Downey Jr', role: 'Actor' },
      { name: 'Chris Evans', role: 'Actor' },
      { name: 'Chris Hermsworth', role: 'Actor' },
      { name: 'Josh Brolin', role: 'Actor' }
    ],
    crew: [
      { name: 'Joe Russo', role: 'Director' },
       { name: 'Anthony Russo', role: 'Director' },
      { name: 'Kevin Feige', role: 'Producer' },
      { name: 'Alan Silvestri', role: 'Music Director' }
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
