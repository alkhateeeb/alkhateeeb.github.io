/**
 * Alkhateeb Apiary — Product Data & Helper Functions
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO UPDATE AVAILABILITY:
 *   Set stockPercent (0–100) for each product below.
 *     >= 70  →  🟢 Green  (Fairly Available)
 *     >= 40  →  🟡 Yellow (Limited Quantities)
 *      < 40  →  🔴 Red    (Order Quickly!)
 *
 * HOW TO UPDATE PRICES / SIZES:
 *   Edit the sizes[] array.  Three entries: 250 g, 500 g, and 1 kg.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const PRODUCTS = [
  {
    id: 1,
    name: "Mountain Wild Flora",
    nameAr: "عسل أزهار الربيع",
    tagline: "Raw · Unfiltered · Mountain Harvested",
    taglineAr: "خام · محصود من الجبال",
    description:
      "Harvested from the pristine highland meadows of northern Jordan above 800 m elevation. This raw wildflower honey captures the complex floral symphony of dozens of mountain wildflowers — wild thyme, Sinapis arvensis and Cakile arabica, and scores of seasonal blooms — in a single golden jar. Each spoonful is unique to its season.",
    descriptionAr:
      "يُحصد من المراعي الجبلية. يجمع هذا العسل الخام بين تناسق زهري معقد من عشرات الأزهار البرية الجبلية — الزعتر البري والخردل البري ونبتة إسليح — في جرة ذهبية واحدة. كل ملعقة فريدة من نوعها.",
    source: "Mountain Wild Flora Mix",
    sourceAr: "خليط زهور جبلية برية",
    sourceDesc: "Diverse seasonal wildflowers — From the northern region of Jordan",
    sourceDescAr: "أزهار برية موسمية متنوعة — من شرق جرش ، شمال الأردن",
    /* Main flower responsible for flavour profile */
    mainFlower:      "Cakile arabica",
    mainFlowerAr:    "إسليح",
    mainFlowerEmoji: "🌿",
    /* Crystallization: "fast" | "slow" | "never" */
    crystallization:   "fast",
    crystallizationAr: "يتبلور سريعاً",
    sourcePlantEmoji: "🌸",
    jarGradient:   "from-amber-100 to-yellow-50",
    plantGradient: "from-amber-50 to-green-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 7 },   // ← EDIT PRICES
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 0,   // ← EDIT (0–100)
    badge: "Sold Out",
    badgeAr: "نفذت الكمية",
    badgeColor: "red",
    images: ["spring_1.jpg", "spring_2.jpg", "spring_3.jpg", "spring_5.jpg"],
  },
  {
    id: 2,
    name: "Centaurea calcitrapa Honey",
    nameAr: "عسل المرار",
    tagline: "Single-Source · Delicate · Therapeutic",
    taglineAr: "مصدر واحد نكهة مميزة جدا · علاجي",
    description:
      "Single-source honey from the Centaurea calcitrapa blossoms that carpet the Jordanian highlands in late spring. Renowned for its exceptionally light, almost crystalline colour, subtle floral sweetness, and well-documented anti-inflammatory properties. A true connoisseur's honey.",
    descriptionAr:
      "عسل أحادي المصدر من أزهار شوك المرار الصفراء التي تكسو جبال الأردن في أواخر الربيع. اشتُهر بلونه الفاتح، وحلاوته الزهرية مع لذعة خفيفة من المرار، وخصائصه المضادة للالتهابات الموثّقة. عسل عارفي المذاق الحقيقي.",
    source: "Centaurea calcitrapa",
    sourceAr: "الجعيد — Centaurea calcitrapa",
    sourceDesc: "Yellow centaurea blossoms, highland meadows of Tafilah Governorate",
    sourceDescAr: "أزهار المرار الصفراء، مراعي مرتفعات الطفيلة",
    mainFlower:      "Centaurea / Cornflower (Centaurea calcitrapa)",
    mainFlowerAr:    "زهرة الجعيد (المرار)",
    mainFlowerEmoji: "💜",
    crystallization:   "medium",
    crystallizationAr: "يتبلور بمعدل متوسط",
    sourcePlantEmoji: "💜",
    jarGradient:   "from-purple-50 to-amber-50",
    plantGradient: "from-purple-100 to-purple-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 7 },
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 55,
    badge: "Seasonal",
    badgeAr: "موسمي",
    badgeColor: "purple",
    images: ["Centaurea_calcitrapa_1.jpg", "Centaurea_calcitrapa_2.jpg", "Centaurea_calcitrapa_3.jpg"],
  },
  {
    id: 3,
    name: "Eucalyptus Honey",
    nameAr: "عسل ازهار الكينا",
    tagline: "Bold · Herbal · Immune-Boosting",
    taglineAr: "جريء · عشبي · معزّز المناعة",
    description:
      "Rich honey harvested from eucalyptus groves in the Jordan Valley foothills. Carries a distinctive herbal, slightly mentholated character and a beautiful amber hue. Traditionally used as a natural remedy for respiratory health and immune support. Strong flavour, unforgettable aroma.",
    descriptionAr:
      "عسل غني يُحصد من اشجار الكينا. يحمل طابعاً عشبياً مميزاً مع لمسة منثولية خفيفة ولون عنبري جميل. يُستخدم علاجاً طبيعياً لدعم صحة الجهاز التنفسي والمناعة. نكهة قوية وعطر لا يُنسى.",
    source: "Eucalyptus Tree — Eucalyptus",
    sourceAr: "شجرة الكينا — Eucalyptus",
    sourceDesc: "Eucalyptus groves along the Jordan mountains",
    sourceDescAr: "اشجار الكينا على طول جبال الأردن",
    mainFlower:      "Eucalyptus Blossom (Eucalyptus)",
    mainFlowerAr:    "زهرة الكينا (اليوكالبتوس)",
    mainFlowerEmoji: "🌿",
    crystallization:   "slow",
    crystallizationAr: "يتبلور ببطء",
    sourcePlantEmoji: "🌿",
    jarGradient:   "from-green-50 to-amber-50",
    plantGradient: "from-green-100 to-teal-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 7 },
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 80,
    badge: "Low Stock",
    badgeAr: "مخزون محدود",
    badgeColor: "red",
    images: ["eycalptus_1.jpg", "eycalptus_2.jpg", "eycalptus_3.jpg", "eycalptus_affect_1.jpg"],
  },
  {
    id: 4,
    name: "Ballota undulata & Centaurea calcitrapa Honey",
    nameAr: "عسل المرار والقرطم (الجعيد)",
    tagline: "Premium · Rare · Ancient Heritage",
    taglineAr: "فاخر · نادر · إرث قديم",
    description:
      "The crown jewel of Jordanian honey — harvested from the ancient sidr (jujube) tree, Ziziphus spina-christi, revered since biblical times. Exceptionally rich with a characteristic dark amber colour and thick, velvety consistency. Highly sought after worldwide.",
    descriptionAr:
      "جوهرة العسل الأردني — يُحصد من نبات القرطم والمرار (Ziziphus spina-christi)  ثري، بلون عنبري داكن وقوام كثيف مخملي. نادر الوجود ومطلوب عالمياً.",
    source: "Ballota undulata & Centaurea calcitrapa",
    sourceAr: "القرطم و المرار — Ballota undulata & Centaurea calcitrapa",
    sourceDesc: "Ballota undulata & Centaurea calcitrapa blossoms, southern Jordan",
    sourceDescAr: "أزهار القرطم والمرار، جنوب الأردن",
    mainFlower:      "Ballota undulata & Centaurea calcitrapa",
    mainFlowerAr:    "القرطم والمرار",
    mainFlowerEmoji: "�",
    crystallization:   "slow",
    crystallizationAr: "يتبلور ببطء",
    sourcePlantEmoji: "🌳",
    jarGradient:   "from-amber-200 to-yellow-100",
    plantGradient: "from-amber-100 to-stone-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 7 },
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 55,
    badge: "Low Stock",
    badgeAr: "مخزون محدود",
    badgeColor: "red",
    images: ["Ballota_1.jpg", "Ballota_2.jpg", "Ballota_3.jpg"],
  },
  {
    id: 5,
    name: "Eucalyptus & Sidr Honey",
    nameAr: "عسل الكينا والسدر",
    tagline: "Rare Blend · Dual-Origin · Therapeutic",
    taglineAr: "خلطة نادرة · مزدوجة المصدر · علاجية",
    description:
      "A rare honey harvested from our own hives, blending the finest of eucalyptus and sidr honey in one jar. This dual-origin honey pairs sidr's mild sweetness with eucalyptus's warm depth, resulting in a rich, balanced flavour and a smooth, velvety texture. Traditionally valued for its combined respiratory and immune-supporting properties, it's one of our most sought-after limited harvests.",
    descriptionAr:
      "عسل نادر حصدناه من مناحلنا الخاصة، يجمع بين أفضل ما يميز عسل السدر وعسل الكينا في جرة واحدة. يوازن هذا العسل مزدوج المصدر بين حلاوة السدر المعتدلة ونكهة الكينا الدافئة، لينتج طعماً غنياً متوازناً وقواماً مخملياً ناعماً. يُعرف تقليدياً بخصائصه الداعمة للجهاز التنفسي والمناعة، ويُعد من أكثر محاصيلنا المحدودة طلباً.",
    source: "Eucalyptus & Sidr Blend",
    sourceAr: "خليط الكينا والسدر",
    sourceDesc: "Dual-origin blend of eucalyptus groves and ancient sidr trees, from our own hives",
    sourceDescAr: "خليط مزدوج المصدر من اشجار الكينا وأشجار السدر القديمة، من مناحلنا الخاصة",
    mainFlower:      "Eucalyptus & Sidr (Ziziphus spina-christi)",
    mainFlowerAr:    "الكينا والسدر",
    mainFlowerEmoji: "🌿",
    crystallization:   "slow",
    crystallizationAr: "يتبلور ببطء",
    sourcePlantEmoji: "🌳",
    jarGradient:   "from-amber-200 to-green-50",
    plantGradient: "from-green-100 to-amber-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 8 },
      { weight: "500g", weightAr: "500 غرام", price: 13 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 25 },
    ],
    stockPercent: 15,
    badge: "Bestseller",
    badgeAr: "الأكثر مبيعاً",
    badgeColor: "amber",
    images: ["eycalptus_1.jpg", "eycalptus_2.jpg", "eycalptus_3.jpg", "sidr-1.jpg", "sidr-2.jpeg"],
  },
  {
    id: 6,
    name: "Globe Thistle Honey (Echinops Honey)",
    nameAr: "عسل الأرث",
    tagline: "Single-Origin · Wild · Herbal",
    taglineAr: "أحادي المصدر · بري · عشبي",
    description:
      "Harvested from wild globe thistle flowers (Echinops) that bloom in arid, sun-drenched landscapes, this rare single-origin honey is prized for its warm amber colour and smooth, viscous texture. It carries a distinctly herbal, floral taste with a well-balanced, mild sweetness and a clean finish, crystallizing slowly to preserve its raw enzymes and nutrients. A true rarity for connoisseurs of wild honey.",
    descriptionAr:
      "يُحصد من أزهار الأرث البرية التي تنمو في الأراضي الجافة المشمسة، وهو عسل نادر أحادي المصدر يتميز بلونه العنبري الدافئ وقوامه الناعم اللزج. يحمل نكهة عشبية زهرية مميزة بحلاوة معتدلة متوازنة ومذاق نقي، ويتبلور ببطء للحفاظ على إنزيماته وعناصره الغذائية الخام. عسل نادر يستحق التذوق لعشاق العسل البري الأصيل.",
    source: "Globe Thistle (Echinops)",
    sourceAr: "الأرث — Echinops",
    sourceDesc: "Wild globe thistle flowers from arid, sun-drenched landscapes",
    sourceDescAr: "أزهار الأرث البرية من الأراضي الجافة المشمسة",
    mainFlower:      "Globe Thistle (Echinops)",
    mainFlowerAr:    "زهرة الأرث",
    mainFlowerEmoji: "🔮",
    crystallization:   "slow",
    crystallizationAr: "يتبلور ببطء إلى متوسط",
    sourcePlantEmoji: "🌾",
    jarGradient:   "from-amber-100 to-stone-50",
    plantGradient: "from-stone-100 to-amber-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 7 },
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 80,
    badge: "New",
    badgeAr: "جديد",
    badgeColor: "amber",
    images: ["globe-th.jpeg", "globe-th.mp4"],
  },
  {
    id: 7,
    hidden: true,   // ← temporarily hidden from all pages, remove this line to show again
    name: "Creamed Honey",
    nameAr: "عسل كريمي",
    tagline: "Naturally Crystallized · Smooth Texture · Easy to Spread",
    taglineAr: "متبلور طبيعياً · قوام كريمي · سهل الاستعمال",
    description:
      "Made from the same naturally crystallizing honeys, whipped into a smooth, spreadable cream for easier handling and serving. Currently available in two varieties: Marar Honey, and the Marar & Jaeed blend.",
    descriptionAr:
      "عسل كريمي منتج من نفس الأعسال المتبلورة طبيعياً، تمت معالجته ليصبح بقوام كريمي ناعم يسهّل التعامل معه واستخدامه. متوفر حالياً بنوعين: عسل المرار، وعسل المرار والجعيد.",
    source: "Centaurea calcitrapa & Ballota undulata blends",
    sourceAr: "عسل المرار وعسل المرار والجعيد",
    sourceDesc: "Creamed versions of our Marar and Marar & Jaeed honeys",
    sourceDescAr: "نسخة كريمية من عسل المرار وعسل المرار والجعيد",
    mainFlower:      "Marar / Marar & Jaeed",
    mainFlowerAr:    "المرار / المرار والجعيد",
    mainFlowerEmoji: "🍯",
    crystallization:   "fast",
    crystallizationAr: "عسل كريمي متبلور بالكامل",
    sourcePlantEmoji: "💜",
    jarGradient:   "from-purple-100 to-amber-50",
    plantGradient: "from-amber-100 to-purple-50",
    sizes: [
      { weight: "250g", weightAr: "250 غرام", price: 7 },
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 70,
    badge: "New",
    badgeAr: "جديد",
    badgeColor: "amber",
    images: ["Centaurea_calcitrapa_1.jpg", "Ballota_1.jpg", "Ballota_2.jpg"],
  },
  {
    id: 8,
    name: "Fresh Natural Bee Pollen",
    nameAr: "حبوب لقاح طبيعية طازجة",
    tagline: "100% Natural · Freshly Harvested · Nutrient-Rich",
    taglineAr: "100% طبيعي · طازج · غني بالعناصر الغذائية",
    description:
      "Freshly harvested bee pollen collected directly from our own hives. One of nature's most complete superfoods, rich in protein, vitamins, minerals, and antioxidants. Minimally processed to preserve its natural nutrients.",
    descriptionAr:
      "حبوب لقاح طبيعية طازجة تُجمع مباشرة من مناحلنا الخاصة. تُعد من أكثر الأغذية الطبيعية الكاملة غنى بالبروتين والفيتامينات والمعادن ومضادات الأكسدة. تتم معالجتها بأقل درجة ممكنة للحفاظ على عناصرها الغذائية الطبيعية.",
    source: "Mixed Wildflower Pollen",
    sourceAr: "لقاح أزهار برية متنوعة",
    sourceDesc: "Collected directly from our own hives across Jordan's highlands",
    sourceDescAr: "يُجمع مباشرة من مناحلنا الخاصة في مرتفعات الأردن",
    mainFlower:      "Mixed Wildflower Pollen",
    mainFlowerAr:    "لقاح أزهار متنوعة",
    mainFlowerEmoji: "🌼",
    crystallization:   "never",
    crystallizationAr: "منتج جاف لا يتبلور",
    sourcePlantEmoji: "🌼",
    jarGradient:   "from-yellow-200 to-amber-50",
    plantGradient: "from-yellow-100 to-stone-50",
    sizes: [
      { weight: "250g",  weightAr: "250 غرام",  price: 6 },
      { weight: "500g",  weightAr: "500 غرام",  price: 11 },
      { weight: "1kg",   weightAr: "1 كيلو",    price: 20 },
    ],
    stockPercent: 70,
    badge: "New",
    badgeAr: "جديد",
    badgeColor: "amber",
    images: ["pollen.jpeg", "pollen-2.jpeg"],
  },
];

