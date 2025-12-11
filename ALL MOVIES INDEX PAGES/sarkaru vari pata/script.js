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
        window.open("https://www.youtube.com/watch?v=tVr9v3o7iHY", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });

    const castList = [
     { name: 'Mahesh Babu', role: 'Actor', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Mahesh_Babu_birthday_1_x.jpeg?VersionId=VpLENehfBxNxhpOYjogPELdZrXXCcbU5', wikipedia: 'https://en.wikipedia.org/wiki/Pawan_Kalyan' },
	 { name: 'Keerthy Suresh', role: 'Actress', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Keerthy_Suresh_at_Bhola_Shankar_pre_release_event_%281%29_%28cropped%29.jpg/1200px-Keerthy_Suresh_at_Bhola_Shankar_pre_release_event_%281%29_%28cropped%29.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Pawan_Kalyan' },
	 { name: 'Samuthirakani ', role: 'Actor', image: 'https://media.themoviedb.org/t/p/w500/hicCPOdDfSRCEYkeb9g53FOY19A.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Pawan_Kalyan' }
];

const crewList = [
    { name: 'Parasuram', role: 'Director', image: 'https://assets.thehansindia.com/h-upload/2020/03/03/950394-parasuram.webp', wikipedia: 'https://en.wikipedia.org/wiki/Parasuram_(director)' },
    { name: 'Naveen Yerneni', role: 'Producer', image: 'https://www.m9.news/wp-content/uploads/2023/08/Mythri-Movie-Makers.jpg', wikipedia: '' },
    { name: 'S.S Thaman', role: 'Music Director', image: 'https://images.filmibeat.com/img/2022/11/1628509998-sthaman-1668580577.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Thaman_S' },
];
const movieDetails = {
        title: document.getElementById('movie-title').innerText,
        genre: "Action, Drama, Social Message",
        releaseDate: "12th May, 2022",
        posterImage: "https://images.static-bluray.com/products/20/129336_1_front.jpg",
        backgroundImage: "https://www.filmibeat.com/img/2021/08/sarkaruvaaripaata-1628333427.jpg",
        cast: [
          { name: 'Mahesh Babu', role: 'Actor' },
          { name: 'Keerthy Suresh', role: 'Actress' },
          { name: 'Samuthirakarani', role: 'Actor' }
        ],
        crew: [
          { name: 'Parasuram', role: 'Director' },
          { name: 'Naveen Yerneni', role: 'Producer' },
          { name: 'S.S Thaman', role: 'Music Director' }
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
