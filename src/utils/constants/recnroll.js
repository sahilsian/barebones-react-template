import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Home from "../../pages/index";
import Birthday from "../../../public/images/birthday.jpg"
import Golf from "../../../public/images/golf.jpg"
import Bowling_Full from "../../../public/images/bowling_full.jpg"
import Fish from "../../../public/images/fish.jpg"
import Sno_Fest_Logo from "../../../public/images/sno_fest_logo.png"
import Sno_Fest_Hero from "../../../public/images/sno_fest_hero.jpg"

export const tabs = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Schedule",
    route: "/events",
  },
  {
    name: "Sponsors",
    route: "/sponsors",
  }
]

export const themes = [
  {
    name: "Default",
    background: "#FFFFFF",
    text: "#000000",
    bordercolor: "#ECF0F9",
    margins: {
      pageMargin: 1280
    },
    colors: {
      color_main: "#FFFFFF",
      color_secondary: "#FDF4DD",
      color_ternary: "#6eb2b5",
      hyperlink: "#478865"
    }
  }
];

export const Navigation_Config = {
  alert_headline: "For more information, call us at:",
  alert_hyperlink_text: "+1 888-413-4433",
  navigation_heading: "Campbellton Snofest",
  navigation_subheading: "Campbellton, NB",
  cta_label: "See our Event Schedule",
  cta_route_to: "/events",
  navigation_logo: {
    src: Sno_Fest_Logo,
    width: 75,
    height: 75,
    alt: "Logo for SnoFest"
  }
}

export const Navigation_Config_FR = {
  alert_headline: "Pour plus d'informations, appelez-nous au :",
  alert_hyperlink_text: "+1 888-413-4433",
  navigation_heading: "Campbellton Snofest",
  navigation_subheading: "Campbellton, NB",
  cta_label: "Voir notre programme d'événements",
  cta_route_to: "/events",
  navigation_logo: {
    src: Sno_Fest_Logo,
    width: 75,
    height: 75,
    alt: "Logo de SnoFest"
  }
}


export const Hero_Config = {
  hero_heading: "Enjoy the Winter Magic",
  hero_subheading: "Come join us February 13th - 17th for the annual Campbellton Snofest.",
  hero_img: {
    src: "https://i.imgur.com/08wAnpN.jpeg",
    width: 3000,
    height: 2250,
    alt: "Hero image for snofest website of skiers on top of mountain"
  },
  hero_vid: null,
  primary_button_text: "See our Event Schedule",
  primary_button_href: "/events",
  secondary_button_text: "Sponsors",
  secondary_button_href: "/sponsors"
}

export const Hero_Config_FR = {
  hero_heading: "Profitez de la magie de l'hiver",
  hero_subheading: "Rejoignez-nous du 13 au 17 février pour le Campbellton Snofest annuel.",
  hero_img: {
    src: "https://i.imgur.com/08wAnpN.jpeg",
    width: 3000,
    height: 2250,
    alt: "Image principale du site Snofest montrant des skieurs au sommet d'une montagne"
  },
  hero_vid: null,
  primary_button_text: "Voir notre programme d'événements",
  primary_button_href: "/events",
  secondary_button_text: "Sponsors",
  secondary_button_href: "/sponsors"
}




export const Highlight_Config = {
  highlight_heading: "Annual Fun",
  highlight_subheading: "February 13th - 17th",
  highlight_arr: [
    {
      title: "Snofest Team",
      description: "",
      source: {
        src: "https://i.imgur.com/08wAnpN.jpeg",
        width: 3000,
        height: 2250,
        alt: "Hero image for snofest website of skiers on top of mountain"
      }
    },
    {
      title: "Snofest Village",
      description: "",
      source: {
        src: "https://i.imgur.com/KYzesVf.jpeg",
        width: 1536,
        height: 1534,
        alt: "Image of snofest snoman mascot"
      }
    },
    {
      title: "Snofest Activity",
      description: "",
      source: {
        src: "https://i.imgur.com/GbBi3Yn.jpeg",
        width: 4000,
        height: 3000,
        alt: "Image of snow man crafts"
      }
    },
    {
      title: "Elephant Snowman",
      description: "",
      source: {
        src: "https://i.imgur.com/sE6sz2l.jpeg",
        width: 1504,
        height: 1505,
        alt: "Image of elephant snow man"
      }
    },
    {
      title: "Spongebob Snowman",
      description: "",
      source: {
        src: "https://i.imgur.com/R6HvFex.jpeg",
        width: 3000,
        height: 2420,
        alt: "large spongebob snow man"
      }
    }
  ]
}

export const Highlight_Config_FR = {
  highlight_heading: "Divertissement annuel",
  highlight_subheading: "13 - 17 février",
  highlight_arr: [
    {
      title: "Équipe Snofest",
      description: "",
      source: {
        src: "https://i.imgur.com/08wAnpN.jpeg",
        width: 3000,
        height: 2250,
        alt: "Image principale du site Snofest montrant des skieurs au sommet d'une montagne"
      }
    },
    {
      title: "Village Snofest",
      description: "",
      source: {
        src: "https://i.imgur.com/KYzesVf.jpeg",
        width: 1536,
        height: 1534,
        alt: "Image de la mascotte bonhomme de neige de Snofest"
      }
    },
    {
      title: "Activité Snofest",
      description: "",
      source: {
        src: "https://i.imgur.com/GbBi3Yn.jpeg",
        width: 4000,
        height: 3000,
        alt: "Image d’artisanat de bonhommes de neige"
      }
    },
    {
      title: "Bonhomme de neige éléphant",
      description: "",
      source: {
        src: "https://i.imgur.com/sE6sz2l.jpeg",
        width: 1504,
        height: 1505,
        alt: "Image d'un bonhomme de neige en forme d'éléphant"
      }
    },
    {
      title: "Bonhomme de neige Spongebob",
      description: "",
      source: {
        src: "https://i.imgur.com/R6HvFex.jpeg",
        width: 3000,
        height: 2420,
        alt: "Grand bonhomme de neige Spongebob"
      }
    }
  ]
}


