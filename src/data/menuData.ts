import { MenuItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Vuma Classic',
  tagline: 'Flame Grilled',
  address: '279 Main Street, Maboneng, Johannesburg',
  phone: '+27 72 934 9236',
  displayPhone: '072 934 9236',
  email: 'jvuma24@gmail.com',
  deliveryNotice: 'We Make Deliveries for Certain Quantity.',
  whatsappNumber: '27729349236',
  mrDFoodUrl: 'https://www.mrdfood.com/search?query=Vuma+Classic'
};

export const MENU_ITEMS: MenuItem[] = [
  // MAIN COURSE
  {
    id: 'beef-stew',
    name: 'Beef Stew',
    traditionalName: 'Isitshulu Senkomo',
    category: 'main-course',
    price: 70,
    description: 'Hearty tender beef cuts slow-cooked with fresh carrots, potatoes, and onions in our rich, savory gravy. Served with steaming hot pap or dombolo.',
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Full Meal with Pap/Rice',
    tags: ['Slow Simmered', 'Soul Food'],
    image: '/src/assets/images/vuma_real_kitchen_buffet_1791576207874.jpg'
  },
  {
    id: 'hardbody-chicken',
    name: 'Hardbody Chicken',
    traditionalName: 'Inkukhu YesiZulu',
    category: 'main-course',
    price: 70,
    description: 'Authentic free-range indigenous chicken gently braised for deep rustic flavor in seasoned thyme and brown onion broth. Served with fluffy pap or rice.',
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Traditional Portion with Pap',
    tags: ['Free-Range', 'Heritage Staple'],
    image: '/src/assets/images/vuma_real_kitchen_buffet_1791576207874.jpg'
  },
  {
    id: 'mogodu',
    name: 'Mogodu',
    traditionalName: 'Mala le Mogodu / Ulusu',
    category: 'main-course',
    price: 70,
    description: 'Cleaned and slow-simmered beef tripe and intestines cooked for hours until melt-in-mouth tender, served in natural aromatic gravy with hot pap.',
    isSignature: true,
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Hearty Bowl with Pap',
    tags: ['House Signature', 'Cooked Daily'],
    image: '/src/assets/images/vuma_mogodu_pap_1791572702797.jpg'
  },
  {
    id: 'inyama-yenhloko',
    name: 'Inyama Yenhloko',
    traditionalName: 'Skopo / Head Meat',
    category: 'main-course',
    price: 70,
    description: 'Traditional seasoned cow head meat, steamed tender and flavored with coarse salt and spices. A beloved South African township delicacy.',
    spiceLevel: 'Mild',
    servingSize: 'Generous Portion with Pap',
    tags: ['Heritage Classic', 'Tender Cuts'],
    image: '/src/assets/images/vuma_skopo_head_meat_1792351555946.jpg'
  },
  {
    id: 'liver',
    name: 'Liver',
    traditionalName: 'Isibindi',
    category: 'main-course',
    price: 70,
    description: 'Fresh ox/beef liver delicately seasoned and sautéed with sweet caramelized onions and rich savory sauce. Served with warm pap.',
    spiceLevel: 'Mild',
    servingSize: 'Full Portion with Pap',
    tags: ['Pan Sautéed', 'Savory'],
    image: '/src/assets/images/vuma_liver_isibindi_1792351556347.jpg'
  },

  // GRILLS
  {
    id: 'quarter-chicken-meal',
    name: '¼ Chicken Meal',
    traditionalName: 'Inkukhu Yomlilo (Quarter)',
    category: 'grills',
    price: 55,
    description: 'Juicy quarter chicken basted with our signature Vuma braai sauce and charred over glowing coals. Served on traditional wooden ugqoko board with hot pap or dombolo and fresh salads.',
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Served on Ugqoko + Pap/Dombolo + Salad',
    tags: ['Flame-Grilled', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_real_ugqoko_dombolo_chicken_1791576228562.jpg'
  },
  {
    id: 'half-chicken-meal',
    name: '½ Chicken Meal',
    traditionalName: 'Inkukhu Yomlilo (Half)',
    category: 'grills',
    price: 70,
    description: 'Half chicken flame-grilled over live embers with crispy seasoned skin and tender meat. Served on traditional carved wooden ugqoko board with steaming dombolo or pap and fresh salads.',
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Served on Ugqoko + Dombolo/Pap + Salad',
    tags: ['Flame-Grilled', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_real_ugqoko_dombolo_chicken_1791576228562.jpg'
  },
  {
    id: 'full-chicken-meal',
    name: 'Full Chicken Meal',
    traditionalName: 'Inkukhu Yonke Yomlilo',
    category: 'grills',
    price: 130,
    description: 'Whole chicken flame-grilled to perfection with smoky charcoal flavors, served on a grand carved wooden ugqoko board with steamed dombolo or pap and fresh salads.',
    isSignature: true,
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Grand Ugqoko Platter + Dombolo/Pap + Salad',
    tags: ['Sharing Feast', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_real_braai_chef_1791576217866.jpg'
  },
  {
    id: 'quarter-wors-meal',
    name: '¼ Wors Meal',
    traditionalName: 'I-Wors Yomdabu (Quarter)',
    category: 'grills',
    price: 55,
    description: 'Pure spiced farmhouse beef boerewors grilled over open fire, served sizzling hot on traditional wooden ugqoko board with fluffy pap and relish.',
    spiceLevel: 'Mild',
    servingSize: 'Served on Ugqoko + Pap + Salad',
    tags: ['Farmhouse Boerewors', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_flame_meat_board_1791572711948.jpg'
  },
  {
    id: 'full-wors-meal',
    name: 'Full Wors Meal',
    traditionalName: 'I-Wors Yomdabu (Full Coil)',
    category: 'grills',
    price: 110,
    description: 'Substantial full coil of authentic flame-grilled farmhouse boerewors with toasted coriander and spices, served on traditional wooden ugqoko board with pap and salads.',
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Full Wors on Ugqoko + Pap + Salad',
    tags: ['Flame Sizzled', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_flame_meat_board_1791572711948.jpg'
  },
  {
    id: 'quarter-steak-meal',
    name: '¼ Steak Meal',
    traditionalName: 'Inyama Yenkomo (Quarter)',
    category: 'grills',
    price: 55,
    description: 'Prime beef steak piece seared over hot coals with Vuma seasoning and baste, served on wooden ugqoko board with steaming pap and fresh salads.',
    spiceLevel: 'Mild',
    servingSize: 'Steak on Ugqoko + Pap + Salad',
    tags: ['Prime Beef', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_flame_meat_board_1791572711948.jpg'
  },
  {
    id: 'full-steak-meal',
    name: 'Full Steak Meal',
    traditionalName: 'Inyama Yenkomo (Full Cut)',
    category: 'grills',
    price: 110,
    description: 'Full cut prime beef steak flame-seared on the braai, juicy inside with smoky crust. Served on traditional carved wooden ugqoko board with pap and fresh salads.',
    isSignature: true,
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Full Cut on Ugqoko + Pap + Salad',
    tags: ['Braai Master Cut', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_flame_meat_board_1791572711948.jpg'
  },
  {
    id: 'steak-and-wors-meal',
    name: 'Steak & Wors Meal',
    traditionalName: 'Inyama ne Wors Combo',
    category: 'grills',
    price: 110,
    description: 'The definitive South African braai combination: flame-grilled steak and sizzling boerewors together, presented on our signature wooden ugqoko board with steaming pap and fresh salads.',
    isSignature: true,
    isPopular: true,
    spiceLevel: 'Mild',
    servingSize: 'Ugqoko Feast + Pap + Salad',
    tags: ['Top Seller', 'Served on Ugqoko'],
    image: '/src/assets/images/vuma_flame_meat_board_1791572711948.jpg'
  },

  // DRINKS & EXTRAS
  {
    id: 'salads',
    name: 'Salads',
    traditionalName: 'Amasaladi / Chakalaka',
    category: 'drinks-extras',
    price: 15,
    description: 'Fresh homemade chakalaka, creamy potato or fresh garden beetroot salad, prepared daily to accompany your meat.',
    isPopular: true,
    servingSize: 'Side Bowl',
    tags: ['Fresh Daily', 'Side'],
    image: '/src/assets/images/vuma_chakalaka_salads_1792351557002.jpg'
  },
  {
    id: 'extra-pap',
    name: 'Extra Pap',
    traditionalName: 'Ipapa Elingeziwe',
    category: 'drinks-extras',
    price: 15,
    description: 'Fresh steaming white maize meal pap, hot and fluffy.',
    servingSize: 'Generous Portion',
    tags: ['Staple Side'],
    image: '/src/assets/images/vuma_pap_portion_1792351557666.jpg'
  },
  {
    id: 'two-litre-coldrink',
    name: '2L Coldrink',
    traditionalName: 'Isiphuzo Esikhulu',
    category: 'drinks-extras',
    price: 30,
    description: 'Big 2-Litre sharing soda bottle. Choice of Coca-Cola, Fanta, Sprite, or Stoney Ginger Beer.',
    isPopular: true,
    servingSize: '2 Litre Bottle',
    tags: ['Ice Cold', 'Sharing Size'],
    image: '/src/assets/images/vuma_chilled_drinks_1792351557783.jpg'
  },
  {
    id: 'energy-drink',
    name: 'Energy Drink',
    traditionalName: 'Energy Drink',
    category: 'drinks-extras',
    price: 15,
    description: 'Chilled energy drink can to keep your vibe going in Maboneng.',
    servingSize: 'Can',
    tags: ['Chilled'],
    image: '/src/assets/images/vuma_chilled_drinks_1792351557783.jpg'
  },
  {
    id: 'red-bull',
    name: 'Red Bull',
    traditionalName: 'Red Bull Energy Drink',
    category: 'drinks-extras',
    price: 30,
    description: 'Ice-cold Red Bull Energy Drink (250ml).',
    servingSize: '250ml Can',
    tags: ['Ice Cold Premium'],
    image: '/src/assets/images/vuma_chilled_drinks_1792351557783.jpg'
  },
  {
    id: 'still-water',
    name: 'Still Water',
    traditionalName: 'Amanzi',
    category: 'drinks-extras',
    price: 15,
    description: 'Pure refreshing bottled still mineral water (500ml).',
    servingSize: '500ml Bottle',
    tags: ['Refreshing Hydration'],
    image: '/src/assets/images/vuma_chilled_drinks_1792351557783.jpg'
  }
];

export const VIBE_HIGHLIGHTS = [
  {
    title: 'Served on Ugqoko (Wooden Eating Boards)',
    subtitle: 'Steaming dombolo, flame chicken & authentic communal ritual',
    description: 'In true South African tradition, our flame-grilled cuts and stews are served on authentic hand-carved wooden platters known as ugqoko. Piping-hot steamed dombolo dumplings, grilled chicken, and fresh chakalaka are laid out for sharing directly from the wood.',
    image: '/src/assets/images/vuma_real_ugqoko_dombolo_chicken_1791576228562.jpg',
    tag: 'Ugqoko Tradition'
  },
  {
    title: 'Our Braai Master on the Live Fire Pit',
    subtitle: 'Real hardwood embers, live flame & seasoned chickens',
    description: 'At 279 Main Street in Maboneng, our braai master tends the open grill in his signature Vuma Classic apron. Watch the flames kiss the seasoned chicken quarters and wors coils as hardwood smoke billows into the air.',
    image: '/src/assets/images/vuma_real_braai_chef_1791576217866.jpg',
    tag: 'Live Braai Master'
  },
  {
    title: 'Fresh Traditional Pots & Stews',
    subtitle: 'Hardbody chicken, savory yellow rice & rich beef stew',
    description: 'Fresh from our kitchen bain-marie counter: tender free-range hardbody chicken stew, fragrant steaming yellow rice, and rich slow-simmered beef stew packed with potatoes and carrots. Pure comforting soul food prepared daily.',
    image: '/src/assets/images/vuma_real_kitchen_buffet_1791576207874.jpg',
    tag: 'Fresh Daily Pots'
  },
  {
    title: 'Evening at 279 Main Street: Zulu Ugqoko Feast',
    subtitle: 'Eating on carved wooden ugqoko boards with Zulu friends under bistro lights',
    description: 'As twilight falls on Maboneng, friends gather around our sidewalk tables to share a grand feast from authentic carved wooden ugqoko platters. Flame-kissed braai cuts, steaming dombolo, and pure Zulu communal warmth beside our glowing street fire pit.',
    image: '/src/assets/images/vuma_evening_zulu_ugqoko_storefront_1792353665643.jpg',
    tag: 'Zulu Ugqoko Feast'
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Khanyisile Mthethwa',
    role: 'Maboneng Resident',
    comment: 'The Mogodu for R70 is the most satisfying meal in Maboneng! Super tender, and the gravy with pap is pure heaven. The staff is always welcoming.',
    rating: 5,
    favoriteDish: 'Mogodu Meal'
  },
  {
    id: 'rev-2',
    author: 'Tshepo Ndlovu',
    role: 'Johannesburg Food Lover',
    comment: 'Steak & Wors combo for R110 with pap and salads is unbeatable. Real braai coals, smoky taste, and cold drinks. My go-to spot every weekend.',
    rating: 5,
    favoriteDish: 'Steak & Wors Meal'
  },
  {
    id: 'rev-3',
    author: 'Lindiwe Dlamini',
    role: 'Weekend Visitor',
    comment: 'The vibe here is incredible. Authentic traditional food right in the middle of 279 Main Street. That Hardbody chicken stew takes me straight back home.',
    rating: 5,
    favoriteDish: 'Hardbody Chicken'
  }
];
