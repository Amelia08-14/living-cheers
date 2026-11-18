// Catalogue : canapés et fauteuils fabriqués au Portugal, répartis en 3 catalogues.
// Aucun nom de marque partenaire n'est affiché sur le site. Textes traduits du portugais, sans prix.
// Les photos sont générées par `npm run catalogue` (voir scripts/fetch-catalogue.mjs).
import IMAGES from './catalogue-images.json';

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string[];
  features?: string[];
  specs?: Spec[];
  /** Photo de couverture (1 = première), si la première ne convient pas. */
  cover?: number;
};

export type Category = { slug: string; title: string; intro: string };

export type Catalogue = {
  /** Segment d'URL : /catalogue/1, /catalogue/2… */
  slug: string;
  name: string;
  /** Numéro affiché dans la pastille (01, 02, 03). */
  code: string;
  specialty: string;
  tagline: string;
  intro: string[];
  facts: { value: string; label: string }[];
  /** Photo de l'arche : produit, numéro de photo, cadrage. */
  visual: { product: string; index: number; position: string };
  /** Cadrage des photos dans les vignettes. */
  frame: { ratio: string; fit: 'cover' | 'contain' };
  categories: Category[];
  products: Product[];
};

export type ProductImage = { src: string; srcSet: string; width: number; height: number };

// ---------------------------------------------------------------------------
// Produits (fabriqués au Portugal)
// ---------------------------------------------------------------------------