export const Image_Text_Full_Location = {
  descriptor: "LOTS OF FAMILY FUN",
  heading: "Campbellton's regional winter celebration",
  subheading: "Campbellton's regional winter celebration has a full week of fun in store for the whole family. Take in the entertainment at the Sno-Fest Village at Sugarloaf Provincial Park, find snow sculptures all over town, take part in special activities at the museum, library and art gallery, enjoy sleigh rides, tube sliding, skating, games, concerts and so much more. Don't miss the Family Day events!",
  image_source: {
    src: "https://i.imgur.com/oXMRY6E.jpeg",
    width: 4000,
    height: 3000,
    alt: "Sno Fest village"
  },
  cta_text: "Read More about Us",
  cta_link: "https://google.com"
}

export const Image_Text_Full_Location_FR = {
  descriptor: "BEAUCOUP DE PLAISIR EN FAMILLE",
  heading: "La célébration hivernale régionale de Campbellton",
  subheading: "La célébration hivernale régionale de Campbellton propose une semaine entière de divertissements pour toute la famille. Profitez des spectacles au Village Sno-Fest au parc provincial Sugarloaf, admirez les sculptures de neige dispersées dans toute la ville, participez à des activités spéciales au musée, à la bibliothèque et à la galerie d'art, profitez des balades en traîneau, de la glissade sur tube, du patinage, des jeux, des concerts et bien plus encore. Ne manquez pas les événements de la Journée de la famille !",
  image_source: {
    src: "https://i.imgur.com/oXMRY6E.jpeg",
    width: 4000,
    height: 3000,
    alt: "Village Sno-Fest"
  },
  cta_text: "En savoir plus sur nous",
  cta_link: "https://google.com"
}


export const Image_Text_Full_Activities = {
  descriptor: "WINTER WONDERLAND ADVENTURES",
  heading: "Exciting Activities for All Ages",
  subheading: "Experience a wide range of exciting winter activities during Campbellton's regional winter celebration! From thrilling snow tubing and ice skating to cozy sleigh rides, there's something for everyone. Visit the Sno-Fest Village for family-friendly fun, explore the snow sculptures around town, and enjoy concerts, games, and more. Make sure to join in on the special Family Day events!",
  image_source: {
    src: "https://i.imgur.com/J3XPizf.jpeg",
    width: 3000,
    height: 2625,
    alt: "Kids creating crafts in Sno Fest village"
  },
  cta_text: "Discover More Fun",
  cta_link: "https://google.com"
}

export const Image_Text_Full_Activities_FR = {
  descriptor: "AVENTURES DANS UN PAYS DES MERVEILLES HIVERNAL",
  heading: "Des activités passionnantes pour tous les âges",
  subheading: "Vivez une multitude d'activités hivernales excitantes lors de la célébration hivernale régionale de Campbellton ! Du tubing sur neige palpitant et du patinage sur glace aux balades en traîneau réconfortantes, il y en a pour tous les goûts. Visitez le Village Sno-Fest pour un plaisir en famille, explorez les sculptures de neige en ville et profitez de concerts, de jeux et bien plus encore. Ne manquez pas les événements spéciaux de la Journée de la famille !",
  image_source: {
    src: "https://i.imgur.com/J3XPizf.jpeg",
    width: 3000,
    height: 2625,
    alt: "Enfants réalisant des bricolages dans le village Sno-Fest"
  },
  cta_text: "Découvrez encore plus de plaisir",
  cta_link: "https://google.com"
}

export const Ongoing_Events = [
  {
    title: "Evening Illuminated Path",
    description: "Take a magical stroll through a beautifully lit winter pathway, where the snow sparkles under glowing lights, creating an unforgettable winter ambiance.",
    date: "All Throughout the Festival",
    time: "All Day",
    location: "Sugarloaf Provincial Park Campsite"

  },
  {
    title: 'Exhibit: "Winter 2025" by Local Member Artists',
    description: "Explore a stunning collection of winter-inspired artworks by talented local member artists. Celebrate the beauty of the season through painting, photography, and mixed media pieces.",
    date: "February 13th - 15th",
    time: "10:00 AM - 4:00 PM",
    location: "Restigouche Gallery"
  },
  {
    title: 'Boutique: Arts & Products',
    description: "Support local artists and artisans by browsing a unique selection of handmade crafts, paintings, jewelry, and winter-themed souvenirs.",
    date: "February 13th - 15th",
    time: "10:00 AM - 4:00 PM",
    location: "Restigouche Gallery"
  },
  {
    title: "Dive into a World of Reading, with an Icy Twist",
    description: "When you borrow a book, you leave with a coupon for a free Blizzard from Dairy Queen! Offer valid per person. while quantities last.",
    date: "February 13th - 15th",
    time: "10:00 AM - 4:00 PM",
    location: "Raymond Lagacé Public Library"
  },
  {
    title: "Fill Out a Ballot",
    description: "Fill out a ballot at the Sno-Fest Village mini putt station for a chance to win a basekt of activities.",
    date: "All Throughout the Festival",
    time: "All Day",
    location: "Sugarloaf Provincial Park Campsite"
  },

]

