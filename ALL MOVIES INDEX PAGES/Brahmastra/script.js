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
        window.open("https://www.youtube.com/watch?v=BUjXzrgntcY", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });


    const castList = [
        { name: 'Ranbir Kapoor', role: 'Actor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ranbir_Kapoor.jpg/170px-Ranbir_Kapoor.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Ranbir_Kapoor' },
	    { name: 'Alia Bhatt', role: 'Actress', image: 'https://assets.telegraphindia.com/telegraph/2023/Aug/1691568668_cms-3.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Alia_Bhatt' },
	    { name: 'Amitab Bachchan', role: 'Actor', image: 'https://www.bollywoodhungama.com/wp-content/uploads/2021/08/5-of-Amitabh-Bachchans-finest-suspense-thrillers-1.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Amitabh_Bachchan' },
        { name: 'Mouni Roy', role: 'Actress', image: 'https://www.informalnewz.com/wp-content/uploads/2022/11/Mouni-Roy-2-1.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Mouni_Roy' }
];

const crewList = [
    { name: 'Ayan MUkerjee', role: 'Director', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ayan_mukherji.jpg/220px-Ayan_mukherji.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Ayan_Mukerji' },
    { name: 'Karan Johar', role: 'Producer', image: 'https://www.indextap.com/blog/wp-content/uploads/2023/12/Karan-Johar-House.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Karan_Johar' },
    { name: 'Pritam', role: 'Music Director', image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj', wikipedia: 'https://en.wikipedia.org/wiki/Pritam' }
];

const movieDetails = {
    title: document.getElementById('movie-title').innerText,
    genre: "Action, Adventure, Fantasy",
    releaseDate: "9th September, 2022",
    posterImage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/brahmastra-et00063710-1661162101.jpg",
    backgroundImage: "https://assets-in.bmscdn.com/discovery-catalog/events/et00063710-eycylbxjgm-landscape.jpg",
    cast: [
      { name: 'Ranbir Kapoor', role: 'Actor' },
      { name: 'Alia Bhatt', role: 'Actress' },
      { name: 'Amitabh Bachchan', role: 'Actor' },
      { name: 'Mouni Roy', role: 'Actress' }
    ],
    crew: [
      { name: 'Ayan MUkerjee', role: 'Director' },
      { name: 'Karan Johar', role: 'Producer' },
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
