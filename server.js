const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use('/assets', express.static(path.join(__dirname, "assets")));

// ── Tool map: key → { label, icon, category } ──
const toolMap = {
    css:         { label: "CSS",          icon: "css.svg",           category: "development" },
    html:        { label: "HTML",         icon: "html.svg",          category: "development" },
    javascript:  { label: "JavaScript",   icon: "js.svg",            category: "development" },
    wordpress:   { label: "WordPress",    icon: "wordpress.png",     category: "development" },
    figma:       { label: "Figma",        icon: "Figma.svg",         category: "design"      },
    photoshop:   { label: "Photoshop",    icon: "Photoshop.svg",     category: "design"      },
    illustrator: { label: "Illustrator",  icon: "Illustrator.svg",   category: "design"      },
    indesign:    { label: "InDesign",     icon: "InDesign.svg",      category: "design"      },
    premiere:    { label: "Premiere Pro", icon: "Premiere Pro.svg",  category: "design"      },
    blender:     { label: "Blender",      icon: "blender-icon.svg",  category: "design"      },
    firefly:     { label: "Firefly",      icon: "firelfy.png",       category: "workflow"    },
    claude:      { label: "Claude",       icon: "claude-color.svg",  category: "workflow"    },
    chatgpt:     { label: "ChatGPT",      icon: "openai.svg",        category: "workflow"    },
    miro:        { label: "Miro",         icon: "Miro.svg",          category: "workflow"    },
};

