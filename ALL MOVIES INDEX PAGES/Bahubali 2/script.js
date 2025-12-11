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
        window.open("https://www.youtube.com/watch?v=94BzBOpv42g", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });
    

    const castList = [
        { name: 'Prabhas', role: 'Actor', image: 'https://assets.gqindia.com/photos/5d67bccd92463800081c1bb4/4:3/w_1440,h_1080,c_limit/Prabhas%20movies%20.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Prabhas' },
	{ name: 'Rana Daggubati', role: 'Actor', image: 'https://thedailyguardian.com/wp-content/uploads/2021/03/Rana-Daggubati-1.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Rana_Daggubati' },
    { name: 'Anushka Shetty', role: 'Actress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIxegzgxqollGsBl62QlJ54TAZHzOz2BSQ57ZOd7PLzNwMxZRKgg5fsU2DU6RTDWn2eU&usqp=CAU', wikipedia: 'https://en.wikipedia.org/wiki/Anushka_Shetty' },
	{ name: 'Tamannaah Bhatia', role: 'Actress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fcWR9fYAJzh39_Dhr201wp6_NTD0LbL4tLDqIR5w2ON9kyzKajT3rfNrWssf7Z0Nmd4&usqp=CAU', wikipedia: 'https://en.wikipedia.org/wiki/Tamannaah_Bhatia' },
	{ name: 'Ramya Krishnan', role: 'Actress', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Ramya_Krishnan.jpg/220px-Ramya_Krishnan.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Ramya_Krishnan' }
];

const crewList = [
        { name: 'S.S Rajamouli', role: 'Director', image: 'https://img.jagranjosh.com/images/2022/March/2832022/SS-Rajamouli-Biography-RRR-director.jpg', wikipedia: 'https://en.wikipedia.org/wiki/S._S._Rajamouli' },
        { name: 'Shobu Yarlagadda', role: 'Producer', image: 'https://hyderabad.tie.org/wp-content/uploads/2018/06/Shobu-Yarlagadda.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Shobu_Yarlagadda_and_Prasad_Devineni' },
        { name: 'M.M Keeravani', role: 'Music Director', image: 'https://images.livemint.com/img/2023/01/16/1140x641/Keeravani_Golden_Globe_1673858215235_1673858215454_1673858215454.JPG', wikipedia: 'https://en.wikipedia.org/wiki/M._M._Keeravani' },
];
	
const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action,Period Drama, Rivalry",
    releaseDate: "28th April, 2017",
    posterImage: "https://onlookersmedia.in/wp-content/uploads/2016/10/baahubali-2-the-conclusion-first-look-poster-2.jpg",
    backgroundImage: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8819/1418819-i-966770c33cef",
    cast: [
      { name: 'Prabhas', role: 'Actor' },
      { name: 'Rana Daggubati', role: 'Actor' },
      { name: 'Anushka Shetty', role: 'Actress' },
      { name: 'Tamannaah Bhatia', role: 'Actress' },
      { name: 'Ramya Krishnan', role: 'Actress' }
    ],
    crew: [
      { name: 'S.S Rajamouli', role: 'Director' },
      { name: 'Shobu Yarlagadda', role: 'Producer' },
      { name: 'M.M Keeravani', role: 'Music Director' }
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
