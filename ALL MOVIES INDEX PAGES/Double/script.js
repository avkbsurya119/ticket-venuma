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
        window.open("https://www.youtube.com/watch?v=mNJLwY0I_fc", "_blank");
    });

    document.getElementById('book-tickets-button').addEventListener('click', () => {
        const arrayJson = JSON.stringify(movieDetails);
  
        const encodedArrayJson = encodeURIComponent(arrayJson);
  
        window.location.href = `Threater/index.html?data=${encodedArrayJson}` 

    });


    const castList = [
        { name: 'Ram', role: 'Actor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ram_at_Unnadi_Okate_Zindagi_interview.png/330px-Ram_at_Unnadi_Okate_Zindagi_interview.png', wikipedia: 'https://en.wikipedia.org/wiki/Ram_Pothineni' },
	    { name: 'Kayva Thapar', role: 'Actress', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kavya_Thapar_at_Eagle_event_%28cropped%29.png/330px-Kavya_Thapar_at_Eagle_event_%28cropped%29.png', wikipedia: 'https://en.wikipedia.org/wiki/Kavya_Thapar' },
	    { name: 'Sanjay Dutt', role: 'Actor', image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Sanjay_Dutt_at_Mumbai_Airport%2C_2018_%28cropped%29.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Sanjay_Dutt' }
    ];

    const crewList = [
        { name: 'Puri Jagannadh', role: 'Director', image: 'https://www.telugu360.com/wp-content/uploads/2021/06/Puri-Jagannadh.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Puri_Jagannadh' },
        { name: 'Charmy Kaur', role: 'Producer', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Charmi_Kaur_CCL_updates.jpg/330px-Charmi_Kaur_CCL_updates.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Charmy_Kaur' },
        { name: 'Mani Sharma', role: 'Music Director', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Manisharma.jpg/330px-Manisharma.jpg', wikipedia: 'https://en.wikipedia.org/wiki/Mani_Sharma' },
    ];
	
    const movieDetails = {
        title: document.getElementById('movie-title').innerText,
        genre: "Action,Drama, Thriller",
        releaseDate: "5th July, 2024",
        posterImage: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/11/29/100-days-to-go-scaled.jpg?fit=320%2C480&quality=80&zoom=1&ssl=1",
        backgroundImage: "https://m.media-amazon.com/images/M/MV5BOGJkN2JlNWUtZmQ3MS00MDQ3LWFhNTgtOTAyMWQwZjBmNTEyXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
        cast: [
          { name: 'Ram', role: 'Actor' },
          { name: 'Kavya Thappar', role: 'Actress' },
          { name: 'Sanjay Dutt', role: 'Actor' }
        ],
        crew: [
          { name: 'Puri Jagannadh', role: 'Director' },
          { name: 'Charmy Kaur ',role: 'Producer' },
          { name: 'Mani Sharma', role: 'Music Director' }
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