const projects = [
    {
        id: 1,
        title: "TD Website - 2026",
        slug: "td-website",
        image: "/assets/projects/project_td/project_tdwebsite.svg",
        description: "Together with a team of designers and developers, I helped redesign the Total Design website following the launch of the agency's new brand identity. The challenge was to translate the refreshed visual language into a cohesive and engaging digital experience. My main contribution was within the design team, where I focused on shaping the website's visual design, user experience, and overall creative direction.  ",
        client: { name: "Total Design", url: "https://www.totaldesign.com" },
        tools: ["figma", "claude", "illustrator"],
        heroMedia: { type: "video", src: "/assets/projects/project_td/td-website.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project_td/homepage2.jpg",        align: "left"  },
            { type: "image", src: "/assets/projects/project_td/Related insights.jpg", align: "full"  },
            { type: "image", src: "/assets/projects/project_td/Footer.jpg",           align: "right" },
        ],
    },
    {
        id: 2,
        title: "Dutch Drought - 2026",
        slug: "dutch-drought",
        image: "/assets/projects/project_dutchdrought/project_dutchdrought.jpg",
        description: "This project was developed in collaboration with the Amsterdam University of Applied Sciences (HvA) and design agency Clever Franke. Together with Berend and Vincent, we worked from a shared briefing focused on creating interactive data visualisations of the Netherlands that deliver a strong “wow” factor and leave a lasting emotional impact on the user. Our concept explores the growing water scarcity in the Netherlands and the potential challenges this could cause in the future.",
        client: { name: "Clever Franke", url: "https://www.cleverfranke.com" },
        tools: ["figma", "illustrator"],
        heroMedia: { type: "video", src: "/assets/projects/project_dutchdrought/dutchdrought.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project_dutchdrought/Styleboard.svg",          align: "left"  },
            { type: "video", src: "/assets/projects/project_dutchdrought/drinkingwater.mp4",  align: "full"  },
            {
                type: "video",
                src: "/assets/projects/project_dutchdrought/Ijsselmeer.mp4",
                align: "with-text",
                text: {
                    side: "left",
                    title: "If the IJsselmeer were our only water source",
                    body: "This visual explores how quickly the IJsselmeer would be depleted if it had to supply all water consumption in the Netherlands. With an average consumption of 120 liters per person per day, the lake would be completely drained in approximately 8.3 years. This highlights the enormous pressure on freshwater resources and the importance of sustainable water management for the future."
                }
            },
            {
                type: "video",
                src: "/assets/projects/project_dutchdrought/infographic water.mp4",
                align: "with-text",
                text: {
                    side: "right",
                    title: "Water companies in the Netherlands and their sources",
                    body: "This visualization maps how Dutch water companies obtain their drinking water. Sources include groundwater, river water such as the Rhine and Meuse, and dune filtration systems. It illustrates the dependence on natural water cycles and the vulnerability of these systems under increasing demand and climate change."
                }
            },
        ],
    },
    {
        id: 3,
        title: "Bee project - 2025",
        slug: "bee",
        image: "/assets/projects/project_bee/project_bee.jpg",
        description: "In this project, I explored the decline of wild bee populations through a series of data visualizations. Of the 359 wild bee species found in the Netherlands, nearly 55% are threatened or have disappeared. The goal was to transform complex environmental data into an engaging and accessible experience. Through an interactive one-page website, I visualized the key factors contributing to this decline, using storytelling and interactive elements to raise awareness of the challenges facing wild bee populations.",
        client: { name: "Hogeschool van Amsterdam", url: "https://www.hva.nl/opleidingen/communication-and-multimedia-design" },
        tools: ["figma", "illustrator", "photoshop"],
        heroMedia: { type: "video", src: "/assets/projects/project_bee/project_bee_hero.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project_bee/Bee.svg",            align: "left"  },
            { type: "image", src: "/assets/projects/project_bee/Bees.svg",           align: "full"  },
            { type: "image", src: "/assets/projects/project_bee/Pesticides_bee.svg", align: "right" },
            { type: "image", src: "/assets/projects/project_bee/project_bee.svg",    align: "left"  },
        ],
    },
    {
        id: 4,
        title: "Stiho - 2025 Concept design",
        slug: "stiho",
        image: "/assets/projects/project-stiho/projectbanner.png",
        description: "For Stiho, I developed a concept for an AI-powered assistant integrated into the company’s mobile application. The goal of the concept was to explore how artificial intelligence could simplify and accelerate everyday tasks for construction professionals. The assistant was designed to support users in sharing and managing order lists, interpreting complex construction drawings, and editing orders through voice commands, creating a more efficient and hands-free workflow on-site. Throughout the project, I focused on designing an intuitive user experience that seamlessly integrated the assistant into the existing app ecosystem.",
        client: { name: "Stiho", url: "https://www.stiho.nl" },
        tools: ["figma", "photoshop"],
        heroMedia: { type: "video", src: "/assets/projects/project-stiho/presentatie-stiho.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project-stiho/designsystem.png",        align: "left"  },
            { type: "video", src: "/assets/projects/project-stiho/Notification.MP4",        align: "full"  },
            { type: "video", src: "/assets/projects/project-stiho/Sharewithcolleges.MP4",   align: "right" },
            { type: "video", src: "/assets/projects/project-stiho/constructionplan.MP4",    align: "left"  },
        ],
    },
    {
        id: 5,
        title: "Public Jazz - 2024",
        slug: "public-jazz",
        image: "/assets/projects/project_publicjazz/desktoppage.jpg",
        description: "For the Municipality of Rotterdam, I designed a one-page promotional website for the Public City Jazz Festival. The concept centered around expressing the layered nature of jazz through a dynamic visual language, using flowing wave elements and three-dimensional typography to create depth and movement. Warm color tones were chosen to reflect the energy and atmosphere of jazz music. The project included responsive designs for mobile, tablet, and desktop devices.",
        client: { name: "Hogeschool van Amsterdam", url: "https://www.hva.nl/opleidingen/communication-and-multimedia-design" },
        tools: ["figma", "illustrator", "miro", "blender"],
        heroMedia: { type: "video", src: "/assets/projects/project_publicjazz/Schermopname-2025-12-05-om-13.59.37.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project_publicjazz/tabletmenukaart-scaled.jpg",                    align: "left"  },
            { type: "image", src: "/assets/projects/project_publicjazz/psd_isolate_smartphone_mockup-scaled.jpg",      align: "full" },
            { type: "video", src: "/assets/projects/project_publicjazz/Animatie-public-city-jazz-MickvdLinden203.mp4", align: "right"  },
            { type: "image", src: "/assets/projects/project_publicjazz/psd_isolate_smartphone_mockup-kopie-scaled.jpg", align: "left" },
            { type: "image", src: "/assets/projects/project_publicjazz/desktoppage.jpg", align: "right" },
        ],
    },
    {
        id: 6,
        title: "Joy - 2023",
        slug: "joy",
        image: "/assets/projects/project_joy/09_Can_Mockup-scaled.jpg",
        description: "In this project, I created a visual identity and campaign to rebrand Joy, an old Dutch drink. The concept focuses on connection and social interaction, especially at festivals, positioning Joy as a drink that enhances shared experiences.",
        client: { name: "Mediacollege", url: "https://www.hva.nl/opleidingen/communication-and-multimedia-design" },
        tools: ["blender", "illustrator", "photoshop", "indesign"],
        heroMedia: { type: "video", src: "/assets/projects/project_joy/Joyy.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project_joy/2-stationery-mockup-scaled.jpg",       align: "left"  },
            { type: "image", src: "/assets/projects/project_joy/09_Can_Mockup-scaled.jpg",             align: "full"  },
            { type: "image", src: "/assets/projects/project_joy/Tshirt-Mockup-scaled.jpg",             align: "right" },
            { type: "image", src: "/assets/projects/project_joy/Instagram-Mockup-Template-scaled.jpg", align: "left"  },
            { type: "image", src: "/assets/projects/project_joy/Booth-Mockup-scaled.jpg",              align: "right" },
        ],
    },
    {
        id: 7,
        title: "Printed Bites - 2023",
        slug: "printed-bites",
        image: "/assets/projects/project_printedbites/Homepagina-scaled.jpg",
        description: "For the project Printed Bites I developed the brand identity and campaign for a fictional vegan fast-food restaurant set in a futuristic laboratory, where all food and drinks are produced through 3D printing. The concept combines innovation, sustainability, and technology, resulting in a brand that feels both modern and refreshing. To bring this vision to life, I created a cohesive visual identity and campaign materials that reflected the restaurant’s unique world and personality.",
        client: { name: "Mediacollege", url: "https://www.ma-web.nl/" },
        tools: ["blender", "illustrator", "photoshop", "indesign"],
        heroMedia: { type: "image", src: "/assets/projects/project_printedbites/Homepagina-scaled.jpg" },
        content: [
            { type: "image", src: "/assets/projects/project_printedbites/socialmedia-scaled.jpg",          align: "left"  },
            { type: "video", src: "/assets/projects/project_printedbites/filmpjesocialmedia-printedbites.mp4", align: "full" },
            { type: "image", src: "/assets/projects/project_printedbites/Poster-printedbites-scaled.jpg",  align: "right" },
            { type: "image", src: "/assets/projects/project_printedbites/Mockup-visitekaartje.jpg",        align: "left"  },
            { type: "image", src: "/assets/projects/project_printedbites/Tabletmenu-scaled.jpg",           align: "right" },
            { type: "image", src: "/assets/projects/project_printedbites/Gevelbelettering-scaled.jpg",    align: "left"  },
        ],
    },
    {
        id: 8,
        title: "Spacebeest - 2022",
        slug: "spacebeest",
        image: "/assets/projects/project_spacebeest/narrowcasting-spacebeest-beeld2.svg",
        description: "Spacebeest is a narrowcasting and branding project. I designed a dynamic visual system for digital signage that communicates the brand's playful and energetic personality across multiple screens.",
        client: { name: "OBA Amsterdam", url: "https://oba.nl/nl" },
        tools: ["illustrator", "premiere"],
        heroMedia: { type: "video", src: "/assets/projects/project_spacebeest/narrowcasting-spacebeest-beeld3.mp4" },
        content: [
            { type: "image", src: "/assets/projects/project_spacebeest/narrowcasting-spacebeest-beeld2.svg", align: "left"  },
            { type: "image", src: "/assets/projects/project_spacebeest/SpacebeestIMG.png" , align: "full" },
        ],
    },
];

// Voorkom browser caching van HTML pagina's
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

app.get("/debug", (req, res) => {
    const fs = require("fs");
    const assetsPath = path.join(__dirname, "assets");
    try {
        const files = fs.readdirSync(assetsPath);
        res.json({ __dirname, assetsPath, files, exists: true });
    } catch(e) {
        res.json({ __dirname, assetsPath, error: e.message, exists: false });
    }
});

app.get("/", (req, res) => {
    res.render("index", { title: "Home", projects });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects", projects });
});

app.get("/projects/:slug", (req, res) => {
    const project = projects.find(p => p.slug === req.params.slug);
    if (!project) return res.status(404).send("Project niet gevonden");
    res.render("project-detail", { title: project.title, project, toolMap });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});