export const Ongoing_Events_FR = [
  {
    title: "Sentier illuminé en soirée",
    description: "Promenez-vous dans un sentier hivernal magnifiquement éclairé, où la neige scintille sous des lumières éclatantes, créant une ambiance hivernale inoubliable.",
    date: "Tout au long du festival",
    time: "Toute la journée",
    location: "Camping du parc provincial Sugarloaf"
  },
  {
    title: 'Exposition : "Hiver 2025" par les artistes membres locaux',
    description: "Découvrez une magnifique collection d'œuvres inspirées de l'hiver, réalisées par des artistes membres locaux talentueux. Célébrez la beauté de la saison à travers la peinture, la photographie et des œuvres en techniques mixtes.",
    date: "13 - 15 février",
    time: "10h00 - 16h00",
    location: "Galerie Restigouche"
  },
  {
    title: "Boutique : Arts et produits",
    description: "Soutenez les artistes et artisans locaux en explorant une sélection unique d'objets artisanaux, de peintures, de bijoux et de souvenirs sur le thème de l'hiver.",
    date: "13 - 15 février",
    time: "10h00 - 16h00",
    location: "Galerie Restigouche"
  },
  {
    title: "Plongez dans un monde de lecture avec une touche glacée",
    description: "Empruntez un livre et recevez un coupon pour un Blizzard gratuit chez Dairy Queen ! Offre valable une fois par personne, jusqu'à épuisement des stocks.",
    date: "13 - 15 février",
    time: "10h00 - 16h00",
    location: "Bibliothèque publique Raymond Lagacé"
  },
  {
    title: "Remplissez un bulletin de participation",
    description: "Remplissez un bulletin à la station de mini-golf du Village Sno-Fest pour courir la chance de gagner un panier d'activités.",
    date: "Tout au long du festival",
    time: "Toute la journée",
    location: "Camping du parc provincial Sugarloaf"
  }
]


export const Feb_8_Events = [
  {
    title: "Creation of Valentine's Day Cards",
    description: "Stop by the Campbellton Centennial Library to create Valentine's Day Cards that will be delivered to seniors in the community. All supplies provided. All ages welcome.",
    date: "February 8",
    time: "10:00 AM - 5:00 PM",
    location: "Campbellton Centennial Library"
  },
  {
    title: "Ice Sculptures",
    description: "Watch skilled sculptors transform blocks of ice into stunning works of art at Sugarloaf Provincial Park.",
    date: "February 8",
    time: "2:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "A Tribute to Motley Crüe",
    description: "Rock out to an electrifying tribute performance dedicated to Motley Crüe! Tickets are $25 (+HST & fees) and available at Hard Luck Woman Records and Ticketpro.",
    date: "February 8",
    time: "7:30 PM",
    location: "Alma Hall"
  }
];

export const Feb_8_Events_FR = [
  {
    title: "Création de cartes de Saint-Valentin",
    description: "Arrêtez-vous à la bibliothèque du centenaire de Campbellton pour créer des cartes de Saint-Valentin qui seront livrées aux aînés de la communauté. Tout le matériel est fourni. Tous les âges sont les bienvenus.",
    date: "8 février",
    time: "10h00 - 17h00",
    location: "Bibliothèque du centenaire de Campbellton"
  },
  {
    title: "Sculptures sur glace",
    description: "Regardez des sculpteurs talentueux transformer des blocs de glace en œuvres d'art impressionnantes au parc provincial Sugarloaf.",
    date: "8 février",
    time: "14h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Hommage à Mötley Crüe",
    description: "Vibrez au son d'une performance électrisante en hommage à Mötley Crüe ! Les billets sont à 25 $ (+TVH & frais) et disponibles chez Hard Luck Woman Records et Ticketpro.",
    date: "8 février",
    time: "19h30",
    location: "Alma Hall"
  }
];


export const Feb_13_Events = [
  {
    title: "Guided Tours of the Athol House Museum",
    description: "Discover the history of our county and its three founding cultures: Mi'kmaq, Acadian, and Scottish.",
    date: "February 13",
    time: "11:00 AM - 4:00 PM",
    location: "Restigouche Gallery"
  },
  {
    title: "Zentangle Club",
    description: "Join the Campbellton Centennial Library to relax and create something beautiful. Open to ages 5 and up.",
    date: "February 13",
    time: "6:00 PM",
    location: "Campbellton Centennial Library"
  },
  {
    title: "A Tribute to the Former Atholville Carnaval Mascot",
    description: "A special tribute event organized by the Campbellton Municipal Council.",
    date: "February 13",
    time: "6:00 PM",
    location: "Alma Hall"
  },
  {
    title: "Sno-Fest Night Life",
    description: "Enjoy live music performances by local artists at various local bars.",
    date: "February 13",
    time: "Evening",
    location: "Various local bars"
  },
  {
    title: "Live Music: Danny Maltais",
    description: "Enjoy a performance by Danny Maltais as part of the Sno-Fest Night Life event.",
    date: "February 13",
    time: "7:30 PM",
    location: "Restigouche Snowmobile Club"
  }
];

export const Feb_13_Events_FR = [
  {
    title: "Visites guidées du musée Athol House",
    description: "Découvrez l'histoire de notre comté et de ses trois cultures fondatrices : Mi'kmaq, Acadienne et Écossaise.",
    date: "13 février",
    time: "11h00 - 16h00",
    location: "Galerie Restigouche"
  },
  {
    title: "Club Zentangle",
    description: "Rejoignez la bibliothèque du centenaire de Campbellton pour vous détendre et créer quelque chose de beau. Ouvert aux 5 ans et plus.",
    date: "13 février",
    time: "18h00",
    location: "Bibliothèque du centenaire de Campbellton"
  },
  {
    title: "Hommage à l'ancienne mascotte du Carnaval d'Atholville",
    description: "Un événement spécial organisé par le Conseil municipal de Campbellton.",
    date: "13 février",
    time: "18h00",
    location: "Alma Hall"
  },
  {
    title: "Vie nocturne du Sno-Fest",
    description: "Profitez de spectacles de musique en direct par des artistes locaux dans divers bars de la région.",
    date: "13 février",
    time: "Soirée",
    location: "Divers bars locaux"
  },
  {
    title: "Musique en direct : Danny Maltais",
    description: "Appréciez une performance de Danny Maltais dans le cadre de l'événement Vie nocturne du Sno-Fest.",
    date: "13 février",
    time: "19h30",
    location: "Club de motoneige Restigouche"
  }
];