/**
 * Returns availability metadata based on stockPercent.
 * Thresholds:  >= 70 → green  |  >= 40 → yellow  |  < 40 → red
 */
function getAvailability(stockPercent) {
  const pct = Math.min(100, Math.max(0, stockPercent));
  if (pct <= 0) {
    return { label: "Out of Stock",       labelAr: "نفذ المخزون",
             barColor: "bg-stone-400",    textColor: "text-stone-500",
             dotColor: "bg-stone-400",    percent: 0, pulse: false };
  } else if (pct >= 70) {
    return { label: "Fairly Available",   labelAr: "متوفر بشكل جيد",
             barColor: "bg-green-400",    textColor: "text-green-600",
             dotColor: "bg-green-400",    percent: pct, pulse: false };
  } else if (pct >= 40) {
    return { label: "Limited Quantities", labelAr: "كميات محدودة",
             barColor: "bg-yellow-400",   textColor: "text-yellow-600",
             dotColor: "bg-yellow-400",   percent: pct, pulse: false };
  } else {
    return { label: "Order Quickly!",     labelAr: "اطلب بسرعة!",
             barColor: "bg-red-500",      textColor: "text-red-500",
             dotColor: "bg-red-500",      percent: pct, pulse: true };
  }
}

/**
 * Returns display metadata for crystallization rate.
 * @param {"fast"|"medium"|"slow"|"never"} type
 */
