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
 *   Edit the sizes[] array.  Two entries: 500 g and 1 kg.
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
      "Harvested from the pristine highland meadows of northern Jordan above 800 m elevation. This raw wildflower honey captures the complex floral symphony of dozens of mountain wildflowers — wild thyme, Sinapis arvensis and Cakile arabica, and scores of seasonal blooms — in a single golden jar. Each batch is unique to its season.",
    descriptionAr:
      "يُحصد من المراعي الجبلية. يجمع هذا العسل الخام بين تناسق زهري معقد من عشرات الأزهار البرية الجبلية — الزعتر البري والخردل البري ونبتة إسليح — في جرة ذهبية واحدة. كل دفعة فريدة من نوعها.",
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
      { weight: "500g", weightAr: "500 غرام", price: 10 },  // ← EDIT PRICES
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 22,   // ← EDIT (0–100)
    badge: "Bestseller",
    badgeAr: "الأكثر مبيعاً",
    badgeColor: "amber",
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
    sourceAr: "القنطريون — Centaurea calcitrapa",
    sourceDesc: "Yellow centaurea blossoms, highland meadows of Tafilah Governorate",
    sourceDescAr: "أزهار المرار الصفراء، مراعي مرتفعات الطفيلة",
    mainFlower:      "Centaurea / Cornflower (Centaurea calcitrapa)",
    mainFlowerAr:    "زهرة القنطريون (المرار)",
    mainFlowerEmoji: "💜",
    crystallization:   "slow",
    crystallizationAr: "يتبلور ببطء",
    sourcePlantEmoji: "💜",
    jarGradient:   "from-purple-50 to-amber-50",
    plantGradient: "from-purple-100 to-purple-50",
    sizes: [
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 75,
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
      "Rich, bold honey harvested from eucalyptus groves in the Jordan Valley foothills. Carries a distinctive herbal, slightly mentholated character and a warm amber hue. Traditionally used as a natural remedy for respiratory health and immune support. Strong flavour, unforgettable aroma.",
    descriptionAr:
      "عسل غني وجريء يُحصد من اشجار الكينا. يحمل طابعاً عشبياً مميزاً مع لمسة منثولية خفيفة ولون عنبري دافئ. يُستخدم علاجاً طبيعياً لدعم صحة الجهاز التنفسي والمناعة. نكهة قوية وعطر لا يُنسى.",
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
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 70,
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
      "The crown jewel of Jordanian honey — harvested from the ancient sidr (jujube) tree, Ziziphus spina-christi, revered since biblical times. Exceptionally rich, complex, and deeply aromatic with a characteristic dark amber colour and thick, velvety consistency. Highly sought after worldwide.",
    descriptionAr:
      "جوهرة العسل الأردني — يُحصد من نبات القرطم والمرار (Ziziphus spina-christi)  ثري ومعقد وعطره بالغ العمق، بلون عنبري داكن وقوام كثيف مخملي. نادر الوجود ومطلوب عالمياً.",
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
      { weight: "500g", weightAr: "500 غرام", price: 10 },
      { weight: "1kg",  weightAr: "1 كيلو",   price: 20 },
    ],
    stockPercent: 70,
    badge: "Premium",
    badgeAr: "فاخر",
    badgeColor: "gold",
    images: ["Ballota_1.jpg", "Ballota_2.jpg", "Ballota_3.jpg"],
  },
];

/**
 * Returns availability metadata based on stockPercent.
 * Thresholds:  >= 70 → green  |  >= 40 → yellow  |  < 40 → red
 */
function getAvailability(stockPercent) {
  const pct = Math.min(100, Math.max(0, stockPercent));
  if (pct >= 70) {
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
 * @param {"fast"|"slow"|"never"} type
 */
function getCrystallizationStyle(type) {
  const map = {
    fast:  { icon: "❄️", label: "Crystallizes Fast",   labelAr: "يتبلور سريعاً",
             textColor: "text-blue-600",   bgColor: "bg-blue-50",   borderColor: "border-blue-100" },
    slow:  { icon: "🔮", label: "Crystallizes Slowly", labelAr: "يتبلور ببطء",
             textColor: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-100" },
    never: { icon: "💧", label: "Stays Liquid",         labelAr: "لا يتبلور",
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
