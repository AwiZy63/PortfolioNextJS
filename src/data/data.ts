// Soul Serenade
import soulSerenadeImage1 from "@/public/soulserenade/Accueil.png";
import soulSerenadeImage2 from "@/public/soulserenade/Programme.png";
import soulSerenadeImage3 from "@/public/soulserenade/ProfilArtiste.png";
import soulSerenadeImage4 from "@/public/soulserenade/Reservations.png";
import soulSerenadeImage5 from "@/public/soulserenade/Contact.png";

// Plastic Duck App
import plasticDuckImage1 from "@/public/plasticduck/Home.png";
import plasticDuckImage2 from "@/public/plasticduck/HomeNav.png";
import plasticDuckImage3 from "@/public/plasticduck/MusicSelector.png";
import plasticDuckImage4 from "@/public/plasticduck/MusicSelectorView.png";
import plasticDuckImage5 from "@/public/plasticduck/News.png";
import plasticDuckImage6 from "@/public/plasticduck/PhotoSelector.png";
import plasticDuckImage7 from "@/public/plasticduck/Photo.png";
import plasticDuckImage8 from "@/public/plasticduck/Signup.png";
import plasticDuckImage9 from "@/public/plasticduck/Profile.png";
import plasticDuckImage10 from "@/public/plasticduck/AccountEdition.png";
import plasticDuckImage11 from "@/public/plasticduck/Contact.png";

// Swizen
import swizenImage1 from "@/public/swizen/Home.png";
import swizenImage2 from "@/public/swizen/SignIn.png";
import swizenImage3 from "@/public/swizen/SignUp.png";
import swizenImage4 from "@/public/swizen/Profile.png";

// Hyzen
import hyzenImage1 from "@/public/hyzen/Wireframe1.png";
import hyzenImage2 from "@/public/hyzen/Wireframe2.png";
import hyzenImage3 from "@/public/hyzen/Wireframe3.png";
import hyzenImage4 from "@/public/hyzen/Wireframe4.png";

// La Concordia
import laConcordiaImage1 from "@/public/laconcordia/News.png";
import laConcordiaImage2 from "@/public/laconcordia/News2.png";
import laConcordiaImage3 from "@/public/laconcordia/EventsAfter.png";
import laConcordiaImage4 from "@/public/laconcordia/EventsOld.png";
import laConcordiaImage5 from "@/public/laconcordia/GalleryHome.png";
import laConcordiaImage6 from "@/public/laconcordia/GalleryListing.png";
import laConcordiaImage7 from "@/public/laconcordia/GalleryView.png";
import laConcordiaImage8 from "@/public/laconcordia/MusicSchool.png";
import laConcordiaImage9 from "@/public/laconcordia/Band.png";
import laConcordiaImage10 from "@/public/laconcordia/Contact.png";
import laConcordiaImage11 from "@/public/laconcordia/SignUp.png";
import laConcordiaImage12 from "@/public/laconcordia/PanelProfile.png";

const projects: TProjects = [
    {
        id: "c8456gf1",
        title: "Soul Serenade",
        description: "",
        image: soulSerenadeImage1,
        images: [
            soulSerenadeImage1,
            soulSerenadeImage2,
            soulSerenadeImage3,
            soulSerenadeImage4,
            soulSerenadeImage5,
        ],
        technologies: ["HTML5", "Sass", "JavaScript"],
        github: "https://github.com/AwiZy63/Soul-Serenade/tree/main/dev",
        demo: "https://awizy63.github.io/Soul-Serenade/pages/index.html"
    },
    {
        id: "f4g5h6j7",
        title: "Plastic Duck App",
        description: "",
        image: plasticDuckImage1,
        images: [
            plasticDuckImage1,
            plasticDuckImage2,
            plasticDuckImage3,
            plasticDuckImage4,
            plasticDuckImage5,
            plasticDuckImage6,
            plasticDuckImage7,
            plasticDuckImage8,
            plasticDuckImage9,
            plasticDuckImage10,
            plasticDuckImage11,
        ],
        technologies: ["React Native", "Sass", "Firebase"],
        github: "https://github.com/AwiZy63/PlasticDuckApp/",
    },
    {
        id: "a1s2d3f4",
        title: "Swizen",
        description: "",
        image: swizenImage1,
        images: [
            swizenImage1,
            swizenImage2,
            swizenImage3,
            swizenImage4,
        ],
        technologies: ["MariaDB", "ExpressJS", "NodeJS", "JsonWebToken", "Socket.io", "Sequelize ORM", "Axios", "Cors", "Git", "Postman", "RESTFul API", "Linux", "joy", "validator"],
        github: "https://github.com/AwiZy63/Swizen-API/",
    },
    {
        id: "x1c2v3b4",
        title: "La Concordia",
        description: "",
        image: laConcordiaImage1,
        images: [
            laConcordiaImage1,
            laConcordiaImage2,
            laConcordiaImage3,
            laConcordiaImage4,
            laConcordiaImage5,
            laConcordiaImage6,
            laConcordiaImage7,
            laConcordiaImage8,
            laConcordiaImage9,
            laConcordiaImage10,
            laConcordiaImage11,
            laConcordiaImage12,
        ],
        technologies: ["ReactJS", "Sass", "Figma", "Git", "Axios", "Cors", "JsonWebToken", "MariaDB", "ExpressJS", "NodeJS", "Sequelize ORM", "Postman"],
        github: "https://github.com/Hyzen-dev/LaConcordia/",
        demo: "https://beta.laconcordia.fr/"
    },
    {
        id: "z9e8r7t6",
        title: "Hyzen",
        description: "",
        image: hyzenImage1,
        images: [
            hyzenImage1,
            hyzenImage2,
            hyzenImage3,
            hyzenImage4,
        ],
        technologies: ["ReactJS", "Sass", "Figma", "Git", "Postman", "Axios", "Cors", "JsonWebToken", "MariaDB", "ExpressJS", "NodeJS", "Sequelize ORM"],
        github: "https://github.com/Hyzen-dev/Hyzen-Portfolio",
        demo: "https://hyzen.fr"
    }
]

export { projects }