const PRODUCTS: Product[] = [
  // Canapés d'angle
  {
    slug: 'angle-80690',
    name: 'Angle 80690',
    category: 'angles',
    summary: 'Relax électrique et têtières électriques indépendantes à chaque place.',
    description: [
      'Canapé d’angle moderne avec relax électrique et têtières électriques indépendantes, pour un confort maximal et un réglage personnalisé à chaque place.',
    ],
    features: ['Relax électrique', 'Têtières électriques indépendantes'],
    specs: [
      { label: 'Dimensions', value: '307 × 223 cm' },
      { label: 'Coloris', value: 'Vert · Fog Grey · Sand Cream' },
    ],
  },
  {
    slug: 'angle-cloud',
    name: 'Angle Cloud',
    category: 'angles',
    summary: 'Assises coulissantes électriques et têtières multipositions.',
    description: [
      'Canapé d’angle moderne avec assises coulissantes électriques et têtières multipositions, pensé pour un confort maximal au quotidien.',
      'Une solution complète qui allie confort et design.',
    ],
    features: ['Assises coulissantes électriques', 'Têtières multipositions'],
    specs: [{ label: 'Dimensions', value: '307 × 223 cm' }],
  },
  {
    slug: 'angle-7975',
    name: 'Angle 7975',
    category: 'angles',
    summary: 'Relax et têtière électriques, console avec chargeurs sans fil et liseuse.',
    description: [
      'Canapé d’angle moderne avec relax et têtière électriques, pensé pour un confort maximal.',
      'Il intègre une console avec chargeurs sans fil, porte-gobelets, rangement et lampe intégrée.',
    ],
    features: ['Relax électrique', 'Têtière électrique', 'Chargeurs sans fil', 'Porte-gobelets et rangement', 'Lampe intégrée'],
    specs: [
      { label: 'Dimensions', value: '307 × 223 cm' },
      { label: 'Coloris', value: 'Blanc · Gris clair · Taupe' },
    ],
  },
  {
    slug: 'angle-70829',
    name: 'Angle 70829',
    category: 'angles',
    summary: 'Dossiers inclinables et grande assise pour toute la famille.',
    description: [
      'Le modèle 70829 est plus qu’un canapé d’angle : c’est une invitation à la détente. Ses dossiers inclinables offrent un confort personnalisé à chaque moment de la journée, pour une pause rapide, pour recevoir ou pour de longues heures de repos.',
      'Son design contemporain s’accorde aux intérieurs modernes et chaleureux. Sa structure généreuse accueille toute la famille, avec des matériaux de grande qualité et un rembourrage moelleux.',
    ],
    features: ['Dossiers inclinables', 'Grande assise familiale', 'Rembourrage moelleux'],
    specs: [{ label: 'Dimensions', value: '307 × 226 cm' }],
  },
  {
    slug: 'angle-70785',
    name: 'Angle 70785',
    category: 'angles',
    summary: 'Places relax et repose-pieds extensibles, positions réglables.',
    description: [
      'Faites de votre salon un véritable refuge avec ce canapé d’angle relax aux positions réglables, qui réunit fonctionnalité, style et bien-être.',
      'Ses assises inclinables et son repose-pieds extensible vous laissent choisir la position idéale pour regarder un film, lire ou simplement vous reposer.',
    ],
    features: ['Assises inclinables', 'Repose-pieds extensible'],
    specs: [{ label: 'Dimensions', value: '302 × 221 cm' }],
  },
  {
    slug: 'angle-onix',
    name: 'Angle Onix',
    category: 'angles',
    summary: 'Relax électrique, son numérique intégré et chargeurs pour téléphones.',
    description: [
      'L’Angle Onix réunit confort, fonctionnalité et technologie. Son relax électrique permet de trouver la position idéale, et sa têtière électrique rabattable soutient la tête et la nuque.',
      'Un système de son numérique est intégré aux têtières pour une écoute enveloppante. Des rangements discrets accueillent revues et télécommandes, et la console est équipée de chargeurs pour téléphones.',
    ],
    features: ['Relax électrique', 'Têtière électrique rabattable', 'Son numérique intégré', 'Rangements discrets', 'Chargeurs pour téléphones'],
  },
  {
    slug: 'angle-51727',
    name: 'Angle 51727',
    category: 'angles',
    summary: 'Deux relax électriques indépendants et ports USB intégrés.',
    description: [
      'Design contemporain et technologie intégrée se rencontrent dans cette pièce à forte présence. Deux relax électriques indépendants, aux mouvements doux et silencieux, offrent un confort personnalisé.',
      'Les chargeurs USB intégrés ajoutent une touche pratique sans compromettre l’esthétique épurée.',
    ],
    features: ['Deux relax électriques indépendants', 'Mouvements doux et silencieux', 'Chargeurs USB'],
    specs: [
      { label: 'Dimensions', value: '278 × 207 cm' },
      { label: 'Coloris', value: 'Gris · Camel' },
    ],
  },
  {
    slug: 'angle-aromo',
    name: 'Angle Aromo',
    category: 'angles',
    summary: 'Têtières inclinables, relax manuels et pieds en aluminium.',
    description: [
      'L’Angle Aromo est conçu pour le confort et la détente. Ses têtières inclinables offrent un soutien sur mesure, et ses relax manuels se règlent sans effort.',
      'Ses élégants pieds en aluminium apportent une touche moderne et une base robuste à ce grand canapé, idéal pour la famille comme pour recevoir.',
    ],
    features: ['Têtières inclinables', 'Relax manuels', 'Pieds en aluminium'],
    specs: [{ label: 'Dimensions', value: '340 × 200 × 150 cm ou 370 × 210 × 150 cm' }],
  },
  {
    slug: 'angle-11072',
    name: 'Angle 11072',
    category: 'angles',
    summary: 'Relax électrique, lampe intégrée et chargeur sans fil.',
    description: [
      'L’Angle 11072 est le complément idéal de tout salon. Son relax électrique se règle d’une simple pression.',
      'Sa lampe intégrée éclaire la lecture du soir ou la soirée cinéma, tandis que ses porte-gobelets et son petit compartiment accueillent télécommandes et petits objets. Un chargeur sans fil garde vos appareils chargés pendant que vous vous détendez.',
    ],
    features: ['Relax électrique', 'Lampe intégrée', 'Porte-gobelets et rangement', 'Chargeur sans fil'],
    specs: [{ label: 'Dimensions', value: '285 × 208,5 cm' }],
  },
  {
    slug: 'angle-aqua',
    name: 'Angle Aqua',
    category: 'angles',
    summary: 'Grand angle familial, assises coulissantes et son intégré.',
    description: [
      'Spacieux, l’Angle Aqua est pensé pour se retrouver en famille. Son assise coulissante et ses têtières articulées offrent un confort réglable pour chacun.',
      'Son système de son intégré permet de profiter d’une soirée cinéma sans enceintes supplémentaires.',
    ],
    features: ['Assise coulissante', 'Têtières articulées', 'Système de son intégré'],
    specs: [{ label: 'Dimensions', value: '355 × 300 × 110 cm' }],
  },
  {
    slug: 'angle-9222',
    name: 'Angle 9222',
    category: 'angles',
    summary: 'Relax manuel, porte-gobelets et compartiment de rangement.',
    description: [
      'L’Angle 9222 est le complément parfait du salon ou de l’espace télé. Son relax manuel permet d’ajuster facilement la position.',
      'Ses porte-gobelets intégrés gardent les boissons à portée de main, et un petit compartiment range télécommandes et revues.',
    ],
    features: ['Relax manuel', 'Porte-gobelets', 'Compartiment de rangement'],
    specs: [{ label: 'Dimensions', value: '267 × 219 cm' }],
  },

  // Canapés avec méridienne
  {
    slug: 'meridienne-onix',
    name: 'Méridienne Onix',
    category: 'meridiennes',
    summary: 'Son Dolby Atmos dans les têtières et assises vibrantes.',
    description: [
      'Canapé méridienne haut de gamme avec son Dolby Atmos intégré aux têtières et assises vibrantes, pour une expérience immersive unique.',
      'Il est équipé d’un relax électrique, de têtières réglables, de chargeurs sans fil et d’un rangement intégré. Technologie, confort et design réunis.',
    ],
    features: ['Son Dolby Atmos', 'Assises vibrantes', 'Relax électrique', 'Têtières réglables', 'Chargeurs sans fil', 'Rangement intégré'],
    specs: [{ label: 'Dimensions', value: '285 × 160 cm' }],
  },
  {
    slug: 'meridienne-noosa',
    name: 'Méridienne Noosa',
    category: 'meridiennes',
    summary: 'Relax électrique, massage à air et assises chauffantes.',
    description: [
      'Méridienne moderne avec relax électrique, massage à air et chauffage des assises. Un confort total allié à un design élégant et fonctionnel.',
    ],
    features: ['Relax électrique', 'Massage à air', 'Assises chauffantes'],
    specs: [{ label: 'Dimensions', value: '330 × 170 cm' }],
  },
  {
    slug: 'meridienne-51698',
    name: 'Méridienne 51698',
    category: 'meridiennes',
    summary: 'Cuir naturel et relax électrique.',
    description: [
      'Canapé méridienne en cuir naturel, avec relax électrique pour régler la position en douceur.',
      'Son assise ample et enveloppante, alliée au toucher du cuir, offre un repos supérieur. Un design élégant et contemporain pour les intérieurs raffinés.',
    ],
    features: ['Cuir naturel', 'Relax électrique', 'Assise enveloppante'],
    specs: [
      { label: 'Dimensions', value: '269 × 166 cm' },
      { label: 'Coloris', value: 'Gris clair · Brun · Beige' },
    ],
  },
  {
    slug: 'meridienne-518',
    name: 'Méridienne 518',
    category: 'meridiennes',
    summary: 'Relax, têtière et méridienne électriques.',
    description: [
      'Canapé moderne avec relax électrique, à l’ouverture douce et pratique. Sa têtière électrique réglable et sa méridienne électrique s’adaptent à toutes les positions de repos.',
    ],
    features: ['Relax électrique', 'Têtière électrique', 'Méridienne électrique'],
    specs: [{ label: 'Dimensions', value: '289 × 164 cm' }],
  },
  {
    slug: 'meridienne-80581',
    name: 'Méridienne 80581',
    category: 'meridiennes',
    summary: 'Assises coulissantes électriques et grand tiroir de rangement.',
    description: [
      'Canapé à assises coulissantes électriques, pour un confort maximal et un réglage personnalisé.',
      'Un grand tiroir de rangement intégré garde le salon en ordre. Design moderne et finitions haut de gamme.',
    ],
    features: ['Assises coulissantes électriques', 'Tiroir de rangement intégré'],
    specs: [
      { label: 'Dimensions', value: '295 × 157 cm' },
      { label: 'Coloris', value: 'Moss Green · Gris clair · Sand Cream' },
    ],
  },
  {
    slug: 'meridienne-51129',
    name: 'Méridienne 51129',
    category: 'meridiennes',
    summary: 'Assises coulissantes électriques, lignes contemporaines.',
    description: [
      'La Méridienne 51129 trouve l’équilibre entre design moderne, confort et technologie. Ses lignes contemporaines apportent raffinement à tout salon.',
      'Ses mécanismes coulissants électriques ajustent la profondeur d’assise avec douceur et précision, pour regarder la télévision, lire ou se détendre. La commande, discrète, reste facile d’accès.',
    ],
    features: ['Assises coulissantes électriques', 'Commande discrète'],
    specs: [{ label: 'Dimensions', value: '304 × 115 cm' }],
  },
  {
    slug: 'meridienne-zoy',
    name: 'Méridienne Zoy',
    category: 'meridiennes',
    summary: 'Design minimaliste, têtières réglables et assises coulissantes.',
    description: [
      'Canapé contemporain au design minimaliste. Ses têtières réglables s’adaptent à la position de repos idéale, et ses assises coulissantes manuelles augmentent la profondeur d’assise.',
    ],
    features: ['Têtières réglables', 'Assises coulissantes manuelles'],
    specs: [{ label: 'Dimensions', value: '290 × 160 cm' }],
  },
  {
    slug: 'meridienne-moon',
    name: 'Méridienne Moon',
    category: 'meridiennes',
    summary: 'Assises coulissantes manuelles et têtières inclinables.',
    description: [
      'Canapé moderne à assises coulissantes manuelles, pour ajuster la profondeur selon votre confort. Têtières inclinables et lignes épurées, idéal pour un intérieur contemporain.',
    ],
    features: ['Assises coulissantes manuelles', 'Têtières inclinables'],
    specs: [{ label: 'Dimensions', value: '335 × 115 cm' }],
  },
  {
    slug: 'meridienne-sydney',
    name: 'Méridienne Sydney',
    category: 'meridiennes',
    summary: 'Assises coulissantes, têtières inclinables, pieds en aluminium.',
    description: [
      'La Méridienne Sydney apporte une touche moderne et luxueuse au salon. Ses assises coulissantes manuelles offrent un confort réglable et ses têtières inclinables l’angle idéal pour se détendre.',
      'Ses élégants pieds en aluminium complètent un design raffiné.',
    ],
    features: ['Assises coulissantes manuelles', 'Têtières inclinables', 'Pieds en aluminium'],
    specs: [{ label: 'Dimensions', value: '260 × 165 cm ou 290 × 165 cm' }],
  },
  {
    slug: 'meridienne-berna',
    name: 'Méridienne Berna',
    category: 'meridiennes',
    summary: 'Relax manuels et pieds en aluminium noir.',
    description: [
      'Élégante et polyvalente, la Méridienne Berna dispose de places relax manuelles pour trouver la position parfaite.',
      'Ses pieds en aluminium noir lui donnent une allure moderne et sophistiquée, pour un livre comme pour une soirée cinéma.',
    ],
    features: ['Relax manuels', 'Pieds en aluminium noir'],
    specs: [{ label: 'Dimensions', value: '290 × 175 cm ou 320 × 175 cm' }],
  },
  {
    slug: 'meridienne-ankara',
    name: 'Méridienne Ankara',
    category: 'meridiennes',
    summary: 'Assises coulissantes et têtières inclinables.',
    description: [
      'Élégante et moderne, la Méridienne Ankara dispose d’assises coulissantes pour adapter la disposition à votre espace, et de têtières inclinables pour les soirées cinéma ou les dimanches paresseux.',
      'Un design luxueux et une fabrication de grande qualité.',
    ],
    features: ['Assises coulissantes', 'Têtières inclinables'],
    specs: [{ label: 'Dimensions', value: '300 × 175 cm ou 330 × 175 cm' }],
  },

  // Canapés & ensembles
  {
    slug: 'canape-noosa',
    name: 'Canapé Noosa',
    category: 'canapes',
    summary: 'Relax électrique, massage à air et assises chauffantes.',
    description: [
      'Canapé moderne avec relax électrique, massage à air et chauffage des assises. Un confort total allié à un design élégant et fonctionnel.',
    ],
    features: ['Relax électrique', 'Massage à air', 'Assises chauffantes'],
    specs: [{ label: 'Dimensions', value: '240 × 110 cm' }],
  },
  {
    slug: 'canape-cloud',
    name: 'Canapé Cloud',
    category: 'canapes',
    summary: 'Assises coulissantes électriques et têtières multipositions.',
    description: [
      'Canapé moderne avec assises coulissantes électriques et têtières multipositions, qui s’adapte à chacun. Un design élégant et fonctionnel, idéal pour la détente.',
    ],
    features: ['Assises coulissantes électriques', 'Têtières multipositions'],
    specs: [{ label: 'Dimensions', value: '208 × 99 cm' }],
  },
  {
    slug: 'canape-70829',
    name: 'Canapé 70829',
    category: 'canapes',
    summary: 'Relax électriques et têtières inclinables.',
    description: [
      'Le canapé 70829 s’adresse à ceux qui ne renoncent ni au confort absolu ni au design. Ses mécanismes de relax électriques règlent le dossier et le repose-pieds d’une simple touche.',
      'Ses têtières inclinables soutiennent la tête et la nuque pour un confort encore plus ergonomique.',
    ],
    features: ['Relax électriques', 'Têtières inclinables'],
    specs: [{ label: 'Dimensions', value: '214 × 101 cm' }],
  },
  {
    slug: 'canape-70785',
    name: 'Canapé 70785',
    category: 'canapes',
    summary: 'Mécanisme individuel par place et têtières inclinables.',
    description: [
      'Le canapé 70785 associe raffinement, ergonomie et technologie. Ses têtières inclinables soutiennent la tête et la nuque, pour la télévision comme pour la lecture.',
      'Chaque place dispose de son propre mécanisme de dossier et de repose-pieds : chacun règle sa position en toute indépendance.',
    ],
    features: ['Mécanisme individuel par place', 'Têtières inclinables'],
    specs: [{ label: 'Dimensions', value: '198 × 101 cm' }],
  },
  {
    slug: 'ensemble-51197',
    name: 'Ensemble 51197 (3 + 2)',
    category: 'canapes',
    summary: 'Deux relax électriques, deux relax manuels, tissu anti-taches.',
    description: [
      'Ensemble 3 + 2 qui allie confort et fonctionnalité au quotidien. Recouvert d’un tissu anti-taches, il compte deux relax électriques au réglage doux et précis, complétés par deux relax manuels.',
    ],
    features: ['2 relax électriques', '2 relax manuels', 'Tissu anti-taches'],
    specs: [
      { label: 'Dimensions', value: '3 places : 198 × 97 cm · 2 places : 158 × 97 cm' },
      { label: 'Coloris', value: 'Beige · Camel' },
    ],
  },
  {
    slug: 'ensemble-51197-duo',
    name: 'Ensemble 51197 (2 + 2)',
    category: 'canapes',
    summary: 'Deux canapés 2 places : un relax électrique, un relax manuel.',
    description: [
      'Cet ensemble réunit deux canapés 2 places : l’un à relax électrique, l’autre à relax manuel.',
      'Le relax électrique règle dossier et repose-pieds d’une simple touche ; le relax manuel offre le même bien-être avec un système simple et pratique. Design contemporain, rembourrage douillet et finitions de grande qualité.',
    ],
    features: ['Relax électrique', 'Relax manuel'],
    specs: [{ label: 'Dimensions', value: '198 × 97 cm · 158 × 97 cm' }],
  },
  {
    slug: 'ensemble-51651',
    name: 'Ensemble 51651 (3 + 2)',
    category: 'canapes',
    summary: 'Relax manuel et tissu adapté aux animaux.',
    description: [
      'Ensemble 3 + 2 à relax manuel, au mécanisme inclinable simple et intuitif. Ses lignes modernes et accueillantes sont habillées d’un tissu adapté aux animaux, résistant et durable, idéal pour la détente en famille.',
    ],
    features: ['Relax manuel', 'Tissu adapté aux animaux'],
    specs: [
      { label: 'Dimensions', value: '3 places : 193 × 94 cm · 2 places : 142 × 94 cm' },
      { label: 'Coloris', value: 'Ash · Ice' },
    ],
  },
  {
    slug: 'ensemble-dublin',
    name: 'Ensemble Dublin (3 + 2)',
    category: 'canapes',
    summary: 'Deux relax électriques, soutien lombaire renforcé.',
    description: [
      'Ensemble 3 + 2 au design contemporain. Ses deux relax électriques se règlent simplement, et ses deux places fixes assurent stabilité et équilibre visuel.',
      'Recouvert d’un tissu doux au toucher, avec dossiers ergonomiques et soutien lombaire renforcé.',
    ],
    features: ['2 relax électriques', 'Soutien lombaire renforcé', 'Tissu doux au toucher'],
    specs: [{ label: 'Dimensions', value: '3 places : 195 × 90 cm · 2 places : 155 × 90 cm' }],
  },
  {
    slug: 'ensemble-2027',
    name: 'Ensemble 2027',
    category: 'canapes',
    summary: 'Canapé 3 places à relax électrique et fauteuil berçant.',
    description: [
      'Un ensemble élégant composé d’un canapé 3 places à relax électrique et d’un fauteuil berçant : le confort en double.',
    ],
    features: ['Relax électrique', 'Fauteuil berçant'],
    specs: [{ label: 'Dimensions', value: 'Canapé : 206 × 97 cm · Fauteuil : 101 × 101 cm' }],
  },
  {
    slug: 'ensemble-1007',
    name: 'Ensemble 1007 (3 + 2)',
    category: 'canapes',
    summary: 'Relax électriques et ports USB.',
    description: [
      'L’ensemble 1007 réunit confort et technologie : relax électriques et ports USB pour recharger vos appareils.',
      'Un design moderne et des matériaux de qualité pour un confort durable.',
    ],
    features: ['Relax électriques', 'Ports USB'],
    specs: [{ label: 'Dimensions', value: '3 places : 203 × 94 cm · 2 places : 150 × 94 cm' }],
  },
  {
    slug: 'ensemble-5277',
    name: 'Ensemble 5277 (3 + 2)',
    category: 'canapes',
    summary: 'Relax manuel, lignes élégantes.',
    description: [
      'L’ensemble 5277 dispose d’un mécanisme relax manuel. Son design élégant et moderne apporte une touche de raffinement au salon, avec un grand soin du détail.',
    ],
    features: ['Relax manuel'],
    specs: [{ label: 'Dimensions', value: '3 places : 195 × 97 cm · 2 places : 150 × 97 cm' }],
  },
  {
    slug: 'ensemble-9222',
    name: 'Ensemble 9222 (3 + 2 + 1)',
    category: 'canapes',
    summary: 'Canapé 3 places, 2 places et fauteuil à relax manuel.',
    description: [
      'Ensemble composé d’un canapé 3 places, d’un canapé 2 places et d’un fauteuil, à relax manuel. Design contemporain et rembourrage moelleux, fabriqué pour durer.',
    ],
    features: ['Relax manuel', 'Trois pièces'],
    specs: [{ label: 'Dimensions', value: '230 × 95 cm · 170 × 95 cm · 105 × 95 cm' }],
  },
  {
    slug: 'ensemble-9939',
    name: 'Ensemble 9939 (3 + 2 + 1)',
    category: 'canapes',
    summary: 'Relax manuel, format compact.',
    description: [
      'L’ensemble 9939 dispose d’une fonction relax manuelle pour trouver facilement le bon niveau de confort. Son design contemporain et son rembourrage moelleux en font aussi une belle pièce de décoration.',
      'Fabriqué avec des matériaux de qualité, il est conçu pour durer.',
    ],
    features: ['Relax manuel', 'Trois pièces'],
    specs: [{ label: 'Dimensions', value: '190 × 75 cm · 140 × 75 cm · 90 × 75 cm' }],
  },

  // Fauteuils
  {
    slug: 'fauteuil-miami',
    name: 'Fauteuil Miami',
    category: 'fauteuils',
    summary: 'Lignes organiques et base pivotante.',
    description: [
      'Fauteuil au design contemporain, aux lignes organiques et à la forte présence. Structure enveloppante, assise ergonomique et base pivotante.',
    ],
    features: ['Base pivotante', 'Assise ergonomique'],
    specs: [{ label: 'Dimensions', value: '110 × 85 cm' }],
  },
  {
    slug: 'fauteuil-lazy',
    name: 'Fauteuil Lazy',
    category: 'fauteuils',
    summary: 'Relax électrique, aide au lever et massage à air.',
    description: [
      'Fauteuil à relax électrique, au réglage doux et précis. Son système releveur facilite le lever au quotidien.',
      'Il intègre un massage à air pour une expérience relaxante et revigorante.',
    ],
    features: ['Relax électrique', 'Fauteuil releveur', 'Massage à air'],
    specs: [{ label: 'Dimensions', value: '80 × 80 cm' }],
  },
  {
    slug: 'fauteuil-71093',
    name: 'Fauteuil 71093',
    category: 'fauteuils',
    summary: 'Relax électrique à deux moteurs.',
    description: [
      'Fauteuil à relax électrique conçu pour le confort et le soutien ergonomique. Ses deux moteurs règlent séparément le dossier et le repose-jambes.',
      'Design élégant et rembourrage haut de gamme.',
    ],
    features: ['Relax électrique', 'Deux moteurs'],
  },
  {
    slug: 'fauteuil-55189',
    name: 'Fauteuil 55189',
    category: 'fauteuils',
    summary: 'Cuir et relax électrique.',
    description: [
      'Fauteuil en cuir avec relax électrique, offrant une grande liberté de mouvement et beaucoup de polyvalence dans l’espace.',
    ],
    features: ['Cuir', 'Relax électrique'],
    specs: [
      { label: 'Dimensions', value: '81 × 89 cm' },
      { label: 'Coloris', value: 'Beige' },
    ],
  },
  {
    slug: 'fauteuil-70785',
    name: 'Fauteuil 70785',
    category: 'fauteuils',
    summary: 'Pivotant à 360° et inclinable.',
    description: [
      'Le fauteuil 70785 unit design contemporain, fonctionnalité et bien-être. Pivotant à 360° et inclinable, il laisse trouver la position idéale pour lire ou se détendre.',
      'Son mécanisme d’inclinaison est doux et intuitif, et sa base pivotante se manœuvre sans effort.',
    ],
    features: ['Pivotant à 360°', 'Inclinable'],
    specs: [{ label: 'Dimensions', value: '101 × 101 cm' }],
  },
  {
    slug: 'fauteuil-1098',
    name: 'Fauteuil 1098',
    category: 'fauteuils',
    summary: 'Fauteuil au dessin épuré, en trois coloris.',
    description: ['Fauteuil au dessin épuré, proposé en trois coloris.'],
    specs: [
      { label: 'Dimensions', value: '71 × 81 cm' },
      { label: 'Coloris', value: 'Vert · Sand Cream · Fog Grey' },
    ],
  },
  {
    slug: 'fauteuil-71099',
    name: 'Fauteuil 71099',
    category: 'fauteuils',
    summary: 'Base pivotante et forme enveloppante.',
    description: [
      'Fauteuil à base pivotante, qui offre une totale liberté de mouvement. Sa forme enveloppante et ergonomique en fait un lieu de détente chaleureux.',
    ],
    features: ['Base pivotante', 'Forme enveloppante'],
    specs: [{ label: 'Coloris', value: 'Moss Green · Gris clair · Sand Cream' }],
  },
  {
    slug: 'table-55165',
    name: 'Table basse 2 en 1 55165',
    category: 'fauteuils',
    summary: 'Table basse qui se transforme en fauteuil.',
    description: [
      'Table basse polyvalente qui se transforme facilement en fauteuil. Elle intègre un rangement discret.',
      'Recouverte d’un tissu adapté aux animaux, résistant et facile à nettoyer.',
    ],
    features: ['2 en 1 : table et fauteuil', 'Rangement discret', 'Tissu adapté aux animaux'],
    specs: [
      { label: 'Dimensions', value: '120 × 64 cm' },
      { label: 'Coloris', value: 'Ash · Ice' },
    ],
  },

  // Entretien
  {
    slug: 'cleaning-pro',
    name: 'Cleaning Pro',
    category: 'entretien',
    summary: 'Nettoyant pour tissus d’ameublement.',
    description: [
      'Le Cleaning Pro est un nettoyant avancé qui élimine la saleté tenace et ravive les tissus d’ameublement. Sa formule professionnelle pénètre les fibres pour dissoudre taches, odeurs et résidus sans abîmer le tissu.',
      'Il retire les taches d’aliments, de boissons, d’huile, de transpiration, de poussière et de graisse, sans auréoles et sans altérer la couleur. Pour canapés, chaises, têtes de lit et fauteuils en tissu.',
    ],
    features: ['Pulvériser sur la surface', 'Frotter avec un chiffon humide', 'Laisser sécher naturellement'],
  },
  {
    slug: 'protecting-spray',
    name: 'Protecting Spray',
    category: 'entretien',
    summary: 'Protection imperméabilisante pour tissus.',
    description: [
      'Le Protecting Spray crée une barrière invisible sur les tissus d’ameublement. Il repousse les liquides, empêche l’absorption des graisses et réduit fortement le risque de taches permanentes.',
      'Il n’altère ni la texture, ni la couleur, ni la douceur du tissu, qui continue de respirer. Il prolonge la vie du mobilier et simplifie l’entretien.',
    ],
    features: [
      'Nettoyer la surface du canapé',
      'Pulvériser uniformément jusqu’à humidifier',
      'Laisser sécher environ 6 heures',
      'Renouveler tous les 6 mois',
    ],
  },
];