export const Feb_14_Events = [
  {
    title: "Guided Tours of the Athol House Museum",
    description: "Discover the history of our county and its three founding cultures: Mi'kmaq, Acadian, and Scottish.",
    date: "February 14",
    time: "1:00 PM - 4:00 PM",
    location: "Restigouche Gallery"
  },
  {
    title: "Valentine’s Day Bingo",
    description: "Join the Campbellton Centennial Library for a fun Valentine’s Day Bingo session. Places are limited, registration required at 506-753-5253.",
    date: "February 14",
    time: "3:45 PM - 4:45 PM",
    location: "Campbellton Centennial Library"
  },
  {
    title: "Sno-Fest Village",
    description: "Enjoy various winter activities including a fire pit, hot chocolate, and fun games like mini putt, bowling, tic-tac-toe, and horse sleigh rides.",
    date: "February 14",
    time: "4:00 PM - 8:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Grand Opening at Sno-Fest Village",
    description: "Official opening with cake, live music featuring James Young Band, and fireworks (weather permitting).",
    date: "February 14",
    time: "6:00 PM - 8:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Sno-Fest Night Life",
    description: "Local bars feature live performances from talented musicians.",
    date: "February 14",
    time: "Evening",
    location: "Various local bars"
  },
  {
    title: "Live Music: Danny Maltais",
    description: "Danny Maltais performs live as part of Sno-Fest Night Life.",
    date: "February 14",
    time: "7:00 PM",
    location: "Brasserie 1026"
  },
  {
    title: "Live Music: Daniel Poirier",
    description: "Daniel Poirier performs live as part of Sno-Fest Night Life.",
    date: "February 14",
    time: "9:00 PM",
    location: "Legion"
  },
  {
    title: "Live Music: Bolton Creek Band",
    description: "Bolton Creek Band performs live as part of Sno-Fest Night Life.",
    date: "February 14",
    time: "9:00 PM",
    location: "Restigouche Snowmobile Club"
  }
];

export const Feb_14_Events_FR = [
  {
    title: "Visites guidées du musée Athol House",
    description: "Découvrez l'histoire de notre comté et de ses trois cultures fondatrices : Mi'kmaq, Acadienne et Écossaise.",
    date: "14 février",
    time: "13h00 - 16h00",
    location: "Galerie Restigouche"
  },
  {
    title: "Bingo de la Saint-Valentin",
    description: "Rejoignez la bibliothèque du centenaire de Campbellton pour une session amusante de bingo de la Saint-Valentin. Les places sont limitées, inscription requise au 506-753-5253.",
    date: "14 février",
    time: "15h45 - 16h45",
    location: "Bibliothèque du centenaire de Campbellton"
  },
  {
    title: "Village du Sno-Fest",
    description: "Profitez de diverses activités hivernales, notamment un feu de camp, du chocolat chaud et des jeux amusants comme le mini-golf, le bowling, le tic-tac-toe et des promenades en traîneau à cheval.",
    date: "14 février",
    time: "16h00 - 20h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Grande ouverture du Village du Sno-Fest",
    description: "Ouverture officielle avec gâteau, musique en direct du James Young Band et feux d'artifice (si la météo le permet).",
    date: "14 février",
    time: "18h00 - 20h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Vie nocturne du Sno-Fest",
    description: "Les bars locaux accueillent des performances en direct de musiciens talentueux.",
    date: "14 février",
    time: "Soirée",
    location: "Divers bars locaux"
  },
  {
    title: "Musique en direct : Danny Maltais",
    description: "Danny Maltais se produit en direct dans le cadre de la Vie nocturne du Sno-Fest.",
    date: "14 février",
    time: "19h00",
    location: "Brasserie 1026"
  },
  {
    title: "Musique en direct : Daniel Poirier",
    description: "Daniel Poirier se produit en direct dans le cadre de la Vie nocturne du Sno-Fest.",
    date: "14 février",
    time: "21h00",
    location: "Légion"
  },
  {
    title: "Musique en direct : Bolton Creek Band",
    description: "Bolton Creek Band se produit en direct dans le cadre de la Vie nocturne du Sno-Fest.",
    date: "14 février",
    time: "21h00",
    location: "Club de motoneige Restigouche"
  }
];


