const popupDetails = [
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    featured_image: "./icons/Rectangle 21.png",
    image:"./icons/Group 105.png",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",

    "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    link_to_live_version: "https://johntefresh.github.io/Portfolio-Development/",
    link_source: "https://github.com/JohnteFresh"
  },
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    featured_image: "./icons/Rectangle 21 (1).png",
    image:"./icons/Group 105.png",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",

    "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    link_to_live_version: "https://johntefresh.github.io/Portfolio-Development/",
    link_source: "https://github.com/JohnteFresh"
  },
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    featured_image: "./icons/Rectangle 21 (2).png",
    image:"./icons/Group 105.png",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",

    "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    link_to_live_version: "https://johntefresh.github.io/Portfolio-Development/",
    link_source: "https://github.com/JohnteFresh"
  },
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    featured_image: "./icons/Rectangle 21 (3).png",
    image:"./icons/Group 105.png",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",

    "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    link_to_live_version: "https://johntefresh.github.io/Portfolio-Development/",
    link_source: "https://github.com/JohnteFresh"
  },
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    featured_image: "./icons/Rectangle 21 (4).png",
    image:"./icons/Group 105.png",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",

    "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    link_to_live_version: "https://johntefresh.github.io/Portfolio-Development/",
    link_source: "https://github.com/JohnteFresh"
  },
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    featured_image: "./icons/Rectangle 21 (5).png",
    image:"./icons/Group 105.png",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",

    "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    link_to_live_version: "https://johntefresh.github.io/Portfolio-Development/",
    link_source: "https://github.com/JohnteFresh"
  }
];

for (let i = 0; i < popupDetails.length; i += 1) {
  const popupCard = document.createElement('div');
  popupCard.id = `project-${i}`;
  popupCard.classList.add('project-details');

  const closeBtn = document.createElement('a');
  closeBtn.innerHTML = '<img src="icons/ic_cross.png">';
  closeBtn.classList.add('popup-close');
  popupCard.appendChild(closeBtn);

  const projectName = document.createElement('h2');
  projectName.textContent = popupDetails[i].name;
  projectName.classList.add('fonts', 'tech-color');
  popupCard.appendChild(projectName);

  const technologies = document.createElement('ul');
  technologies.innerHTML = `<li>${popupDetails[i].technologies[0]}</li>
  <li>${projectDetails[i].technologies[1]}</li>
  <li>${projectDetails[i].technologies[2]}</li>`;
  technologies.classList.add('fonts', 'tech-color');
  popupCard.appendChild(technologies);

  const img = document.createElement('div');
  img.classList.add('image-box');
  const featuredImage = document.createElement('img');
  featuredImage.src = popupDetails[i];
  featuredImage.classList.add('featured');
  img.appendChild(featuredImage);

  for (let j = 0; j < popupDetails[i].image.length; j += 1) {
    const subImage = document.createElement('img');
    subImage.src = popupDetails[i].image[j];
    subImage.classList.add('small-image');
    imageBox.appendChild(subImage);
  }

  