// ---------------------------------------------------------------------------

const FACTS = [
  { value: 'Près de 20 ans', label: 'de fabrication au Portugal' },
  { value: '260 000', label: 'cycles testés par mécanisme' },
  { value: '5 ans', label: 'de garantie sur le mécanisme breveté' },
];

const CATEGORIES: Record<string, Category> = {
  angles: { slug: 'angles', title: 'Canapés d’angle', intro: 'De la place pour toute la famille.' },
  meridiennes: { slug: 'meridiennes', title: 'Canapés avec méridienne', intro: 'S’allonger sans quitter le salon.' },
  canapes: { slug: 'canapes', title: 'Canapés et ensembles', intro: 'Canapés seuls et ensembles 3 + 2.' },
  fauteuils: { slug: 'fauteuils', title: 'Fauteuils', intro: 'Relax, pivotants, releveurs.' },
  entretien: { slug: 'entretien', title: 'Entretien', intro: 'Pour garder vos tissus comme neufs.' },
};

function catalogue(c: Omit<Catalogue, 'categories' | 'products' | 'facts' | 'frame'> & { categories: string[] }): Catalogue {
  return {
    ...c,
    facts: FACTS,
    frame: { ratio: '4 / 3', fit: 'cover' },
    categories: c.categories.map((k) => CATEGORIES[k]),
    products: PRODUCTS.filter((p) => c.categories.includes(p.category)),
  };
}

