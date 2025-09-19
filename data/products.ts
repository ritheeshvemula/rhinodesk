export interface Product {
  category: string;
  productType: string;
  productVariant?: string;
  name: string;
  description: string;
  colors?: string[];
  inStock: boolean;
  images: string[];
  hsl?: string;
}

export interface CategoryStructure {
  name: string;
  products: {
    name: string;
    types?: string[];
  }[];
}

export const categoryStructure: CategoryStructure[] = [
  {
    "name": "Tables",
    "products": [
      { "name": "MD Table" },
      { "name": "Conference Table", "types": ["U", "Pill", "Rectangular", "Curvilinear"] },
      { "name": "Discussion Table", "types": ["Rectangular", "Round", "PLB", "Glass"] },
      { "name": "Manager Table" },
      { "name": "Computer Table" },
      { "name": "Student Desk/Bench" },
      { "name": "Workstation", "types": ["Modular", "PLB", "Open Type"] },
      { "name": "Motorised Lift Table" },
      { "name": "Reception Table" },
      { "name": "Restaurant/Café" },
      { "name": "Cabin Table" },
      { "name": "Clerk/Office Table" }
    ]
  },
  {
    "name": "Chairs",
    "products": [
      { "name": "High Back" },
      { "name": "Medium Back" },
      { "name": "Plastic" },
      { "name": "Wooden" },
      { "name": "Student/Training" },
      { "name": "Boss Chair" },
      { "name": "Lounge/Café/Bar" },
      { "name": "Visitor Chairs" },
      { "name": "Waiting Chairs" },
      { "name": "Barstool" }
    ]
  },
  {
    "name": "Storage Systems",
    "products": [
      { "name": "PLB", "types": ["Almirah", "Pedestal", "Cabinets"] },
      {
        "name": "Steel Storage Systems",
        "types": [
          "File Cabinet (2-3-4 Drawers, File Pockets)",
          "Almirahs (With Locker, Without Locker, Glass Door, Minor)",
          "Industrial Lockers (6, 8, 12, 16, 18)",
          "Bookcase",
          "Slotted Angle Racks"
        ]
      }
    ]
  },
  {
    "name": "Sofas",
    "products": [
      { "name": "Fabric and PU Material" }
    ]
  },
  {
    "name": "Boards",
    "products": [
      { "name": "Writing Board", "types": ["White", "Green", "Black", "Blue"] },
      { "name": "Display Board", "types": ["Pin-up", "Cork", "Exhibition", "Shutter", "Slider", "Grooved", "Perforated"] }
    ]
  },
  {
    "name": "Podiums",
    "products": [
      { "name": "Stands", "types": ["Tripod", "4 leg"] }
    ]
  },
  {
    "name": "Magazine Stands",
    "products": [
      { "name": "PLB" },
      { "name": "Acrylic" }
    ]
  }
];

