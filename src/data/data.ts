// Soul Serenade
import soulSerenadeImage1 from "@/assets/soulserenade/Accueil.png";
import soulSerenadeImage2 from "@/assets/soulserenade/Programme.png";
import soulSerenadeImage3 from "@/assets/soulserenade/ProfilArtiste.png";
import soulSerenadeImage4 from "@/assets/soulserenade/Reservations.png";
import soulSerenadeImage5 from "@/assets/soulserenade/Contact.png";

// Plastic Duck App
import plasticDuckImage1 from "@/assets/plasticduck/Home.png";
import plasticDuckImage2 from "@/assets/plasticduck/HomeNav.png";
import plasticDuckImage3 from "@/assets/plasticduck/MusicSelector.png";
import plasticDuckImage4 from "@/assets/plasticduck/MusicSelectorView.png";
import plasticDuckImage5 from "@/assets/plasticduck/News.png";
import plasticDuckImage6 from "@/assets/plasticduck/PhotoSelector.png";
import plasticDuckImage7 from "@/assets/plasticduck/Photo.png";
import plasticDuckImage8 from "@/assets/plasticduck/Signup.png";
import plasticDuckImage9 from "@/assets/plasticduck/Profile.png";
import plasticDuckImage10 from "@/assets/plasticduck/AccountEdition.png";
import plasticDuckImage11 from "@/assets/plasticduck/Contact.png";

// Swizen
import swizenImage1 from "@/assets/swizen/Home.png";
import swizenImage2 from "@/assets/swizen/SignIn.png";
import swizenImage3 from "@/assets/swizen/SignUp.png";
import swizenImage4 from "@/assets/swizen/Profile.png";

// Hyzen
import hyzenImage1 from "@/assets/hyzen/Wireframe1.png";
import hyzenImage2 from "@/assets/hyzen/Wireframe2.png";
import hyzenImage3 from "@/assets/hyzen/Wireframe3.png";
import hyzenImage4 from "@/assets/hyzen/Wireframe4.png";

// La Concordia
import laConcordiaImage1 from "@/assets/laconcordia/News.png";
import laConcordiaImage2 from "@/assets/laconcordia/News2.png";
import laConcordiaImage3 from "@/assets/laconcordia/EventsAfter.png";
import laConcordiaImage4 from "@/assets/laconcordia/EventsOld.png";
import laConcordiaImage5 from "@/assets/laconcordia/GalleryHome.png";
import laConcordiaImage6 from "@/assets/laconcordia/GalleryListing.png";
import laConcordiaImage7 from "@/assets/laconcordia/GalleryView.png";
import laConcordiaImage8 from "@/assets/laconcordia/MusicSchool.png";
import laConcordiaImage9 from "@/assets/laconcordia/Band.png";
import laConcordiaImage10 from "@/assets/laconcordia/Contact.png";
import laConcordiaImage11 from "@/assets/laconcordia/SignUp.png";
import laConcordiaImage12 from "@/assets/laconcordia/PanelProfile.png";

// Portfolio NextJS
import portfolioNextJSImage1 from "@/assets/portfolio/Home.png";
import portfolioNextJSImage2 from "@/assets/portfolio/Contact.png";

const projects: TProjects = [
    {
        id: "c8456gf1",
        title: "Soul Serenade",
        description: "Site réalisé dans le cadre d'un projet bootcamp. Il s'agit d'un site qui doit présenter un festival de musique. Le site doit permettre de consulter la programmation, de réserver des places pour les concerts, de consulter les profils des artistes et de contacter les organisateurs. Le site doit être responsive et respecter les maquettes fournies.",
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
        description: "Application mobile réalisée avec React Native dans le cadre d'un projet lié à un groupe de musique, Les Plastic Duck. L'application doit permettre de consulter les actualités du groupe, de consulter les photos et vidéos, d'écouter la musique, de consulter les dates de concerts, de contacter le groupe et de s'inscrire à la newsletter. L'application doit être adaptée à tout supports et respecter les maquettes créées.",
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
        description: "Ce site est un projet personnel avec un ancien collègue de formation. Il s'agit d'un site d'hébergement de serveurs de jeux en ligne. Le site doit permettre de consulter les offres, de s'inscrire, de se connecter, de consulter son profil, de contacter le support et de consulter les actualités. Le site doit être responsive et respecter les maquettes fournies. Le site doit être sécurisé et les données doivent être stockées dans une base de données. Le site doit être accompagné d'une API qui permettra de gérer les utilisateurs, les offres, les actualités, les tickets de support et qui pourra communiquer avec l'API même du panel pour la création automatique de services. Je me suis occupé de la partie back-end sur ce projet.",
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
        description: "Ce site à été créé pour l'association musicale La Concordia à Loos en Gohelle. Le site doit permettre de consulter les actualités, les événements, la galerie, les informations de l'école de musique, l'harmonie, de contacter l'association et de s'inscrire. Le site est responsive, sécurisé et les données sont stockées dans une base de données. Le site est accompagné d'une API qui permet de gérer les utilisateurs, les actualités, les événements, la galerie, l'harmonie, les tickets de support etc.. Le site ne devrait pas tarder à être ouvert au grand publique.",
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
        description: "Ce site est la vitrine de mon Auto-Entreprise. Le site permet dont de consulter mes projets anciennement réalisés, les services proposés et de me contacter.",
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
    },
    {
        id: "q1w2e354",
        title: "Portfolio NextJS",
        description: "Ce site est celui sur lequel vous vous trouvez actuellement, il a été réaliser en une petite après midi pour me permettre de présenter mes projets de manière plus visuelle et de manière plus professionnelle (cela me permet aussi de justifier de mon experience en TypeScript et en NextJS).",
        image: portfolioNextJSImage1,
        images: [
            portfolioNextJSImage1,
            portfolioNextJSImage2,
        ],
        technologies: ["NextJS", "TypeScript", "TailwindCSS", "Git"],
        github: "https://github.com/AwiZy63/PortfolioNextJS",
        demo: "/"
    }
]

export { projects }