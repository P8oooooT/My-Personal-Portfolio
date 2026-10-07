const handburger = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu");
const nav_items = document.querySelectorAll(".mobile-nav-item");
const main_project = document.querySelector(".main-project");
const other_projects = document.querySelector(".other-projects");
const modalCloseButton = document.querySelector(".fa-xmark");

const projects = [
    {
        id: 0,
        title: "Multi-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: true,
        img: "../assets/images/placeholder1.png",
        sourcelink: "#",
        livelink: "#",
    },
    {
        id: 1,
        title: "Single-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false,
        img: "../assets/images/placeholder2.png",
        sourcelink: "#",
        livelink: "#",
    },
    {
        id: 2,
        title: "Multi-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false,
        img: "../assets/images/placeholder1.png",
    },
    {
        id: 3,
        title: "Multi-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false,
        img: "../assets/images/placeholder1.png",
        sourcelink: "#",
        livelink: "#",
    },
    {
        id: 4,
        title: "Multi-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false,
        img: "../assets/images/placeholder1.png",
        sourcelink: "#",
        livelink: "#",
    },
    {
        id: 5,
        title: "Multi-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false,
        img: "../assets/images/placeholder1.png",
        sourcelink: "#",
        livelink: "#",
    },
    {
        id: 6,
        title: "Multi-Post stories",
        description: "A daily selection of privately personalized reads; no accounts or sign- ups required.This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false,
        img: "../assets/images/placeholder1.png",
        sourcelink: "#",
        livelink: "#",
    }

]

function toggleMenu() {
    mobileMenu.classList.toggle("active");
    handburger.classList.toggle("fa-bars");
    handburger.classList.toggle("fa-xmark");
    document.body.classList.toggle("hideOverflow");
}

handburger.addEventListener("click", toggleMenu);

for (let item of nav_items) {
    item.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        handburger.classList.toggle("fa-bars");
        handburger.classList.toggle("fa-xmark");
        document.body.classList.toggle("hideOverflow");
    })
}


for (let project of projects) {
    // const projectElement = document.createElement("div");

    if (project.featured) {
        // projectElement.classList.add("featured-project");
        main_project.innerHTML = `
        <div class= "mg-container">
          <img src="${project.img}" alt="${project.title}">
        </div>
        <div class="description">
          <h5>${project.title}</h5>
          <p>${project.description}</p>

          <div class="tech-stacks">
          ${project.technologies.map((technology) => `<span>${technology}</span>`)
                .join("")
            }
          </div>
          <button data-id=${project.id} class="see_project"> See Project </button>
        </div>
        `;
    }
    else {
        const newContainer = document.createElement("div");
        newContainer.classList.add("project");
        newContainer.innerHTML = `
        <div class ="project-img-container">
            <img src="${project.img}" alt="${project.title}">
        </div>

        <div class="project-description">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
            <div class="project-tech-stack">
                ${project.technologies.map((technology) => `<span>${technology}</span>`)
                .join("")
            }
            </div>
        </div>

        <div class="project-hover-display">
                 <button data-id=${project.id} class="see_project"> See Project </button>
            </div>
        `;
        other_projects.appendChild(newContainer);
    }


    const projectsButtons = document.querySelectorAll(".see_project");
    const modalOverlay = document.querySelector("#modal-overlay");
    const modalTitle = document.querySelector(".title");
    const technologies = document.querySelector(".modal-technologies");
    const modalImage = document.querySelector(".modal-img");
    const modalDescription = document.querySelector(".modal-description");
    const modalLiveButton = document.querySelector(".live-btn");
    const modalSourceButton = document.querySelector(".source-btn");


    for(let button of projectsButtons){
        button.addEventListener("click", () => {
            const projectId = Number(button.dataset.id);
            const project = projects.find((item) => item.id === projectId);
            modalTitle.textContent =project.title;
            technologies.innerHTML = project.technologies.map((tech) => `<span> ${tech}</span>`)
            .join("");

            modalImage.src = project.img;
            modalImage.alt = project.title;
            modalDescription.textContent = project.description;
            modalLiveButton.href = project.livelink || "#";
            modalSourceButton.href = project.sourcelink || "#";
            modalOverlay.style.display = "flex";
            document.documentElement.classList.add("modal-open");
            document.body.classList.add("modal-open");
        })
    }
    
    modalCloseButton.addEventListener("click", () => {
            modalOverlay.style.display = "none";
            document.documentElement.classList.remove("modal-open");
            document.body.classList.remove("modal-open");
        })
}