export const Feb_15_Events = [
  {
    title: "Meet Our Artists",
    description: "A great opportunity to visit and talk with artists from the region who will paint, sculpt, and create on the spot!",
    date: "February 15",
    time: "10:00 AM - 4:00 PM",
    location: "Restigouche Gallery"
  },
  {
    title: "Legion Chili Luncheon",
    description: "$15 for a bowl of chili, drink, and dessert.",
    date: "February 15",
    time: "11:00 AM - 1:00 PM",
    location: "Royal Canadian Legion Branch 19",
    information: "506-759-8025"
  },
  {
    title: "Warm up at the Sno-Fest Cozy Corner",
    description: "Enjoy face painting, crafts, a coloring contest, a magician, and a booth from the Campbellton Centennial Library.",
    date: "February 15",
    time: "12:00 PM - 6:00 PM",
    location: "Sugarloaf Provincial Park Lodge"
  },
  {
    title: "Sno-Fest Village",
    description: "A fun-filled day with live entertainment, games, a fire pit, hot chocolate, and horse sleigh rides.",
    date: "February 15",
    time: "12:00 PM - 8:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Live Music: Claude Roy",
    description: "Live performance by Claude Roy as part of the Sno-Fest Village entertainment lineup.",
    date: "February 15",
    time: "1:30 PM - 2:30 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Live Music: Daniel Poirier",
    description: "Live performance by Daniel Poirier as part of the Sno-Fest Village entertainment lineup.",
    date: "February 15",
    time: "3:30 PM - 4:30 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Dance Party with DJ Tyler",
    description: "A fun dance party featuring DJ Tyler.",
    date: "February 15",
    time: "6:00 PM - 7:30 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Hot Dog Fundraiser for the Sugarloaf Provincial Park",
    description: "Free hot dogs, limit of 2 per person. Hosted by the Canadian Ski Patrol.",
    date: "February 15",
    time: "1:00 PM - 3:00 PM",
    location: "Next to the Patrol First Aid Hut"
  },
  {
    title: "Music with the Country Golden Girls",
    description: "Live country music, free and open to all ages.",
    date: "February 15",
    time: "1:00 PM - 3:00 PM",
    location: "Tide Head Fire Hall"
  },
  {
    title: "Voices of Resilience",
    description: "An evening of gastronomy and entertainment to benefit the Restigouche Suicide Prevention Committee. Tickets: $75.",
    date: "February 15",
    time: "5:30 PM",
    location: "Alma Hall"
  },
  {
    title: "Illuminated Pond Skating",
    description: "Enjoy an evening of skating under the lights.",
    date: "February 15",
    time: "6:00 PM - 8:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Sno-Fest Night Life",
    description: "Live performances at various local bars.",
    date: "February 15",
    time: "Evening",
    location: "Various local bars"
  },
  {
    title: "Live Music: Renelle & Tracy",
    description: "Performance by Renelle & Tracy as part of Sno-Fest Night Life.",
    date: "February 15",
    time: "8:00 PM",
    location: "Artisan Brewing Company"
  },
  {
    title: "Live Music: Daniel Poirier",
    description: "Live performance by Daniel Poirier as part of Sno-Fest Night Life.",
    date: "February 15",
    time: "9:00 PM",
    location: "Legion"
  },
  {
    title: "DJ Doozy",
    description: "Dance the night away with DJ Doozy.",
    date: "February 15",
    time: "10:00 PM",
    location: "Dooly's"
  }
];

export const Feb_15_Events_FR = [
  {
    title: "Rencontrez nos artistes",
    description: "Une excellente occasion de visiter et de discuter avec les artistes de la région qui peindront, sculpteront et créeront sur place !",
    date: "15 février",
    time: "10h00 - 16h00",
    location: "Galerie Restigouche"
  },
  {
    title: "Déjeuner Chili à la Légion",
    description: "15 $ pour un bol de chili, une boisson et un dessert.",
    date: "15 février",
    time: "11h00 - 13h00",
    location: "Branche 19 de la Légion royale canadienne",
    information: "506-759-8025"
  },
  {
    title: "Réchauffez-vous au Coin Cozy du Sno-Fest",
    description: "Profitez de la peinture sur visage, des bricolages, d'un concours de coloriage, d'un magicien et d'un stand de la bibliothèque du centenaire de Campbellton.",
    date: "15 février",
    time: "12h00 - 18h00",
    location: "Auberge du parc provincial Sugarloaf"
  },
  {
    title: "Village du Sno-Fest",
    description: "Une journée remplie de divertissement en direct, de jeux, d'un feu de camp, de chocolat chaud et de promenades en traîneau à cheval.",
    date: "15 février",
    time: "12h00 - 20h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Musique en direct : Claude Roy",
    description: "Performance en direct de Claude Roy dans le cadre du programme de divertissement du Village du Sno-Fest.",
    date: "15 février",
    time: "13h30 - 14h30",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Musique en direct : Daniel Poirier",
    description: "Performance en direct de Daniel Poirier dans le cadre du programme de divertissement du Village du Sno-Fest.",
    date: "15 février",
    time: "15h30 - 16h30",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Soirée dansante avec DJ Tyler",
    description: "Une soirée dansante amusante avec DJ Tyler.",
    date: "15 février",
    time: "18h00 - 19h30",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Collecte de fonds avec hot-dogs pour le parc provincial Sugarloaf",
    description: "Hot-dogs gratuits, limite de 2 par personne. Organisé par le Patrouille de ski canadienne.",
    date: "15 février",
    time: "13h00 - 15h00",
    location: "À côté du poste de premiers secours"
  },
  {
    title: "Musique avec les Country Golden Girls",
    description: "Musique country en direct, gratuite et ouverte à tous.",
    date: "15 février",
    time: "13h00 - 15h00",
    location: "Salle des pompiers de Tide Head"
  },
  {
    title: "Voices of Resilience",
    description: "Une soirée de gastronomie et de divertissement au profit du comité de prévention du suicide de Restigouche. Billets : 75 $.",
    date: "15 février",
    time: "17h30",
    location: "Alma Hall"
  },
  {
    title: "Patinage sur étang illuminé",
    description: "Profitez d'une soirée de patinage sous les lumières.",
    date: "15 février",
    time: "18h00 - 20h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Vie nocturne du Sno-Fest",
    description: "Performances en direct dans divers bars locaux.",
    date: "15 février",
    time: "Soirée",
    location: "Divers bars locaux"
  },
  {
    title: "Musique en direct : Renelle & Tracy",
    description: "Performance de Renelle & Tracy dans le cadre de la Vie nocturne du Sno-Fest.",
    date: "15 février",
    time: "20h00",
    location: "Artisan Brewing Company"
  },
  {
    title: "Musique en direct : Daniel Poirier",
    description: "Performance en direct de Daniel Poirier dans le cadre de la Vie nocturne du Sno-Fest.",
    date: "15 février",
    time: "21h00",
    location: "Légion"
  },
  {
    title: "DJ Doozy",
    description: "Dansez toute la nuit avec DJ Doozy.",
    date: "15 février",
    time: "22h00",
    location: "Dooly's"
  }
];


