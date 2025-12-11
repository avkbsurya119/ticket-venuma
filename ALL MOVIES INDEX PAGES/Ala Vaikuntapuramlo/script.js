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
        window.open("https://www.youtube.com/watch?v=SkENAjfVoNI", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
        
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 
    });


    const castList = [
        { name: 'Allu Arjun', role: 'Actor', image: 'https://www.cinejosh.com/newsimg/newsmainimg/lean-look-of-allu-arjun-becomes-trending-topic_b_0203241123.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Allu_Arjun' },
	{ name: 'Pooja Hegde', role: 'Actress', image: 'https://www.harpersbazaararabia.com/cloud/2023/04/24/pooja-hegde.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Pooja_Hegde' },
	{ name: 'Samuthrakarani', role: 'Actor', image: 'https://static.toiimg.com/thumb/61410207.cms?width=170&height=240', wikipedia: 'https://en.wikipedia.org/wiki/Samuthirakani' }
];
const crewList = [
        { name: 'Trivikram', role: 'Director', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58oeKtfLwFR2Q701XXeT5fVFUGNpDodHI_sLoMGTcyL1dac0n_Jt6PcMM6nscuQeiWFs&usqp=CAU', wikipedia: 'https://en.wikipedia.org/wiki/Trivikram_Srinivas' },
        { name: 'Allu Aravind', role: 'Producer', image: 'https://static.toiimg.com/thumb/msid-80197058,width-400,resizemode-4/80197058.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Allu_Aravind' },
        { name: 'S.S Thaman', role: 'Music Director', image: 'https://images.filmibeat.com/img/2022/11/1628509998-sthaman-1668580577.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Thaman_S' },
];

const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action, Drama, Family",
    releaseDate: "12th January, 2020",
    posterImage: "https://sund-images.sunnxt.com/99328/1000x1500_AlaVaikunthapurramuloo_99328_ab5f1db7-59ab-4ae3-b909-b238adf4c29d.jpg",
    backgroundImage: "https://cdn.123telugu.com/content/wp-content/uploads/2020/01/Ala-Vaikuntapuramulo.jpg",
    cast: [
      { name: 'Allu Arjun', role: 'Actor' },
      { name: 'Pooja Hegde', role: 'Actress' },
      { name: 'Samuthrakarani', role: 'Actor' }
    ],
    crew: [
      { name: 'Trivikram', role: 'Director' },
      { name: 'Allu Aravind', role: 'Producer' },
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