export const CATALOGUES: Catalogue[] = [
  catalogue({
    slug: '1',
    name: 'Catalogue 1',
    code: '01',
    specialty: 'Canapés d’angle et méridiennes',
    tagline: 'De la place pour s’étendre.',
    intro: [
      'Les grands formats : canapés d’angle et canapés avec méridienne, pour recevoir ou s’allonger en famille.',
      'Relax électriques, têtières réglables, assises coulissantes : chaque modèle s’adapte à votre façon de vous détendre.',
    ],
    visual: { product: 'meridienne-51698', index: 1, position: '38% 60%' },
    categories: ['angles', 'meridiennes'],
  }),
  catalogue({
    slug: '2',
    name: 'Catalogue 2',
    code: '02',
    specialty: 'Canapés et ensembles',
    tagline: 'Le salon, en toute harmonie.',
    intro: [
      'Canapés seuls et ensembles 3 + 2 assortis, pour composer un salon cohérent.',
      'Relax manuels ou électriques, tissus anti-taches ou adaptés aux animaux : des modèles pensés pour le quotidien.',
    ],
    visual: { product: 'canape-cloud', index: 1, position: '45% 60%' },
    categories: ['canapes'],
  }),
  catalogue({
    slug: '3',
    name: 'Catalogue 3',
    code: '03',
    specialty: 'Fauteuils et entretien',
    tagline: 'Votre coin à vous.',
    intro: [
      'Fauteuils relax, pivotants ou releveurs, pour le coin lecture ou télé.',
      'Et les produits d’entretien pour garder vos tissus comme neufs.',
    ],
    visual: { product: 'fauteuil-55189', index: 1, position: '50% 60%' },
    categories: ['fauteuils', 'entretien'],
  }),
];