export const products: Product[] =[
  {
    "name": "Attitude Boss Chair",
    "category": "Chairs",
    "productVariant": "Premium",
    "productType": "Boss Chair",
    "colors": ["Tan", "Beige"],
    "description": "Premium boss chair with a multibend nylon body and moulded PU cushions, aluminium die‑cast padded fixed armrests, extra‑padded lumbar support, knee‑tilt synchro with multi‑position lock, and a sturdy 700 mm aluminium die‑cast base with 60 mm nylon castors and a reliable Class 4 gas lift.",
    "inStock": true,
    "images": [
      "/chairs/Attitude/bg2.png",
      "/chairs/Attitude/bg1.png",
      "/chairs/Attitude/bg3.png",
      "/chairs/Attitude/bg4.png",
    ],
    "hsl": "hsl(25, 35%, 30%)"
  },
  {
    "name": "Bently Boss Chair",
    "category": "Chairs",
    "productVariant": "Premium",
    "productType": "Boss Chair",
    "colors": ["Grey", "Camel", "Black"],
    "description": "Premium boss chair with a multibend plywood frame and moulded cushioning, upholstered in finest pure leather on seat and back, featuring padded fixed armrests, extra‑padded lumbar support, a knee‑tilt synchro mechanism with multi‑position lock, and a durable 700 mm aluminium die‑cast base with 60 mm nylon castors supported by a reliable Class 4 gas lift.",
    "inStock": true,
    "images": [
      "/chairs/Bently/bg1.png",
      "/chairs/Bently/bg2.png",
    ],
    "hsl": "hsl(0, 0%, 50%)"
  },
  {
    "name": "Calvin Boss Chair",
    "category": "Chairs",
    "productVariant": "Premium",
    "productType": "Boss Chair",
    "colors": ["Cream", "Tan"],
    "description": "Premium boss chair, hand‑crafted with finest‑grade leather or PU on seat and back over multibend hot‑pressed plywood, featuring aluminium armrests with cushioned pads, a knee‑tilt mechanism with multi‑position lock, and a sturdy 700 mm aluminium die‑cast base fitted with nylon castors.",
    "inStock": true,
    "images": [
     "/chairs/Calvin/bg1.png",
     "/chairs/Calvin/bg2.png",
    ],
    "hsl": "hsl(35, 50%, 80%)"
  },
  {
    "name": "Martin Boss Chair",
    "category": "Chairs",
    "productVariant": "Premium",
    "productType": "Boss Chair",
    "colors": ["Brown"],
    "description": "Premium boss chair, hand‑crafted with finest‑grade leather on seat and back over multibend hot‑pressed plywood, featuring aluminium die‑cast armrests padded in leather, integrated self‑in lumbar support, a synchro knee‑tilt mechanism with multi‑locking positions, and a sturdy 700 mm aluminium die‑cast base with nylon castors; available in brown.",
    "inStock": true,
    "images": [
      "/chairs/Martin/bg1.png",
      "/chairs/Martin/bg2.png",
    ],
    "hsl": "hsl(30, 40%, 25%)"
  },
  {
    "name": "Oyster Boss Chair",
    "category": "Chairs",
    "productVariant": "Premium",
    "productType": "Boss Chair",
    "colors": ["Black", "Beige"],
    "description": "Premium boss chair with a multibend plywood frame and moulded cushioning, upholstered in finest pure leather on seat and back, featuring padded fixed armrests, extra‑padded lumbar support, a knee‑tilt synchro mechanism with multi‑position lock, and a durable 700 mm aluminium die‑cast base with 60 mm nylon castors and a reliable Class 4 gas lift; available in black and beige.",
    "inStock": true,
    "images": [
      "/chairs/Oyster/bg1.png",
      "/chairs/Oyster/bg2.png",
    ],
    "hsl": "hsl(0, 0%, 95%)"
  },
  {
    "name": "Alex High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey", "Tan"],
    "description": "Experience superior comfort and durability with this ergonomically designed office chair. It features an adjustable headrest (available in high back model only), mesh backrest, and an eco-friendly fibre seat with an inbuilt slider for all-day support. The auto weight sensing mechanism ensures personalized seating comfort, while the 4-dimensional armrests with mesh pads provide full flexibility. Built with a strong aluminium base and smooth 60mm castors, this chair offers stability, mobility, and long-lasting performance—perfect for modern workspaces.",
    "inStock": true,
    "images": [
      "/chairs/alex/bg1.png",
      "/chairs/alex/bg2.png",
      "/chairs/alex/bg3.png",
      "/chairs/alex/bg4.png",
      "/chairs/alex/bg5.png",
    ],
    "hsl": "hsl(0, 0%, 20%)"
  },
  {
    "name": "Swan High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Ergonomic chair with adjustable lumbar, auto weight‑sensing recline and seat slider, breathable Yuva mesh back, 4D PU‑padded armrests, crystal chrome base with 60 mm castors, and an eco‑friendly fibre seat with built‑in slider.",
    "inStock": true,
    "images": [
      "/chairs/swan/bg1.png",
      "/chairs/swan/bg2.png",
      "/chairs/swan/bg3.png",
      "/chairs/swan/bg4.png",
      "/chairs/swan/bg5.png",
    ],
    "hsl": "hsl(0, 0%, 80%)"
  },
  {
    "name": "Echo High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Echo high‑back chair pairs an adjustable headrest with knee‑tilt comfort, plus adjustable lumbar and armrests on a gleaming crystal chrome base—engineered for posture support and executive polish.",
    "inStock": true,
    "images": [
      "/chairs/echo/bg1.png",
      "/chairs/echo/bg2.png",
    ],
    "hsl": "hsl(210, 10%, 40%)"
  },
  {
    "name": "Optimus High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Experience superior comfort and durability with this ergonomically designed office chair. It features an adjustable headrest (available in high back model only), mesh backrest, and an eco-friendly fibre seat with an inbuilt slider for all-day support. The auto weight sensing mechanism ensures personalized seating comfort, while the 4-dimensional armrests with mesh pads provide full flexibility. Built with a strong aluminium base and smooth 60mm castors, this chair offers stability, mobility, and long-lasting performance—perfect for modern workspaces.",
    "inStock": true,
    "images": [
     "/chairs/optimus/bg1.png",
     "/chairs/optimus/bg2.png",
    ],
    "hsl": "hsl(0, 0%, 20%)"
  },
  {
    "name": "Lucano High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Experience superior comfort and durability with this ergonomically designed office chair. It features an adjustable headrest (available in high back model only), mesh backrest, and an eco-friendly fibre seat with an inbuilt slider for all-day support. The auto weight sensing mechanism ensures personalized seating comfort, while the 4-dimensional armrests with mesh pads provide full flexibility. Built with a strong aluminium base and smooth 60mm castors, this chair offers stability, mobility, and long-lasting performance—perfect for modern workspaces.",
    "inStock": true,
    "images": [
      "/chairs/lucano/bg1.png",
      "/chairs/lucano/bg2.png",
      "/chairs/lucano/bg3.png",
    ],
    "hsl": "hsl(0, 0%, 25%)"
  },
  {
    "name": "Storm High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Storm blends smart ergonomics with everyday durability: an adjustable headrest, single‑lock tilt, adjustable lumbar support, and 2D PU‑padded armrests sit on a sturdy nylon base for smooth, reliable performance shift after shift.",
    "inStock": true,
    "images": [
      "/chairs/storm/bg1.png",
      "/chairs/storm/bg2.png",
      "/chairs/storm/bg3.png",
      "/chairs/storm/bg4.png",
    ],
    "hsl": "hsl(220, 10%, 20%)"
  },
  {
    "name": "Zinc High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Zinc keeps posture dialed‑in with an adjustable headrest, single‑lock tilt, adjustable lumbar support, and 2D chrome armrests with soft PU pads—all anchored by a tough nylon base for everyday reliability.",
    "inStock": true,
    "images": [
      "/chairs/zinc/bg1.png",
      "/chairs/zinc/bg2.png",
      "/chairs/zinc/bg3.png",
      "/chairs/zinc/bg4.png",
      "/chairs/zinc/bg5.png",
      "/chairs/zinc/bg6.png",
    ],
    "hsl": "hsl(0, 0%, 60%)"
  },
  {
    "name": "Matrix High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black"],
    "description": "Matrix blends smart ergonomics with everyday durability: an adjustable headrest, single‑lock tilt, adjustable lumbar support, and 2D PU‑padded armrests sit on a sturdy nylon base for smooth, reliable performance shift after shift.",
    "inStock": true,
    "images": [
      "/chairs/matrix/bg1.png",
      "/chairs/matrix/bg2.png",
      "/chairs/matrix/bg3.png",
      "/chairs/matrix/bg4.png",
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Alex Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey", "Tan"],
    "description": "Experience superior comfort and durability with this ergonomically designed office chair. It features a mesh backrest, and an eco-friendly fibre seat with an inbuilt slider for all-day support. The auto weight sensing mechanism ensures personalized seating comfort, while the 4-dimensional armrests with mesh pads provide full flexibility. Built with a strong aluminium base and smooth 60mm castors, this chair offers stability, mobility, and long-lasting performance—perfect for modern workspaces.",
    "inStock": true,
    "images": [
      "/chairs/mbc/alexmb/bg1.png",
      "/chairs/mbc/alexmb/bg2.png",
      "/chairs/mbc/alexmb/bg3.png",
      "/chairs/mbc/alexmb/bg4.png",
      "/chairs/mbc/alexmb/bg5.png",
      "/chairs/mbc/alexmb/bg6.png",
      "/chairs/mbc/alexmb/bg7.png",
      "/chairs/mbc/alexmb/bg8.png"
    ],
    "hsl": "hsl(30, 20%, 60%)"
  },
  {
    "name": "Echo Black Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Echo Medium‑back chair pairs knee‑tilt comfort with adjustable lumbar and armrests on a gleaming crystal chrome base—engineered for posture support and executive polish.",
    "inStock": true,
    "images": [
      "/chairs/mbc/echomb/bg1.png",
      "/chairs/mbc/echomb/bg2.png"
    ],
    "hsl": "hsl(0, 0%, 15%)"
  },
  {
    "name": "Amigo Black Mefium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Amigo delivers dependable ergonomics with a single‑lock tilt, sturdy nylon base, 2D PU‑padded armrests, and a smooth, durable Class‑4 gas lift for confident, everyday performance.",
    "inStock": true,
    "images": [
      "/chairs/mbc/amigomb/bg1.png",
      "/chairs/mbc/amigomb/bg2.png",
      "/chairs/mbc/amigomb/bg3.png"
    ],
    "hsl": "hsl(0, 0%, 20%)"
  },
  {
    "name": "Hive Grey Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Hive brings comfort into focus with single‑lock synchro tilt for natural movement, 2D PU‑padded armrests for quick fit, adjustable lumbar for day‑long support, and an eco‑friendly fibre seat on a claw chrome base that glides on 60 mm castors.",
    "inStock": true,
    "images": [
      "/chairs/mbc/hivemb/bg1.png",
      "/chairs/mbc/hivemb/bg2.png",
      "/chairs/mbc/hivemb/bg3.png",
      "/chairs/mbc/hivemb/bg4.png",
      "/chairs/mbc/hivemb/bg5.png"
    ],
    "hsl": "hsl(0, 0%, 70%)"
  },
  {
    "name": "Zita Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Meet Zita—where sleek design meets smart comfort. The single‑lock synchro tilt keeps posture balanced, while the 1‑way PP armrests dial in quick support for focused work. The claw chrome base and smooth 60 mm castors deliver stable, effortless glide from task to task. Upgrade the desk setup with refined mobility and reliable ergonomics in one clean silhouette.",
    "inStock": true,
    "images": [
      "/chairs/mbc/zitamb/bg1.png",
      "/chairs/mbc/zitamb/bg2.png",
      "/chairs/mbc/zitamb/bg3.png",
      "/chairs/mbc/zitamb/bg4.png"
    ],
    "hsl": "hsl(210, 5%, 50%)"
  },
  {
    "name": "Storm Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Storm blends smart ergonomics with everyday durability: single‑lock tilt, adjustable lumbar support, and 2D PU‑padded armrests sit on a sturdy nylon base for smooth, reliable performance shift after shift.",
    "inStock": true,
    "images": [
      "/chairs/mbc/stormmb/bg1.png",
      "/chairs/mbc/stormmb/bg2.png",
      "/chairs/mbc/stormmb/bg3.png",
      "/chairs/mbc/stormmb/bg4.png",
      "/chairs/mbc/stormmb/bg5.png",
      "/chairs/mbc/stormmb/bg6.png",
    ],
    "hsl": "hsl(220, 10%, 20%)"
  },
  {
    "name": "Zinc Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Zinc keeps single‑lock tilt, adjustable lumbar support, and 2D chrome armrests with soft PU pads—all anchored by a tough nylon base for everyday reliability.",
    "inStock": true,
    "images": [
      "/chairs/mbc/zincmb/bg1.png",
      "/chairs/mbc/zincmb/bg2.png",
      "/chairs/mbc/zincmb/bg3.png",
      "/chairs/mbc/zincmb/bg4.png",
      "/chairs/mbc/zincmb/bg5.png",
      "/chairs/mbc/zincmb/bg6.png"
    ],
    "hsl": "hsl(0, 0%, 60%)"
  },
  {
    "name": "Matrix Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Matrix blends smart ergonomics with everyday durability: single‑lock tilt, adjustable lumbar support, and 2D PU‑padded armrests sit on a sturdy nylon base for smooth, reliable performance shift after shift.",
    "inStock": true,
    "images": [
      
      "/chairs/mbc/matrixmb/bg1.png",
      "/chairs/mbc/matrixmb/bg2.png",
      "/chairs/mbc/matrixmb/bg3.png",
      "/chairs/mbc/matrixmb/bg4.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Butterfly High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Stay supported, stay focused. This ergonomic task chair features an adjustable headrest and mesh back with adjustable lumbar for breathable, personalized comfort. 2D adjustable nylon armrests and a cushioned seat keep posture aligned through long sessions, while a Class‑3 gas lift, sturdy nylon base, and smooth castors deliver reliable height control and effortless mobility.",
    "inStock": true,
    "images": [
      "/chairs/butterfly/bg1.png",
     
    ],
    "hsl": "hsl(0, 0%, 20%)"
  },
  {
    "name": "Hilite High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black", "Grey"],
    "description": "Breathe easy, sit strong. This mesh‑back task chair adds built‑in lumbar support for healthy posture, pairs a cushioned seat with 2D adjustable nylon armrests, and rides on a Class‑3 gas lift with a sturdy nylon base and smooth castors for effortless, all‑day mobility.",
    "inStock": true,
    "images": [
     "/chairs/hilite/bg1.png",
    ],
    "hsl": "hsl(0, 0%, 25%)"
  },
  {
    "name": "Jazz High Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "High Back",
    "colors": ["Black"],
    "description": "Stay supported, stay focused. This ergonomic task chair features an adjustable headrest and mesh back with adjustable lumbar for breathable, personalized comfort. 2D adjustable nylon armrests and a cushioned seat keep posture aligned through long sessions, while a Class‑3 gas lift, sturdy nylon base, and smooth castors deliver reliable height control and effortless mobility.",
    "inStock": true,
    "images": [
          "/chairs/jazz/bg1.png",    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Jazz Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Stay supported, stay focused. This ergonomic task chair features a mesh back with adjustable lumbar for breathable, personalized comfort. 2D adjustable nylon armrests and a cushioned seat keep posture aligned through long sessions, while a Class‑3 gas lift, sturdy nylon base, and smooth castors deliver reliable height control and effortless mobility.",
    "inStock": true,
    "images": [
      "/chairs/mbc/jmb.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Hilite Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "Grey"],
    "description": "Breathe easy, sit strong. This mesh‑back task chair adds built‑in lumbar support for healthy posture, pairs a cushioned seat with 2D adjustable nylon armrests, and rides on a Class‑3 gas lift with a sturdy nylon base and smooth castors for effortless, all‑day mobility.",
    "inStock": true,
    "images": [
      "/chairs/mbc/hmb.png"
    ],
    "hsl": "hsl(0, 0%, 25%)"
  },
  {
    "name": "Butterfly Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black", "White"],
    "description": "Breathe easy, sit strong. This mesh‑back task chair adds built‑in lumbar support for healthy posture, pairs a cushioned seat with 2D adjustable nylon armrests, and rides on a Class‑3 gas lift with a sturdy nylon base and smooth castors for effortless, all‑day mobility.",
    "inStock": true,
    "images": [
      "/chairs/mbc/bfmb.png"
    ],
    "hsl": "hsl(0, 0%, 95%)"
  },
  {
    "name": "Howler Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Breathe easy, work steady. This mesh‑back task chair pairs airflow comfort with a cushioned seat, fixed armrests, and a dependable Class‑3 gas lift. A sturdy nylon base with smooth castors keeps movement effortless and stable through every shift.",
    "inStock": true,
    "images": [
      "/chairs/mbc/hlmb.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "802 OPT Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Breathe easy, work steady. This mesh‑back task chair pairs airflow comfort with a cushioned seat, fixed armrests, and a dependable Class‑3 gas lift. A sturdy nylon base with smooth castors keeps movement effortless and stable through every shift.",
    "inStock": true,
    "images": [
      "/chairs/mbc/802.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "804 Python Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Breathe easy, work steady. This mesh‑back task chair pairs airflow comfort with a cushioned seat, fixed armrests, and a dependable Class‑3 gas lift. A sturdy nylon base with smooth castors keeps movement effortless and stable through every shift.",
    "inStock": true,
    "images": [
      "/chairs/mbc/804.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "805 Bruce Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Breathe easy, work steady. This mesh‑back task chair pairs airflow comfort with a cushioned seat, fixed armrests, and a dependable Class‑3 gas lift. A sturdy nylon base with smooth castors keeps movement effortless and stable through every shift.",
    "inStock": true,
    "images": [
      "/chairs/mbc/805.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Rudy Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "This mesh‑back task chair features a plush cushioned back for supportive comfort, a pressure‑relieving cushioned seat, and 2D adjustable nylon armrests for a dialed‑in fit. A reliable Class‑3 gas lift pairs with a sturdy nylon base and smooth castors to keep height changes easy and movement seamless all day.",
    "inStock": true,
    "images": [
      "/chairs/mbc/rmb.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Square Medium Back Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Medium Back",
    "colors": ["Black"],
    "description": "Breathe easy, work steady. This mesh‑back task chair pairs airflow comfort with a cushioned seat, 2D adjustable nylon armrests, and a dependable Class‑3 gas lift. A sturdy nylon base with smooth castors keeps movement effortless and stable through every shift.",
    "inStock": true,
    "images": [
      "/chairs/mbc/smb.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Zinc Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with comfort and poise. This visitor chair features a breathable mesh back with adjustable lumbar support, a pressure‑relieving cushioned seat, and 2D adjustable nylon armrests for a refined fit. The powder‑coated 14‑gauge S‑type base anchors the design with sturdy, lasting stability—perfect for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/zincvc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Jazz Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with comfort and poise. This visitor chair features a breathable mesh back with adjustable lumbar support, a pressure‑relieving cushioned seat, and 2D adjustable nylon armrests for a refined fit. The powder‑coated 14‑gauge S‑type base anchors the design with sturdy, lasting stability—perfect for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/jazzvc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Hilite Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with comfort and poise. This visitor chair features a breathable mesh back with adjustable lumbar support, a pressure‑relieving cushioned seat, and 2D adjustable nylon armrests for a refined fit. The powder‑coated 14‑gauge S‑type base anchors the design with sturdy, lasting stability—perfect for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/hlvc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Butterfly Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with comfort and poise. This visitor chair features a breathable mesh back with adjustable lumbar support, a pressure‑relieving cushioned seat, and 2D adjustable nylon armrests for a refined fit. The powder‑coated 14‑gauge S‑type base anchors the design with sturdy, lasting stability—perfect for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/bfvc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Howler Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with breathable comfort. This mesh‑back visitor chair pairs a pressure‑relieving cushioned seat with fixed armrests for an easy, tailored fit. A powder‑coated 14‑gauge S‑type base delivers sturdy, long‑lasting stability for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/hlbg.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "804 Python Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with breathable comfort. This mesh‑back visitor chair pairs a pressure‑relieving cushioned seat with fixed armrests for an easy, tailored fit. A powder‑coated 14‑gauge S‑type base delivers sturdy, long‑lasting stability for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/804vc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "805 Bruce Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with breathable comfort. This mesh‑back visitor chair pairs a pressure‑relieving cushioned seat with fixed armrests for an easy, tailored fit. A powder‑coated 14‑gauge S‑type base delivers sturdy, long‑lasting stability for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/805vc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Mini Maruti Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome in comfort and style. This visitor chair features a supportive cushioned back, a pressure‑relieving cushioned seat, and 2D adjustable nylon armrests for a tailored sit. The powder‑coated 14‑gauge S‑type base provides rock‑solid stability and a refined finish for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/mmvc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Zebra Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Welcome with breathable comfort. This mesh‑back visitor chair pairs a cushioned seat with fixed armrests for an easy, tailored fit. A powder‑coated 14‑gauge S‑type base delivers sturdy, long‑lasting stability for reception areas, cabins, and meeting rooms.",
    "inStock": true,
    "images": [
      "/chairs/visitor/zebravc.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "ISO - Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "Designed for durability and everyday comfort, this chair features a rectangular 12-gauge powder-coated frame with four sturdy black legs. The cushioned seat and cushioned back offer supportive comfort, while the sleek design blends seamlessly into professional or casual settings. Available in two options — with fixed armrests for added support or without armrests for a more open, versatile style — this chair adapts easily to offices, conference rooms, dining spaces, and waiting areas.",
    "inStock": true,
    "images": [
     "/chairs/visitor/isobg2.png",
     "/chairs/visitor/isobg1.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Classic - Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Black"],
    "description": "This S-Type chair combines durability with modern design. Built on a strong 14-gauge round pipe frame, it offers reliable support and long-lasting use. The seat and back are fitted with nylon cane for comfortable seating, complemented by a sturdy wooden frame that adds warmth and style. Available in two models — with fixed armrests for added comfort or without armrests for a sleek, versatile look — this chair is an ideal choice for homes, offices, and waiting areas alike.",
    "inStock": true,
    "images": [
      "/chairs/visitor/classicbg2.png",
     "/chairs/visitor/classicbg1.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Peacock - Visitor Chair",
    "category": "Chairs",
    "productVariant": "Economy",
    "productType": "Visitor Chairs",
    "colors": ["Wooden"],
    "description": "This is a classic wooden chair with four sturdy legs, designed for both durability and comfort. The frame is crafted from solid wood, giving it a timeless and natural look. The seat and backrest are both cushioned, providing extra support and softness for extended sitting. The upholstered cushions contrast elegantly with the wooden structure, making the chair suitable for dining rooms, offices, or living spaces.",
    "inStock": true,
    "images": [
      "/chairs/visitor/pcvcbg1.png",
     "/chairs/visitor/pcvcbg2.png"
    ],
    "hsl": "hsl(35, 30%, 40%)"
  },
  {
    "name": "Supreme Bell",
    "category": "Chairs",
    "productVariant": "Plastic",
    "productType": "Plastic",
    "colors": ["Red", "Blue", "Green", "White", "Black"],
    "description": "Bell is a premium heavy-duty plastic chair designed for ultimate comfort. The contoured seat and spring action provide superior support, making it perfect for extended sitting. Crafted with high-quality materials, this chair ensures durability and long-lasting use. Its ergonomic design combines both style and function, offering comfort in every seating experience, whether in a cafeteria, study, or multipurpose setting.",
    "inStock": true,
    "images": [
      "/chairs/Plastic/supremebell.png",
    ],
    "hsl": "hsl(200, 80%, 50%)"
  },
  {
    "name": "Supreme Omega",
    "category": "Chairs",
    "productVariant": "Plastic",
    "productType": "Plastic",
    "colors": ["Red", "Blue", "Yellow", "Black"],
    "description": "Experience the durability and versatility of our Omega Armless Plastic Chairs. Crafted with precision using high-grade glass reinforced polymers and advanced gas injection moulding technology, these plastic chairs are built to last. The premium matt finish adds a touch of elegance to any setting, while the armless design ensures maximum seating capacity. Easy to maintain and stackable for convenient storage.",
    "inStock": true,
    "images": [
      "/chairs/Plastic/supremeomega.png",
    ],
    "hsl": "hsl(50, 90%, 50%)"
  },
  {
    "name": "Supreme Hybrid",
    "category": "Chairs",
    "productVariant": "Plastic",
    "productType": "Plastic",
    "colors": ["White", "Black", "Grey"],
    "description": "Introducing the Hybrid Plastic Chairs with steel legs from Supreme, designed to elevate your seating experience with a perfect blend of style and functionality. Crafted with a premium hybrid material, these plastic chairs feature a durable polypropylene (PP) seat supported by sleek stainless steel (SS) legs. The armless design offers freedom of movement while maintaining a modern aesthetic. Lightweight and easy to handle, these chairs are ideal for both indoor and outdoor use.",
    "inStock": true,
    "images": [
      "/chairs/Plastic/supremehybrid.png"
    ],
    "hsl": "hsl(0, 0%, 90%)"
  },
  {
    "name": "Supreme Lumina",
    "category": "Chairs",
    "productVariant": "Plastic",
    "productType": "Plastic",
    "colors": ["Brown", "Beige"],
    "description": "Introducing the Lumina Armless Plastic Chairs, a premium seating solution crafted for both style and comfort. Designed with a sleek rattan finish, these armless chairs exude sophistication while offering exceptional durability. The intelligent design adapts seamlessly to your seating posture, ensuring ergonomic support throughout extended periods of use.",
    "inStock": true,
    "images": [
      "/chairs/Plastic/supremelumina.png"
    ],
    "hsl": "hsl(30, 25%, 50%)"
  },
  {
    "name": "Supreme Oasis",
    "category": "Chairs",
    "productVariant": "Plastic",
    "productType": "Plastic",
    "colors": ["Green", "Blue", "White"],
    "description": "Supreme's Oasis Armless Plastic Chairs, designed for both comfort and durability. Crafted with precision using glass reinforced polymer and gas-assisted molding technology, these plastic chairs boast exceptional strength and resilience. The extra-wide design, featuring a combed back and seat, offers ergonomic comfort, making them perfect for long hours of sitting.",
    "inStock": true,
    "images": [
      "/chairs/Plastic/supremeoasis.png"
    ],
    "hsl": "hsl(120, 40%, 60%)"
  },
  {
    "name": "Barstool Harry",
    "category": "Chairs",
    "productVariant": "Barstool",
    "productType": "Barstool",
    "colors": ["Black"],
    "description": "Premium barstool with a chromium‑coated metal structure, smooth height adjustment and 360° revolving function, without a supportive backrest and soft cushioning finished in leatherette upholstery.",
    "inStock": true,
    "images": [
      "/chairs/barstool/harrybg.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Barstool Hermoine",
    "category": "Chairs",
    "productVariant": "Barstool",
    "productType": "Barstool",
    "colors": ["Black"],
    "description": "Premium barstool with a chromium‑coated metal structure, smooth height adjustment and 360° revolving function, and a supportive backrest with soft cushioning finished in leatherette upholstery.",
    "inStock": true,
    "images": [
      "/chairs/barstool/hermoinebg.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Barstool Weasly",
    "category": "Chairs",
    "productVariant": "Barstool",
    "productType": "Barstool",
    "colors": ["Black"],
    "description": "Premium barstool with a chromium‑coated metal structure, smooth height adjustment and 360° revolving function, and a supportive bucket seat with soft cushioning finished in leatherette upholstery.",
    "inStock": true,
    "images": [
      "/chairs/barstool/weaslybg.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Barstool Malfoy",
    "category": "Chairs",
    "productVariant": "Barstool",
    "productType": "Barstool",
    "colors": ["Black"],
    "description": "Classic barstool design with a durable nylon seating shell and a heavy‑duty metal frame finished in a wood‑look coating, offered in a range of vibrant color options.",
    "inStock": true,
    "images": [
      "/chairs/barstool/malfoybg.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "Barstool Cedric",
    "category": "Chairs",
    "productVariant": "Barstool",
    "productType": "Barstool",
    "colors": ["Black"],
    "description": "Heavy‑duty metal understructure with a 70–80 micron powder‑coat finish that is both scratch and impact resistant.",
    "inStock": true,
    "images": [
      "/chairs/barstool/cedricbg.png"
    ],
    "hsl": "hsl(0, 0%, 10%)"
  },
  {
    "name": "MD Table - Attached Side Unit",
    "category": "Tables",
    "productType": "MD Table",
    "description": "This executive MD table is designed to deliver both elegance and durability, with fully customizable features to suit any workspace. Constructed from PLB (Pre-Laminated Particle Board), it offers a premium finish, long-lasting strength, and easy maintenance. The table is available with a 36mm or 50mm top and a 25mm or 36mm body, allowing you to choose the right balance of style and sturdiness. An attached side runner can be placed on either the left-hand side (LHS) or right-hand side (RHS), paired with customizable storage options for convenience and efficiency. The design also includes a modesty panel, offered in your choice of size and color, with available design elements and integrated wire managers to ensure a neat, professional look. To complete the setup, you can select from a wide range of customizable colors, making this table a perfect fit for any modern office environment.",
    "inStock": true,
    "images": [
      "/tables/mda1.png",
      "/tables/mda2.png",
      "/tables/mda3.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png"
    ]
  },
  {
    "name": "MD Table - Detached Side Unit",
    "category": "Tables",
    "productType": "MD Table",
    "description": "This executive MD Table is built to combine flexibility, durability, and modern aesthetics. Crafted from PLB (Pre-Laminated Particle Board), it offers a premium finish with easy maintenance and long-lasting strength. The table is available with a 36mm or 50mm top and a 25mm or 36mm body, giving you options to match your workspace requirements. A detached side runner, customizable on the left-hand side (LHS) or right-hand side (RHS) and movable as per order, adds versatility and functionality. Storage configurations can be fully customized to suit your organizational needs. For added style and practicality, the table includes a modesty panel in your choice of size, color, and design elements, complete with wire managers to maintain a clean, organized workspace. To ensure seamless integration into any office interior, the table is also available in a wide range of customizable colors.",
    "inStock": true,
    "images": [
      "/tables/mdd1.png",
      "/tables/mdd2.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png"
    ]
  },
  {
    "name": "Curvilinear Conference Table",
    "category": "Tables",
    "productType": "Conference Table",
    "description": "Curvilinear Conference Table crafted from PLB (Pre-Laminated Particle Board). Available with 36mm or 50mm top and 25mm or 36mm body. Equipped with wire managers for a neat and organized workspace. Size customizable based on seating capacity — see next slide for recommendations.",
    "inStock": true,
    "images": [
      "/tables/ctbg1.png",
      "/tables/ctbg2.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png",
      "/tables/ctdata3.png"
    ]
  },
  {
    "name": "Rectanguler Conference Table",
    "category": "Tables",
    "productType": "Conference Table",
    "description": "This rectangular-shaped conference table is made from PLB (Pre-Laminated Particle Board) with options of 36mm or 50mm top and 25mm or 36mm body. It comes with wire managers for a clean and professional setup. Size is customizable depending on seating capacity — see next slide for recommendations.",
    "inStock": true,
    "images": [
      "/tables/rctbg.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png",
      "/tables/ctdata3.png"
    ]
  },
  {
    "name": "Pill Shaped Conference Table",
    "category": "Tables",
    "productType": "Conference Table",
    "description": "This pill-shaped conference table is crafted from PLB (Pre-Laminated Particle Board) and available with a 36mm or 50mm top and 25mm or 36mm body. Designed with wire managers, it ensures neat cable management. Size is customizable based on seating capacity — see next slide for recommendations.",
    "inStock": true,
    "images": [
      "/tables/pillctbg.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png",
      "/tables/ctdata3.png"
    ]
  },
  {
    "name": "U Shape Conference Table",
    "category": "Tables",
    "productType": "Conference Table",
    "description": "This U-shaped conference table is constructed from PLB (Pre-Laminated Particle Board) with a choice of 36mm or 50mm top and 25mm or 36mm body. It includes wire managers for organized use. Size is customizable depending on seating arrangement — see next slide for recommendations.",
    "inStock": true,
    "images": [
      "/tables/uctbg.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png",
      "/tables/ctdata3.png"
    ]
  },
  {
    "name": "PLB Discussion Table",
    "category": "Tables",
    "productType": "Discussion Table",
    "description": "Available in round or rectangular shapes, this table is crafted from PLB (Pre-Laminated Particle Board) with options of 18mm or 25mm top. Round models come in 2.5 ft, 3 ft, 3.5 ft, and 4 ft diameters, making them suitable for a variety of spaces. Offered in the color of your choice to match your interior.",
    "inStock": true,
    "images": [
      "/tables/rdt.png",
      "/tables/sdt.png"
    ]
  },
  {
    "name": "Glass Discussion Table",
    "category": "Tables",
    "productType": "Discussion Table",
    "description": "Available in round or rectangular shapes, this table features a glass top supported by strong steel frames for a modern, durable finish. Round models are offered in 2.5 ft, 3 ft, 3.5 ft, and 4 ft diameters, providing options for different spaces.",
    "inStock": true,
    "images": [
      "/tables/gdt.png"
    ]
  },
  {
    "name": "PLB Podium",
    "category": "Podiums",
    "productType": "Podiums",
    "description": "Crafted from PLB (Pre-Laminated Particle Board) with options of 18mm or 25mm thickness for the full body. Available in customizable sizes, designs, and colors to match your requirements. Includes provision for microphone, making it ideal for lectures, conferences, and presentations.",
    "inStock": true,
    "images": [
      "/tables/pp.png"
    ]
  },
  {
    "name": "Acrylic Podium",
    "category": "Podiums",
    "productType": "Podiums",
    "description": "A modern statement piece that blends elegance with functionality. Crafted from clear, durable acrylic, this podium adds a contemporary touch to any stage or presentation setting. Its minimalist design offers a professional look while maintaining strength and stability, making it perfect for conferences, lectures, and events.",
    "inStock": true,
    "images": [
      "/tables/ap.png"
    ]
  },
  {
    "name": "PLB Pedestals",
    "category": "Storage Systems",
    "productType": "PLB",
    "description": "Office pedestal made from PLB with customizable storage configurations—choose 1 shutter door, a combo of 1 drawer plus 1 shutter, or a 3‑drawer setup, all with smooth handles and optional central locking; available in multiple colors and finishes, with either mobile castor base or fixed legs, custom sizes on request, and a standard size of 16\" x 16\" x 24\".",
    "inStock": true,
    "images": [
      "/ss/plbpedestals.png",
      "/ss/data2.png"
    ]
  },
  {
    "name": "PLB Almirahs",
    "category": "Storage Systems",
    "productType": "PLB",
    "description": "PLB almirah range crafted in premium pre‑laminated board, offered in 2‑door or 4‑door configurations with 5–6 adjustable shelves, lockable hardware, and customizable interiors, colors, and finishes; sizes are fully configurable, with a standard footprint of 6H x 3W x 19D.",
    "inStock": true,
    "images": [
     "/ss/plbalmirah.png",
      "/ss/data2.png"
    ]
  },
  {
    "name": "PLB Cabinets",
    "category": "Storage Systems",
    "productType": "PLB",
    "description": "PLB storage cabinets crafted from pre‑laminated board with fully customizable configurations—choose hinged or sliding doors, adjustable 5–6 shelf layouts, locking options, and a wide range of colors and finishes; sizes can be tailored to requirement, with the standard size set at 2.5' H x 3' W x 16\" D.",
    "inStock": true,
    "images": [
      "/ss/plbcabinets.png",
      "/ss/plbcabinets2.png",
      "/ss/data2.png"
    ]
  },
  {
    "name": "Modular Closed Workstation",
    "category": "Tables",
    "productType": "Workstation",
    "description": "Designed for durability and practicality, this workstation features a 50mm × 50mm powder-coated frame and legs for a strong foundation. The tabletop is available in 18mm or 25mm PLB (Pre-Laminated Particle Board) or plywood, with sides supported by a 50mm × 50mm frame. Comes with provision for wire management to keep the workspace neat and clutter-free. Users can also opt for a pin-up board or whiteboard. Fully customizable in size, design, and color, making it a versatile solution for modern offices.",
    "inStock": true,
    "images": [
      "/tables/ws1.png",
      "/tables/wsdata.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png"
    ]
  },
  {
    "name": "Open Type Workstation",
    "category": "Tables",
    "productType": "Workstation",
    "description": "Built for flexibility and efficiency, this workstation features a 50mm × 50mm powder-coated frame and legs for robust support. The tabletop is available in 18mm or 25mm PLB (Pre-Laminated Particle Board) or plywood, with sides framed by 50mm × 50mm supports. Includes provision for wire management to maintain a clean workspace. Optional pin-up board or whiteboard can be added. Fully customizable in size, design, and color, ideal for collaborative and modern office environments.",
    "inStock": true,
    "images": [
      "/tables/ws2.png",
      "/tables/wsdata.png",
      "/tables/wsdata2.png",
      "/tables/wsdata3.png"
    ]
  },
  {
    "name": "Double Pedestal Table",
    "category": "Tables",
    "productType": "Workstation",
    "description": "This table features a durable 18mm, 25mm, or 36mm top and body for long-lasting use. Designed with customizable attached storage on both sides, it offers ample space for organization. Optional provisions for a keyboard tray and footrest enhance functionality and comfort. Fully customizable in size, design, and color to suit any office or workspace.",
    "inStock": true,
    "images": [
      "/tables/dpt.png"
    ]
  },
  {
    "name": "Single Pedestal Table",
    "category": "Tables",
    "productType": "Workstation",
    "description": "This table is built with a durable 18mm, 25mm, or 36mm top and body for long-lasting performance. It comes with customizable attached storage on either side for convenient organization. Optional keyboard tray and footrest provisions enhance comfort and usability. Fully customizable in size, design, and color to fit any office or workspace.",
    "inStock": true,
    "images": [
      "/tables/spt.png"
    ]
  },
  {
    "name": "Simple Table",
    "category": "Tables",
    "productType": "Workstation",
    "description": "Manufactured with 18mm, 25mm, or 36mm top and body, this table combines simplicity with functionality. Available with one drawer or without a drawer, and includes a modesty panel for a clean, professional look. Fully customizable in size, design, and color to suit any workspace.",
    "inStock": true,
    "images": [
      "/tables/st.png"
    ]
  },
  {
    "name": "Steel S Pedestal Table",
    "category": "Tables",
    "productType": "Workstation",
    "description": "Manufactured with a 25mm PLB top and a mild steel 14-gauge square or round pipe frame, this table features attached pedestals on either of side for strength and durability. Includes a footrest for added comfort. Fully customizable in size, design, and color, making it ideal for modern office environments.",
    "inStock": true,
    "images": [
      "/tables/sspt.png"
    ]
  },
  {
    "name": "Steel D Pedestal Table",
    "category": "Tables",
    "productType": "Workstation",
    "description": "Manufactured with a 25mm PLB top and a mild steel 14-gauge square or round pipe frame, this table features attached pedestals on each side for strength and durability. Includes a footrest for added comfort. Fully customizable in size, design, and color, making it ideal for modern office environments.",
    "inStock": true,
    "images": [
      "/tables/sdpt.png"
    ]
  },
  {
    "name": "Bookcase",
    "category": "Storage Systems",
    "productType": "Steel Storage Systems",
    "description": "A durable mild‑steel bookcase designed in two standard footprints—78\" H x 33\" W x 15\" D for high‑capacity storage and 66\" H x 33\" W x 12\" D for compact aisles—built from 22/24‑gauge CRCA sheets for strength with reasonable weight. The unit is offered in 4‑compartment or 5‑compartment layouts, typically with lockable glass or solid doors, making it suitable for organized document or library storage in offices and schools.",
    "inStock": true,
    "images": [
      "/ss/bookcase.png",
      "/ss/data1.png"
    ]
  },
  {
    "name": "Almirah",
    "category": "Storage Systems",
    "productType": "Steel Storage Systems",
    "description": "A full‑height steel almirah in two popular sizes—78\" H x 36\" W x 19\" D for maximum volume and 54\" H x 30\" W x 17\" D for mid‑height storage—constructed in 20–22 gauge CRCA sheets for a balance of rigidity and value. Available in plain, locker‑type, or glass‑door variants with multiple shelves, powder‑coat or enamel finishes, and secure cam locking for versatile office, institutional, or home storage.",
    "inStock": true,
    "images": [
      "/ss/almirah.png",
      "/ss/data1.png"
    ]
  },
  {
    "name": "Industrial Locker",
    "category": "Storage Systems",
    "productType": "Steel Storage Systems",
    "description": "A robust staff/storage locker cabinet sized 78\" H x 36\" W x 19\" D, configurable in 6, 8, 10, 12, 15, 18, or 24 compartments to suit workforce headcount and item size. Fabricated from 20–22 gauge steel with individual doors and key/pad‑lock options, it delivers secure, organized personal storage for factories, gyms, warehouses, and offices.",
    "inStock": true,
    "images": [
      "/ss/lockers.png",
      "/ss/data1.png"
    ]
  },
  {
    "name": "Slotted Angle Racks",
    "category": "Storage Systems",
    "productType": "Steel Storage Systems",
    "description": "Modular slotted‑angle shelving offered in common footprints—heights of 4', 5', 6', 7', 8', 9', 10'; widths of 3' or 4'; depths of 12\", 15\", 18\", or 24\"—allowing easy layout planning for stores and warehouses. Frames use 14‑gauge angles with adjustable 22‑gauge shelves, assembled by nuts and bolts, delivering reliable load capacity with economical, reconfigurable storage.",
    "inStock": true,
    "images": [
      "/ss/sar.png",
      "/ss/sar1.png",
      "/ss/sar2.png",
      "/ss/sar3.png",
      "/ss/data1.png"
    ]
  },
  {
    "name": "Filing Cabinets",
    "category": "Storage Systems",
    "productType": "Steel Storage Systems",
    "description": "Space‑efficient vertical filing cabinets in 2, 3, or 4‑drawer versions sized around 54\" H x 18.5\" W x 27\" D for 4‑drawer, 42\" H for 3‑drawer, and 29\" H for 2‑drawer, optimized for full‑suspension files. Built from 22‑gauge steel with powder‑coated finish and a central locking system, the drawers run on heavy‑duty ball‑bearing slides for smooth, secure access to high‑density office files.",
    "inStock": true,
    "images": [
      "/ss/filingcabinet.png",
      "/ss/filingpocket.png",
      "/ss/data1.png"
    ]
  },
  {
    "name": "White Writing Board",
    "category": "Boards",
    "productType": "Writing Board",
    "description": "Whiteboard with a smooth ceramic steel/resin/laminate front, stable MDF core, and Galvanized Iron (GI) sheet backing to prevent warping. Framed in aluminium with protective ABS plastic corners for durability, easy writing, and clean erasing.",
    "inStock": true,
    "images": [
      "/boards/wbbg.png",
      "/boards/fs.png",
      "/boards/ts.png",
      "/boards/bdata.png",
      "/boards/bdata2.png",
    ]
  },
  {
    "name": "Green Writing Board",
    "category": "Boards",
    "productType": "Writing Board",
    "description": "Greenboard with a smooth ceramic steel/resin/laminate front, stable MDF core, and Galvanized Iron (GI) sheet backing to prevent warping. Framed in aluminium with protective ABS plastic corners for durability, easy writing, and clean erasing.",
    "inStock": true,
    "images": [
      "/boards/gbbg.png",
      "/boards/fs.png",
      "/boards/ts.png",
      "/boards/bdata.png",
      "/boards/bdata2.png",
    ]
  },
  {
    "name": "Cork/Pinup Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Cork/Pinup board with a fabric or natural cork front, imported soft board core for firm pin hold, and Galvanized Iron (GI) sheet backing to resist warping. Framed in aluminium with protective ABS plastic corners for durability and clean, professional finish.",
    "inStock": true,
    "images": [
      "/boards/pbbg.png"
    ]
  },
  {
    "name": "Perforated Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Perforated black board with a sleek framed edge, offered in durable aluminium or lightweight plastic, and reinforced with a protective laminate backing for added rigidity and long‑lasting performance.",
    "inStock": true,
    "images": [
      "/boards/fbbg.png"
    ]
  },
  {
    "name": "Combination Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Combination board featuring a dual-surface design with fabric or felt for pin‑ups alongside a white writing or green chalk surface, set in a sleek aluminium or durable plastic frame and reinforced with a back laminate for added rigidity and long‑lasting performance.",
    "inStock": true,
    "images": [
     "/boards/cbbg.png"
    ]
  },
  {
    "name": "Grooved Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Grooved welcome board with a rich red grooved felt surface, set in elegant golden plastic frames and reinforced with a back laminate for rigidity; ideal for receptions and events, with compatible changeable letter sets available.",
    "inStock": true,
    "images": [
      "/boards/gbbg1.png",
      "/boards/gbbg2.png",
      "/boards/gs.png"
    ]
  },
  {
    "name": "Shutter Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Lockable shutter notice board with a clear swing‑open acrylic door and key lock, set in a sleek aluminium frame; features a durable pin‑up surface inside and a laminate‑backed panel for added rigidity—ideal for secure displays in corridors, receptions, and classrooms.",
    "inStock": true,
    "images": [
      "/boards/shbg.png"
    ]
  },
  {
    "name": "Sliding Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Aluminium‑framed sliding notice board with twin clear acrylic doors that glide smoothly on bottom tracks, a fabric pin‑up surface inside, and a laminate‑backed panel for rigidity—secure, space‑saving display ideal for corridors and reception areas.",
    "inStock": true,
    "images": [
     "/boards/slbg.png"
    ]
  },
  {
    "name": "Flip Chart Board",
    "category": "Boards",
    "productType": "Display Board",
    "description": "Height‑adjustable flip chart board with a stable tripod or circular base, magnetic dry‑erase surface, universal flip‑pad clamp, and smooth tilt/rotation for easy presenting—ideal for training rooms, meetings, and classrooms.",
    "inStock": true,
    "images": [
      "/boards/fcb.png"
    ]
  }
]








export const getUniqueCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getProductTypes = (category: string): string[] => {
  const categoryData = categoryStructure.find(cat => cat.name === category);
  if (!categoryData) return [];
  return categoryData.products.map(product => product.name);
};

export const getProductVariants = (category: string, productType: string): string[] => {
  const categoryData = categoryStructure.find(cat => cat.name === category);
  if (!categoryData) return [];
  const product = categoryData.products.find(p => p.name === productType);
  return product?.types || [];
};