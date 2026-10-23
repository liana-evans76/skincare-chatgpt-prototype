const PROMPTS = [
  { id: "analyze-skin", text: "Analyze my skin", skinAnalyzeIntent: true },
  {
    id: "moisturizer",
    text: "Find me a moisturizer",
    productIntent: true,
    lrpCategory: "moisturizer",
  },
  {
    id: "cleanser",
    text: "Find a gentle cleanser",
    productIntent: true,
    lrpCategory: "cleanser",
  },
  {
    id: "serum",
    text: "Serum for dull, uneven skin",
    productIntent: true,
    lrpCategory: "serum",
  },
];

/** @typedef {'moisturizer'|'cleanser'|'serum'|'spf'|'eye'|'acne'|'body'|'mist'|'redness'|'bestsellers'} LrpCategoryId */

/**
 * La Roche-Posay plugin catalog. Packshots are official LRP PDP images saved under `assets/lrp-*.jpg`.
 * Descriptions, prices, and ingredient lists are taken from La Roche-Posay product pages.
 * @type {Record<string, {
 *   id: string; title: string; kind: string; badge?: string; tags: string[]; image: string | null;
 *   volume: string; priceWas?: string; priceNow: string; shopUrl: string; description: string;
 *   warning?: string; match: number; matchIntro: string; matchReasons: string[]; disclaimer?: string;
 *   ingredients: string; similar: string[];
 * }>}
 */
const LRP_CATALOG = {
  "toleriane-double-repair": {
    id: "toleriane-double-repair",
    title: "Toleriane Double Repair Face Moisturizer",
    kind: "Moisturizer",
    badge: "Best-seller",
    tags: ["Hydrating", "Barrier repair"],
    image: "assets/lrp-toleriane-double-repair.jpg",
    volume: "100ml",
    priceWas: "$29.99",
    priceNow: "$24.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-moisturizer/toleriane-double-repair-face-moisturizer-3337875545808.html",
    description:
      "Formulated with dermatologist-recommended ingredients including ceramide-3, niacinamide, glycerin and La Roche-Posay Prebiotic Thermal Water. Double action helps repair skin’s natural protective barrier after 1 hour and provide up to 48-hour hydration. Its lightweight cream texture easily absorbs into the skin to provide immediate comfort. Suitable for all skin types, including sensitive.",
    match: 96,
    matchIntro: "Your scan showed a balanced barrier that still looks a little dehydrated — this is a strong everyday match.",
    matchReasons: [
      "Ceramides and niacinamide support the moisture barrier your scan mapped as slightly compromised.",
      "Up to 48-hour hydration without a heavy finish, which suits the normal-to-combination zones we detected.",
      "Fragrance-free and tested on sensitive skin, so it should sit comfortably in a daily routine.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Squalane • Dimethicone • Zea Mays Starch / Corn Starch • Niacinamide • Ammonium Polyacryloyldimethyl Taurate • Myristyl Myristate • Stearic Acid • Ceramide NP • Potassium Cetyl Phosphate • Glyceryl Stearate SE • Sodium Hydroxide • Myristic Acid • Palmitic Acid • Capryloyl Glycine • Caprylyl Glycol • Xanthan Gum.",
    similar: ["hydraphase-ha", "cicaplast-baume-b5", "cicaplast-b5-serum"],
  },
  "toleriane-double-repair-matte": {
    id: "toleriane-double-repair-matte",
    title: "Toleriane Double Repair Matte Moisturizer",
    kind: "Moisturizer",
    tags: ["Oil control", "Hydrating"],
    image: "assets/lrp-toleriane-double-repair-matte.jpg",
    volume: "75ml",
    priceWas: "$29.99",
    priceNow: "$24.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-moisturizer/toleriane-double-repair-matte-moisturizer-3337875598187.html",
    description:
      "An oil-absorbing daily moisturizer that hydrates while helping to mattify shine. Formulated with ceramides, niacinamide, glycerin and silica to repair the skin barrier and keep combination-to-oily skin comfortable without a greasy finish.",
    match: 91,
    matchIntro: "Shine showed up through the T-zone in your scan, so the matte version of Double Repair is the better texture match.",
    matchReasons: [
      "Silica helps mattify the oilier areas we mapped on your forehead and nose.",
      "Ceramides still repair the barrier so mattifying does not leave skin tight.",
      "Lightweight cream absorbs quickly under sunscreen and makeup.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Dimethicone • Silica • Niacinamide • Squalane • Ammonium Polyacryloyldimethyl Taurate • Ceramide NP • Caprylyl Glycol • Xanthan Gum.",
    similar: ["toleriane-double-repair", "toleriane-purifying-cleanser", "anthelios-ultra-fluid"],
  },
  "hydraphase-ha": {
    id: "hydraphase-ha",
    title: "Hydraphase HA Light",
    kind: "Moisturizer",
    tags: ["Hyaluronic acid", "72h hydration"],
    image: "assets/lrp-hydraphase-ha.jpg",
    volume: "50ml",
    priceWas: "$34.99",
    priceNow: "$29.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-moisturizer/hydraphase-ha-light-hyaluronic-acid-face-moisturizer-3337875694582.html",
    description:
      "A lightweight hyaluronic acid moisturizer that provides up to 72 hours of hydration. Formulated with fragmented hyaluronic acid to replenish moisture at the skin’s surface and a richer weight to help hold water in. Fresh gel-cream texture absorbs quickly and leaves a dewy, comfortable finish. Suitable for dehydrated and sensitive skin.",
    match: 90,
    matchIntro: "Dehydration showed more than oil, so a hyaluronic gel-cream is a closer everyday texture than a rich balm.",
    matchReasons: [
      "Hyaluronic acid replenishes the water loss your scan mapped on the cheeks.",
      "Light gel-cream layers under sunscreen without pilling or shine.",
      "Fragrance-minimized formula stays comfortable on slightly reactive skin.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Dimethicone • Butyrospermum Parkii (Shea) Butter • Sodium Hyaluronate • Ammonium Polyacryloyldimethyl Taurate • Caprylyl Glycol • Dimethicone/Vinyl Dimethicone Crosspolymer • Tocopherol.",
    similar: ["toleriane-double-repair", "cicaplast-b5-serum", "anthelios-ultra-fluid"],
  },
  "cicaplast-baume-b5": {
    id: "cicaplast-baume-b5",
    title: "Cicaplast Balm B5+",
    kind: "Balm",
    tags: ["Soothing", "Repairing"],
    image: "assets/lrp-cicaplast-baume-b5.jpg",
    volume: "40ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/body/body-lotion/cicaplast-balm-b5-for-dry-skin-irritations-3606000437449.html",
    description:
      "Multi-purpose soothing cream hydrates cracked, chapped, chafed skin and dry skin irritations. This non-greasy skin protectant relieves dry, rough skin while protecting from the drying effects of wind and cold. Formulated with panthenol (vitamin B5), madecassoside, shea butter and La Roche-Posay Thermal Spring Water.",
    match: 58,
    matchIntro: "This repairing balm is richer than the daily texture your scan pointed to — a lighter moisturizer is a closer match.",
    matchReasons: [
      "Vitamin B5 and madecassoside soothe the drier zones your scan flagged.",
      "Occlusive yet non-greasy texture seals in moisture overnight or on irritated patches.",
      "Accepted by the National Eczema Association and suitable for very sensitive skin.",
    ],
    ingredients:
      "Dimethicone 1% • Water • Hydrogenated Polyisobutene • Glycerin • Butyrospermum Parkii (Shea) Butter • Panthenol • Aluminum Starch Octenylsuccinate • Butylene Glycol • Zinc Gluconate • Madecassoside • Manganese Gluconate • Copper Gluconate • Tocopherol • Phenoxyethanol.",
    similar: ["cicaplast-b5-serum", "toleriane-double-repair", "hyalu-b5-eye-serum"],
  },
  "toleriane-hydrating-cleanser": {
    id: "toleriane-hydrating-cleanser",
    title: "Toleriane Hydrating Gentle Facial Cleanser",
    kind: "Cleanser",
    badge: "Best-seller",
    tags: ["Hydrating", "Gentle"],
    image: "assets/lrp-toleriane-hydrating-cleanser.jpg",
    volume: "400ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-cleanser/toleriane-hydrating-gentle-facial-cleanser-3337875545297.html",
    description:
      "A hydrating, soap-free facial cleanser that removes makeup, dirt and impurities while helping to maintain skin’s natural protective barrier. Formulated with ceramide-3, niacinamide, glycerin and prebiotic thermal water. Suitable for normal to dry, sensitive skin. Fragrance-free, paraben-free, and allergy tested.",
    match: 94,
    matchIntro: "Your skin looks easily stripped by harsh surfactants, so a cream cleanser is the safer starting point.",
    matchReasons: [
      "Soap-free formula cleans without the tightness we often see after foaming washes.",
      "Ceramides and glycerin leave a hydrated film that matches your slightly dry cheeks.",
      "Fragrance-free and allergy tested, so it is a low-risk daily cleanse.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Propylene Glycol • Peg-100 Stearate • Glyceryl Stearate • Niacinamide • Ceramide NP • Sodium Hydroxide • Caprylyl Glycol • Citric Acid.",
    similar: ["toleriane-purifying-cleanser", "toleriane-double-repair", "cicaplast-baume-b5"],
  },
  "toleriane-purifying-cleanser": {
    id: "toleriane-purifying-cleanser",
    title: "Toleriane Purifying Foaming Facial Wash",
    kind: "Cleanser",
    tags: ["Purifying", "Oil control"],
    image: "assets/lrp-toleriane-purifying-cleanser.jpg",
    volume: "400ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-cleanser/toleriane-purifying-foaming-facial-wash-3337875545303.html",
    description:
      "A foaming gel cleanser that purifies and removes excess oil while respecting the skin barrier. Formulated with prebiotic thermal water, niacinamide and ceramide-3. Suitable for normal to oily, sensitive skin. Fragrance-free and allergy tested.",
    match: 87,
    matchIntro: "Oil showed more clearly in the T-zone, so a light foaming wash is a closer daily match than a cream cleanser.",
    matchReasons: [
      "Foaming gel lifts sebum from the T-zone without stripping drier cheek areas.",
      "Niacinamide helps keep the complexion looking clearer over time.",
      "Still fragrance-free, so it stays gentle enough for reactive skin.",
    ],
    ingredients:
      "Aqua / Water / Eau • Sodium Laureth Sulfate • Glycerin • Coco-Betaine • Niacinamide • Peg-120 Methyl Glucose Dioleate • Sodium Chloride • Ceramide NP • Citric Acid • Caprylyl Glycol.",
    similar: ["effaclar-gel-cleanser", "toleriane-hydrating-cleanser", "toleriane-double-repair-matte"],
  },
  "effaclar-gel-cleanser": {
    id: "effaclar-gel-cleanser",
    title: "Effaclar Medicated Acne Face Wash",
    kind: "Cleanser",
    tags: ["Acne-prone", "Exfoliating"],
    image: "assets/lrp-effaclar-gel-cleanser.jpg",
    volume: "400ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/acne/effaclar-medicated-gel-cleanser-3606000437739.html",
    description:
      "A medicated acne face wash with 2% salicylic acid that helps unclog pores, reduce blackheads and control shine. The foaming gel is dermatologist tested for oily, acne-prone skin.",
    warning: "Not suitable for sensitive skin",
    match: 66,
    matchIntro: "A few congestion-prone areas showed up, but salicylic acid may be too active if your skin is easily irritated.",
    matchReasons: [
      "2% salicylic acid targets the clogged pores mapped along your chin.",
      "Oil-control wash would help shine through the T-zone.",
      "Match is lower because the formula can over-exfoliate drier or reactive zones.",
    ],
    ingredients:
      "Active: Salicylic Acid 2% • Inactive: Water • Sodium Laureth Sulfate • Decyl Glucoside • Glycerin • Sodium Chloride • Menthol • Zinc Gluconate • Sodium Hydroxide • Caprylyl Glycol.",
    similar: ["toleriane-purifying-cleanser", "mela-b3-serum", "vitamin-c12-serum"],
  },
  "mela-b3-serum": {
    id: "mela-b3-serum",
    title: "Mela B3 Dark Spot Serum",
    kind: "Serum",
    badge: "Best-seller",
    tags: ["Dark spots", "Brightening"],
    image: "assets/lrp-mela-b3-serum.jpg",
    volume: "30ml",
    priceWas: "$54.99",
    priceNow: "$46.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-serum/mela-b3-dark-spot-serum-with-melasyl-niacinamide-3337875892588.html",
    description:
      "Anti-aging serum with Melasyl™ and 10% niacinamide that visibly reduces a range of skin discoloration, including sunspots, age spots and post-acne marks. Allergy-tested formula designed to even tone while remaining suitable for sensitive skin.",
    match: 93,
    matchIntro: "Uneven tone around the cheeks and jaw is the strongest concern we read from your scan.",
    matchReasons: [
      "Melasyl™ plus 10% niacinamide targets the dark spots mapped on your scan.",
      "Lightweight serum layers under moisturizer without adding heaviness.",
      "Dermatologist-tested on sensitive skin, so brightening does not have to mean irritation.",
    ],
    ingredients:
      "Aqua / Water / Eau • Dimethicone • Niacinamide • Glycerin • Propylene Glycol • Polysilicone-11 • Silica • Cystoseira Tamariscifolia Extract • 2-Mercaptonicotinoyl Glycine • Sodium Hyaluronate • Dipotassium Glycyrrhizate • Capryloyl Salicylic Acid • Tocopherol • Phenoxyethanol • Parfum / Fragrance.",
    similar: ["vitamin-c12-serum", "cicaplast-b5-serum", "pigmentclar-eyes"],
  },
  "vitamin-c12-serum": {
    id: "vitamin-c12-serum",
    title: "Vitamin C12 Serum",
    kind: "Serum",
    tags: ["Radiance", "Even tone"],
    image: "assets/lrp-vitamin-c12-serum.jpg",
    volume: "30ml",
    priceWas: "$49.99",
    priceNow: "$44.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-serum/vitamin-c12-serum-3337875660570.html",
    description:
      "This anti-aging vitamin C face and neck serum visibly reduces wrinkles, boosts skin radiance, and smooths skin. It combines concentrated 12% pure vitamin C, neurosensine and salicylic acid for optimal effectiveness while remaining allergy tested.",
    warning: "Not suitable for sensitive skin",
    match: 56,
    matchIntro: "Dullness came through clearly, but this formula includes fragrance, alcohol and salicylic acid — a milder serum may be safer.",
    matchReasons: [
      "12% pure vitamin C is a strong match for the lack of radiance in your scan.",
      "Salicylic acid would help refine slightly uneven texture.",
      "Match is tempered because fragrance and denatured alcohol can sting reactive skin.",
    ],
    ingredients:
      "Aqua / Water / Eau • Ascorbic Acid • Cyclohexasiloxane • Glycerin • Alcohol Denat. • Potassium Hydroxide • Dimethicone • Tocopherol • Sodium Hyaluronate • Hydrolyzed Hyaluronic Acid • Adenosine • Salicylic Acid • Caprylyl Glycol • Bht • Parfum / Fragrance.",
    similar: ["mela-b3-serum", "cicaplast-b5-serum", "anthelios-ultra-fluid"],
  },
  "cicaplast-b5-serum": {
    id: "cicaplast-b5-serum",
    title: "Cicaplast B5 Ultra Repair Serum",
    kind: "Serum",
    tags: ["Hydrating", "Repairing"],
    image: "assets/lrp-cicaplast-b5-serum.jpg",
    volume: "30ml",
    priceWas: "$44.99",
    priceNow: "$39.99",
    shopUrl: "https://www.laroche-posay.com.au/skincare/face-care/face-serum/cicaplast-b5-serum-for-dry-skin-30ml/LRP_0001.html",
    description:
      "La Roche-Posay’s first dermatological serum with 10% vitamin B5 (panthenol). Developed for dry skin prone to redness, tightness or discomfort, it hydrates, helps reduce trans-epidermal water loss and supports the moisture barrier. Enriched with hyaluronic acid and HEPES to comfort skin and refine texture.",
    match: 97,
    matchIntro: "Dehydration and a slightly reactive barrier were the clearest findings — this repairing serum is the closest match in the range.",
    matchReasons: [
      "10% vitamin B5 fortifies the barrier and calms the tightness your scan picked up.",
      "Hyaluronic acid and glycerin restore 24-hour hydration without a heavy film.",
      "HEPES gently refines texture so dull, dry patches look smoother.",
    ],
    ingredients:
      "Aqua / Water / Eau • Panthenol • Glycerin • Alcohol Denat. • Dimethicone • Hydroxyethylpiperazine Ethane Sulfonic Acid • Peg-20 Methyl Glucose Sesquistearate • Sodium Hyaluronate • Ammonium Polyacryloyldimethyl Taurate • Caprylyl Glycol • Vitreoscilla Ferment • Citric Acid • Xanthan Gum • Tocopherol • Phenoxyethanol.",
    similar: ["cicaplast-baume-b5", "toleriane-double-repair", "hyalu-b5-eye-serum"],
  },
  "anthelios-ultra-fluid": {
    id: "anthelios-ultra-fluid",
    title: "Anthelios Ultra Fluid SPF 50+",
    kind: "Sunscreen",
    badge: "Best-seller",
    tags: ["Invisible finish", "UVA/UVB"],
    image: "assets/lrp-anthelios-ultra-fluid.jpg",
    volume: "50ml",
    priceWas: "$39.99",
    priceNow: "$35.99",
    shopUrl: "https://www.laroche-posay.us/our-products/sun/face-sunscreen/anthelios-ultra-light-fluid-facial-sunscreen-spf-60-883140012993.html",
    description:
      "Lightweight facial sunscreen with advanced broad spectrum UVA/UVB protection and Cell-Ox Shield® antioxidant technology. Fast-absorbing fluid with an invisible, non-whitening finish that works alone or under makeup. Water resistant (80 minutes) and tested even on sensitive skin.",
    match: 95,
    matchIntro: "Your scan did not show a white-cast risk, and this fluid is the most invisible daily SPF in the set.",
    matchReasons: [
      "Ultra-light texture matches skin that already looks a little shiny through the T-zone.",
      "Broad spectrum filters cover the UV exposure your daytime routine needs.",
      "Non-whitening finish avoids the cast you said you wanted to skip.",
    ],
    ingredients:
      "Active: Avobenzone 3% • Homosalate 10% • Octisalate 5% • Octocrylene 7% • Inactive: Water • Cyclopentasiloxane • Alcohol Denat. • Silica • Dimethicone • Phenoxyethanol • Cassia Alata Leaf Extract • Tocopherol.",
    similar: ["anthelios-mineral-tinted", "anthelios-melt-in-milk", "vitamin-c12-serum"],
  },
  "anthelios-melt-in-milk": {
    id: "anthelios-melt-in-milk",
    title: "Anthelios Melt-in Milk SPF 60",
    kind: "Sunscreen",
    tags: ["Face & body", "Water-resistant"],
    image: "assets/lrp-anthelios-melt-in-milk.jpg",
    volume: "90ml",
    priceWas: "$29.99",
    priceNow: "$24.99",
    shopUrl: "https://www.laroche-posay.us/our-products/sun/face-sunscreen/anthelios-melt-in-milk-body-and-face-sunscreen-lotion-spf-60-3606000504073.html",
    description:
      "Fast-absorbing velvety sunscreen for face and body with Cell-Ox Shield® technology. Broad spectrum SPF 60, water resistant (80 minutes), and formulated to be non-whitening on a wide range of skin tones.",
    match: 64,
    matchIntro: "A solid all-over SPF, though the milk texture is richer than you probably want on the face alone.",
    matchReasons: [
      "Broad spectrum SPF 60 covers both face and body in one step.",
      "Velvety milk absorbs without a heavy white film.",
      "Face-only days may still prefer the ultra fluid for a lighter finish.",
    ],
    ingredients:
      "Active: Avobenzone 3% • Homosalate 10% • Octisalate 5% • Octocrylene 7% • Inactive: Water • Glycerin • Dimethicone • Silica • Phenoxyethanol • Tocopherol.",
    similar: ["anthelios-ultra-fluid", "anthelios-mineral-tinted", "toleriane-double-repair"],
  },
  "anthelios-mineral-tinted": {
    id: "anthelios-mineral-tinted",
    title: "Anthelios Mineral Tinted SPF 50",
    kind: "Sunscreen",
    tags: ["Mineral", "Tinted"],
    image: "assets/lrp-anthelios-mineral-tinted.jpg",
    volume: "50ml",
    priceWas: "$39.99",
    priceNow: "$35.99",
    shopUrl: "https://www.laroche-posay.us/our-products/sun/face-sunscreen/anthelios-mineral-tinted-sunscreen-for-face-spf-50-3606000535497.html",
    description:
      "100% mineral, broad spectrum SPF 50 face sunscreen with a sheer tint that blends into skin and helps cancel white cast. Formulated with titanium dioxide and antioxidants, and tested on sensitive skin.",
    match: 90,
    matchIntro: "A sheer tint would even the mild redness we saw around the nose without looking like makeup.",
    matchReasons: [
      "Mineral filters are a gentler option if chemical SPF has stung you before.",
      "Sheer tint disguises redness and avoids white cast on medium skin tones.",
      "Can replace a light concealer as the last morning step.",
    ],
    ingredients:
      "Active: Titanium Dioxide 11% • Inactive: Water • Dimethicone • Iron Oxides • Glycerin • Silica • Tocopherol • Phenoxyethanol.",
    similar: ["anthelios-ultra-fluid", "pigmentclar-eyes", "mela-b3-serum"],
  },
  "pigmentclar-eyes": {
    id: "pigmentclar-eyes",
    title: "Pigmentclar Eyes",
    kind: "Eye care",
    badge: "Best-seller",
    tags: ["Dark circles", "Brightening"],
    image: "assets/lrp-pigmentclar-eyes.jpg",
    volume: "15ml",
    priceWas: "$47.99",
    priceNow: "$42.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/eye-cream/pigmentclar-eyes-3337872412413.html",
    description:
      "An anti-dark circle eye cream that targets brown and blue under-eye shadows. Formulated with caffeine, niacinamide and phe-resorcinol to brighten the eye contour and reduce the look of puffiness.",
    match: 92,
    matchIntro: "Under-eye shadows were visible in the front-facing frame, especially on the inner corners.",
    matchReasons: [
      "Brightening actives target the brown-toned circles mapped under both eyes.",
      "Caffeine helps with the slight puffiness on the left side.",
      "Cream texture is rich enough for the thin under-eye skin without milia-prone heaviness.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Dimethicone • Niacinamide • Caffeine • Hydroxyethylpiperazine Ethane Sulfonic Acid • Phe-Resorcinol • Sodium Hyaluronate • Caprylyl Glycol.",
    similar: ["hyalu-b5-eye-serum", "toleriane-dermallergo-eye", "mela-b3-serum"],
  },
  "hyalu-b5-eye-serum": {
    id: "hyalu-b5-eye-serum",
    title: "Hyalu B5 Eye Serum",
    kind: "Eye care",
    tags: ["Hydrating", "Plumping"],
    image: "assets/lrp-hyalu-b5-eye-serum.jpg",
    volume: "15ml",
    priceWas: "$47.99",
    priceNow: "$42.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/eye-cream/hyalu-b5-eye-serum-3337875583596.html",
    description:
      "A hydrating eye serum with concentrated hyaluronic acid, vitamin B5 and madecassoside to plump the look of fine dehydration lines around the eyes. Suitable for sensitive eyes.",
    match: 89,
    matchIntro: "Fine dehydration lines around the eyes showed more than deep pigment, so a plumping serum is a close match.",
    matchReasons: [
      "Hyaluronic acid fills in the dehydration lines under the outer corners.",
      "Vitamin B5 keeps the lid area comfortable if you wear contacts or makeup.",
      "Serum texture layers under concealer without pilling.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Alcohol Denat. • Sodium Hyaluronate • Panthenol • Madecassoside • Peg-20 Methyl Glucose Sesquistearate • Caprylyl Glycol.",
    similar: ["pigmentclar-eyes", "cicaplast-b5-serum", "toleriane-dermallergo-eye"],
  },
  "toleriane-dermallergo-eye": {
    id: "toleriane-dermallergo-eye",
    title: "Toleriane Dermallergo Eye Cream",
    kind: "Eye care",
    tags: ["Sensitive eyes", "Soothing"],
    image: "assets/lrp-toleriane-dermallergo-eye.jpg",
    volume: "20ml",
    priceWas: "$34.99",
    priceNow: "$29.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/eye-cream/toleriane-ultra-eye-cream-3337872410198.html",
    description:
      "An ultra-soothing eye cream for intolerant, allergy-prone eyelids. Formulated with neurosensine and La Roche-Posay Thermal Spring Water to comfort tightness, stinging and redness around the eyes.",
    match: 85,
    matchIntro: "If your lids sting easily, this is the gentlest eye option — even if dark circles are not the main issue.",
    matchReasons: [
      "Neurosensine calms the reactive lid skin we sometimes see with contact-lens wearers.",
      "Minimal ingredient list reduces the chance of stinging.",
      "Less targeted on pigment, so it is a comfort pick more than a brightening pick.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Dimethicone • Butyrospermum Parkii (Shea) Butter • Acetyl Dipeptide-1 Cetyl Ester • Caprylyl Glycol • Carbomer.",
    similar: ["hyalu-b5-eye-serum", "pigmentclar-eyes", "toleriane-hydrating-cleanser"],
  },
  "effaclar-duo": {
    id: "effaclar-duo",
    title: "Effaclar Duo Dual Action",
    kind: "Acne treatment",
    badge: "Best-seller",
    tags: ["Acne-prone", "Marks"],
    image: "assets/lrp-effaclar-duo.jpg",
    volume: "40ml",
    priceWas: "$32.99",
    priceNow: "$28.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/acne/effaclar-duo-dual-action-acne-treatment-3606000402973.html",
    description:
      "A dual-action acne treatment that targets visible blemishes and helps fade the look of post-acne marks. Formulated with micronized benzoyl peroxide and lipo-hydroxy acid in a lightweight, non-greasy finish for oily, acne-prone skin.",
    match: 86,
    matchIntro: "A few congestion-prone zones showed up along the chin, so a leave-on acne treatment is a useful targeted match.",
    matchReasons: [
      "Benzoyl peroxide targets the clogged pores mapped on your chin and jaw.",
      "Lightweight cream will not add shine over the oilier T-zone.",
      "Also helps fade the look of lingering marks as blemishes clear.",
    ],
    ingredients:
      "Active: Benzoyl Peroxide 5.5% • Inactive: Water • Isosorbide Dicaprylate • Glycerin • Niacinamide • Silica • Sodium Hydroxide • Caprylyl Glycol • Potassium Cetyl Phosphate.",
    similar: ["effaclar-serum", "effaclar-gel-cleanser", "toleriane-purifying-cleanser"],
  },
  "effaclar-serum": {
    id: "effaclar-serum",
    title: "Effaclar Salicylic Acid Acne Serum",
    kind: "Acne serum",
    tags: ["Salicylic acid", "Pores"],
    image: "assets/lrp-effaclar-serum.jpg",
    volume: "30ml",
    priceWas: "$39.99",
    priceNow: "$34.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/acne/effaclar-salicylic-acid-acne-treatment-serum-3337875797516.html",
    description:
      "A lightweight acne serum with 2% salicylic acid, LHA and niacinamide to unclog pores, reduce blackheads and visibly refine texture. Fast-absorbing fluid designed for oily, blemish-prone skin.",
    warning: "Not suitable for sensitive skin",
    match: 63,
    matchIntro: "Pore congestion showed up, but 2% salicylic acid plus LHA may be too active for the reactive zones on your scan.",
    matchReasons: [
      "Salicylic acid would help the blackheads along the nose.",
      "Niacinamide supports a clearer, less shiny look through the T-zone.",
      "Match is lower because exfoliating acids can sting drier or reactive cheeks.",
    ],
    ingredients:
      "Aqua / Water / Eau • Niacinamide • Alcohol Denat. • Salicylic Acid • Glycerin • Hydroxyethylpiperazine Ethane Sulfonic Acid • Capryloyl Salicylic Acid • Sodium Hydroxide • Caprylyl Glycol.",
    similar: ["effaclar-duo", "toleriane-purifying-cleanser", "mela-b3-serum"],
  },
  "lipikar-apm": {
    id: "lipikar-apm",
    title: "Lipikar AP+M Triple Repair",
    kind: "Body cream",
    badge: "Best-seller",
    tags: ["Eczema-prone", "Shea butter"],
    image: "assets/lrp-lipikar-apm.jpg",
    volume: "400ml",
    priceWas: "$24.99",
    priceNow: "$19.99",
    shopUrl: "https://www.laroche-posay.us/our-products/body/body-lotion/lipikar-ap-m-triple-repair-body-and-face-moisturizer-3337875795260.html",
    description:
      "A triple-repair body and face moisturizer for dry to extra-dry, eczema-prone skin. Formulated with shea butter, niacinamide and Aqua Posae Filiformis to replenish lipids, soothe itch and support the skin microbiome. Rich cream that absorbs without a greasy film.",
    match: 94,
    matchIntro: "Dryness and tightness were clearer on the body than the face, so this lipid-replenishing cream is a strong match.",
    matchReasons: [
      "Shea butter and niacinamide restore the lipids extra-dry skin is missing.",
      "Microbiome-supporting Aqua Posae Filiformis helps calm itch-prone patches.",
      "Rich but non-greasy cream works on body and the driest areas of the face.",
    ],
    ingredients:
      "Aqua / Water / Eau • Butyrospermum Parkii (Shea) Butter • Glycerin • Niacinamide • Brassica Campestris (Rapeseed) Seed Oil • Mannose • Aqua Posae Filiformis • Dimethicone • Caprylyl Glycol.",
    similar: ["lipikar-lotion", "cicaplast-baume-b5", "toleriane-double-repair"],
  },
  "lipikar-lotion": {
    id: "lipikar-lotion",
    title: "Lipikar Lotion",
    kind: "Body lotion",
    tags: ["Daily hydration", "Fast-absorbing"],
    image: "assets/lrp-lipikar-lotion.jpg",
    volume: "400ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/body/body-lotion/lipikar-lotion-moisturizing-body-lotion-3337872412482.html",
    description:
      "A daily moisturizing body lotion for dry skin. Lightweight milk texture with shea butter and glycerin that absorbs quickly and leaves skin comfortable without residue. Fragrance-free and suitable for sensitive skin and the whole family.",
    match: 88,
    matchIntro: "A lighter daily body lotion is a good all-over option if you only get tight after showering.",
    matchReasons: [
      "Shea and glycerin restore comfort after cleansing without a heavy film.",
      "Fast-absorbing milk is easy to use every morning.",
      "Fragrance-free, so it stays gentle on sensitive or eczema-prone skin.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Butyrospermum Parkii (Shea) Butter • Dimethicone • Niacinamide • Caprylyl Glycol • Carbomer • Sodium Hydroxide.",
    similar: ["lipikar-apm", "lipikar-wash", "cicaplast-baume-b5"],
  },
  "lipikar-wash": {
    id: "lipikar-wash",
    title: "Lipikar Wash AP+",
    kind: "Body wash",
    tags: ["Soap-free", "Soothing"],
    image: "assets/lrp-lipikar-wash.jpg",
    volume: "400ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/body/body-wash/lipikar-wash-ap-body-and-face-wash-3337875546492.html",
    description:
      "A soothing cream body and face wash for dry to extra-dry, eczema-prone skin. Soap-free formula with shea butter, niacinamide and Aqua Posae Filiformis that cleanses without stripping and helps reduce the feeling of tightness after rinsing.",
    match: 91,
    matchIntro: "If showers leave skin tight and itchy, a lipid-replenishing wash is a closer match than a foaming cleanser.",
    matchReasons: [
      "Soap-free cream wash respects the barrier on extra-dry skin.",
      "Shea butter and niacinamide leave a comforting film after rinsing.",
      "Gentle enough for face and body, including eczema-prone patches.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Sodium Laureth Sulfate • Niacinamide • Butyrospermum Parkii (Shea) Butter • Aqua Posae Filiformis • Coco-Betaine • Citric Acid • Caprylyl Glycol.",
    similar: ["lipikar-apm", "lipikar-lotion", "toleriane-hydrating-cleanser"],
  },
  "thermal-spring-water": {
    id: "thermal-spring-water",
    title: "Thermal Spring Water",
    kind: "Mist",
    badge: "Best-seller",
    tags: ["Soothing", "Antioxidant"],
    image: "assets/lrp-thermal-spring-water.jpg",
    volume: "150ml",
    priceWas: "$16.99",
    priceNow: "$14.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-mist/thermal-spring-water-3337872411966.html",
    description:
      "A soothing antioxidant face mist with 100% La Roche-Posay Thermal Spring Water, naturally rich in selenium. Spritz to calm sensitivity, set makeup or refresh skin throughout the day. Suitable for all skin types, including the most sensitive.",
    match: 92,
    matchIntro: "A selenium-rich mist is an easy way to calm the mild redness we saw without adding another cream.",
    matchReasons: [
      "Thermal water soothes tightness and visible redness after cleansing.",
      "Antioxidant selenium supports skin that looks a little stressed.",
      "Layers under or over any routine and can replace a toner step.",
    ],
    ingredients: "Aqua / Water / Eau • Nitrogen.",
    similar: ["serozinc", "toleriane-sensitive", "cicaplast-baume-b5"],
  },
  "serozinc": {
    id: "serozinc",
    title: "Serozinc",
    kind: "Mist",
    tags: ["Oil control", "Zinc"],
    image: "assets/lrp-serozinc.jpg",
    volume: "150ml",
    priceWas: "$16.99",
    priceNow: "$14.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-toner/serozinc-zinc-sulfate-solution-face-toner-3337872411997.html",
    description:
      "A mattifying face mist with zinc sulfate and La Roche-Posay Thermal Spring Water. Helps control shine, tighten the look of pores and refresh combination-to-oily skin through the day. Can be used as a toner or midday reset.",
    match: 84,
    matchIntro: "Shine through the T-zone makes a zinc mist a useful daytime reset, even if the rest of the face is drier.",
    matchReasons: [
      "Zinc sulfate helps mattify the oilier forehead and nose.",
      "Thermal water keeps the mist from feeling stripping.",
      "Easy to mist over makeup when shine comes back at midday.",
    ],
    ingredients: "Aqua / Water / Eau • Zinc Sulfate • Nitrogen.",
    similar: ["thermal-spring-water", "toleriane-double-repair-matte", "effaclar-gel-cleanser"],
  },
  "effaclar-clarifying": {
    id: "effaclar-clarifying",
    title: "Effaclar Clarifying Solution",
    kind: "Toner",
    tags: ["Exfoliating", "Pores"],
    image: "assets/lrp-effaclar-clarifying.jpg",
    volume: "200ml",
    priceWas: "$29.99",
    priceNow: "$24.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/acne/effaclar-clarifying-solution-3337872412017.html",
    description:
      "An exfoliating toner with salicylic acid, LHA and glycolic acid that helps unclog pores, refine texture and reduce the look of blackheads. Alcohol-minimized lotion for oily, acne-prone skin.",
    warning: "Not suitable for sensitive skin",
    match: 61,
    matchIntro: "An acid toner would refine pores, but the exfoliating blend is likely too strong for the reactive areas on your scan.",
    matchReasons: [
      "AHAs and BHA would help the congestion along the nose.",
      "Lotion texture is a simple swipe-on after cleansing.",
      "Match is lower because acids can sting dehydrated or sensitive cheeks.",
    ],
    ingredients:
      "Aqua / Water / Eau • Alcohol Denat. • Glycolic Acid • Sodium Hydroxide • Capryloyl Salicylic Acid • Salicylic Acid • Glycerin • Caprylyl Glycol.",
    similar: ["thermal-spring-water", "serozinc", "effaclar-serum"],
  },
  "toleriane-sensitive": {
    id: "toleriane-sensitive",
    title: "Toleriane Sensitive Cream",
    kind: "Moisturizer",
    tags: ["Prebiotic", "Fragrance-free"],
    image: "assets/lrp-toleriane-sensitive.jpg",
    volume: "40ml",
    priceWas: "$19.99",
    priceNow: "$16.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-moisturizer/toleriane-sensitive-face-moisturizer-3337875546492.html",
    description:
      "A prebiotic daily moisturizer for sensitive skin prone to dryness and discomfort. Formulated with La Roche-Posay Thermal Water, glycerin, shea butter and vitamin B3 in a minimalist, fragrance-free cream that soothes and hydrates.",
    match: 95,
    matchIntro: "The mild redness and tightness we mapped are a close fit for this short-formula sensitive cream.",
    matchReasons: [
      "Minimalist ingredient list reduces the chance of stinging reactive skin.",
      "Glycerin and shea restore comfort without fragrance or essential oils.",
      "Vitamin B3 helps the complexion look calmer over time.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Caprylic/Capric Triglyceride • Butyrospermum Parkii (Shea) Butter • Niacinamide • Ammonium Polyacryloyldimethyl Taurate • Caprylyl Glycol.",
    similar: ["toleriane-double-repair", "cicaplast-baume-b5", "thermal-spring-water"],
  },
  "rosaliac-ar": {
    id: "rosaliac-ar",
    title: "Rosaliac AR Intense",
    kind: "Serum",
    tags: ["Redness", "Soothing"],
    image: "assets/lrp-rosaliac-ar.jpg",
    volume: "40ml",
    priceWas: "$39.99",
    priceNow: "$34.99",
    shopUrl: "https://www.laroche-posay.us/our-products/face/face-serum/rosaliac-ar-intense-redness-serum-3337872413083.html",
    description:
      "A daily redness-reducing serum for skin prone to flushing and visible capillaries. Formulated with ambophenol, neurosensine and La Roche-Posay Thermal Water to help skin look calmer and more even, in a lightweight hydrating fluid.",
    match: 89,
    matchIntro: "Flushing around the nose and cheeks is the main concern this serum is built to calm.",
    matchReasons: [
      "Ambophenol and neurosensine target the redness mapped on your scan.",
      "Fluid texture hydrates without trapping heat on reactive skin.",
      "Layers under moisturizer and SPF as a focused redness step.",
    ],
    ingredients:
      "Aqua / Water / Eau • Glycerin • Dimethicone • Ambophenol • Acetyl Dipeptide-1 Cetyl Ester • Sodium Hyaluronate • Caprylyl Glycol • Tocopherol.",
    similar: ["toleriane-sensitive", "cicaplast-b5-serum", "thermal-spring-water"],
  },
};

/** @type {Record<LrpCategoryId, string[]>} */
const LRP_CATEGORY_IDS = {
  moisturizer: ["toleriane-double-repair", "hydraphase-ha", "cicaplast-baume-b5"],
  cleanser: ["toleriane-hydrating-cleanser", "toleriane-purifying-cleanser", "effaclar-gel-cleanser"],
  serum: ["mela-b3-serum", "vitamin-c12-serum", "cicaplast-b5-serum"],
  spf: ["anthelios-ultra-fluid", "anthelios-melt-in-milk", "anthelios-mineral-tinted"],
  eye: ["pigmentclar-eyes", "hyalu-b5-eye-serum", "toleriane-dermallergo-eye"],
  acne: ["effaclar-duo", "effaclar-serum", "effaclar-gel-cleanser"],
  body: ["lipikar-apm", "lipikar-lotion", "lipikar-wash"],
  mist: ["thermal-spring-water", "serozinc", "effaclar-clarifying"],
  redness: ["toleriane-sensitive", "rosaliac-ar", "cicaplast-baume-b5"],
  bestsellers: ["toleriane-double-repair", "anthelios-ultra-fluid", "cicaplast-b5-serum"],
};

/** @typedef {'lrp'|'cerave'|'lancome'} MatchBrand */

/**
 * CeraVe Product Match extras (score, similar, scan copy) layered on {@link SKINCARE_DB}.
 * Retinol (58) and Moisturizing Cream (64) stay under the 70% match threshold.
 */
const CERAVE_MATCH_META = {
  "cerave-hydrating-cleanser": {
    badge: "Best-seller",
    match: 92,
    similar: ["cerave-foaming-cleanser", "cerave-pm-lotion", "cerave-hydrating-toner"],
    matchIntro: "Your scan showed a barrier that looks a little thirsty — a ceramide cleanser is a strong everyday match.",
    matchReasons: [
      "Ceramides and hyaluronic acid cleanse without stripping",
      "Developed with dermatologists for normal to dry skin",
      "A gentle first step before a ceramide moisturizer",
    ],
    ingredients:
      "Aqua / Water • Glycerin • Cetearyl Alcohol • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Cholesterol • Sodium Lauroyl Lactylate • Petrolatum.",
  },
  "cerave-foaming-cleanser": {
    match: 67,
    similar: ["cerave-hydrating-cleanser", "cerave-retinol-serum", "cerave-pm-lotion"],
    matchIntro: "This gel cleanser is built for oilier skin, and your scan leaned drier — it may feel a little too stripping day to day.",
    matchReasons: [
      "Niacinamide and ceramides help control shine",
      "A better fit when congestion is the main complaint",
      "May feel tight if your barrier is already dry",
    ],
    ingredients:
      "Aqua / Water • Sodium Lauroyl Sarcosinate • Ceramide NP • Ceramide AP • Ceramide EOP • Niacinamide • Hyaluronic Acid • Cholesterol • Carbomer.",
  },
  "cerave-hydrating-toner": {
    match: 88,
    similar: ["cerave-hydrating-cleanser", "cerave-pm-lotion"],
    matchIntro: "Your scan showed mild dehydration — an alcohol-free hydrating toner is a useful layer before serum.",
    matchReasons: [
      "Alcohol-free formula that won't sting a sensitive barrier",
      "Adds water before moisturizer so ceramides sit better",
      "Works for normal, dry, and combination skin",
    ],
    ingredients:
      "Aqua / Water • Glycerin • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Niacinamide • Cholesterol • Sodium PCA.",
  },
  "cerave-retinol-serum": {
    match: 58,
    similar: ["cerave-vitamin-c-serum", "cerave-foaming-cleanser", "cerave-pm-lotion"],
    matchIntro: "Retinol is a stretch for this scan — texture and marks are not the main signal, so this is not a match.",
    matchReasons: [
      "Encapsulated retinol is stronger than your current skin needs",
      "Better when pores and post-acne marks are the priority",
      "Evening-only, and it can flare a reactive barrier",
    ],
    ingredients:
      "Aqua / Water • Niacinamide • Ceramide NP • Retinol • Licorice Root Extract • Hyaluronic Acid • Cholesterol • Carbomer.",
  },
  "cerave-vitamin-c-serum": {
    match: 84,
    similar: ["cerave-retinol-serum", "cerave-am-spf", "cerave-pm-lotion"],
    matchIntro: "Your scan picked up some dullness — a vitamin C serum is a solid morning match under moisturizer and SPF.",
    matchReasons: [
      "Vitamin C brightens the look of uneven tone",
      "Layers cleanly under a ceramide moisturizer",
      "A better first active than retinol for this scan",
    ],
    ingredients:
      "Aqua / Water • Ascorbic Acid • Ceramide NP • Hyaluronic Acid • Vitamin E • Cholesterol • Glycerin • Carbomer.",
  },
  "cerave-pm-lotion": {
    badge: "Best-seller",
    match: 94,
    similar: ["cerave-moisturizing-cream", "cerave-hydrating-cleanser", "cerave-am-spf"],
    matchIntro: "Your scan showed a balanced barrier that still looks a little dehydrated — this lightweight night lotion is a strong match.",
    matchReasons: [
      "Three essential ceramides help repair the moisture barrier",
      "Niacinamide and hyaluronic acid hydrate without a heavy feel",
      "Fragrance-free and suitable for most skin types, including sensitive",
    ],
    ingredients:
      "Aqua / Water • Caprylic/Capric Triglyceride • Niacinamide • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Cholesterol • Glycerin • Petrolatum.",
  },
  "cerave-moisturizing-cream": {
    match: 64,
    similar: ["cerave-pm-lotion", "cerave-hydrating-cleanser"],
    matchIntro: "This is a rich face-and-body cream. Your scan did not show extra-dry skin, so it may feel heavy as a daily face moisturizer.",
    matchReasons: [
      "A classic ceramide cream when skin is very dry",
      "Often better on the body than as an everyday face cream",
      "Can feel occlusive if your T-zone already runs combination",
    ],
    ingredients:
      "Aqua / Water • Petrolatum • Glycerin • Cetearyl Alcohol • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Cholesterol • Dimethicone.",
  },
  "cerave-am-spf": {
    match: 91,
    similar: ["cerave-pm-lotion", "cerave-vitamin-c-serum", "cerave-hydrating-cleanser"],
    matchIntro: "Your scan looked a little dehydrated in the morning — a ceramide lotion with SPF 30 covers moisture and sun in one step.",
    matchReasons: [
      "SPF 30 plus ceramides for a simple last morning step",
      "Niacinamide helps with the look of uneven tone over time",
      "A lighter daytime texture than the tub cream",
    ],
    ingredients:
      "Aqua / Water • Homosalate • Octocrylene • Niacinamide • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Dimethicone.",
  },
  "cerave-eye-repair": {
    match: 90,
    similar: ["cerave-skin-renewing-eye", "cerave-pm-lotion", "cerave-hydrating-cleanser"],
    matchIntro: "The eye area looked a little tired — a ceramide eye cream for dark circles and puffiness is a closer match than a face lotion.",
    matchReasons: [
      "Ceramides and hyaluronic acid hydrate thinner under-eye skin",
      "Made to soften the look of dark circles and puffiness",
      "Fragrance-free and ophthalmologist-tested, including for sensitive eyes",
    ],
    ingredients:
      "Aqua / Water • Niacinamide • Glycerin • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Sodium Hyaluronate • Caprylic/Capric Triglyceride.",
  },
  "cerave-skin-renewing-eye": {
    match: 86,
    similar: ["cerave-eye-repair", "cerave-vitamin-c-serum", "cerave-pm-lotion"],
    matchIntro: "Fine lines around the eyes showed more than deep pigment — a peptide eye cream is the closer match.",
    matchReasons: [
      "Peptides and caffeine target crow's feet and under-eye lines",
      "Visibly firms the eye contour without a heavy cream",
      "Suitable for sensitive skin and contact-lens wearers",
    ],
    ingredients:
      "Aqua / Water • Niacinamide • Caffeine • Ceramide NP • Ceramide AP • Ceramide EOP • Hyaluronic Acid • Peptide Complex • Glycerin.",
  },
};

function buildCeraveCatalog() {
  const db = typeof SKINCARE_DB !== "undefined" ? SKINCARE_DB : { products: [] };
  /** @type {Record<string, object>} */
  const out = {};
  for (const [id, meta] of Object.entries(CERAVE_MATCH_META)) {
    const row = db.products.find((p) => p.id === id);
    if (!row) continue;
    out[id] = {
      id: row.id,
      brandId: row.brandId,
      title: row.title,
      kind: row.kind,
      badge: meta.badge,
      tags: row.tags || [],
      image: row.image,
      volume: row.volume || "",
      priceNow: row.priceNow,
      shopUrl: row.shopUrl,
      description: row.description,
      match: meta.match,
      matchIntro: meta.matchIntro,
      matchReasons: meta.matchReasons,
      ingredients: meta.ingredients,
      similar: meta.similar,
    };
  }
  return out;
}

const CERAVE_CATALOG = buildCeraveCatalog();

/** @type {Record<LrpCategoryId, string[]>} */
const CERAVE_CATEGORY_IDS = {
  moisturizer: ["cerave-pm-lotion", "cerave-moisturizing-cream"],
  cleanser: ["cerave-hydrating-cleanser", "cerave-foaming-cleanser"],
  serum: ["cerave-vitamin-c-serum", "cerave-retinol-serum"],
  spf: ["cerave-am-spf"],
  eye: ["cerave-eye-repair", "cerave-skin-renewing-eye"],
  acne: ["cerave-foaming-cleanser", "cerave-retinol-serum", "cerave-vitamin-c-serum"],
  body: ["cerave-moisturizing-cream", "cerave-pm-lotion"],
  mist: ["cerave-hydrating-toner"],
  redness: ["cerave-hydrating-cleanser", "cerave-pm-lotion", "cerave-moisturizing-cream"],
  bestsellers: ["cerave-hydrating-cleanser", "cerave-pm-lotion", "cerave-moisturizing-cream"],
};

/** @type {Record<string, LrpConcern[]>} */
const CERAVE_PRODUCT_CLAIMS = {
  "cerave-hydrating-cleanser": ["dry", "sensitive", "dehydrated"],
  "cerave-foaming-cleanser": ["oily", "combination", "acne"],
  "cerave-hydrating-toner": ["dry", "sensitive", "dehydrated", "combination"],
  "cerave-retinol-serum": ["acne", "pigment", "aging", "oily"],
  "cerave-vitamin-c-serum": ["pigment", "aging", "dehydrated"],
  "cerave-pm-lotion": ["dry", "dehydrated", "sensitive", "combination"],
  "cerave-moisturizing-cream": ["dry", "eczema", "sensitive"],
  "cerave-am-spf": ["dry", "sensitive", "dehydrated", "pigment"],
  "cerave-eye-repair": ["sensitive", "dry", "dehydrated", "aging"],
  "cerave-skin-renewing-eye": ["aging", "sensitive", "dry", "dehydrated"],
};

/**
 * Lancôme Product Match catalog. Prestige formulas only — kept separate from
 * the Skin Diag recommender so that flow's one-luxury rule stays intact.
 * Clarifique (62) stays under the 70% match threshold.
 */
const LANCOME_CATALOG = {
  "lancome-genifique-ultimate": {
    id: "lancome-genifique-ultimate",
    brandId: "lancome",
    title: "Génifique Ultimate Recovery Serum",
    kind: "Serum",
    badge: "Best-seller",
    tags: ["Barrier repair", "Radiance"],
    image: "assets/catalog/lancome-genifique-ultimate.webp",
    volume: "1.7 fl oz",
    priceNow: "$135.00",
    shopUrl: "https://www.lancome-usa.com/skincare/face-serum/genifique-ultimate-serum/00997-LAC.html",
    description:
      "Recovery serum with beta-glucan, hyaluronic acid, and licorice extract. Built to repair the moisture barrier and soften the look of fine lines and dullness.",
    match: 94,
    matchIntro: "Your scan showed a barrier that could use repair — this recovery serum is a strong match for dryness and dullness.",
    matchReasons: [
      "Beta-glucan and hyaluronic acid support a tired moisture barrier",
      "Softens the look of fine lines without a heavy cream",
      "A prestige serum that still suits dry, balanced, and sensitive skin",
    ],
    ingredients:
      "Aqua / Water • Bifida Ferment Lysate • Glycerin • Propanediol • Sodium Hyaluronate • Beta-Glucan • Glycyrrhiza Glabra (Licorice) Root Extract • Adenosine.",
    similar: ["lancome-advanced-genifique", "lancome-genifique-night", "lancome-creme-mousse"],
  },
  "lancome-advanced-genifique": {
    id: "lancome-advanced-genifique",
    brandId: "lancome",
    title: "Advanced Génifique Face Serum",
    kind: "Serum",
    tags: ["Radiance", "Hydrating"],
    image: "assets/catalog/lancome-advanced-genifique.jpg",
    volume: "3.4 fl oz",
    priceNow: "$220.00",
    shopUrl: "https://www.lancome-usa.com/skincare/advanced-genifique-face-serum/1000302.html",
    description:
      "Hydrating serum with 10% Bifidus Prebiotic, hyaluronic acid, and vitamin Cg. Strengthens the moisture barrier and improves the look of dullness and fine lines.",
    match: 90,
    matchIntro: "Dullness showed up on the scan — a radiance serum with hyaluronic acid and vitamin Cg is a solid morning and night match.",
    matchReasons: [
      "10% Bifidus Prebiotic supports the skin's moisture barrier",
      "Vitamin Cg brightens without a gritty texture",
      "Lightweight enough to sit under moisturizer and SPF",
    ],
    ingredients:
      "Aqua / Water • Bifida Ferment Lysate • Glycerin • Dimethicone • Ascorbyl Glucoside • Sodium Hyaluronate • Adenosine • Fragrance.",
    similar: ["lancome-genifique-ultimate", "lancome-uv-expert", "lancome-genifique-night"],
  },
  "lancome-creme-mousse": {
    id: "lancome-creme-mousse",
    brandId: "lancome",
    title: "Crème Mousse Confort Foaming Cleanser",
    kind: "Cleanser",
    tags: ["Comforting", "Rosehip"],
    image: "assets/catalog/lancome-creme-mousse.jpg",
    volume: "4.2 fl oz",
    priceNow: "$34.00",
    shopUrl: "https://www.lancome-usa.com/skincare/creme-mousse-confort-foaming-cleanser/1000197.html",
    description:
      "Creamy foaming cleanser with rosehip oil and shea butter. Melts makeup, including waterproof, and leaves skin soft rather than tight. Suitable for sensitive skin.",
    match: 88,
    matchIntro: "The scan looked a little dry after cleansing would matter — a creamy foam with rosehip oil is a comfortable match.",
    matchReasons: [
      "Rosehip oil and shea butter keep the wash from feeling stripping",
      "Takes off makeup without a separate balm step",
      "Ophthalmologist-tested and suitable for sensitive skin",
    ],
    ingredients:
      "Aqua / Water • Glycerin • Sodium Cocoyl Glycinate • Myristic Acid • Butyrospermum Parkii Butter • Rosa Canina Fruit Oil • Salicylic Acid • Fragrance.",
    similar: ["lancome-genifique-night", "lancome-clarifique-essence", "lancome-genifique-ultimate"],
  },
  "lancome-clarifique-essence": {
    id: "lancome-clarifique-essence",
    brandId: "lancome",
    title: "Clarifique Double Treatment Essence",
    kind: "Toner",
    tags: ["Exfoliating", "Tone evening"],
    image: "assets/catalog/lancome-clarifique-essence.jpg",
    volume: "5.0 fl oz",
    priceNow: "$95.00",
    shopUrl: "https://www.lancome-usa.com/skincare/by-category/toners/clarifique-double-treatment-essence/00369-LAC.html",
    description:
      "Bi-phase essence with glycolic, lactic, salicylic, and phytic acids. The first phase resurfaces, the second soothes. Shake before use. Daily SPF is required.",
    warning: "Contains AHAs and may increase sun sensitivity. Use SPF while using this and for a week after.",
    match: 62,
    matchIntro: "This acid essence is a stretch for the scan — barrier comfort mattered more than resurfacing, so it is not a match right now.",
    matchReasons: [
      "Four exfoliating acids are stronger than this scan needs",
      "Better when dullness, pores, or post-acne marks are the priority",
      "AHAs can make a reactive barrier more sun-sensitive",
    ],
    ingredients:
      "Aqua / Water • Butylene Glycol • Lactic Acid • Glycolic Acid • Phytic Acid • Salicylic Acid • Ananas Sativus Fruit Extract • Tocopherol.",
    similar: ["lancome-advanced-genifique", "lancome-uv-expert", "lancome-creme-mousse"],
  },
  "lancome-genifique-night": {
    id: "lancome-genifique-night",
    brandId: "lancome",
    title: "Advanced Génifique Night Cream",
    kind: "Moisturizer",
    tags: ["Barrier repair", "Night"],
    image: "assets/catalog/lancome-genifique-night.jpg",
    volume: "1.7 fl oz",
    priceNow: "$110.00",
    shopUrl: "https://www.lancome-usa.com/skincare/by-category/night-creams/advanced-genifique-night-cream/00638-LAC.html",
    description:
      "Night cream with 10% Bifidus Prebiotic, hyaluronic acid, and a triple ceramide complex. Melts in, helps repair the moisture barrier overnight, and is suitable for sensitive skin.",
    match: 92,
    matchIntro: "Overnight barrier repair fits this scan — ceramides and hyaluronic acid in a melting cream are a strong night match.",
    matchReasons: [
      "Triple ceramide complex helps replenish a dry barrier",
      "Hydration that holds without a greasy finish",
      "Suitable for sensitive skin and non-comedogenic",
    ],
    ingredients:
      "Aqua / Water • Bifida Ferment Lysate • Glycerin • Ceramide NP • Sodium Hyaluronate • Ascorbyl Glucoside • Adenosine • Fragrance.",
    similar: ["lancome-genifique-ultimate", "lancome-advanced-genifique", "lancome-creme-mousse"],
  },
  "lancome-uv-expert": {
    id: "lancome-uv-expert",
    brandId: "lancome",
    title: "UV Expert Defense SPF 50+ Primer & Moisturizer",
    kind: "Sunscreen",
    tags: ["SPF 50+", "No white cast"],
    image: "assets/catalog/lancome-uv-expert.jpg",
    volume: "1.0 fl oz",
    priceNow: "$45.00",
    shopUrl: "https://www.lancome-usa.com/skincare/by-category/sun-care/uv-expert-defense-spf-50-primer-and-moisturizer/LAN349.html",
    description:
      "Weightless aquagel that works as moisturizer, makeup primer, and broad-spectrum SPF 50+. Vitamin E, moringa, and edelweiss. No white residue. Suitable for sensitive skin.",
    match: 89,
    matchIntro: "A breathable SPF 50+ that also moisturizes is the right last step for this scan, including under makeup.",
    matchReasons: [
      "Broad-spectrum SPF 50+ with almost no white cast",
      "Aquagel texture works as a primer and a light moisturizer",
      "Suitable for sensitive skin and all skin tones",
    ],
    ingredients:
      "Avobenzone 3% • Homosalate 15% • Octisalate 5% • Octocrylene 7% • Aqua / Water • Tocopherol • Moringa Oleifera Seed Extract • Leontopodium Alpinum Flower Extract.",
    similar: ["lancome-advanced-genifique", "lancome-genifique-night", "lancome-genifique-eye"],
  },
  "lancome-genifique-eye": {
    id: "lancome-genifique-eye",
    brandId: "lancome",
    title: "Advanced Génifique Light Pearl Eye Serum",
    kind: "Eye care",
    tags: ["De-puffing", "Caffeine"],
    image: "assets/catalog/lancome-genifique-eye.jpg",
    volume: "0.67 fl oz",
    priceNow: "$80.00",
    shopUrl: "https://www.lancome-usa.com/skincare/eye-serum/advanced-genifique-light-pearl-eye-serum/100600.html",
    description:
      "Under-eye serum with Bifidus Prebiotic, caffeine, and a cooling Cryo Pearl applicator. Reduces the look of bags, puffiness, and fine lines. Safe for sensitive eyes.",
    match: 86,
    matchIntro: "The eye area looked a little tired — caffeine plus a cooling applicator is a focused match for puffiness and fine lines.",
    matchReasons: [
      "Caffeine and the Cryo Pearl applicator address puffiness",
      "Hyaluronic acid hydrates thinner under-eye skin",
      "Ophthalmologist-tested and safe for sensitive eyes",
    ],
    ingredients:
      "Aqua / Water • Bifida Ferment Lysate • Glycerin • Ascorbyl Glucoside • Caffeine • Sodium Hyaluronate • Arginine • Adenosine.",
    similar: ["lancome-genifique-ultimate", "lancome-genifique-night", "lancome-advanced-genifique"],
  },
  "lancome-renergie-eye": {
    id: "lancome-renergie-eye",
    brandId: "lancome",
    title: "Rénergie Lift Multi-Action Eye Cream",
    kind: "Eye care",
    tags: ["Dark circles", "Firming"],
    image: "assets/catalog/lancome-renergie-eye.jpg",
    volume: "",
    priceNow: "$90.00",
    shopUrl: "https://www.lancome-usa.com/skincare/eye-serum/renergie-eye-cream/00266-LAC.html",
    description:
      "Silky eye cream with hyaluronic acid, linseed extract, caffeine, and cocoa seed butter. Hydrates, visibly reduces dark circles, and de-puffs under-eye bags. Morning and night.",
    match: 85,
    matchIntro: "Dark circles and puffiness showed up around the eyes — a firming eye cream with caffeine is a closer match than a face serum.",
    matchReasons: [
      "Caffeine and linseed extract target dark circles and under-eye bags",
      "After two weeks the eye contour looks smoother and feels firmer",
      "Ophthalmologist-tested and suitable for sensitive eyes",
    ],
    ingredients:
      "Aqua / Water • Theobroma Cacao Seed Butter • Glycerin • Sodium Acetylated Hyaluronate • Hydrolyzed Linseed Extract • Caffeine • Acetyl Tetrapeptide-9 • Adenosine.",
    similar: ["lancome-genifique-eye", "lancome-renergie-day", "lancome-genifique-night"],
  },
  "lancome-tonique-confort": {
    id: "lancome-tonique-confort",
    brandId: "lancome",
    title: "Tonique Confort Hyaluronic Acid Toner",
    kind: "Toner",
    badge: "Best-seller",
    tags: ["Hydrating", "Barrier"],
    image: "assets/catalog/lancome-tonique-confort.jpg",
    volume: "6.7 fl oz",
    priceNow: "$42.00",
    shopUrl: "https://www.lancome-usa.com/skincare/by-category/toners/tonique-confort-hyaluronic-acid-toner/00688-LAC.html",
    description:
      "Milky toner with hyaluronic acid, squalane, and centifolia rose. Strengthens the moisture barrier, softens, and leaves skin more radiant. Morning and evening, no rinse.",
    match: 87,
    matchIntro: "A hydrating toner fits this scan better than an acid essence — hyaluronic acid and squalane prep skin without stripping it.",
    matchReasons: [
      "Hyaluronic acid hydrates for up to 24 hours",
      "Squalane supports the moisture barrier",
      "Tested on sensitive skin and used morning and evening",
    ],
    ingredients:
      "Aqua / Water • Glycerin • Rosa Centifolia Flower Water • Squalane • Sodium Hyaluronate • Citric Acid • Caprylyl Glycol.",
    similar: ["lancome-clarifique-essence", "lancome-creme-mousse", "lancome-advanced-genifique"],
  },
  "lancome-clarifique-cleanser": {
    id: "lancome-clarifique-cleanser",
    brandId: "lancome",
    title: "Clarifique Pore Refining Cleanser",
    kind: "Cleanser",
    tags: ["Pores", "Salicylic acid"],
    image: "assets/catalog/lancome-clarifique-cleanser.jpg",
    volume: "",
    priceNow: "$45.00",
    shopUrl: "https://www.lancome-usa.com/skincare/clarifique-pore-refining-cleanser/01121-LAC.html",
    description:
      "Foaming cleanser with salicylic acid, beech bud, and licorice. Removes makeup and oil, and softens the look of pores, texture, and fine lines. Morning and night.",
    match: 84,
    matchIntro: "Pores and texture showed up more than dryness — a refining foam is a closer cleanse than a creamy makeup remover.",
    matchReasons: [
      "Salicylic acid helps the look of pores and leftover congestion",
      "The foam cleans without the tight feel of a harsh wash",
      "Suitable for sensitive skin, and it can be used day and night",
    ],
    ingredients:
      "Aqua / Water • Sodium Cocoyl Glycinate • Glycerin • Glycyrrhiza Glabra Root Extract • Fagus Sylvatica Bud Extract • Salicylic Acid • Rosa Centifolia Flower Extract.",
    similar: ["lancome-creme-mousse", "lancome-clarifique-essence", "lancome-tonique-confort"],
  },
  "lancome-renergie-day": {
    id: "lancome-renergie-day",
    brandId: "lancome",
    title: "Rénergie Lift Multi-Action SPF 15 Day Cream",
    kind: "Moisturizer",
    tags: ["Firming", "SPF 15"],
    image: "assets/catalog/lancome-renergie-day.jpg",
    volume: "1.7 fl oz",
    priceNow: "$140.00",
    shopUrl: "https://www.lancome-usa.com/skincare/by-category/day-creams/renergie-lift-multi-action-spf-15-day-cream/1454.html",
    description:
      "Day cream with vitamin E and plant extracts that lifts and firms while it hydrates. Visibly softens wrinkles and sagging, with broad-spectrum SPF 15. Morning use.",
    match: 88,
    matchIntro: "Firmness and wrinkles are the daytime job here — a lifting day cream with SPF 15 is a stronger morning match than a night cream.",
    matchReasons: [
      "Visibly lifts and firms the face and neck",
      "Crow's feet and wrinkles look softer after four weeks",
      "SPF 15 is in the cream, so the morning step still has sun protection",
    ],
    ingredients:
      "Water • Dimethicone • Glycerin • Yeast Extract • Secale Cereale Seed Extract • Tocopherol • Adenosine • Beeswax • Fragrance.",
    similar: ["lancome-genifique-night", "lancome-uv-expert", "lancome-renergie-eye"],
  },
};

/** @type {Record<LrpCategoryId, string[]>} */
const LANCOME_CATEGORY_IDS = {
  moisturizer: ["lancome-genifique-night", "lancome-renergie-day"],
  cleanser: ["lancome-creme-mousse", "lancome-clarifique-cleanser"],
  serum: ["lancome-genifique-ultimate", "lancome-advanced-genifique"],
  spf: ["lancome-uv-expert"],
  eye: ["lancome-genifique-eye", "lancome-renergie-eye"],
  acne: ["lancome-clarifique-essence"],
  body: ["lancome-genifique-night"],
  mist: ["lancome-tonique-confort", "lancome-clarifique-essence"],
  redness: ["lancome-creme-mousse", "lancome-genifique-night", "lancome-genifique-ultimate"],
  bestsellers: ["lancome-genifique-ultimate", "lancome-creme-mousse", "lancome-uv-expert"],
};

/** @type {Record<string, LrpConcern[]>} */
const LANCOME_PRODUCT_CLAIMS = {
  "lancome-genifique-ultimate": ["dry", "dehydrated", "sensitive", "aging", "pigment"],
  "lancome-advanced-genifique": ["dry", "dehydrated", "pigment", "aging", "sensitive", "oily"],
  "lancome-creme-mousse": ["dry", "sensitive", "dehydrated"],
  "lancome-clarifique-essence": ["pigment", "acne", "oily", "combination"],
  "lancome-genifique-night": ["dry", "dehydrated", "sensitive", "aging"],
  "lancome-uv-expert": ["sensitive", "dry", "oily", "combination", "pigment"],
  "lancome-genifique-eye": ["aging", "dehydrated", "pigment", "sensitive"],
  "lancome-renergie-eye": ["aging", "pigment", "sensitive", "dehydrated"],
  "lancome-tonique-confort": ["dry", "dehydrated", "sensitive", "pigment"],
  "lancome-clarifique-cleanser": ["oily", "combination", "acne", "sensitive"],
  "lancome-renergie-day": ["aging", "dry", "oily", "sensitive"],
};

/** Active Product Match brand. No brand in the message defaults to LRP. */
let matchBrand = /** @type {MatchBrand} */ ("lrp");

/** @param {MatchBrand} [brand] */
function catalogForBrand(brand = matchBrand) {
  if (brand === "cerave") return CERAVE_CATALOG;
  if (brand === "lancome") return LANCOME_CATALOG;
  return LRP_CATALOG;
}

/** @param {MatchBrand} [brand] */
function categoryIdsForBrand(brand = matchBrand) {
  if (brand === "cerave") return CERAVE_CATEGORY_IDS;
  if (brand === "lancome") return LANCOME_CATEGORY_IDS;
  return LRP_CATEGORY_IDS;
}

/** @param {MatchBrand} [brand] */
function matchBrandName(brand = matchBrand) {
  if (brand === "cerave") return "CeraVe";
  if (brand === "lancome") return "Lancôme";
  return "La Roche-Posay";
}

/** @param {MatchBrand} brand */
function nextMatchBrand(brand) {
  if (brand === "lrp") return /** @type {MatchBrand} */ ("cerave");
  if (brand === "cerave") return /** @type {MatchBrand} */ ("lancome");
  return /** @type {MatchBrand} */ ("lrp");
}

/** @param {{ id?: string, brandId?: string } | null | undefined} p */
function productMatchBrand(p) {
  if (p?.brandId === "lancome" || (p?.id && LANCOME_CATALOG[p.id])) return "lancome";
  if (p?.brandId === "cerave" || (p?.id && CERAVE_CATALOG[p.id])) return "cerave";
  return "lrp";
}

/** @param {{ id?: string } | null | undefined} p */
function claimsForProduct(p) {
  const id = p?.id || "";
  if (LANCOME_CATALOG[id]) return LANCOME_PRODUCT_CLAIMS[id] || [];
  if (CERAVE_CATALOG[id]) return CERAVE_PRODUCT_CLAIMS[id] || [];
  return LRP_PRODUCT_CLAIMS[id] || [];
}

/** @param {LrpCategoryId} category */
function lrpProductsFor(category) {
  const catalog = catalogForBrand();
  return (categoryIdsForBrand()[category] || []).map((id) => catalog[id]).filter(Boolean);
}

const LRP_PRODUCTS = Object.fromEntries(
  Object.keys(LRP_CATEGORY_IDS).map((key) => [
    key,
    (LRP_CATEGORY_IDS[/** @type {LrpCategoryId} */ (key)] || []).map((id) => LRP_CATALOG[id]).filter(Boolean),
  ]),
);

/** Product-type asks only — skin concerns are handled separately so follow-ups stay in the last category. */
const LRP_TYPE_PATTERNS = /** @type {[Exclude<LrpCategoryId, 'bestsellers'>, RegExp][]} */ ([
  ["eye", /\b(eye\s*(cream|serum|gel|balm|care)s?|eyecare|under[\s-]?eyes?|puffy\s*eyes|crow'?s\s*feet)\b/i],
  ["spf", /\b(spf|sunscreens?|sun\s*screens?|sunblock|sun\s*protection|uv\s*protection|white\s*cast|anthelios)\b/i],
  ["body", /\b(body\s*(lotion|cream|wash|butter|moisturi[sz]er)|lipikar|dry\s*body)\b/i],
  ["mist", /\b(toners?|mists?|face\s*sprays?|thermal\s*water|serozinc|clarifying\s*solution)\b/i],
  ["cleanser", /\b(cleansers?|cleansing|face\s*wash|facial\s*wash|wash\s*my\s*face|foaming\s*gel)\b/i],
  ["serum", /\b(serums?|vitamin\s*c|niacinamide|retinol)\b/i],
  ["moisturizer", /\b(moisturi[sz]ers?|moisturi[sz]ing|face\s*cream|day\s*cream|night\s*cream|lotion|hydrat(e|ing|ion)|barrier)\b/i],
]);

/** Used only when there is no product type and no prior carousel — e.g. “something for acne”. */
const LRP_CONCERN_CATEGORY_PATTERNS = /** @type {[Exclude<LrpCategoryId, 'bestsellers'>, RegExp][]} */ ([
  ["acne", /\b(acnes?|blemishes?|breakouts?|pimples?|blackheads?|whiteheads?|clogged\s*pores?|effaclar)\b/i],
  ["redness", /\b(redness|rosacea|flushing|visible\s*capillaries|rosaliac)\b/i],
  ["eye", /\b(dark\s*circles?|puffiness)\b/i],
]);

/** @typedef {'sensitive'|'oily'|'dry'|'dehydrated'|'acne'|'redness'|'pigment'|'aging'|'eczema'|'combination'} LrpConcern */

/** Skin-trait phrases parsed from follow-up messages. */
const LRP_CONCERN_PATTERNS = /** @type {[LrpConcern, RegExp][]} */ ([
  ["sensitive", /\b(sensitive|reactiv(e|ity)|easily\s+irritat|allergy[- ]prone|intolerant)\b/i],
  ["eczema", /\b(eczema|atopic|itchy|itch-prone)\b/i],
  ["acne", /\b(acnes?|blemishes?|breakouts?|pimples?|blackheads?|whiteheads?|congested|clogged\s*pores?)\b/i],
  ["redness", /\b(redness|rosacea|flushing|red\s+patches)\b/i],
  ["oily", /\b(oil(y|ier)|shine|shiny|greasy|sebum)\b/i],
  ["combination", /\b(combination|combo\s+skin|t-?zone)\b/i],
  ["dehydrated", /\b(dehydrat(ed|ion)|tight(ness)?|lacks?\s+water)\b/i],
  ["dry", /\b(dry(ness|er)?|flak(y|ing)|rough|cracked)\b/i],
  ["pigment", /\b(dark\s+spots?|uneven(\s+tone)?|dull(ness)?|discoloration|pigment|brighten)\b/i],
  ["aging", /\b(anti-?aging|wrinkles?|fine\s+lines?|mature)\b/i],
]);

const LRP_CONCERN_LABELS = /** @type {Record<LrpConcern, string>} */ ({
  sensitive: "sensitive skin",
  oily: "oilier skin",
  dry: "dry skin",
  dehydrated: "dehydrated skin",
  acne: "acne-prone skin",
  redness: "redness-prone skin",
  pigment: "uneven tone or dullness",
  aging: "visible aging",
  eczema: "eczema-prone skin",
  combination: "combination skin",
});

const LRP_CATEGORY_LABELS = /** @type {Record<LrpCategoryId, string>} */ ({
  moisturizer: "moisturizers",
  cleanser: "cleansers",
  serum: "serums",
  spf: "sunscreens",
  eye: "eye care picks",
  acne: "acne treatments",
  body: "body care picks",
  mist: "mists and toners",
  redness: "redness-care picks",
  bestsellers: "popular picks",
});

/**
 * LRP-facing claims taken from each product’s own copy (suitable for / tested on / formulated for).
 * `warning` on the product is a hard exclude — e.g. “Not suitable for sensitive skin”.
 * @type {Record<string, LrpConcern[]>}
 */
const LRP_PRODUCT_CLAIMS = {
  "toleriane-double-repair": ["sensitive", "dry", "dehydrated", "combination"],
  "toleriane-double-repair-matte": ["oily", "combination"],
  "hydraphase-ha": ["dehydrated", "dry", "sensitive"],
  "cicaplast-baume-b5": ["dry", "sensitive", "eczema", "redness"],
  "toleriane-hydrating-cleanser": ["dry", "sensitive"],
  "toleriane-purifying-cleanser": ["oily", "combination", "sensitive"],
  "effaclar-gel-cleanser": ["acne", "oily"],
  "mela-b3-serum": ["pigment", "sensitive"],
  "vitamin-c12-serum": ["pigment", "aging"],
  "cicaplast-b5-serum": ["dry", "dehydrated", "redness", "sensitive"],
  "anthelios-ultra-fluid": ["sensitive", "oily", "combination"],
  "anthelios-melt-in-milk": ["dry", "combination"],
  "anthelios-mineral-tinted": ["sensitive", "redness"],
  "pigmentclar-eyes": ["pigment"],
  "hyalu-b5-eye-serum": ["dehydrated", "dry", "sensitive"],
  "toleriane-dermallergo-eye": ["sensitive", "redness"],
  "effaclar-duo": ["acne", "oily", "pigment"],
  "effaclar-serum": ["acne", "oily"],
  "lipikar-apm": ["dry", "eczema", "sensitive"],
  "lipikar-lotion": ["dry", "sensitive"],
  "lipikar-wash": ["dry", "eczema", "sensitive"],
  "thermal-spring-water": ["sensitive", "redness"],
  "serozinc": ["oily", "combination"],
  "effaclar-clarifying": ["acne", "oily"],
  "toleriane-sensitive": ["sensitive", "dry", "redness"],
  "rosaliac-ar": ["redness", "sensitive"],
};

/** Positive phrases copied from LRP PDPs — used as a backup if a claim tag is missing. */
const LRP_CONCERN_CLAIM_RES = /** @type {Record<LrpConcern, RegExp>} */ ({
  sensitive:
    /suitable for(?:[\w\s,/]+)?sensitive|tested on sensitive|including sensitive|for sensitive skin|most sensitive|allergy[- ]tested|allergy-prone|intolerant/,
  oily: /oily|oil[- ]control|mattif|excess oil|combination-to-oily|control shine/,
  dry: /(?:for |to )?(?:extra-)?dry skin|dry to extra-dry|dryness|dry or irritated/,
  dehydrated: /dehydrat|72 hours of hydration|hyaluronic acid/,
  acne: /acne|blemish|blackhead|breakout|salicylic|benzoyl/,
  redness: /redness|flushing|capillar|rosacea|redness-reducing/,
  pigment: /dark spot|discoloration|uneven|brighten|radiance|pigment|post-acne marks/,
  aging: /anti-aging|wrinkle|fine (?:dehydration )?lines/,
  eczema: /eczema|atopic|itch/,
  combination: /combination/,
});

const LRP_KIND_TO_CATEGORY = /** @type {Record<string, LrpCategoryId>} */ ({
  Moisturizer: "moisturizer",
  Balm: "moisturizer",
  Cleanser: "cleanser",
  Serum: "serum",
  Sunscreen: "spf",
  "Eye care": "eye",
  "Acne treatment": "acne",
  "Acne serum": "acne",
  "Body cream": "body",
  "Body lotion": "body",
  "Body wash": "body",
  Mist: "mist",
  Toner: "mist",
});

/** Entry chips for Skin Diagnosis (New chat). First option launches the skin analysis consent path. */
const SKIN_DIAG_PROMPTS = [
  { id: "analyze-skin", text: "Analyze my skin", skinAnalyzeIntent: true },
  {
    id: "routine-sensitive",
    text: "Routine for sensitive skin",
    skincareIntent: true,
  },
  {
    id: "hydration",
    text: "Help with dehydrated skin",
    skincareIntent: true,
  },
  {
    id: "spf-daily",
    text: "Daily SPF that won't sting",
    skincareIntent: true,
  },
];

const PRODUCT_KEYWORDS =
  /\b(lipstick|lip\s*oil|lip\s*gloss|gloss|foundation|foundations|concealer|mascara|eyeshadow|blush|bronzer|makeup|beauty|shade|nude|mlbb|product|recommend|try\s*on|virtual|skin tint|tinted moisturizer|bb\s*cream|cc\s*cream)\b/i;

/** @typedef {'lips'|'foundation'} ProductCatalogId */

/** Mirror asset for Virtual Try-On buttons (after label text). */
const VTO_MIRROR_SRC = "assets/vto-mirror.png";

/** Icon in the “Makeup Try-On” chat header row (purple mirror treatment). */
const VTO_TRYON_HEADER_ICON_SRC = "assets/makeup-tryon-header-icon.png";
const SKIN_DIAG_HEADER_ICON_SRC = "assets/skin-diag-icon.svg";
const CERAVE_APP_ICON_SRC = "assets/cerave-app-icon.png";
const LANCOME_APP_ICON_SRC = "assets/lancome-app-icon.png";

/**
 * Product rows: `cardImage` points to local assets (placeholder photography for the prototype).
 * Replace with official YSL / Maybelline packshots when you have them.
 */
const PRODUCTS = {
  luxury: [
    {
      brand: "Yves Saint Laurent",
      title: "Loveshine Lip Oil Stick",
      shadeLabel: "203 — Blushed Mallow",
      swatch: "#9f6778",
      swatchBg: "linear-gradient(135deg, #efd8df, #7d5563)",
      cardImage: "assets/ysl-packshot-loveshine-lip-oil.png",
      badgePrimary: "Lip oil",
      badgeSecondary: "",
      tags: [
        { dot: "#9f6778", label: "Cool rose" },
        { dot: "#e96ce8", label: "Sheer" },
        { dot: "#e96ce8", label: "Gloss" },
      ],
      priceWas: "$48",
      priceNow: "$42",
      rating: 4.6,
      ratingCount: "2.4k",
      description:
        "A lip oil fused with caring oils for a dewy shine and a soft wash of color. The balm-like stick glides on smoothly and helps lips feel moisturized with a lightweight, non-sticky finish.",
      ingredients:
        "Diisostearyl Malate, Trimethylolpropane Triisostearate, Polybutene, Bis-Diglyceryl Polyacyladipate-2, Hydrogenated Polyisobutene, VP/Eicosene Copolymer, Synthetic Wax, Ceresin, Ethylhexyl Palmitate, Silica Dimethyl Silylate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Tocopherol, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491, CI 77499].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Rouge Pur Couture",
      shadeLabel: "124 — Rose Opéra",
      swatch: "#e878a8",
      swatchBg: "linear-gradient(135deg, #fde8f2, #d45f8e)",
      cardImage: "assets/ysl-packshot-rouge-pur-couture.png",
      badgePrimary: "Satin",
      badgeSecondary: "Iconic",
      tags: [
        { dot: "#e878a8", label: "Cool pink" },
        { dot: "#e96ce8", label: "Couture case" },
        { dot: "#e96ce8", label: "YSL bullet" },
      ],
      priceWas: "$52",
      priceNow: "$46",
      rating: 4.7,
      ratingCount: "3.1k",
      description:
        "The signature YSL lipstick in a couture gold case with a teardrop bullet. This cool-toned rose pink delivers creamy satin color with a smooth, comfortable feel and a polished finish.",
      ingredients:
        "Pentaerythrityl Tetraisostearate, Hydrogenated Polyisobutene, Bis-Diglyceryl Polyacyladipate-2, Cera Microcristallina, Trimethylsiloxyphenyl Dimethicone, Polyethylene, Diisostearyl Malate, Parfum (Fragrance), Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 15850, CI 77891, CI 77491, CI 45410].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Candy Glaze Lip Gloss Stick",
      shadeLabel: "12 — Flashing Rosé",
      swatch: "#e86a58",
      swatchBg: "linear-gradient(135deg, #fff1eb, #d95945)",
      cardImage: "assets/ysl-packshot-candy-glaze.png",
      badgePrimary: "Gloss stick",
      badgeSecondary: "Shine",
      tags: [
        { dot: "#e86a58", label: "Coral pink" },
        { dot: "#e96ce8", label: "Juicy" },
        { dot: "#e96ce8", label: "Cushion" },
      ],
      priceWas: "$42",
      priceNow: "$38",
      rating: 4.5,
      ratingCount: "1.9k",
      description:
        "A glossy lip stick hybrid with a candy-like shine and a melting texture. Buildable color with a wet-look finish that catches light without feeling tacky.",
      ingredients:
        "Polybutene, Diisostearyl Malate, Hydrogenated Polyisobutene, Ethylhexyl Palmitate, VP/Eicosene Copolymer, Synthetic Wax, Mica, Tocopherol, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 45410].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Rouge Volupté Shine",
      shadeLabel: "44 — Nude Lavallière",
      swatch: "#946878",
      swatchBg: "linear-gradient(135deg, #e8d2da, #7d5665)",
      cardImage: "assets/ysl-packshot-rvshine-44.png",
      badgePrimary: "Balm shine",
      badgeSecondary: "Bestseller",
      tags: [
        { dot: "#946878", label: "Mauve nude" },
        { dot: "#e96ce8", label: "Hydrating" },
        { dot: "#e96ce8", label: "SPF" },
      ],
      priceWas: "$46",
      priceNow: "$42",
      rating: 4.8,
      ratingCount: "4.2k",
      description:
        "A lipstick-balm hybrid with luminous shine and a melting feel. Nude Lavallière is a flattering warm nude that pairs easily with soft glam or no-makeup days.",
      ingredients:
        "Octyldodecanol, Polybutene, Pentaerythrityl Tetraisostearate, Diisostearyl Malate, Hydrogenated Polyisobutene, Cera Microcristallina, Ethylhexyl Methoxycinnamate, Tocopheryl Acetate, Parfum (Fragrance), Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491].",
    },
  ],
  budget: [
    {
      brand: "Maybelline",
      title: "Super Stay Vinyl Ink",
      shadeLabel: "40 — Witty",
      swatch: "#b66c78",
      swatchBg: "linear-gradient(135deg, #f4ccd4, #b66c78)",
      cardImage: "assets/mny-vinyl-ink-40-witty.png",
      badgePrimary: "Longwear",
      badgeSecondary: "Vinyl shine",
      tags: [
        { dot: "#c45a6e", label: "Berry rose" },
        { dot: "#e96ce8", label: "16HR" },
        { dot: "#e96ce8", label: "Transfer-resistant" },
      ],
      priceWas: "$14",
      priceNow: "$11",
      rating: 4.3,
      ratingCount: "18k",
      description:
        "A liquid lipcolor with a glossy vinyl finish and serious staying power. Cheeky is a vivid berry-rose that reads bold in one swipe or blotted for a stain.",
      ingredients:
        "Isododecane, Trimethylsiloxysilicate, Dimethicone, Polypropylsilsesquioxane, C30-45 Alkyldimethylsilyl Polypropylsilsesquioxane, Disteardimonium Hectorite, Propylene Carbonate, Tocopheryl Acetate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491].",
    },
    {
      brand: "Maybelline",
      title: "Super Stay Matte Ink",
      shadeLabel: "Mover",
      swatch: "#b65366",
      swatchBg: "linear-gradient(135deg, #f3bcc6, #b65366)",
      cardImage: "assets/mny-matte-ink-mover.png",
      badgePrimary: "Longwear matte",
      badgeSecondary: "High impact",
      tags: [
        { dot: "#b65366", label: "Rosy berry" },
        { dot: "#e96ce8", label: "16HR" },
        { dot: "#e96ce8", label: "Transfer-resistant" },
      ],
      priceWas: "$11",
      priceNow: "$9",
      rating: 4.4,
      ratingCount: "22k",
      description:
        "A satin lipstick designed to flatter a wide range of undertones. Red For Me is a balanced true red that looks polished for work or dialed up for night.",
      ingredients:
        "Octyldodecanol, Polybutene, Ethylhexyl Palmitate, Pentaerythrityl Tetraisostearate, Synthetic Wax, Bis-Diglyceryl Polyacyladipate-2, Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 15850, CI 77891, CI 77491].",
    },
    {
      brand: "Maybelline",
      title: "Lifter Gloss",
      shadeLabel: "Reef",
      swatch: "#d79ca9",
      swatchBg: "linear-gradient(135deg, #f8d9df, #d79ca9)",
      cardImage: "assets/mny-lifter-gloss-reef.png",
      badgePrimary: "Hyaluronic",
      badgeSecondary: "Top rated",
      tags: [
        { dot: "#c99592", label: "Stone" },
        { dot: "#e96ce8", label: "Plumping" },
        { dot: "#e96ce8", label: "High shine" },
      ],
      priceWas: "$12",
      priceNow: "$9",
      rating: 4.2,
      ratingCount: "12k",
      description:
        "Hyaluronic acid-infused gloss with high shine and a cushioned feel. Stone is a flattering neutral pink that pairs well with everyday makeup.",
      ingredients:
        "Polybutene, Hydrogenated Polyisobutene, Ethylhexyl Palmitate, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Silica, Pentaerythrityl Tetraisostearate, Tocopheryl Acetate, Sodium Hyaluronate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 15850, CI 45410].",
    },
    {
      brand: "Maybelline",
      title: "Slip-On Serum Lipstick",
      shadeLabel: "04 — Til 4",
      swatch: "#a65958",
      swatchBg: "linear-gradient(135deg, #f4cfcf, #a65958)",
      cardImage: "assets/mny-slip-on-serum-til-4.png",
      badgePrimary: "Serum lipstick",
      badgeSecondary: "Comfort wear",
      tags: [
        { dot: "#a65958", label: "Warm terracotta" },
        { dot: "#e96ce8", label: "Soft matte" },
        { dot: "#e96ce8", label: "Hydrating feel" },
      ],
      priceWas: "$12",
      priceNow: "$10",
      rating: 4.5,
      ratingCount: "25k",
      description:
        "A liquid lipstick with intense matte color and all-day wear. Seductress is a soft mauve-nude that works across seasons and undertones.",
      ingredients:
        "Isododecane, Dimethicone, Trimethylsiloxysilicate, Polybutene, Petrolatum, Cyclohexasiloxane, Disteardimonium Hectorite, Propylene Carbonate, Tocopheryl Acetate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491, CI 77499].",
    },
  ],
};

/** Foundation shortlists keyed by the same luxury / budget tier as lip picks. */
const FOUNDATION_PRODUCTS = {
  luxury: [
    {
      brand: "Yves Saint Laurent",
      title: "All Hours Foundation",
      shadeLabel: "LW7 — Warm Linen",
      swatch: "#c4a574",
      swatchBg: "linear-gradient(135deg, #f2e6d4, #a88452)",
      cardImage: "assets/ysl-1.jpg",
      badgePrimary: "24HR matte",
      badgeSecondary: "Transfer-resistant",
      tags: [
        { dot: "#c4a574", label: "Warm neutral" },
        { dot: "#e96ce8", label: "Buildable" },
        { dot: "#e96ce8", label: "Oil control" },
      ],
      priceWas: "$68",
      priceNow: "$58",
      rating: 4.5,
      ratingCount: "1.8k",
      description:
        "A full-coverage liquid foundation with a soft matte finish that resists humidity and heat. Warm Linen is a balanced golden-beige for light–medium skin with warm undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Trimethylsiloxysilicate, Glycerin, PEG-10 Dimethicone, Butylene Glycol, Magnesium Sulfate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "NU Bare Look Tint",
      shadeLabel: "Medium 4 — Golden",
      swatch: "#b89470",
      swatchBg: "linear-gradient(135deg, #efe4d8, #96754f)",
      cardImage: "assets/ysl-2.jpg",
      badgePrimary: "Skin tint",
      badgeSecondary: "Light coverage",
      tags: [
        { dot: "#b89470", label: "Golden" },
        { dot: "#e96ce8", label: "Skin-like" },
        { dot: "#e96ce8", label: "SPF" },
      ],
      priceWas: "$48",
      priceNow: "$44",
      rating: 4.6,
      ratingCount: "2.1k",
      description:
        "A sheer skin tint that evens tone while letting real skin show through. Golden Medium 4 adds warmth without masking texture—ideal for no-makeup makeup days.",
      ingredients:
        "Aqua, Ethylhexyl Methoxycinnamate, Cyclopentasiloxane, Dimethicone, Titanium Dioxide, Glycerin, Tocopherol, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Touche Éclat Le Teint",
      shadeLabel: "BD45 — Warm Bisque",
      swatch: "#c9a088",
      swatchBg: "linear-gradient(135deg, #f5e6dc, #a67c62)",
      cardImage: "assets/ysl-3.jpg",
      badgePrimary: "Radiant",
      badgeSecondary: "Buildable",
      tags: [
        { dot: "#c9a088", label: "Warm bisque" },
        { dot: "#e96ce8", label: "Luminous" },
        { dot: "#e96ce8", label: "SPF 22" },
      ],
      priceWas: "$62",
      priceNow: "$56",
      rating: 4.7,
      ratingCount: "3.4k",
      description:
        "A luminous foundation that reads like healthy skin. BD45 Warm Bisque balances peach and beige for medium complexions that skew warm.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Ethylhexyl Methoxycinnamate, PEG-10 Dimethicone, Talc, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850].",
    },
    {
      brand: "Yves Saint Laurent",
      title: "Youth Liberator Serum Foundation",
      shadeLabel: "BR20 — Cool Ivory",
      swatch: "#d4a99f",
      swatchBg: "linear-gradient(135deg, #fceee9, #b8877c)",
      cardImage: "assets/ysl-4.jpg",
      badgePrimary: "Serum-infused",
      badgeSecondary: "Satin",
      tags: [
        { dot: "#d4a99f", label: "Cool ivory" },
        { dot: "#e96ce8", label: "Plumping" },
        { dot: "#e96ce8", label: "Blendable" },
      ],
      priceWas: "$72",
      priceNow: "$64",
      rating: 4.4,
      ratingCount: "1.2k",
      description:
        "A satin foundation infused with skincare actives for a smoother look over time. BR20 Cool Ivory suits fair skin with pink undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Propylene Glycol, PEG-10 Dimethicone, Tocopheryl Acetate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
  ],
  budget: [
    {
      brand: "Maybelline",
      title: "Fit Me Matte + Poreless",
      shadeLabel: "128 — Warm Nude",
      swatch: "#c49e7c",
      swatchBg: "linear-gradient(135deg, #f3e4d4, #a67f5a)",
      cardImage: "assets/mny-1.jpg",
      badgePrimary: "Matte",
      badgeSecondary: "Pore-blurring",
      tags: [
        { dot: "#c49e7c", label: "Warm nude" },
        { dot: "#e96ce8", label: "Oil-free" },
        { dot: "#e96ce8", label: "40 shades" },
      ],
      priceWas: "$10",
      priceNow: "$8",
      rating: 4.3,
      ratingCount: "42k",
      description:
        "A lightweight liquid foundation that mattifies shine and refines the look of pores. 128 Warm Nude is a go-to for light–medium skin with golden undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, PEG-10 Dimethicone, Magnesium Sulfate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850].",
    },
    {
      brand: "Maybelline",
      title: "Super Stay Full Coverage",
      shadeLabel: "312 — Golden",
      swatch: "#c4916a",
      swatchBg: "linear-gradient(135deg, #f5e0d2, #a66f48)",
      cardImage: "assets/mny-2.jpg",
      badgePrimary: "Full coverage",
      badgeSecondary: "Longwear",
      tags: [
        { dot: "#c4916a", label: "Golden" },
        { dot: "#e96ce8", label: "30HR" },
        { dot: "#e96ce8", label: "Pump" },
      ],
      priceWas: "$14",
      priceNow: "$11",
      rating: 4.5,
      ratingCount: "28k",
      description:
        "A high-pigment foundation that stays put through heat and long days. 312 Golden flatters medium skin with warm, sunlit undertones.",
      ingredients:
        "Isododecane, Trimethylsiloxysilicate, Dimethicone, Polypropylsilsesquioxane, Disteardimonium Hectorite, Propylene Carbonate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
    {
      brand: "Maybelline",
      title: "Dream Satin Liquid",
      shadeLabel: "60 — Sandy Beige",
      swatch: "#d4b896",
      swatchBg: "linear-gradient(135deg, #faf3ea, #b8966e)",
      cardImage: "assets/mny-3.jpg",
      badgePrimary: "Hydrating",
      badgeSecondary: "Satin",
      tags: [
        { dot: "#d4b896", label: "Sandy beige" },
        { dot: "#e96ce8", label: "Hyaluronic" },
        { dot: "#e96ce8", label: "Blendable" },
      ],
      priceWas: "$12",
      priceNow: "$9",
      rating: 4.2,
      ratingCount: "19k",
      description:
        "A hydrating satin foundation that melts into skin for a fresh, never-flat finish. 60 Sandy Beige works for light–medium neutral-to-warm tones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Ethylhexyl Palmitate, Sodium Hyaluronate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
    {
      brand: "Maybelline",
      title: "Instant Age Rewind Instant Perfector",
      shadeLabel: "110 — Porcelain Glow",
      swatch: "#e8d4c4",
      swatchBg: "linear-gradient(135deg, #fff9f4, #c9a88f)",
      cardImage: "assets/mny-4.jpg",
      badgePrimary: "4-in-1",
      badgeSecondary: "Glow",
      tags: [
        { dot: "#e8d4c4", label: "Porcelain" },
        { dot: "#e96ce8", label: "Prime + cover" },
        { dot: "#e96ce8", label: "SPF 20" },
      ],
      priceWas: "$16",
      priceNow: "$13",
      rating: 4.1,
      ratingCount: "9k",
      description:
        "A multitasking complexion perfector that primes, covers, conceals, and adds a soft glow. 110 Porcelain Glow suits fair skin with neutral-to-cool undertones.",
      ingredients:
        "Aqua, Cyclopentasiloxane, Dimethicone, Titanium Dioxide, Glycerin, Ethylhexyl Methoxycinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 77492, CI 77499].",
    },
  ],
};

/** @typedef {'entry'|'chat'} View */
/** @typedef {'idle'|'busy'} Flow */

/** Lucide (shadcn default) inline SVG — mirror assets stay PNG per product. */
const LUC = {
  stroke: 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"',
  svg: (size, paths) =>
    `<svg class="lucide" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${paths}</svg>`,
};

const el = {
  promptList: /** @type {HTMLElement} */ (document.getElementById("promptList")),
  entryView: /** @type {HTMLElement} */ (document.getElementById("entryView")),
  chatView: /** @type {HTMLElement} */ (document.getElementById("chatView")),
  mainScroll: /** @type {HTMLElement} */ (document.getElementById("mainScroll")),
  input: /** @type {HTMLTextAreaElement} */ (document.getElementById("composerInput")),
  composerField: /** @type {HTMLElement} */ (document.getElementById("composerField")),
  sendBtn: /** @type {HTMLButtonElement} */ (document.getElementById("composerSend")),
  productDetail: /** @type {HTMLElement} */ (document.getElementById("productDetail")),
  productDetailClose: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailClose")),
  productDetailScroll: /** @type {HTMLElement} */ (document.getElementById("productDetailScroll")),
  productDetailSlides: /** @type {HTMLElement} */ (document.getElementById("productDetailSlides")),
  productDetailDots: /** @type {HTMLElement} */ (document.getElementById("productDetailDots")),
  productDetailBrand: /** @type {HTMLElement} */ (document.getElementById("productDetailBrand")),
  productDetailTitle: /** @type {HTMLElement} */ (document.getElementById("productDetailTitle")),
  productDetailTags: /** @type {HTMLElement} */ (document.getElementById("productDetailTags")),
  productDetailShadeDot: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeDot")),
  productDetailShadeLabel: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeLabel")),
  productDetailMeta: /** @type {HTMLElement} */ (document.getElementById("productDetailMeta")),
  productDetailDescription: /** @type {HTMLElement} */ (document.getElementById("productDetailDescription")),
  productDetailIngredientsBody: /** @type {HTMLElement} */ (document.getElementById("productDetailIngredientsBody")),
  productDetailBuy: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailBuy")),
  productDetailUnpack: /** @type {HTMLElement} */ (document.getElementById("productDetailUnpack")),
  productDetailUnpackLede: /** @type {HTMLElement} */ (document.getElementById("productDetailUnpackLede")),
  productDetailUnpackList: /** @type {HTMLElement} */ (document.getElementById("productDetailUnpackList")),
  productDetailAlternates: /** @type {HTMLElement} */ (document.getElementById("productDetailAlternates")),
  productDetailAlternatesStrip: /** @type {HTMLElement} */ (document.getElementById("productDetailAlternatesStrip")),
  productDetailAlternatesSub: /** @type {HTMLElement} */ (document.getElementById("productDetailAlternatesSub")),
  productDetailShadeRow: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeRow")),
  productDetailVto: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailVto")),
  vtoFlow: /** @type {HTMLElement} */ (document.getElementById("vtoFlow")),
  vtoTermsPanel: /** @type {HTMLElement} */ (document.getElementById("vtoTermsPanel")),
  vtoLiveStubPanel: /** @type {HTMLElement} */ (document.getElementById("vtoLiveStubPanel")),
  vtoSelfieStubPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieStubPanel")),
  vtoSelfieConfirmPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieConfirmPanel")),
  vtoSkinQuestionnairePanel: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuestionnairePanel")),
  vtoSkinQuizBack: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizBack")),
  vtoSkinQuizProgressFill: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizProgressFill")),
  vtoSkinQuizTitle: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizTitle")),
  vtoSkinQuizSubtitle: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizSubtitle")),
  vtoSkinQuizHelpBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizHelpBtn")),
  vtoSkinQuizOptions: /** @type {HTMLElement} */ (document.getElementById("vtoSkinQuizOptions")),
  vtoSkinQuizContinue: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizContinue")),
  vtoSkinQuizPreferNot: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinQuizPreferNot")),
  vtoSkinQuizSkip: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinQuizSkip")),
  vtoSkinQuizClose: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinQuizClose")),
  vtoSkinQuizHelp: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinQuizHelp")),
  vtoSkinQuizCustom: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinQuizCustom")),
  vtoSkinQuizSlide: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinQuizSlide")),
  vtoSkinQuizViewport: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinQuizViewport")),
  vtoSkinDiagLoadingPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagLoadingPanel")),
  vtoSkinDiagLoadingBg: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagLoadingBg")),
  vtoSkinDiagLoadingSteps: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagLoadingSteps")),
  vtoSkinDiagResultsPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSkinDiagResultsPanel")),
  vtoSkinDiagResultsClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSkinDiagResultsClose")),
  vtoSkinDiagResultsImg: /** @type {HTMLImageElement} */ (document.getElementById("vtoSkinDiagResultsImg")),
  vtoSkinDiagResultsProducts: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagResultsProducts")),
  vtoSkinDiagResultsInsights: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagResultsInsights")),
  vtoSkinDiagResultsInsightDots: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagResultsInsightDots")),
  vtoSkinDiagResultsShop: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinDiagResultsShop")),
  vtoSkinDiagResultsSkinCard: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagResultsSkinCard")),
  vtoSkinDiagSkinPanel: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagSkinPanel")),
  vtoSkinDiagSkinClose: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinDiagSkinClose")),
  vtoSkinDiagSkinScrim: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinDiagSkinScrim")),
  vtoSkinDiagSkinImgLeft: /** @type {HTMLImageElement | null} */ (document.getElementById("vtoSkinDiagSkinImgLeft")),
  vtoSkinDiagSkinImgFront: /** @type {HTMLImageElement | null} */ (document.getElementById("vtoSkinDiagSkinImgFront")),
  vtoSkinDiagSkinImgRight: /** @type {HTMLImageElement | null} */ (document.getElementById("vtoSkinDiagSkinImgRight")),
  vtoSkinDiagResultsClimateCard: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagResultsClimateCard")),
  vtoSkinDiagClimatePanel: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagClimatePanel")),
  vtoSkinDiagClimateClose: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinDiagClimateClose")),
  vtoSkinDiagClimateScrim: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSkinDiagClimateScrim")),
  vtoSkinDiagClimateLede: /** @type {HTMLElement | null} */ (document.getElementById("vtoSkinDiagClimateLede")),
  vtoSelfiePreviewImg: /** @type {HTMLImageElement} */ (document.getElementById("vtoSelfiePreviewImg")),
  vtoSelfieConfirmClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieConfirmClose")),
  vtoSelfieConfirmInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieConfirmInfo")),
  vtoSelfieUseImage: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieUseImage")),
  vtoSelfieRetake: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieRetake")),
  vtoTryOnPanel: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnPanel")),
  vtoTryOnClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnClose")),
  vtoTryOnBefore: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnBefore")),
  vtoTryOnAfterWrap: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnAfterWrap")),
  vtoTryOnAfterBase: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnAfterBase")),
  vtoTryOnLipCanvas: /** @type {HTMLCanvasElement} */ (document.getElementById("vtoTryOnLipCanvas")),
  vtoTryOnViewport: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnViewport")),
  vtoTryOnSliderTrack: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnSliderTrack")),
  vtoTryOnSliderKnob: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnSliderKnob")),
  vtoTryOnMiniTitle: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniTitle")),
  vtoTryOnMiniShade: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniShade")),
  vtoTryOnMiniDot: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniDot")),
  vtoTryOnMiniThumb: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnMiniThumb")),
  vtoTryOnMiniPhoto: /** @type {HTMLImageElement | null} */ (document.getElementById("vtoTryOnMiniPhoto")),
  vtoTryOnShades: /** @type {HTMLElement} */ (document.getElementById("vtoTryOnShades")),
  vtoTryOnMiniInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnMiniInfo")),
  vtoTryOnModeToggle: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTryOnModeToggle")),
  vtoTryOnAltLipOverlay: /** @type {HTMLElement | null} */ (document.getElementById("vtoTryOnAltLipOverlay")),
  vtoSelfieCameraPanel: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieCameraPanel")),
  vtoSelfieVideo: /** @type {HTMLVideoElement} */ (document.getElementById("vtoSelfieVideo")),
  vtoSelfieGuidePill: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieGuidePill")),
  vtoSelfieGuidePath: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePath")),
  vtoSelfieGuidePathLeft: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePathLeft")),
  vtoSelfieGuidePathRight: /** @type {SVGPathElement | null} */ (document.getElementById("vtoSelfieGuidePathRight")),
  vtoSelfieCameraClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieCameraClose")),
  vtoSelfieCameraInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieCameraInfo")),
  vtoSelfieCaptureComplete: /** @type {HTMLElement} */ (document.getElementById("vtoSelfieCaptureComplete")),
  vtoSelfieCaptureCanvas: /** @type {HTMLCanvasElement} */ (document.getElementById("vtoSelfieCaptureCanvas")),
  vtoSelfieUploadFallback: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSelfieUploadFallback")),
  vtoSelfieUploadInput: /** @type {HTMLInputElement | null} */ (document.getElementById("vtoSelfieUploadInput")),
  vtoSelfieStubClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubClose")),
  vtoSelfieStubInfo: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubInfo")),
  vtoSelfieStubPrivacyLearn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieStubPrivacyLearn")),
  vtoTermsCheckbox: /** @type {HTMLInputElement} */ (document.getElementById("vtoTermsCheckbox")),
  vtoConsentBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoConsentBtn")),
  vtoTermsClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTermsClose")),
  vtoLiveStubBack: /** @type {HTMLButtonElement} */ (document.getElementById("vtoLiveStubBack")),
  vtoLiveStubDone: /** @type {HTMLButtonElement} */ (document.getElementById("vtoLiveStubDone")),
  vtoStubLiveMode: /** @type {HTMLButtonElement} */ (document.getElementById("vtoStubLiveMode")),
  vtoSelfieTake: /** @type {HTMLButtonElement} */ (document.getElementById("vtoSelfieTake")),
  composerRoot: /** @type {HTMLElement | null} */ (document.getElementById("composerRoot")),
  composerFootnote: /** @type {HTMLElement | null} */ (document.querySelector(".composer-footnote")),
  shellMain: /** @type {HTMLElement | null} */ (document.querySelector(".shell-main")),
  shell: /** @type {HTMLElement | null} */ (document.querySelector(".shell")),
  lrpFlow: /** @type {HTMLElement | null} */ (document.getElementById("lrpFlow")),
  lrpTermsPanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpTermsPanel")),
  lrpLandingPanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpLandingPanel")),
  lrpTermsCheckbox: /** @type {HTMLInputElement | null} */ (document.getElementById("lrpTermsCheckbox")),
  lrpTermsAgreeRow: /** @type {HTMLElement | null} */ (document.getElementById("lrpTermsAgreeRow")),
  lrpConsentBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpConsentBtn")),
  lrpLandingMedia: /** @type {HTMLElement | null} */ (document.getElementById("lrpLandingMedia")),
  lrpLandingName: /** @type {HTMLElement | null} */ (document.getElementById("lrpLandingName")),
  lrpLandingTags: /** @type {HTMLElement | null} */ (document.getElementById("lrpLandingTags")),
  lrpTakeSelfieBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpTakeSelfieBtn")),
  lrpCameraPanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpCameraPanel")),
  lrpCameraVideo: /** @type {HTMLVideoElement | null} */ (document.getElementById("lrpCameraVideo")),
  lrpCameraOval: /** @type {HTMLElement | null} */ (document.getElementById("lrpCameraOval")),
  lrpCameraPill: /** @type {HTMLElement | null} */ (document.getElementById("lrpCameraPill")),
  lrpCameraFlash: /** @type {HTMLElement | null} */ (document.getElementById("lrpCameraFlash")),
  lrpCameraCanvas: /** @type {HTMLCanvasElement | null} */ (document.getElementById("lrpCameraCanvas")),
  lrpDonePanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpDonePanel")),
  lrpLoaderPanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpLoaderPanel")),
  lrpLoaderSteps: /** @type {HTMLElement | null} */ (document.getElementById("lrpLoaderSteps")),
  lrpResultsPanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultsPanel")),
  lrpResultMatchPill: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultMatchPill")),
  lrpResultMedia: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultMedia")),
  lrpResultKind: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultKind")),
  lrpResultName: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultName")),
  lrpResultTags: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultTags")),
  lrpResultWarning: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultWarning")),
  lrpResultPrice: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultPrice")),
  lrpResultDesc: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultDesc")),
  lrpMatchCardPill: /** @type {HTMLElement | null} */ (document.getElementById("lrpMatchCardPill")),
  lrpMatchIntro: /** @type {HTMLElement | null} */ (document.getElementById("lrpMatchIntro")),
  lrpMatchReasons: /** @type {HTMLElement | null} */ (document.getElementById("lrpMatchReasons")),
  lrpMatchHowBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpMatchHowBtn")),
  lrpMatchHowDrawer: /** @type {HTMLElement | null} */ (document.getElementById("lrpMatchHowDrawer")),
  lrpMatchHowScrim: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpMatchHowScrim")),
  lrpMatchHowClose: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpMatchHowClose")),
  lrpResultIngredients: /** @type {HTMLElement | null} */ (document.getElementById("lrpResultIngredients")),
  lrpMoreHeading: /** @type {HTMLElement | null} */ (document.getElementById("lrpMoreHeading")),
  lrpMoreIntro: /** @type {HTMLElement | null} */ (document.getElementById("lrpMoreIntro")),
  lrpMoreRow: /** @type {HTMLElement | null} */ (document.getElementById("lrpMoreRow")),
  lrpMoreDots: /** @type {HTMLElement | null} */ (document.getElementById("lrpMoreDots")),
  lrpMoreCarousel: /** @type {HTMLElement | null} */ (document.getElementById("lrpMoreCarousel")),
  lrpShopBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpShopBtn")),
  lrpShopLabel: /** @type {HTMLElement | null} */ (document.getElementById("lrpShopLabel")),
  lrpDetailsPanel: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsPanel")),
  lrpDetailsMedia: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsMedia")),
  lrpDetailsKind: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsKind")),
  lrpDetailsName: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsName")),
  lrpDetailsTags: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsTags")),
  lrpDetailsWarning: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsWarning")),
  lrpDetailsPrice: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsPrice")),
  lrpDetailsDesc: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsDesc")),
  lrpDetailsIngredients: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsIngredients")),
  lrpDetailsMoreHeading: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsMoreHeading")),
  lrpDetailsMoreRow: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsMoreRow")),
  lrpDetailsMoreDots: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsMoreDots")),
  lrpDetailsMoreCarousel: /** @type {HTMLElement | null} */ (document.getElementById("lrpDetailsMoreCarousel")),
  lrpDetailsMatchBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpDetailsMatchBtn")),
  lrpDetailsShopBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("lrpDetailsShopBtn")),
  composerPlus: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerPlus")),
  composerAppMenu: /** @type {HTMLElement | null} */ (document.getElementById("composerAppMenu")),
  composerAppMenuBackdrop: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuBackdrop")),
  composerAppMenuVto: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuVto")),
  composerAppMenuSkinDiag: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppMenuSkinDiag")),
  composerAppPill: /** @type {HTMLElement | null} */ (document.getElementById("composerAppPill")),
  composerAppPillClear: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerAppPillClear")),
  composerHighlight: /** @type {HTMLElement | null} */ (document.getElementById("composerHighlight")),
  composerMentionMenu: /** @type {HTMLElement | null} */ (document.getElementById("composerMentionMenu")),
  composerMentionLrp: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerMentionLrp")),
  composerMentionCerave: /** @type {HTMLButtonElement | null} */ (document.getElementById("composerMentionCerave")),
  lrpTermsLegal: /** @type {HTMLElement | null} */ (document.getElementById("lrpTermsLegal")),
  navNewChatBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("navNewChatBtn")),
  navMenuBtn: /** @type {HTMLButtonElement | null} */ (document.getElementById("navMenuBtn")),
  entryHeadline: /** @type {HTMLElement | null} */ (document.getElementById("entryHeadline")),
  vtoSelfieStubTitle: /** @type {HTMLElement | null} */ (document.getElementById("vtoSelfieStubTitle")),
  vtoSelfieStubLead: /** @type {HTMLElement | null} */ (document.getElementById("vtoSelfieStubLead")),
  vtoSelfieSkip: /** @type {HTMLButtonElement | null} */ (document.getElementById("vtoSelfieSkip")),
};

/** @type {View} */
let view = "entry";
/** @type {Flow} */
let flow = "idle";

/** @typedef {'makeup'|'skin_diag'} ChatMode */
/** @type {ChatMode} */
let chatMode = "makeup";

/** When true, post–terms navigation should go to Skin Diagnosis instead of try-on mode. */
let skinDiagFlowActive = false;

/** Skin diagnosis user chose “Skip the selfie” on the face-scan landing. */
let skinDiagSelfieSkipped = false;

/** Front / left / right frames from the Product Match scan (data URLs). */
let skinDiagSelfieAngles = /** @type {{ left: string | null, front: string | null, right: string | null }} */ ({
  left: null,
  front: null,
  right: null,
});

function clearSkinDiagSelfieAngles() {
  skinDiagSelfieAngles = { left: null, front: null, right: null };
}

/** @param {{ left?: string | null, front?: string | null, right?: string | null }} angles */
function persistSkinDiagSelfieAngles(angles) {
  const front = angles.front || null;
  skinDiagSelfieAngles = {
    left: angles.left || front,
    front,
    right: angles.right || front,
  };
}

/** When true, VTO shell chrome (brand, camera permission copy) uses skincare.com. Independent of {@link skinDiagFlowActive} so chat-side effects cannot flip branding mid-capture. */
let vtoSkinBrandExperienceActive = false;

const VTO_EXPERIENCE_BRAND_MAKEUP = "makeup.com";
const VTO_EXPERIENCE_BRAND_SKIN = "skincare.com";
const VTO_EXPERIENCE_ARIA_MAKEUP = "makeup.com by L'Oréal";
const VTO_EXPERIENCE_ARIA_SKIN = "skincare.com by L'Oréal";

/** Active skin diagnosis capture / questionnaire / results shell uses “skincare.com”. */
function useSkinExperienceBranding() {
  return vtoSkinBrandExperienceActive;
}

function syncVtoExperienceBrandUi() {
  const skin = useSkinExperienceBranding();
  const name = skin ? VTO_EXPERIENCE_BRAND_SKIN : VTO_EXPERIENCE_BRAND_MAKEUP;
  const aria = skin ? VTO_EXPERIENCE_ARIA_SKIN : VTO_EXPERIENCE_ARIA_MAKEUP;
  document.querySelectorAll(".vto-mode__brand-name, .vto-terms__brand-name").forEach((node) => {
    node.textContent = name;
  });
  document.querySelectorAll('.vto-mode__brand[role="img"]').forEach((node) => {
    node.setAttribute("aria-label", aria);
  });
}

/** Step index within {@link SKIN_DIAG_QUIZ_STEPS} (pre-scan questionnaire). */
let skinDiagQuizStep = 0;

/** @type {number | null} */
let skinDiagQuizAdvanceTimer = null;

let skinDiagQuizAdvanceGen = 0;

let skinDiagQuizAnimating = false;

let skinDiagQuizAnimGen = 0;

let skinDiagRankSuppressClick = false;

/**
 * Answers collected on the pre-scan skin-diagnosis questionnaire (prototype).
 * @type {{
 *   routine: string | null,
 *   priorities: string[],
 *   skinFeel: string | null,
 *   reactivity: string | null,
 *   location: string | null,
 *   locationSkipped: boolean,
 *   climateSeen: boolean,
 *   age: number | null,
 * }}
 */
let skinDiagQuizAnswers = emptySkinDiagQuizAnswers();

/** Snapshot kept after the questionnaire so overlay close cannot drop selected priorities. */
let skinDiagCompletedQuizAnswers = /** @type {ReturnType<typeof emptySkinDiagQuizAnswers> | null} */ (null);

function emptySkinDiagQuizAnswers() {
  return {
    routine: null,
    priorities: /** @type {string[]} */ ([]),
    skinFeel: null,
    reactivity: null,
    location: null,
    locationSkipped: false,
    climateSeen: false,
    age: null,
  };
}

/** @typedef {{ key: string, title: string, subtitle?: string, helpLabel?: string, type: 'single'|'rank'|'location'|'climate'|'age', options?: { value: string, label: string }[], last?: boolean }} SkinDiagQuizStepDef */

const SKIN_DIAG_PRIORITY_MAX = 5;

const SKIN_DIAG_CITY_SUGGESTIONS = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Miami, FL",
  "San Francisco, CA",
  "Houston, TX",
  "London, UK",
  "Paris, France",
];

/** @type {SkinDiagQuizStepDef[]} */
const SKIN_DIAG_QUIZ_STEPS = [
  {
    key: "routine",
    title: "What would your ideal skincare routine look like?",
    type: "single",
    options: [
      { value: "essentials", label: "The essentials, quick and effective" },
      { value: "complete", label: "A complete and effective routine" },
      { value: "full", label: "The full program" },
    ],
  },
  {
    key: "priorities",
    title: "What are your main priorities?",
    subtitle: "You can select and rank up to 5 priorities",
    type: "rank",
    options: [
      { value: "wrinkles", label: "Wrinkles" },
      { value: "fine-lines", label: "Fine lines" },
      { value: "firmness", label: "Skin Firmness" },
      { value: "radiance", label: "Skin Radiance" },
      { value: "pigmentation", label: "Dark Pigmentation" },
      { value: "texture", label: "Skin Texture" },
      { value: "pores", label: "Visible pores" },
    ],
  },
  {
    key: "skinFeel",
    title: "How does your skin feel at the end of the day?",
    helpLabel: "Derm advice",
    type: "single",
    options: [
      { value: "balanced", label: "Balanced, it feels comfortable" },
      { value: "dry", label: "Dry, it feels tight" },
      { value: "oily", label: "Oily, it gets shiny" },
      { value: "combination", label: "Combination, it's a mix" },
      { value: "unknown", label: "I don't know" },
    ],
  },
  {
    key: "reactivity",
    title: "Does your skin tend to react or feel uncomfortable?",
    type: "single",
    options: [
      { value: "major", label: "Yes, it's a major concern for me" },
      { value: "sometimes", label: "Sometimes, depending on products I use" },
      { value: "rarely", label: "No, rarely or never" },
    ],
  },
  {
    key: "location",
    title: "Where do you currently live?",
    subtitle:
      "Thanks to your location we can detect environmental factors that can impact your skin in many ways.",
    type: "location",
  },
  {
    key: "age",
    title: "What is your age?",
    type: "age",
    last: true,
  },
];

/**
 * The seven concerns Skin Diag scores against. Icons are the Figma set.
 * A product only lists one of these in `concerns` when its own directions say so.
 */
const SKIN_DIAG_CONCERNS = [
  { id: "firmness", label: "Skin Firmness", icon: "assets/concerns/firmness.svg" },
  { id: "radiance", label: "Skin Radiance", icon: "assets/concerns/radiance.svg" },
  { id: "pores", label: "Visible pores", icon: "assets/concerns/pores.svg" },
  { id: "wrinkles", label: "Wrinkles", icon: "assets/concerns/wrinkles.svg" },
  { id: "fine-lines", label: "Fine lines", icon: "assets/concerns/fine-lines.svg" },
  { id: "pigmentation", label: "Dark Pigmentation", icon: "assets/concerns/pigmentation.svg" },
  { id: "texture", label: "Skin Texture", icon: "assets/concerns/texture.svg" },
];

function skinDiagConcernById(id) {
  return SKIN_DIAG_CONCERNS.find((concern) => concern.id === id) || null;
}

function skinDiagActiveQuizAnswers() {
  return skinDiagCompletedQuizAnswers || skinDiagQuizAnswers;
}

function skinDiagSelectedPriorities() {
  return (skinDiagActiveQuizAnswers().priorities || []).filter((id) => skinDiagConcernById(id));
}

/** Quiz ranks win. With none logged, the scan's priority (dark pigmentation) is what the routine is built around. */
function skinDiagScoringPriorities() {
  const picked = skinDiagSelectedPriorities();
  return picked.length ? picked : ["pigmentation"];
}

/** Higher score = more of a concern. Over 80 is Priority, under 50 is Great, anything else is Okay. */
function skinDiagScoreStatus(score) {
  if (score > 80) return { status: "priority", statusLabel: "Priority" };
  if (score < 50) return { status: "great", statusLabel: "Great" };
  return { status: "okay", statusLabel: "Okay" };
}

const SKIN_DIAG_MOCK_SCORE_LADDER = [88, 74, 66, 54, 47, 36, 22];
const SKIN_DIAG_DEFAULT_SCORE_ORDER = [
  "pigmentation",
  "pores",
  "texture",
  "fine-lines",
  "firmness",
  "radiance",
  "wrinkles",
];

const SKIN_DIAG_CONCERN_COPY = {
  pigmentation: {
    prevalence: 41,
    cause: "sun exposure, leftover marks, and melanin showing up more on the cheeks and around the mouth.",
    tip: "Daily SPF and a dark-spot serum with niacinamide can fade the look of spots over time.",
  },
  pores: {
    prevalence: 36,
    cause: "oil, buildup, and loss of firmness around the follicle making pores look more open on the nose and cheeks.",
    tip: "A gentle salicylic cleanser and a lightweight moisturizer keep pores looking tighter without stripping.",
  },
  texture: {
    prevalence: 29,
    cause: "uneven cell turnover and dry patches catching the light, especially on the forehead and chin.",
    tip: "A mild exfoliating serum a few nights a week smooths the surface so makeup and light sit more evenly.",
  },
  "fine-lines": {
    prevalence: 33,
    cause: "expression movement and dehydration, most visible between the brows and at the corners of the eyes.",
    tip: "Hydration plus a peptide or retinoid-style treatment (when your skin tolerates it) helps lines look softer.",
  },
  firmness: {
    prevalence: 27,
    cause: "a natural drop in bounce along the jaw and cheeks as collagen support thins with UV and time.",
    tip: "A firming moisturizer with peptides, plus SPF, supports the look of lift in the areas that feel slack.",
  },
  radiance: {
    prevalence: 38,
    cause: "dull buildup and UV, so the center of the face doesn't catch light as easily as it used to.",
    tip: "A vitamin C serum in the morning and consistent SPF help skin look brighter without a harsh peel.",
  },
  wrinkles: {
    prevalence: 24,
    cause: "deeper expression folds, usually around the mouth and eyes, that show up more in dry indoor air.",
    tip: "Keep the barrier comfortable with a richer cream at night and don't skip SPF on wrinkle-prone zones.",
  },
};

/**
 * Mock scan scores for all seven concerns. Selected quiz priorities stay first
 * so at least one user-picked concern is always the top result.
 * Shortcut / skipped priorities keep pigmentation, pores, then texture.
 * @returns {{ id: string, label: string, icon: string, score: number, status: string, statusLabel: string }[]}
 */
function skinDiagConcernScores() {
  const seen = new Set();
  const order = [];
  for (const id of skinDiagSelectedPriorities()) {
    if (!seen.has(id)) {
      order.push(id);
      seen.add(id);
    }
  }
  for (const id of SKIN_DIAG_DEFAULT_SCORE_ORDER) {
    if (!seen.has(id)) {
      order.push(id);
      seen.add(id);
    }
  }
  for (const concern of SKIN_DIAG_CONCERNS) {
    if (!seen.has(concern.id)) order.push(concern.id);
  }
  return order.map((id, index) => {
    const concern = skinDiagConcernById(id);
    const score = SKIN_DIAG_MOCK_SCORE_LADDER[index] ?? 40;
    const band = skinDiagScoreStatus(score);
    return {
      id,
      label: concern?.label || String(id).replace(/-/g, " "),
      icon: concern?.icon || "",
      score,
      status: band.status,
      statusLabel: band.statusLabel,
    };
  });
}

/** @param {{ id: string, label: string, icon: string, score: number, status: string, statusLabel: string }} row */
function skinDiagEnsurePriorityFinding(row) {
  if (row.status === "priority") return row;
  const score = Math.max(row.score, SKIN_DIAG_MOCK_SCORE_LADDER[0] ?? 88);
  const band = skinDiagScoreStatus(score);
  return { ...row, score, status: band.status, statusLabel: band.statusLabel };
}

/** Top 3 scored concerns for the Your skin card and the analysis accordion. */
function skinDiagResultFindings() {
  const scores = skinDiagConcernScores();
  const picked = skinDiagSelectedPriorities();
  if (!picked.length) return scores.slice(0, 3);
  const pin = scores.find((row) => row.id === picked[0]) || scores.find((row) => picked.includes(row.id));
  if (!pin) return scores.slice(0, 3);
  const rest = scores.filter((row) => row.id !== pin.id);
  return [skinDiagEnsurePriorityFinding(pin), ...rest].slice(0, 3);
}

function skinDiagMeasurementFindings() {
  return skinDiagConcernScores().slice(3);
}

function skinDiagConcernLabel(id) {
  return skinDiagConcernById(id)?.label || String(id || "").replace(/-/g, " ");
}

/**
 * Fake skin-concern hotspots (normalized 0–1 on the portrait; x=left…right, y=top…bottom).
 * Assumes a centered frontal face like the selfie oval. Card thumbnails use `marker` + `zoom`.
 * @type {readonly { id: string, title: string, severity: string, score: number, scoreMax: number, blurb: string, marker: { x: number, y: number }, zoom: { x: number, y: number, scale: number } }[]}
 */
const SKIN_DIAG_FAKE_CONCERNS = [
  {
    id: "large-pores",
    title: "Large Pores",
    severity: "Mild",
    score: 14,
    scoreMax: 40,
    blurb: "Often most visible on oil-prone areas of the cheeks. Gentle exfoliation and daily SPF can help pores look smoother over time.",
    marker: { x: 0.34, y: 0.49 },
    zoom: { x: 0.34, y: 0.48, scale: 2.12 },
  },
  {
    id: "radiance",
    title: "Lack of Radiance",
    severity: "Mild",
    score: 16,
    scoreMax: 40,
    blurb: "The center forehead catches light first—dullness here is usually UV, dehydration, or buildup. Antioxidants and consistent SPF help.",
    marker: { x: 0.5, y: 0.24 },
    zoom: { x: 0.5, y: 0.24, scale: 2.05 },
  },
  {
    id: "blotchiness",
    title: "Blotchiness",
    severity: "Moderate",
    score: 20,
    scoreMax: 40,
    blurb: "Cheek tone can look uneven from heat, irritation, or past sun. Calming, fragrance-free care supports a more even look gradually.",
    marker: { x: 0.66, y: 0.49 },
    zoom: { x: 0.66, y: 0.49, scale: 2.12 },
  },
  {
    id: "fine-lines",
    title: "Fine Lines",
    severity: "Mild",
    score: 12,
    scoreMax: 40,
    blurb: "Between the brows is a classic expression zone. Hydration and retinoid-style actives (when your skin tolerates them) are common supports.",
    marker: { x: 0.5, y: 0.36 },
    zoom: { x: 0.5, y: 0.36, scale: 2.18 },
  },
];

/**
 * Quiz “ideal routine” → step count.
 * Essentials = 3 (cleanse, treat, moisturize).
 * Complete = 4 (adds toner after cleanse).
 * Full = 5 (adds toner + SPF last).
 * @returns {3|4|5}
 */
function skinDiagRoutineSize() {
  const r = skinDiagActiveQuizAnswers().routine;
  if (r === "full") return 5;
  if (r === "complete") return 4;
  return 3;
}

/** Merge a catalog row with the La Roche-Posay plugin record when `source` is `lrp`. */
function resolveSkincareProduct(entry) {
  if (!entry || typeof entry !== "object") return null;
  if (entry.source === "lrp") {
    const base = LRP_CATALOG[entry.id];
    if (!base) return null;
    return {
      ...entry,
      brandId: "la-roche-posay",
      title: base.title,
      kind: base.kind || "",
      tags: base.tags || [],
      image: base.image,
      volume: base.volume,
      priceNow: base.priceNow,
      priceWas: base.priceWas,
      shopUrl: base.shopUrl,
      description: base.description,
    };
  }
  return { ...entry, tags: entry.tags || [] };
}

/**
 * Ordered routine for the current quiz, pulled from {@link SKINCARE_DB}.
 * Layering: cleanse → tone → treat → moisturize → SPF.
 * Each step keeps two brands side by side. Only one high-price brand
 * (Lancôme, Biotherm, or Kiehl's) is allowed in the whole routine.
 */
function getSkinDiagRoutineSteps() {
  const products = SKINCARE_DB.products.map(resolveSkincareProduct).filter(Boolean);
  const answers = skinDiagActiveQuizAnswers();
  return recommendSkincareRoutine(products, {
    ...answers,
    priorities: skinDiagScoringPriorities(),
  });
}

function skinDiagQuizProfile() {
  const answers = skinDiagActiveQuizAnswers();
  return {
    skinFeel: answers.skinFeel,
    reactivity: answers.reactivity,
    priorities: skinDiagScoringPriorities(),
    age: answers.age,
  };
}

function skinDiagStepCohortScores(stepId) {
  const profile = skinDiagQuizProfile();
  return SKINCARE_DB.products
    .map(resolveSkincareProduct)
    .filter((p) => p && p.step === stepId)
    .map((p) => scoreSkincareProduct(p, profile));
}

function skinDiagMatchFromScore(score, cohortScores) {
  const n = Number(score);
  if (!Number.isFinite(n)) return 58;
  const cohort = Array.isArray(cohortScores)
    ? cohortScores.filter((value) => Number.isFinite(value))
    : [];
  if (cohort.length > 1) {
    const below = cohort.filter((value) => value < n).length;
    const t = below / (cohort.length - 1);
    if (t >= 0.62) return Math.round(70 + ((t - 0.62) / 0.38) * 26);
    return Math.round(48 + (t / 0.62) * 21);
  }
  return Math.max(46, Math.min(96, Math.round(-10 + n * 0.9)));
}

/** Other formulas for a routine step, excluding the current pick. */
function skinDiagAlternativeProductsForStep(step, excludeId) {
  const exclude = new Set();
  if (excludeId) exclude.add(excludeId);
  const best = step && step.picks && step.picks[0];
  if (best) exclude.add(best.id);
  const profile = skinDiagQuizProfile();
  const scored = SKINCARE_DB.products
    .map(resolveSkincareProduct)
    .filter((p) => p && p.step === step.id)
    .map((p) => ({ product: p, score: scoreSkincareProduct(p, profile) }));
  const cohortScores = scored.map((row) => row.score);
  return scored
    .filter((row) => !exclude.has(row.product.id))
    .sort((a, b) => b.score - a.score || a.product.title.localeCompare(b.product.title))
    .slice(0, 3)
    .map((row) => ({ ...row.product, match: skinDiagMatchFromScore(row.score, cohortScores) }));
}

/** @param {string} text */
function findSkinDiagNamedProduct(text) {
  const lower = text.toLowerCase();
  const catalog = SKINCARE_DB.products.map(resolveSkincareProduct).filter(Boolean);
  let best = null;
  let bestLen = 0;
  for (const p of catalog) {
    const title = (p.title || "").toLowerCase();
    if (title && lower.includes(title) && title.length > bestLen) {
      best = p;
      bestLen = title.length;
    }
  }
  return best;
}

/** @param {string} text */
function parseSkinDiagAlternativesIntent(text) {
  if (!/\balternat(?:e|ives?|ive products?)\b|\bother (?:products?|options)\b/i.test(text)) return null;
  const steps = getSkinDiagRoutineSteps();
  if (!steps.length) return null;
  const named = findSkinDiagNamedProduct(text);
  if (named) {
    const step =
      steps.find((s) => s.id === named.step) ||
      steps.find((s) => (s.picks || []).some((p) => p.id === named.id)) ||
      steps[0];
    return { step, product: named };
  }
  const lower = text.toLowerCase();
  const step = steps.find((s) => lower.includes(s.step.toLowerCase()) || lower.includes(s.id)) || steps[0];
  return { step, product: (step.picks || [])[0] || null };
}

function skinDiagRoutineLineupText(steps) {
  const names = steps.map((s) => s.step.toLowerCase());
  if (names.length <= 1) return names[0] || "";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function skinDiagRoutineLineupHtml(steps) {
  const names = steps.map((s) => s.step.toLowerCase());
  if (!names.length) return "";
  if (names.length === 1) return `<strong>${names[0]}</strong>`;
  if (names.length === 2) return `<strong>${names[0]}</strong> and <strong>${names[1]}</strong>`;
  const head = names.slice(0, -1).map((n) => `<strong>${n}</strong>`).join(", ");
  return `${head}, and <strong>${names[names.length - 1]}</strong>`;
}

function cloneSkinDiagQuizAnswers(src) {
  if (!src || typeof src !== "object") return emptySkinDiagQuizAnswers();
  return {
    routine: typeof src.routine === "string" ? src.routine : null,
    priorities: Array.isArray(src.priorities) ? [...src.priorities] : [],
    skinFeel: typeof src.skinFeel === "string" ? src.skinFeel : null,
    reactivity: typeof src.reactivity === "string" ? src.reactivity : null,
    location: typeof src.location === "string" ? src.location : null,
    locationSkipped: Boolean(src.locationSkipped),
    climateSeen: Boolean(src.climateSeen),
    age: typeof src.age === "number" ? src.age : null,
  };
}

/**
 * Prototype skincare routine dataset for Skin Diag follow-up.
 * Day/night: shared CeraVe cleanser; Lancôme Génifique (AM) vs CeraVe retinol (PM); Biotherm moisturizer both;
 * La Roche-Posay Anthelios SPF last in AM (night panel mirrors packshot for toggle parity).
 * Each pick includes copy for the shared product detail sheet + “Unpack my match” bullets.
 */
const SKIN_ROUTINE_STEPS = [
  {
    step: "Cleanse",
    day: {
      brand: "CeraVe",
      title: "Hydrating Cream-to-Foam Cleanser",
      match: 88,
      tags: ["Hydrating", "Barrier support"],
      price: "~$18",
      image: "assets/skin-routine-cerave-cleanser.png",
      description:
        "A cream-to-foam cleanser that melts away sunscreen and daily buildup without leaving skin feeling tight. Three essential ceramides plus hyaluronic acid support a comfortable, barrier-respecting cleanse.",
      ingredients:
        "Aqua, Glycerin, Sodium Methyl Cocoyl Taurate, Coco-Betaine, Sodium Cocoyl Isethionate, Sodium Chloride, PCA, PEG-150 Pentaerythrityl Tetrastearate, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phenoxyethanol, Citric Acid.",
      unpackBullets: [
        "Low-irritancy surfactants line up with your sensitivity signals.",
        "Barrier-focused ingredients pair with uneven tone and visible-pore goals.",
        "Leaves a flexible canvas for treatment steps—no heavy residue.",
      ],
    },
    night: {
      brand: "CeraVe",
      title: "Hydrating Cream-to-Foam Cleanser",
      match: 88,
      tags: ["Gentle", "Removes makeup"],
      price: "~$18",
      image: "assets/skin-routine-cerave-cleanser.png",
      description:
        "A cream-to-foam cleanser that melts away sunscreen and daily buildup without leaving skin feeling tight. Three essential ceramides plus hyaluronic acid support a comfortable, barrier-respecting cleanse.",
      ingredients:
        "Aqua, Glycerin, Sodium Methyl Cocoyl Taurate, Coco-Betaine, Sodium Cocoyl Isethionate, Sodium Chloride, PCA, PEG-150 Pentaerythrityl Tetrastearate, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phenoxyethanol, Citric Acid.",
      unpackBullets: [
        "Same gentle base for AM/PM so actives are not fighting different cleansers.",
        "Removes SPF and light makeup before retinol without over-stripping.",
        "Ceramide support helps offset dryness from PM treatment steps.",
      ],
    },
  },
  {
    step: "Treat",
    day: {
      brand: "Lancôme",
      title: "Génifique Ultimate",
      match: 91,
      tags: ["Serum", "AM-friendly"],
      price: "~$135",
      image: "assets/skin-routine-lancome-genifique.png",
      description:
        "A fast-absorbing serum designed to support radiance and a smoother-looking complexion. Lightweight enough for morning under moisturizer and SPF.",
      ingredients:
        "Aqua, Bifida Ferment Lysate, Glycerin, Dimethicone, Hydroxyethylcellulose, Sodium Hyaluronate, Adenosine, Tocopherol, Ascorbyl Glucoside, Phenoxyethanol, Parfum (Fragrance).",
      unpackBullets: [
        "Targets dullness and uneven tone—two of your higher-weighted concerns.",
        "AM-safe profile avoids stacking strong acids before sunscreen.",
        "Hydration-forward base plays well with gel moisturizer in the next step.",
      ],
    },
    night: {
      brand: "CeraVe",
      title: "Resurfacing Retinol Serum",
      match: 87,
      tags: ["PM retinol", "Ceramides"],
      price: "~$22",
      image: "assets/skin-routine-cerave-retinol.png",
      description:
        "A retinol serum with ceramides and licorice root extract to support skin while refining texture over time. Intended for evening use after cleansing.",
      ingredients:
        "Aqua, Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Retinol, Ceramide NP, Ceramide AP, Ceramide EOP, Dipotassium Glycyrrhizate, Sodium Hyaluronate, Dimethicone, Phenoxyethanol.",
      unpackBullets: [
        "PM placement keeps retinol away from daytime SPF and sweat friction.",
        "Ceramide buffer fits a profile that still needs barrier reassurance.",
        "Texture support complements fine-line and radiance goals without AM conflict.",
      ],
    },
  },
  {
    step: "Moisturize",
    day: {
      brand: "Biotherm",
      title: "Aquasource Hyalu Plump Gel",
      match: 85,
      tags: ["Plumping", "Gel texture"],
      price: "~$52",
      image: "assets/skin-routine-biotherm-aquasource.png",
      description:
        "A cooling gel-cream moisturizer with hyaluronic acid for a plumped, fresh feel. Layers cleanly under sunscreen without pilling.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Sodium Hyaluronate, Mannose, Panthenol, Ammonium Polyacryloyldimethyl Taurate, Phenoxyethanol, Parfum (Fragrance).",
      unpackBullets: [
        "Gel texture reads lighter on oil-prone zones where pores look more noticeable.",
        "Hyaluronic acid supports hydration after exfoliating or retinol nights.",
        "Finishes with a skin-like sheen that pairs with fluid SPF.",
      ],
    },
    night: {
      brand: "Biotherm",
      title: "Aquasource Hyalu Plump Gel",
      match: 85,
      tags: ["Hydration", "Comfort"],
      price: "~$52",
      image: "assets/skin-routine-biotherm-aquasource.png",
      description:
        "A cooling gel-cream moisturizer with hyaluronic acid for a plumped, fresh feel. Layers cleanly under sunscreen without pilling.",
      ingredients:
        "Aqua, Glycerin, Dimethicone, Sodium Hyaluronate, Mannose, Panthenol, Ammonium Polyacryloyldimethyl Taurate, Phenoxyethanol, Parfum (Fragrance).",
      unpackBullets: [
        "Locks in water after retinol without a heavy occlusive feel.",
        "Comfort-first finish supports redness-prone or sensitized days.",
        "Consistent moisturizer choice keeps barrier signals steady across the week.",
      ],
    },
  },
  {
    step: "SPF",
    day: {
      brand: "La Roche-Posay",
      title: "Anthelios Ultra Fluid SPF 50+",
      match: 90,
      tags: ["UVA/UVB", "Invisible finish"],
      price: "~$38",
      image: "assets/skin-routine-lrp-anthelios.png",
      description:
        "A high-protection fluid sunscreen with a lightweight, fast-drying finish. Designed for daily face wear under makeup or on bare skin.",
      ingredients:
        "Aqua, Alcohol Denat., Diisopropyl Sebacate, Silica, Ethylhexyl Salicylate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Ethylhexyl Triazone, Tocopherol, Phenoxyethanol.",
      unpackBullets: [
        "Strong UV coverage supports blotchiness and tone-evenness goals long term.",
        "Fluid texture reduces skip days—especially important when pores read more with oil.",
        "Finishing step seals in treatment without adding chalky cast.",
      ],
    },
    night: {
      brand: "La Roche-Posay",
      title: "Anthelios Ultra Fluid SPF 50+",
      match: 90,
      tags: ["UVA/UVB", "Face"],
      price: "~$38",
      image: "assets/skin-routine-lrp-anthelios.png",
      description:
        "A high-protection fluid sunscreen with a lightweight, fast-drying finish. Designed for daily face wear under makeup or on bare skin.",
      ingredients:
        "Aqua, Alcohol Denat., Diisopropyl Sebacate, Silica, Ethylhexyl Salicylate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Ethylhexyl Triazone, Tocopherol, Phenoxyethanol.",
      unpackBullets: [
        "Shown here for parity with the day carousel; your PM routine can skip SPF after cleansing.",
        "Same photostable filters if you want a single SPF SKU on your shelf.",
        "If you prefer a night-only card, swap this slot mentally for recovery balm.",
      ],
    },
  },
];

/** Pending skin-diag post-quiz timeouts (loading steps + handoff to results). */
const skinDiagPostQuizTimers = /** @type {number[]} */ ([]);

/** @type {string | null} */
let skinDiagResultsSelectedId = null;

/** Photo URL for the last skin diagnosis results (mini peek in chat). */
let skinDiagResultsPeekUrl = /** @type {string | null} */ (null);

/** Bumped to cancel in-flight assistant “generation” (typing + follow-up). */
let chatGenerationEpoch = 0;
let skinRoutineFallbackImageUrl = /** @type {string | null} */ (null);

function bumpChatGeneration() {
  chatGenerationEpoch += 1;
  removeTyping();
  flow = "idle";
  chatAwaitingBudgetTierReply = false;
  chatAwaitingTryOnConfirm = false;
  chatAwaitingSkinDiagConfirm = false;
  chatAwaitingSkinRoutineChoice = false;
  chatSkinRoutineConcernId = null;
  refreshComposerActionState();
}

/** @type {string | null} */
let vtoSelfiePreviewUrl = null;

/** Blob URL kept after a successful selfie try-on so chat can reopen without taking another photo. */
let sessionPersistedSelfieUrl = /** @type {string | null} */ (null);

/** True after the user accepts the shared terms sheet on a Makeup Try-On entry (session-wide skip for that flow). */
let vtoUserAcceptedTerms = false;

/** True after the user accepts the terms sheet during Skin Diagnosis (independent of {@link vtoUserAcceptedTerms}). */
let skinDiagUserAcceptedTerms = false;

/** True after the pre-scan questionnaire is finished or skipped through to the face-scan landing. */
let skinDiagPreScanQuizDone = false;

/** Try-on opened from chat “named product” path: single shade + selfie-backed mini card. */
let tryOnFromChatSingleProduct = false;

/** Selected composer app from plus menu (null means none). */
let composerSelectedApp = /** @type {null|'vto'|'skin_diag'} */ (null);
let composerAppMenuCloseTimer = /** @type {number | null} */ (null);

/** @type {MediaStream | null} */
let vtoCameraStream = null;

/** @type {number[]} */
const vtoCaptureTimers = [];

/** MediaPipe FaceLandmarker instance (lazy) */
let tryOnFaceLandmarker = null;

/** @type {Array<{ x: number; y: number; z?: number }> | null} */
let tryOnCachedLandmarks = null;

/** @type {{ hex: string; label: string }[]} */
let tryOnShadeList = [];

/** @type {number} */
let tryOnShadeIndex = 0;

/** Matches {@link vtoSelectedProductKey} when try-on shade chips were built (for “Where to buy” shade parity). */
let tryOnShadeContextKey = /** @type {string | null} */ (null);

/** When true, try-on uses the provided reference model image. */
let tryOnUseReferenceModel = false;

/** Lip try-on with fixed shade carousel: before = original stock photo, after = per-shade stock photo (not canvas lip paint). */
let tryOnUsesStockShadePhotos = false;

/** @type {ResizeObserver | null} */
let tryOnResizeObserver = null;

/** @type {AbortController | null} */
let tryOnSliderAborter = null;

/** Outer lip loop — MediaPipe Face Mesh topology (indices 0–467) */
const TRYON_OUTER_MOUTH_IDX = [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84, 181, 91, 146];

/** Alternate compare images for VTO before/after toggle. */
const TRYON_REFERENCE_BEFORE_IMAGE = "assets/vto-model-original.png";
const TRYON_REFERENCE_DEFAULT_AFTER_IMAGE = "assets/vto-model-shade-1.png";
/** Stock portraits: `vto-model-original.png` + `vto-model-shade-1.png`…`7.png` are all 809×1024. */
const TRYON_REFERENCE_SHADE_SWATCHES = [
  { hex: "#BA717C", label: "Shade 1", image: "assets/vto-model-shade-1.png" },
  { hex: "#DF868D", label: "Shade 2", image: "assets/vto-model-shade-2.png" },
  { hex: "#AF736E", label: "Shade 3", image: "assets/vto-model-shade-3.png" },
  { hex: "#AD6085", label: "Shade 4", image: "assets/vto-model-shade-4.png" },
  { hex: "#DA8E80", label: "Shade 5", image: "assets/vto-model-shade-5.png" },
  { hex: "#FC88C1", label: "Shade 6", image: "assets/vto-model-shade-6.png" },
  { hex: "#9B4A71", label: "Shade 7", image: "assets/vto-model-shade-7.png" },
];

/** Sample face used when the user types the “VTO” chat shortcut (same asset as reference model). */
const VTO_CHAT_SHORTCUT_SELFIE = "assets/tryon-reference-model.png";

/** Demo face for the Skin Diag “shortcut” jump-to-results command. */
const SKIN_DIAG_CHAT_SHORTCUT_SELFIE = "assets/tryon-reference-model.png";

/** When true, leftover typing/stream ticks must not jump the thread to the latest message. */
let chatPreserveThreadScroll = false;

function scrollMainToBottom() {
  if (chatPreserveThreadScroll) return;
  const sc = el.mainScroll;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (chatPreserveThreadScroll) return;
      sc.scrollTop = sc.scrollHeight;
      const last = sc.querySelector("#chatView .msg:last-of-type");
      if (last instanceof HTMLElement) {
        last.scrollIntoView({ block: "end", behavior: "auto" });
      }
    });
  });
}

/** Keep the last existing turn on screen so a new assistant message reads as a continuation. */
function scrollThreadForNextTurn() {
  const sc = el.mainScroll;
  if (!sc) return;
  const msgs = [...el.chatView.querySelectorAll(".msg")].filter((m) => m.getAttribute("data-role") !== "typing");
  const last = msgs[msgs.length - 1];
  if (!(last instanceof HTMLElement)) return;
  pinThreadToMessage(last, 8);
}

/**
 * Scroll so `msg` sits `offset` px below the top of the chat scroller.
 * @param {HTMLElement} msg
 * @param {number} [offset]
 * @param {ScrollBehavior} [behavior]
 */
function pinThreadToMessage(msg, offset = 8, behavior = "auto") {
  const sc = el.mainScroll;
  if (!sc || !(msg instanceof HTMLElement)) return;
  const top = msg.getBoundingClientRect().top - sc.getBoundingClientRect().top + sc.scrollTop;
  const next = Math.max(0, top - offset);
  const smooth = behavior === "smooth" && !prefersReducedMotion();
  if (smooth) sc.scrollTo({ top: next, behavior: "smooth" });
  else sc.scrollTop = next;
}

function isProductMessage(text, promptMeta) {
  if (promptMeta?.productIntent) return true;
  return PRODUCT_KEYWORDS.test(text);
}

function isSkinAnalyzeIntent(text, promptMeta) {
  if (promptMeta?.skinAnalyzeIntent) return true;
  const n = normalizeUserReply(text);
  if (!n) return false;
  if (n === "analyze my skin") return true;
  return (
    /\b(analyze|analysis|scan|diagnos|assess|evaluate|check)\b.*\bskin\b/i.test(n) || /\bskin\b.*\b(analyze|analysis|scan|diagnos|assess)\b/i.test(n)
  );
}

function isSkinRoutineAsk(text) {
  const n = normalizeUserReply(text);
  if (!n) return false;
  if (/\b(skin[- ]?care)\s+routine\b/.test(n)) return true;
  if (/\b(am|pm|morning|night|day|evening|daily)\s+routine\b/.test(n)) return true;
  if (/\broutine\s+for\b/.test(n)) return true;
  if (/\b(a|my|the|full|simple|basic|beginner|custom|personalised|personalized)\s+routine\b/.test(n)) return true;
  if (/\b(want|need|build|make|create|give|get|start|recommend|suggest|looking for|help me (?:build|make|create))\b.{0,40}\broutine\b/.test(n))
    return true;
  if (/\b(what(?:'s| is)|how do i|can you|could you)\b.{0,24}\broutine\b/.test(n)) return true;
  return false;
}

function isSkinConcernHelpAsk(text) {
  const n = normalizeUserReply(text);
  if (!n) return false;
  if (/\bhow can i help\b/.test(n)) return true;
  if (/\b(help|treat|improve|fix|calm|reduce|fade|manage|address|target|deal with)\b.{0,40}\b(concerns?|acne|breakouts?|blemishes?|redness|rosacea|dryness|dehydrat|sensitive|oil(?:y|iness)|pores?|wrinkles?|fine lines?|dark spots?|pigment|dullness|eczema|aging|texture|hyperpigment|irritat|sting)\b/.test(n))
    return true;
  if (/\b(what (?:can|should|do) i (?:do|use)|how (?:can|do|should) i)\b.{0,40}\b(skin|acne|redness|dry|dehydrat|concerns?|pores?|wrinkles?|spots?)\b/.test(n))
    return true;
  if (/\bhelp with\b/.test(n) && (/\bskin\b/.test(n) || detectSkinDiagConcernLabels(text).length > 0)) return true;
  if (/\b(my|with)\s+(skin\s+)?concerns?\b/.test(n)) return true;
  return false;
}

/** @param {string} text */
function detectSkinDiagConcernLabels(text) {
  const labels = detectLrpConcerns(text).map((id) => LRP_CONCERN_LABELS[id]);
  /** @type {[string, RegExp][]} */
  const extras = [
    ["pores", /\b(enlarged\s+)?pores?\b/i],
    ["texture", /\b(rough\s+)?texture\b/i],
    ["dark circles", /\bdark\s+circles?\b/i],
    ["sun damage", /\bsun\s*damage\b/i],
    ["hyperpigmentation", /\bhyperpigment/i],
    ["stinging from SPF", /\b(spf|sunscreen).{0,24}\bsting|\bsting.{0,24}\b(spf|sunscreen)/i],
  ];
  for (const [label, re] of extras) {
    if (re.test(text) && !labels.includes(label)) labels.push(label);
  }
  return labels;
}

function formatConcernList(labels) {
  if (!labels.length) return "";
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

function isSkinProductAsk(text) {
  if (!text) return false;
  if (detectNamedMatchBrand(text)) return true;
  if (detectLrpProductType(text)) return true;
  if (isLrpProductAsk(text)) return true;
  return (
    /\b(find me|recommend|suggest|looking for|need a|what should i (?:use|buy|get)|show me|best)\b/i.test(text) &&
    /\b(product|cream|lotion|treatment|formula|moisturi|cleanser|serum|spf|sunscreen)\b/i.test(text)
  );
}

function skinDiagProductAskLabel(text) {
  const typeId = detectLrpProductType(text);
  /** @type {Record<string, string>} */
  const labels = {
    moisturizer: "moisturizer",
    cleanser: "cleanser",
    serum: "serum",
    spf: "SPF",
    eye: "eye cream",
    acne: "acne treatment",
    body: "body care",
    mist: "toner or mist",
    redness: "redness treatment",
  };
  if (typeId && labels[typeId]) return labels[typeId];
  if (isSkinProductAsk(text)) return "product";
  return null;
}

function shouldOfferSkinDiagnostic(text, promptMeta) {
  if (promptMeta?.skinAnalyzeIntent || promptMeta?.skincareIntent) return true;
  if (isSkinAnalyzeIntent(text, promptMeta)) return true;
  if (isSkinRoutineAsk(text)) return true;
  if (isSkinConcernHelpAsk(text)) return true;
  if (isSkinProductAsk(text)) return true;
  return false;
}

/**
 * @param {string} text
 * @returns {{ lead: string, follow: string }}
 */
function skinDiagOfferCopy(text) {
  const labels = detectSkinDiagConcernLabels(text);
  const listed = formatConcernList(labels);
  const routine = isSkinRoutineAsk(text);
  const analyze = isSkinAnalyzeIntent(text);
  const productLabel = skinDiagProductAskLabel(text);
  const namedBrand = detectNamedMatchBrand(text);
  let lead;
  if (labels.includes("stinging from SPF")) {
    lead = `If SPF stings, that's often a sensitivity or barrier thing rather than just picking a lighter texture. A short scan helps us see whether sting is the main issue or part of a broader irritation pattern.`;
  } else if (listed && routine) {
    lead = `A routine for ${listed} works better once we know what else is going on — those concerns can look similar on the surface and still need different steps.`;
  } else if (labels.length > 1) {
    lead = `${listed.charAt(0).toUpperCase()}${listed.slice(1)} can pull a routine in different directions, so it helps to see what your skin is actually showing before we lock anything in.`;
  } else if (listed) {
    lead = `For ${listed}, a lot of people jump straight to a product. A short analysis is usually more useful first, so we're not treating the wrong cause.`;
  } else if (routine) {
    lead = `If you want a routine that actually fits, the useful first step is seeing what your skin is doing right now — not a generic 10-step list.`;
  } else if (productLabel) {
    lead = `I can help you find a ${productLabel} — I just don't start from a product list in this chat. A short analysis first means the pick is based on what your skin is actually showing, not a generic bestseller.`;
  } else if (namedBrand) {
    lead = `${matchBrandName(namedBrand)} has formulas that can work well — I just don't start from a brand shelf here. A short scan first tells us whether that kind of formula is even what your skin needs.`;
  } else if (analyze) {
    lead = `I can run a guided skin analysis for you — a structured look at what your skin is showing right now, then a routine built around those results. It is always informational, not a substitute for seeing a dermatologist in person.`;
  } else {
    lead = `If you're trying to figure out what would actually help your skin, a scan is a practical next step — it gives us something concrete to build a routine around instead of guessing.`;
  }
  const follow = analyze
    ? `You can start right away: tap <strong>Start Diagnostic</strong> above and I will walk you through a short face scan. If you would rather skip the camera, you can still continue with a few questions.`
    : `Tap <strong>Start Diagnostic</strong> when you're ready — I'll walk you through a short face scan, then we can build around what it finds. If you'd rather skip the camera, you can answer a few questions instead. It's informational, not a substitute for seeing a dermatologist.`;
  return { lead, follow };
}

/** @param {{ lead?: string, follow?: string }} [opts] */
function buildSkinAnalyzeCardBlock(opts = {}) {
  const fallback = skinDiagOfferCopy("");
  const lead = escapeHtml(opts.lead || fallback.lead);
  const follow = opts.follow || fallback.follow;
  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon"><img src="${SKIN_DIAG_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Skin Diag</span>
    </div>
    <article class="skin-analyze-card">
      <div class="skin-analyze-card__icon" aria-hidden="true"><span class="skin-analyze-card__mark"></span></div>
      <p class="skin-analyze-card__kicker">AI Skin Diagnostic</p>
      <h3 class="skin-analyze-card__title">Analyze your skin for a<br />custom-built routine</h3>
      <button type="button" class="skin-analyze-card__cta" data-skin-analyze-start>
        Start Diagnostic
        ${lrpCtaArrowSVG()}
      </button>
    </article>
    <div class="assistant-text skin-analyze-card__follow">
      <p style="margin:0 0 10px">${lead}</p>
      <p style="margin:0">${follow}</p>
    </div>
  `;
}

function skinCareGenericReplyHtml() {
  return `<div class="assistant-text">
    <p style="margin:0">Happy to help — in this chat I start from your skin rather than guessing at products. Tap <strong>Start Diagnostic</strong> when you want a short analysis, and we can build from there.</p>
  </div>`;
}

function isNewChatLanding() {
  return view === "entry";
}

function syncNewChatLandingChrome() {
  el.shell?.classList.toggle("is-new-chat", isNewChatLanding());
}

function updateEntryChromeForChatMode() {
  const h = el.entryHeadline;
  if (!h) return;
  if (chatMode === "skin_diag") {
    h.textContent = "What does your skin need today?";
    el.entryView?.setAttribute("aria-label", "New conversation");
    syncNewChatLandingChrome();
    return;
  }
  h.textContent = "What are you looking for today?";
  el.entryView?.setAttribute("aria-label", "New conversation");
  syncNewChatLandingChrome();
}

function setComposerForChatMode() {
  const ta = el.input;
  const root = el.composerRoot;
  if (!ta || !root) return;
  if (chatMode === "skin_diag") {
    root.classList.remove("composer--vto");
    if (el.composerPlus) el.composerPlus.hidden = false;
    ta.placeholder = ta.dataset.placeholderDefault || "Ask anything";
    syncNewChatLandingChrome();
    return;
  }
  if (!root.classList.contains("composer--vto")) {
    ta.placeholder = ta.dataset.placeholderDefault || "Ask anything";
  }
  syncNewChatLandingChrome();
}

const SELFIE_INTRO_COPY_MAKEUP = [
  ["Remove glasses and makeup.", "Keep eye makeup and lip products to a minimum."],
  ["Good lighting.", "Find a bright spot with natural light."],
  ["Front facing, neutral expression.", "Keep a relaxed, natural face."],
  ["Camera permission.", "Your browser will ask before the camera turns on."],
];

const SELFIE_INTRO_COPY_SKIN = [
  ["Remove glasses and makeup", "Tie hair back for a clear scan"],
  ["Good lighting", "Find a bright spot with natural light"],
  ["Neutral expression", "Keep a relaxed, natural face"],
  ["Camera access", "Allow access on the next screen"],
];

function applySelfieStubSkinDiagUi(isSkinDiagFlow) {
  const panel = el.vtoSelfieStubPanel;
  if (!panel) return;
  panel.classList.toggle("vto-flow__panel--skin-diag-flow", isSkinDiagFlow);
  const title = el.vtoSelfieStubTitle;
  if (title) title.textContent = isSkinDiagFlow ? "Face scan analysis" : "Try-on selfie";
  if (el.vtoSelfieStubLead) el.vtoSelfieStubLead.hidden = !isSkinDiagFlow;
  const copy = isSkinDiagFlow ? SELFIE_INTRO_COPY_SKIN : SELFIE_INTRO_COPY_MAKEUP;
  panel.querySelectorAll(".vto-selfie-intro__list .vto-selfie-intro__item").forEach((item, i) => {
    const pair = copy[i];
    if (!pair) return;
    const line = item.querySelector(".vto-selfie-intro__line");
    const sub = item.querySelector(".vto-selfie-intro__sub");
    if (line) line.textContent = pair[0];
    if (sub) sub.textContent = pair[1];
  });
  const privacyCopy = panel.querySelector(".vto-selfie-intro__privacy-copy");
  if (privacyCopy) {
    privacyCopy.textContent = isSkinDiagFlow ? "We don't store your selfie" : "We don't store your selfie.";
  }
  if (el.vtoStubLiveMode) {
    el.vtoStubLiveMode.hidden = isSkinDiagFlow;
    el.vtoStubLiveMode.classList.toggle("vto-mode__btn--primary", !isSkinDiagFlow);
    el.vtoStubLiveMode.classList.remove("vto-mode__btn--secondary");
  }
  if (el.vtoSelfieTake) {
    el.vtoSelfieTake.textContent = isSkinDiagFlow ? "Take my selfie now" : "Take a selfie";
    el.vtoSelfieTake.classList.toggle("vto-mode__btn--primary", isSkinDiagFlow);
    el.vtoSelfieTake.classList.toggle("vto-mode__btn--secondary", !isSkinDiagFlow);
  }
  if (el.vtoSelfieUploadFallback) el.vtoSelfieUploadFallback.hidden = isSkinDiagFlow;
  if (el.vtoSelfieSkip) el.vtoSelfieSkip.hidden = !isSkinDiagFlow;
}

function focusSelfieStubPrimaryAction() {
  const panel = el.vtoSelfieStubPanel;
  requestAnimationFrame(() => {
    if (!panel || panel.hidden) return;
    if (panel.classList.contains("vto-flow__panel--skin-diag-flow")) {
      el.vtoSelfieTake?.focus();
      return;
    }
    if (el.vtoStubLiveMode && !el.vtoStubLiveMode.hidden) {
      el.vtoStubLiveMode.focus();
      return;
    }
    el.vtoSelfieTake?.focus();
  });
}

function showSkinDiagSelfieEntry() {
  applySelfieStubSkinDiagUi(true);
  showVtoSelfieStub();
  focusSelfieStubPrimaryAction();
}

function resetSkinDiagSessionFlags() {
  skinDiagResultsPeekUrl = null;
  chatAwaitingSkinDiagConfirm = false;
  chatAwaitingSkinRoutineChoice = false;
  chatSkinRoutineConcernId = null;
  skinDiagUserAcceptedTerms = false;
  skinDiagPreScanQuizDone = false;
  skinDiagSelfieSkipped = false;
  clearSkinDiagSelfieAngles();
  resetSkinDiagQuestionnaireState();
}

function resetMakeupChatFlags() {
  chatPreferredTier = null;
  chatLastProductCarouselCatalog = null;
  lrpLastCategory = null;
  lrpLastConcerns = [];
  matchBrand = "lrp";
  chatPendingCarousel = null;
  chatAwaitingBudgetTierReply = false;
  chatAwaitingTryOnConfirm = false;
  vtoSelectedProductKey = null;
  lrpShopProduct = null;
}

/**
 * Independent transcripts for Skin Diag vs Product Match / makeup.
 * Overlay round-trips keep the active flow’s thread. New chat / menu refresh that flow.
 * @type {{ makeup: ChatThreadSnapshot | null, skin_diag: ChatThreadSnapshot | null }}
 */
const chatThreads = { makeup: null, skin_diag: null };

/**
 * @typedef {{
 *   html: string,
 *   view: View,
 *   scrollTop: number,
 *   flags: Record<string, unknown>,
 * }} ChatThreadSnapshot
 */

function snapshotFlagsForMode(mode) {
  if (mode === "skin_diag") {
    return {
      skinDiagResultsPeekUrl,
      chatAwaitingSkinDiagConfirm,
      chatAwaitingSkinRoutineChoice,
      chatSkinRoutineConcernId,
      quizAnswers: cloneSkinDiagQuizAnswers(skinDiagActiveQuizAnswers()),
      composerSelectedApp: composerSelectedApp === "skin_diag" ? "skin_diag" : null,
    };
  }
  return {
    chatPreferredTier,
    chatLastProductCarouselCatalog,
    chatPendingCarousel,
    chatAwaitingBudgetTierReply,
    chatAwaitingTryOnConfirm,
    lrpLastCategory,
    lrpLastConcerns: Array.isArray(lrpLastConcerns) ? [...lrpLastConcerns] : [],
    matchBrand: matchBrand === "cerave" || matchBrand === "lancome" ? matchBrand : "lrp",
    composerSelectedApp: composerSelectedApp === "vto" ? "vto" : null,
    vtoSelectedProductKey: vtoSelectedProductKey ? { ...vtoSelectedProductKey } : null,
    lrpShopProductId: lrpShopProduct?.id || null,
  };
}

function applyFlagsForMode(mode, flags) {
  if (mode === "skin_diag") {
    resetSkinDiagSessionFlags();
    if (!flags) return;
    skinDiagResultsPeekUrl = typeof flags.skinDiagResultsPeekUrl === "string" ? flags.skinDiagResultsPeekUrl : null;
    chatAwaitingSkinDiagConfirm = Boolean(flags.chatAwaitingSkinDiagConfirm);
    chatAwaitingSkinRoutineChoice = Boolean(flags.chatAwaitingSkinRoutineChoice);
    chatSkinRoutineConcernId = typeof flags.chatSkinRoutineConcernId === "string" ? flags.chatSkinRoutineConcernId : null;
    if (flags.quizAnswers && typeof flags.quizAnswers === "object") {
      skinDiagQuizAnswers = cloneSkinDiagQuizAnswers(flags.quizAnswers);
      if (skinDiagQuizAnswers.priorities.length || skinDiagQuizAnswers.routine) {
        skinDiagCompletedQuizAnswers = cloneSkinDiagQuizAnswers(skinDiagQuizAnswers);
      }
    }
    composerSelectedApp = flags.composerSelectedApp === "skin_diag" ? "skin_diag" : composerSelectedApp === "vto" ? null : composerSelectedApp;
    return;
  }
  resetMakeupChatFlags();
  if (!flags) return;
  chatPreferredTier = flags.chatPreferredTier === "luxury" || flags.chatPreferredTier === "budget" ? flags.chatPreferredTier : null;
  chatLastProductCarouselCatalog =
    flags.chatLastProductCarouselCatalog === "lips" || flags.chatLastProductCarouselCatalog === "foundation"
      ? flags.chatLastProductCarouselCatalog
      : null;
  chatPendingCarousel = flags.chatPendingCarousel === "foundation" ? "foundation" : null;
  chatAwaitingBudgetTierReply = Boolean(flags.chatAwaitingBudgetTierReply);
  chatAwaitingTryOnConfirm = Boolean(flags.chatAwaitingTryOnConfirm);
  lrpLastCategory = typeof flags.lrpLastCategory === "string" ? flags.lrpLastCategory : null;
  lrpLastConcerns = Array.isArray(flags.lrpLastConcerns) ? [...flags.lrpLastConcerns] : [];
  matchBrand = flags.matchBrand === "cerave" || flags.matchBrand === "lancome" ? flags.matchBrand : "lrp";
  if (flags.vtoSelectedProductKey && typeof flags.vtoSelectedProductKey === "object") {
    vtoSelectedProductKey = /** @type {typeof vtoSelectedProductKey} */ (flags.vtoSelectedProductKey);
  }
  composerSelectedApp = flags.composerSelectedApp === "vto" ? "vto" : composerSelectedApp === "skin_diag" ? null : composerSelectedApp;
  lrpShopProduct = typeof flags.lrpShopProductId === "string" ? findLrpProduct(flags.lrpShopProductId) : null;
}

function captureChatThread(mode) {
  if (!el.chatView) return;
  el.chatView.querySelectorAll('[data-role="typing"]').forEach((n) => n.remove());
  chatThreads[mode] = {
    html: el.chatView.innerHTML,
    view,
    scrollTop: el.mainScroll?.scrollTop ?? 0,
    flags: snapshotFlagsForMode(mode),
  };
}

function hydrateChatView() {
  el.chatView.querySelectorAll("[data-product-carousel]").forEach((host) => {
    if (host instanceof HTMLElement) {
      delete host.dataset.wired;
      wireProductCarousel(host);
    }
  });
  el.chatView.querySelectorAll("[data-skin-routine-widget]").forEach((widget) => {
    if (widget instanceof HTMLElement) wireSkinRoutineWidget(widget);
  });
  el.chatView.querySelectorAll(".msg--assistant").forEach((msg) => {
    if (msg instanceof HTMLElement) wireAssistantFeedback(msg);
  });
}

/** @param {ChatMode} mode @param {{ fresh: boolean }} opts */
function applyChatThread(mode, opts) {
  bumpChatGeneration();
  if (!el.vtoFlow.hidden) closeVtoFlow();
  closeLrpFlow();
  closeProductDetail();
  chatMode = mode;
  skinDiagFlowActive = false;
  chatPreserveThreadScroll = false;

  if (opts.fresh) {
    chatThreads[mode] = null;
    if (mode === "skin_diag") resetSkinDiagSessionFlags();
    else resetMakeupChatFlags();
    el.chatView.innerHTML = "";
    view = "entry";
    el.entryView.hidden = false;
    el.chatView.hidden = true;
    if (el.mainScroll) el.mainScroll.scrollTop = 0;
  } else {
    const snap = chatThreads[mode];
    applyFlagsForMode(mode, snap?.flags);
    el.chatView.innerHTML = snap?.html || "";
    hydrateChatView();
    const hasMsgs = Boolean(snap?.html && el.chatView.childElementCount > 0);
    view = hasMsgs ? snap?.view || "chat" : "entry";
    if (view === "entry" || !hasMsgs) {
      view = "entry";
      el.entryView.hidden = false;
      el.chatView.hidden = true;
      if (el.mainScroll) el.mainScroll.scrollTop = 0;
    } else {
      el.entryView.hidden = true;
      el.chatView.hidden = false;
      if (el.mainScroll) el.mainScroll.scrollTop = snap?.scrollTop ?? 0;
    }
  }

  if (mode === "skin_diag" && composerSelectedApp === "vto") composerSelectedApp = null;
  if (mode === "makeup" && composerSelectedApp === "skin_diag") composerSelectedApp = null;
  syncComposerAppPill();
  updateEntryChromeForChatMode();
  renderPrompts();
  setComposerForChatMode();
  el.input.value = "";
  autosizeComposer();
  flow = "idle";
  updateComposerTextState();
}

/** Save the current flow, then restore the other — unless that flow is being refreshed. */
function switchChatModeIfNeeded(nextMode) {
  if (chatMode === nextMode) return;
  captureChatThread(chatMode);
  applyChatThread(nextMode, { fresh: false });
}

function startSkinDiagChat() {
  if (chatMode !== "skin_diag") captureChatThread(chatMode);
  applyChatThread("skin_diag", { fresh: true });
  requestAnimationFrame(() => el.input?.focus());
}

function switchToMakeupChat() {
  if (chatMode !== "makeup") captureChatThread(chatMode);
  applyChatThread("makeup", { fresh: true });
  requestAnimationFrame(() => el.input?.focus());
}

function launchSkinDiagAfterConfirm() {
  skinDiagResultsPeekUrl = null;
  skinDiagFlowActive = true;
  vtoSkinBrandExperienceActive = true;
  syncVtoExperienceBrandUi();
  prepareVtoShellVisible();
  applySelfieStubSkinDiagUi(true);
  if (chatMode === "skin_diag") {
    el.composerRoot?.classList.remove("composer--vto");
    setComposerForChatMode();
  }
  if (!skinDiagUserAcceptedTerms) {
    showVtoTermsOnly();
    el.vtoTermsCheckbox.checked = false;
    syncVtoConsentButton();
    requestAnimationFrame(() => el.vtoTermsClose.focus());
    return;
  }
  if (!skinDiagPreScanQuizDone) {
    beginSkinDiagPreScanQuiz();
    return;
  }
  showSkinDiagSelfieEntry();
}

function renderPrompts() {
  el.promptList.innerHTML = "";
  const list = chatMode === "skin_diag" ? SKIN_DIAG_PROMPTS : PROMPTS;
  for (const p of list) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "prompt-chip";
    b.textContent = p.text;
    b.addEventListener("click", () => sendUserMessage(p.text, p));
    el.promptList.appendChild(b);
  }
  updateEntryChromeForChatMode();
}

function assistantFeedbackRowHtml() {
  const s = LUC.stroke;
  const up = `<path d="M7 10v12" ${s}/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" ${s}/>`;
  const down = `<path d="M17 14V2" ${s}/><path d="M9 18.12 10 14H5.83a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" ${s}/>`;
  return `<div class="assistant-feedback" role="group" aria-label="Rate this response">
    <button type="button" class="assistant-feedback__btn" data-feedback="up" aria-label="Good response" aria-pressed="false">${LUC.svg(18, up)}</button>
    <button type="button" class="assistant-feedback__btn" data-feedback="down" aria-label="Bad response" aria-pressed="false">${LUC.svg(18, down)}</button>
  </div>`;
}

/** @param {HTMLElement} msgRoot */
function wireAssistantFeedback(msgRoot) {
  const row = msgRoot.querySelector(".assistant-feedback");
  if (!row) return;
  row.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-feedback]");
    if (!(btn instanceof HTMLButtonElement) || !row.contains(btn)) return;
    const key = btn.getAttribute("data-feedback");
    const turningOff = btn.getAttribute("aria-pressed") === "true";
    const next = turningOff ? null : key === "up" || key === "down" ? key : null;
    for (const b of row.querySelectorAll("[data-feedback]")) {
      if (!(b instanceof HTMLButtonElement)) continue;
      const on = next !== null && b.getAttribute("data-feedback") === next;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("is-selected", on);
    }
  });
}

function appendUserBubble(text) {
  chatPreserveThreadScroll = false;
  const wrap = document.createElement("div");
  wrap.className = "msg msg--user msg-anim";
  wrap.innerHTML = `
    <div class="user-thread">
      <div class="user-thread__bubble"></div>
    </div>`;
  const bubble = wrap.querySelector(".user-thread__bubble");
  if (bubble) bubble.innerHTML = mentionHighlightHTML(text);
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

/**
 * Splits non-empty text nodes in a block into word-ish spans for streaming reveal.
 * @param {HTMLElement} block
 * @returns {HTMLElement[]}
 */
function tokenizeAssistantTextBlock(block) {
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  /** @type {Text[]} */
  const textNodes = [];
  let n = walker.nextNode();
  while (n) {
    const t = /** @type {Text} */ (n);
    if (t.nodeValue && t.nodeValue.trim().length > 0) textNodes.push(t);
    n = walker.nextNode();
  }

  /** @type {HTMLElement[]} */
  const tokens = [];
  for (const tn of textNodes) {
    const value = tn.nodeValue || "";
    const parts = value.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        continue;
      }
      const span = document.createElement("span");
      span.className = "assistant-stream__tok";
      span.textContent = part;
      frag.appendChild(span);
      tokens.push(span);
    }
    tn.parentNode?.replaceChild(frag, tn);
  }
  return tokens;
}

function assistantMessageHasCards(root) {
  if (!(root instanceof HTMLElement)) return false;
  return Boolean(
    root.querySelector(
      "[data-product-carousel], [data-skin-diag-routine-widget], [data-skin-routine-widget], .product-card, .lrp-card, .skin-routine-hero-card",
    ),
  );
}

/** Keep product cards on screen while the copy under them streams in. */
function pinThreadToCardMessage(root) {
  const msg = root.closest(".msg") || root;
  if (msg instanceof HTMLElement) pinThreadToMessage(msg, 8);
}

/**
 * Applies a lightweight word-by-word reveal to assistant prose.
 * This preserves inline tags (e.g. <strong>) by only replacing text nodes.
 * @param {HTMLElement} root
 * @param {{ preserveThread?: boolean }} [opts]
 */
function streamAssistantText(root, opts = {}) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  const hasCards = assistantMessageHasCards(root);
  const maybeScroll = () => {
    if (opts.preserveThread) return;
    if (hasCards) return;
    scrollMainToBottom();
  };
  if (hasCards && !opts.preserveThread) pinThreadToCardMessage(root);

  const seqRoot = root.querySelector('.where-buy[data-assistant-stream="sequential"]');
  if (seqRoot) {
    const blocks = Array.from(seqRoot.querySelectorAll(":scope > .assistant-text")).filter((b) => b instanceof HTMLElement);
    /** @type {{ block: HTMLElement; tokens: HTMLElement[] }[]} */
    const jobs = [];
    for (const block of blocks) {
      const tokens = tokenizeAssistantTextBlock(block);
      if (tokens.length) block.classList.add("assistant-text--streaming");
      jobs.push({ block, tokens });
    }
    let ji = 0;
    let idx = 0;
    const tickMs = 26;
    const tick = () => {
      while (ji < jobs.length) {
        const { block, tokens } = jobs[ji];
        if (idx >= tokens.length) {
          if (tokens.length) block.classList.remove("assistant-text--streaming");
          ji += 1;
          idx = 0;
          continue;
        }
        tokens[idx].classList.add("is-visible");
        idx += 1;
        maybeScroll();
        window.setTimeout(tick, tickMs);
        return;
      }
      maybeScroll();
    };
    window.setTimeout(tick, hasCards ? 280 : tickMs);
    return;
  }

  const textBlocks = root.querySelectorAll(".assistant-text, .model-response");
  for (const block of textBlocks) {
    if (!(block instanceof HTMLElement)) continue;
    if (block.closest('.where-buy[data-assistant-stream="sequential"]')) continue;
    const tokens = tokenizeAssistantTextBlock(block);
    if (tokens.length === 0) continue;
    block.classList.add("assistant-text--streaming");
    let idx = 0;
    const tickMs = 26;
    const step = 1;
    const tick = () => {
      for (let i = 0; i < step && idx < tokens.length; i += 1, idx += 1) {
        tokens[idx].classList.add("is-visible");
      }
      maybeScroll();
      if (idx < tokens.length) {
        window.setTimeout(tick, tickMs);
      } else {
        block.classList.remove("assistant-text--streaming");
        maybeScroll();
      }
    };
    window.setTimeout(tick, hasCards ? 280 : tickMs);
  }
}

/** @param {string} html @param {boolean} [withAnim] @param {{ preserveThread?: boolean }} [opts] */
function appendAssistantBlock(html, withAnim = true, opts = {}) {
  removeTyping();
  const wrap = document.createElement("div");
  wrap.className = `msg msg--assistant${withAnim ? " msg-anim" : ""}`;
  /** VTO lip/foundation carousels already include {@link convActionsHTML} (thumbs + actions). */
  const hasInlineConvActions = html.includes("conv-actions");
  const feedbackHtml = hasInlineConvActions ? "" : assistantFeedbackRowHtml();
  wrap.innerHTML = `<div class="assistant-msg"><div class="assistant-surface">${html}</div>${feedbackHtml}</div>`;
  el.chatView.appendChild(wrap);
  wrap.querySelectorAll("[data-product-carousel]").forEach((host) => wireProductCarousel(/** @type {HTMLElement} */ (host)));
  wrap.querySelectorAll("[data-skin-routine-widget]").forEach((widget) => wireSkinRoutineWidget(/** @type {HTMLElement} */ (widget)));
  if (!hasInlineConvActions) wireAssistantFeedback(wrap);
  if (withAnim) streamAssistantText(wrap, opts);
  if (!opts.preserveThread) {
    if (assistantMessageHasCards(wrap)) pinThreadToCardMessage(wrap);
    else scrollMainToBottom();
  }
  return wrap;
}

/** @param {HTMLElement} widget */
function wireSkinRoutineWidget(widget) {
  const routinePanel = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-routine]"));
  const chrome = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-chrome]"));
  const buttons = Array.from(widget.querySelectorAll("[data-routine-toggle]"));
  const stepLabelEl = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-step-label]"));
  const stepIndexEl = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-step-index]"));
  const carousel = widget.querySelector(".skin-routine-carousel");
  const row = /** @type {HTMLElement | null} */ (carousel?.querySelector(".slide-row"));

  /** @param {'day'|'night'} mode */
  const setMode = (mode) => {
    widget.setAttribute("data-mode", mode);
    for (const btn of buttons) {
      const on = btn.getAttribute("data-routine-toggle") === mode;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    }
    for (const panel of widget.querySelectorAll("[data-routine-panel]")) {
      const panelMode = panel.getAttribute("data-routine-panel");
      panel.toggleAttribute("hidden", panelMode !== mode);
    }
  };
  for (const btn of buttons) {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-routine-toggle");
      if (mode === "day" || mode === "night") setMode(mode);
    });
  }

  const syncRoutineChrome = () => {
    if (!chrome || !row || !widget.classList.contains("skin-routine-widget--show-routine")) return;
    const stepPx = carouselScrollStepPx(row);
    if (stepPx <= 0) return;
    const maxIdx = Math.max(0, row.children.length - 1);
    const idx = Math.min(maxIdx, Math.max(0, Math.round((row.scrollLeft + stepPx * 0.15) / stepPx)));
    const slide = row.children[idx];
    if (slide instanceof HTMLElement && slide.dataset.stepLabel) {
      if (stepLabelEl) stepLabelEl.textContent = slide.dataset.stepLabel;
      if (stepIndexEl) {
        const part = slide.dataset.stepPart || "";
        const tot = slide.dataset.stepTotal || "";
        stepIndexEl.textContent = part && tot ? `${part}/${tot}` : "";
      }
    }
  };

  const introPanel = /** @type {HTMLElement | null} */ (widget.querySelector("[data-routine-intro]"));
  const prev = /** @type {HTMLButtonElement | null} */ (carousel?.querySelector(".product-carousel__btn--prev"));

  const seeBtn = widget.querySelector("[data-routine-see]");
  seeBtn?.addEventListener("click", () => {
    widget.classList.add("skin-routine-widget--show-routine");
    if (routinePanel) routinePanel.setAttribute("aria-hidden", "false");
    if (introPanel) introPanel.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      row?.dispatchEvent(new Event("scroll"));
      syncRoutineChrome();
    }, 420);
  });

  widget.addEventListener("click", (e) => {
    const unpack = e.target.closest("[data-routine-unpack]");
    if (!unpack || !(unpack instanceof HTMLButtonElement)) return;
    if (!widget.contains(unpack)) return;
    const step = Number(unpack.getAttribute("data-routine-unpack-step"));
    const mode = unpack.getAttribute("data-routine-unpack-mode");
    if (!Number.isFinite(step) || (mode !== "day" && mode !== "night")) return;
    e.preventDefault();
    openSkinRoutineProductDetail(step, mode);
  });

  prev?.addEventListener(
    "click",
    (e) => {
      if (!widget.classList.contains("skin-routine-widget--show-routine") || !row) return;
      if (row.scrollLeft > 2) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      widget.classList.remove("skin-routine-widget--show-routine");
      if (routinePanel) routinePanel.setAttribute("aria-hidden", "true");
      if (introPanel) introPanel.setAttribute("aria-hidden", "false");
      window.requestAnimationFrame(() => {
        row.dispatchEvent(new Event("scroll"));
        syncRoutineChrome();
      });
    },
    true,
  );

  row?.addEventListener("scroll", syncRoutineChrome, { passive: true });
  row?.addEventListener("scrollend", syncRoutineChrome);

  setMode("day");
}

/** Matches product card horizontal stride (276px card + 8px gap in CSS). */
const PRODUCT_CAROUSEL_FALLBACK_STEP = 284;

function carouselScrollStepPx(row) {
  const cs = getComputedStyle(row);
  const gap = parseFloat(cs.columnGap || cs.gap || "8") || 8;
  const routineSlide = row.querySelector(".skin-routine-slide");
  if (routineSlide) {
    return Math.round(routineSlide.getBoundingClientRect().width + gap);
  }
  const resultStep = row.querySelector(".vto-skin-report__step");
  if (resultStep) {
    return Math.round(resultStep.getBoundingClientRect().width + gap);
  }
  const insightCard = row.querySelector(".vto-skin-report__card");
  if (insightCard) {
    return Math.round(insightCard.getBoundingClientRect().width + gap);
  }
  const hero = row.querySelector(".skin-routine-hero-card");
  if (hero) {
    return Math.round(hero.getBoundingClientRect().width + gap);
  }
  const card = row.querySelector(".product-card, .lrp-more-card");
  if (!card) return PRODUCT_CAROUSEL_FALLBACK_STEP;
  return Math.round(card.getBoundingClientRect().width + gap);
}

function chevronCarouselSvg(direction) {
  const paths =
    direction === "prev"
      ? `<path d="m15 18-6-6 6-6" ${LUC.stroke}/>`
      : `<path d="m9 18 6-6-6-6" ${LUC.stroke}/>`;
  return LUC.svg(18, paths);
}

/**
 * @param {HTMLElement} host
 * @param {number} idx
 */
function syncSkinDiagRoutineStepChrome(host, idx) {
  const widget = host.closest("[data-skin-diag-routine-widget]");
  if (!(widget instanceof HTMLElement)) return;
  const steps = getSkinDiagRoutineSteps();
  const total = steps.length;
  const nameEl = widget.querySelector("[data-routine-step-name]");
  const indexEl = widget.querySelector("[data-routine-step-index]");
  const clamped = Math.min(total - 1, Math.max(0, idx));
  const step = steps[clamped];
  if (nameEl instanceof HTMLElement && step) nameEl.textContent = step.step;
  if (indexEl instanceof HTMLElement) {
    indexEl.hidden = false;
    indexEl.textContent = `Step ${clamped + 1} of ${total}`;
  }
  if (step) widget.setAttribute("data-active-step", step.id);
}

/**
 * @param {HTMLElement} host
 */
function wireProductCarousel(host) {
  const row = host.querySelector(".slide-row");
  const dotsRoot = host.querySelector(".carousel-dots");
  const prev = host.querySelector(".product-carousel__btn--prev");
  const next = host.querySelector(".product-carousel__btn--next");
  if (!row || !dotsRoot || !prev || !next) return;
  if (host.dataset.wired === "true") {
    row.scrollLeft = 0;
    requestAnimationFrame(() => {
      const step = carouselScrollStepPx(row);
      const maxScroll = Math.max(0, row.scrollWidth - row.clientWidth);
      prev.disabled = row.scrollLeft <= 2;
      next.disabled = row.scrollLeft >= maxScroll - 2;
      let i = 0;
      for (const dot of dotsRoot.querySelectorAll("span")) {
        dot.classList.toggle("is-active", i === 0);
        i += 1;
      }
      syncSkinDiagRoutineStepChrome(host, 0);
    });
    return;
  }
  host.dataset.wired = "true";

  const sync = () => {
    const step = carouselScrollStepPx(row);
    const maxScroll = Math.max(0, row.scrollWidth - row.clientWidth);
    const idx = Math.min(
      dotsRoot.children.length - 1,
      Math.max(0, Math.round((row.scrollLeft + step * 0.15) / step)),
    );
    let i = 0;
    for (const dot of dotsRoot.querySelectorAll("span")) {
      dot.classList.toggle("is-active", i === idx);
      i += 1;
    }
    syncSkinDiagRoutineStepChrome(host, idx);
    const routineWidget = host.closest("[data-skin-routine-widget]");
    const routineFirstStepBack =
      routineWidget instanceof HTMLElement &&
      routineWidget.classList.contains("skin-routine-widget--show-routine") &&
      row.scrollLeft <= 2;
    prev.disabled = routineFirstStepBack ? false : row.scrollLeft <= 2;
    next.disabled = row.scrollLeft >= maxScroll - 2;
  };

  prev.addEventListener("click", () => {
    const step = carouselScrollStepPx(row);
    row.scrollBy({ left: -step, behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    const step = carouselScrollStepPx(row);
    row.scrollBy({ left: step, behavior: "smooth" });
  });
  row.addEventListener("scroll", sync, { passive: true });
  requestAnimationFrame(sync);
}

/**
 * U.S. retailer shortcuts for the “Where to buy” edge-case mock (links only to known storefronts).
 * @param {typeof PRODUCTS.luxury[0]} p
 */
function whereToBuyRetailerTiles(p) {
  const shadeQ = encodeURIComponent(`${p.brand} ${p.title} ${p.shadeLabel}`.replace(/\s+/g, " ").trim());
  if (p.brand === "Yves Saint Laurent") {
    return [
      { href: `https://www.amazon.com/s?k=${shadeQ}`, label: "Amazon", host: "amazon.com" },
      { href: "https://www.sephora.com/brand/yves-saint-laurent", label: "Sephora", host: "sephora.com" },
      { href: "https://www.yslbeautyus.com/", label: "YSL Beauty US", host: "yslbeautyus.com" },
    ];
  }
  return [
    { href: `https://www.amazon.com/s?k=${shadeQ}`, label: "Amazon", host: "amazon.com" },
    { href: "https://www.ulta.com/brand/maybelline", label: "Ulta Beauty", host: "ulta.com" },
    { href: `https://www.target.com/s?searchTerm=${shadeQ}`, label: "Target", host: "target.com" },
  ];
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function buildWhereToBuyMessageHtml(p) {
  const tiles = whereToBuyRetailerTiles(p);
  const tilesHtml = tiles
    .map(
      (t) => `<li class="where-buy__item">
      <a class="where-buy__link" href="${escapeAttr(t.href)}" target="_blank" rel="noopener noreferrer">
        <span class="where-buy__link-name">${escapeHtml(t.label)}</span>
        <span class="where-buy__link-host">${escapeHtml(t.host)}</span>
      </a>
    </li>`,
    )
    .join("");

  return `<div class="where-buy" data-assistant-stream="sequential">
    <div class="assistant-text">
      <p>
        Here is a quick way to get oriented in the <strong>U.S.</strong> for <strong>${escapeHtml(p.title)}</strong>
        <span class="where-buy__shade">(${escapeHtml(p.shadeLabel)})</span>. I can help you compare listings (price, shipping, minis vs. full size, return policies) and flag things to watch for with third-party sellers—I can not check out for you or see live inventory, but I can narrow options once you tell me what you care about most.
      </p>
    </div>
    <div class="assistant-text where-buy__retailers">
      <p class="where-buy__label">Places to start</p>
      <ul class="where-buy__list" role="list">${tilesHtml}</ul>
    </div>
    <div class="assistant-text where-buy__follow">
      <p>
        Want to keep going? Tell me if you would like <strong>other shades</strong> in the same finish, <strong>similar products</strong> at a different price point, or another round of <strong>try-on</strong> picks—I can pull a shortlist from here.
      </p>
    </div>
  </div>`;
}

/** @param {string} text */
function isMatchInPersonIntent(text) {
  const n = (text || "").trim();
  if (!n) return false;
  return (
    /\b(in[\s-]?person|in[\s-]?store|pick(?:\s+it)?\s+up)\b/i.test(n) ||
    /\b(find|get|buy|shop)\b.{0,24}\b(near\s+me|nearby|local(?:ly)?|around\s+here)\b/i.test(n) ||
    /\bstores?\s+(near\s+me|nearby|close\s+by)\b/i.test(n)
  );
}

/** @param {LrpProduct} p */
function matchShopQuery(p) {
  const brand = p.brandId ? skincareBrandName(p.brandId) : matchBrandName(productMatchBrand(p));
  return encodeURIComponent(`${brand} ${p.title}`.replace(/\s+/g, " ").trim());
}

/** @param {LrpProduct} p */
function matchShopBrandSite(p) {
  const href = p.shopUrl || "#";
  const brand = productMatchBrand(p);
  if (p.brandId === "garnier") return { href, label: "Garnier", host: "garnierusa.com" };
  if (p.brandId === "vichy") return { href, label: "Vichy", host: "vichyusa.com" };
  if (p.brandId === "biotherm") return { href, label: "Biotherm", host: "biotherm.com" };
  if (brand === "cerave" || p.brandId === "cerave") return { href, label: "CeraVe", host: "cerave.com" };
  if (brand === "lancome" || p.brandId === "lancome") return { href, label: "Lancôme", host: "lancome-usa.com" };
  return { href, label: "La Roche-Posay", host: "laroche-posay.us" };
}

/** @param {LrpProduct} p */
function matchShopRetailerTiles(p) {
  const q = matchShopQuery(p);
  const site = matchShopBrandSite(p);
  const amazon = { href: `https://www.amazon.com/s?k=${q}`, label: "Amazon", host: "amazon.com" };
  const ulta = { href: `https://www.ulta.com/search?search=${q}`, label: "Ulta Beauty", host: "ulta.com" };
  const target = { href: `https://www.target.com/s?searchTerm=${q}`, label: "Target", host: "target.com" };
  const cvs = { href: `https://www.cvs.com/search?searchTerm=${q}`, label: "CVS", host: "cvs.com" };
  const sephora = { href: `https://www.sephora.com/search?keyword=${q}`, label: "Sephora", host: "sephora.com" };
  const nordstrom = { href: `https://www.nordstrom.com/sr?keyword=${q}`, label: "Nordstrom", host: "nordstrom.com" };
  const dermstore = { href: `https://www.dermstore.com/search?q=${q}`, label: "Dermstore", host: "dermstore.com" };
  const brand = productMatchBrand(p);
  const brandId = p.brandId || "";
  if (brand === "lancome" || brandId === "lancome") return [site, sephora, ulta, nordstrom, amazon];
  if (brand === "cerave" || brandId === "cerave" || brandId === "garnier") return [site, amazon, target, ulta, cvs];
  if (brandId === "vichy" || brandId === "biotherm") return [site, dermstore, ulta, amazon, target];
  return [site, ulta, amazon, target, dermstore];
}

/** @param {{ href: string, label: string, host: string }[]} tiles */
function whereBuyRetailerListHTML(tiles) {
  return tiles
    .map(
      (t) => `<li class="where-buy__item">
      <a class="where-buy__link" href="${escapeAttr(t.href)}" target="_blank" rel="noopener noreferrer">
        <span class="where-buy__link-name">${escapeHtml(t.label)}</span>
        <span class="where-buy__link-host">${escapeHtml(t.host)}</span>
      </a>
    </li>`,
    )
    .join("");
}

/** @param {LrpProduct} p */
function matchInPersonStores(p) {
  const brand = productMatchBrand(p);
  const brandId = p.brandId || "";
  if (brand === "lancome" || brandId === "lancome") {
    return [
      { name: "Sephora", dist: "0.6 mi", hours: "Open until 9:00 PM", addr: "2103 Broadway, New York, NY" },
      { name: "Ulta Beauty", dist: "1.4 mi", hours: "Open until 9:00 PM", addr: "1280 Lexington Ave, New York, NY" },
      { name: "Nordstrom", dist: "2.1 mi", hours: "Open until 8:00 PM", addr: "225 W 57th St, New York, NY" },
    ];
  }
  if (brand === "cerave" || brandId === "cerave" || brandId === "garnier") {
    return [
      { name: "CVS Pharmacy", dist: "0.3 mi", hours: "Open 24 hours", addr: "630 Columbus Ave, New York, NY" },
      { name: "Target", dist: "0.5 mi", hours: "Open until 10:00 PM", addr: "112 W 34th St, New York, NY" },
      { name: "Walgreens", dist: "0.8 mi", hours: "Open until 10:00 PM", addr: "350 5th Ave, New York, NY" },
      { name: "Ulta Beauty", dist: "1.4 mi", hours: "Open until 9:00 PM", addr: "1280 Lexington Ave, New York, NY" },
    ];
  }
  return [
    { name: "Ulta Beauty", dist: "0.7 mi", hours: "Open until 9:00 PM", addr: "1280 Lexington Ave, New York, NY" },
    { name: "CVS Pharmacy", dist: "0.4 mi", hours: "Open until 10:00 PM", addr: "630 Columbus Ave, New York, NY" },
    { name: "Target", dist: "1.1 mi", hours: "Open until 10:00 PM", addr: "112 W 34th St, New York, NY" },
  ];
}

/** @param {LrpProduct} p */
function buildMatchShopMessageHtml(p) {
  const brand = p.brandId ? skincareBrandName(p.brandId) : matchBrandName(productMatchBrand(p));
  const tilesHtml = whereBuyRetailerListHTML(matchShopRetailerTiles(p));
  return `<div class="where-buy" data-assistant-stream="sequential">
    <div class="assistant-text">
      <p>
        You can get <strong>${escapeHtml(p.title)}</strong> from a few U.S. retailers online. I can't check live inventory or check out for you, but these are the usual places people start for ${escapeHtml(brand)}.
      </p>
    </div>
    <div class="assistant-text where-buy__retailers">
      <p class="where-buy__label">Places to start</p>
      <ul class="where-buy__list" role="list">${tilesHtml}</ul>
    </div>
    <div class="assistant-text where-buy__follow">
      <p>
        If you'd rather pick it up today, I can look for stores nearby that typically carry ${escapeHtml(brand)}.
      </p>
    </div>
    <div class="where-buy__actions">
      <button type="button" class="where-buy__chip" data-lrp-find-in-person="${escapeAttr(p.id)}">Find in stores near me</button>
    </div>
  </div>`;
}

/** @param {LrpProduct} p */
function buildMatchInPersonMessageHtml(p) {
  const storesHtml = matchInPersonStores(p)
    .map((s) => {
      const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.name} ${s.addr}`)}`;
      return `<li class="where-buy__item">
      <a class="where-buy__link" href="${escapeAttr(maps)}" target="_blank" rel="noopener noreferrer">
        <span class="where-buy__link-name">${escapeHtml(s.name)}</span>
        <span class="where-buy__store-meta">${escapeHtml(s.dist)} · ${escapeHtml(s.hours)}</span>
        <span class="where-buy__link-host">${escapeHtml(s.addr)}</span>
      </a>
    </li>`;
    })
    .join("");
  return `<div class="where-buy" data-assistant-stream="sequential">
    <div class="assistant-text">
      <p>
        Here are a few spots near you that usually stock <strong>${escapeHtml(p.title)}</strong>. Hours and shelf stock can change, so it's worth calling ahead if you need it today.
      </p>
    </div>
    <div class="assistant-text where-buy__retailers">
      <p class="where-buy__label">Nearby stores</p>
      <ul class="where-buy__list" role="list">${storesHtml}</ul>
    </div>
    <div class="assistant-text where-buy__follow">
      <p>
        If one of these is out, I can keep you on the online listings or pull a similar formula.
      </p>
    </div>
  </div>`;
}

/** @param {{ preserveThread?: boolean }} [opts] */
function appendTyping(opts = {}) {
  removeTyping();
  const wrap = document.createElement("div");
  wrap.className = "msg msg--assistant";
  wrap.dataset.role = "typing";
  wrap.innerHTML = `<div class="typing" role="status" aria-live="polite" aria-label="ChatGPT is thinking"><span class="typing__dot" aria-hidden="true"></span></div>`;
  el.chatView.appendChild(wrap);
  if (!opts.preserveThread) scrollMainToBottom();
}

function removeTyping() {
  el.chatView.querySelectorAll('[data-role="typing"]').forEach((n) => n.remove());
}

function removeQuickReplies() {
  el.chatView.querySelectorAll('[data-role="quick"]').forEach((n) => n.remove());
}

function tierKeyFromLabel(label) {
  return label === "Luxury" ? "luxury" : "budget";
}

/** @param {'luxury'|'budget'} tier */
function labelForTier(tier) {
  return tier === "luxury" ? "Luxury" : "Budget-friendly";
}

function normalizeUserReply(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Typed “where can I buy…” style asks while the full-screen VTO shell is open (handled before panels close). */
function isWhereToBuyPurchaseIntent(text) {
  const n = normalizeUserReply(text);
  if (!n) return false;
  if (/\b(where\s+can\s+i\s+buy|where\s+to\s+buy|where\s+do\s+i\s+buy|where\s+should\s+i\s+buy)\b/.test(n)) return true;
  if (/\b(where\s+can\s+we\s+buy|where\s+to\s+get\s+it|where\s+to\s+get\s+this|where\s+to\s+get\s+that)\b/.test(n)) return true;
  if (/\b(can\s+i\s+buy\s+(this|it|that|these)|how\s+can\s+i\s+buy|how\s+do\s+i\s+buy)\b/.test(n)) return true;
  if (/\b(links?\s+to\s+buy|buy\s+links?|purchase\s+(this|it|that)|shop\s+for\s+(this|it|that))\b/.test(n)) return true;
  if (/\b(where\s+is\s+it\s+sold|where\s+.*\s+sold|where\s+to\s+find\s+it|where\s+to\s+find\s+this)\b/.test(n)) return true;
  if (/\b(stockists?|retailers?)\b.*\b(where|find|link|buy)\b|\b(where|find|links?)\b.*\b(stockists?|retailers?)\b/.test(n)) return true;
  if (/\b(order\s+(this|it|that)|add\s+to\s+cart|checkout)\b/.test(n)) return true;
  return false;
}

/**
 * @returns {'luxury'|'budget'|'ambiguous'|null}
 */
function parseBudgetTierFromUserText(text) {
  const n = normalizeUserReply(text);
  if (!n) return null;
  if (/\b(both|either\s+works|either\s+is\s+fine|you\s+choose|your\s+call|surprise\s+me)\b/i.test(n)) {
    return "ambiguous";
  }
  const luxuryRe =
    /\b(luxury|luxe|premium|splurge|high[\s-]end|prestige|designer|department\s+store|treat\s*myself|investment\s+pieces?|ysl|y\s*s\s*l|saint\s+laurent|splurging)\b/i;
  const budgetRe =
    /\b(budget(?:[\s-]friendly)?|drugstore|affordable|inexpensive|cheaper|cheapest|save\s+money|save\s+a\s+bit|lower\s*prices?|value\s*picks?|mass\s*market|drug\s+store|wallet[\s-]?friendly|mny|maybelline)\b/i;
  const hasL = luxuryRe.test(n);
  const hasB = budgetRe.test(n);
  if (hasL && hasB) return "ambiguous";
  if (hasL) return "luxury";
  if (hasB) return "budget";
  return null;
}

/**
 * After a tiered carousel, detect a request to browse the *other* price lane (many phrasings).
 * @param {'luxury'|'budget'} currentTier
 * @returns {'luxury'|'budget'|null}
 */
function parseOppositeTierCarouselIntent(text, currentTier) {
  const n = normalizeUserReply(text);
  if (!n) return null;

  const explicit = parseBudgetTierFromUserText(text);
  if (explicit === "ambiguous") return null;
  if (explicit === "luxury" && currentTier === "budget") return "luxury";
  if (explicit === "budget" && currentTier === "luxury") return "budget";
  if (explicit !== null) return null;

  const wantsBrowse =
    /\b(show|see|want|looking\s+for|give\s+me|pull\s+up|load|switch|try|what\s+about|how\s+about|can\s+i|could\s+i|may\s+i|let'?s\s+see|hit\s+me\s+with|bring\s+out|surface|more)\b/i.test(
      n,
    );
  if (!wantsBrowse) return null;

  const otherLane =
    /\b(the\s+)?other\s+(category|lane|line|side|price\s*point|price\s*range|tier|options?|picks?|ones?|group|kind)\b/i.test(n) ||
    /\b(show\s+me\s+)?the\s+other\b/i.test(n) ||
    /\b(opposite\s+((price|price\s*range)|lane|end|side|category))\b/i.test(n) ||
    /\b(different\s+(lane|tier|price\s*point|range|brands?))\b/i.test(n) ||
    /\b(not\s+these|something\s+different|(switch|move)\s+(lanes?|tiers?))\b/i.test(n) ||
    /\b(the\s+)?other\s+end\b/i.test(n);

  if (otherLane) return currentTier === "luxury" ? "budget" : "luxury";

  return null;
}

/** Short line after product carousels inviting the opposite lane. */
function oppositeLaneInviteHtml(tierShown, catalog) {
  const isLux = tierShown === "luxury";
  if (catalog === "foundation") {
    const invite = isLux
      ? "If you like, I can also pull a few <strong>budget-friendly</strong> foundation matches—say <strong>“show me budget foundations”</strong>, <strong>“drugstore options,”</strong> or ask for the <strong>other price range</strong>."
      : "If you like, I can also show you some <strong>luxury foundation</strong> ideas—say <strong>“luxury picks,”</strong> <strong>“high-end lane,”</strong> or ask for the <strong>other price range</strong>.";
    return `<p style="margin:12px 0 0">${invite}</p>`;
  }
  const invite = isLux
    ? "If you like, I can show you some <strong>budget-friendly</strong> lip options as well—think <strong>drugstore-friendly</strong> picks. Try <strong>“budget ones,”</strong> <strong>“Maybelline,”</strong> or <strong>“the other lane.”</strong>"
    : "If you like, I can show you some more <strong>luxury lip</strong> options as well—premium finishes in the lane you have not browsed yet. Try <strong>“luxury picks,”</strong> <strong>“luxe ones,”</strong> or <strong>“the other lane.”</strong>";
  return `<p style="margin:12px 0 0">${invite}</p>`;
}

/**
 * @param {'luxury'|'budget'} tier
 * @param {{ switched?: boolean }} [opts]
 */
function lipResultsCopyForCarousel(tier, opts = {}) {
  if (!opts.switched) return resultsCopy(labelForTier(tier));
  const isLux = tier === "luxury";
  return `
    <p style="margin:0 0 10px">Here ${isLux ? "are a few <strong>luxury</strong> lip ideas" : "are some <strong>budget-friendly</strong> lip picks"} in the same vibe—pulled from the <strong>${isLux ? "luxe" : "value"}</strong> lane you asked for. <span aria-hidden="true">💄</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to compare finishes and undertones live.</p>
  `;
}

/**
 * @param {'luxury'|'budget'} tier
 * @param {{ switched?: boolean }} [opts]
 */
function foundationResultsCopyForCarousel(tier, opts = {}) {
  if (!opts.switched) return foundationResultsCopy(tier);
  const isLux = tier === "luxury";
  return `
    <p style="margin:0 0 10px">Here ${isLux ? "are some <strong>luxury</strong> foundation ideas" : "are a few <strong>budget-friendly</strong> foundation picks"}—switched to the <strong>${isLux ? "premium" : "drugstore-friendly"}</strong> lane you requested. <span aria-hidden="true">🧴</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to keep comparing, or tell me your undertone, coverage, and finish and I will narrow this down further.</p>
  `;
}

/**
 * @returns {'confirm'|'decline'|null}
 */
function parseTryOnConfirmFromUserText(text) {
  const n = normalizeUserReply(text);
  if (!n) return null;
  if (
    /^(no+|nope|nah|not\s+now|not\s+yet|maybe\s+later|later|pass|skip|cancel|stop)\b/i.test(n) ||
    /\b(no\s+thanks|not\s+interested)\b/i.test(n) ||
    /\b(don'?t|do\s+not)\s+(want|need|think)\b/i.test(n) ||
    /\bchanged\s+my\s+mind\b/i.test(n)
  ) {
    return "decline";
  }
  if (
    /^y(es|eah|ep|up)?\b/i.test(n) ||
    /^sure\b/i.test(n) ||
    /^ok(ay)?\b/i.test(n) ||
    /^please\b/i.test(n) ||
    n === "y" ||
    /\b(continue|go\s*ahead|let'?s\s*go|lets\s*go|do\s*it|proceed|launch(\s+it)?|open(\s+it)?|i'?m\s*ready|im\s*ready|sounds?\s+good|absolutely|certainly)\b/i.test(n) ||
    /\baye\b/i.test(n)
  ) {
    return "confirm";
  }
  return null;
}

/**
 * @param {string | null} lockedConcernId set when the routine prompt was opened from a specific results card
 * @returns {'single'|'all'|'decline'|null}
 */
function parseSkinRoutineIntent(text, lockedConcernId = null) {
  const n = normalizeUserReply(text);
  if (!n) return null;
  if (/\b(no|not now|later|skip|pass|no thanks|not interested)\b/i.test(n)) return "decline";

  const explicitAll =
    /\b(general\s+routine|full\s+routine|complete\s+routine|all\s+concerns?|all\s+my\s+concerns?|every\s+concern|top\s+concerns?|top\s+scores?|all\s+scores?|overall\s+routine|across\s+my\s+concerns?|big\s+picture|whole\s+face|everything)\b/i.test(
      n,
    ) || /\bgeneral\b/i.test(n);
  const explicitSingle =
    /\b(targeted\s+routine|specific\s+routine|single\s+concern|this\s+concern|that\s+concern|focused\s+routine|just\s+this|only\s+this|only\s+one|narrow\s+focus)\b/i.test(n) ||
    /\b(this|that)\s+one\b/i.test(n) ||
    /\btargeted\b/i.test(n) ||
    /\bspecific\b/i.test(n);

  if (explicitAll && !explicitSingle) return "all";
  if (explicitSingle && !explicitAll) return "single";

  if (lockedConcernId) {
    const concern = SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === lockedConcernId);
    if (concern) {
      const titleLc = concern.title.toLowerCase();
      const compact = n.replace(/[^a-z0-9]+/g, "");
      const titleCompact = titleLc.replace(/[^a-z0-9]+/g, "");
      if (titleCompact.length > 3 && compact.includes(titleCompact)) return "single";
      const words = titleLc
        .split(/[^a-z0-9]+/)
        .map((w) => w.trim())
        .filter((w) => w.length > 2);
      for (const w of words) {
        if (n.includes(w)) return "single";
      }
    }
    if (explicitAll) return "all";
    if (explicitSingle) return "single";
    if (/\b(routine|regimen|recommend|recommendation|products?|show|go|please)\b/i.test(n)) return "single";
    if (/^(y|yes|yeah|yep|sure|ok|okay|please)\b/i.test(n)) return "single";
    return null;
  }

  if (explicitAll) return "all";
  if (explicitSingle) return "single";
  if (/\b(all|overall)\b/i.test(n)) return "all";
  if (/\b(this concern|that concern|focused|focus|just this)\b/i.test(n)) return "single";
  if (/\b(routine|regimen|recommend|recommendation|products?)\b/i.test(n)) return "all";
  return null;
}

function isNewRoutineShortcut(text) {
  return /\bnew\s+routine\b/i.test(normalizeUserReply(text));
}

/** Typed “VTO” alone opens full try-on with the chat shortcut placeholder face. */
function isVtoChatShortcut(text) {
  return normalizeUserReply(text) === "vto";
}

/** Typed “shortcut” in Skin Diag skips scan/quiz and drops mock results into chat. */
function isSkinDiagResultsShortcut(text) {
  return normalizeUserReply(text) === "shortcut";
}

function vtoChatShortcutAssistantHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 10px">Opening <strong>Virtual Try-On</strong> with the sample photo—use shades, the before/after slider, and the view toggle as usual.</p>
    <p style="margin:0">Say <strong>VTO</strong> again anytime to jump back here with the same demo face.</p>
  </div>`;
}

/** Clears persisted session selfie when it is a blob URL (before replacing with an asset path). */
function releasePersistedSelfieBlobIfAny() {
  const u = sessionPersistedSelfieUrl;
  if (u && u.startsWith("blob:")) {
    URL.revokeObjectURL(u);
  }
  sessionPersistedSelfieUrl = null;
}

/** Opens the full-screen try-on panel from chat using {@link VTO_CHAT_SHORTCUT_SELFIE}. */
function launchVtoTryOnFromChatShortcut() {
  releasePersistedSelfieBlobIfAny();
  revokeVtoSelfiePreview();
  sessionPersistedSelfieUrl = VTO_CHAT_SHORTCUT_SELFIE;
  vtoSelfiePreviewUrl = null;
  tryOnFromChatSingleProduct = false;
  skinDiagFlowActive = false;
  vtoSkinBrandExperienceActive = false;
  applySelfieStubSkinDiagUi(false);
  if (!vtoSelectedProductKey) {
    vtoSelectedProductKey = { tier: "luxury", index: 0, catalog: "lips" };
  }
  tryOnUseReferenceModel = false;
  prepareVtoShellVisible();
  showVtoTryOn();
}

function budgetTierClarifyHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I am not quite sure which lane you want yet—and that is completely fine.</p>
    <p style="margin:0">Reply in the chat in whatever way feels natural. For <strong>luxury</strong>, you might say “luxury,” “luxe,” “premium,” or “happy to splurge.” For <strong>budget-friendly</strong>, phrases like “drugstore,” “affordable,” “save a bit,” or “lower price” all work. Pick one direction and I will pull your shortlist.</p>
  </div>`;
}

function tryOnConfirmClarifyHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I want to be sure I open try-on at the right moment—could you give me a quick signal in your own words?</p>
    <p style="margin:0">A <strong>yes</strong> might sound like “yes,” “sure,” “go ahead,” “continue,” “please open it,” or “I am ready.” If you would rather stay in chat for now, something like <strong>“not now,” “later,”</strong> or <strong>“no thanks”</strong> is perfect.</p>
  </div>`;
}

/** @param {ProductCatalogId} catalog @param {'luxury'|'budget'} tier */
function getProductList(catalog, tier) {
  if (catalog === "foundation") return FOUNDATION_PRODUCTS[tier];
  return PRODUCTS[tier];
}

function isFoundationRequest(text) {
  return /\b(foundations?|foundation\b|skin tint|tinted moisturizer|bb\s*cream|cc\s*cream|complexion product)\b/i.test(text);
}

const NAMED_TRY_ON_INTENT = /\b(try\s*on|virtual\s*try[\s-]?on)\b/i;

function normalizeCatalogMention(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\u2013|\u2014/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * User names an exact catalog title + shade and asks to try it on.
 * @returns {{ tier: 'luxury'|'budget'; index: number; catalog: ProductCatalogId } | null}
 */
function matchNamedProductTryOnRequest(text) {
  if (!NAMED_TRY_ON_INTENT.test(text)) return null;
  const n = normalizeCatalogMention(text);
  /** @type {ProductCatalogId[]} */
  const catalogs = ["lips", "foundation"];
  for (const catalog of catalogs) {
    for (const tier of /** @type {const} */ (["luxury", "budget"])) {
      const list = getProductList(catalog, tier);
      for (let i = 0; i < list.length; i += 1) {
        const p = list[i];
        const t = normalizeCatalogMention(p.title);
        const sh = normalizeCatalogMention(p.shadeLabel);
        if (!t || !sh) continue;
        if (n.includes(t) && n.includes(sh)) {
          return { tier, index: i, catalog };
        }
      }
    }
  }
  return null;
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function namedTryOnConfirmAssistantHtml(p) {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">That is a great pick—<strong>${escapeHtml(p.title)}</strong> in <strong>${escapeHtml(
    p.shadeLabel,
  )}</strong> is in our try-on catalog, and I would love to help you see it on you.</p>
    <p style="margin:0 0 12px">Next is the <strong>Makeup Try-On</strong> experience. If we have already covered the privacy step or a selfie in this chat, I will skip ahead where I can; otherwise I will walk you through the quick setup.</p>
    <p style="margin:0">When you are ready for me to open try-on, send a short message here—<strong>“yes,” “sure,” “go ahead,” “continue,”</strong> or <strong>“I am ready”</strong> all work. If you want to pause, just say something like <strong>“not now”</strong> or <strong>“later.”</strong></p>
  </div>`;
}

function starSvg(filled) {
  const cls = filled ? "star" : "star star--muted";
  return `<svg class="${cls} lucide" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.906l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.43a2.12 2.12 0 0 0-1.973 0l-4.618 2.43a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.756a2.12 2.12 0 0 0 1.605-1.164z"
      fill="${filled ? "currentColor" : "none"}"
      stroke="${filled ? "none" : "currentColor"}"
      stroke-width="${filled ? 0 : 1.5}"
      stroke-linejoin="round"
    />
  </svg>`;
}

function ratingRowHTML(p) {
  const r = p.rating;
  const filled = Math.min(5, Math.max(0, Math.round(r)));
  const stars = [];
  for (let i = 0; i < 5; i += 1) stars.push(starSvg(i < filled));
  const starsHtml = stars.join("");
  return `
    <div class="rating-row">
      <span class="rating-row__stars">${starsHtml}</span>
      <span>${r.toFixed(1)}</span>
      <span aria-hidden="true">/</span>
      <span>5</span>
      <span class="rating-row__count">(${escapeHtml(p.ratingCount)})</span>
    </div>`;
}

function tagsHTML(tags) {
  return tags
    .map(
      (t) => `
    <span class="tag-chip">
      ${escapeHtml(t.label)}
    </span>`,
    )
    .join("");
}

/** @param {string} brand */
function productCardBrandPrefix(brand) {
  if (brand === "Yves Saint Laurent") return "YSL";
  return brand;
}

function productCardHTML(p, tier, index, catalog = "lips") {
  const brandAttr = p.brand === "Maybelline" ? ` data-brand="maybelline"` : "";
  const cardTitle = `${productCardBrandPrefix(p.brand)} ${p.title}`.trim();
  return `
    <article class="product-card" aria-label="${escapeAttr(cardTitle)}" data-tier="${tier}" data-product-index="${index}" data-catalog="${catalog}"${brandAttr}>
      <div class="product-card__header" aria-hidden="true"></div>
      <div class="product-card__content">
        <div class="product-card__media">
          <img class="product-card__photo" src="${escapeAttr(p.cardImage)}" alt="${escapeAttr(p.title)}" width="120" height="120" loading="lazy" decoding="async" />
        </div>
        <h3 class="product-card__title">${escapeHtml(cardTitle)}</h3>
        <div class="product-card__tag-row">
          <span class="tag-chip product-card__shade-tag">
            <span class="tag-chip__dot" style="background:${escapeAttr(p.swatch)};"></span>
            ${escapeHtml(p.shadeLabel)}
          </span>
        </div>
      </div>
      <div class="product-card__footer">
        <button type="button" class="btn-primary-lg product-card__btn-primary vto-open">
          <span>Virtual Try-On</span>
          <img class="product-card__vto-mirror-icon" src="${VTO_MIRROR_SRC}" width="20" height="20" alt="" aria-hidden="true" decoding="async" />
        </button>
        <button type="button" class="product-card__learn" aria-label="Learn more about ${escapeAttr(cardTitle)}">Learn more</button>
      </div>
    </article>`;
}

function carouselDotsHTML(count, activeIndex) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    parts.push(`<span${i === activeIndex ? ' class="is-active"' : ""}></span>`);
  }
  return `<div class="carousel-dots" role="tablist" aria-label="Slides">${parts.join("")}</div>`;
}

/** @param {string} imageUrl */
function skinDiagResultsPeekInlineHtml(imageUrl) {
  return `<button type="button" class="skin-diag-results-peek skin-diag-results-peek--inline" data-skin-diag-results-reopen aria-label="Open your skin diagnosis results">
    <span class="skin-diag-results-peek__thumb-wrap">
      <img class="skin-diag-results-peek__img" src="${escapeAttr(imageUrl)}" alt="" width="44" height="44" decoding="async" />
    </span>
    <span class="skin-diag-results-peek__copy">
      <strong class="skin-diag-results-peek__title">Skin results</strong>
      <span class="skin-diag-results-peek__sub">Tap to reopen</span>
    </span>
  </button>`;
}

/**
 * @param {{ title: string, blurb: string } | null} concern
 * @param {{ showSkinResultsShortcut?: boolean }} [opts] When true, appends reopen control (uses {@link skinDiagResultsPeekUrl}).
 */
function skinRoutinePromptHtml(concern, opts = {}) {
  const concernLabel = concern ? concern.title : "your skin concern";
  const concernBlurb = concern ? concern.blurb : "I can break this down in plain language and tailor the next steps.";
  const peek =
    opts.showSkinResultsShortcut && skinDiagResultsPeekUrl
      ? skinDiagResultsPeekInlineHtml(skinDiagResultsPeekUrl)
      : "";
  return `<div class="assistant-text">
    <p style="margin:0 0 10px"><strong>${escapeHtml(concernLabel)}</strong> is one of your highlighted areas.</p>
    <p style="margin:0 0 12px">${escapeHtml(concernBlurb)}</p>
    <p style="margin:0">Want a <strong>general routine</strong> (for example <strong>top concerns</strong>, <strong>all concerns</strong>, or <strong>general routine</strong>) across your scores, or a <strong>targeted routine</strong> focused on this one? Reply naturally—<strong>targeted</strong>, <strong>this concern only</strong>, or naming the concern works for targeted; <strong>general</strong> or <strong>all concerns</strong> keeps the full picture.</p>
  </div>${peek}`;
}

function getSkinRoutineHeroImage() {
  const selfie = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
  if (selfie) return selfie;
  if (skinRoutineFallbackImageUrl) return skinRoutineFallbackImageUrl;
  const pool = ["assets/tryon-reference-model.png", "assets/ysl-1.jpg", "assets/ysl-2.jpg", "assets/mny-2.jpg"];
  skinRoutineFallbackImageUrl = pool[Math.floor(Math.random() * pool.length)];
  return skinRoutineFallbackImageUrl;
}

/** @param {{ title:string, score:number, scoreMax?: number, severity?: string }[]} top3 */
function skinRoutineHeroCardHTML(top3) {
  const imageUrl = getSkinRoutineHeroImage();
  const metricsClass = top3.length === 1 ? " skin-routine-hero__metrics--single" : "";
  const r = 22;
  const circum = 2 * Math.PI * r;
  const bubbles = top3
    .map((c) => {
      const max = c.scoreMax ?? 40;
      const pct = Math.min(1, c.score / max);
      const dash = circum * pct;
      const sev = skinRoutineDisplaySeverity(c.score, max, c.severity);
      return `
      <div class="skin-routine-hero__metric">
        <div class="skin-routine-hero__ring" aria-hidden="true">
          <svg class="skin-routine-hero__ring-svg" viewBox="0 0 56 56" width="72" height="72">
            <circle class="skin-routine-hero__ring-track" cx="28" cy="28" r="${r}" fill="none" stroke-width="5" />
            <circle class="skin-routine-hero__ring-progress" cx="28" cy="28" r="${r}" fill="none" stroke-width="5"
              stroke-dasharray="${dash} ${circum}" stroke-linecap="round" transform="rotate(-90 28 28)" />
          </svg>
          <span class="skin-routine-hero__ring-num">${c.score}</span>
        </div>
        <p class="skin-routine-hero__metric-severity">${escapeHtml(sev)}</p>
        <p class="skin-routine-hero__metric-title">${escapeHtml(c.title)}</p>
      </div>`;
    })
    .join("");
  return `
    <article class="skin-routine-hero-card">
      <div class="skin-routine-hero__image-wrap">
        <img class="skin-routine-hero__image" src="${escapeAttr(imageUrl)}" alt="" decoding="async" />
        <h3 class="skin-routine-hero__title">Your Curated Routine</h3>
      </div>
      <div class="skin-routine-hero__metrics${metricsClass}">${bubbles}</div>
      <div class="skin-routine-hero__footer">
        <button type="button" class="btn-primary-lg skin-routine-hero__cta" data-routine-see>See routine</button>
      </div>
    </article>`;
}

/** @param {typeof SKIN_ROUTINE_STEPS[number]} step @param {number} index @param {number} total */
function skinRoutineStepCardHTML(step, index, total) {
  const panel = (mode, data) => `
    <div class="skin-routine-product-panel" data-routine-panel="${mode}"${mode === "night" ? " hidden" : ""}>
      <article class="product-card skin-routine-product-card">
        <div class="product-card__header">
          <span class="skin-routine-product-card__match">${data.match}% match</span>
        </div>
        <div class="product-card__content">
          <div class="product-card__media">
            <img class="product-card__photo" src="${escapeAttr(data.image)}" alt="" width="120" height="120" loading="lazy" decoding="async" />
          </div>
          <p class="skin-routine-product-card__brand">${escapeHtml(data.brand)}</p>
          <h3 class="product-card__title">${escapeHtml(data.title)}</h3>
          <div class="product-card__tag-row">
            ${data.tags.map((t) => `<span class="tag-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
        <div class="product-card__footer">
          <button type="button" class="btn-primary-lg product-card__btn-primary skin-routine-product-card__cta" data-routine-unpack data-routine-unpack-step="${index}" data-routine-unpack-mode="${mode}">
            <span>Unpack my match</span>
            <span class="skin-routine-product-card__cta-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17 17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </article>
    </div>`;
  return `
    <div class="skin-routine-slide" data-step-label="${escapeAttr(step.step)}" data-step-part="${index + 1}" data-step-total="${total}">
      ${panel("day", step.day)}
      ${panel("night", step.night)}
    </div>`;
}

/** @param {'single'|'all'} mode @param {string|null} concernId */
function buildSkinRoutineCarouselBlock(mode, concernId) {
  const mapHero = (c) => ({ title: c.title, score: c.score, scoreMax: c.scoreMax, severity: c.severity });
  const top3 =
    mode === "single" && concernId
      ? (() => {
          const one = SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === concernId);
          return one ? [mapHero(one)] : [...SKIN_DIAG_FAKE_CONCERNS].sort((a, b) => b.score - a.score).slice(0, 3).map(mapHero);
        })()
      : [...SKIN_DIAG_FAKE_CONCERNS].sort((a, b) => b.score - a.score).slice(0, 3).map(mapHero);
  const focus = concernId ? SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === concernId) : null;
  const introHtml = skinRoutineHeroCardHTML(top3);
  const total = SKIN_ROUTINE_STEPS.length;
  const slideParts = [];
  for (let i = 0; i < total; i += 1) {
    slideParts.push(skinRoutineStepCardHTML(SKIN_ROUTINE_STEPS[i], i, total));
  }
  const followUpHtml =
    mode === "single" && focus
      ? `<div class="assistant-text" style="margin-top:14px">
    <p style="margin:0 0 10px">I matched these steps to your profile with extra weight on <strong>${escapeHtml(focus.title)}</strong>, so the flow stays coherent without stacking conflicting actives.</p>
    <p style="margin:0">If you would rather bias toward different brands, textures, or price points, tell me what you are optimizing for and I can suggest alternates for any slot.</p>
  </div>`
      : `<div class="assistant-text" style="margin-top:14px">
    <p style="margin:0 0 10px">I mapped cleanse, treat, moisturize, and a finishing SPF to your top scores so the lineup reads sensibly from a formulation angle—not only “what is trending.”</p>
    <p style="margin:0">If you want parallel picks (gentler options, drugstore equivalents, or a splurge upgrade in one step), say what you would like to lean into and we can swap ideas.</p>
  </div>`;
  return `
    <div class="vto-attribution skin-routine-attribution">
      <span class="vto-attribution__icon"><img src="${SKIN_DIAG_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Skin Diag</span>
    </div>
    <section class="skin-routine-widget" data-skin-routine-widget data-mode="day">
      <div class="skin-routine-widget__stage">
        <div class="skin-routine-widget__panels">
          <div class="skin-routine-widget__panel skin-routine-widget__panel--intro" data-routine-intro aria-hidden="false">
            ${introHtml}
          </div>
          <div class="skin-routine-widget__panel skin-routine-widget__panel--routine" data-routine-routine aria-hidden="true">
            <div class="skin-routine-routine-inner">
              <div class="skin-routine-widget__chrome" data-routine-chrome>
                <div class="skin-routine-widget__toggle" role="tablist" aria-label="Routine mode">
                  <button type="button" class="skin-routine-widget__toggle-btn is-active" data-routine-toggle="day" aria-selected="true">Day</button>
                  <button type="button" class="skin-routine-widget__toggle-btn" data-routine-toggle="night" aria-selected="false">Night</button>
                </div>
                <div class="skin-routine-widget__step-row">
                  <h3 class="skin-routine-widget__step-title" data-routine-step-label>Cleanse</h3>
                  <span class="skin-routine-widget__step-index" data-routine-step-index>1/${total}</span>
                </div>
              </div>
              <div class="product-carousel skin-routine-carousel" data-product-carousel>
                <div class="product-carousel__strip">
                  <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous routine cards">
                    <svg class="lucide lucide--16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </button>
                  <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next routine cards">
                    <svg class="lucide lucide--16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </button>
                  <div class="slide-row">${slideParts.join("")}</div>
                </div>
                ${carouselDotsHTML(total, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${followUpHtml}`;
}

function convActionsHTML() {
  const icon = (paths, label) =>
    `<button type="button" aria-label="${label}">${LUC.svg(16, paths)}</button>`;
  const s = LUC.stroke;
  return `
    <div class="conv-actions">
      ${icon(
        `<rect width="14" height="14" x="8" y="8" rx="2" ry="2" ${s}/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" ${s}/>`,
        "Copy",
      )}
      ${icon(
        `<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" ${s}/><path d="M19 10v2a7 7 0 0 1-14 0v-2" ${s}/><path d="M12 19v3" ${s}/><path d="M8 22h8" ${s}/>`,
        "Read aloud",
      )}
      ${icon(
        `<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" ${s}/><path d="M7 10v12" ${s}/>`,
        "Good response",
      )}
      ${icon(
        `<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" ${s}/><path d="M17 14V2" ${s}/>`,
        "Bad response",
      )}
      ${icon(
        `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" ${s}/><path d="M21 3v5h-5" ${s}/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" ${s}/><path d="M8 16H3v5" ${s}/>`,
        "Regenerate",
      )}
      ${icon(
        `<circle cx="18" cy="5" r="3" ${s}/><circle cx="6" cy="12" r="3" ${s}/><circle cx="18" cy="19" r="3" ${s}/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" ${s}/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" ${s}/>`,
        "Share",
      )}
    </div>`;
}

/**
 * @param {'luxury'|'budget'} tier
 * @param {typeof PRODUCTS.luxury} list
 * @param {string} modelResponseInnerHtml
 * @param {ProductCatalogId} catalog
 */
function buildProductCarouselBlock(tier, list, modelResponseInnerHtml, catalog) {
  const cards = list.map((p, i) => productCardHTML(p, tier, i, catalog)).join("");

  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon"><img src="${VTO_TRYON_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Makeup Try-On</span>
    </div>
    <div class="product-carousel" data-product-carousel>
      <div class="product-carousel__strip">
        <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous products">
          ${chevronCarouselSvg("prev")}
        </button>
        <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next products">
          ${chevronCarouselSvg("next")}
        </button>
        <div class="slide-row" role="list">${cards}</div>
      </div>
      ${carouselDotsHTML(list.length, 0)}
    </div>
    <div class="model-response">${modelResponseInnerHtml}${oppositeLaneInviteHtml(tier, catalog)}</div>
    ${convActionsHTML()}
  `;
}

function buildCarousel(label, switched = false) {
  const tier = tierKeyFromLabel(label);
  return buildProductCarouselBlock(tier, PRODUCTS[tier], lipResultsCopyForCarousel(tier, { switched }), "lips");
}

/** @param {'luxury'|'budget'} tier */
function foundationResultsCopy(tier) {
  const isLux = tier === "luxury";
  const vibe = isLux
    ? "I loaded a few <strong>luxe</strong> foundation ideas—finishes from sheer tint to full matte—still in the <strong>luxury</strong> lane you picked earlier."
    : "I loaded a few <strong>budget-friendly</strong> foundation picks—strong shade ranges—still in the <strong>budget-friendly</strong> lane you picked earlier.";
  return `
    <p style="margin:0 0 10px">${vibe} <span aria-hidden="true">🧴</span></p>
    <p style="margin:0">Tap <strong>Virtual Try-On</strong> on a card to keep comparing, or tell me your undertone, coverage, and finish and I will narrow this down further.</p>
  `;
}

/** @param {'luxury'|'budget'} tier @param {boolean} [switched] */
function buildFoundationCarouselBlock(tier, switched = false) {
  return buildProductCarouselBlock(
    tier,
    FOUNDATION_PRODUCTS[tier],
    foundationResultsCopyForCarousel(tier, { switched }),
    "foundation",
  );
}

function resultsCopy(label) {
  const isLux = label === "Luxury";
  if (isLux) {
    return `
      <p style="margin:0 0 10px">I loaded a few <strong>luxe</strong> lip options—gloss, satin, and matte finishes—in the <strong>pinky nude</strong> family you asked about. <span aria-hidden="true">💄</span></p>
      <p style="margin:0">On any card, tap <strong>Virtual Try-On</strong> to compare finishes and undertones live.</p>
    `;
  }
  return `
    <p style="margin:0 0 10px">I loaded a few <strong>budget-friendly</strong> lip options—gloss, liquid matte, and satin—easy ways to try pinky nudes. <span aria-hidden="true">💄</span></p>
    <p style="margin:0">Use <strong>Virtual Try-On</strong> on a card to see how each reads on you.</p>
  `;
}

function buildResultsBlock(label, switched = false) {
  return buildCarousel(label, switched);
}

const MATCH_PLUGINS = [
  {
    id: /** @type {MatchBrand} */ ("lrp"),
    token: "@La Roche-Posay",
    name: "La Roche-Posay",
    aliases: ["la roche posay", "larocheposay", "lrp"],
  },
  {
    id: /** @type {MatchBrand} */ ("cerave"),
    token: "@CeraVe",
    name: "CeraVe",
    aliases: ["cerave", "cera ve"],
  },
  {
    id: /** @type {MatchBrand} */ ("lancome"),
    token: "@Lancôme",
    name: "Lancôme",
    aliases: ["lancome", "lancôme", "lancome paris", "lancôme paris"],
  },
];

/** @param {string} text */
function hasMatchMention(text) {
  return MATCH_PLUGINS.some((plugin) => text.toLowerCase().includes(plugin.token.toLowerCase()));
}

/** @param {string} text */
function stripMatchMentions(text) {
  let out = text;
  for (const plugin of MATCH_PLUGINS) {
    const re = new RegExp(`${plugin.token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    out = out.replace(re, " ");
  }
  return out.replace(/\s+/g, " ").trim();
}

/** @param {string} text */
function detectNamedMatchBrand(text) {
  if (!text) return null;
  if (/@Lancôme\b/i.test(text) || /@Lancome\b/i.test(text) || /\blanc[oô]me\b/i.test(text)) {
    return /** @type {MatchBrand} */ ("lancome");
  }
  if (/@CeraVe\b/i.test(text) || /\bcera[\s-]*ve\b/i.test(text)) return /** @type {MatchBrand} */ ("cerave");
  if (/@La Roche-Posay\b/i.test(text) || /\bla\s*roche[\s-]*posay\b/i.test(text) || /\blrp\b/i.test(text)) {
    return /** @type {MatchBrand} */ ("lrp");
  }
  return null;
}

/** @param {string} text */
function isDifferentBrandAsk(text) {
  return (
    /\b(different|another|other|switch(?:ing)?|instead|alternative)\b.{0,28}\bbrands?\b/i.test(text) ||
    /\bbrands?\b.{0,28}\b(different|another|other|instead|please|switch)\b/i.test(text) ||
    /\b(switch\s+brands?|try\s+a\s+different\s+brand|not\s+la\s*roche)\b/i.test(text)
  );
}

/**
 * @param {string} text
 * @param {{ lrpCategory?: LrpCategoryId } | undefined} promptMeta
 * @returns {LrpCategoryId | null}
 */
function isLrpProductAsk(text) {
  if (/\b(la\s*roche(?:[-\s]?posay)?|\blrp\b|cera[\s-]*ve|lanc[oô]me|skincare|skin\s*care)\b/i.test(text)) return true;
  if (isDifferentBrandAsk(text)) return true;
  const asking = /\b(recommend|looking for|need a|what should i use|find me|show me)\b/i.test(text);
  const skincare = /\b(dermatolog|routine|moisturi|serum|spf|cleanser|cream|balm|lotion|toner|mist|acne|redness)\b/i.test(
    text,
  );
  return asking && skincare;
}

/** @param {string} text */
function detectLrpProductType(text) {
  for (const [id, re] of LRP_TYPE_PATTERNS) {
    if (re.test(text)) return id;
  }
  return null;
}

/** @param {string} text */
function detectLrpConcerns(text) {
  /** @type {LrpConcern[]} */
  const hits = [];
  for (const [id, re] of LRP_CONCERN_PATTERNS) {
    if (re.test(text) && !hits.includes(id)) hits.push(id);
  }
  return hits;
}

function detectLrpCategory(text, promptMeta) {
  if (promptMeta?.lrpCategory) return promptMeta.lrpCategory;
  const typeId = detectLrpProductType(text);
  if (typeId) return typeId;
  if (!lrpLastCategory) {
    for (const [id, re] of LRP_CONCERN_CATEGORY_PATTERNS) {
      if (re.test(text)) return id;
    }
    if (isLrpProductAsk(text)) return "bestsellers";
  }
  return null;
}

/** @param {LrpConcern[]} concerns */
function defaultCategoryForConcerns(concerns) {
  if (concerns.includes("acne")) return "acne";
  if (concerns.includes("eczema")) return "body";
  if (concerns.includes("redness")) return "redness";
  if (concerns.includes("pigment") || concerns.includes("aging")) return "serum";
  return "moisturizer";
}

/** @param {LrpProduct} p */
function lrpCategoriesForProduct(p) {
  /** @type {Set<LrpCategoryId>} */
  const set = new Set();
  const brand = productMatchBrand(p);
  for (const [cat, ids] of Object.entries(categoryIdsForBrand(brand))) {
    if (ids.includes(p.id)) set.add(/** @type {LrpCategoryId} */ (cat));
  }
  const fromKind = LRP_KIND_TO_CATEGORY[p.kind];
  if (fromKind) set.add(fromKind);
  return set;
}

/** @param {LrpCategoryId} category */
function lrpExpandedProducts(category) {
  const catalog = catalogForBrand();
  if (category === "bestsellers") return Object.values(catalog);
  const seen = new Set();
  /** @type {LrpProduct[]} */
  const out = [];
  for (const p of Object.values(catalog)) {
    if (seen.has(p.id)) continue;
    if (lrpCategoriesForProduct(p).has(category)) {
      seen.add(p.id);
      out.push(p);
    }
  }
  return out;
}

/** @param {LrpProduct} p @param {LrpConcern} concern */
function lrpWarningBlocksConcern(p, concern) {
  const warning = (p.warning || "").toLowerCase();
  if (!warning) return false;
  if (concern === "sensitive" && /sensitive/.test(warning)) return true;
  return false;
}

/** @param {LrpProduct} p @param {LrpConcern} concern */
function lrpProductFitsConcern(p, concern) {
  if (lrpWarningBlocksConcern(p, concern)) return 0;
  const claims = claimsForProduct(p);
  const tagged = claims.includes(concern);
  const haystack = [p.title, p.kind, ...(p.tags || []), p.description].join(" ");
  const fromCopy = LRP_CONCERN_CLAIM_RES[concern]?.test(haystack) ?? false;
  if (tagged) return 3;
  if (fromCopy) return 2;
  return 0;
}

const LRP_RELATED_CONCERNS = /** @type {Partial<Record<LrpConcern, LrpConcern[]>>} */ ({
  oily: ["combination"],
  combination: ["oily"],
  dry: ["dehydrated"],
  dehydrated: ["dry"],
  sensitive: ["redness"],
  redness: ["sensitive"],
});

/** @param {LrpProduct} p @param {LrpConcern[]} concerns */
function lrpScoreProductForConcerns(p, concerns) {
  let score = 0;
  for (const concern of concerns) {
    if (lrpWarningBlocksConcern(p, concern)) return -1;
    let part = lrpProductFitsConcern(p, concern);
    if (part === 0) {
      for (const related of LRP_RELATED_CONCERNS[concern] || []) {
        const relatedScore = lrpProductFitsConcern(p, related);
        if (relatedScore) {
          part = 1;
          break;
        }
      }
    }
    score += part;
  }
  return score;
}

/**
 * @param {LrpCategoryId} category
 * @param {LrpConcern[]} concerns
 * @returns {{ category: LrpCategoryId, products: LrpProduct[], widened: boolean }}
 */
function narrowLrpRecommendations(category, concerns) {
  const rank = (/** @type {LrpProduct[]} */ pool) =>
    pool
      .map((p) => ({ p, score: lrpScoreProductForConcerns(p, concerns) }))
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score || b.p.match - a.p.match)
      .map((row) => row.p);

  const inCategory = rank(lrpExpandedProducts(category));
  if (inCategory.length) return { category, products: inCategory.slice(0, 3), widened: false };

  const fallbackCat = defaultCategoryForConcerns(concerns);
  if (fallbackCat !== category) {
    const widened = rank(lrpExpandedProducts(fallbackCat));
    if (widened.length) return { category: fallbackCat, products: widened.slice(0, 3), widened: true };
  }

  const any = rank(Object.values(catalogForBrand()));
  return { category, products: any.slice(0, 3), widened: any.length > 0 };
}

/** @param {LrpConcern[]} concerns */
function formatLrpConcerns(concerns) {
  const labels = concerns.map((id) => LRP_CONCERN_LABELS[id] || id);
  if (labels.length <= 1) return labels[0] || "your skin";
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

/** @param {LrpProduct[]} products */
function formatLrpProductNames(products) {
  const names = products.map((p) => `<strong>${escapeHtml(p.title)}</strong>`);
  if (names.length <= 1) return names[0] || "these options";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

/**
 * @param {LrpProduct[]} products
 * @param {LrpConcern[]} concerns
 * @param {LrpCategoryId} category
 * @param {boolean} widened
 */
function buildLrpRefineLead(products, concerns, category, widened) {
  const named = formatLrpProductNames(products);
  const concernText = formatLrpConcerns(concerns);
  const catLabel = LRP_CATEGORY_LABELS[category] || "products";
  if (widened) {
    return `I looked through that last category for a strong ${matchBrandName()} claim around ${concernText} and didn't really find one, so I widened it. These are the ${catLabel} they do position for that: ${named}.`;
  }
  return `Okay — I filtered the ${catLabel} to the ones ${matchBrandName()} actually positions for ${concernText}: ${named}. That's a tighter list than the popular set, based on what they claim those formulas are for.`;
}

/**
 * First recos when the user's message already named a concern.
 * @param {LrpProduct[]} products
 * @param {LrpConcern[]} concerns
 * @param {LrpCategoryId} category
 * @param {boolean} widened
 */
function buildLrpTargetedLead(products, concerns, category, widened) {
  const named = formatLrpProductNames(products);
  const concernText = formatLrpConcerns(concerns);
  const catLabel = LRP_CATEGORY_LABELS[category] || "products";
  if (widened) {
    return `You mentioned ${concernText}, so I didn't want to just show generic bestsellers. I didn't have a strong match in that last category, so I loaded ${catLabel} they position to address it: ${named}.`;
  }
  return `You mentioned ${concernText}, so I skipped the generic popular list and loaded ${catLabel} ${matchBrandName()} actually positions for that: ${named}. That's usually a better starting point than guessing.`;
}

/** @typedef {(typeof LRP_CATALOG)[string]} LrpProduct */

/** @param {LrpProduct} p */
function lrpProductMediaHTML(p) {
  return p.image
    ? `<img class="lrp-card__photo" src="${escapeAttr(p.image)}" alt="" decoding="async" />`
    : `<span class="lrp-card__placeholder" aria-hidden="true"><span class="lrp-card__placeholder-cap"></span><span class="lrp-card__placeholder-body"><span class="lrp-card__placeholder-label"></span></span></span>`;
}

/** @param {LrpProduct} p */
function lrpProductTagsHTML(p) {
  return (p.tags || []).map((t) => `<span class="lrp-card__tag">${escapeHtml(t)}</span>`).join("");
}

/** @param {string} id */
function findLrpProduct(id) {
  return LRP_CATALOG[id] || CERAVE_CATALOG[id] || LANCOME_CATALOG[id] || null;
}

function lrpCtaArrowSVG() {
  const s = LUC.stroke;
  return LUC.svg(20, `<path d="M5 12h14" ${s}/><path d="m12 5 7 7-7 7" ${s}/>`);
}

/** @param {MatchBrand | string | null | undefined} brand */
function lrpHasCompletedMatchForBrand(brand) {
  return Boolean(brand) && lrpMatchedBrands.has(brand);
}

/** @param {LrpProduct | null | undefined} p */
function lrpHasMatchResult(p) {
  return lrpHasCompletedMatchForBrand(productMatchBrand(p));
}

/** @param {LrpProduct | null | undefined} p */
function markLrpBrandMatchComplete(p) {
  if (!p) return;
  lrpMatchedBrands.add(productMatchBrand(p));
  if (p.id) lrpMatchedIds.add(p.id);
}

function lrpMatchIsHigh(match) {
  return Number.isFinite(match) && match >= LRP_MATCH_THRESHOLD;
}

/** Green pills are only for scores at or above {@link LRP_MATCH_THRESHOLD}. */
function syncLrpMatchScorePills(match) {
  const high = lrpMatchIsHigh(match);
  if (el.lrpResultMatchPill) el.lrpResultMatchPill.classList.toggle("lrp-match-pill--low", !high);
  if (el.lrpMatchCardPill) el.lrpMatchCardPill.classList.toggle("lrp-match-pill--low", !high);
}

/** @param {number} match @param {{ extraClass?: string, suffix?: string }} [opts] */
function lrpMatchChipHTML(match, opts = {}) {
  if (!Number.isFinite(match)) return "";
  const extra = opts.extraClass || "lrp-card__match";
  const suffix = opts.suffix == null ? " match" : opts.suffix;
  const cls = `${lrpMatchIsHigh(match) ? "lrp-match-pill" : "vto-skin-report__match"} ${extra}`.trim();
  return `<span class="${cls}">${match}%${suffix}</span>`;
}

/** @param {LrpProduct} p */
function lrpProductCtaHTML(p) {
  const seen = lrpHasMatchResult(p);
  const label = seen ? "See my match score" : "Check if it's a match";
  const aria = seen ? `See your match score for ${p.title}` : `Check if ${p.title} is a match`;
  const cardBrand = productMatchBrand(p);
  const ctaMod =
    cardBrand === "cerave" ? " lrp-card__cta--cerave" : cardBrand === "lancome" ? " lrp-card__cta--lancome" : "";
  return `<button type="button" class="lrp-card__cta${ctaMod}" data-lrp-test-match aria-label="${escapeAttr(aria)}">
      ${escapeHtml(label)} ${lrpCtaArrowSVG()}
    </button>`;
}

/** @param {LrpProduct} p */
function lrpProductCardHTML(p) {
  const seen = lrpHasMatchResult(p);
  const matchTag = seen ? lrpMatchChipHTML(p.match) : "";
  const badge = p.badge ? `<span class="lrp-card__badge">${escapeHtml(p.badge)}</span>` : "<span></span>";
  return `<article class="product-card lrp-card${seen ? " is-matched" : ""}" role="listitem" data-lrp-product="${escapeAttr(p.id)}">
    <div class="lrp-card__header">${badge}${matchTag}</div>
    <div class="lrp-card__content">
      <div class="lrp-card__media">${lrpProductMediaHTML(p)}</div>
      <h3 class="lrp-card__title" title="${escapeAttr(p.title)}">${escapeHtml(p.title)}</h3>
      <div class="lrp-card__tags">${lrpProductTagsHTML(p)}</div>
    </div>
    <div class="lrp-card__footer">
      ${lrpProductCtaHTML(p)}
      <button type="button" class="lrp-card__learn" data-lrp-learn-more aria-label="Learn more about ${escapeAttr(p.title)}">Learn More</button>
    </div>
  </article>`;
}

/** @type {Record<LrpCategoryId, string>} */
const LRP_RESPONSE_LEADS = {
  moisturizer:
    "I pulled a few La Roche-Posay moisturizers that people actually use as daily staples — not a full routine, just a sensible shortlist. <strong>Toleriane Double Repair</strong> is the all-rounder: ceramides and niacinamide, so it tends to work across a lot of skin types. <strong>Hydraphase HA Light</strong> is the hyaluronic gel-cream if you want hydration without a heavy cream feel, and <strong>Cicaplast Baume B5+</strong> is more of a rescue cream when skin is dry or irritated.",
  cleanser:
    "Here are a few La Roche-Posay cleansers that cover the usual starting points, because “gentle” and “actually gets the oil off” are pretty different jobs. <strong>Toleriane Hydrating Gentle Cleanser</strong> is the default if you don't want to strip your barrier — good for normal to dry or easily tight skin. If you get shiny by lunch, the <strong>Purifying Foaming Cleanser</strong> is lighter, and <strong>Effaclar</strong> is the one I'd look at if breakouts are really the issue.",
  serum:
    "A few La Roche-Posay serums, depending on what you're actually trying to change. <strong>Mela B3</strong> is the dark-spot / uneven-tone one, <strong>Vitamin C12</strong> is more about overall radiance, and <strong>Cicaplast B5</strong> is the calming hydrator if your barrier is cranky and you don't want to jump straight into stronger actives.",
  spf:
    "Everyday SPF is usually where I start with La Roche-Posay, because the textures are actually wearable. <strong>Anthelios Ultra Fluid</strong> sinks in with almost no white cast, <strong>Melt-in Milk</strong> is the one if you also want something that works on the body, and the <strong>Mineral Tinted</strong> formula adds a sheer tint so mineral SPF doesn't look ashy.",
  eye:
    "A few La Roche-Posay eye options — they do pretty different things, so it depends what's bothering you. <strong>Pigmentclar Eyes</strong> is built for under-eye shadows, <strong>Hyalu B5 Eye Serum</strong> is more about plumpness and dehydration lines, and <strong>Toleriane Dermallergo</strong> is the gentle one if the lids get reactive easily.",
  acne:
    "Here are a few La Roche-Posay acne pieces that people use on their own or stacked. <strong>Effaclar Duo</strong> is the leave-on for visible blemishes and leftover marks, the <strong>Salicylic Acid Serum</strong> is more pore-refining, and <strong>Effaclar Medicated Wash</strong> is the cleanser if congestion starts in the shower.",
  body:
    "A few La Roche-Posay body options, depending on how dry things actually are. <strong>Lipikar AP+M</strong> is the triple-repair cream for extra-dry or eczema-prone skin, <strong>Lipikar Lotion</strong> is a lighter everyday milk, and <strong>Lipikar Wash AP+</strong> is the cleanser so you're not stripping skin in the shower and then trying to fix it after.",
  mist:
    "A few La Roche-Posay mists and toners — they aren't interchangeable. <strong>Thermal Spring Water</strong> is the soothing reset, <strong>Serozinc</strong> is for shine during the day, and <strong>Effaclar Clarifying Solution</strong> is the exfoliating toner if pores are the main thing.",
  redness:
    "If redness is the complaint, these are the La Roche-Posay options I tend to pull first. <strong>Toleriane Sensitive</strong> is a short-formula daily cream, <strong>Rosaliac AR Intense</strong> is more of a focused redness serum, and <strong>Cicaplast Baume B5+</strong> is there for irritated patches that need comfort, not another active.",
  bestsellers:
    "These are some of the La Roche-Posay products people actually keep in rotation: a barrier-repair moisturizer, an everyday sunscreen, and a hydrating repair serum. Together they cover the basics most routines need, even if you're not totally sure where to start yet.",
};

/** @type {Record<LrpCategoryId, string>} */
const CERAVE_RESPONSE_LEADS = {
  moisturizer:
    "I pulled a couple of CeraVe moisturizers that people actually keep on the nightstand. <strong>PM Facial Moisturizing Lotion</strong> is the lightweight ceramide lotion — niacinamide, hyaluronic acid, not a heavy cream. <strong>Moisturizing Cream</strong> is the rich tub formula if skin is really dry, including as a body cream.",
  cleanser:
    "Here are the two CeraVe cleansers that cover most starting points. <strong>Hydrating Facial Cleanser</strong> is the cream cleanser if you don't want that tight-after-washing feeling — ceramides and hyaluronic acid, good for normal to dry. <strong>Foaming Facial Cleanser</strong> is the gel if you get shiny and want something that actually lifts oil.",
  serum:
    "A couple of CeraVe serums, depending on what you're trying to change. <strong>Skin Renewing Vitamin C Serum</strong> is the morning brightener, and <strong>Resurfacing Retinol Serum</strong> is the evening one for texture, pores, and leftover marks. I wouldn't start both at once.",
  spf:
    "CeraVe's everyday SPF pick is <strong>AM Facial Moisturizing Lotion SPF 30</strong> — moisturizer and sunscreen in one morning step, with ceramides so it doesn't feel like a separate sunscreen layer.",
  eye:
    "Two CeraVe eye creams, for different jobs. <strong>Eye Repair Cream</strong> is the one for dark circles and puffiness — ceramides, hyaluronic acid, fragrance-free. <strong>Skin Renewing Eye Cream</strong> is the peptide one when fine lines and crow's feet are the thing you actually want to change.",
  acne:
    "If breakouts are the brief, these are the CeraVe pieces I'd look at. <strong>Foaming Facial Cleanser</strong> for oil, <strong>Resurfacing Retinol Serum</strong> at night for texture and marks, and <strong>Skin Renewing Vitamin C Serum</strong> in the morning if leftover spots are hanging around.",
  body:
    "For body, CeraVe is basically the tub. <strong>Moisturizing Cream</strong> is the rich ceramide cream people use on extra-dry arms and legs, and <strong>PM Facial Moisturizing Lotion</strong> is the lighter option if you want the same barrier idea without the heavy feel.",
  mist:
    "CeraVe's toner is <strong>Hydrating Toner</strong> — alcohol-free, ceramides, meant to sit after cleansing and under serum. It's a hydration step, not an exfoliating toner.",
  redness:
    "If redness is sitting on a dry or reactive barrier, CeraVe's move is usually ceramides rather than a dedicated redness serum. <strong>Hydrating Facial Cleanser</strong>, <strong>PM Facial Moisturizing Lotion</strong>, and <strong>Moisturizing Cream</strong> for patches that need more occlusion.",
  bestsellers:
    "These are the CeraVe products people actually keep in rotation: a ceramide cleanser, the PM lotion, and the rich moisturizing cream. Together they cover the barrier basics most routines start with, even if you're not totally sure where to go next.",
};

/** @type {Record<LrpCategoryId, string>} */
const LANCOME_RESPONSE_LEADS = {
  moisturizer:
    "Two Lancôme moisturizers, for different times of day. <strong>Advanced Génifique Night Cream</strong> is the overnight barrier cream — Bifidus Prebiotic, hyaluronic acid, and ceramides. <strong>Rénergie Lift Multi-Action SPF 15</strong> is the morning firming cream when wrinkles and lift are the priority.",
  cleanser:
    "Two Lancôme cleansers. <strong>Crème Mousse Confort</strong> is the creamy foam with rosehip oil if you don't want a wash to leave skin tight. <strong>Clarifique Pore Refining Cleanser</strong> is the salicylic foam when pores and texture are the reason you're cleansing.",
  serum:
    "Two Lancôme serums, depending on the job. <strong>Génifique Ultimate</strong> is the recovery serum for a tired barrier and fine lines. <strong>Advanced Génifique</strong> is the radiance one — Bifidus Prebiotic, hyaluronic acid, and vitamin Cg — and it's the larger bottle.",
  spf:
    "Lancôme's everyday SPF here is <strong>UV Expert Defense SPF 50+</strong>. It's an aquagel that works as moisturizer, primer, and sunscreen, and it's made to disappear without a white cast.",
  eye:
    "Two Lancôme eye formulas. <strong>Advanced Génifique Light Pearl</strong> is the serum with caffeine and a cooling applicator for puffiness and fine lines. <strong>Rénergie Lift Multi-Action Eye Cream</strong> is the silkier cream for dark circles, bags, and firmness.",
  acne:
    "Lancôme doesn't lead with a medicated acne line in this set. The closest is <strong>Clarifique Double Treatment Essence</strong>, a bi-phase essence with glycolic, lactic, and salicylic acid for texture, pores, and leftover marks. It is an acid step, so it wants SPF the next morning.",
  body:
    "This Lancôme set is face care. The richest cream in it is <strong>Advanced Génifique Night Cream</strong> — useful on dry patches, though it's formulated as a face night cream, not a body lotion.",
  mist:
    "Two Lancôme toners that do different jobs. <strong>Tonique Confort</strong> is the milky hyaluronic toner — hydrate and soften, morning and evening, no rinse. <strong>Clarifique Double Treatment Essence</strong> is the acid essence for texture and pores. Shake it, and use SPF the next morning.",
  redness:
    "If redness is sitting on a dry or reactive barrier, I'd stay with the gentler Lancôme formulas. <strong>Crème Mousse Confort</strong> to cleanse, <strong>Génifique Ultimate</strong> if you want a serum, and <strong>Advanced Génifique Night Cream</strong> overnight. I'd skip the acid essence until skin is calmer.",
  bestsellers:
    "These are Lancôme products people actually keep in rotation: <strong>Génifique Ultimate</strong> for the barrier, <strong>Crème Mousse Confort</strong> to cleanse, and <strong>UV Expert SPF 50+</strong> as the last morning step.",
};

/** @param {LrpCategoryId} category */
function matchPopularLead(category) {
  const leads =
    matchBrand === "cerave" ? CERAVE_RESPONSE_LEADS : matchBrand === "lancome" ? LANCOME_RESPONSE_LEADS : LRP_RESPONSE_LEADS;
  return leads[category] || `Here are a few ${matchBrandName()} ${LRP_CATEGORY_LABELS[category] || "products"} to start with.`;
}

/** @type {Record<LrpCategoryId, string>} */
const LRP_FOLLOWUP_ASKS = {
  moisturizer: "What are you hoping a moisturizer will actually do — calm sensitivity, fix tightness, handle oil, or something else?",
  cleanser: "Are you trying to be gentler on a dry or sensitive barrier, or do you need something that can handle oil and congestion?",
  serum: "What's the main thing you want a serum to go after — dark spots, radiance, or a calmer, more hydrated barrier?",
  spf: "Any must-haves for SPF — an invisible finish, a bit of tint, or something that also works on the body?",
  eye: "Around the eyes, is it dark circles, dryness, or sensitivity that's bothering you most?",
  acne: "Are you dealing with active breakouts, leftover marks, or both?",
  body: "Is this for extra-dry or eczema-prone skin, or more of an everyday after-shower lotion?",
  mist: "Do you want a mist to soothe sensitivity, cut shine, or exfoliate pores?",
  redness: "Is the redness more flushing and visible capillaries, or general sensitivity and irritation?",
  bestsellers: "What are you trying to target first — barrier, sun protection, or hydration?",
};

/** @type {Record<LrpCategoryId, string>} */
const LRP_FOLLOWUP_BRIDGES = {
  moisturizer:
    "These are starting points, not a locked-in routine — the right cream really depends on what your skin is doing right now.",
  cleanser:
    "Cleansers are easy to over-correct with, so I wouldn't pick one just because it's popular. A 20-second answer about your skin is enough to get this more specific.",
  serum:
    "Serums are where it's worth being picky, because they do pretty different jobs. If I know the goal, I can drop the ones that aren't relevant.",
  spf:
    "If you already know you hate a white cast, or you want a little coverage, say so — that's usually the thing that decides this.",
  eye:
    "Eye products get oversold, so I'd rather match the actual complaint than hand you a generic trio.",
  acne:
    "Acne routines work better when we know whether you're treating what's there now, fading what's left, or both.",
  body:
    "Body care is mostly about how dry and reactive the skin is, so a little extra context goes a long way.",
  mist:
    "Mists and toners get used for totally different reasons, so the “right” one depends on what you want it to do at 3pm.",
  redness:
    "Redness can be flushing, irritation, or just a sensitive barrier — those don't all want the same product.",
  bestsellers:
    "This is the broad, popular set. If you tell me what you're actually trying to fix, I can make it a lot less generic.",
};

/** @param {'popular'|'targeted'|'refined'} mode */
function lrpOptionalOpener(mode) {
  if (mode === "refined") return "";
  lrpReplyCount += 1;
  if (lrpReplyCount % 3 !== 0) return "";
  return `Absolutely <span aria-hidden="true">💙</span> `;
}

/**
 * @param {LrpCategoryId} category
 * @param {{ products?: LrpProduct[], concerns?: LrpConcern[], refined?: boolean, widened?: boolean, mode?: 'popular'|'targeted'|'refined' }} [opts]
 */
function buildLrpCarouselBlock(category, opts) {
  const list = opts?.products?.length ? opts.products : lrpProductsFor(category);
  const cards = list.map((p) => lrpProductCardHTML(p)).join("");
  const mode =
    opts?.mode ||
    (opts?.refined && opts.concerns?.length ? "refined" : opts?.concerns?.length ? "targeted" : "popular");
  const lead =
    mode === "refined" && opts?.concerns?.length
      ? buildLrpRefineLead(list, opts.concerns, category, !!opts.widened)
      : mode === "targeted" && opts?.concerns?.length
        ? buildLrpTargetedLead(list, opts.concerns, category, !!opts.widened)
        : matchPopularLead(category);
  const bridge =
    mode === "popular"
      ? LRP_FOLLOWUP_BRIDGES[category]
      : mode === "targeted"
        ? "If there's more going on — your skin type, something that's been irritating you, what you're using now — tell me and I can tighten this."
        : "If one of these feels close, great. If not, add another detail (oily vs dry, redness, your current routine) and I can cut this down again.";
  const ask =
    mode === "popular"
      ? `${LRP_FOLLOWUP_ASKS[category]} You can also tap <strong>Check if it's a match</strong> on a card if you'd rather see how a formula actually sits on your skin.`
      : "Or tap <strong>Check if it's a match</strong> on a card whenever you want a score.";
  const opener = lrpOptionalOpener(mode);
  const brand = matchBrandName();
  const attrMod =
    matchBrand === "cerave" ? " lrp-attribution--cerave" : matchBrand === "lancome" ? " lrp-attribution--lancome" : "";
  const attrIconSrc = matchBrand === "cerave" ? CERAVE_APP_ICON_SRC : matchBrand === "lancome" ? LANCOME_APP_ICON_SRC : "";
  const attrIcon = attrIconSrc
    ? `<span class="vto-attribution__icon"><img src="${attrIconSrc}" alt="" width="24" height="24" decoding="async" /></span>`
    : `<span class="lrp-attribution__icon" aria-hidden="true"></span>`;
  return `
    <div class="vto-attribution lrp-attribution${attrMod}">
      ${attrIcon}
      <span class="vto-attribution__label">${escapeHtml(brand)}</span>
    </div>
    <div class="product-carousel lrp-carousel" data-product-carousel>
      <div class="product-carousel__strip">
        <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous products">
          ${chevronCarouselSvg("prev")}
        </button>
        <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next products">
          ${chevronCarouselSvg("next")}
        </button>
        <div class="slide-row" role="list">${cards}</div>
      </div>
      ${carouselDotsHTML(list.length, 0)}
    </div>
    <div class="assistant-text lrp-response">
      <p style="margin:0 0 10px">${opener}${lead}</p>
      <p style="margin:0 0 10px">${bridge}</p>
      <p style="margin:0">${ask}</p>
    </div>
  `;
}

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replaceAll("\n", " ");
}

function enterChatView() {
  if (view === "chat") {
    el.entryView.hidden = true;
    el.chatView.hidden = false;
    syncNewChatLandingChrome();
    setComposerForChatMode();
    return;
  }
  view = "chat";
  el.entryView.hidden = true;
  el.chatView.hidden = false;
  syncNewChatLandingChrome();
  setComposerForChatMode();
}

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function assistantThink() {
  appendTyping();
  await wait(2000 + Math.random() * 600);
  removeTyping();
}

function budgetQuestionHtml() {
  return `<div class="assistant-text">
    <p style="margin:0 0 12px">I would love to help you find something that feels right—once I know how you like to shop, I can line up picks that actually fit.</p>
    <p style="margin:0 0 12px">Are you leaning toward something more <strong>budget-friendly</strong> (think drugstore-friendly picks and gentler price points), or would you like me to focus on <strong>luxury</strong> options (premium brands and higher price points)?</p>
    <p style="margin:0">Just type your answer in the chat—you do not need exact wording. For example <strong>“luxury”</strong> or <strong>“luxe”</strong> points me upscale; <strong>“budget,”</strong> <strong>“drugstore,”</strong> or <strong>“affordable”</strong> keeps things wallet-friendly.</p>
  </div>`;
}

function genericAssistantReply() {
  return `<div class="assistant-text">Tell me what you are trying to shop for (product type, finish, undertone), and I will pull a tight shortlist.</div>`;
}

function chatbotTieredFollowUpHtml() {
  const lane = chatPreferredTier === "luxury" ? "luxury" : "budget-friendly";
  const otherHint =
    chatPreferredTier === "luxury"
      ? "Want <strong>budget-friendly</strong> picks instead? Say something like <strong>“show me budget ones”</strong> or <strong>“drugstore options.”</strong>"
      : "Want <strong>luxury</strong> picks instead? Try <strong>“show me luxury options”</strong> or <strong>“luxe / high-end ones.”</strong>";
  return `<div class="assistant-text"><p style="margin:0 0 10px">I still have you in the <strong>${lane}</strong> lane from earlier. Ask for another category (foundations, mascaras, concealers), a shade tweak, or where to shop—I will keep answers focused.</p><p style="margin:0">${otherHint}</p></div>`;
}

function prepareVtoShellVisible() {
  closeProductDetail();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  setVtoComposerChrome(true);
  syncVtoExperienceBrandUi();
}

function launchVtoAfterTryOnConfirm() {
  tryOnFromChatSingleProduct = true;
  vtoSkinBrandExperienceActive = false;
  prepareVtoShellVisible();
  if (!vtoUserAcceptedTerms) {
    showVtoTermsOnly();
    el.vtoTermsCheckbox.checked = false;
    syncVtoConsentButton();
    requestAnimationFrame(() => el.vtoTermsClose.focus());
    return;
  }
  const selfieReady = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
  if (selfieReady) {
    if (!vtoSelfiePreviewUrl) vtoSelfiePreviewUrl = sessionPersistedSelfieUrl;
    showVtoTryOn();
    return;
  }
  showVtoSelfieStub();
  focusSelfieStubPrimaryAction();
}

function isComposerFocusTarget(target) {
  return Boolean(target instanceof Node && el.composerRoot?.contains(target));
}

/** Leave Product Match / Skin Diag full-screen so a typed composer message can send in chat. */
function dismissFullscreenOverlaysForChat() {
  closeLrpFlow();
  closeProductDetail();
  closeVtoFlow();
}

async function sendUserMessage(text, promptMeta) {
  hideComposerMentionMenu();
  const displayText = text.trim();
  if (!displayText) return;
  if (flow === "busy") return;
  const namedBrand = detectNamedMatchBrand(displayText);
  const trimmed = stripMatchMentions(displayText) || displayText;

  const vtoWhereBuyProduct =
    !el.vtoFlow.hidden &&
    !skinDiagFlowActive &&
    !vtoSkinBrandExperienceActive &&
    chatMode === "makeup" &&
    isWhereToBuyPurchaseIntent(trimmed) &&
    hasVtoProductContextForWhereBuy()
      ? productForWhereToBuyFromDetail()
      : null;

  dismissFullscreenOverlaysForChat();
  if (chatMode !== "skin_diag") {
    const explicitAnalyze = isSkinAnalyzeIntent(trimmed, promptMeta);
    const offerDiag =
      shouldOfferSkinDiagnostic(trimmed, promptMeta) &&
      !namedBrand &&
      !hasMatchMention(displayText) &&
      !detectLrpProductType(trimmed) &&
      !lrpLastCategory;
    if (explicitAnalyze || offerDiag) switchChatModeIfNeeded("skin_diag");
  }
  enterChatView();

  chatGenerationEpoch += 1;
  const myGen = chatGenerationEpoch;

  removeQuickReplies();

  if (vtoWhereBuyProduct) {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildWhereToBuyMessageHtml(vtoWhereBuyProduct));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (lrpShopProduct && isMatchInPersonIntent(trimmed)) {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildMatchInPersonMessageHtml(lrpShopProduct));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (isVtoChatShortcut(trimmed)) {
    switchChatModeIfNeeded("makeup");
    enterChatView();
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    chatAwaitingTryOnConfirm = false;
    chatAwaitingSkinDiagConfirm = false;
    chatAwaitingBudgetTierReply = false;
    chatAwaitingSkinRoutineChoice = false;
    chatSkinRoutineConcernId = null;
    if (composerSelectedApp === "skin_diag") {
      composerSelectedApp = null;
      syncComposerAppPill();
    }
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(vtoChatShortcutAssistantHtml());
    flow = "idle";
    updateComposerTextState();
    launchVtoTryOnFromChatShortcut();
    return;
  }

  if (isSkinDiagResultsShortcut(trimmed)) {
    switchChatModeIfNeeded("skin_diag");
    enterChatView();
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    chatAwaitingTryOnConfirm = false;
    chatAwaitingSkinDiagConfirm = false;
    chatAwaitingBudgetTierReply = false;
    chatAwaitingSkinRoutineChoice = false;
    chatSkinRoutineConcernId = null;
    persistSkinDiagSelfieAngles({
      front: SKIN_DIAG_CHAT_SHORTCUT_SELFIE,
      left: SKIN_DIAG_CHAT_SHORTCUT_SELFIE,
      right: SKIN_DIAG_CHAT_SHORTCUT_SELFIE,
    });
    releasePersistedSelfieBlobIfAny();
    sessionPersistedSelfieUrl = SKIN_DIAG_CHAT_SHORTCUT_SELFIE;
    await showSkinDiagResultsAfterLoad(SKIN_DIAG_CHAT_SHORTCUT_SELFIE);
    return;
  }

  if (isNewRoutineShortcut(trimmed)) {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    chatAwaitingTryOnConfirm = false;
    chatAwaitingSkinDiagConfirm = false;
    chatAwaitingBudgetTierReply = false;
    chatAwaitingSkinRoutineChoice = false;
    chatSkinRoutineConcernId = null;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildSkinRoutineCarouselBlock("all", null));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatAwaitingTryOnConfirm) {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const choice = parseTryOnConfirmFromUserText(trimmed);
    if (choice === null) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(tryOnConfirmClarifyHtml());
      flow = "idle";
      updateComposerTextState();
      return;
    }
    chatAwaitingTryOnConfirm = false;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    if (choice === "decline") {
      appendAssistantBlock(
        `<div class="assistant-text"><p style="margin:0">No problem—whenever you want to try that look, ask again with the same product and shade and we will pick it up from here.</p></div>`,
      );
      flow = "idle";
      updateComposerTextState();
      return;
    }
    flow = "idle";
    updateComposerTextState();
    launchVtoAfterTryOnConfirm();
    return;
  }

  if (chatAwaitingSkinRoutineChoice) {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const routineChoice = parseSkinRoutineIntent(trimmed, chatSkinRoutineConcernId);
    if (routineChoice === null) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      const concern = chatSkinRoutineConcernId
        ? SKIN_DIAG_FAKE_CONCERNS.find((c) => c.id === chatSkinRoutineConcernId) || null
        : null;
      appendAssistantBlock(skinRoutinePromptHtml(concern, { showSkinResultsShortcut: !!skinDiagResultsPeekUrl }));
      flow = "idle";
      updateComposerTextState();
      return;
    }
    chatAwaitingSkinRoutineChoice = false;
    const focusConcernId = chatSkinRoutineConcernId;
    chatSkinRoutineConcernId = null;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    if (routineChoice === "decline") {
      appendAssistantBlock(
        `<div class="assistant-text"><p style="margin:0">Totally fine. If you want it later, say <strong>build my routine</strong> and I will pick it up from your latest skin results.</p></div>`,
      );
      flow = "idle";
      updateComposerTextState();
      return;
    }
    appendAssistantBlock(buildSkinRoutineCarouselBlock(routineChoice, focusConcernId));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatAwaitingBudgetTierReply) {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    const tierParsed = parseBudgetTierFromUserText(trimmed);
    if (tierParsed === null || tierParsed === "ambiguous") {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(budgetTierClarifyHtml());
      flow = "idle";
      updateComposerTextState();
      return;
    }
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    chatPreferredTier = tierParsed;
    const pending = chatPendingCarousel;
    chatPendingCarousel = null;
    chatAwaitingBudgetTierReply = false;
    if (pending === "foundation") {
      appendAssistantBlock(buildFoundationCarouselBlock(tierParsed));
      chatLastProductCarouselCatalog = "foundation";
    } else {
      appendAssistantBlock(buildResultsBlock(labelForTier(tierParsed)));
      chatLastProductCarouselCatalog = "lips";
    }
    flow = "idle";
    updateComposerTextState();
    return;
  }

  const product = isProductMessage(trimmed, promptMeta);
  const foundationAsk = isFoundationRequest(trimmed);

  if (!(product && foundationAsk && !chatPreferredTier)) {
    chatPendingCarousel = null;
  }

  const namedTryOn = chatMode === "makeup" ? matchNamedProductTryOnRequest(trimmed) : null;
  if (namedTryOn) {
    chatPendingCarousel = null;
    chatAwaitingBudgetTierReply = false;
    vtoSelectedProductKey = { tier: namedTryOn.tier, index: namedTryOn.index, catalog: namedTryOn.catalog };
    chatPreferredTier = namedTryOn.tier;
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    const { product: namedProduct } = getVtoProduct();
    appendAssistantBlock(namedTryOnConfirmAssistantHtml(namedProduct));
    chatAwaitingTryOnConfirm = true;
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatMode === "skin_diag") {
    appendUserBubble(displayText);
    el.input.value = "";
    autosizeComposer();
    flow = "busy";
    updateComposerTextState();

    const altIntent = parseSkinDiagAlternativesIntent(trimmed);
    if (altIntent) {
      const products = skinDiagAlternativeProductsForStep(altIntent.step, altIntent.product?.id);
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      if (products.length) appendAssistantBlock(buildSkinDiagAlternativesBlock(altIntent.step, products, altIntent.product));
      else appendAssistantBlock(buildSkinAnalyzeCardBlock(skinDiagOfferCopy(displayText)));
      flow = "idle";
      updateComposerTextState();
      return;
    }

    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildSkinAnalyzeCardBlock(skinDiagOfferCopy(displayText)));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  appendUserBubble(displayText);
  el.input.value = "";
  autosizeComposer();
  flow = "busy";
  updateComposerTextState();

  const concernHits = detectLrpConcerns(trimmed);
  const askedType = promptMeta?.lrpCategory || detectLrpProductType(trimmed);
  const brandSwitch = isDifferentBrandAsk(trimmed) || (namedBrand && namedBrand !== matchBrand);
  const askedCategory =
    detectLrpCategory(trimmed, promptMeta) ??
    (product || namedBrand || hasMatchMention(displayText) || brandSwitch
      ? lrpLastCategory || "bestsellers"
      : null);
  if (namedBrand) {
    matchBrand = namedBrand;
  } else if (isDifferentBrandAsk(trimmed) && (lrpLastCategory || askedCategory)) {
    matchBrand = nextMatchBrand(matchBrand);
  } else if (askedType && !lrpLastCategory) {
    matchBrand = "lrp";
  }
  const category =
    askedType ||
    lrpLastCategory ||
    (concernHits.length ? defaultCategoryForConcerns(concernHits) : null) ||
    askedCategory;

  /** @type {LrpConcern[]} */
  let activeConcerns = [];
  if (askedType && askedType !== lrpLastCategory) {
    activeConcerns = concernHits.length ? concernHits : lrpLastConcerns.slice();
  } else if (concernHits.length) {
    activeConcerns = [...new Set([...lrpLastConcerns, ...concernHits])];
  }

  if (category && activeConcerns.length) {
    chatPendingCarousel = null;
    chatAwaitingBudgetTierReply = false;
    const narrowed = narrowLrpRecommendations(category, activeConcerns);
    if (narrowed.products.length) {
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      const mode = lrpLastCategory === narrowed.category ? "refined" : "targeted";
      lrpLastCategory = narrowed.category;
      lrpLastConcerns = activeConcerns;
      appendAssistantBlock(
        buildLrpCarouselBlock(narrowed.category, {
          products: narrowed.products,
          concerns: activeConcerns,
          refined: mode === "refined",
          widened: narrowed.widened,
          mode,
        }),
      );
      flow = "idle";
      updateComposerTextState();
      return;
    }
  }

  if (askedCategory) {
    chatPendingCarousel = null;
    chatAwaitingBudgetTierReply = false;
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    lrpLastCategory = askedCategory;
    lrpLastConcerns = [];
    appendAssistantBlock(buildLrpCarouselBlock(askedCategory, { mode: "popular" }));
    flow = "idle";
    updateComposerTextState();
    return;
  }

  const switchedToTier =
    chatMode === "makeup" && chatPreferredTier
      ? parseOppositeTierCarouselIntent(trimmed, chatPreferredTier)
      : null;

  if (switchedToTier) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    chatPreferredTier = switchedToTier;
    const useFoundation =
      isFoundationRequest(trimmed) || chatLastProductCarouselCatalog === "foundation";
    if (useFoundation) {
      appendAssistantBlock(buildFoundationCarouselBlock(switchedToTier, true));
      chatLastProductCarouselCatalog = "foundation";
    } else {
      appendAssistantBlock(buildResultsBlock(labelForTier(switchedToTier), true));
      chatLastProductCarouselCatalog = "lips";
    }
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (!product) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(genericAssistantReply());
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (foundationAsk && chatPreferredTier) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(buildFoundationCarouselBlock(chatPreferredTier));
    chatLastProductCarouselCatalog = "foundation";
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (foundationAsk && !chatPreferredTier) {
    chatPendingCarousel = "foundation";
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(budgetQuestionHtml());
    chatAwaitingBudgetTierReply = true;
    chatAwaitingTryOnConfirm = false;
    flow = "idle";
    updateComposerTextState();
    return;
  }

  if (chatPreferredTier && product && !foundationAsk) {
    await assistantThink();
    if (myGen !== chatGenerationEpoch) return;
    appendAssistantBlock(chatbotTieredFollowUpHtml());
    flow = "idle";
    updateComposerTextState();
    return;
  }

  chatPendingCarousel = null;
  await assistantThink();
  if (myGen !== chatGenerationEpoch) return;
  appendAssistantBlock(budgetQuestionHtml());
  chatAwaitingBudgetTierReply = true;
  chatAwaitingTryOnConfirm = false;
  flow = "idle";
  updateComposerTextState();
}

/** @param {typeof MATCH_PLUGINS[number]} plugin @param {string} query */
function pluginMentionMatches(plugin, query) {
  const q = query
    .replace(/^@/, "")
    .toLowerCase()
    .replace(/[-–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!q) return true;
  const compact = q.replace(/\s+/g, "");
  return plugin.aliases.some((alias) => {
    const spaced = alias.replace(/-/g, " ");
    const squeezed = spaced.replace(/\s+/g, "");
    return spaced.startsWith(q) || squeezed.startsWith(compact);
  });
}

/**
 * @param {string} value
 * @returns {{ start: number, end: number }[]}
 */
function completedMentionRanges(value) {
  /** @type {{ start: number, end: number }[]} */
  const ranges = [];
  for (const plugin of MATCH_PLUGINS) {
    const re = new RegExp(`${plugin.token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    let m = re.exec(value);
    while (m) {
      ranges.push({ start: m.index, end: m.index + m[0].length });
      m = re.exec(value);
    }
  }
  return ranges.sort((a, b) => a.start - b.start);
}

/**
 * In-progress `@` query at the caret, if it still matches a Product Match app.
 * @param {string} value
 * @param {number} cursor
 */
function findActiveMentionQuery(value, cursor) {
  const completed = completedMentionRanges(value);
  const from = Math.max(0, Math.min(cursor, value.length));
  let at = -1;
  for (let i = from; i >= 0; i--) {
    if (value[i] !== "@") continue;
    const inside = completed.some((r) => i >= r.start && i < r.end);
    if (inside) continue;
    if (i === 0 || /\s/.test(value[i - 1])) {
      at = i;
      break;
    }
  }
  if (at < 0) return null;
  const query = value.slice(at, from);
  const plugins = MATCH_PLUGINS.filter((plugin) => pluginMentionMatches(plugin, query));
  if (!plugins.length) return null;
  if (MATCH_PLUGINS.some((plugin) => query.trim().toLowerCase() === plugin.token.toLowerCase())) return null;
  return { start: at, end: from, query, plugins };
}

/**
 * @param {string} value
 * @param {{ start: number, end: number }[]} [extra]
 */
function mentionHighlightHTML(value, extra) {
  /** @type {{ start: number, end: number }[]} */
  const ranges = [...completedMentionRanges(value), ...(extra || [])].sort((a, b) => a.start - b.start);
  let html = "";
  let i = 0;
  for (const r of ranges) {
    if (r.end <= i) continue;
    const start = Math.max(r.start, i);
    html += escapeHtml(value.slice(i, start));
    html += `<span class="composer__mention user-thread__mention">${escapeHtml(value.slice(start, r.end))}</span>`;
    i = r.end;
  }
  html += escapeHtml(value.slice(i));
  return html;
}

function hideComposerMentionMenu() {
  if (!el.composerMentionMenu) return;
  el.composerMentionMenu.hidden = true;
  el.composerMentionMenu.setAttribute("aria-hidden", "true");
  el.input?.setAttribute("aria-expanded", "false");
  lastMentionKey = "";
}

function showComposerMentionMenu() {
  if (!el.composerMentionMenu) return;
  el.composerMentionMenu.hidden = false;
  el.composerMentionMenu.setAttribute("aria-hidden", "false");
  el.input?.setAttribute("aria-expanded", "true");
}

function isComposerMentionMenuOpen() {
  return el.composerMentionMenu?.hidden === false;
}

let mentionMenuIndex = 0;
let lastMentionKey = "";

function mentionMenuItems() {
  return [...(el.composerMentionMenu?.querySelectorAll("[data-mention-plugin]") ?? [])];
}

function visibleMentionMenuItems() {
  return mentionMenuItems().filter((item) => !item.hidden);
}

/** @param {MatchBrand | string} [pluginId] */
function completeMatchMention(pluginId) {
  const value = el.input.value;
  const cursor = el.input.selectionStart ?? value.length;
  const active = findActiveMentionQuery(value, cursor);
  if (!active) {
    hideComposerMentionMenu();
    return false;
  }
  const plugin =
    MATCH_PLUGINS.find((item) => item.id === pluginId) ||
    active.plugins[mentionMenuIndex] ||
    active.plugins[0];
  if (!plugin) {
    hideComposerMentionMenu();
    return false;
  }
  const before = value.slice(0, active.start);
  const after = value.slice(active.end);
  const insert = `${plugin.token}${after.startsWith(" ") ? "" : " "}`;
  el.input.value = `${before}${insert}${after}`;
  const pos = before.length + insert.length;
  el.input.setSelectionRange(pos, pos);
  hideComposerMentionMenu();
  autosizeComposer();
  updateComposerTextState();
  return true;
}

/** @param {ReturnType<typeof findActiveMentionQuery>} active */
function syncComposerMentionMenu(active) {
  const items = mentionMenuItems();
  if (!active) {
    hideComposerMentionMenu();
    return;
  }
  const key = active.plugins.map((plugin) => plugin.id).join(",");
  if (key !== lastMentionKey) {
    lastMentionKey = key;
    mentionMenuIndex = 0;
  }
  items.forEach((item) => {
    const id = item.getAttribute("data-mention-plugin");
    item.hidden = !active.plugins.some((plugin) => plugin.id === id);
  });
  const visible = visibleMentionMenuItems();
  if (!visible.length) {
    hideComposerMentionMenu();
    return;
  }
  if (mentionMenuIndex >= visible.length) mentionMenuIndex = 0;
  if (mentionMenuIndex < 0) mentionMenuIndex = visible.length - 1;
  items.forEach((item) => {
    const on = visible[mentionMenuIndex] === item;
    item.classList.toggle("is-active", on);
    item.setAttribute("aria-selected", on ? "true" : "false");
  });
  showComposerMentionMenu();
}

function syncComposerMentionUI() {
  if (!el.input || !el.composerHighlight) return;
  const value = el.input.value;
  const cursor = el.input.selectionStart ?? value.length;
  const active = findActiveMentionQuery(value, cursor);
  el.composerHighlight.innerHTML = mentionHighlightHTML(value, active ? [{ start: active.start, end: active.end }] : []);
  el.composerHighlight.scrollTop = el.input.scrollTop;
  el.composerHighlight.scrollLeft = el.input.scrollLeft;
  if (active) syncComposerMentionMenu(active);
  else hideComposerMentionMenu();
}

function autosizeComposer() {
  el.input.style.height = "0px";
  el.input.style.height = `${Math.min(el.input.scrollHeight, 120)}px`;
  if (el.composerHighlight) el.composerHighlight.style.height = el.input.style.height;
  syncComposerMentionUI();
  requestAnimationFrame(() => syncShellComposerStackVar());
}

function updateComposerTextState() {
  const has = el.input.value.trim().length > 0;
  el.composerField.classList.toggle("has-text", has);
  refreshComposerActionState();
}

function syncComposerAppPill() {
  if (!el.composerAppPill) return;
  const show = composerSelectedApp === "vto" || composerSelectedApp === "skin_diag";
  el.composerAppPill.hidden = !show;
  el.composerField?.classList.toggle("has-app", show);
  if (!show) return;
  const img = el.composerAppPill.querySelector("img");
  const label = el.composerAppPill.querySelector(".composer-app-pill__label");
  if (composerSelectedApp === "skin_diag") {
    if (img) img.setAttribute("src", SKIN_DIAG_HEADER_ICON_SRC);
    if (label) label.textContent = "Skin Diag";
  } else {
    if (img) img.setAttribute("src", VTO_TRYON_HEADER_ICON_SRC);
    if (label) label.textContent = "Makeup Try-On";
  }
}

function openComposerAppMenu() {
  if (!el.composerAppMenu) return;
  if (composerAppMenuCloseTimer != null) {
    window.clearTimeout(composerAppMenuCloseTimer);
    composerAppMenuCloseTimer = null;
  }
  el.composerAppMenu.hidden = false;
  el.composerAppMenu.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => el.composerAppMenu?.classList.add("is-open"));
}

function closeComposerAppMenu() {
  if (!el.composerAppMenu) return;
  el.composerAppMenu.classList.remove("is-open");
  el.composerAppMenu.setAttribute("aria-hidden", "true");
  if (composerAppMenuCloseTimer != null) {
    window.clearTimeout(composerAppMenuCloseTimer);
  }
  composerAppMenuCloseTimer = window.setTimeout(() => {
    if (!el.composerAppMenu) return;
    el.composerAppMenu.hidden = true;
    composerAppMenuCloseTimer = null;
  }, 260);
}

function refreshComposerActionState() {
  const busy = flow === "busy";
  const has = el.input.value.trim().length > 0;
  el.composerRoot?.classList.toggle("composer--streaming", busy);
  const sendArrow = el.sendBtn?.querySelector(".composer__send-icon--send");
  const sendStop = el.sendBtn?.querySelector(".composer__send-icon--stop");
  sendArrow?.toggleAttribute("hidden", busy);
  sendStop?.toggleAttribute("hidden", !busy);
  el.sendBtn?.setAttribute("aria-label", busy ? "Stop generating" : "Send");
}

function initComposer() {
  el.input.addEventListener("input", () => {
    autosizeComposer();
    updateComposerTextState();
  });
  el.input.addEventListener("scroll", () => {
    if (!el.composerHighlight) return;
    el.composerHighlight.scrollTop = el.input.scrollTop;
    el.composerHighlight.scrollLeft = el.input.scrollLeft;
  });
  el.input.addEventListener("click", () => syncComposerMentionUI());
  el.input.addEventListener("keyup", () => syncComposerMentionUI());

  el.input.addEventListener("keydown", (e) => {
    if (isComposerMentionMenuOpen() && (e.key === "Enter" || e.key === "Tab")) {
      e.preventDefault();
      const selected = visibleMentionMenuItems()[mentionMenuIndex];
      completeMatchMention(selected?.getAttribute("data-mention-plugin") || undefined);
      return;
    }
    if (isComposerMentionMenuOpen() && e.key === "Escape") {
      e.preventDefault();
      hideComposerMentionMenu();
      return;
    }
    if (isComposerMentionMenuOpen() && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      e.preventDefault();
      const count = visibleMentionMenuItems().length;
      if (!count) return;
      mentionMenuIndex = (mentionMenuIndex + (e.key === "ArrowDown" ? 1 : -1) + count) % count;
      syncComposerMentionUI();
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (flow === "busy") {
        bumpChatGeneration();
        return;
      }
      void sendUserMessage(el.input.value, undefined);
    }
  });

  el.sendBtn.addEventListener("click", () => {
    if (flow === "busy") {
      bumpChatGeneration();
      return;
    }
    void sendUserMessage(el.input.value, undefined);
  });

  el.composerMentionMenu?.addEventListener("mousedown", (e) => {
    if (e.target.closest("[data-mention-plugin]")) e.preventDefault();
  });
  el.composerMentionMenu?.addEventListener("click", (e) => {
    const item = e.target.closest("[data-mention-plugin]");
    if (!item) return;
    completeMatchMention(item.getAttribute("data-mention-plugin") || undefined);
    requestAnimationFrame(() => el.input?.focus());
  });

  el.composerPlus?.addEventListener("click", () => openComposerAppMenu());
  el.composerAppMenuBackdrop?.addEventListener("click", () => closeComposerAppMenu());
  el.composerAppMenuVto?.addEventListener("click", () => {
    composerSelectedApp = "vto";
    syncComposerAppPill();
    closeComposerAppMenu();
    requestAnimationFrame(() => el.input?.focus());
  });
  el.composerAppMenuSkinDiag?.addEventListener("click", () => {
    composerSelectedApp = "skin_diag";
    syncComposerAppPill();
    closeComposerAppMenu();
    requestAnimationFrame(() => el.input?.focus());
  });
  el.composerAppPillClear?.addEventListener("click", () => {
    composerSelectedApp = null;
    syncComposerAppPill();
    requestAnimationFrame(() => el.input?.focus());
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || el.composerAppMenu?.hidden !== false) return;
    e.preventDefault();
    closeComposerAppMenu();
    requestAnimationFrame(() => el.input?.focus());
  });
  document.addEventListener("mousedown", (e) => {
    if (!isComposerMentionMenuOpen()) return;
    const t = e.target;
    if (!(t instanceof Node)) return;
    if (el.composerMentionMenu?.contains(t) || el.input.contains(t)) return;
    hideComposerMentionMenu();
  });

  refreshComposerActionState();
  syncComposerAppPill();
}

const PRODUCT_DETAIL_SLIDES = 3;

function productDetailSlideHTML(p) {
  const brandAttr = p.brand === "Maybelline" ? ` data-brand="maybelline"` : "";
  return `
    <div class="product-detail__slide"${brandAttr}>
      <img class="product-detail__slide-photo" src="${escapeAttr(p.cardImage)}" alt="" loading="lazy" decoding="async" />
    </div>`;
}

/** @param {string} src */
function productDetailSlideHTMLFromSrc(src) {
  return `
    <div class="product-detail__slide">
      <img class="product-detail__slide-photo" src="${escapeAttr(src)}" alt="" loading="lazy" decoding="async" />
    </div>`;
}

/** @param {{ match: number, tags: string[] }} d */
function productDetailTagsRowForRoutine(d) {
  const primary = `<span class="tag-chip product-detail__tag-pill product-detail__tag-pill--routine-match">${escapeHtml(String(d.match))}% match</span>`;
  const tagChips = d.tags.map((t) => `<span class="tag-chip product-detail__tag-pill">${escapeHtml(t)}</span>`).join("");
  return primary + tagChips;
}

/** @param {'day'|'night'} mode @param {number} currentStepIndex */
function renderProductDetailRoutineAlternates(mode, currentStepIndex) {
  if (!el.productDetailAlternatesStrip || !el.productDetailAlternatesSub) return;
  const modeLabel = mode === "night" ? "night" : "day";
  el.productDetailAlternatesSub.textContent = `Other picks from your ${modeLabel} routine. Tap a card to view details.`;
  const parts = [];
  for (let i = 0; i < SKIN_ROUTINE_STEPS.length; i += 1) {
    const stepDef = SKIN_ROUTINE_STEPS[i];
    const data = stepDef[mode];
    if (!data) continue;
    const cur = i === currentStepIndex ? " product-detail__alternate-card--current" : "";
    parts.push(`<article class="product-card skin-routine-product-card product-detail__alternate-card${cur}" data-detail-alternate-step="${i}" role="listitem" tabindex="0">
        <div class="product-card__header">
          <span class="skin-routine-product-card__match">${data.match}% match</span>
        </div>
        <div class="product-card__content">
          <div class="product-card__media">
            <img class="product-card__photo" src="${escapeAttr(data.image)}" alt="" width="120" height="120" loading="lazy" decoding="async" />
          </div>
          <p class="skin-routine-product-card__brand">${escapeHtml(data.brand)}</p>
          <h3 class="product-card__title">${escapeHtml(data.title)}</h3>
          <div class="product-card__tag-row">
            ${data.tags.map((t) => `<span class="tag-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
      </article>`);
  }
  el.productDetailAlternatesStrip.innerHTML = parts.join("");
}

/** @param {typeof SKIN_ROUTINE_STEPS[number]["day"] & { stepLabel: string }} pick */
function routinePickToWhereToBuyProduct(pick) {
  const shade = pick.tags[0] || "Skin routine pick";
  return {
    brand: pick.brand,
    title: pick.title,
    shadeLabel: shade,
    swatch: "#c8c8c8",
  };
}

/** True when there is a concrete makeup product in context (not the generic {@link getVtoProduct} fallback with no selection). */
function hasVtoProductContextForWhereBuy() {
  if (vtoSelectedProductKey) return true;
  return !!(el.vtoTryOnPanel && !el.vtoTryOnPanel.hidden);
}

/** Product row for the “Where to buy” chat message (matches detail sheet + active try-on shade when applicable). */
function productForWhereToBuyFromDetail() {
  const pick = productDetailKind === "skin_routine" ? productDetailSkinRoutinePick : null;
  if (pick) return routinePickToWhereToBuyProduct(pick);
  const { product } = getVtoProduct();
  const key = vtoSelectedProductKey;
  const ctx = key ? `${key.catalog}:${key.tier}:${key.index}` : "";
  const tryOnOpen = !!(el.vtoTryOnPanel && !el.vtoTryOnPanel.hidden);
  const cur = tryOnShadeList[tryOnShadeIndex];
  const shadesMatchProduct =
    tryOnOpen && !tryOnFromChatSingleProduct && cur && tryOnShadeContextKey && tryOnShadeContextKey === ctx;
  if (shadesMatchProduct) {
    return { ...product, shadeLabel: cur.label, swatch: cur.hex };
  }
  if (tryOnOpen && tryOnFromChatSingleProduct && cur) {
    return { ...product, shadeLabel: cur.label, swatch: cur.hex };
  }
  return product;
}

function productDetailTagsRowHTML(p) {
  const primary = `<span class="tag-chip product-detail__tag-pill">${escapeHtml(p.badgePrimary)}</span>`;
  const tagChips = p.tags
    .map(
      (t) => `
    <span class="tag-chip product-detail__tag-pill">${escapeHtml(t.label)}</span>`,
    )
    .join("");
  return primary + tagChips;
}

function syncProductDetailDots() {
  const track = el.productDetailSlides;
  const dotsRoot = el.productDetailDots;
  if (!track || dotsRoot.childElementCount === 0) return;
  const w = track.clientWidth || 1;
  const idx = Math.min(PRODUCT_DETAIL_SLIDES - 1, Math.max(0, Math.round(track.scrollLeft / w)));
  let i = 0;
  for (const dot of dotsRoot.querySelectorAll("span")) {
    dot.classList.toggle("is-active", i === idx);
    i += 1;
  }
}

function closeProductDetail() {
  if (el.productDetail.hidden) return;
  el.productDetail.hidden = true;
  el.productDetail.setAttribute("aria-hidden", "true");
  el.productDetail.classList.remove("product-detail--routine");
  el.productDetailUnpack.hidden = true;
  el.productDetailAlternates.hidden = true;
  el.productDetailShadeRow.hidden = false;
  productDetailKind = "vto";
  productDetailSkinRoutinePick = null;
}

/** Remembered from the budget quick reply so follow-ups (e.g. foundations) match the same tier. */
let chatPreferredTier = /** @type {'luxury'|'budget'|null} */ (null);

/** Last product carousel the user saw (for “show the other lane” follow-ups). */
let chatLastProductCarouselCatalog = /** @type {'lips'|'foundation'|null} */ (null);
/** @type {LrpCategoryId | null} */
let lrpLastCategory = null;
/** Last Product Match item the user asked to shop, for retailer / in-store follow-ups. */
let lrpShopProduct = /** @type {LrpProduct | null} */ (null);
/** @type {LrpConcern[]} */
let lrpLastConcerns = [];
/** Rotates optional “Absolutely 💙” so it is not on every recos reply. */
let lrpReplyCount = 0;

/** When set, the next Luxury / Budget chip picks this carousel instead of the default lip grid. */
let chatPendingCarousel = /** @type {null|'foundation'} */ (null);

/** Waiting for a typed budget vs luxury preference after `budgetQuestionHtml`. */
let chatAwaitingBudgetTierReply = false;

/** Waiting for typed confirmation before opening the named-product try-on flow. */
let chatAwaitingTryOnConfirm = false;

/** Waiting for typed confirmation before opening Skin Diagnosis (terms flow). */
let chatAwaitingSkinDiagConfirm = false;

/** Waiting for typed choice after opening a concern from skin results. */
let chatAwaitingSkinRoutineChoice = false;
let chatSkinRoutineConcernId = /** @type {string | null} */ (null);

/** @type {{ tier: 'luxury'|'budget'; index: number; catalog: ProductCatalogId } | null} */
let vtoSelectedProductKey = null;

/** Which flow populated the product detail sheet (controls footer + unpack block). */
let productDetailKind = /** @type {'vto'|'skin_routine'} */ ("vto");

/** Routine row shown in detail + “Where to buy” when opened from Skin Routine unpack. */
let productDetailSkinRoutinePick =
  /** @type {((typeof SKIN_ROUTINE_STEPS)[number]["day"] & { stepLabel: string; stepIndex: number }) | null} */ (null);

/** Day vs night row used for the alternates carousel while a routine product detail is open. */
let productDetailSkinRoutineMode = /** @type {'day'|'night'} */ ("day");

/** @param {number} score @param {number} scoreMax */
function skinRoutineScoreTier(score, scoreMax) {
  const max = scoreMax > 0 ? scoreMax : 40;
  const r = score / max;
  if (r < 0.375) return "Mild";
  if (r < 0.7) return "Moderate";
  return "Significant";
}

/** @param {number} score @param {number} scoreMax @param {string} [explicitFromConcern] */
function skinRoutineDisplaySeverity(score, scoreMax, explicitFromConcern) {
  const e = String(explicitFromConcern || "")
    .trim()
    .toLowerCase();
  if (e === "mild" || e === "moderate" || e === "significant") {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  return skinRoutineScoreTier(score, scoreMax);
}

/** @param {'luxury'|'budget'} tier @param {number} index @param {ProductCatalogId} [catalog] */
function openProductDetail(tier, index, catalog = "lips") {
  const list = getProductList(catalog, tier);
  if (!list || !list[index]) return;
  const p = list[index];
  vtoSelectedProductKey = { tier, index, catalog };
  productDetailKind = "vto";
  productDetailSkinRoutinePick = null;
  el.productDetail.classList.remove("product-detail--routine");
  el.productDetailUnpack.hidden = true;
  el.productDetailAlternates.hidden = true;
  el.productDetailShadeRow.hidden = false;

  el.productDetailBrand.textContent = p.brand;
  el.productDetailTitle.textContent = p.title;
  el.productDetailTags.innerHTML = productDetailTagsRowHTML(p);
  el.productDetailShadeDot.style.background = p.swatch;
  el.productDetailShadeLabel.textContent = p.shadeLabel;
  el.productDetailMeta.innerHTML = "";
  el.productDetailDescription.textContent = p.description;
  el.productDetailIngredientsBody.textContent = p.ingredients;

  const slidesHtml = Array.from({ length: PRODUCT_DETAIL_SLIDES }, () => productDetailSlideHTML(p)).join("");
  el.productDetailSlides.innerHTML = slidesHtml;
  const dotParts = [];
  for (let i = 0; i < PRODUCT_DETAIL_SLIDES; i += 1) {
    dotParts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
  }
  el.productDetailDots.innerHTML = dotParts.join("");

  el.productDetail.hidden = false;
  el.productDetail.setAttribute("aria-hidden", "false");
  el.productDetailScroll.scrollTop = 0;
  el.productDetailSlides.scrollLeft = 0;
  requestAnimationFrame(() => {
    syncProductDetailDots();
    el.productDetailClose.focus();
  });
}

/** @param {number} stepIndex @param {'day'|'night'} mode */
function openSkinRoutineProductDetail(stepIndex, mode) {
  const stepDef = SKIN_ROUTINE_STEPS[stepIndex];
  if (!stepDef) return;
  const row = stepDef[mode];
  if (!row || !row.description || !row.ingredients || !row.unpackBullets) return;

  vtoSelectedProductKey = null;
  productDetailKind = "skin_routine";
  productDetailSkinRoutineMode = mode;
  productDetailSkinRoutinePick = { ...row, stepLabel: stepDef.step, stepIndex };

  el.productDetail.classList.add("product-detail--routine");
  el.productDetailUnpack.hidden = false;
  el.productDetailAlternates.hidden = false;
  el.productDetailShadeRow.hidden = true;
  renderProductDetailRoutineAlternates(mode, stepIndex);

  el.productDetailBrand.textContent = row.brand;
  el.productDetailTitle.textContent = row.title;
  el.productDetailTags.innerHTML = productDetailTagsRowForRoutine(row);
  el.productDetailMeta.innerHTML = row.price
    ? `<div class="price-row"><span class="price-row__now">${escapeHtml(row.price)}</span></div>`
    : "";
  el.productDetailDescription.textContent = row.description;
  el.productDetailIngredientsBody.textContent = row.ingredients;

  el.productDetailUnpackLede.textContent =
    "Based on your Skin Diag scores and concerns, this pick was weighted for formulation fit—not only popularity. A few signals behind the match score:";

  el.productDetailUnpackList.innerHTML = row.unpackBullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("");

  const slidesHtml = Array.from({ length: PRODUCT_DETAIL_SLIDES }, () => productDetailSlideHTMLFromSrc(row.image)).join("");
  el.productDetailSlides.innerHTML = slidesHtml;
  const dotParts = [];
  for (let i = 0; i < PRODUCT_DETAIL_SLIDES; i += 1) {
    dotParts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
  }
  el.productDetailDots.innerHTML = dotParts.join("");

  el.productDetail.hidden = false;
  el.productDetail.setAttribute("aria-hidden", "false");
  el.productDetailScroll.scrollTop = 0;
  el.productDetailSlides.scrollLeft = 0;
  requestAnimationFrame(() => {
    syncProductDetailDots();
    el.productDetailClose.focus();
  });
}

function getVtoProduct() {
  const tier = vtoSelectedProductKey?.tier;
  const index = vtoSelectedProductKey?.index;
  const catalog = vtoSelectedProductKey?.catalog ?? "lips";
  if ((tier === "luxury" || tier === "budget") && Number.isFinite(index)) {
    const list = getProductList(catalog, tier);
    const product = list[index];
    if (product) return { tier, index, product, catalog };
  }
  return { tier: "luxury", index: 0, product: PRODUCTS.luxury[0], catalog: /** @type {ProductCatalogId} */ ("lips") };
}

function hexToRgb(hex) {
  let h = String(hex).trim();
  if (h.startsWith("#")) h = h.slice(1);
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (h.length !== 6) return null;
  const n = Number.parseInt(h, 16);
  if (!Number.isFinite(n)) return null;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** @param {{r:number,g:number,b:number}} rgb */
function rgbToHex(rgb) {
  return `#${[rgb.r, rgb.g, rgb.b]
    .map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, "0"))
    .join("")}`;
}

/**
 * Mixes two hex colors by `t` (0 keeps `a`, 1 keeps `b`).
 * @param {string} a
 * @param {string} b
 * @param {number} t
 */
function mixHex(a, b, t) {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  if (!ca || !cb) return ca ? rgbToHex(ca) : "#b97984";
  const clamped = Math.max(0, Math.min(1, t));
  return rgbToHex({
    r: ca.r + (cb.r - ca.r) * clamped,
    g: ca.g + (cb.g - ca.g) * clamped,
    b: ca.b + (cb.b - ca.b) * clamped,
  });
}

/** @param {string | undefined} hex */
function getTryOnReferenceAfterImage(hex) {
  const n = String(hex || "").trim().toUpperCase();
  const hit = TRYON_REFERENCE_SHADE_SWATCHES.find((s) => s.hex.toUpperCase() === n);
  return hit ? hit.image : TRYON_REFERENCE_DEFAULT_AFTER_IMAGE;
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function buildTryOnShades(p) {
  if (vtoSelectedProductKey?.catalog === "lips") {
    return TRYON_REFERENCE_SHADE_SWATCHES.map((s) => ({ hex: s.hex, label: s.label }));
  }
  // Keep the palette intentionally muted (dusty rose / mauve family) to match the calmer carousel treatment.
  const base = mixHex(p.swatch, "#b97a85", 0.2);
  const tones = [
    { hex: base, label: p.shadeLabel },
    { hex: mixHex(base, "#d9919a", 0.55), label: "Soft rose" },
    { hex: mixHex(base, "#a86a74", 0.3), label: "Dusty mauve" },
    { hex: mixHex(base, "#c1867f", 0.4), label: "Muted berry" },
    { hex: mixHex(base, "#d79f90", 0.52), label: "Warm nude rose" },
    { hex: mixHex(base, "#945f8f", 0.38), label: "Muted plum" },
    { hex: mixHex(base, "#c57f8d", 0.47), label: "Rosewood" },
    { hex: mixHex(base, "#b47883", 0.36), label: "Tea rose" },
    { hex: mixHex(base, "#d0a29b", 0.58), label: "Blush nude" },
    { hex: mixHex(base, "#8e5f78", 0.34), label: "Soft wine" },
    { hex: mixHex(base, "#c38d88", 0.43), label: "Warm mauve" },
  ];
  return tones;
}

function teardownTryOnFaceLandmarker() {
  if (tryOnFaceLandmarker) {
    tryOnFaceLandmarker.close();
    tryOnFaceLandmarker = null;
  }
  tryOnCachedLandmarks = null;
}

function hideVtoTryOnPanel() {
  if (!el.vtoTryOnPanel) return;
  el.vtoTryOnPanel.hidden = true;
  el.vtoTryOnPanel.setAttribute("aria-hidden", "true");
  tryOnUseReferenceModel = false;
  tryOnUsesStockShadePhotos = false;
  el.vtoTryOnViewport?.classList.remove("vto-tryon__viewport--user-selfie");
  el.vtoTryOnPanel.classList.remove("vto-flow__panel--tryon-alt");
  el.vtoTryOnModeToggle.classList.remove("is-active");
  el.vtoTryOnModeToggle.setAttribute("aria-pressed", "false");
  tryOnSliderAborter?.abort();
  tryOnSliderAborter = null;
}

function attachTryOnResizeObserver() {
  tryOnResizeObserver?.disconnect();
  const wrap = el.vtoTryOnAfterWrap;
  if (!wrap) return;
  tryOnResizeObserver = new ResizeObserver(() => {
    if (el.vtoTryOnPanel.hidden) return;
    layoutTryOnLipCanvas();
    if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
      applyTryOnReferenceStockAlignmentTransforms();
    }
    drawTryOnLipShade();
  });
  tryOnResizeObserver.observe(wrap);
}

function layoutTryOnLipCanvas() {
  const wrap = el.vtoTryOnAfterWrap;
  const canvas = el.vtoTryOnLipCanvas;
  if (!wrap || !canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(2, Math.round(wrap.clientWidth * dpr));
  const h = Math.max(2, Math.round(wrap.clientHeight * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array<{ x: number; y: number }>} landmarks
 * @param {number} w
 * @param {number} h
 * @param {string} hex
 */
function drawTryOnLipsFromLandmarks(ctx, landmarks, w, h, hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  for (let i = 0; i < TRYON_OUTER_MOUTH_IDX.length; i += 1) {
    const idx = TRYON_OUTER_MOUTH_IDX[i];
    const p = landmarks[idx];
    if (!p || typeof p.x !== "number" || typeof p.y !== "number") return false;
    const x = p.x * w;
    const y = p.y * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.save();
  ctx.filter = "blur(2px)";
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = 0.72;
  ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
  ctx.filter = "none";
  ctx.globalCompositeOperation = "source-over";
  return true;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} w
 * @param {number} h
 * @param {string} hex
 */
function drawTryOnFallbackMouth(ctx, w, h, hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  ctx.clearRect(0, 0, w, h);
  const cx = w * 0.5;
  const cy = h * 0.58;
  const rx = w * 0.13;
  const ry = h * 0.038;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.save();
  ctx.filter = "blur(2px)";
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = 0.65;
  ctx.fillStyle = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
  ctx.filter = "none";
  ctx.globalCompositeOperation = "source-over";
}

/** Before + all shade PNGs share 809×1024 — same `cover` scale; clear any legacy transforms. */
function applyTryOnReferenceStockAlignmentTransforms() {
  if (!(tryOnUsesStockShadePhotos || tryOnUseReferenceModel)) return;
  if (!TRYON_REFERENCE_SHADE_SWATCHES[tryOnShadeIndex]) return;
  const wrap = el.vtoTryOnAfterWrap;
  if (!wrap || wrap.clientWidth <= 0 || wrap.clientHeight <= 0) return;

  el.vtoTryOnBefore.style.transform = "";
  el.vtoTryOnBefore.style.transformOrigin = "";
  el.vtoTryOnAfterBase.style.transform = "";
  el.vtoTryOnAfterBase.style.transformOrigin = "";
}

function syncTryOnReferenceModeUi() {
  const selfieSrc = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
    const activeHex = tryOnShadeList[tryOnShadeIndex]?.hex;
    el.vtoTryOnBefore.style.backgroundImage = `url(${JSON.stringify(TRYON_REFERENCE_BEFORE_IMAGE)})`;
    el.vtoTryOnAfterBase.style.backgroundImage = `url(${JSON.stringify(getTryOnReferenceAfterImage(activeHex))})`;
  } else {
    if (!selfieSrc) return;
    const bg = `url(${JSON.stringify(selfieSrc)})`;
    el.vtoTryOnBefore.style.backgroundImage = bg;
    el.vtoTryOnAfterBase.style.backgroundImage = bg;
  }

  el.vtoTryOnBefore.style.marginTop = "";
  if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
    const row = TRYON_REFERENCE_SHADE_SWATCHES[tryOnShadeIndex];
    el.vtoTryOnBefore.style.backgroundPosition = "center top";
    el.vtoTryOnAfterBase.style.backgroundPosition = row?.afterBgPosition || "center top";
    el.vtoTryOnAfterBase.style.marginTop = "";
    applyTryOnReferenceStockAlignmentTransforms();
  } else {
    el.vtoTryOnBefore.style.backgroundPosition = "center 10%";
    el.vtoTryOnAfterBase.style.backgroundPosition = "center 10%";
    el.vtoTryOnAfterBase.style.marginTop = "";
    el.vtoTryOnBefore.style.transform = "";
    el.vtoTryOnBefore.style.transformOrigin = "";
    el.vtoTryOnAfterBase.style.transform = "";
    el.vtoTryOnAfterBase.style.transformOrigin = "";
  }

  el.vtoTryOnPanel.classList.toggle("vto-flow__panel--tryon-alt", tryOnUseReferenceModel);
  el.vtoTryOnModeToggle.classList.toggle("is-active", tryOnUseReferenceModel);
  el.vtoTryOnModeToggle.setAttribute("aria-pressed", tryOnUseReferenceModel ? "true" : "false");

  if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
    tryOnCachedLandmarks = null;
    const ctx = el.vtoTryOnLipCanvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, el.vtoTryOnLipCanvas.width, el.vtoTryOnLipCanvas.height);
  }
}

function syncTryOnReferenceOverlayShade() {
  const hex = tryOnShadeList[tryOnShadeIndex]?.hex;
  if (!hex || !el.vtoTryOnAltLipOverlay) return;
  el.vtoTryOnAltLipOverlay.style.color = hex;
}

function drawTryOnLipShade() {
  // Product request: never paint synthetic lip color on user selfies.
  // Keep stock/reference compare visuals, but remove canvas overlay for real-face mode.
  if (tryOnUsesStockShadePhotos) {
    const ctx = el.vtoTryOnLipCanvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, el.vtoTryOnLipCanvas.width, el.vtoTryOnLipCanvas.height);
    return;
  }
  if (tryOnUseReferenceModel) {
    syncTryOnReferenceOverlayShade();
    return;
  }
  const ctx = el.vtoTryOnLipCanvas.getContext("2d");
  if (ctx) ctx.clearRect(0, 0, el.vtoTryOnLipCanvas.width, el.vtoTryOnLipCanvas.height);
  return;
}

async function ensureTryOnFaceLandmarker() {
  if (tryOnFaceLandmarker) return tryOnFaceLandmarker;
  const ver = "0.10.14";
  const wasmPath = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${ver}/wasm`;
  const modelPath =
    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

  async function create(delegate) {
    const vision = await import(/* webpackIgnore: true */ `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${ver}/+esm`);
    const { FaceLandmarker, FilesetResolver } = vision;
    const filesetResolver = await FilesetResolver.forVisionTasks(wasmPath);
    return FaceLandmarker.createFromOptions(filesetResolver, {
      baseOptions: { modelAssetPath: modelPath, delegate },
      runningMode: "IMAGE",
      numFaces: 1,
    });
  }

  try {
    tryOnFaceLandmarker = await create("GPU");
  } catch {
    try {
      tryOnFaceLandmarker = await create("CPU");
    } catch {
      tryOnFaceLandmarker = null;
    }
  }
  return tryOnFaceLandmarker;
}

async function runTryOnFaceLandmarks() {
  tryOnCachedLandmarks = null;
  const src = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (!src) return;

  const landmarker = await ensureTryOnFaceLandmarker();
  if (!landmarker) return;

  const img = new Image();
  img.decoding = "async";
  img.src = src;
  try {
    await img.decode();
  } catch {
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(undefined);
      img.onerror = () => reject(new Error("image"));
    }).catch(() => {});
  }

  try {
    const r = landmarker.detect(img);
    tryOnCachedLandmarks = r.faceLandmarks?.[0] ?? null;
  } catch {
    tryOnCachedLandmarks = null;
  }
}

function syncTryOnViewportFaceFraming() {
  const vp = el.vtoTryOnViewport;
  if (!vp) return;
  vp.classList.toggle("vto-tryon__viewport--user-selfie", !tryOnUsesStockShadePhotos);
}

/** @param {typeof PRODUCTS.luxury[0]} p */
function applyTryOnProductChrome(p) {
  const k = vtoSelectedProductKey;
  tryOnShadeContextKey = k ? `${k.catalog}:${k.tier}:${k.index}` : null;
  tryOnUsesStockShadePhotos = false;
  el.vtoTryOnMiniTitle.textContent = p.title;
  const selfieForMini = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (el.vtoTryOnMiniPhoto) {
    el.vtoTryOnMiniPhoto.src = p.cardImage;
    el.vtoTryOnMiniPhoto.alt = `${p.title} — ${p.shadeLabel}`;
  }
  if (tryOnFromChatSingleProduct) {
    tryOnShadeList = [{ hex: p.swatch, label: p.shadeLabel }];
    tryOnShadeIndex = 0;
    syncTryOnMiniShadeRow();
    el.vtoTryOnShades.innerHTML = "";
    el.vtoTryOnShades.hidden = true;
    el.vtoTryOnShades.setAttribute("aria-hidden", "true");
    if (selfieForMini && el.vtoTryOnMiniThumb) {
      el.vtoTryOnMiniThumb.classList.add("vto-tryon__mini-thumb--selfie-under");
      el.vtoTryOnMiniThumb.style.backgroundImage = `url(${JSON.stringify(selfieForMini)})`;
    } else if (el.vtoTryOnMiniThumb) {
      el.vtoTryOnMiniThumb.classList.remove("vto-tryon__mini-thumb--selfie-under");
      el.vtoTryOnMiniThumb.style.backgroundImage = "";
    }
    syncTryOnViewportFaceFraming();
    return;
  }
  el.vtoTryOnShades.hidden = false;
  el.vtoTryOnShades.removeAttribute("aria-hidden");
  if (el.vtoTryOnMiniThumb) {
    el.vtoTryOnMiniThumb.classList.remove("vto-tryon__mini-thumb--selfie-under");
    el.vtoTryOnMiniThumb.style.backgroundImage = "";
  }
  const selfieForStock = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  const isUserCapturedSelfie =
    typeof selfieForStock === "string" &&
    (selfieForStock.startsWith("blob:") || selfieForStock.startsWith("data:"));
  /** Stock model PNG before/after only when not using a real camera/upload selfie (blob/data URL). */
  tryOnUsesStockShadePhotos = k?.catalog === "lips" && !!selfieForStock && !isUserCapturedSelfie;
  tryOnShadeList = buildTryOnShades(p);
  tryOnShadeIndex = 0;
  syncTryOnMiniShadeRow();
  renderTryOnShadeButtons();
  syncTryOnViewportFaceFraming();
}

function syncTryOnMiniShadeRow() {
  const cur = tryOnShadeList[tryOnShadeIndex];
  if (!cur) return;
  el.vtoTryOnMiniDot.style.background = cur.hex;
  el.vtoTryOnMiniShade.textContent = cur.label;
}

function renderTryOnShadeButtons() {
  const root = el.vtoTryOnShades;
  root.innerHTML = "";
  tryOnShadeList.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `vto-tryon__shade-btn${i === tryOnShadeIndex ? " is-selected" : ""}`;
    btn.style.background = s.hex;
    btn.setAttribute("role", "option");
    btn.setAttribute("aria-selected", i === tryOnShadeIndex ? "true" : "false");
    btn.addEventListener("click", () => selectTryOnShade(i));
    root.appendChild(btn);
  });
}

/** @param {number} i */
function selectTryOnShade(i) {
  if (i < 0 || i >= tryOnShadeList.length) return;
  tryOnShadeIndex = i;
  let j = 0;
  for (const btn of el.vtoTryOnShades.querySelectorAll(".vto-tryon__shade-btn")) {
    btn.classList.toggle("is-selected", j === i);
    btn.setAttribute("aria-selected", j === i ? "true" : "false");
    j += 1;
  }
  syncTryOnMiniShadeRow();
  if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
    syncTryOnReferenceModeUi();
  }
  drawTryOnLipShade();
}

/** @param {boolean} useReference */
function setTryOnReferenceMode(useReference) {
  const wasReference = tryOnUseReferenceModel;
  tryOnUseReferenceModel = !!useReference;
  syncTryOnReferenceModeUi();
  drawTryOnLipShade();
  if (wasReference && !tryOnUseReferenceModel) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        layoutTryOnLipCanvas();
        void runTryOnFaceLandmarks().then(() => {
          layoutTryOnLipCanvas();
          drawTryOnLipShade();
        });
      });
    });
  }
}

/** @param {number} pct 0–100 from left */
function setTryOnSplit(pct) {
  const p = Math.min(100, Math.max(4, pct));
  const s = String(p);
  el.vtoTryOnViewport.style.setProperty("--vto-split", s);
  const stack = el.vtoTryOnSliderKnob?.closest(".vto-tryon__after-stack");
  if (stack) stack.style.setProperty("--vto-split", s);
}

function initTryOnSlider() {
  tryOnSliderAborter?.abort();
  tryOnSliderAborter = new AbortController();
  const { signal } = tryOnSliderAborter;
  const vp = el.vtoTryOnViewport;
  const knob = el.vtoTryOnSliderKnob;
  const scrubRoot = /** @type {HTMLElement} */ (knob.closest(".vto-tryon__after-stack") || vp);

  /** @type {number | null} */
  let scrubPointerId = null;
  /** @type {boolean} */
  let scrubMouse = false;
  /** Knob is centered on the seam — map click X to seam would jump; drag by delta from grab instead. */
  let scrubKnobDeltaMode = false;
  /** @type {number} */
  let scrubGrabClientX = 0;
  /** @type {number} */
  let scrubGrabSplit = 50;

  const readTryOnSplit = () => {
    const v = getComputedStyle(vp).getPropertyValue("--vto-split").trim();
    const n = Number.parseFloat(v);
    return Number.isFinite(n) ? n : 50;
  };

  /** Seam X is `(100 - split)%` from left (see `--vto-split` + clip). Map pointer X so handle follows cursor. */
  const splitFromClientX = (clientX) => {
    const r = scrubRoot.getBoundingClientRect();
    if (r.width <= 0) return null;
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    return 100 - (x / r.width) * 100;
  };

  const onPointerAbsolute = (clientX) => {
    const s = splitFromClientX(clientX);
    if (s !== null) setTryOnSplit(s);
  };

  const onPointerMove = (clientX) => {
    const r = scrubRoot.getBoundingClientRect();
    if (r.width <= 0) return;
    if (scrubKnobDeltaMode) {
      const deltaPct = ((clientX - scrubGrabClientX) / r.width) * 100;
      setTryOnSplit(scrubGrabSplit - deltaPct);
    } else {
      const s = splitFromClientX(clientX);
      if (s !== null) setTryOnSplit(s);
    }
  };

  const endScrubSession = () => {
    scrubKnobDeltaMode = false;
  };

  const stopScrubPointer = (/** @type {PointerEvent} */ e) => {
    if (scrubPointerId === null || e.pointerId !== scrubPointerId) return;
    scrubPointerId = null;
    endScrubSession();
  };

  /** Document capture: moves still fire when pointer capture retargets away from `window` (common on touch). */
  const onDocPointerMove = (/** @type {PointerEvent} */ e) => {
    if (scrubPointerId === null || scrubPointerId !== e.pointerId) return;
    e.preventDefault();
    onPointerMove(e.clientX);
  };

  const stopMouseScrub = () => {
    scrubMouse = false;
    endScrubSession();
  };

  const onDocMouseMove = (/** @type {MouseEvent} */ e) => {
    if (!scrubMouse) return;
    e.preventDefault();
    onPointerMove(e.clientX);
  };

  document.addEventListener("pointermove", onDocPointerMove, { signal, passive: false, capture: true });
  document.addEventListener("pointerup", stopScrubPointer, { signal, capture: true });
  document.addEventListener("pointercancel", stopScrubPointer, { signal, capture: true });
  document.addEventListener("mousemove", onDocMouseMove, { signal, passive: false, capture: true });
  document.addEventListener("mouseup", stopMouseScrub, { signal, capture: true });

  const clearScrubPointerIfMatch = (/** @type {PointerEvent} */ e) => {
    if (scrubPointerId !== null && e.pointerId === scrubPointerId) {
      scrubPointerId = null;
      endScrubSession();
    }
  };
  knob.addEventListener("lostpointercapture", clearScrubPointerIfMatch, { signal });
  vp.addEventListener("lostpointercapture", clearScrubPointerIfMatch, { signal });

  vp.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.target.closest(".vto-tryon__dock") || e.target.closest(".vto-tryon__close-frost") || e.target.closest(".vto-tryon__mode-toggle")) return;
      if (knob.contains(/** @type {Node} */ (e.target))) return;
      scrubPointerId = e.pointerId;
      scrubKnobDeltaMode = false;
      e.preventDefault();
      onPointerAbsolute(e.clientX);
      try {
        vp.setPointerCapture(e.pointerId);
      } catch {
        //
      }
    },
    { signal }
  );

  // Mouse fallback for environments where Pointer Events are not reliable.
  vp.addEventListener(
    "mousedown",
    (e) => {
      if (e.button !== 0) return;
      if (e.target.closest(".vto-tryon__dock") || e.target.closest(".vto-tryon__close-frost") || e.target.closest(".vto-tryon__mode-toggle")) return;
      if (knob.contains(/** @type {Node} */ (e.target))) return;
      scrubMouse = true;
      scrubKnobDeltaMode = false;
      e.preventDefault();
      onPointerAbsolute(e.clientX);
    },
    { signal }
  );

  knob.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.stopPropagation();
      e.preventDefault();
      scrubPointerId = e.pointerId;
      scrubKnobDeltaMode = true;
      scrubGrabClientX = e.clientX;
      scrubGrabSplit = readTryOnSplit();
      try {
        knob.setPointerCapture(e.pointerId);
      } catch {
        try {
          vp.setPointerCapture(e.pointerId);
        } catch {
          //
        }
      }
    },
    { signal }
  );

  knob.addEventListener(
    "mousedown",
    (e) => {
      if (e.button !== 0) return;
      e.stopPropagation();
      e.preventDefault();
      scrubMouse = true;
      scrubKnobDeltaMode = true;
      scrubGrabClientX = e.clientX;
      scrubGrabSplit = readTryOnSplit();
    },
    { signal }
  );
}

function showVtoTryOn() {
  const selfieSrc = vtoSelfiePreviewUrl || sessionPersistedSelfieUrl;
  if (!selfieSrc) return;
  if (!vtoSelfiePreviewUrl) vtoSelfiePreviewUrl = sessionPersistedSelfieUrl;
  stopVtoCameraStream();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTryOnPanel.hidden = false;
  el.vtoTryOnPanel.setAttribute("aria-hidden", "false");
  applyTryOnProductChrome(getVtoProduct().product);
  setTryOnReferenceMode(false);
  setTryOnSplit(50);
  initTryOnSlider();
  attachTryOnResizeObserver();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      layoutTryOnLipCanvas();
      if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
        applyTryOnReferenceStockAlignmentTransforms();
      }
      const landmarkPromise = tryOnUsesStockShadePhotos ? Promise.resolve() : runTryOnFaceLandmarks();
      void landmarkPromise.then(() => {
        layoutTryOnLipCanvas();
        if (tryOnUsesStockShadePhotos || tryOnUseReferenceModel) {
          applyTryOnReferenceStockAlignmentTransforms();
        }
        drawTryOnLipShade();
      });
    });
  });

  requestAnimationFrame(() => el.vtoTryOnSliderKnob.focus());
}

function initProductDetail() {
  el.chatView.addEventListener("click", (e) => {
    const btn = e.target.closest(".product-card__learn");
    if (!btn) return;
    const card = btn.closest(".product-card");
    if (!card) return;
    const tier = card.getAttribute("data-tier");
    const idx = Number(card.getAttribute("data-product-index"));
    const catalog = card.getAttribute("data-catalog") === "foundation" ? "foundation" : "lips";
    if (tier !== "luxury" && tier !== "budget") return;
    if (!Number.isFinite(idx)) return;
    if (!getProductList(catalog, tier)[idx]) return;
    openProductDetail(tier, idx, catalog);
  });

  el.productDetailClose.addEventListener("click", () => closeProductDetail());

  el.productDetailBuy.addEventListener("click", () => {
    void (async () => {
      const product = productForWhereToBuyFromDetail();
      closeProductDetail();
      enterChatView();
      chatGenerationEpoch += 1;
      const myGen = chatGenerationEpoch;
      flow = "busy";
      updateComposerTextState();
      await assistantThink();
      if (myGen !== chatGenerationEpoch) return;
      appendAssistantBlock(buildWhereToBuyMessageHtml(product));
      flow = "idle";
      updateComposerTextState();
      requestAnimationFrame(() => {
        el.input?.focus();
      });
    })();
  });

  el.productDetailSlides.addEventListener("scroll", () => syncProductDetailDots(), { passive: true });

  el.productDetailAlternatesStrip?.addEventListener("click", (e) => {
    const card = e.target.closest("[data-detail-alternate-step]");
    if (!card || !(card instanceof HTMLElement)) return;
    const step = Number(card.getAttribute("data-detail-alternate-step"));
    if (!Number.isFinite(step)) return;
    openSkinRoutineProductDetail(step, productDetailSkinRoutineMode);
  });

  el.productDetailAlternatesStrip?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-detail-alternate-step]");
    if (!card || !(card instanceof HTMLElement)) return;
    e.preventDefault();
    const step = Number(card.getAttribute("data-detail-alternate-step"));
    if (!Number.isFinite(step)) return;
    openSkinRoutineProductDetail(step, productDetailSkinRoutineMode);
  });

  window.addEventListener("resize", () => {
    if (!el.productDetail.hidden) syncProductDetailDots();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !el.productDetail.hidden) {
      e.preventDefault();
      closeProductDetail();
    }
  });
}

function syncVtoConsentButton() {
  const ok = el.vtoTermsCheckbox.checked;
  el.vtoConsentBtn.disabled = !ok;
}

function revokeVtoSelfiePreview() {
  if (vtoSelfiePreviewUrl) {
    if (vtoSelfiePreviewUrl !== sessionPersistedSelfieUrl) {
      URL.revokeObjectURL(vtoSelfiePreviewUrl);
    }
    vtoSelfiePreviewUrl = null;
  }
  el.vtoSelfiePreviewImg.removeAttribute("src");
  el.vtoSelfiePreviewImg.alt = "";
}

function queueCaptureTimer(fn, ms) {
  const id = window.setTimeout(() => {
    const i = vtoCaptureTimers.indexOf(id);
    if (i >= 0) vtoCaptureTimers.splice(i, 1);
    fn();
  }, ms);
  vtoCaptureTimers.push(id);
  return id;
}

function clearVtoCaptureTimers() {
  for (const id of vtoCaptureTimers) window.clearTimeout(id);
  vtoCaptureTimers.length = 0;
}

/** @param {SVGPathElement | null} path */
function resetSelfieGuidePathElement(path) {
  if (!path) return;
  path.classList.remove("is-visible");
  path.style.transition = "";
  path.style.removeProperty("stroke-dasharray");
  path.style.removeProperty("stroke-dashoffset");
}

function resetSelfieGuidePath() {
  resetSelfieGuidePathElement(el.vtoSelfieGuidePath);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathLeft);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathRight);
}

/**
 * Skin diagnosis head-turn UX: fill only the left or right arc of the oval to match turn direction.
 * @param {'left'|'right'} side
 * @param {number} durationMs
 */
function animateSelfieGuideHalf(side, durationMs) {
  const path = side === "left" ? el.vtoSelfieGuidePathLeft : el.vtoSelfieGuidePathRight;
  if (!path) return Promise.resolve();
  let len = path.getTotalLength();
  if (!Number.isFinite(len) || len <= 0) len = 600;
  path.style.strokeDasharray = String(len);
  path.style.strokeDashoffset = String(len);
  path.classList.add("is-visible");
  return new Promise((resolve) => {
    const sec = Math.max(0.35, durationMs / 1000);
    requestAnimationFrame(() => {
      path.style.transition = `stroke-dashoffset ${sec}s linear`;
      path.style.strokeDashoffset = "0";
    });
    window.setTimeout(resolve, durationMs + 60);
  });
}

function stopVtoCameraStream() {
  clearVtoCaptureTimers();
  if (vtoCameraStream) {
    for (const t of vtoCameraStream.getTracks()) t.stop();
    vtoCameraStream = null;
  }
  el.vtoSelfieVideo.srcObject = null;
  el.vtoSelfieCameraPanel.hidden = true;
  el.vtoSelfieCaptureComplete.hidden = true;
  el.vtoSelfieGuidePill.textContent = "";
  resetSelfieGuidePath();
}

function showVtoSelfieCameraPanel() {
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoSelfieCameraPanel.hidden = false;
  syncVtoExperienceBrandUi();
}

function retakeVtoSelfie() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  if (sessionPersistedSelfieUrl) {
    URL.revokeObjectURL(sessionPersistedSelfieUrl);
    sessionPersistedSelfieUrl = null;
  }
  revokeVtoSelfiePreview();
  clearSkinDiagSelfieAngles();
  showVtoSelfieStub();
  requestAnimationFrame(() => el.vtoSelfieTake.focus());
}

function waitForSelfieVideoSize() {
  return new Promise((resolve) => {
    const v = el.vtoSelfieVideo;
    if (v.videoWidth > 0 && v.videoHeight > 0) {
      resolve();
      return;
    }
    v.addEventListener("loadeddata", () => resolve(), { once: true });
  });
}

/** Skin Diagnosis: post-countdown head pose prompts + matching half-oval progress ring. */
async function startSkinDiagHeadTurnPhases() {
  resetSelfieGuidePath();
  el.vtoSelfieGuidePill.textContent = "Turn your face to the right ›";
  await animateSelfieGuideHalf("right", 1900);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathRight);
  el.vtoSelfieGuidePill.textContent = "‹ Turn your face to the left";
  await animateSelfieGuideHalf("left", 1900);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathLeft);
  resetSelfieGuidePathElement(el.vtoSelfieGuidePathRight);
  el.vtoSelfieGuidePill.textContent = "Look straight ahead";
  await wait(1100);
  el.vtoSelfieGuidePill.textContent = "";
}

async function runSelfieCountdownOnly() {
  for (let n = 3; n >= 1; n -= 1) {
    el.vtoSelfieGuidePill.textContent = `${n}...`;
    await wait(1000);
  }
}

/**
 * @param {{ skipCountdown?: boolean }} [opts]
 */
function startSelfieCaptureSequence(opts = {}) {
  const skipCountdown = !!opts.skipCountdown;
  clearVtoCaptureTimers();
  resetSelfieGuidePath();

  function runCaptureWindow() {
    el.vtoSelfieGuidePill.textContent = "Stay just like that";
    const path = el.vtoSelfieGuidePath;
    if (path) {
      let len = path.getTotalLength();
      if (!Number.isFinite(len) || len <= 0) len = 900;
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.classList.add("is-visible");
      requestAnimationFrame(() => {
        path.style.transition = "stroke-dashoffset 2.45s linear";
        path.style.strokeDashoffset = "0";
      });
    }
    queueCaptureTimer(() => {
      const p = el.vtoSelfieGuidePath;
      if (p) {
        p.classList.remove("is-visible");
        p.style.transition = "";
      }
      captureSelfieFrameFromVideo();
    }, 2700);
  }

  /** @param {number} n */
  function runCountdown(n, done) {
    if (n <= 0) {
      done();
      return;
    }
    // Keep countdown copy compact to mirror the target selfie UX.
    el.vtoSelfieGuidePill.textContent = `${n}...`;
    queueCaptureTimer(() => runCountdown(n - 1, done), 1000);
  }

  if (skipCountdown) {
    runCaptureWindow();
    return;
  }
  runCountdown(3, runCaptureWindow);
}

function captureSelfieFrameFromVideo() {
  const video = el.vtoSelfieVideo;
  const canvas = el.vtoSelfieCaptureCanvas;
  const w = video.videoWidth;
  const h = video.videoHeight;
  if (!w || !h) {
    stopVtoCameraStream();
    showVtoSelfieStub();
    return;
  }
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.save();
  ctx.translate(w, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, w, h);
  ctx.restore();

  canvas.toBlob(
    (blob) => {
      if (!blob) {
        stopVtoCameraStream();
        showVtoSelfieStub();
        return;
      }
      el.vtoSelfieCaptureComplete.hidden = false;
      queueCaptureTimer(() => {
        el.vtoSelfieCaptureComplete.hidden = true;
        revokeVtoSelfiePreview();
        if (sessionPersistedSelfieUrl) {
          URL.revokeObjectURL(sessionPersistedSelfieUrl);
          sessionPersistedSelfieUrl = null;
        }
        vtoSelfiePreviewUrl = URL.createObjectURL(blob);
        el.vtoSelfiePreviewImg.src = vtoSelfiePreviewUrl;
        el.vtoSelfiePreviewImg.alt = "Captured selfie preview";
        stopVtoCameraStream();
        if (skinDiagFlowActive) {
          continueSkinDiagAfterSelfieCapture();
          return;
        }
        showVtoSelfieConfirm();
        requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
      }, 850);
    },
    "image/jpeg",
    0.92
  );
}

/** Opens the camera panel and requests access via the browser’s native permission prompt (user gesture from “Take a selfie”). */
async function startVtoSelfieCamera() {
  syncVtoExperienceBrandUi();
  showVtoSelfieCameraPanel();
  el.vtoSelfieGuidePill.textContent = "Starting camera…";

  if (!navigator.mediaDevices?.getUserMedia) {
    stopVtoCameraStream();
    showVtoSelfieStub();
    window.alert("Camera is not available in this browser or context (try HTTPS or a current browser).");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    vtoCameraStream = stream;
    el.vtoSelfieVideo.srcObject = stream;
    await el.vtoSelfieVideo.play();
    await waitForSelfieVideoSize();
    el.vtoSelfieGuidePill.textContent = "";
    startSelfieCaptureSequence();
  } catch {
    stopVtoCameraStream();
    showVtoSelfieStub();
    window.alert("Camera permission was denied or the camera could not be opened.");
  }
}

/** @param {File} file */
async function handleUploadedSelfieFile(file) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(undefined);
      img.onerror = () => reject(new Error("image-load-failed"));
      img.src = objectUrl;
    });
  } catch {
    URL.revokeObjectURL(objectUrl);
    window.alert("That file could not be read as an image. Please choose another photo.");
    return;
  }
  stopVtoCameraStream();
  revokeVtoSelfiePreview();
  if (sessionPersistedSelfieUrl) {
    URL.revokeObjectURL(sessionPersistedSelfieUrl);
    sessionPersistedSelfieUrl = null;
  }
  vtoSelfiePreviewUrl = objectUrl;
  el.vtoSelfiePreviewImg.src = vtoSelfiePreviewUrl;
  el.vtoSelfiePreviewImg.alt = "Uploaded selfie preview";
  if (skinDiagFlowActive) {
    continueSkinDiagAfterSelfieCapture();
    return;
  }
  showVtoSelfieConfirm();
  requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
}

/** @param {boolean} active */
function setVtoComposerChrome(active) {
  const root = el.composerRoot;
  const plus = el.composerPlus;
  const ta = el.input;
  if (!root || !ta) return;
  root.classList.toggle("composer--vto", active);
  if (plus) plus.hidden = active;
  ta.placeholder = ta.dataset.placeholderDefault || "Ask anything";
  requestAnimationFrame(() => syncShellComposerStackVar());
}

/** Keep the shell inside the visible phone viewport (iOS toolbars / home indicator). */
function syncAppViewportHeight() {
  const vv = window.visualViewport;
  const h = Math.round((vv && vv.height) || window.innerHeight);
  document.documentElement.style.setProperty("--app-height", `${Math.max(h, 1)}px`);
}

/** Sets overlay insets on `.shell` so full-screen pages cover the ChatGPT nav and sit above the composer. */
function syncShellComposerStackVar() {
  syncAppViewportHeight();
  const shell = el.shell || el.shellMain;
  const root = el.composerRoot;
  if (!shell || !root) return;
  const foot = el.composerFootnote;
  const nav = shell.querySelector?.(".nav") || document.querySelector(".nav");
  const h = Math.ceil(root.offsetHeight + (foot?.offsetHeight ?? 0));
  const navH = Math.ceil(nav?.offsetHeight ?? 52);
  shell.style.setProperty("--shell-composer-stack", `${Math.max(h, 1)}px`);
  shell.style.setProperty("--chatgpt-nav-h", `${Math.max(navH, 1)}px`);
  if (el.shellMain && el.shellMain !== shell) {
    el.shellMain.style.setProperty("--shell-composer-stack", `${Math.max(h, 1)}px`);
    el.shellMain.style.setProperty("--chatgpt-nav-h", `${Math.max(navH, 1)}px`);
  }
  el.lrpFlow?.style.setProperty("--lrp-composer-h", `${Math.ceil(root.offsetHeight)}px`);
}

let shellComposerStackResizeTimer = /** @type {number | null} */ (null);

function scheduleShellChromeSync() {
  if (shellComposerStackResizeTimer != null) window.clearTimeout(shellComposerStackResizeTimer);
  shellComposerStackResizeTimer = window.setTimeout(() => {
    shellComposerStackResizeTimer = null;
    syncShellComposerStackVar();
  }, 50);
}

function initShellComposerStackObserver() {
  const root = el.composerRoot;
  if (!el.shellMain || !root) return;
  syncShellComposerStackVar();
  window.addEventListener("resize", scheduleShellChromeSync);
  window.visualViewport?.addEventListener("resize", scheduleShellChromeSync);
  window.visualViewport?.addEventListener("scroll", scheduleShellChromeSync);
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => syncShellComposerStackVar()) : null;
  ro?.observe(root);
  if (el.composerFootnote) ro?.observe(el.composerFootnote);
  const nav = el.shell?.querySelector(".nav") || document.querySelector(".nav");
  if (nav) ro?.observe(nav);
}

function clearSkinDiagPostQuizTimer() {
  while (skinDiagPostQuizTimers.length > 0) {
    const id = skinDiagPostQuizTimers.pop();
    if (id != null) window.clearTimeout(id);
  }
}

function resetSkinDiagLoadingRows() {
  const panel = el.vtoSkinDiagLoadingPanel;
  if (!panel) return;
  panel.classList.remove("is-animating");
  for (const step of panel.querySelectorAll(".lrp-loader__step")) {
    step.classList.remove("is-active", "is-done");
  }
}

function hideSkinDiagLoadingPanel() {
  if (!el.vtoSkinDiagLoadingPanel) return;
  el.vtoSkinDiagLoadingPanel.hidden = true;
  el.vtoSkinDiagLoadingPanel.setAttribute("aria-hidden", "true");
  resetSkinDiagLoadingRows();
}

function persistCapturedSelfieForSession() {
  if (!vtoSelfiePreviewUrl) return;
  if (sessionPersistedSelfieUrl && sessionPersistedSelfieUrl !== vtoSelfiePreviewUrl) {
    URL.revokeObjectURL(sessionPersistedSelfieUrl);
  }
  sessionPersistedSelfieUrl = vtoSelfiePreviewUrl;
}

function continueSkinDiagAfterSelfieCapture() {
  persistCapturedSelfieForSession();
  skinDiagSelfieSkipped = false;
  startSkinDiagPostQuizFlow();
}

function hideSkinDiagSkinAnalysis() {
  if (!el.vtoSkinDiagSkinPanel) return;
  el.vtoSkinDiagSkinPanel.hidden = true;
  el.vtoSkinDiagSkinPanel.setAttribute("aria-hidden", "true");
}

function isSkinDiagSkinAnalysisOpen() {
  return Boolean(el.vtoSkinDiagSkinPanel && !el.vtoSkinDiagSkinPanel.hidden);
}

function hideSkinDiagClimateAnalysis() {
  if (!el.vtoSkinDiagClimatePanel) return;
  el.vtoSkinDiagClimatePanel.hidden = true;
  el.vtoSkinDiagClimatePanel.setAttribute("aria-hidden", "true");
}

function isSkinDiagClimateAnalysisOpen() {
  return Boolean(el.vtoSkinDiagClimatePanel && !el.vtoSkinDiagClimatePanel.hidden);
}

function showSkinDiagClimateAnalysis() {
  hideSkinDiagSkinAnalysis();
  const place = skinDiagActiveQuizAnswers().location || "[location]";
  if (el.vtoSkinDiagClimateLede) {
    el.vtoSkinDiagClimateLede.textContent = `Your climate can impact your [service] in many ways. In ${place}, based on data from the last 30 days, your skin could be exposed to:`;
  }
  if (el.vtoSkinDiagClimatePanel) {
    el.vtoSkinDiagClimatePanel.hidden = false;
    el.vtoSkinDiagClimatePanel.setAttribute("aria-hidden", "false");
  }
  requestAnimationFrame(() => el.vtoSkinDiagClimateClose?.focus());
}

function skinDiagAnalysisChevronHTML() {
  return `<span class="vto-skin-analysis__chev" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>`;
}

/** @param {{ id: string, label: string, score: number, status: string, statusLabel: string }} row */
function skinDiagAnalysisItemHTML(row, opts = {}) {
  const copy = SKIN_DIAG_CONCERN_COPY[row.id] || {
    prevalence: 30,
    cause: "a mix of UV, dryness, and how this area of the face moves day to day.",
    tip: "A targeted formula in your routine, plus SPF, is the usual place to start.",
  };
  const open = opts.open ? " is-open" : "";
  const badge = opts.showBadge
    ? `<span class="vto-skin-analysis__badge vto-skin-analysis__badge--${escapeAttr(row.status)}">${escapeHtml(row.statusLabel)}</span>`
    : "";
  const scoreChip = opts.showScore
    ? `<span class="vto-skin-analysis__trigger-score">${row.score}/100</span>`
    : "";
  return `<div class="vto-skin-analysis__item${open}">
    <button type="button" class="vto-skin-analysis__trigger" aria-expanded="${opts.open ? "true" : "false"}">
      <span class="vto-skin-analysis__item-title">${escapeHtml(row.label)}</span>
      ${scoreChip}
      ${badge}
      ${skinDiagAnalysisChevronHTML()}
    </button>
    <div class="vto-skin-analysis__panel">
      <div class="vto-skin-analysis__measure">
        <div class="vto-skin-analysis__measure-top">
          <span>Your skin</span>
          <span class="vto-skin-analysis__score"><strong>${row.score}</strong><span>/100</span></span>
        </div>
        <div class="vto-skin-analysis__meter" style="--pos: ${row.score}%"><span></span></div>
      </div>
      <p class="vto-skin-analysis__copy">Your pictures show signs of ${escapeHtml(row.label)}, a challenge that over ${copy.prevalence}% of our users face. This can be caused by ${escapeHtml(copy.cause)}</p>
      <div class="vto-skin-analysis__tip">
        <p class="vto-skin-analysis__tip-title">What can I do about it?</p>
        <p>${escapeHtml(copy.tip)}</p>
      </div>
    </div>
  </div>`;
}

function mountSkinDiagSkinAnalysis() {
  const concernsHost = document.getElementById("vtoSkinDiagSkinConcerns");
  const measureHost = document.getElementById("vtoSkinDiagSkinMeasurements");
  if (concernsHost) {
    concernsHost.innerHTML = skinDiagResultFindings()
      .map((row, index) => skinDiagAnalysisItemHTML(row, { open: index === 0, showBadge: true }))
      .join("");
  }
  if (measureHost) {
    measureHost.innerHTML = skinDiagMeasurementFindings()
      .map((row) => skinDiagAnalysisItemHTML(row, { showBadge: true, showScore: true }))
      .join("");
  }
}

function resetSkinDiagSkinAccordions() {
  el.vtoSkinDiagSkinPanel?.querySelectorAll("[data-skin-accordion]").forEach((group, groupIndex) => {
    group.querySelectorAll(".vto-skin-analysis__item").forEach((item, itemIndex) => {
      const open = groupIndex === 0 && itemIndex === 0;
      item.classList.toggle("is-open", open);
      const trigger = item.querySelector(".vto-skin-analysis__trigger");
      if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function wireSkinDiagSkinAccordions() {
  if (!el.vtoSkinDiagSkinPanel || el.vtoSkinDiagSkinPanel.dataset.accordionWired === "true") return;
  el.vtoSkinDiagSkinPanel.dataset.accordionWired = "true";
  el.vtoSkinDiagSkinPanel.addEventListener("click", (e) => {
    const trigger = e.target.closest(".vto-skin-analysis__trigger");
    if (!trigger || !el.vtoSkinDiagSkinPanel.contains(trigger)) return;
    const item = trigger.closest(".vto-skin-analysis__item");
    const group = trigger.closest("[data-skin-accordion]");
    if (!item || !group) return;
    const opening = !item.classList.contains("is-open");
    group.querySelectorAll(".vto-skin-analysis__item").forEach((other) => {
      const isOpen = opening && other === item;
      other.classList.toggle("is-open", isOpen);
      other.querySelector(".vto-skin-analysis__trigger")?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
}

/** @param {string} imageUrl */
function showSkinDiagSkinAnalysis(imageUrl) {
  const front = imageUrl || skinDiagSelfieAngles.front || el.vtoSkinDiagResultsImg?.src || skinDiagResultsPeekUrl || "";
  const left = skinDiagSelfieAngles.left || front;
  const right = skinDiagSelfieAngles.right || front;
  if (el.vtoSkinDiagSkinImgLeft) {
    el.vtoSkinDiagSkinImgLeft.src = left;
    el.vtoSkinDiagSkinImgLeft.alt = "Left selfie";
  }
  if (el.vtoSkinDiagSkinImgFront) {
    el.vtoSkinDiagSkinImgFront.src = front;
    el.vtoSkinDiagSkinImgFront.alt = "Front selfie";
  }
  if (el.vtoSkinDiagSkinImgRight) {
    el.vtoSkinDiagSkinImgRight.src = right;
    el.vtoSkinDiagSkinImgRight.alt = "Right selfie";
  }
  mountSkinDiagSkinAnalysis();
  wireSkinDiagSkinAccordions();
  resetSkinDiagSkinAccordions();
  if (el.vtoSkinDiagSkinPanel) {
    el.vtoSkinDiagSkinPanel.hidden = false;
    el.vtoSkinDiagSkinPanel.setAttribute("aria-hidden", "false");
  }
  requestAnimationFrame(() => el.vtoSkinDiagSkinClose?.focus());
}

function hideSkinDiagResultsPanel() {
  hideSkinDiagSkinAnalysis();
  hideSkinDiagClimateAnalysis();
  if (!el.vtoSkinDiagResultsPanel) return;
  el.vtoSkinDiagResultsPanel.classList.remove("vto-skin-diag-results--drawer-only");
  el.vtoSkinDiagResultsPanel.hidden = true;
  el.vtoSkinDiagResultsPanel.setAttribute("aria-hidden", "true");
  el.vtoFlow?.classList.remove("vto-flow--insight-sheet", "is-sheet-open");
  skinDiagResultsSelectedId = null;
}

function reopenSkinDiagResultsFromChat() {
  const existing = el.chatView.querySelector("[data-skin-diag-results-carousel]");
  if (existing instanceof HTMLElement) {
    existing.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (!skinDiagResultsPeekUrl) return;
  enterChatView();
  appendAssistantBlock(buildSkinDiagResultsCarouselBlock(skinDiagResultsPeekUrl));
}

/** @param {{ focusComposer?: boolean }} [opts] */
function finishSkinDiagFlowToChat(opts = {}) {
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  closeVtoFlow();
  enterChatView();
  if (opts.focusComposer !== false) requestAnimationFrame(() => el.input?.focus());
}

function skinDiagInsightCardChevronHTML() {
  return `<span class="vto-skin-report__card-chev" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>`;
}

function skinDiagTopConcernMetricsHTML() {
  const items = skinDiagResultFindings()
    .map((finding) => {
      const concern = skinDiagConcernById(finding.id);
      if (!concern) return "";
      return `<li>
        <span class="vto-skin-report__metric-icon">
          <img src="${escapeAttr(concern.icon)}" alt="" width="24" height="24" />
        </span>
        <span class="vto-skin-report__metric-label">${escapeHtml(concern.label)}</span>
        <span class="vto-skin-report__metric-status vto-skin-report__metric-status--${finding.status}">${escapeHtml(finding.statusLabel)}</span>
      </li>`;
    })
    .join("");
  return `<ul class="vto-skin-report__metrics">${items}</ul>`;
}

function skinDiagResultsLeadHTML() {
  const picked = skinDiagSelectedPriorities();
  if (!picked.length) {
    return "The good news first: your wrinkles actually look really well cared for, and firmness is holding up okay. The piece I would be gentlest with is <strong>dark pigmentation</strong>. It is the main thing asking for a little extra love right now, which is very common — especially with <strong>UV running high</strong> and the air on the dry side where you are. None of this is a verdict on your skin. It is just a snapshot of what could use some support.";
  }
  const labels = picked.slice(0, 3).map((id) => skinDiagConcernLabel(id).toLowerCase());
  const list = labels.length === 1 ? labels[0] : `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`;
  return `You put <strong>${escapeHtml(list)}</strong> first, so I looked for formulas whose own directions call ${labels.length === 1 ? "that" : "those"} out. The routine below is built from that match, not from a generic bestseller list.`;
}

/** @param {string} imageUrl */
function skinDiagInsightSkinCardHTML(imageUrl) {
  return `<article class="vto-skin-report__card vto-skin-report__card--skin" role="button" tabindex="0" data-skin-diag-open="skin" aria-label="Open your skin analysis">
    <header class="vto-skin-report__card-head">
      <h3>Your skin</h3>
      ${skinDiagInsightCardChevronHTML()}
    </header>
    <div class="vto-skin-report__avatar-wrap">
      <img class="vto-skin-report__avatar" src="${escapeAttr(imageUrl)}" alt="Your skin diagnosis photo" decoding="async" />
    </div>
    ${skinDiagTopConcernMetricsHTML()}
  </article>`;
}

function skinDiagInsightClimateCardHTML() {
  return `<article class="vto-skin-report__card vto-skin-report__card--climate" role="button" tabindex="0" data-skin-diag-open="climate" aria-label="Open your climate analysis">
    <header class="vto-skin-report__card-head">
      <h3>Your climate</h3>
      ${skinDiagInsightCardChevronHTML()}
    </header>
    <ul class="vto-skin-report__climate">
      <li>
        <span class="vto-skin-report__climate-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6"/><path d="M12 3.2v1.8M12 19v1.8M4.8 4.8l1.3 1.3M17.9 17.9l1.3 1.3M3.2 12h1.8M19 12h1.8M4.8 19.2l1.3-1.3M17.9 6.1l1.3-1.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </span>
        <div class="vto-skin-report__climate-body">
          <span class="vto-skin-report__climate-name">UV index</span>
          <div class="vto-skin-report__climate-row">
            <strong class="vto-skin-report__climate-level vto-skin-report__climate-level--high">High</strong>
            <span class="vto-skin-report__climate-value">8/11+</span>
          </div>
          <div class="vto-skin-report__climate-meter" style="--pos: 72%"><span></span></div>
        </div>
      </li>
      <li>
        <span class="vto-skin-report__climate-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 8.2h12.4a2.8 2.8 0 1 0-2-4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4 12.6h13.2a2.4 2.4 0 1 1 0 4.8H8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4 17.8h4.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </span>
        <div class="vto-skin-report__climate-body">
          <span class="vto-skin-report__climate-name">Air pollution</span>
          <div class="vto-skin-report__climate-row">
            <strong class="vto-skin-report__climate-level vto-skin-report__climate-level--low">Very Low</strong>
            <span class="vto-skin-report__climate-value">AQI 200</span>
          </div>
          <div class="vto-skin-report__climate-meter" style="--pos: 12%"><span></span></div>
        </div>
      </li>
      <li>
        <span class="vto-skin-report__climate-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M10 14.6V6.2a2 2 0 1 1 4 0v8.4a3.4 3.4 0 1 1-4 0Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </span>
        <div class="vto-skin-report__climate-body">
          <span class="vto-skin-report__climate-name">Temperature variation</span>
          <div class="vto-skin-report__climate-row">
            <strong class="vto-skin-report__climate-level vto-skin-report__climate-level--mid">Moderate</strong>
            <span class="vto-skin-report__climate-value">30°F</span>
          </div>
          <div class="vto-skin-report__climate-meter" style="--pos: 42%"><span></span></div>
        </div>
      </li>
      <li>
        <span class="vto-skin-report__climate-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 3.4c-2.4 3.2-5.2 6.2-5.2 9.2a5.2 5.2 0 1 0 10.4 0c0-3-2.8-6-5.2-9.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
        </span>
        <div class="vto-skin-report__climate-body">
          <span class="vto-skin-report__climate-name">Humidity variation</span>
          <div class="vto-skin-report__climate-row">
            <strong class="vto-skin-report__climate-level vto-skin-report__climate-level--low">Low</strong>
            <span class="vto-skin-report__climate-value">20%</span>
          </div>
          <div class="vto-skin-report__climate-meter" style="--pos: 20%"><span></span></div>
        </div>
      </li>
    </ul>
  </article>`;
}

function skinDiagInsightRoutineCardHTML() {
  const routineSteps = getSkinDiagRoutineSteps();
  const rows = routineSteps.map((step) => {
    const p = step.picks && step.picks[0];
    if (!p) return "";
    const thumb = p.image
      ? `<img class="vto-skin-report__routine-thumb" src="${escapeAttr(p.image)}" alt="" decoding="async" />`
      : `<span class="vto-skin-report__routine-thumb" aria-hidden="true"></span>`;
    const brand = skincareBrandName(p.brandId);
    return `<li>
      ${thumb}
      <div>
        <span class="vto-skin-report__routine-step">${escapeHtml(step.step)}${brand ? ` · ${escapeHtml(brand)}` : ""}</span>
        <span class="vto-skin-report__routine-name">${escapeHtml(p.title)}</span>
      </div>
    </li>`;
  }).join("");
  return `<article class="vto-skin-report__card vto-skin-report__card--routine" role="button" tabindex="0" data-skin-diag-open="routine" aria-label="See my routine">
    <header class="vto-skin-report__card-head">
      <h3>See my routine</h3>
      ${skinDiagInsightCardChevronHTML()}
    </header>
    <p class="vto-skin-report__routine-lede">A ${routineSteps.length}-step lineup matched to your scan, in the usual order: ${escapeHtml(skinDiagRoutineLineupText(routineSteps))}.</p>
    <ul class="vto-skin-report__routine-list">${rows}</ul>
  </article>`;
}

/** @param {string} imageUrl */
function buildSkinDiagResultsCarouselBlock(imageUrl) {
  const routineSteps = getSkinDiagRoutineSteps();
  const cards = `${skinDiagInsightSkinCardHTML(imageUrl)}${skinDiagInsightRoutineCardHTML()}${skinDiagInsightClimateCardHTML()}`;
  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon"><img src="${SKIN_DIAG_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Skin Diag</span>
    </div>
    <div class="product-carousel skin-diag-results-carousel" data-product-carousel data-skin-diag-results-carousel>
      <div class="product-carousel__strip">
        <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous result cards">
          ${chevronCarouselSvg("prev")}
        </button>
        <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next result cards">
          ${chevronCarouselSvg("next")}
        </button>
        <div class="slide-row" role="list">${cards}</div>
      </div>
      ${carouselDotsHTML(3, 0)}
    </div>
    <div class="assistant-text">
      <p style="margin:0 0 10px">Thanks for sitting through that — I know a scan can feel a little exposing. I went through everything carefully.</p>
      <p style="margin:0 0 10px">${skinDiagResultsLeadHTML()}</p>
      <p style="margin:0">I put together a ${routineSteps.length}-step ${skinDiagRoutineLineupHtml(routineSteps)} routine around that, in that order so each layer can do its job. The treatment step is there to help even out your tone over time. Take a look at the cards above whenever you are ready, or tap one and I will open it for you.</p>
    </div>
    ${convActionsHTML()}`;
}

function buildSkinDiagRoutineWidgetBlock() {
  const steps = getSkinDiagRoutineSteps();
  const total = steps.length;
  const size = skinDiagRoutineSize();
  const sizeNote =
    size === 5
      ? "You asked for the full program, so I added a toner after cleanse and finished with SPF — sunscreen always goes last."
      : size === 4
        ? "You asked for something a bit more complete, so I added a toner after cleanse and before the serum."
        : "You asked for the essentials, so I kept it to the three steps that do the most work.";
  const firstStep = steps[0];
  const slides = steps.map((step, i) => skinDiagResultProductCardHTML(step, i, total, { omitHead: true })).join("");
  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon"><img src="${SKIN_DIAG_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Skin Diag</span>
    </div>
    <section class="skin-diag-routine-widget" data-skin-diag-routine-widget data-active-step="${escapeAttr(firstStep ? firstStep.id : "")}">
      <header class="skin-diag-routine-chrome" aria-live="polite">
        <h3 class="vto-skin-report__step-name" data-routine-step-name>${firstStep ? escapeHtml(firstStep.step) : ""}</h3>
        <span class="vto-skin-report__step-index" data-routine-step-index>Step 1 of ${total}</span>
      </header>
      <div class="product-carousel skin-diag-routine-carousel" data-product-carousel data-skin-diag-routine-carousel>
        <div class="product-carousel__strip">
          <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous routine steps">
            ${chevronCarouselSvg("prev")}
          </button>
          <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next routine steps">
            ${chevronCarouselSvg("next")}
          </button>
          <div class="slide-row" role="list">${slides}</div>
        </div>
        ${carouselDotsHTML(total, 0)}
      </div>
    </section>
    <div class="assistant-text">
      <p style="margin:0 0 10px">This is the ${total}-step routine I built from your scan — ${skinDiagRoutineLineupHtml(steps)}, in that order. ${sizeNote} The treatment step is there for <strong>${escapeHtml(skinDiagConcernLabel(skinDiagScoringPriorities()[0]).toLowerCase())}</strong>, using formulas that actually name that concern.</p>
      <p style="margin:0">Swipe the cards or use the arrows to move through each step. Tap Learn More for product details, or Alternative Products if you want a different formula for that step.</p>
    </div>
    ${convActionsHTML()}`;
}

let skinDiagSheetTimer = /** @type {number | null} */ (null);
let skinDiagSheetClosing = false;

function prefersReducedMotion() {
  return Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
}

function clearSkinDiagSheetTimer() {
  if (skinDiagSheetTimer == null) return;
  window.clearTimeout(skinDiagSheetTimer);
  skinDiagSheetTimer = null;
}

function openSkinDiagOverlayHost() {
  clearSkinDiagSheetTimer();
  skinDiagSheetClosing = false;
  closeProductDetail();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieCameraPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  vtoSkinBrandExperienceActive = true;
  skinDiagFlowActive = false;
  setVtoComposerChrome(false);
  syncVtoExperienceBrandUi();
  if (el.vtoSkinDiagResultsPanel) {
    el.vtoSkinDiagResultsPanel.classList.add("vto-skin-diag-results--drawer-only");
    el.vtoSkinDiagResultsPanel.hidden = false;
    el.vtoSkinDiagResultsPanel.setAttribute("aria-hidden", "false");
  }
  const flow = el.vtoFlow;
  const alreadyOpen = Boolean(flow && !flow.hidden && flow.classList.contains("is-sheet-open"));
  flow.classList.add("vto-flow--insight-sheet");
  flow.hidden = false;
  flow.setAttribute("aria-hidden", "false");
  if (alreadyOpen || prefersReducedMotion()) {
    flow.classList.add("is-sheet-open");
    return;
  }
  flow.classList.remove("is-sheet-open");
  void flow.offsetWidth;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => flow.classList.add("is-sheet-open"));
  });
}

function closeSkinDiagOverlayToChat() {
  const flow = el.vtoFlow;
  const finish = () => {
    clearSkinDiagSheetTimer();
    skinDiagSheetClosing = false;
    if (flow) flow.removeEventListener("transitionend", onEnd);
    finishSkinDiagFlowToChat();
  };
  const onEnd = (e) => {
    if (e.target !== flow || e.propertyName !== "transform") return;
    finish();
  };
  if (!flow || flow.hidden || !flow.classList.contains("vto-flow--insight-sheet") || prefersReducedMotion()) {
    finish();
    return;
  }
  if (skinDiagSheetClosing) return;
  skinDiagSheetClosing = true;
  flow.addEventListener("transitionend", onEnd);
  flow.classList.remove("is-sheet-open");
  skinDiagSheetTimer = window.setTimeout(finish, 520);
}

function openSkinDiagSkinFromChat() {
  openSkinDiagOverlayHost();
  hideSkinDiagClimateAnalysis();
  showSkinDiagSkinAnalysis(skinDiagResultsPeekUrl || el.vtoSkinDiagResultsImg?.src || "");
}

function openSkinDiagClimateFromChat() {
  openSkinDiagOverlayHost();
  hideSkinDiagSkinAnalysis();
  showSkinDiagClimateAnalysis();
}

let skinDiagRoutineOpening = false;

async function openSkinDiagRoutineInChat() {
  const existing = el.chatView.querySelector("[data-skin-diag-routine-widget]");
  if (existing instanceof HTMLElement) {
    const msg = existing.closest(".msg");
    if (msg instanceof HTMLElement) pinThreadToMessage(msg, 28, "smooth");
    return;
  }
  if (skinDiagRoutineOpening) return;
  skinDiagRoutineOpening = true;
  const myGen = chatGenerationEpoch;
  chatPreserveThreadScroll = true;
  flow = "busy";
  updateComposerTextState();
  appendTyping({ preserveThread: true });
  const typing = el.chatView.querySelector('[data-role="typing"]');
  if (typing instanceof HTMLElement) pinThreadToMessage(typing, 28, "smooth");
  await wait(700);
  if (myGen !== chatGenerationEpoch) {
    skinDiagRoutineOpening = false;
    return;
  }
  const nextMsg = appendAssistantBlock(buildSkinDiagRoutineWidgetBlock(), true, { preserveThread: true });
  flow = "idle";
  updateComposerTextState();
  skinDiagRoutineOpening = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (nextMsg instanceof HTMLElement) pinThreadToMessage(nextMsg, 28, "smooth");
    });
  });
}

/** @param {string | null} kind */
function handleSkinDiagInsightOpen(kind) {
  if (kind === "skin") openSkinDiagSkinFromChat();
  else if (kind === "climate") openSkinDiagClimateFromChat();
  else if (kind === "routine") void openSkinDiagRoutineInChat();
}

/** @param {object} p @returns {('am'|'pm')[]} */
function skinDiagProductUseTimes(p) {
  if (Array.isArray(p.use) && p.use.length) {
    return p.use.filter((t) => t === "am" || t === "pm");
  }
  const title = `${p.title || ""} ${p.id || ""}`.toLowerCase();
  const kind = (p.kind || "").toLowerCase();
  const actives = p.actives || [];
  const desc = (p.description || "").toLowerCase();
  if (p.step === "protect" || kind === "sunscreen" || /\bspf\b/.test(title)) return ["am"];
  if (actives.includes("retinol") || /\bretinol\b/.test(title)) return ["pm"];
  if (/\bpm\b/.test(title) || /evening use/.test(desc)) return ["pm"];
  if (/\bam\b/.test(title)) return ["am"];
  return ["am", "pm"];
}

function skinDiagSunIconHTML() {
  const s = LUC.stroke;
  return LUC.svg(
    12,
    `<circle cx="12" cy="12" r="4" ${s}/><path d="M12 2v2" ${s}/><path d="M12 20v2" ${s}/><path d="m4.93 4.93 1.41 1.41" ${s}/><path d="m17.66 17.66 1.41 1.41" ${s}/><path d="M2 12h2" ${s}/><path d="M20 12h2" ${s}/><path d="m6.34 17.66-1.41 1.41" ${s}/><path d="m19.07 4.93-1.41 1.41" ${s}/>`,
  );
}

function skinDiagMoonIconHTML() {
  return LUC.svg(12, `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" ${LUC.stroke}/>`);
}

function skinDiagUseTagsHTML(p) {
  return skinDiagProductUseTimes(p)
    .map((time) => {
      const label = time === "am" ? "AM" : "PM";
      const icon = time === "am" ? skinDiagSunIconHTML() : skinDiagMoonIconHTML();
      return `<span class="lrp-card__tag vto-skin-report__tag vto-skin-report__tag--${time}">${icon}${label}</span>`;
    })
    .join("");
}

/** @param {object} p @param {boolean} isBest */
function skinDiagPickCardHTML(p, isBest) {
  const brand = skincareBrandName(p.brandId);
  const highMatch = lrpMatchIsHigh(p.match);
  const matchClass = highMatch ? "vto-skin-report__match vto-skin-report__match--high" : "vto-skin-report__match";
  const kicker = isBest ? `<span class="vto-skin-report__pick-kicker">Best match</span>` : `<span class="vto-skin-report__pick-kicker vto-skin-report__pick-kicker--alt">Also fits</span>`;
  const brandHtml = brand ? `<p class="vto-skin-report__pick-brand">${escapeHtml(brand)}</p>` : "";
  const tags = skinDiagUseTagsHTML(p);
  return `<article class="vto-skin-report__pick${isBest ? " is-best" : ""}">
      <div class="vto-skin-report__pick-top">
        ${kicker}
        <span class="${matchClass}">${p.match}%</span>
      </div>
      <div class="vto-skin-report__media">${lrpProductMediaHTML(p)}</div>
      ${brandHtml}
      <h4 class="vto-skin-report__pick-name">${escapeHtml(p.title)}</h4>
      ${tags ? `<div class="vto-skin-report__tags">${tags}</div>` : ""}
      <p class="vto-skin-report__price">${escapeHtml(p.priceNow)}</p>
      <a class="vto-skin-report__buy" href="${escapeAttr(p.shopUrl || "#")}" target="_blank" rel="noopener noreferrer">
        Buy
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </a>
    </article>`;
}

/** Product Match-style card for Skin Diag routine and alternate-product replies. */
function skinDiagRoutineProductCardHTML(p, opts = {}) {
  const brand = p.brandId ? skincareBrandName(p.brandId) : "";
  const matchTag = Number.isFinite(p.match)
    ? lrpMatchChipHTML(p.match, { suffix: "" })
    : "";
  const tags = skinDiagUseTagsHTML(p);
  const badge = opts.badge
    ? `<span class="lrp-card__badge">${escapeHtml(opts.badge)}</span>`
    : "<span></span>";
  const brandHtml = brand ? `<p class="lrp-card__brand">${escapeHtml(brand)}</p>` : "";
  const stepId = opts.stepId || p.step || "";
  const shopPrimary = opts.showAlts === false;
  const primary = `<button type="button" class="lrp-card__cta lrp-card__cta--shop" data-skin-diag-learn="${escapeAttr(p.id)}" data-skin-diag-step="${escapeAttr(stepId)}" aria-label="Learn more about ${escapeAttr(p.title)}">
        Learn More
      </button>`;
  const secondary = shopPrimary
    ? `<button type="button" class="lrp-card__learn" data-skin-diag-shop="${escapeAttr(p.id)}" aria-label="Where to buy ${escapeAttr(p.title)}">Where to buy</button>`
    : opts.stepId && opts.showAlts !== false
      ? `<button type="button" class="lrp-card__learn" data-skin-diag-alts="${escapeAttr(opts.stepId)}" data-skin-diag-alts-for="${escapeAttr(p.id)}" aria-label="See alternative products for ${escapeAttr(p.title)}">Alternative Products</button>`
      : "";
  return `<article class="product-card lrp-card skin-diag-product-card" role="listitem" data-skin-diag-product="${escapeAttr(p.id)}">
    <div class="lrp-card__header">${badge}${matchTag}</div>
    <div class="lrp-card__content">
      <div class="lrp-card__media">${lrpProductMediaHTML(p)}</div>
      ${brandHtml}
      <h3 class="lrp-card__title" title="${escapeAttr(p.title)}">${escapeHtml(p.title)}</h3>
      <div class="lrp-card__tags">${tags}</div>
    </div>
    <div class="lrp-card__footer">
      ${primary}
      ${secondary}
    </div>
  </article>`;
}

function findSkinDiagProductById(productId) {
  const fromRoutine = getSkinDiagRoutineSteps()
    .flatMap((step) => step.picks || [])
    .find((p) => p.id === productId);
  if (fromRoutine) return fromRoutine;
  const fromCatalog = SKINCARE_DB.products.map(resolveSkincareProduct).find((p) => p && p.id === productId);
  if (fromCatalog) {
    const score = scoreSkincareProduct(fromCatalog, skinDiagQuizProfile());
    return { ...fromCatalog, match: skinDiagMatchFromScore(score, skinDiagStepCohortScores(fromCatalog.step)) };
  }
  return findLrpProduct(productId);
}

/** Shape a Skin Diag pick so the Product Match results overlay can render it. */
function skinDiagProductAsMatchRecord(p) {
  const fromMatch = findLrpProduct(p.id);
  const match = Number.isFinite(p.match) ? p.match : fromMatch?.match;
  if (fromMatch) {
    return {
      ...fromMatch,
      match,
      brandId: fromMatch.brandId || p.brandId,
      step: p.step || fromMatch.step,
    };
  }
  const tags = p.tags || [];
  const kind = (p.kind || "formula").toLowerCase();
  const firstSentence = (p.description || "").split(". ")[0];
  const reasons = [
    tags[0] ? `${tags[0]} is a good fit for the concerns we saw on your scan.` : `This ${kind} maps to the step your routine needs.`,
    firstSentence ? `${firstSentence}.` : "It layers cleanly with the rest of the routine.",
    "Fragrance and texture were checked against the skin feel you logged in the quiz.",
  ];
  return {
    ...p,
    tags,
    match: Number.isFinite(match)
      ? match
      : skinDiagMatchFromScore(scoreSkincareProduct(p, skinDiagQuizProfile()), skinDiagStepCohortScores(p.step)),
    matchIntro: `Based on your Skin Diag scan, this ${kind} is a strong match for this step.`,
    matchReasons: reasons,
    ingredients: p.ingredients || "Full ingredient list is on the product page.",
    similar: p.similar || [],
    volume: p.volume || "",
  };
}

function openSkinDiagProductMatchResults(productId) {
  const found = findSkinDiagProductById(productId);
  if (!found) return;
  void startMatchShopFlow(skinDiagProductAsMatchRecord(found));
}

function skinDiagHasCompletedAnalysis() {
  return Boolean(skinDiagResultsPeekUrl);
}

/** Open the Product Match overlay for a Skin Diag routine pick. */
function openSkinDiagProductDetails(productId, stepId) {
  const found = findSkinDiagProductById(productId);
  if (!found) return;
  const record = skinDiagProductAsMatchRecord(found);
  record.skinDiagStepId = stepId || found.step || record.step || "";
  openLrpDetails(record);
}

/** @param {Event} e */
function handleSkinDiagProductCardClick(e) {
  const shop = e.target instanceof Element ? e.target.closest("[data-skin-diag-shop]") : null;
  if (shop) {
    e.preventDefault();
    const productId = shop.getAttribute("data-skin-diag-shop");
    const found = productId ? findSkinDiagProductById(productId) : null;
    if (found) void startMatchShopFlow(skinDiagProductAsMatchRecord(found));
    return true;
  }
  const learn = e.target instanceof Element ? e.target.closest("[data-skin-diag-learn]") : null;
  if (learn) {
    e.preventDefault();
    const productId = learn.getAttribute("data-skin-diag-learn");
    const step = learn.getAttribute("data-skin-diag-step") || "";
    if (productId) openSkinDiagProductDetails(productId, step);
    return true;
  }
  const alts = e.target instanceof Element ? e.target.closest("[data-skin-diag-alts]") : null;
  if (alts) {
    e.preventDefault();
    const stepId = alts.getAttribute("data-skin-diag-alts");
    const productId = alts.getAttribute("data-skin-diag-alts-for");
    if (stepId) void openSkinDiagAlternativesInChat(stepId, productId || undefined);
    return true;
  }
  return false;
}

/** @param {{ id: string, step: string, picks?: object[] }} step @param {number} index @param {number} total @param {{ omitHead?: boolean }} [opts] */
function skinDiagResultProductCardHTML(step, index, total, opts = {}) {
  const p = (step.picks || [])[0];
  if (!p) return "";
  const head = opts.omitHead
    ? ""
    : `<div class="vto-skin-report__step-head">
        <h3 class="vto-skin-report__step-name">${escapeHtml(step.step)}</h3>
        <span class="vto-skin-report__step-index">Step ${index + 1} of ${total}</span>
      </div>`;
  return `
    <section class="vto-skin-report__step" data-result-step="${escapeAttr(step.id)}">
      ${head}
      ${skinDiagRoutineProductCardHTML(p, { badge: "Best match", stepId: step.id })}
    </section>`;
}

function mountSkinDiagResultsProducts() {
  const host = el.vtoSkinDiagResultsProducts;
  if (!host) return;
  const steps = getSkinDiagRoutineSteps();
  const total = steps.length;
  host.innerHTML = steps.map((step, i) => skinDiagResultProductCardHTML(step, i, total)).join("");
}

function skinDiagProductLabel(p) {
  if (!p) return "";
  const brand = p.brandId ? skincareBrandName(p.brandId) : "";
  return brand ? `${brand} ${p.title}` : p.title;
}

/** @param {{ id: string, step: string }} step @param {object[]} products @param {object | null} [original] */
function skinDiagAlternativesCopyHTML(step, products, original) {
  const stepName = (step.step || "step").toLowerCase();
  const originalName = original?.title || `your current ${stepName}`;
  const originalLabel = original ? skinDiagProductLabel(original) : originalName;
  const count = products.length;
  const countLabel = count === 1 ? "one other option" : count === 2 ? "two alternatives" : "three alternatives";
  const priorityLabels = {
    wrinkles: "wrinkles",
    "fine-lines": "fine lines",
    firmness: "firmness",
    radiance: "radiance",
    pigmentation: "dark pigmentation",
    texture: "texture",
    pores: "visible pores",
  };
  const priorities = skinDiagSelectedPriorities()
    .slice(0, 2)
    .map((id) => priorityLabels[id] || String(id).replace(/-/g, " "));
  const priorityBit = priorities.length
    ? `I leaned toward ${priorities.join(" and ")}, since that is what your scan and quiz called out.`
    : "I leaned toward the concerns your scan flagged.";
  const items = products
    .map((p) => {
      const label = skinDiagProductLabel(p);
      const tags = (p.tags || []).slice(0, 2);
      const tagBit = tags.length ? tags.join(" and ").toLowerCase() : (p.kind || stepName).toLowerCase();
      const extras = [];
      if (p.texture) extras.push(`It has a ${p.texture} texture`);
      if (original && p.brandId && original.brandId && p.brandId !== original.brandId) {
        extras.push(`so it is a different brand feel than ${originalName}`);
      }
      const extra = extras.length ? ` ${extras.join(", ")}.` : "";
      return `<p style="margin:0 0 10px"><strong>${escapeHtml(label)}</strong> still covers the ${escapeHtml(stepName)} step with ${escapeHtml(tagBit)}.${extra ? escapeHtml(extra) : ""}</p>`;
    })
    .join("");
  return `
      <p style="margin:0 0 10px">Here are ${countLabel} to <strong>${escapeHtml(originalLabel)}</strong>. They all still do the ${escapeHtml(stepName)} job in the routine I built from your scan — same place in the lineup, with a different texture, brand, or active profile so you can choose what feels better on skin.</p>
      <p style="margin:0 0 10px">${priorityBit} None of these is a downgrade. They scored well for your skin and can swap in without rewriting the rest of the routine.</p>
      ${items}
      <p style="margin:0">Swipe the cards or tap Learn More for details. Tell me which one you prefer if you want to swap it in.</p>`;
}

/** @param {{ id: string, step: string }} step @param {object[]} products @param {object | null} [original] */
function buildSkinDiagAlternativesBlock(step, products, original) {
  const slides = products
    .map(
      (p) => `
    <section class="vto-skin-report__step">
      ${skinDiagRoutineProductCardHTML(p, { stepId: step.id, showAlts: false })}
    </section>`,
    )
    .join("");
  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon"><img src="${SKIN_DIAG_HEADER_ICON_SRC}" alt="" width="24" height="24" decoding="async" /></span>
      <span class="vto-attribution__label">Skin Diag</span>
    </div>
    <div class="product-carousel skin-diag-routine-carousel" data-product-carousel>
      <div class="product-carousel__strip">
        <button type="button" class="product-carousel__btn product-carousel__btn--prev" aria-label="Previous products">
          ${chevronCarouselSvg("prev")}
        </button>
        <button type="button" class="product-carousel__btn product-carousel__btn--next" aria-label="Next products">
          ${chevronCarouselSvg("next")}
        </button>
        <div class="slide-row" role="list">${slides}</div>
      </div>
      ${carouselDotsHTML(products.length, 0)}
    </div>
    <div class="assistant-text">
      ${skinDiagAlternativesCopyHTML(step, products, original)}
    </div>`;
}

/** @param {string} stepId @param {string} [productId] */
async function openSkinDiagAlternativesInChat(stepId, productId) {
  const step = getSkinDiagRoutineSteps().find((s) => s.id === stepId);
  if (!step) return;
  const original = (productId && findSkinDiagProductById(productId)) || (step.picks || [])[0] || null;
  const products = skinDiagAlternativeProductsForStep(step, original?.id);
  if (!products.length) return;
  finishSkinDiagFlowToChat();
  const myGen = chatGenerationEpoch;
  const productName = original?.title || step.step.toLowerCase();
  appendUserBubble(`Show me alternative products for ${productName}`);
  flow = "busy";
  updateComposerTextState();
  await assistantThink();
  if (myGen !== chatGenerationEpoch) return;
  appendAssistantBlock(buildSkinDiagAlternativesBlock(step, products, original));
  flow = "idle";
  updateComposerTextState();
}

function wireSkinDiagInsightsCarousel() {
  const track = el.vtoSkinDiagResultsInsights;
  const dotsRoot = el.vtoSkinDiagResultsInsightDots;
  if (!track || !dotsRoot) return;
  const dots = [...dotsRoot.querySelectorAll("span")];
  const sync = () => {
    const card = track.querySelector(".vto-skin-report__card");
    const step = card ? card.getBoundingClientRect().width + 8 : 308;
    const idx = step > 0 && track.scrollLeft > step / 2 ? 1 : 0;
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === idx));
  };
  if (track.dataset.wired !== "true") {
    track.dataset.wired = "true";
    track.addEventListener("scroll", sync, { passive: true });
  }
  track.scrollLeft = 0;
  sync();
}

/** @param {string} imageUrl */
function showSkinDiagResultsPanel(imageUrl) {
  if (el.vtoSkinDiagResultsImg) {
    el.vtoSkinDiagResultsImg.src = imageUrl;
    el.vtoSkinDiagResultsImg.alt = "Your skin diagnosis photo";
  }
  mountSkinDiagResultsProducts();
  const skinCard = document.getElementById("vtoSkinDiagResultsSkinCard");
  const metrics = skinCard?.querySelector(".vto-skin-report__metrics");
  if (metrics) metrics.outerHTML = skinDiagTopConcernMetricsHTML();
  wireSkinDiagInsightsCarousel();
  hideSkinDiagSkinAnalysis();
  hideSkinDiagClimateAnalysis();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagQuestionnairePanel();
  hideSkinDiagLoadingPanel();
  setVtoComposerChrome(false);
  el.vtoSkinDiagResultsPanel.hidden = false;
  el.vtoSkinDiagResultsPanel.setAttribute("aria-hidden", "false");
  skinDiagResultsPeekUrl = imageUrl;
  requestAnimationFrame(() => el.vtoSkinDiagResultsClose?.focus());
}

async function showSkinDiagResultsAfterLoad(imageUrl) {
  hideSkinDiagLoadingPanel();
  if (el.vtoSkinDiagResultsImg) {
    el.vtoSkinDiagResultsImg.src = imageUrl;
    el.vtoSkinDiagResultsImg.alt = "Your skin diagnosis photo";
  }
  skinDiagResultsPeekUrl = imageUrl;
  chatPreserveThreadScroll = true;
  finishSkinDiagFlowToChat({ focusComposer: false });
  const myGen = chatGenerationEpoch;
  flow = "busy";
  updateComposerTextState();
  const threadAnchor = el.chatView.querySelector(".msg:last-of-type");
  if (threadAnchor instanceof HTMLElement) pinThreadToMessage(threadAnchor, 12);
  appendTyping({ preserveThread: true });
  await wait(1300);
  if (myGen !== chatGenerationEpoch) return;
  const nextMsg = appendAssistantBlock(buildSkinDiagResultsCarouselBlock(imageUrl), true, { preserveThread: true });
  flow = "idle";
  updateComposerTextState();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (nextMsg instanceof HTMLElement) pinThreadToMessage(nextMsg, 108);
      el.input?.focus({ preventScroll: true });
    });
  });
}

/** @param {string} imageUrl */
function startSkinDiagPostQuizLoading(imageUrl) {
  clearSkinDiagPostQuizTimer();
  hideSkinDiagResultsPanel();
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  hideSkinDiagQuestionnairePanel();
  setVtoComposerChrome(false);
  resetSkinDiagLoadingRows();
  el.vtoSkinDiagLoadingBg.style.backgroundImage = `url(${JSON.stringify(imageUrl)})`;
  el.vtoSkinDiagLoadingPanel.hidden = false;
  el.vtoSkinDiagLoadingPanel.setAttribute("aria-hidden", "false");
  void el.vtoSkinDiagLoadingPanel.offsetWidth;
  el.vtoSkinDiagLoadingPanel.classList.add("is-animating");
  const steps = Array.from(el.vtoSkinDiagLoadingSteps?.children ?? []);
  let delayMs = 650;
  for (const step of steps) {
    const startMs = delayMs;
    skinDiagPostQuizTimers.push(
      window.setTimeout(() => {
        step.classList.add("is-active");
      }, startMs)
    );
    skinDiagPostQuizTimers.push(
      window.setTimeout(() => {
        step.classList.remove("is-active");
        step.classList.add("is-done");
      }, startMs + 1400)
    );
    delayMs += 1400;
  }
  skinDiagPostQuizTimers.push(
    window.setTimeout(() => {
      showSkinDiagResultsAfterLoad(imageUrl);
    }, delayMs + 600)
  );
}

function startSkinDiagPostQuizFlow() {
  const imageUrl = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
  if (!imageUrl) {
    finishSkinDiagFlowToChat();
    return;
  }
  startSkinDiagPostQuizLoading(imageUrl);
}

function hideSkinDiagQuestionnairePanel() {
  clearSkinDiagQuizAdvanceTimer();
  skinDiagQuizAnimGen += 1;
  skinDiagQuizAnimating = false;
  el.vtoSkinQuizSlide?.classList.remove("is-exit-next", "is-exit-prev", "is-enter-next", "is-enter-prev");
  if (!el.vtoSkinQuestionnairePanel) return;
  el.vtoSkinQuestionnairePanel.hidden = true;
  el.vtoSkinQuestionnairePanel.setAttribute("aria-hidden", "true");
}

function resetSkinDiagQuestionnaireUi() {
  clearSkinDiagQuizAdvanceTimer();
  skinDiagQuizAnimGen += 1;
  skinDiagQuizAnimating = false;
  skinDiagRankSuppressClick = false;
  skinDiagQuizStep = 0;
  el.vtoSkinQuizSlide?.classList.remove("is-exit-next", "is-exit-prev", "is-enter-next", "is-enter-prev");
}

function resetSkinDiagQuestionnaireState() {
  resetSkinDiagQuestionnaireUi();
  skinDiagQuizAnswers = emptySkinDiagQuizAnswers();
  skinDiagCompletedQuizAnswers = null;
}

function beginSkinDiagPreScanQuiz() {
  resetSkinDiagQuestionnaireState();
  skinDiagPreScanQuizDone = false;
  showSkinDiagQuestionnairePanel();
}

function clearSkinDiagQuizAdvanceTimer() {
  if (skinDiagQuizAdvanceTimer != null) {
    window.clearTimeout(skinDiagQuizAdvanceTimer);
    skinDiagQuizAdvanceTimer = null;
  }
  skinDiagQuizAdvanceGen += 1;
}

function scheduleSkinDiagQuizAutoAdvance() {
  clearSkinDiagQuizAdvanceTimer();
  const gen = skinDiagQuizAdvanceGen;
  const fromStep = skinDiagQuizStep;
  skinDiagQuizAdvanceTimer = window.setTimeout(() => {
    if (gen !== skinDiagQuizAdvanceGen) return;
    if (skinDiagQuizStep !== fromStep) return;
    skinDiagQuestionnaireAdvanceFromCurrentStep();
  }, 320);
}

function skinDiagQuizMotionOk() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Slide the current question out, then run `afterExit` (usually render the next step).
 * @param {'next'|'back'} direction
 * @param {() => void} afterExit
 */
function animateSkinDiagQuizTransition(direction, afterExit) {
  const slide = el.vtoSkinQuizSlide;
  const runAfter = () => {
    afterExit();
    const nextSlide = el.vtoSkinQuizSlide;
    if (!nextSlide || el.vtoSkinQuestionnairePanel?.hidden || !skinDiagQuizMotionOk()) {
      skinDiagQuizAnimating = false;
      return;
    }
    nextSlide.classList.remove("is-exit-next", "is-exit-prev");
    nextSlide.classList.add(direction === "back" ? "is-enter-prev" : "is-enter-next");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        nextSlide.classList.remove("is-enter-next", "is-enter-prev");
        window.setTimeout(() => {
          skinDiagQuizAnimating = false;
        }, 340);
      });
    });
  };

  if (!slide || !skinDiagQuizMotionOk()) {
    runAfter();
    return;
  }

  const gen = ++skinDiagQuizAnimGen;
  skinDiagQuizAnimating = true;
  let finished = false;
  const finish = () => {
    if (finished || gen !== skinDiagQuizAnimGen) return;
    finished = true;
    slide.removeEventListener("transitionend", onEnd);
    runAfter();
  };
  const onEnd = (e) => {
    if (e.target !== slide) return;
    if (e.propertyName && e.propertyName !== "transform") return;
    finish();
  };
  slide.addEventListener("transitionend", onEnd);
  window.setTimeout(finish, 400);
  slide.classList.add(direction === "back" ? "is-exit-prev" : "is-exit-next");
}

function skinDiagQuizNextIndex(from) {
  return from + 1;
}

function skinDiagQuizPrevIndex(from) {
  return from - 1;
}

function finishSkinDiagPreScanQuiz() {
  clearSkinDiagQuizAdvanceTimer();
  skinDiagPreScanQuizDone = true;
  skinDiagCompletedQuizAnswers = cloneSkinDiagQuizAnswers(skinDiagQuizAnswers);
  hideSkinDiagQuestionnairePanel();
  showSkinDiagSelfieEntry();
}

function syncSkinDiagQuizContinueEnabled() {
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step || !el.vtoSkinQuizContinue) return;
  let enabled = false;
  if (step.type === "rank") enabled = skinDiagQuizAnswers.priorities.length > 0;
  else if (step.type === "age") enabled = skinDiagQuizAnswers.age != null;
  else if (step.type === "location") enabled = !!skinDiagQuizAnswers.location;
  else {
    const v = skinDiagQuizAnswers[step.key];
    enabled = v != null && v !== "";
  }
  el.vtoSkinQuizContinue.disabled = !enabled;
}

function skinDiagQuestionnaireAdvanceFromCurrentStep() {
  if (skinDiagQuizAnimating) return;
  clearSkinDiagQuizAdvanceTimer();
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;
  if (step.last) {
    animateSkinDiagQuizTransition("next", () => finishSkinDiagPreScanQuiz());
    return;
  }
  const next = skinDiagQuizNextIndex(skinDiagQuizStep);
  if (next >= SKIN_DIAG_QUIZ_STEPS.length) {
    animateSkinDiagQuizTransition("next", () => finishSkinDiagPreScanQuiz());
    return;
  }
  animateSkinDiagQuizTransition("next", () => {
    skinDiagQuizStep = next;
    renderSkinDiagQuestionnaireStep();
  });
}

function skinDiagQuizMarkSvg(selected) {
  if (selected) {
    return `<svg class="vto-skin-quiz__mark-svg" viewBox="0 0 22 22" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="currentColor"/><path d="M6.3 11.4 9.5 14.5 15.8 7.8" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  return `<svg class="vto-skin-quiz__mark-svg" viewBox="0 0 22 22" aria-hidden="true"><circle cx="11" cy="11" r="10" fill="none" stroke="#cfcfcf" stroke-width="1.6"/></svg>`;
}

function skinDiagQuizGripSvg() {
  return `<svg class="vto-skin-quiz__grip-svg" viewBox="0 0 12 18" aria-hidden="true"><circle cx="3" cy="3" r="1.4" fill="currentColor"/><circle cx="9" cy="3" r="1.4" fill="currentColor"/><circle cx="3" cy="9" r="1.4" fill="currentColor"/><circle cx="9" cy="9" r="1.4" fill="currentColor"/><circle cx="3" cy="15" r="1.4" fill="currentColor"/><circle cx="9" cy="15" r="1.4" fill="currentColor"/></svg>`;
}

function renderSkinDiagSingleOptions(step) {
  const current = skinDiagQuizAnswers[step.key];
  el.vtoSkinQuizOptions.replaceChildren();
  el.vtoSkinQuizOptions.className = "vto-skin-quiz__options";
  el.vtoSkinQuizOptions.setAttribute("role", "radiogroup");
  for (const opt of step.options || []) {
    const selected = current === opt.value;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vto-skin-quiz__choice";
    if (selected) btn.classList.add("vto-skin-quiz__choice--selected");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", selected ? "true" : "false");
    btn.dataset.value = opt.value;
    btn.innerHTML = `<span class="vto-skin-quiz__choice-label">${opt.label}</span><span class="vto-skin-quiz__choice-mark">${skinDiagQuizMarkSvg(selected)}</span>`;
    btn.addEventListener("click", () => {
      if (skinDiagQuizAnimating) return;
      skinDiagQuizAnswers[step.key] = opt.value;
      renderSkinDiagQuestionnaireStep();
      const picked = el.vtoSkinQuizOptions?.querySelector(`[data-value="${opt.value}"]`);
      picked?.classList.add("vto-skin-quiz__choice--just-picked");
      scheduleSkinDiagQuizAutoAdvance();
    });
    el.vtoSkinQuizOptions.append(btn);
  }
}

function bindSkinDiagRankReorder(btn, value) {
  const grip = btn.querySelector(".vto-skin-quiz__grip");
  if (!(grip instanceof HTMLElement)) return;
  grip.addEventListener("pointerdown", (e) => {
    if (e.button != null && e.button !== 0) return;
    if (skinDiagQuizAnimating) return;
    e.preventDefault();
    e.stopPropagation();
    skinDiagRankSuppressClick = true;
    startSkinDiagRankReorder(e, value, btn);
  });
}

/**
 * Pointer-based reorder among selected priorities (mouse and touch).
 * @param {PointerEvent} e
 * @param {string} value
 * @param {HTMLElement} btn
 */
function startSkinDiagRankReorder(e, value, btn) {
  const rankedBtns = [...(el.vtoSkinQuizOptions?.querySelectorAll(".vto-skin-quiz__choice--rank.vto-skin-quiz__choice--selected") || [])].filter(
    (node) => node instanceof HTMLElement
  );
  const startIndex = rankedBtns.findIndex((node) => node.dataset.value === value);
  if (startIndex < 0 || rankedBtns.length < 2) return;

  const startY = e.clientY;
  const originRects = rankedBtns.map((node) => node.getBoundingClientRect());
  const gap = 10;
  const draggedHeight = originRects[startIndex].height + gap;
  let liveIndex = startIndex;
  let didDrag = false;

  const clearTransforms = () => {
    for (const node of rankedBtns) {
      node.style.transform = "";
      node.style.zIndex = "";
      node.style.transition = "";
      node.classList.remove("vto-skin-quiz__choice--dragging");
    }
  };

  const onMove = (ev) => {
    const dy = ev.clientY - startY;
    if (!didDrag && Math.abs(dy) < 6) return;
    didDrag = true;
    skinDiagRankSuppressClick = true;
    btn.classList.add("vto-skin-quiz__choice--dragging");

    const pointerMid = originRects[startIndex].top + originRects[startIndex].height / 2 + dy;
    liveIndex = startIndex;
    for (let i = 0; i < originRects.length; i++) {
      const mid = originRects[i].top + originRects[i].height / 2;
      if (pointerMid > mid) liveIndex = i;
    }

    rankedBtns.forEach((node, i) => {
      if (i === startIndex) {
        node.style.transition = "none";
        node.style.zIndex = "3";
        node.style.transform = `translateY(${dy}px)`;
        return;
      }
      let shift = 0;
      if (startIndex < liveIndex && i > startIndex && i <= liveIndex) shift = -draggedHeight;
      if (startIndex > liveIndex && i >= liveIndex && i < startIndex) shift = draggedHeight;
      node.style.transition = "transform 0.16s ease";
      node.style.transform = shift ? `translateY(${shift}px)` : "";
    });
  };

    const onUp = () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    window.removeEventListener("pointercancel", onUp);
    clearTransforms();
    window.setTimeout(() => {
      skinDiagRankSuppressClick = false;
    }, 350);
    if (!didDrag) return;
    const list = skinDiagQuizAnswers.priorities;
    if (liveIndex === startIndex || liveIndex < 0 || liveIndex >= list.length) return;
    const [moved] = list.splice(startIndex, 1);
    list.splice(liveIndex, 0, moved);
    renderSkinDiagQuestionnaireStep();
  };

  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
}

function renderSkinDiagRankOptions(step) {
  const ranked = skinDiagQuizAnswers.priorities;
  const opts = step.options || [];
  const ordered = [
    ...ranked.map((value) => opts.find((o) => o.value === value)).filter(Boolean),
    ...opts.filter((o) => !ranked.includes(o.value)),
  ];
  el.vtoSkinQuizOptions.replaceChildren();
  el.vtoSkinQuizOptions.className = "vto-skin-quiz__options";
  el.vtoSkinQuizOptions.setAttribute("role", "group");
  for (const opt of ordered) {
    const rankIndex = ranked.indexOf(opt.value);
    const selected = rankIndex >= 0;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "vto-skin-quiz__choice vto-skin-quiz__choice--rank";
    if (selected) btn.classList.add("vto-skin-quiz__choice--selected");
    btn.setAttribute("aria-pressed", selected ? "true" : "false");
    btn.dataset.value = opt.value;
    const label = selected ? `${rankIndex + 1}. ${opt.label}` : opt.label;
    const concern = skinDiagConcernById(opt.value);
    const concernIcon = concern
      ? `<img class="vto-skin-quiz__concern-icon" src="${escapeAttr(concern.icon)}" alt="" width="24" height="24" />`
      : "";
    btn.innerHTML = `${selected ? `<span class="vto-skin-quiz__grip" aria-hidden="true">${skinDiagQuizGripSvg()}</span>` : `<span class="vto-skin-quiz__grip vto-skin-quiz__grip--spacer" aria-hidden="true"></span>`}${concernIcon}<span class="vto-skin-quiz__choice-label">${label}</span><span class="vto-skin-quiz__choice-mark">${skinDiagQuizMarkSvg(selected)}</span>`;
    btn.addEventListener("click", () => {
      if (skinDiagQuizAnimating) return;
      if (skinDiagRankSuppressClick) {
        skinDiagRankSuppressClick = false;
        return;
      }
      const list = skinDiagQuizAnswers.priorities;
      const idx = list.indexOf(opt.value);
      if (idx >= 0) list.splice(idx, 1);
      else if (list.length < SKIN_DIAG_PRIORITY_MAX) list.push(opt.value);
      renderSkinDiagQuestionnaireStep();
    });
    if (selected) {
      const grip = btn.querySelector(".vto-skin-quiz__grip");
      if (grip instanceof HTMLElement) grip.title = "Drag to reorder";
      bindSkinDiagRankReorder(btn, opt.value);
    }
    el.vtoSkinQuizOptions.append(btn);
  }
}

function skinDiagLocationMatches(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  return SKIN_DIAG_CITY_SUGGESTIONS.filter((c) => c.toLowerCase().includes(q)).slice(0, 6);
}

function renderSkinDiagLocationCustom() {
  el.vtoSkinQuizCustom.hidden = false;
  el.vtoSkinQuizCustom.innerHTML = `
    <div class="vto-skin-quiz__locate">
      <label class="vto-skin-quiz__search">
        <span class="vto-skin-quiz__search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
            <path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
        <input type="search" class="vto-skin-quiz__search-input" data-location-input autocomplete="off" placeholder="Search for a street, zip code or city" value="${skinDiagQuizAnswers.location && !skinDiagQuizAnswers.locationSkipped ? escapeAttr(skinDiagQuizAnswers.location) : ""}" />
      </label>
      <ul class="vto-skin-quiz__search-results" data-location-results hidden></ul>
      <button type="button" class="vto-mode__btn vto-mode__btn--primary" data-share-location>Share my location</button>
    </div>
  `;
  const input = /** @type {HTMLInputElement | null} */ (el.vtoSkinQuizCustom.querySelector("[data-location-input]"));
  const list = /** @type {HTMLElement | null} */ (el.vtoSkinQuizCustom.querySelector("[data-location-results]"));
  const share = /** @type {HTMLButtonElement | null} */ (el.vtoSkinQuizCustom.querySelector("[data-share-location]"));

  const fillResults = () => {
    if (!input || !list) return;
    const matches = skinDiagLocationMatches(input.value);
    list.replaceChildren();
    list.hidden = matches.length === 0;
    for (const name of matches) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "vto-skin-quiz__search-hit";
      item.textContent = name;
      item.addEventListener("click", () => {
        skinDiagQuizAnswers.location = name;
        skinDiagQuizAnswers.locationSkipped = false;
        skinDiagQuestionnaireAdvanceFromCurrentStep();
      });
      list.append(item);
    }
  };

  input?.addEventListener("input", fillResults);
  input?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const v = input.value.trim();
    if (v.length < 2) return;
    skinDiagQuizAnswers.location = v;
    skinDiagQuizAnswers.locationSkipped = false;
    skinDiagQuestionnaireAdvanceFromCurrentStep();
  });
  share?.addEventListener("click", () => {
    skinDiagQuizAnswers.location = "New York, NY";
    skinDiagQuizAnswers.locationSkipped = false;
    skinDiagQuestionnaireAdvanceFromCurrentStep();
  });
  requestAnimationFrame(() => input?.focus());
}

function renderSkinDiagAgeCustom() {
  const value = skinDiagQuizAnswers.age != null ? String(skinDiagQuizAnswers.age) : "";
  el.vtoSkinQuizCustom.hidden = false;
  el.vtoSkinQuizCustom.innerHTML = `
    <label class="vto-skin-quiz__age">
      <span class="sr-only">Age</span>
      <input type="number" class="vto-skin-quiz__age-input" data-age-input inputmode="numeric" min="13" max="120" placeholder="Input your age" value="${value}" />
    </label>
  `;
  const input = /** @type {HTMLInputElement | null} */ (el.vtoSkinQuizCustom.querySelector("[data-age-input]"));
  const readAge = () => {
    const n = Number.parseInt(input?.value || "", 10);
    skinDiagQuizAnswers.age = Number.isFinite(n) && n > 0 && n < 130 ? n : null;
    syncSkinDiagQuizContinueEnabled();
  };
  input?.addEventListener("input", readAge);
  input?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    readAge();
    skinDiagQuestionnaireContinue();
  });
  requestAnimationFrame(() => input?.focus());
}

function renderSkinDiagQuestionnaireStep() {
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;

  const pct = ((skinDiagQuizStep + 0.35) / (SKIN_DIAG_QUIZ_STEPS.length + 1)) * 100;
  el.vtoSkinQuizProgressFill.style.width = `${Math.max(8, pct)}%`;

  el.vtoSkinQuizTitle.textContent = step.title;
  if (step.subtitle) {
    el.vtoSkinQuizSubtitle.hidden = false;
    el.vtoSkinQuizSubtitle.textContent = step.subtitle;
  } else {
    el.vtoSkinQuizSubtitle.hidden = true;
    el.vtoSkinQuizSubtitle.textContent = "";
  }

  if (el.vtoSkinQuizHelp) {
    if (step.helpLabel) {
      el.vtoSkinQuizHelp.hidden = false;
      el.vtoSkinQuizHelpBtn.textContent = step.helpLabel;
    } else {
      el.vtoSkinQuizHelp.hidden = true;
      el.vtoSkinQuizHelpBtn.textContent = "";
    }
  }

  el.vtoSkinQuizContinue.textContent = "Next";
  el.vtoSkinQuizContinue.hidden = step.type === "location";
  if (el.vtoSkinQuizPreferNot) el.vtoSkinQuizPreferNot.hidden = true;
  if (el.vtoSkinQuizSkip) el.vtoSkinQuizSkip.hidden = false;
  el.vtoSkinQuestionnairePanel.classList.toggle("vto-flow__panel--skin-quiz-skip-only", step.type === "location");
  el.vtoSkinQuestionnairePanel.dataset.quizStep = step.key;

  const useOptions = step.type === "single" || step.type === "rank";
  el.vtoSkinQuizOptions.hidden = !useOptions;
  if (el.vtoSkinQuizCustom) {
    el.vtoSkinQuizCustom.hidden = useOptions;
    if (useOptions) el.vtoSkinQuizCustom.replaceChildren();
  }

  if (step.type === "single") renderSkinDiagSingleOptions(step);
  else if (step.type === "rank") renderSkinDiagRankOptions(step);
  else if (step.type === "location") renderSkinDiagLocationCustom();
  else if (step.type === "age") renderSkinDiagAgeCustom();

  syncSkinDiagQuizContinueEnabled();
}

function showSkinDiagQuestionnairePanel() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  setVtoComposerChrome(true);
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  el.vtoSkinQuestionnairePanel.hidden = false;
  el.vtoSkinQuestionnairePanel.setAttribute("aria-hidden", "false");
  renderSkinDiagQuestionnaireStep();
  requestAnimationFrame(() => el.vtoSkinQuizBack.focus());
}

function skinDiagQuestionnaireBack() {
  if (skinDiagQuizAnimating) return;
  clearSkinDiagQuizAdvanceTimer();
  if (skinDiagQuizStep <= 0) {
    animateSkinDiagQuizTransition("back", () => {
      hideSkinDiagQuestionnairePanel();
      showVtoTermsOnly();
      el.vtoTermsCheckbox.checked = true;
      syncVtoConsentButton();
    });
    return;
  }
  const prev = skinDiagQuizPrevIndex(skinDiagQuizStep);
  animateSkinDiagQuizTransition("back", () => {
    skinDiagQuizStep = prev;
    renderSkinDiagQuestionnaireStep();
    requestAnimationFrame(() => el.vtoSkinQuizBack.focus());
  });
}

function skinDiagQuestionnaireContinue() {
  if (skinDiagQuizAnimating) return;
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;
  if (step.type === "rank") {
    if (!skinDiagQuizAnswers.priorities.length) return;
    skinDiagQuestionnaireAdvanceFromCurrentStep();
    return;
  }
  if (step.type === "age") {
    if (skinDiagQuizAnswers.age == null) return;
    skinDiagQuestionnaireAdvanceFromCurrentStep();
    return;
  }
  if (step.type === "location") {
    if (!skinDiagQuizAnswers.location) return;
    skinDiagQuestionnaireAdvanceFromCurrentStep();
    return;
  }
  const v = skinDiagQuizAnswers[step.key];
  if (v == null || v === "") return;
  skinDiagQuestionnaireAdvanceFromCurrentStep();
}

function skinDiagQuestionnaireSkip() {
  if (skinDiagQuizAnimating) return;
  const step = SKIN_DIAG_QUIZ_STEPS[skinDiagQuizStep];
  if (!step) return;
  if (step.type === "rank") skinDiagQuizAnswers.priorities = [];
  else if (step.type === "location") {
    skinDiagQuizAnswers.location = null;
    skinDiagQuizAnswers.locationSkipped = true;
  }   else if (step.type === "age") skinDiagQuizAnswers.age = null;
  else skinDiagQuizAnswers[step.key] = null;
  skinDiagQuestionnaireAdvanceFromCurrentStep();
}

function showVtoTermsOnly() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = false;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  syncVtoExperienceBrandUi();
}

function showVtoLiveStub() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = false;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = true;
  syncVtoExperienceBrandUi();
}

function showVtoSelfieStub() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = false;
  el.vtoSelfieConfirmPanel.hidden = true;
  applySelfieStubSkinDiagUi(!!(skinDiagFlowActive || vtoSkinBrandExperienceActive));
  syncVtoExperienceBrandUi();
}

function showVtoSelfieConfirm() {
  stopVtoCameraStream();
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  el.vtoTermsPanel.hidden = true;
  el.vtoLiveStubPanel.hidden = true;
  el.vtoSelfieStubPanel.hidden = true;
  el.vtoSelfieConfirmPanel.hidden = false;
  syncVtoExperienceBrandUi();
}

function resetVtoFlowPanels() {
  hideVtoTryOnPanel();
  clearSkinDiagPostQuizTimer();
  hideSkinDiagLoadingPanel();
  hideSkinDiagResultsPanel();
  hideSkinDiagQuestionnairePanel();
  resetSkinDiagQuestionnaireUi();
  teardownTryOnFaceLandmarker();
  tryOnResizeObserver?.disconnect();
  tryOnResizeObserver = null;
  tryOnShadeContextKey = null;
  tryOnShadeList = [];
  tryOnShadeIndex = 0;
  revokeVtoSelfiePreview();
  el.vtoTermsCheckbox.checked = false;
  syncVtoConsentButton();
  if (vtoUserAcceptedTerms) {
    showVtoSelfieStub();
  } else {
    showVtoTermsOnly();
  }
}

function closeVtoFlow() {
  if (el.vtoFlow.hidden) return;
  el.vtoFlow.hidden = true;
  el.vtoFlow.setAttribute("aria-hidden", "true");
  tryOnFromChatSingleProduct = false;
  skinDiagFlowActive = false;
  vtoSkinBrandExperienceActive = false;
  skinDiagSelfieSkipped = false;
  applySelfieStubSkinDiagUi(false);
  resetVtoFlowPanels();
  setVtoComposerChrome(false);
  setComposerForChatMode();
  syncVtoExperienceBrandUi();
}

function openVtoTermsFlow() {
  skinDiagFlowActive = false;
  vtoSkinBrandExperienceActive = false;
  tryOnFromChatSingleProduct = false;
  closeProductDetail();
  resetVtoFlowPanels();
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  setVtoComposerChrome(true);
  syncVtoExperienceBrandUi();
  requestAnimationFrame(() => {
    if (!vtoUserAcceptedTerms) {
      el.vtoTermsClose.focus();
    } else {
      focusSelfieStubPrimaryAction();
    }
  });
}

function goVtoStepAfterConsent() {
  if (skinDiagFlowActive) {
    beginSkinDiagPreScanQuiz();
    return;
  }
  if (tryOnFromChatSingleProduct && (sessionPersistedSelfieUrl || vtoSelfiePreviewUrl)) {
    if (!vtoSelfiePreviewUrl) vtoSelfiePreviewUrl = sessionPersistedSelfieUrl;
    showVtoTryOn();
    return;
  }
  showVtoSelfieStub();
  focusSelfieStubPrimaryAction();
}

function initVtoFlow() {
  el.chatView.addEventListener("click", (e) => {
    if (e.target.closest("[data-skin-analyze-start]")) {
      e.preventDefault();
      launchSkinDiagAfterConfirm();
      return;
    }
    if (e.target.closest("[data-skin-diag-results-reopen]")) {
      e.preventDefault();
      reopenSkinDiagResultsFromChat();
      return;
    }
    const insightCard = e.target.closest("[data-skin-diag-open]");
    if (insightCard && el.chatView.contains(insightCard)) {
      e.preventDefault();
      handleSkinDiagInsightOpen(insightCard.getAttribute("data-skin-diag-open"));
      return;
    }
    if (handleSkinDiagProductCardClick(e)) return;
    const btn = e.target.closest(".vto-open");
    if (!btn) return;
    const card = btn.closest(".product-card");
    if (card) {
      const tier = card.getAttribute("data-tier");
      const idx = Number(card.getAttribute("data-product-index"));
      const catalog = card.getAttribute("data-catalog") === "foundation" ? "foundation" : "lips";
      if ((tier === "luxury" || tier === "budget") && Number.isFinite(idx) && getProductList(catalog, tier)[idx]) {
        vtoSelectedProductKey = { tier, index: idx, catalog };
      }
    }
    openVtoTermsFlow();
  });

  el.chatView.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const insightCard = e.target.closest("[data-skin-diag-open]");
    if (!insightCard || !el.chatView.contains(insightCard)) return;
    e.preventDefault();
    handleSkinDiagInsightOpen(insightCard.getAttribute("data-skin-diag-open"));
  });

  el.productDetail.addEventListener("click", (e) => {
    if (e.target.closest(".vto-open")) openVtoTermsFlow();
  });

  el.vtoTermsCheckbox.addEventListener("change", () => syncVtoConsentButton());

  el.vtoConsentBtn.addEventListener("click", () => {
    if (!el.vtoTermsCheckbox.checked) return;
    vtoUserAcceptedTerms = true;
    if (skinDiagFlowActive || vtoSkinBrandExperienceActive) {
      skinDiagUserAcceptedTerms = true;
    }
    goVtoStepAfterConsent();
  });

  el.vtoTermsClose.addEventListener("click", () => closeVtoFlow());

  el.vtoStubLiveMode.addEventListener("click", () => {
    showVtoLiveStub();
    requestAnimationFrame(() => el.vtoLiveStubDone.focus());
  });

  el.vtoLiveStubBack.addEventListener("click", () => {
    showVtoSelfieStub();
    focusSelfieStubPrimaryAction();
  });
  el.vtoLiveStubDone.addEventListener("click", () => {
    showVtoSelfieStub();
    focusSelfieStubPrimaryAction();
  });

  el.vtoSelfieStubClose.addEventListener("click", () => closeVtoFlow());

  el.vtoSelfieStubInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieStubPrivacyLearn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieTake.addEventListener("click", () => {
    if (skinDiagFlowActive || vtoSkinBrandExperienceActive) {
      void startSkinDiagProductMatchScan();
      return;
    }
    void startVtoSelfieCamera();
  });

  el.vtoSelfieUploadFallback?.addEventListener("click", () => {
    const input = el.vtoSelfieUploadInput;
    if (!input) return;
    input.value = "";
    input.click();
  });

  el.vtoSelfieUploadInput?.addEventListener("change", (e) => {
    const input = /** @type {HTMLInputElement} */ (e.currentTarget);
    const file = input.files?.[0];
    if (!file) return;
    void handleUploadedSelfieFile(file);
    input.value = "";
  });

  el.vtoSelfieCameraClose.addEventListener("click", () => {
    clearVtoCaptureTimers();
    stopVtoCameraStream();
    showVtoSelfieStub();
    requestAnimationFrame(() => el.vtoSelfieTake.focus());
  });

  el.vtoSelfieCameraInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieConfirmClose.addEventListener("click", () => closeVtoFlow());

  el.vtoSelfieConfirmInfo.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSelfieUseImage.addEventListener("click", () => {
    if (vtoSelfiePreviewUrl) {
      if (sessionPersistedSelfieUrl && sessionPersistedSelfieUrl !== vtoSelfiePreviewUrl) {
        URL.revokeObjectURL(sessionPersistedSelfieUrl);
      }
      sessionPersistedSelfieUrl = vtoSelfiePreviewUrl;
    }
    if (skinDiagFlowActive) {
      skinDiagSelfieSkipped = false;
      startSkinDiagPostQuizFlow();
      return;
    }
    showVtoTryOn();
  });

  el.vtoSelfieSkip?.addEventListener("click", () => {
    if (!(skinDiagFlowActive || vtoSkinBrandExperienceActive)) return;
    skinDiagSelfieSkipped = true;
    if (sessionPersistedSelfieUrl) {
      URL.revokeObjectURL(sessionPersistedSelfieUrl);
      sessionPersistedSelfieUrl = null;
    }
    revokeVtoSelfiePreview();
    clearSkinDiagSelfieAngles();
    startSkinDiagPostQuizFlow();
  });

  el.vtoSelfieRetake.addEventListener("click", () => retakeVtoSelfie());

  el.vtoSkinQuizBack.addEventListener("click", () => skinDiagQuestionnaireBack());
  el.vtoSkinQuizContinue.addEventListener("click", () => skinDiagQuestionnaireContinue());
  el.vtoSkinQuizSkip?.addEventListener("click", () => skinDiagQuestionnaireSkip());
  el.vtoSkinQuizClose?.addEventListener("click", () => closeVtoFlow());
  el.vtoSkinQuizHelpBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
  el.vtoSkinQuizPreferNot.addEventListener("click", (e) => {
    e.preventDefault();
  });

  el.vtoSkinDiagResultsClose?.addEventListener("click", () => closeSkinDiagOverlayToChat());
  el.vtoSkinDiagResultsSkinCard?.addEventListener("click", () => {
    showSkinDiagSkinAnalysis(el.vtoSkinDiagResultsImg?.src || skinDiagResultsPeekUrl || "");
  });
  el.vtoSkinDiagResultsSkinCard?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    showSkinDiagSkinAnalysis(el.vtoSkinDiagResultsImg?.src || skinDiagResultsPeekUrl || "");
  });
  el.vtoSkinDiagSkinClose?.addEventListener("click", () => closeSkinDiagOverlayToChat());
  el.vtoSkinDiagSkinScrim?.addEventListener("click", () => closeSkinDiagOverlayToChat());
  el.vtoSkinDiagResultsClimateCard?.addEventListener("click", () => showSkinDiagClimateAnalysis());
  el.vtoSkinDiagResultsClimateCard?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    showSkinDiagClimateAnalysis();
  });
  el.vtoSkinDiagClimateClose?.addEventListener("click", () => closeSkinDiagOverlayToChat());
  el.vtoSkinDiagClimateScrim?.addEventListener("click", () => closeSkinDiagOverlayToChat());
  el.vtoSkinDiagResultsProducts?.addEventListener("click", (e) => {
    handleSkinDiagProductCardClick(e);
  });

  el.vtoTryOnClose.addEventListener("click", () => closeVtoFlow());
  el.vtoTryOnModeToggle.addEventListener("click", () => {
    setTryOnReferenceMode(!tryOnUseReferenceModel);
  });

  el.vtoTryOnMiniInfo.addEventListener("click", (e) => {
    e.preventDefault();
    const { tier, index, catalog } = getVtoProduct();
    openProductDetail(tier, index, catalog);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || el.vtoFlow.hidden) return;
    if (isComposerFocusTarget(e.target)) return;
    if (!el.vtoSelfieCameraPanel.hidden) {
      e.preventDefault();
      clearVtoCaptureTimers();
      stopVtoCameraStream();
      showVtoSelfieStub();
      requestAnimationFrame(() => el.vtoSelfieTake.focus());
      return;
    }
    if (!el.vtoTryOnPanel.hidden) {
      e.preventDefault();
      hideVtoTryOnPanel();
      showVtoSelfieConfirm();
      requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
      return;
    }
    if (!el.vtoSkinDiagLoadingPanel.hidden) {
      e.preventDefault();
      clearSkinDiagPostQuizTimer();
      const url = sessionPersistedSelfieUrl || vtoSelfiePreviewUrl;
      if (url) showSkinDiagResultsAfterLoad(url);
      else finishSkinDiagFlowToChat();
      return;
    }
    if (!el.vtoSkinDiagResultsPanel.hidden) {
      e.preventDefault();
      closeSkinDiagOverlayToChat();
      return;
    }
    if (!el.vtoSkinQuestionnairePanel.hidden) {
      e.preventDefault();
      skinDiagQuestionnaireBack();
      return;
    }
    if (!el.vtoSelfieConfirmPanel.hidden) {
      e.preventDefault();
      retakeVtoSelfie();
      return;
    }
    e.preventDefault();
    closeVtoFlow();
  });
}

function initNavChat() {
  el.navNewChatBtn?.addEventListener("click", () => startSkinDiagChat());
  el.navMenuBtn?.addEventListener("click", () => switchToMakeupChat());
}

/** Session-only: once accepted, "Check if it's a match" opens straight to the landing screen. */
let lrpUserAcceptedTerms = false;
/** Brands that have already completed a Product Match this session. Other products in that brand skip the camera. */
const lrpMatchedBrands = new Set();
/** When true, Product Match camera is borrowed by the skin-diagnosis flow (not a product match). */
let lrpScanForSkinDiag = false;
/** Product ids the user has already seen results for — chat cards show the score and a return CTA. */
const lrpMatchedIds = new Set();
const LRP_MATCH_THRESHOLD = 70;
/** @type {LrpProduct | null} */
let lrpActiveProduct = null;
let lrpFlowHideTimer = /** @type {number | null} */ (null);
const LRP_FLOW_SLIDE_MS = 450;

/** @typedef {'terms'|'landing'|'camera'|'done'|'loader'|'results'|'details'} LrpPanelId */

/** @param {LrpPanelId} which */
function showLrpPanel(which) {
  /** @type {Record<LrpPanelId, HTMLElement | null>} */
  const panels = {
    terms: el.lrpTermsPanel,
    landing: el.lrpLandingPanel,
    camera: el.lrpCameraPanel,
    done: el.lrpDonePanel,
    loader: el.lrpLoaderPanel,
    results: el.lrpResultsPanel,
    details: el.lrpDetailsPanel,
  };
  for (const [id, node] of Object.entries(panels)) {
    if (node) node.hidden = id !== which;
  }
  const panel = panels[which];
  if (!panel) return;
  el.shell?.classList.toggle("is-lrp-flow-dark", panel.dataset.tone === "dark");
  panel.querySelector(".lrp-flow__scroll")?.scrollTo({ top: 0 });
  requestAnimationFrame(() => panel.querySelector("[data-lrp-close]")?.focus({ preventScroll: true }));
}

/* ---- Selfie scan: front, then right turn, then left turn ---- */

/** @typedef {'front'|'right'|'left'} LrpScanStep */

/** Hold time (ms) the pose must be kept for the ring segment to fill. */
const LRP_SCAN_HOLD_MS = /** @type {Record<LrpScanStep, number>} */ ({ front: 2400, right: 1700, left: 1700 });
/** Nose position between the cheeks (0 = subject's right cheek, 1 = left); 0.5 is facing forward. */
const LRP_YAW_FRONT_TOLERANCE = 0.1;
const LRP_YAW_TURN_THRESHOLD = 0.15;

/** Incremented on every start/stop so stale async steps bail out. */
let lrpScanRunId = 0;
let lrpCameraStream = /** @type {MediaStream | null} */ (null);
let lrpScanRaf = 0;
/** MediaPipe FaceLandmarker in VIDEO mode (separate from the IMAGE-mode try-on instance). */
let lrpFaceLandmarker = null;
let lrpFaceLandmarkerPromise = /** @type {Promise<any> | null} */ (null);
/** @type {Partial<Record<LrpScanStep, string>>} */
const lrpScanCaptures = {};

function ensureLrpFaceLandmarker() {
  if (lrpFaceLandmarker) return Promise.resolve(lrpFaceLandmarker);
  if (lrpFaceLandmarkerPromise) return lrpFaceLandmarkerPromise;
  const ver = "0.10.14";
  const wasmPath = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${ver}/wasm`;
  const modelPath =
    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
  lrpFaceLandmarkerPromise = (async () => {
    const vision = await import(/* webpackIgnore: true */ `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${ver}/+esm`);
    const { FaceLandmarker, FilesetResolver } = vision;
    const fileset = await FilesetResolver.forVisionTasks(wasmPath);
    const create = (delegate) =>
      FaceLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: modelPath, delegate },
        runningMode: "VIDEO",
        numFaces: 1,
      });
    try {
      lrpFaceLandmarker = await create("GPU");
    } catch {
      lrpFaceLandmarker = await create("CPU");
    }
    return lrpFaceLandmarker;
  })().catch(() => {
    lrpFaceLandmarkerPromise = null;
    return null;
  });
  return lrpFaceLandmarkerPromise;
}

/**
 * @param {string} text
 * @param {'left'|'right'|null} [dir]
 */
function setLrpCameraPill(text, dir = null) {
  const pill = el.lrpCameraPill;
  if (!pill) return;
  const key = `${dir ?? ""}|${text}`;
  if (pill.dataset.key === key) return;
  pill.dataset.key = key;
  const s = LUC.stroke;
  const chev = (d) => LUC.svg(18, `<path d="${d === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}" ${s}/>`);
  pill.innerHTML = text
    ? `${dir === "left" ? chev("left") : ""}<span>${escapeHtml(text)}</span>${dir === "right" ? chev("right") : ""}`
    : "";
}

/**
 * Draws the ring in the SVG's real pixel size (uniform scale keeps dash fills accurate).
 * Every segment runs clockwise: front = full loop from 12 o'clock, right = top → bottom, left = bottom → top.
 */
function layoutLrpRing() {
  const svg = document.getElementById("lrpCameraRing");
  if (!(svg instanceof SVGSVGElement)) return;
  const { width: w, height: h } = svg.getBoundingClientRect();
  if (!w || !h) return;
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  const cx = w / 2;
  const cy = h / 2;
  const rx = cx - 2;
  const ry = cy - 2;
  const gap = 0.05;
  /** @param {number} t radians clockwise from 12 o'clock */
  const pt = (t) => `${(cx + rx * Math.sin(t)).toFixed(2)} ${(cy - ry * Math.cos(t)).toFixed(2)}`;
  const arc = (from, to) => `M${pt(from)} A${rx} ${ry} 0 0 1 ${pt(to)}`;
  const right = arc(gap, Math.PI - gap);
  const left = arc(Math.PI + gap, 2 * Math.PI - gap);
  const paths = {
    '[data-track="right"]': right,
    '[data-track="left"]': left,
    '[data-ring="right"]': right,
    '[data-ring="left"]': left,
    '[data-ring="front"]': `M${pt(0)} A${rx} ${ry} 0 0 1 ${pt(Math.PI)} A${rx} ${ry} 0 0 1 ${pt(2 * Math.PI - 0.001)}`,
  };
  for (const [sel, d] of Object.entries(paths)) svg.querySelector(sel)?.setAttribute("d", d);
}

let lrpRingResizeObserver = /** @type {ResizeObserver | null} */ (null);

function watchLrpRingSize() {
  if (lrpRingResizeObserver || typeof ResizeObserver === "undefined") return;
  const svg = document.getElementById("lrpCameraRing");
  if (!svg) return;
  lrpRingResizeObserver = new ResizeObserver(() => layoutLrpRing());
  lrpRingResizeObserver.observe(svg);
}

/** @param {LrpScanStep | 'none'} step @param {number} p */
function setLrpRing(step, p) {
  const panel = el.lrpCameraPanel;
  if (!panel) return;
  /** @param {string} id @param {boolean} on @param {number} fill */
  const set = (id, on, fill) => {
    const path = panel.querySelector(`[data-ring="${id}"]`);
    if (!(path instanceof SVGElement)) return;
    path.classList.toggle("is-active", on);
    path.style.strokeDashoffset = String(100 * (1 - fill));
  };
  set("front", step === "front", step === "front" ? p : 0);
  set("right", step === "right" || step === "left", step === "right" ? p : step === "left" ? 1 : 0);
  set("left", step === "left", step === "left" ? p : 0);
}

/**
 * Reads face position/size relative to the on-screen oval and a yaw ratio from the landmarks.
 * @returns {{ centered: boolean; size: number; yaw: number } | null}
 */
function readLrpFacePose(result) {
  const lm = result?.faceLandmarks?.[0];
  const video = el.lrpCameraVideo;
  const oval = el.lrpCameraOval;
  if (!lm || !video || !oval || !video.videoWidth) return null;

  const vr = video.getBoundingClientRect();
  const or = oval.getBoundingClientRect();
  const scale = Math.max(vr.width / video.videoWidth, vr.height / video.videoHeight);
  const dw = video.videoWidth * scale;
  const dh = video.videoHeight * scale;
  const ox = vr.left + (vr.width - dw) / 2;
  const oy = vr.top + (vr.height - dh) / 2;

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const p of lm) {
    const sx = ox + (1 - p.x) * dw;
    const sy = oy + p.y * dh;
    if (sx < minX) minX = sx;
    if (sx > maxX) maxX = sx;
    if (sy < minY) minY = sy;
    if (sy > maxY) maxY = sy;
  }
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const rx = or.width / 2;
  const ry = or.height / 2;
  const dx = (cx - (or.left + rx)) / rx;
  const dy = (cy - (or.top + ry)) / ry;

  const nose = lm[1];
  const rightCheek = lm[234];
  const leftCheek = lm[454];
  const span = leftCheek.x - rightCheek.x;
  const yaw = Math.abs(span) > 1e-4 ? (nose.x - rightCheek.x) / span : 0.5;

  return { centered: dx * dx + dy * dy < 0.12, size: (maxY - minY) / or.height, yaw };
}

/**
 * @param {LrpScanStep} step
 * @param {ReturnType<typeof readLrpFacePose>} pose
 * @returns {{ ok: boolean; text: string; dir?: 'left'|'right' }}
 */
function judgeLrpPose(step, pose) {
  const turnCopy =
    step === "right"
      ? { text: "Turn your face to the right", dir: /** @type {const} */ ("right") }
      : { text: "Turn your face to the left", dir: /** @type {const} */ ("left") };
  if (!pose) return { ok: false, text: "Position your face in the oval" };
  if (!pose.centered) return { ok: false, text: "Center your face in the oval" };
  if (step === "front") {
    if (pose.size < 0.45) return { ok: false, text: "Move a little closer" };
    if (pose.size > 1.05) return { ok: false, text: "Move back a little" };
    if (Math.abs(pose.yaw - 0.5) > LRP_YAW_FRONT_TOLERANCE) return { ok: false, text: "Look straight ahead" };
    return { ok: true, text: "Stay just like that" };
  }
  const turned = step === "right" ? pose.yaw < 0.5 - LRP_YAW_TURN_THRESHOLD : pose.yaw > 0.5 + LRP_YAW_TURN_THRESHOLD;
  return { ok: turned, ...turnCopy };
}

/**
 * Fills the step's ring segment while the pose is held; without a face model it fills on a timer.
 * @param {LrpScanStep} step
 * @param {number} runId
 * @param {any} landmarker
 * @returns {Promise<boolean>}
 */
function runLrpScanStep(step, runId, landmarker) {
  const video = el.lrpCameraVideo;
  return new Promise((resolve) => {
    let progress = 0;
    let last = performance.now();
    let lastVideoTime = -1;
    /** @type {ReturnType<typeof judgeLrpPose>} */
    let verdict = { ok: false, text: "" };
    const frame = (now) => {
      if (runId !== lrpScanRunId || !video) {
        resolve(false);
        return;
      }
      const dt = Math.min(100, now - last);
      last = now;
      if (landmarker) {
        if (video.currentTime !== lastVideoTime) {
          lastVideoTime = video.currentTime;
          try {
            verdict = judgeLrpPose(step, readLrpFacePose(landmarker.detectForVideo(video, now)));
          } catch {
            verdict = { ok: false, text: "Position your face in the oval" };
          }
        }
      } else {
        verdict = judgeLrpPose(step, { centered: true, size: 0.7, yaw: step === "right" ? 0.2 : step === "left" ? 0.8 : 0.5 });
      }
      if (verdict.ok) progress = Math.min(1, progress + dt / LRP_SCAN_HOLD_MS[step]);
      setLrpCameraPill(verdict.text, verdict.dir ?? null);
      setLrpRing(step, progress);
      if (progress >= 1) {
        resolve(true);
        return;
      }
      lrpScanRaf = requestAnimationFrame(frame);
    };
    lrpScanRaf = requestAnimationFrame(frame);
  });
}

/** @param {LrpScanStep} step */
function captureLrpScanFrame(step) {
  const video = el.lrpCameraVideo;
  const canvas = el.lrpCameraCanvas;
  const flash = el.lrpCameraFlash;
  if (flash) {
    flash.classList.remove("is-flash");
    void flash.offsetWidth;
    flash.classList.add("is-flash");
  }
  if (!video || !canvas || !video.videoWidth) return;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0);
  lrpScanCaptures[step] = canvas.toDataURL("image/jpeg", 0.9);
}

function stopLrpCamera() {
  cancelAnimationFrame(lrpScanRaf);
  if (lrpCameraStream) {
    for (const t of lrpCameraStream.getTracks()) t.stop();
    lrpCameraStream = null;
  }
  if (el.lrpCameraVideo) el.lrpCameraVideo.srcObject = null;
}

function stopLrpScan() {
  lrpScanRunId += 1;
  stopLrpCamera();
}

function restoreAfterLrpScanAbort() {
  if (lrpScanForSkinDiag) {
    closeLrpFlow();
    if (skinDiagFlowActive) {
      showVtoSelfieStub();
      requestAnimationFrame(() => el.vtoSelfieTake?.focus());
    }
    return;
  }
  showLrpPanel("landing");
}

function applyLrpFrontCaptureAsSelfie() {
  const dataUrl = lrpScanCaptures.front;
  if (!dataUrl || !el.vtoSelfiePreviewImg) return false;
  revokeVtoSelfiePreview();
  vtoSelfiePreviewUrl = dataUrl;
  el.vtoSelfiePreviewImg.src = dataUrl;
  el.vtoSelfiePreviewImg.alt = "Captured selfie preview";
  persistSkinDiagSelfieAngles({
    left: lrpScanCaptures.left || null,
    front: dataUrl,
    right: lrpScanCaptures.right || null,
  });
  return true;
}

function openLrpOverlay() {
  const flow = el.lrpFlow;
  if (!flow) return false;
  if (lrpFlowHideTimer != null) {
    window.clearTimeout(lrpFlowHideTimer);
    lrpFlowHideTimer = null;
  }
  flow.hidden = false;
  flow.setAttribute("aria-hidden", "false");
  el.shell?.classList.add("is-lrp-flow-open");
  flow.classList.toggle("lrp-flow--over-vto", lrpScanForSkinDiag);
  flow.classList.toggle("lrp-flow--skincare", lrpScanForSkinDiag);
  if (lrpScanForSkinDiag) {
    flow.classList.remove("lrp-flow--cerave", "lrp-flow--lancome");
    flow.setAttribute("aria-label", VTO_EXPERIENCE_BRAND_SKIN);
  }
  syncShellComposerStackVar();
  requestAnimationFrame(() => requestAnimationFrame(() => flow.classList.add("is-open")));
  return true;
}

/** Skin diagnosis reuses Product Match’s guided oval scan (front / right / left). */
async function startSkinDiagProductMatchScan() {
  lrpScanForSkinDiag = true;
  if (!openLrpOverlay()) {
    lrpScanForSkinDiag = false;
    void startVtoSelfieCamera();
    return;
  }
  void ensureLrpFaceLandmarker();
  await startLrpScan();
}

/** @param {number} runId */
async function finishSkinDiagScanFromLrp(runId) {
  const isCurrent = () => runId === lrpScanRunId;
  const done = el.lrpDonePanel;
  done?.classList.remove("is-animating");
  showLrpPanel("done");
  void done?.offsetWidth;
  done?.classList.add("is-animating");
  await wait(1700);
  if (!isCurrent()) return;
  applyLrpFrontCaptureAsSelfie();
  closeLrpFlow();
  if (el.vtoFlow.hidden) return;
  if (skinDiagFlowActive) {
    continueSkinDiagAfterSelfieCapture();
    return;
  }
  showVtoSelfieConfirm();
  requestAnimationFrame(() => el.vtoSelfieUseImage.focus());
}

async function startLrpScan() {
  stopLrpScan();
  const runId = lrpScanRunId;
  const isCurrent = () => runId === lrpScanRunId;
  setLrpRing("none", 0);
  setLrpCameraPill("Starting camera…");
  showLrpPanel("camera");
  layoutLrpRing();
  watchLrpRingSize();

  if (!navigator.mediaDevices?.getUserMedia) {
    window.alert("Camera is not available in this browser or context (try HTTPS or a current browser).");
    restoreAfterLrpScanAbort();
    return;
  }
  try {
    lrpCameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
  } catch {
    if (!isCurrent()) return;
    window.alert("Camera permission was denied or the camera could not be opened.");
    restoreAfterLrpScanAbort();
    return;
  }
  if (!isCurrent() || !el.lrpCameraVideo) {
    stopLrpCamera();
    return;
  }
  el.lrpCameraVideo.srcObject = lrpCameraStream;
  await el.lrpCameraVideo.play().catch(() => {});
  if (!el.lrpCameraVideo.videoWidth) {
    await new Promise((r) => el.lrpCameraVideo?.addEventListener("loadeddata", r, { once: true }));
  }

  setLrpCameraPill("Getting ready…");
  const landmarker = await Promise.race([ensureLrpFaceLandmarker(), wait(10000).then(() => null)]);
  if (!isCurrent()) return;

  for (const step of /** @type {LrpScanStep[]} */ (["front", "right", "left"])) {
    const done = await runLrpScanStep(step, runId, landmarker);
    if (!done || !isCurrent()) return;
    captureLrpScanFrame(step);
    setLrpCameraPill(step === "left" ? "Got it" : "");
    await wait(550);
    if (!isCurrent()) return;
  }

  stopLrpCamera();
  if (lrpScanForSkinDiag) {
    await finishSkinDiagScanFromLrp(runId);
    return;
  }
  markLrpBrandMatchComplete(lrpActiveProduct);
  await runLrpDoneAndLoader(runId);
}

/** @param {number} runId */
async function runLrpDoneAndLoader(runId) {
  const isCurrent = () => runId === lrpScanRunId;
  const done = el.lrpDonePanel;
  done?.classList.remove("is-animating");
  showLrpPanel("done");
  void done?.offsetWidth;
  done?.classList.add("is-animating");
  await wait(1700);
  if (!isCurrent()) return;

  const loader = el.lrpLoaderPanel;
  const steps = Array.from(el.lrpLoaderSteps?.children ?? []);
  for (const s of steps) s.classList.remove("is-active", "is-done");
  loader?.classList.remove("is-animating");
  showLrpPanel("loader");
  void loader?.offsetWidth;
  loader?.classList.add("is-animating");
  await wait(650);
  for (const s of steps) {
    if (!isCurrent()) return;
    s.classList.add("is-active");
    await wait(1400);
    if (!isCurrent()) return;
    s.classList.remove("is-active");
    s.classList.add("is-done");
  }
  await wait(600);
  if (!isCurrent()) return;
  showLrpResults(lrpActiveProduct);
}

/** @param {LrpProduct} p */
function lrpDescHTML(p) {
  const full = p.description || "";
  const limit = 150;
  if (full.length <= limit + 20) return escapeHtml(full);
  const cut = full.slice(0, limit);
  const at = cut.lastIndexOf(" ");
  const short = (at > 80 ? cut.slice(0, at) : cut).trim();
  return `${escapeHtml(short)}… <button type="button" class="lrp-results__more-link" data-lrp-read-more>Read more</button>`;
}

/** @param {LrpProduct} p */
function lrpMoreCardHTML(p) {
  const tagList = p.tags || [];
  const extra = Math.max(0, tagList.length - 3);
  const tags = tagList
    .slice(0, 3)
    .map((t) => `<span class="lrp-card__tag">${escapeHtml(t)}</span>`)
    .join("");
  const overflow = extra ? `<span class="lrp-card__tag">+${extra}</span>` : "";
  const was = p.priceWas ? `<s>${escapeHtml(p.priceWas)}</s>` : "";
  return `<article class="lrp-more-card" role="listitem" data-lrp-product="${escapeAttr(p.id)}">
    ${lrpMatchChipHTML(p.match, { extraClass: "lrp-more-card__match" })}
    <div class="lrp-more-card__media">${lrpProductMediaHTML(p)}</div>
    <h3 class="lrp-more-card__name">${escapeHtml(p.title)}</h3>
    <div class="lrp-card__tags">${tags}${overflow}</div>
    <p class="lrp-more-card__price">${was}${escapeHtml(p.priceNow || "")}</p>
    <button type="button" class="lrp-more-card__learn" data-lrp-more-learn aria-label="Learn more about ${escapeAttr(p.title)}">
      Learn More
    </button>
  </article>`;
}

/** @param {LrpProduct} p */
function isLrpMatch(p) {
  return p.match >= LRP_MATCH_THRESHOLD;
}

/** @param {LrpProduct} p */
function lrpCarouselProducts(p, mismatch) {
  const catalog = catalogForBrand(productMatchBrand(p));
  const fromSimilar = (p.similar || []).map((id) => catalog[id]).filter(Boolean);
  if (!mismatch) return fromSimilar;
  const alts = fromSimilar.filter(isLrpMatch);
  if (alts.length) return alts;
  return Object.values(catalog)
    .filter((item) => item.id !== p.id && isLrpMatch(item))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}

/** @param {LrpProduct} p */
function populateLrpResults(p) {
  const mismatch = !isLrpMatch(p);
  const fromSkinDiag = Boolean(p.skinDiagStepId);
  const matchLabel = `${Number.isFinite(p.match) ? p.match : 0}% match`;
  el.lrpResultsPanel?.classList.toggle("lrp-results--mismatch", mismatch);
  if (el.lrpResultMatchPill) el.lrpResultMatchPill.textContent = matchLabel;
  if (el.lrpMatchCardPill) el.lrpMatchCardPill.textContent = matchLabel;
  syncLrpMatchScorePills(p.match);
  if (el.lrpResultMedia) el.lrpResultMedia.innerHTML = lrpProductMediaHTML(p);
  if (el.lrpResultKind) el.lrpResultKind.textContent = p.kind;
  if (el.lrpResultName) el.lrpResultName.textContent = p.title;
  if (el.lrpResultTags) el.lrpResultTags.innerHTML = lrpProductTagsHTML(p);
  if (el.lrpResultWarning) {
    const show = !!p.warning;
    el.lrpResultWarning.hidden = !show;
    el.lrpResultWarning.textContent = p.warning || "";
  }
  if (el.lrpResultPrice) {
    const was = p.priceWas ? `<s>${escapeHtml(p.priceWas)}</s>` : "";
    el.lrpResultPrice.innerHTML = `${p.volume ? escapeHtml(p.volume) + " " : ""}${was}${escapeHtml(p.priceNow || "")}`;
  }
  if (el.lrpResultDesc) {
    el.lrpResultDesc.innerHTML = lrpDescHTML(p);
    el.lrpResultDesc.dataset.full = p.description || "";
  }
  if (el.lrpMatchIntro) el.lrpMatchIntro.textContent = p.matchIntro || "";
  if (el.lrpMatchReasons) {
    const s = LUC.stroke;
    const check = LUC.svg(20, `<circle cx="12" cy="12" r="10" ${s}/><path d="m8 12 2.5 2.5L16 9" ${s}/>`);
    el.lrpMatchReasons.innerHTML = (p.matchReasons || [])
      .map((r) => `<li><span class="lrp-match-card__check">${check}</span><span>${escapeHtml(r)}</span></li>`)
      .join("");
  }
  closeLrpMatchHowDrawer();
  if (el.lrpResultIngredients) el.lrpResultIngredients.textContent = p.ingredients;
  const moreHeading = mismatch ? "We've found a better match" : fromSkinDiag ? "Alternative products" : "More products";
  if (el.lrpMoreHeading) el.lrpMoreHeading.textContent = moreHeading;
  if (el.lrpMoreIntro) el.lrpMoreIntro.hidden = !mismatch;
  const similar = lrpResultsMoreProducts(p, mismatch);
  const moreSection = el.lrpResultsPanel?.querySelector(".lrp-results__more");
  if (moreSection instanceof HTMLElement) moreSection.hidden = similar.length === 0;
  if (el.lrpMoreRow) el.lrpMoreRow.innerHTML = similar.map((item) => lrpMoreCardHTML(item)).join("");
  if (el.lrpMoreDots) {
    const n = Math.max(similar.length, 1);
    const parts = [];
    for (let i = 0; i < n; i += 1) parts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
    el.lrpMoreDots.innerHTML = parts.join("");
    el.lrpMoreDots.setAttribute("aria-label", moreHeading);
  }
  if (el.lrpMoreCarousel) wireProductCarousel(el.lrpMoreCarousel);
  if (el.lrpShopBtn) {
    el.lrpShopBtn.setAttribute("aria-label", `Where to buy ${p.title}`);
  }
  if (el.lrpShopLabel) el.lrpShopLabel.textContent = "Where to buy";
  el.lrpResultsPanel?.querySelector(".lrp-results__scroll")?.scrollTo({ top: 0 });
}

/** @param {LrpProduct} source */
function syncLrpChatMatchState(source) {
  const brand = productMatchBrand(source);
  const cards = document.querySelectorAll(".lrp-card[data-lrp-product]");
  cards.forEach((card) => {
    const id = card.getAttribute("data-lrp-product");
    const product = id ? findLrpProduct(id) : null;
    if (!product || productMatchBrand(product) !== brand) return;
    card.classList.add("is-matched");
    const chipHTML = lrpMatchChipHTML(product.match);
    const existing = card.querySelector(".lrp-card__match");
    if (existing) existing.outerHTML = chipHTML;
    else (card.querySelector(".lrp-card__header") || card).insertAdjacentHTML("beforeend", chipHTML);
    const cta = card.querySelector("[data-lrp-test-match]");
    if (cta) {
      cta.setAttribute("aria-label", `See your match score for ${product.title}`);
      cta.innerHTML = `See my match score ${lrpCtaArrowSVG()}`;
    }
  });
}

/** @param {LrpProduct | null} p @param {{ skipMatchUnlock?: boolean }} [opts] */
function showLrpResults(p, opts = {}) {
  if (!p || !el.lrpResultsPanel) return;
  if (!opts.skipMatchUnlock) {
    markLrpBrandMatchComplete(p);
    syncLrpChatMatchState(p);
  }
  populateLrpResults(p);
  el.lrpResultsPanel.classList.remove("is-enter");
  showLrpPanel("results");
  void el.lrpResultsPanel.offsetWidth;
  el.lrpResultsPanel.classList.add("is-enter");
}

/** @param {LrpProduct} p */
function populateLrpLanding(p) {
  if (el.lrpLandingMedia) el.lrpLandingMedia.innerHTML = lrpProductMediaHTML(p);
  if (el.lrpLandingName) el.lrpLandingName.textContent = p.title;
  if (el.lrpLandingTags) el.lrpLandingTags.innerHTML = lrpProductTagsHTML(p);
}

/** @param {LrpProduct} p */
const LRP_TERMS_HTML =
  `By using this service, I agree to <a href="#" class="lrp-terms__link">La Roche-Posay's Terms of Use</a>
                (which includes an arbitration provision), and I have read and acknowledge
                <a href="#" class="lrp-terms__link">La Roche-Posay's Privacy Policy</a> and Notice of Financial Incentives.
                Information is shared or made available to La Roche-Posay's parent (L'Oréal S.A.) for analytics, market
                research, and to improve products and services. If you elect to receive your results, information obtained
                (such as quiz answers and recommendations) is stored with your beauty profile at La Roche-Posay.`;

const CERAVE_TERMS_HTML =
  `By using this service, I agree to <a href="#" class="lrp-terms__link">CeraVe's Terms of Use</a>
                (which includes an arbitration provision), and I have read and acknowledge
                <a href="#" class="lrp-terms__link">CeraVe's Privacy Policy</a> and Notice of Financial Incentives.
                Information is shared or made available to CeraVe's parent (L'Oréal S.A.) for analytics, market
                research, and to improve products and services. If you elect to receive your results, information obtained
                (such as quiz answers and recommendations) is stored with your beauty profile at CeraVe.`;

const LANCOME_TERMS_HTML =
  `By using this service, I agree to <a href="#" class="lrp-terms__link">Lancôme's Terms of Use</a>
                (which includes an arbitration provision), and I have read and acknowledge
                <a href="#" class="lrp-terms__link">Lancôme's Privacy Policy</a> and Notice of Financial Incentives.
                Information is shared or made available to Lancôme's parent (L'Oréal S.A.) for analytics, market
                research, and to improve products and services. If you elect to receive your results, information obtained
                (such as quiz answers and recommendations) is stored with your beauty profile at Lancôme.`;

/** @param {MatchBrand} [brand] */
function syncMatchFlowBrand(brand = matchBrand) {
  const flow = el.lrpFlow;
  if (!flow) return;
  flow.classList.toggle("lrp-flow--cerave", brand === "cerave");
  flow.classList.toggle("lrp-flow--lancome", brand === "lancome");
  flow.setAttribute("aria-label", matchBrandName(brand));
  if (el.lrpTermsLegal) {
    el.lrpTermsLegal.innerHTML =
      brand === "cerave" ? CERAVE_TERMS_HTML : brand === "lancome" ? LANCOME_TERMS_HTML : LRP_TERMS_HTML;
  }
}

/** @param {LrpProduct} p */
function prepareLrpOverlay(p) {
  const flow = el.lrpFlow;
  if (!flow) return null;
  if (lrpFlowHideTimer != null) {
    window.clearTimeout(lrpFlowHideTimer);
    lrpFlowHideTimer = null;
  }
  lrpScanForSkinDiag = false;
  stopLrpScan();
  closeVtoFlow();
  closeProductDetail();
  flow.classList.remove("lrp-flow--over-vto", "lrp-flow--skincare");
  matchBrand = productMatchBrand(p);
  syncMatchFlowBrand();
  lrpActiveProduct = p;
  populateLrpLanding(p);
  el.lrpResultsPanel?.classList.remove("is-enter");
  el.lrpDetailsPanel?.classList.remove("is-enter");
  return flow;
}

/** @param {HTMLElement} flow */
function revealLrpOverlay(flow) {
  flow.hidden = false;
  flow.setAttribute("aria-hidden", "false");
  el.shell?.classList.add("is-lrp-flow-open");
  syncShellComposerStackVar();
  requestAnimationFrame(() => requestAnimationFrame(() => flow.classList.add("is-open")));
}

/** @param {LrpProduct} p */
function continueLrpMatchFlow(p) {
  if (lrpHasMatchResult(p)) {
    showLrpResults(p);
    return;
  }
  showLrpPanel(lrpUserAcceptedTerms ? "landing" : "terms");
}

function openLrpFlow(p) {
  const flow = prepareLrpOverlay(p);
  if (!flow) return;
  if (el.lrpTermsCheckbox) el.lrpTermsCheckbox.checked = false;
  syncLrpConsentButton();
  revealLrpOverlay(flow);
  continueLrpMatchFlow(p);
}

/** Step alternatives for a Skin Diag product details page. */
function lrpDetailsMoreProducts(p) {
  const stepId = p.skinDiagStepId || "";
  if (!stepId) return lrpCarouselProducts(p, false);
  const step = getSkinDiagRoutineSteps().find((s) => s.id === stepId) || { id: stepId, step: stepId };
  return skinDiagAlternativeProductsForStep(step, p.id).map((item) => {
    const rec = skinDiagProductAsMatchRecord(item);
    rec.skinDiagStepId = stepId;
    rec.step = item.step || rec.step || stepId;
    return rec;
  });
}

/** Higher-scoring same-step products for the Product Match “better match” layout. */
function skinDiagBetterMatchProducts(p) {
  const stepId = p.skinDiagStepId || p.step || "";
  if (!stepId) return lrpCarouselProducts(p, true);
  const profile = skinDiagQuizProfile();
  const better = SKINCARE_DB.products
    .map(resolveSkincareProduct)
    .filter((item) => item && item.step === stepId && item.id !== p.id)
    .map((item) => ({ ...item, match: skinDiagMatchFromScore(scoreSkincareProduct(item, profile), skinDiagStepCohortScores(stepId)) }))
    .filter((item) => isLrpMatch(item))
    .sort((a, b) => b.match - a.match || a.title.localeCompare(b.title))
    .slice(0, 3)
    .map((item) => {
      const rec = skinDiagProductAsMatchRecord(item);
      rec.skinDiagStepId = stepId;
      rec.step = item.step || rec.step || stepId;
      return rec;
    });
  return better.length ? better : lrpCarouselProducts(p, true);
}

function lrpResultsMoreProducts(p, mismatch) {
  if (p.skinDiagStepId) {
    return mismatch ? skinDiagBetterMatchProducts(p) : lrpDetailsMoreProducts(p);
  }
  return lrpCarouselProducts(p, mismatch);
}

/** @param {string | null | undefined} id */
function resolveLrpMoreCardProduct(id) {
  if (!id) return null;
  const fromMatch = findLrpProduct(id);
  if (fromMatch) return fromMatch;
  const found = findSkinDiagProductById(id);
  return found ? skinDiagProductAsMatchRecord(found) : null;
}

/** @param {string | null | undefined} id */
function openLrpMoreCardProduct(id) {
  let product = resolveLrpMoreCardProduct(id);
  if (!product) return;
  const stepId = lrpActiveProduct?.skinDiagStepId || "";
  if (stepId) {
    product = { ...product, skinDiagStepId: stepId, step: product.step || stepId };
  }
  lrpActiveProduct = product;
  populateLrpLanding(product);
  const onDetails = Boolean(el.lrpDetailsPanel && !el.lrpDetailsPanel.hidden);
  if (onDetails && !shouldShowMatchUiFromLearnMore(product)) showLrpDetails(product);
  else showLrpResults(product, { skipMatchUnlock: Boolean(product.skinDiagStepId) });
}

/** @param {LrpProduct} p */
function populateLrpDetails(p) {
  if (el.lrpDetailsMedia) el.lrpDetailsMedia.innerHTML = lrpProductMediaHTML(p);
  if (el.lrpDetailsKind) el.lrpDetailsKind.textContent = p.kind;
  if (el.lrpDetailsName) el.lrpDetailsName.textContent = p.title;
  if (el.lrpDetailsTags) el.lrpDetailsTags.innerHTML = lrpProductTagsHTML(p);
  if (el.lrpDetailsWarning) {
    const show = !!p.warning;
    el.lrpDetailsWarning.hidden = !show;
    el.lrpDetailsWarning.textContent = p.warning || "";
  }
  if (el.lrpDetailsPrice) {
    const was = p.priceWas ? `<s>${escapeHtml(p.priceWas)}</s>` : "";
    el.lrpDetailsPrice.innerHTML = `${p.volume ? escapeHtml(p.volume) + " " : ""}${was}${escapeHtml(p.priceNow || "")}`;
  }
  if (el.lrpDetailsDesc) {
    el.lrpDetailsDesc.innerHTML = lrpDescHTML(p);
    el.lrpDetailsDesc.dataset.full = p.description || "";
  }
  if (el.lrpDetailsIngredients) el.lrpDetailsIngredients.textContent = p.ingredients;
  const fromSkinDiag = Boolean(p.skinDiagStepId);
  const similar = lrpDetailsMoreProducts(p);
  const moreHeading = fromSkinDiag ? "Alternative products" : "More products";
  if (el.lrpDetailsMoreHeading) el.lrpDetailsMoreHeading.textContent = moreHeading;
  const moreSection = el.lrpDetailsPanel?.querySelector(".lrp-results__more");
  if (moreSection instanceof HTMLElement) moreSection.hidden = similar.length === 0;
  if (el.lrpDetailsMoreRow) el.lrpDetailsMoreRow.innerHTML = similar.map((item) => lrpMoreCardHTML(item)).join("");
  if (el.lrpDetailsMoreDots) {
    const n = Math.max(similar.length, 1);
    const parts = [];
    for (let i = 0; i < n; i += 1) parts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
    el.lrpDetailsMoreDots.innerHTML = parts.join("");
    el.lrpDetailsMoreDots.setAttribute("aria-label", moreHeading);
  }
  if (el.lrpDetailsMoreCarousel) wireProductCarousel(el.lrpDetailsMoreCarousel);
  const seen = lrpHasMatchResult(p);
  if (el.lrpDetailsMatchBtn) {
    el.lrpDetailsMatchBtn.hidden = fromSkinDiag;
    const label = seen ? "See my match score" : "Check if it's a match";
    el.lrpDetailsMatchBtn.setAttribute("aria-label", seen ? `See your match score for ${p.title}` : `Check if ${p.title} is a match`);
    el.lrpDetailsMatchBtn.innerHTML = `${escapeHtml(label)} ${lrpCtaArrowSVG()}`;
  }
  if (el.lrpDetailsShopBtn) {
    el.lrpDetailsShopBtn.textContent = "Where to buy";
    el.lrpDetailsShopBtn.setAttribute("aria-label", `Where to buy ${p.title}`);
    el.lrpDetailsShopBtn.classList.toggle("lrp-flow__primary", fromSkinDiag);
    el.lrpDetailsShopBtn.classList.toggle("lrp-flow__secondary", !fromSkinDiag);
  }
  el.lrpDetailsPanel?.classList.toggle("lrp-details--shop-primary", fromSkinDiag);
  el.lrpDetailsPanel?.querySelector(".lrp-results__scroll")?.scrollTo({ top: 0 });
}

/** @param {LrpProduct | null} p */
function showLrpDetails(p) {
  if (!p || !el.lrpDetailsPanel) return;
  populateLrpDetails(p);
  el.lrpDetailsPanel.classList.remove("is-enter");
  showLrpPanel("details");
  void el.lrpDetailsPanel.offsetWidth;
  el.lrpDetailsPanel.classList.add("is-enter");
}

function shouldShowMatchUiFromLearnMore(p) {
  if (!p) return false;
  if (p.skinDiagStepId) return skinDiagHasCompletedAnalysis();
  return lrpHasMatchResult(p);
}

function openLrpDetails(p) {
  const flow = prepareLrpOverlay(p);
  if (!flow) return;
  revealLrpOverlay(flow);
  if (shouldShowMatchUiFromLearnMore(p)) {
    showLrpResults(p, { skipMatchUnlock: Boolean(p.skinDiagStepId) });
    return;
  }
  showLrpDetails(p);
}

/** @param {LrpProduct | null | undefined} p */
async function startMatchShopFlow(p) {
  if (!p || flow === "busy") return;
  lrpShopProduct = p;
  dismissFullscreenOverlaysForChat();
  enterChatView();
  chatGenerationEpoch += 1;
  const myGen = chatGenerationEpoch;
  appendUserBubble(`Where can I buy ${p.title}?`);
  flow = "busy";
  updateComposerTextState();
  await assistantThink();
  if (myGen !== chatGenerationEpoch) return;
  appendAssistantBlock(buildMatchShopMessageHtml(p));
  flow = "idle";
  updateComposerTextState();
  requestAnimationFrame(() => {
    el.input?.focus();
  });
}

/** @param {LrpProduct | null | undefined} p */
async function startMatchInPersonFlow(p) {
  if (!p || flow === "busy") return;
  lrpShopProduct = p;
  appendUserBubble("Find it in stores near me");
  flow = "busy";
  updateComposerTextState();
  chatGenerationEpoch += 1;
  const myGen = chatGenerationEpoch;
  await assistantThink();
  if (myGen !== chatGenerationEpoch) return;
  appendAssistantBlock(buildMatchInPersonMessageHtml(p));
  flow = "idle";
  updateComposerTextState();
}

function isLrpMatchHowDrawerOpen() {
  return Boolean(el.lrpMatchHowDrawer && !el.lrpMatchHowDrawer.hidden);
}

function closeLrpMatchHowDrawer() {
  const drawer = el.lrpMatchHowDrawer;
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.hidden = true;
  drawer.setAttribute("aria-hidden", "true");
  el.lrpMatchHowBtn?.setAttribute("aria-expanded", "false");
}

function openLrpMatchHowDrawer() {
  const drawer = el.lrpMatchHowDrawer;
  if (!drawer) return;
  drawer.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  el.lrpMatchHowBtn?.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => drawer.classList.add("is-open"));
  requestAnimationFrame(() => el.lrpMatchHowClose?.focus());
}

function closeLrpFlow() {
  const flow = el.lrpFlow;
  if (!flow || flow.hidden) return;
  if (!flow.classList.contains("is-open") && lrpFlowHideTimer != null) return;
  closeLrpMatchHowDrawer();
  stopLrpScan();
  flow.classList.remove("is-open", "lrp-flow--over-vto", "lrp-flow--skincare");
  lrpScanForSkinDiag = false;
  lrpFlowHideTimer = window.setTimeout(() => {
    lrpFlowHideTimer = null;
    flow.hidden = true;
    flow.setAttribute("aria-hidden", "true");
    el.shell?.classList.remove("is-lrp-flow-open", "is-lrp-flow-dark");
    syncShellComposerStackVar();
  }, LRP_FLOW_SLIDE_MS);
}

function syncLrpConsentButton() {
  el.lrpConsentBtn?.setAttribute("aria-disabled", el.lrpTermsCheckbox?.checked ? "false" : "true");
}

function initLrpFlow() {
  el.chatView.addEventListener("click", (e) => {
    const inPersonBtn = e.target.closest("[data-lrp-find-in-person]");
    if (inPersonBtn) {
      const id = inPersonBtn.getAttribute("data-lrp-find-in-person");
      const product = (id && findLrpProduct(id)) || lrpShopProduct;
      void startMatchInPersonFlow(product);
      return;
    }
    const matchBtn = e.target.closest("[data-lrp-test-match]");
    const learnBtn = e.target.closest("[data-lrp-learn-more]");
    const trigger = matchBtn || learnBtn;
    if (!trigger) return;
    const id = trigger.closest("[data-lrp-product]")?.getAttribute("data-lrp-product");
    const product = id ? findLrpProduct(id) : null;
    if (!product) return;
    if (learnBtn) openLrpDetails(product);
    else openLrpFlow(product);
  });

  el.lrpFlow?.addEventListener("click", (e) => {
    if (e.target.closest("[data-lrp-close]")) closeLrpFlow();
    if (e.target.closest(".lrp-terms__link")) e.preventDefault();
    const readMore = e.target.closest("[data-lrp-read-more]");
    if (readMore) {
      const host = readMore.closest("p");
      if (host) host.textContent = host.dataset.full || host.textContent;
    }
    if (e.target.closest("#lrpMatchHowBtn")) {
      e.preventDefault();
      openLrpMatchHowDrawer();
      return;
    }
    if (e.target.closest("#lrpMatchHowClose") || e.target.closest("#lrpMatchHowScrim")) {
      e.preventDefault();
      closeLrpMatchHowDrawer();
      el.lrpMatchHowBtn?.focus();
      return;
    }
    if (e.target.closest("#lrpDetailsMatchBtn") && lrpActiveProduct) {
      continueLrpMatchFlow(lrpActiveProduct);
      return;
    }
    if (e.target.closest("#lrpShopBtn") || e.target.closest("#lrpDetailsShopBtn")) {
      e.preventDefault();
      void startMatchShopFlow(lrpActiveProduct);
      return;
    }
    const moreLearn = e.target.closest(".lrp-more-card__learn, [data-lrp-more-learn]");
    if (moreLearn) {
      e.preventDefault();
      const moreCard = moreLearn.closest(".lrp-more-card");
      openLrpMoreCardProduct(moreCard?.getAttribute("data-lrp-product"));
      return;
    }
    const moreCard = e.target.closest(".lrp-more-card");
    if (moreCard && !e.target.closest(".lrp-more-card__learn")) {
      openLrpMoreCardProduct(moreCard.getAttribute("data-lrp-product"));
    }
  });

  el.lrpTermsCheckbox?.addEventListener("change", syncLrpConsentButton);

  el.lrpConsentBtn?.addEventListener("click", () => {
    if (!el.lrpTermsCheckbox?.checked) {
      const row = el.lrpTermsAgreeRow;
      row?.classList.remove("is-nudge");
      void row?.offsetWidth;
      row?.classList.add("is-nudge");
      return;
    }
    lrpUserAcceptedTerms = true;
    showLrpPanel("landing");
  });

  el.lrpTakeSelfieBtn?.addEventListener("click", () => {
    void startLrpScan();
    void ensureLrpFaceLandmarker();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !el.lrpFlow || el.lrpFlow.hidden) return;
    if (isComposerFocusTarget(e.target)) return;
    if (isLrpMatchHowDrawerOpen()) {
      closeLrpMatchHowDrawer();
      el.lrpMatchHowBtn?.focus();
      return;
    }
    closeLrpFlow();
  });
}

renderPrompts();
initComposer();
initShellComposerStackObserver();
initLrpFlow();
initProductDetail();
initVtoFlow();
initNavChat();

syncVtoExperienceBrandUi();