export const Feb_16_Events = [
  {
    title: "Warm up at the Sno-Fest Cozy Corner",
    description: "Enjoy crafts, face painting, a magician, and a Love Tree activity. Canteen service available on-site ($).",
    date: "February 16",
    time: "12:00 PM - 5:00 PM",
    location: "Sugarloaf Provincial Park Lodge"
  },
  {
    title: "Sno-Fest Village",
    description: "Live local entertainment, games, hot chocolate, a fire pit, and horse sleigh rides.",
    date: "February 16",
    time: "12:00 PM - 5:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Live Music: Paul Landry",
    description: "Enjoy a live performance by Paul Landry as part of Sno-Fest Village entertainment.",
    date: "February 16",
    time: "1:30 PM - 2:30 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Live Music: Linda Bergeron",
    description: "Enjoy a live performance by Linda Bergeron as part of Sno-Fest Village entertainment.",
    date: "February 16",
    time: "3:30 PM - 4:30 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Hot Dog Fundraiser",
    description: "Free hot dogs, limit of 2 per person. Hosted by the Canadian Ski Patrol.",
    date: "February 16",
    time: "1:00 PM - 3:00 PM",
    location: "Next to the Patrol First Aid Hut"
  },
  {
    title: "Acoustic Country & Bluegrass Jam Session",
    description: "A lively jam session organized by the Campbellton Bluegrass Festival.",
    date: "February 16",
    time: "2:00 PM - 4:00 PM",
    location: "Restigouche Snowmobile Club"
  },
  {
    title: "Family Glow Dance",
    description: "A free dance party with UV lights, a magic show, glow bracelets, and more! Wear white or neon clothing.",
    date: "February 16",
    time: "6:00 PM - 9:00 PM",
    location: "Centre de la Vallée, Val D'Amours"
  }
];

export const Feb_16_Events_FR = [
  {
    title: "Réchauffez-vous au Coin Cozy du Sno-Fest",
    description: "Profitez des bricolages, de la peinture sur visage, d'un magicien et d'une activité sur l'Arbre de l'Amour. Service de cantine disponible sur place ($).",
    date: "16 février",
    time: "12h00 - 17h00",
    location: "Auberge du parc provincial Sugarloaf"
  },
  {
    title: "Village du Sno-Fest",
    description: "Divertissement local en direct, jeux, chocolat chaud, feu de camp et promenades en traîneau à cheval.",
    date: "16 février",
    time: "12h00 - 17h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Musique en direct : Paul Landry",
    description: "Profitez d'une performance en direct de Paul Landry dans le cadre du programme de divertissement du Village du Sno-Fest.",
    date: "16 février",
    time: "13h30 - 14h30",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Musique en direct : Linda Bergeron",
    description: "Profitez d'une performance en direct de Linda Bergeron dans le cadre du programme de divertissement du Village du Sno-Fest.",
    date: "16 février",
    time: "15h30 - 16h30",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Collecte de fonds avec hot-dogs",
    description: "Hot-dogs gratuits, limite de 2 par personne. Organisé par le Patrouille de ski canadienne.",
    date: "16 février",
    time: "13h00 - 15h00",
    location: "À côté du poste de premiers secours"
  },
  {
    title: "Session de Jam Acoustic Country & Bluegrass",
    description: "Une session de jam animée organisée par le Festival Bluegrass de Campbellton.",
    date: "16 février",
    time: "14h00 - 16h00",
    location: "Club de motoneige Restigouche"
  },
  {
    title: "Danse Glow en famille",
    description: "Une soirée dansante gratuite avec des lumières UV, un spectacle de magie, des bracelets lumineux et plus encore ! Portez des vêtements blancs ou néons.",
    date: "16 février",
    time: "18h00 - 21h00",
    location: "Centre de la Vallée, Val D'Amours"
  }
];

export const Feb_17_Events = [
  {
    title: "Richelieu Family Day",
    description: "Enjoy inflatable games, mascots, activities, snacks, and more! Organized by Club Richelieu de Campbellton.",
    date: "February 17",
    time: "10:00 AM - 12:00 PM",
    location: "Le Galion des Appalaches School"
  },
  {
    title: "Family Day at Sugarloaf Provincial Park",
    description: "Try skiing, skating, snowshoeing, and more! Free ski/snowboard passes all day (registration required, equipment rental not included).",
    date: "February 17",
    time: "12:00 PM - 4:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Warm up at the Sno-Fest Cozy Corner",
    description: "Enjoy crafts, face painting, a magician, and The Love Tree activity. Canteen service available on-site ($).",
    date: "February 17",
    time: "12:00 PM - 4:00 PM",
    location: "Sugarloaf Provincial Park Lodge"
  },
  {
    title: "Sno-Fest Village",
    description: "Live local entertainment, games, hot chocolate, a fire pit, and horse sleigh rides.",
    date: "February 17",
    time: "12:00 PM - 4:00 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Live Music: Diane Ouellette",
    description: "Enjoy a live performance by Diane Ouellette as part of the Sno-Fest Village entertainment.",
    date: "February 17",
    time: "1:30 PM - 2:30 PM",
    location: "Sugarloaf Provincial Park"
  },
  {
    title: "Live Music: Eva Malley",
    description: "Enjoy a live performance by Eva Malley as part of the Sno-Fest Village entertainment.",
    date: "February 17",
    time: "3:00 PM - 4:00 PM",
    location: "Sugarloaf Provincial Park"
  }
];

