const popupDetails = [
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './icons/images-popup/project-1-featured.svg',
    images: ['icons/images-popup/project-1-small-1.svg', 'icons/images-popup/project-1-small-2.svg', 'icons/images-popup/project-1-small-3.svg', 'icons/images-popup/project-1-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: 'icons/images-popup/project-2-featured.svg',
    images: ['icons/images-popup/project-2-small-1.svg', 'icons/images-popup/project-2-small-2.svg', 'icons/images-popup/project-2-small-3.svg', 'icons/images-popup/project-2-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: 'icons/images-popup/project-3-featured.svg',
    images: ['icons/images-popup/project-3-small-1.svg', 'icons/images-popup/project-3-small-2.svg', 'icons/images-popup/project-3-small-3.svg', 'icons/images-popup/project-3-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: 'icons/images-popup/project-4-featured.svg',
    images: ['icons/images-popup/project-4-small-1.svg', 'icons/images-popup/project-4-small-2.svg', 'icons/images-popup/project-4-small-3.svg', 'icons/images-popup/project-4-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: 'icons/images-popup/project-5-featured.svg',
    images: ['icons/images-popup/project-5-small-1.svg', 'icons/images-popup/project-5-small-2.svg', 'icons/images-popup/project-5-small-3.svg', 'icons/images-popup/project-5-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: 'icons/images-popup/project-6-featured.svg',
    images: ['icons/images-popup/project-6-small-1.svg', 'icons/images-popup/project-6-small-2.svg', 'icons/images-popup/project-6-small-3.svg', 'icons/images-popup/project-6-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: 'icons/images-popup/project-3-featured.svg',
    images: ['icons/images-popup/project-3-small-1.svg', 'icons/images-popup/project-3-small-2.svg', 'icons/images-popup/project-3-small-3.svg', 'icons/images-popup/project-3-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: '#',
    link_source: '#',
  },
];

for (let i = 0; i < popupDetails.length; i += 1) {
  const workSection = document.getElementById('project-container');
  const card = document.createElement('div');
  card.classList.add('work-card', `w${i + 1}`);

  const projectPreview = document.createElement('img');
  projectPreview.src = popupDetails[i].featured_image;
  projectPreview.classList.add('project-preview');
  card.appendChild(projectPreview);

  const workInfo = document.createElement('div');
  workInfo.classList.add('work-info');

  const cardProjectName = document.createElement('p');
  cardProjectName.textContent = popupDetails[i].name;
  cardProjectName.classList.add('poppins', 'project-name', 'white');
  workInfo.appendChild(cardProjectName);

  const cardTechnologies = document.createElement('ul');
  cardTechnologies.innerHTML = `<li>${popupDetails[i].technologies[0]}</li>
  <li>${popupDetails[i].technologies[1]}</li>
  <li>${popupDetails[i].technologies[2]}</li>`;
  cardTechnologies.classList.add('poppins', 'dark-blue', 'category-list');
  workInfo.appendChild(cardTechnologies);

  const seeProject = document.createElement('a');
  seeProject.textContent = 'See this project';
  seeProject.href = '#';
  seeProject.classList.add('see-project', 'white', 'poppins');
  workInfo.appendChild(seeProject);

  card.appendChild(workInfo);
  workSection.appendChild(card);
}

for (let i = 0; i < popupDetails.length; i += 1) {
  const popupCard = document.createElement('div');
  popupCard.id = `project-${i}`;
  popupCard.classList.add('project-details');

  const closeBtn = document.createElement('a');
  closeBtn.innerHTML = '&times;';
  closeBtn.classList.add('popup-close');
  popupCard.appendChild(closeBtn);

  const projectName = document.createElement('h2');
  projectName.textContent = popupDetails[i].name;
  projectName.classList.add('poppins', 'dark-blue');
  popupCard.appendChild(projectName);

  const technologies = document.createElement('ul');
  technologies.innerHTML = `<li>${popupDetails[i].technologies[0]}</li>
  <li>${popupDetails[i].technologies[1]}</li>
  <li>${popupDetails[i].technologies[2]}</li>`;
  technologies.classList.add('poppins', 'dark-blue');
  popupCard.appendChild(technologies);

  const imageBox = document.createElement('div');
  imageBox.classList.add('image-box');
  const featuredImage = document.createElement('img');
  featuredImage.src = popupDetails[i].images[0];
  featuredImage.classList.add('featured');
  imageBox.appendChild(featuredImage);

  for (let j = 0; j < popupDetails[i].images.length; j += 1) {
    const smallImage = document.createElement('img');
    smallImage.src = popupDetails[i].images[j];
    smallImage.classList.add('small-image');
    imageBox.appendChild(smallImage);
  }
  const nextImage = document.createElement('button');
  nextImage.innerHTML = '<img src="./icons/images-popup/Vector_5.svg">';
  nextImage.href = '#';
  nextImage.classList.add('next-image');
  imageBox.appendChild(nextImage);
  const previousImage = document.createElement('button');
  previousImage.innerHTML = '<img src="./icons/images-popup/Vector_4.svg">';
  previousImage.href = '#';
  previousImage.classList.add('previous-image');
  imageBox.appendChild(previousImage);
  popupCard.appendChild(imageBox);

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');
  popupCard.appendChild(projectDiv);

  for (let j = 0; j < popupDetails[i].description.length; j += 1) {
    const projectDecription = document.createElement('p');
    projectDecription.textContent = popupDetails[i].description[j];
    projectDecription.classList.add('poppins', 'dark-blue');
    projectDiv.appendChild(projectDecription);
  }

  const liveBtn = document.createElement('a');
  liveBtn.textContent = 'See live';
  liveBtn.href = popupDetails[i].link_version;
  liveBtn.classList.add('poppins', 'dark-blue', 'popup-link');
  projectDiv.appendChild(liveBtn);

  const sourceBtn = document.createElement('a');
  sourceBtn.textContent = 'See source';
  sourceBtn.href = popupDetails[i].link_source;
  sourceBtn.classList.add('poppins', 'dark-blue', 'popup-link');
  projectDiv.appendChild(sourceBtn);

  const previousProject = document.createElement('a');
  previousProject.textContent = 'Previous project';
  previousProject.href = '#';
  previousProject.classList.add('poppins', 'dark-blue', 'navigate-project', 'previous');
  projectDiv.appendChild(previousProject);

  const nextProject = document.createElement('a');
  nextProject.textContent = 'Next project';
  nextProject.href = '#';
  nextProject.classList.add('poppins', 'dark-blue', 'navigate-project', 'next');
  projectDiv.appendChild(nextProject);

  document.body.appendChild(popupCard);
}

const projectBtn = document.querySelectorAll('.see-project');
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const page = document.querySelectorAll('header, footer, section');
    for (let i = 0; i < page.length; i += 1) {
      page[i].classList.toggle('invisible');
    }
  });
}

const closeProjectBtn = document.querySelectorAll('.project-details .popup-close');
for (let i = 0; i < closeProjectBtn.length; i += 1) {
  closeProjectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const page = document.querySelectorAll('header, section, footer');
    for (let i = 0; i < page.length; i += 1) {
      page[i].classList.toggle('invisible');
    }
  });
}

const navigateNext = document.querySelectorAll('.next');
const navigatePrevious = document.querySelectorAll('.previous');
for (let i = 0; i < popupDetails.length; i += 1) {
  navigateNext[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const nextProject = document.getElementById(`project-${(i + 1) % 6}`);
    nextProject.classList.toggle('visible');
  });

  navigatePrevious[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const previousProject = document.getElementById(`project-${Math.abs((i - 1) % 6)}`);
    previousProject.classList.toggle('visible');
  });
}