function getCrystallizationStyle(type) {
  const map = {
    fast:   { icon: "❄️", label: "Crystallizes Fast",   labelAr: "يتبلور سريعاً",
              textColor: "text-blue-600",   bgColor: "bg-blue-50",   borderColor: "border-blue-100" },
    medium: { icon: "🌤️", label: "Crystallizes Medium", labelAr: "يتبلور بمعدل متوسط",
              textColor: "text-amber-600",  bgColor: "bg-amber-50",  borderColor: "border-amber-100" },
    slow:   { icon: "🔮", label: "Crystallizes Slowly", labelAr: "يتبلور ببطء",
              textColor: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-100" },
    never:  { icon: "💧", label: "Stays Liquid",         labelAr: "لا يتبلور",
              textColor: "text-teal-600",   bgColor: "bg-teal-50",   borderColor: "border-teal-100" },
  };
  return map[type] || map.slow;
}

/**
 * Returns Tailwind badge colour classes.
 */
function getBadgeStyle(color) {
  const styles = {
    amber:  "bg-amber-100 text-amber-800",
    purple: "bg-purple-100 text-purple-800",
    red:    "bg-red-100 text-red-700",
    gold:   "bg-yellow-100 text-yellow-800 ring-1 ring-yellow-300",
  };
  return styles[color] || "bg-stone-100 text-stone-700";
}