export const Feb_17_Events_FR = [
  {
    title: "Journée de la famille Richelieu",
    description: "Profitez de jeux gonflables, de mascottes, d'activités, de collations et bien plus encore ! Organisé par le Club Richelieu de Campbellton.",
    date: "17 février",
    time: "10h00 - 12h00",
    location: "École Le Galion des Appalaches"
  },
  {
    title: "Journée de la famille au parc provincial Sugarloaf",
    description: "Essayez le ski, le patinage, la raquette et plus encore ! Passes de ski/planche à neige gratuites toute la journée (inscription requise, location d'équipement non incluse).",
    date: "17 février",
    time: "12h00 - 16h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Réchauffez-vous au Coin Cozy du Sno-Fest",
    description: "Profitez des bricolages, de la peinture sur visage, d'un magicien et de l'activité de l'Arbre de l'Amour. Service de cantine disponible sur place ($).",
    date: "17 février",
    time: "12h00 - 16h00",
    location: "Auberge du parc provincial Sugarloaf"
  },
  {
    title: "Village du Sno-Fest",
    description: "Divertissement local en direct, jeux, chocolat chaud, feu de camp et promenades en traîneau à cheval.",
    date: "17 février",
    time: "12h00 - 16h00",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Musique en direct : Diane Ouellette",
    description: "Profitez d'une performance en direct de Diane Ouellette dans le cadre du programme de divertissement du Village du Sno-Fest.",
    date: "17 février",
    time: "13h30 - 14h30",
    location: "Parc provincial Sugarloaf"
  },
  {
    title: "Musique en direct : Eva Malley",
    description: "Profitez d'une performance en direct d'Eva Malley dans le cadre du programme de divertissement du Village du Sno-Fest.",
    date: "17 février",
    time: "15h00 - 16h00",
    location: "Parc provincial Sugarloaf"
  }
];

export const Activities_Informational = [
  {
    title: "Snofest Village",
    description: "Explore the heart of Sno-Fest at the Snofest Village, where you can enjoy local vendors, food, and a fun-filled atmosphere. This is the perfect place to gather with friends and family, shop, and experience the essence of the festival.",
    source: {
      src: "https://i.imgur.com/yH4A5vR.jpeg",
      width: 2625,
      height: 3500,
      alt: "A woman smiling while hanging with the Sno-Fest mascot at the Snofest Village, a lively hub for festival goers"
    }
  },
  {
    title: "Mini Putt",
    description: "Test your putting skills with our fun and family-friendly mini golf course at Sno-Fest. Perfect for all ages, this activity offers a great way to relax and enjoy the festival outdoors.",
    source: {
      src: "https://i.imgur.com/DSUtfuq.jpeg",
      width: 3375,
      height: 4500,
      alt: "A group of people enjoying mini putt at Sno-Fest, competing in a friendly game of mini golf"
    }
  },
  {
    title: "Various Kids Activities",
    description: "There’s endless fun for kids at Sno-Fest with a variety of activities to keep them entertained. From balloon animals to interactive games, the festival offers a safe and exciting space for kids to let their creativity shine.",
    source: {
      src: "https://i.imgur.com/4tyuMob.jpeg",
      width: 2250,
      height: 3000,
      alt: "A man creating balloon animals for children at Sno-Fest, with kids enjoying various fun activities"
    }
  },
  {
    title: "Live Music",
    description: "Sno-Fest features live performances by local bands and artists, offering a vibrant soundtrack to the festival. Whether you’re enjoying a relaxing afternoon or dancing the night away, the music adds to the festive atmosphere.",
    source: {
      src: "https://i.imgur.com/UMEwADn.jpeg",
      width: 2625,
      height: 3500,
      alt: "Live music stage at Sno-Fest Village, with an audience enjoying a concert"
    }
  },
  {
    title: "Arts and Crafts",
    description: "Get creative at the Arts and Crafts station, where festival-goers of all ages can make their own keepsakes and artwork. From painting to crafting, there’s something for everyone to create and take home.",
    source: {
      src: "https://i.imgur.com/8Z4RPvl.jpeg",
      width: 2625,
      height: 3500,
      alt: "Children crafting their own projects at Sno-Fest Village, surrounded by colorful materials and supplies"
    }
  },
  {
    title: "Skiing",
    description: "Hit the slopes at Sno-Fest! Whether you're a seasoned skier or a beginner, enjoy the stunning mountain views and fresh snow as you take on the hills at this exciting festival activity.",
    source: {
      src: "https://i.imgur.com/ZsoxEfL.jpeg",
      width: 2625,
      height: 3500,
      alt: "Sno-Fest mascot waving on a ski mountain with skiers in the background enjoying the slopes."
    }
  }
]