// ---------------------------------------------------------------------------

const MANIFEST = IMAGES as unknown as Record<string, [number, number][]>;

function image(key: string, i: number, [width, height]: [number, number]): ProductImage {
  const base = `/catalogue/${key}-${i + 1}`;
  return { src: `${base}-1280.webp`, srcSet: `${base}-640.webp 640w, ${base}-1280.webp ${width}w`, width, height };
}

/** Photos du produit, la photo de couverture en premier. */
export function productImages(product: Product): ProductImage[] {
  const key = `produits/${product.slug}`;
  const list = (MANIFEST[key] ?? []).map((size, i) => image(key, i, size));
  const first = (product.cover ?? 1) - 1;
  return first > 0 && first < list.length ? [list[first], ...list.filter((_, i) => i !== first)] : list;
}

export function catalogueVisual(catalogue: Catalogue): ProductImage {
  const { product, index } = catalogue.visual;
  const key = `produits/${product}`;
  return image(key, index - 1, MANIFEST[key][index - 1]);
}

export function getCatalogue(slug: string) {
  return CATALOGUES.find((c) => c.slug === slug);
}

export function getProduct(catalogueSlug: string, productSlug: string) {
  const catalogue = getCatalogue(catalogueSlug);
  const product = catalogue?.products.find((p) => p.slug === productSlug);
  return catalogue && product ? { catalogue, product } : undefined;
}

export function productsByCategory(catalogue: Catalogue) {
  return catalogue.categories
    .map((category) => ({ category, products: catalogue.products.filter((p) => p.category === category.slug) }))
    .filter((g) => g.products.length > 0);
}

export const PRODUCT_COUNT = CATALOGUES.reduce((n, c) => n + c.products.length, 0);
