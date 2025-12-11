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
        window.open("https://www.youtube.com/watch?v=NgBoMJy386M", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 
 
    });

    const castList = [
        { name: 'N.T Ramarao.JR', role: 'Actor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2-IGNFAXGT5uWepQyva4Nfq66uRthyutiWk72XPE7Q&s', wikipedia: 'https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr.' },
	{ name: 'Ram Charan', role: 'Actor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH8uJpLwYk0daXhCqWWB_iTIgCXNw3y1pgnfl8_Uo5Q&s', wikipedia: 'https://en.wikipedia.org/wiki/Ram_Charan' },
    { name: 'Alia Bhatt', role: 'Actress', image: 'https://1847884116.rsc.cdn77.org/hindi/gallery/actress/aliabhatt/aliaabhatt040823_8.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Alia_Bhatt' },
	{ name: 'Olivia Morris', role: 'Actress', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-0K0yml5tLp6Obdc5pb6nFvROmi9oKwv3eyMF_uLBSkRwui65oCUX_d1vOSK1kYfMDlILgpAA2xf-EHdoI8VIBNNuGZuY4UKSxyuZcHT88GFYWtcwqrJlqvI5IeVGy-H9rQ34z5CxBZ5j0R2SRZPVn2Jkieifquk_BOX32We8oz_drZTTwFFXZVSGUP-r/w1200-h630-p-k-no-nu/olivia%20Morris%20Biography%20-%20TheMoviesz%20com.webp', wikipedia: 'https://en.wikipedia.org/wiki/Olivia_Morris' },
	{ name: 'Ray Stevenson', role: 'Actor', image: 'https://pyxis.nymag.com/v1/imgs/995/c64/478a30d4cb3e411018dc65f6ee04ce7ed8-ray-stevenson.1x.rsquare.w1400.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Ray_Stevenson' }
];
const crewList = [
    { name: 'S.S Rajamouli', role: 'Director', image: 'https://img.jagranjosh.com/images/2022/March/2832022/SS-Rajamouli-Biography-RRR-director.jpg', wikipedia: 'https://en.wikipedia.org/wiki/S._S._Rajamouli' },
    { name: 'DVV Danayya', role: 'Producer', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/Danayya.jpeg?size=1200:675', wikipedia: 'https://en.wikipedia.org/wiki/D._V._V._Danayya' },
    { name: 'M.M Keeravani', role: 'Music Director', image: 'https://images.livemint.com/img/2023/01/16/1140x641/Keeravani_Golden_Globe_1673858215235_1673858215454_1673858215454.JPG', wikipedia: 'https://en.wikipedia.org/wiki/M._M._Keeravani' },
];
const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action, Period Drama, Thriller,Frictional",
    releaseDate: "25th March, 2022",
    posterImage: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    backgroundImage: "https://media.mpcvfx.com/app/uploads/2022/06/RRR.jpg",
    cast: [
      { name: 'N.T Ramarao.JR', role: 'Actor' },
      { name: 'Ram Charan', role: 'Actor' },
      { name: 'Alia Bhatt', role: 'Actress' },
      { name: 'Olivia Morris', role: 'Actress' },
      { name: 'Ray Stevenson', role: 'Actor' }
    ],
    crew: [
      { name: 'S.S Rajamouli', role: 'Director' },
      { name: 'DVV Danayya', role: 'Producer' },
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