export const Activities_Informational_FR = [
  {
    title: "Village du Sno-Fest",
    description: "Explorez le cœur du Sno-Fest au Village du Sno-Fest, où vous pourrez profiter des vendeurs locaux, de la nourriture et d'une atmosphère animée. C'est l'endroit idéal pour se retrouver en famille et entre amis, faire du shopping et vivre l'essence du festival.",
    source: {
      src: "https://i.imgur.com/yH4A5vR.jpeg",
      width: 2625,
      height: 3500,
      alt: "Une femme souriante avec la mascotte du Sno-Fest au Village du Sno-Fest, un centre animé pour les festivaliers"
    }
  },
  {
    title: "Mini Golf",
    description: "Testez vos compétences en putting avec notre parcours de mini golf amusant et convivial au Sno-Fest. Parfait pour tous les âges, cette activité offre un excellent moyen de se détendre et de profiter du festival en plein air.",
    source: {
      src: "https://i.imgur.com/DSUtfuq.jpeg",
      width: 3375,
      height: 4500,
      alt: "Un groupe de personnes jouant au mini golf au Sno-Fest, participant à une partie amicale de mini-golf"
    }
  },
  {
    title: "Activités pour enfants",
    description: "Le Sno-Fest offre une multitude d'activités pour divertir les enfants. Des animaux en ballons aux jeux interactifs, le festival propose un espace sûr et excitant où les enfants peuvent laisser libre cours à leur créativité.",
    source: {
      src: "https://i.imgur.com/4tyuMob.jpeg",
      width: 2250,
      height: 3000,
      alt: "Un homme créant des animaux en ballons pour les enfants au Sno-Fest, avec des enfants profitant de diverses activités amusantes"
    }
  },
  {
    title: "Musique en direct",
    description: "Le Sno-Fest propose des performances en direct de groupes et d'artistes locaux, offrant une bande sonore vibrante au festival. Que vous profitiez d'un après-midi tranquille ou que vous dansiez toute la nuit, la musique ajoute à l'ambiance festive.",
    source: {
      src: "https://i.imgur.com/UMEwADn.jpeg",
      width: 2625,
      height: 3500,
      alt: "Scène de musique en direct au Village du Sno-Fest, avec un public appréciant un concert"
    }
  },
  {
    title: "Arts et Métiers",
    description: "Soyez créatif à la station des Arts et Métiers, où les festivaliers de tous âges peuvent créer leurs propres souvenirs et œuvres d'art. De la peinture aux travaux manuels, il y en a pour tous les goûts et chacun peut repartir avec sa création.",
    source: {
      src: "https://i.imgur.com/8Z4RPvl.jpeg",
      width: 2625,
      height: 3500,
      alt: "Des enfants créant leurs propres projets au Village du Sno-Fest, entourés de matériaux colorés"
    }
  },
  {
    title: "Ski",
    description: "Partez à l'assaut des pentes au Sno-Fest ! Que vous soyez un skieur expérimenté ou un débutant, profitez des vues magnifiques sur les montagnes et de la neige fraîche en dévalant les pentes dans cette activité excitante du festival.",
    source: {
      src: "https://i.imgur.com/ZsoxEfL.jpeg",
      width: 2625,
      height: 3500,
      alt: "La mascotte du Sno-Fest saluant sur une montagne de ski, avec des skieurs en arrière-plan profitant des pistes."
    }
  }
];

export const Featured_Activities = {
  title: "Celebrate Winter",
  subtitle: "At the Campbellton Sno-Fest, visitors can also enjoy live music, food vendors, and other entertainment throughout the festival. With its family-friendly atmosphere and activities, it's a must for anyone looking to embrace the cold and snowy weather in Restigouche."
}

export const Featured_Activities_FR = {
  title: "Célébrer l'Hiver",
  subtitle: "Au Campbellton Sno-Fest, les visiteurs peuvent également profiter de musique en direct, de vendeurs de nourriture et d'autres divertissements tout au long du festival. Avec son ambiance familiale et ses activités, c'est un incontournable pour ceux qui souhaitent profiter du froid et de la neige en Restigouche."
};


export const Faq_Items = [
  {
    question: "What is Campbellton SnoFest?",
    answer: "Campbellton SnoFest is an annual winter festival celebrating snow sports, outdoor activities, and local culture in Campbellton, New Brunswick."
  },
  {
    question: "When does Campbellton SnoFest take place?",
    answer: "Campbellton SnoFest typically takes place in February each year. Exact dates can vary, so it's best to check the official website or social media for updates."
  },
  {
    question: "What activities are available at Campbellton SnoFest?",
    answer: "Activities include snowshoeing, skiing, ice skating, snowboarding, live music, family-friendly events, food vendors, and much more!"
  },
  {
    question: "Is there an entrance fee to Campbellton SnoFest?",
    answer: "Many of the SnoFest activities are free to attend, but certain events or attractions may have a small fee. Check the SnoFest schedule for more details."
  },
  {
    question: "Where can I find more information about Campbellton SnoFest?",
    answer: "For the latest updates, schedules, and event information, visit the official Campbellton SnoFest website or follow their social media channels."
  }
]

export const Faq_Items_FR = [
  {
    question: "Qu'est-ce que le Campbellton SnoFest ?",
    answer: "Le Campbellton SnoFest est un festival hivernal annuel célébrant les sports d'hiver, les activités de plein air et la culture locale à Campbellton, au Nouveau-Brunswick."
  },
  {
    question: "Quand a lieu le Campbellton SnoFest ?",
    answer: "Le Campbellton SnoFest a généralement lieu en février chaque année. Les dates exactes peuvent varier, il est donc préférable de vérifier le site officiel ou les réseaux sociaux pour les mises à jour."
  },
  {
    question: "Quelles activités sont disponibles lors du Campbellton SnoFest ?",
    answer: "Les activités incluent la raquette, le ski, le patinage sur glace, le snowboard, la musique en direct, des événements familiaux, des vendeurs de nourriture, et bien plus encore !"
  },
  {
    question: "Y a-t-il un frais d'entrée pour le Campbellton SnoFest ?",
    answer: "De nombreuses activités du SnoFest sont gratuites, mais certains événements ou attractions peuvent avoir un petit frais. Consultez le programme du SnoFest pour plus de détails."
  },
  {
    question: "Où puis-je trouver plus d'informations sur le Campbellton SnoFest ?",
    answer: "Pour les dernières mises à jour, les horaires et les informations sur les événements, visitez le site officiel du Campbellton SnoFest ou suivez leurs canaux de médias sociaux."
  }
];


export const Featured_Faq = {
  title: "Frequently Asked Questions",
  subtitle: "Have any questions? See our frequently asked questions or reach out to us!"
}

export const Featured_Faq_FR = {
  title: "Questions fréquemment posées",
  subtitle: "Vous avez des questions ? Consultez nos questions fréquemment posées ou contactez-nous !"
}

export const Socials = [
  {
    name: "https://instagram.com/",
    icon: <FaInstagram color={'#FFFFFF'} size={16}></FaInstagram>
  },
  {
    name: "https://facebook.com/",
    icon: <FaFacebook color={'#FFFFFF'} size={16}></FaFacebook>
  },
  {
    name: "https://youtube.com/",
    icon: <FaYoutube color={'#FFFFFF'} size={16}></FaYoutube>
  },
  {
    name: "https://tiktok.com/",
    icon: <FaTiktok color={'#FFFFFF'} size={16}></FaTiktok>
  }
]