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
        window.open("https://www.youtube.com/watch?v=bDTUFufX-1s", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });

    const castList = [
        { name: 'Yash', role: 'Actor', image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Yash_Gowda' },
	{ name: 'Sanjay Dutt', role: 'Actor', image: 'https://static.toiimg.com/thumb/msid-98233110,width-400,resizemode-4/98233110.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Sanjay_Dutt' },
    { name: 'Srinidhi Shetty', role: 'Actress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvxX2hxz9e_0Iqd2xChgN4kdwOn2MJToSF4vlFl0okw&s', wikipedia: 'https://en.wikipedia.org/wiki/Srinidhi_Shetty' },
	{ name: 'Prakash Raj', role: 'Actor', image: 'https://images.filmibeat.com/img/popcorn/profile_photos/prakash-raj-20230718123643-152.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Prakash_Raj' }
];
 
const crewList = [
    { name: 'Prasanth Neel', role: 'Director', image: 'https://www.m9.news/wp-content/uploads/2023/12/Prashanth-Neel-3.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Prashanth_Neel' },
    { name: 'Vijay Kiragandur', role: 'Producer', image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-kiragandur-2034433-1708159929.jpg', wikipedia: '' },
    { name: 'Ravi Basrur', role: 'Music Director', image: 'https://yt3.googleusercontent.com/2PqcCIbQaqGLFBcVi4eS063E1bUTyuX4-g9Z16exJ1cH5qF0jRTsSk8_6wKn0mxAKTyeaN9K3Q=s900-c-k-c0x00ffffff-no-rj', wikipedia: 'https://en.wikipedia.org/wiki/Ravi_Basrur' },
];
    
const movieDetails = {
        title: document.getElementById('movie-title').innerText,
        genre: "Action, Drama, Thriller",
        releaseDate: "14th April, 2022",
        posterImage: "https://img.indiaforums.com/movie/350x525/6/335-kgf-chapter-2.jpg?c=3oF269",
        backgroundImage: "https://bbcdn.bollywoodbubble.com/wp-content/uploads/2021/05/KGF-Chapter-2-runtime-1.jpg",
        cast: [
          { name: 'Yash', role: 'Actor' },
          { name: 'Sanjay Dutt', role: 'Actor' },
          { name: 'Srinidhi Shetty', role: 'Actress' },
          { name: 'Prakash Raj', role: 'Actor' }
        ],
        crew: [
          { name: 'Prasanth Neel', role: 'Director' },
          { name: 'Vijay Kiragandur', role: 'Producer' },
          { name: 'Ravi Basrur', role: 'Music Director' }
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
