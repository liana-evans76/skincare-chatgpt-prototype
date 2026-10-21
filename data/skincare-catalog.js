/**
 * Skin Diag product database.
 * Prices, names, and packshots were pulled from brand or retailer pages
 * (CeraVe, Garnier, Vichy via Dermstore, Lancôme, Biotherm, Kiehl's).
 * La Roche-Posay rows point at the existing LRP catalog (`source: "lrp"`).
 *
 * `use` is morning/night from each product's how-to instructions:
 * ["am"], ["pm"], or ["am", "pm"]. Skin Diag routine cards read this field.
 *
 * `concerns` lists what the product's own directions actually call out.
 * Quiz priorities only match firmness, radiance, pores, wrinkles, fine-lines,
 * pigmentation, and texture. Hydration, barrier, and redness stay as support tags.
 *
 * priceTier "high" = Lancôme, Biotherm, Kiehl's.
 * The recommender shows up to two formulas side by side per step and
 * allows only one high-tier product in the whole routine.
 */
const SKINCARE_DB = {
  brands: {
    cerave: { id: "cerave", name: "CeraVe", priceTier: "mass" },
    garnier: { id: "garnier", name: "Garnier", priceTier: "mass" },
    "la-roche-posay": { id: "la-roche-posay", name: "La Roche-Posay", priceTier: "pharmacy" },
    vichy: { id: "vichy", name: "Vichy", priceTier: "pharmacy" },
    lancome: { id: "lancome", name: "Lancôme", priceTier: "high" },
    biotherm: { id: "biotherm", name: "Biotherm", priceTier: "high" },
    kiehls: { id: "kiehls", name: "Kiehl's", priceTier: "high" },
  },
  products: [
    {
      id: "cerave-hydrating-cleanser",
      brandId: "cerave",
      title: "Hydrating Facial Cleanser",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Hydrating", "Ceramides"],
      image: "assets/catalog/cerave-hydrating-cleanser.jpg",
      volume: "8 fl oz",
      priceNow: "$15.99",
      shopUrl: "https://www.cerave.com/skincare/cleansers/hydrating-facial-cleanser",
      description:
        "Cream cleanser with ceramides and hyaluronic acid that removes dirt and makeup without leaving skin tight. Developed with dermatologists for normal to dry skin.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive"],
      avoidSkin: ["oily"],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-foaming-cleanser",
      brandId: "cerave",
      title: "Foaming Facial Cleanser",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Oil control", "Niacinamide"],
      image: "assets/catalog/cerave-foaming-cleanser.jpg",
      priceNow: "$15.99",
      shopUrl: "https://www.cerave.com/skincare/cleansers/foaming-facial-cleanser",
      description:
        "Gel foaming cleanser with ceramides, hyaluronic acid, and niacinamide for normal to oily skin. Lifts excess oil and makeup while supporting the moisture barrier.",
      fragranceFree: true,
      texture: "foam",
      skin: ["oily", "combination", "balanced"],
      avoidSkin: ["dry"],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-hydrating-toner",
      brandId: "cerave",
      title: "Hydrating Toner",
      step: "tone",
      use: ["am", "pm"],
      kind: "Toner",
      tags: ["Hydrating", "Fragrance-free"],
      image: "assets/catalog/cerave-hydrating-toner.jpg",
      priceNow: "$11.99",
      shopUrl: "https://www.cerave.com/skincare/cleansers/hydrating-toner",
      description:
        "Alcohol-free hydrating toner that balances skin after cleansing and layers under serum. A light water step for normal to dry skin.",
      fragranceFree: true,
      texture: "water",
      skin: ["dry", "balanced", "sensitive", "combination"],
      avoidSkin: [],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-retinol-serum",
      brandId: "cerave",
      title: "Resurfacing Retinol Serum",
      step: "treat",
      use: ["pm"],
      kind: "Serum",
      tags: ["Retinol", "Texture"],
      image: "assets/catalog/cerave-retinol-serum.jpg",
      priceNow: "$21.99",
      shopUrl: "https://www.cerave.com/skincare/facial-serums/resurfacing-retinol-serum",
      description:
        "Encapsulated retinol serum with ceramides, niacinamide, and licorice root extract. Smooths texture, softens the look of pores, and fades post-acne marks. Evening use.",
      fragranceFree: true,
      texture: "fluid",
      skin: ["oily", "combination", "balanced"],
      avoidSkin: [],
      concerns: ["texture", "pores", "pigmentation"],
      actives: ["retinol"],
      gentle: false,
    },
    {
      id: "cerave-vitamin-c-serum",
      brandId: "cerave",
      title: "Skin Renewing Vitamin C Serum",
      step: "treat",
      use: ["am"],
      kind: "Serum",
      tags: ["Vitamin C", "Radiance"],
      image: "assets/catalog/cerave-vitamin-c-serum.jpg",
      priceNow: "$28.99",
      shopUrl: "https://www.cerave.com/skincare/facial-serums/skin-renewing-vitamin-c-serum",
      description:
        "Vitamin C serum for dullness and early aging. Brightens the look of skin and layers under moisturizer and sunscreen.",
      fragranceFree: true,
      texture: "fluid",
      skin: ["balanced", "dry", "combination"],
      avoidSkin: [],
      concerns: ["radiance", "pigmentation", "fine-lines"],
      actives: ["vitamin-c"],
      gentle: false,
    },
    {
      id: "cerave-pm-lotion",
      brandId: "cerave",
      title: "PM Facial Moisturizing Lotion",
      step: "moisturize",
      use: ["pm"],
      kind: "Moisturizer",
      tags: ["Niacinamide", "Barrier"],
      image: "assets/catalog/cerave-pm-lotion.jpg",
      volume: "3 oz",
      priceNow: "$19.99",
      shopUrl: "https://www.cerave.com/skincare/moisturizers/pm-facial-moisturizing-lotion",
      description:
        "Lightweight night lotion with niacinamide, hyaluronic acid, and three ceramides. Hydrates and helps restore the skin barrier for all skin types.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "combination", "sensitive"],
      avoidSkin: [],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-moisturizing-cream",
      brandId: "cerave",
      title: "Moisturizing Cream",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["Rich cream", "Ceramides"],
      image: "assets/catalog/cerave-moisturizing-cream.jpg",
      volume: "16 oz",
      priceNow: "$14.99",
      shopUrl: "https://www.cerave.com/skincare/moisturizers/moisturizing-cream",
      description:
        "Rich ceramide cream for dry skin. Locks in moisture and is a classic barrier cream for face and body.",
      fragranceFree: true,
      texture: "balm",
      skin: ["dry", "sensitive"],
      avoidSkin: ["oily"],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-am-spf",
      brandId: "cerave",
      title: "AM Facial Moisturizing Lotion SPF 30",
      step: "protect",
      use: ["am"],
      kind: "Sunscreen",
      tags: ["SPF 30", "Ceramides"],
      image: "assets/catalog/cerave-am-spf.jpg",
      priceNow: "$19.99",
      shopUrl: "https://www.cerave.com/skincare/moisturizers/am-facial-moisturizing-lotion-with-sunscreen",
      description:
        "Daytime facial lotion with SPF 30, ceramides, and niacinamide. Moisturizes and protects in one last step for normal to dry skin.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive", "combination"],
      avoidSkin: [],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "garnier-micellar",
      brandId: "garnier",
      title: "Micellar Cleansing Water All-in-1",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["No-rinse", "Sensitive"],
      image: "assets/catalog/garnier-micellar.webp",
      volume: "13.5 fl oz",
      priceNow: "$11.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/micellar-cleansing-water/micellar-cleansing-water-all-in-1",
      description:
        "No-rinse micellar water that removes makeup, oil, and dirt without rubbing. Fragrance-free and suitable for sensitive skin.",
      fragranceFree: true,
      texture: "water",
      skin: ["sensitive", "balanced", "dry", "combination"],
      avoidSkin: [],
      concerns: [],
      actives: [],
      gentle: true,
    },
    {
      id: "garnier-micellar-vitamin-c",
      brandId: "garnier",
      title: "Micellar Cleansing Water with Vitamin C",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Vitamin C", "Radiance"],
      image: "assets/catalog/garnier-micellar-vitamin-c.webp",
      volume: "13.5 fl oz",
      priceNow: "$11.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/micellar-cleansing-water/micellar-cleansing-water-with-vitamin-c",
      description:
        "Vitamin C micellar water that cleanses and brightens dull skin in one no-rinse step. Fragrance-free, oil-free, and alcohol-free.",
      fragranceFree: true,
      texture: "water",
      skin: ["balanced", "combination", "oily"],
      avoidSkin: [],
      concerns: ["radiance"],
      actives: ["vitamin-c"],
      gentle: true,
    },
    {
      id: "garnier-micellar-mattifying",
      brandId: "garnier",
      title: "Micellar Cleansing Water Mattifying",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Mattifying", "Oily skin"],
      image: "assets/catalog/garnier-micellar-mattifying.webp",
      priceNow: "$11.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/micellar-cleansing-water/micellar-cleansing-water-all-in-1-mattifying",
      description:
        "Mattifying micellar water for oily skin, including sensitive. Lifts oil and leaves a fresher finish without a rinse.",
      fragranceFree: true,
      texture: "matte",
      skin: ["oily", "combination"],
      avoidSkin: ["dry"],
      concerns: [],
      actives: [],
      gentle: true,
    },
    {
      id: "garnier-micellar-sa",
      brandId: "garnier",
      title: "Micellar Cleansing Water with Salicylic Acid",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Salicylic acid", "Pores"],
      image: "assets/catalog/garnier-micellar-sa.webp",
      priceNow: "$11.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/micellar-cleansing-water/micellar-cleansing-water-all-in-1-salicylic-acid",
      description:
        "Purifying micellar water with salicylic acid for oily, acne-prone skin. Cleanses and helps keep pores looking clearer.",
      fragranceFree: true,
      texture: "water",
      skin: ["oily"],
      avoidSkin: ["dry", "sensitive"],
      concerns: ["pores"],
      actives: ["bha"],
      gentle: false,
    },
    {
      id: "garnier-peeling-water",
      brandId: "garnier",
      title: "Micellar Peeling Water with PHA + Glycolic Acid",
      step: "tone",
      use: ["am", "pm"],
      kind: "Toner",
      tags: ["PHA", "Glow"],
      image: "assets/catalog/garnier-peeling-water.webp",
      priceNow: "$11.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/micellar-cleansing-water/micellar-cleansing-peeling-water-with-pha-glycolic-acid",
      description:
        "Leave-on peeling water with 1% PHA and glycolic acid. Cleanses, smooths texture, and gives skin a more even glow.",
      fragranceFree: false,
      texture: "water",
      skin: ["combination", "oily", "balanced"],
      avoidSkin: ["sensitive"],
      concerns: ["texture", "radiance"],
      actives: ["aha"],
      gentle: false,
    },
    {
      id: "garnier-micellar-ha",
      brandId: "garnier",
      title: "Micellar Cleansing Water with Hyaluronic Acid + Aloe",
      step: "tone",
      use: ["am", "pm"],
      kind: "Toner",
      tags: ["Hyaluronic acid", "Aloe"],
      image: "assets/catalog/garnier-micellar-ha.webp",
      priceNow: "$11.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/micellar-cleansing-water/micellar-cleansing-water-with-hyaluronic-acid",
      description:
        "Hydrating micellar water with hyaluronic acid and aloe. A no-rinse water step that replumps dry or tight skin, including sensitive.",
      fragranceFree: true,
      texture: "water",
      skin: ["dry", "sensitive", "balanced"],
      avoidSkin: [],
      concerns: ["hydration"],
      actives: [],
      gentle: true,
    },
    {
      id: "garnier-clearly-brighter-spf",
      brandId: "garnier",
      title: "Clearly Brighter Daily Moisturizer SPF 30",
      step: "protect",
      use: ["am"],
      kind: "Sunscreen",
      tags: ["SPF 30", "Vitamin C"],
      image: "assets/catalog/garnier-clearly-brighter-spf.jpg",
      volume: "2.5 fl oz",
      priceNow: "$14.99",
      shopUrl: "https://www.garnierusa.com/about-our-brands/skin-care/clearly-brighter/clearly-brighter-anti-sun-damage-daily-moisturizer-spf-30",
      description:
        "SPF 30 daily moisturizer with vitamin C and E plus LHA. Helps the look of dark spots and sun damage with a non-greasy finish.",
      fragranceFree: false,
      texture: "cream",
      skin: ["balanced", "combination", "dry"],
      avoidSkin: [],
      concerns: ["pigmentation", "radiance"],
      actives: ["aha"],
      gentle: false,
    },
    {
      id: "vichy-purete-cleanser",
      brandId: "vichy",
      title: "Pureté Thermale 3-in-1 One Step Cleanser",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Sensitive", "One step"],
      image: "assets/catalog/vichy-purete-cleanser.jpg",
      volume: "200 ml",
      priceNow: "$19.50",
      shopUrl: "https://www.dermstore.com/p/vichy-purete-thermale-3-in-1-one-step-cleanser-200ml/11091774/",
      description:
        "One-step cleanser with Vichy volcanic water for face and eyes. Made for sensitive skin that wants a simple, comfortable cleanse.",
      fragranceFree: true,
      texture: "cream",
      skin: ["sensitive", "dry", "balanced", "combination"],
      avoidSkin: [],
      concerns: [],
      actives: [],
      gentle: true,
    },
    {
      id: "vichy-normaderm-cleanser",
      brandId: "vichy",
      title: "Normaderm Deep Purifying Gel",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Purifying", "Pores"],
      image: "assets/catalog/vichy-normaderm-cleanser.jpg",
      volume: "200 ml",
      priceNow: "$30.00",
      shopUrl: "https://www.dermstore.com/p/vichy-normaderm-deep-cleansing-purifying-gel-200ml/11091760/",
      description:
        "Purifying gel cleanser for oily, blemish-prone skin. Deep-cleans without the tight feel of a harsh wash.",
      fragranceFree: false,
      texture: "foam",
      skin: ["oily", "combination"],
      avoidSkin: ["dry"],
      concerns: ["pores"],
      actives: ["bha"],
      gentle: false,
    },
    {
      id: "vichy-mineral-89",
      brandId: "vichy",
      title: "Minéral 89 Hyaluronic Acid Booster",
      step: "treat",
      use: ["am", "pm"],
      kind: "Serum",
      tags: ["Hyaluronic acid", "Barrier"],
      image: "assets/catalog/vichy-mineral-89.jpg",
      volume: "30 ml",
      priceNow: "$19.99",
      shopUrl: "https://www.dermstore.com/p/vichy-mineral-89-hyaluronic-acid-booster-serum-30ml/11762275/",
      description:
        "Fragrance-free booster with hyaluronic acid, polyglutamic acid, and Vichy volcanic water. Plumps and strengthens the barrier for sensitive skin.",
      fragranceFree: true,
      texture: "gel",
      skin: ["dry", "balanced", "sensitive", "combination"],
      avoidSkin: [],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "vichy-vitamin-c",
      brandId: "vichy",
      title: "LiftActiv 16% Pure Vitamin C Serum",
      step: "treat",
      use: ["am"],
      kind: "Serum",
      tags: ["Vitamin C", "Brightening"],
      image: "assets/catalog/vichy-vitamin-c.jpg",
      volume: "20 ml",
      priceNow: "$34.99",
      shopUrl: "https://www.dermstore.com/p/vichy-liftactiv-16-pure-vitamin-c-brightening-serum-20ml/15505524/",
      description:
        "16% pure vitamin C brightening serum. Targets dullness and uneven tone in a small, potent dose.",
      fragranceFree: true,
      texture: "fluid",
      skin: ["balanced", "combination", "dry"],
      avoidSkin: [],
      concerns: ["radiance", "pigmentation"],
      actives: ["vitamin-c"],
      gentle: false,
    },
    {
      id: "vichy-b3-serum",
      brandId: "vichy",
      title: "LiftActiv B3 Dark Spot Serum",
      step: "treat",
      use: ["am", "pm"],
      kind: "Serum",
      tags: ["Niacinamide", "Dark spots"],
      image: "assets/catalog/vichy-b3.jpg",
      volume: "30 ml",
      priceNow: "$45.00",
      shopUrl: "https://www.dermstore.com/p/vichy-liftactiv-specialist-b3-5-niacinamide-aha-complex-dark-spots-pigmentation-serum-30ml/13441814/",
      description:
        "Dark-spot serum with niacinamide and an AHA complex. Aimed at pigmentation and uneven tone.",
      fragranceFree: false,
      texture: "fluid",
      skin: ["balanced", "combination", "oily"],
      avoidSkin: ["sensitive"],
      concerns: ["pigmentation", "radiance"],
      actives: ["aha"],
      gentle: false,
    },
    {
      id: "vichy-mineral-89-cream",
      brandId: "vichy",
      title: "Minéral 89 72H Moisture Cream",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["Fragrance-free", "Hyaluronic acid"],
      image: "assets/catalog/vichy-mineral-89-cream.jpg",
      volume: "50 ml",
      priceNow: "$32.00",
      shopUrl: "https://www.dermstore.com/p/vichy-mineral-89-72hr-hyaluronic-acid-and-squalane-moisture-boosting-cream-50ml/14225144/",
      description:
        "Fragrance-free hyaluronic acid cream with squalane. A 72-hour moisture cream for skin that needs lightweight barrier support.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive", "combination"],
      avoidSkin: [],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "vichy-mineral-89-sorbet",
      brandId: "vichy",
      title: "Minéral 89 48H Moisture Matte Sorbet",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["Matte", "Gel"],
      image: "assets/catalog/vichy-mineral-89-sorbet.jpg",
      volume: "50 ml",
      priceNow: "$32.00",
      shopUrl: "https://www.dermstore.com/p/vichy-mineral-89-48h-moisture-matte-sorbet-50ml/15431868/",
      description:
        "Matte gel-cream that hydrates for up to 48 hours without shine. A better texture when the T-zone gets oily.",
      fragranceFree: true,
      texture: "matte",
      skin: ["oily", "combination"],
      avoidSkin: ["dry"],
      concerns: ["hydration"],
      actives: [],
      gentle: true,
    },
    {
      id: "vichy-collagen-cream",
      brandId: "vichy",
      title: "LiftActiv Collagen Specialist 16 Day Cream",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["Firming", "Peptides"],
      image: "assets/catalog/vichy-collagen-cream.jpg",
      volume: "50 ml",
      priceNow: "$45.99",
      shopUrl: "https://www.dermstore.com/p/vichy-liftactiv-collagen-specialist-16-day-cream/18043135/",
      description:
        "Day cream from the Collagen Specialist line, made to support firmness and a smoother look over time.",
      fragranceFree: false,
      texture: "cream",
      skin: ["dry", "balanced", "combination"],
      avoidSkin: ["oily"],
      concerns: ["firmness", "texture"],
      actives: [],
      gentle: true,
    },
    {
      id: "lancome-genifique-ultimate",
      brandId: "lancome",
      title: "Génifique Ultimate Recovery Serum",
      step: "treat",
      use: ["am", "pm"],
      kind: "Serum",
      tags: ["Barrier repair", "Radiance"],
      image: "assets/catalog/lancome-genifique-ultimate.webp",
      volume: "1.7 fl oz",
      priceNow: "$135.00",
      shopUrl: "https://www.lancome-usa.com/skincare/face-serum/genifique-ultimate-recovery-serum/00997-LAC.html",
      description:
        "Recovery serum with beta-glucan, hyaluronic acid, and licorice extract. Built to repair the moisture barrier and soften the look of fine lines and dullness.",
      fragranceFree: false,
      texture: "fluid",
      skin: ["dry", "balanced", "sensitive", "combination"],
      avoidSkin: [],
      concerns: ["barrier", "radiance", "fine-lines"],
      actives: [],
      gentle: true,
    },
    {
      id: "biotherm-hydra-cleanser",
      brandId: "biotherm",
      title: "Aquasource Hydra Barrier Cleanser",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Barrier", "Softening"],
      image: "assets/catalog/biotherm-hydra-cleanser.jpg",
      priceNow: "$18.00",
      priceWas: "$36.00",
      shopUrl: "https://www.biotherm.com/p/aqs-hydrabarrier-cleanser/15842618/",
      description:
        "Barrier-focused cleanser from the Aquasource line. Cleans while leaving skin soft rather than stripped.",
      fragranceFree: false,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive"],
      avoidSkin: ["oily"],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "biotherm-biosource-toner",
      brandId: "biotherm",
      title: "Biosource Hydrating & Softening Toner",
      step: "tone",
      use: ["am", "pm"],
      kind: "Toner",
      tags: ["Hydrating", "Softening"],
      image: "assets/catalog/biotherm-toner.jpg",
      priceNow: "$35.00",
      shopUrl: "https://www.biotherm.com/p/biosource-hydrating-softening-toner/13105684/",
      description:
        "Hydrating toner for dry skin. Softens after cleansing so serum and moisturizer sit more evenly.",
      fragranceFree: false,
      texture: "water",
      skin: ["dry", "balanced"],
      avoidSkin: ["oily"],
      concerns: ["hydration"],
      actives: [],
      gentle: true,
    },
    {
      id: "biotherm-life-plankton",
      brandId: "biotherm",
      title: "Life Plankton Regenerating Serum",
      step: "treat",
      use: ["am", "pm"],
      kind: "Serum",
      tags: ["Firming", "Regenerating"],
      image: "assets/catalog/biotherm-life-plankton.jpg",
      priceNow: "$89.00",
      shopUrl: "https://www.biotherm.com/p/life-plankton-regenerating-serum-complete-anti-aging-care/13133255/",
      description:
        "Regenerating serum with Life Plankton ferment. A treatment step for firmness, radiance, and the look of lines.",
      fragranceFree: false,
      texture: "fluid",
      skin: ["dry", "balanced", "combination"],
      avoidSkin: [],
      concerns: ["firmness", "wrinkles", "fine-lines", "radiance"],
      actives: [],
      gentle: true,
    },
    {
      id: "biotherm-hyalu-plump",
      brandId: "biotherm",
      title: "Aquasource Hyalu Plump Gel",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["Hyaluronic acid", "Gel"],
      image: "assets/catalog/biotherm-hyalu-plump.jpg",
      volume: "30 ml",
      priceNow: "$25.00",
      shopUrl: "https://www.biotherm.com/p/aquasource-hyalu-plump-gel/14919500/",
      description:
        "Gel moisturizer with two weights of hyaluronic acid and Life Plankton. Light, plumping hydration that layers under sunscreen.",
      fragranceFree: false,
      texture: "gel",
      skin: ["combination", "balanced", "oily", "dry"],
      avoidSkin: [],
      concerns: ["hydration", "fine-lines"],
      actives: [],
      gentle: true,
    },
    {
      id: "biotherm-hydra-cream",
      brandId: "biotherm",
      title: "Aquasource Hydra Barrier Cream",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["Barrier", "72h hydration"],
      image: "assets/catalog/biotherm-hydra-cream.jpg",
      priceNow: "$23.50",
      priceWas: "$47.00",
      shopUrl: "https://www.biotherm.com/p/aqs-hydra-barrier-cream/15842616/",
      description:
        "Barrier cream from Aquasource for longer-lasting comfort on skin that feels dry by the end of the day.",
      fragranceFree: false,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive"],
      avoidSkin: ["oily"],
      concerns: ["hydration", "barrier"],
      actives: [],
      gentle: true,
    },
    {
      id: "biotherm-blue-peptides",
      brandId: "biotherm",
      title: "Blue Peptides Uplift Day Cream",
      step: "moisturize",
      use: ["am"],
      kind: "Moisturizer",
      tags: ["Peptides", "Firming"],
      image: "assets/catalog/biotherm-blue-peptides.jpg",
      volume: "50 ml",
      priceNow: "$109.00",
      shopUrl: "https://www.biotherm.com/p/blue-peptides-uplift-day-cream-50ml/15318596/",
      description:
        "Peptide day cream aimed at firmness and lift. A richer moisturizer when wrinkles and firmness lead the routine.",
      fragranceFree: false,
      texture: "cream",
      skin: ["dry", "balanced"],
      avoidSkin: ["oily"],
      concerns: ["firmness", "wrinkles"],
      actives: [],
      gentle: true,
    },
    {
      id: "kiehls-ultra-facial-cleanser",
      brandId: "kiehls",
      title: "Ultra Facial Cleanser",
      step: "cleanse",
      use: ["am", "pm"],
      kind: "Cleanser",
      tags: ["Gentle", "Squalane"],
      image: "assets/catalog/kiehls-ultra-facial-cleanser.webp",
      volume: "150 ml",
      priceNow: "$26.00",
      shopUrl: "https://www.kiehls.com/skincare/face-cleansers-scrubs/ultra-facial-cleanser/714.html",
      description:
        "pH-balanced foaming cleanser with squalane, avocado oil, and glycerin. Removes oil and debris without stripping, including on sensitive skin.",
      fragranceFree: true,
      texture: "foam",
      skin: ["balanced", "dry", "combination", "sensitive", "oily"],
      avoidSkin: [],
      concerns: ["barrier", "hydration"],
      actives: [],
      gentle: true,
    },
    {
      id: "kiehls-ultra-facial-cream",
      brandId: "kiehls",
      title: "Ultra Facial Cream with Squalane",
      step: "moisturize",
      use: ["am", "pm"],
      kind: "Moisturizer",
      tags: ["72h hydration", "Barrier"],
      image: "assets/catalog/kiehls-ultra-facial-cream.webp",
      volume: "1.7 fl oz",
      priceNow: "$72.00",
      shopUrl: "https://www.kiehls.com/skincare/face-moisturizers/ultra-facial-cream-with-squalane/622.html",
      description:
        "Fragrance-free cream with 4.5% squalane, glacial glycoprotein, and pro-ceramides. 72-hour hydration and barrier support, tested on sensitive skin.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive", "combination"],
      avoidSkin: ["oily"],
      concerns: ["hydration", "barrier", "redness"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-eye-repair",
      brandId: "cerave",
      title: "Eye Repair Cream",
      step: "eye",
      use: ["am", "pm"],
      kind: "Eye care",
      tags: ["Dark circles", "Puffiness"],
      image: "assets/catalog/cerave-eye-repair.jpg",
      volume: "0.5 oz",
      priceNow: "$19.99",
      shopUrl: "https://www.cerave.com/skincare/moisturizers/eye-repair-cream",
      description:
        "Fragrance-free eye cream with ceramides, hyaluronic acid, niacinamide, and a marine and botanical complex. Minimizes the look of dark circles, puffiness, and wrinkles around the eye.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "oily", "combination", "sensitive"],
      avoidSkin: [],
      concerns: ["wrinkles"],
      actives: [],
      gentle: true,
    },
    {
      id: "cerave-skin-renewing-eye",
      brandId: "cerave",
      title: "Skin Renewing Eye Cream",
      step: "eye",
      use: ["am", "pm"],
      kind: "Eye care",
      tags: ["Peptides", "Firming"],
      image: "assets/catalog/cerave-skin-renewing-eye.jpg",
      volume: "0.5 fl oz",
      priceNow: "$24.99",
      shopUrl: "https://www.cerave.com/skincare/moisturizers/facial-moisturizers/skin-renewing-eye-cream",
      description:
        "Peptide and caffeine eye cream that visibly firms and softens the look of fine lines, crow's feet wrinkles, puffiness, and dark circles. Developed with dermatologists for the eye contour.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "oily", "combination", "sensitive"],
      avoidSkin: [],
      concerns: ["firmness", "fine-lines", "wrinkles"],
      actives: [],
      gentle: true,
    },
    {
      id: "vichy-collagen-eye",
      brandId: "vichy",
      title: "LiftActiv Collagen Specialist 16 Eye Cream",
      step: "eye",
      use: ["am", "pm"],
      kind: "Eye care",
      tags: ["Peptides", "Firming"],
      image: "assets/catalog/vichy-collagen-eye.jpg",
      volume: "15 ml",
      priceNow: "$44.99",
      shopUrl: "https://www.vichyusa.com/skin-care/liftactiv-collagen-specialist-16-eye-cream-3337875873048.html",
      description:
        "Anti-aging eye cream with collagen peptides, rhamnose, and maitake. Targets under-eye wrinkles, crow's feet, fine lines, firmness, texture, and radiance. Morning and night.",
      fragranceFree: true,
      texture: "cream",
      skin: ["dry", "balanced", "sensitive"],
      avoidSkin: [],
      concerns: ["wrinkles", "fine-lines", "firmness", "texture", "radiance"],
      actives: [],
      gentle: true,
    },
    { id: "hyalu-b5-eye-serum", source: "lrp", step: "eye", use: ["am", "pm"], fragranceFree: true, texture: "fluid", skin: ["dry", "balanced", "sensitive"], avoidSkin: [], concerns: ["fine-lines"], actives: [], gentle: true },
    { id: "pigmentclar-eyes", source: "lrp", step: "eye", use: ["am", "pm"], fragranceFree: true, texture: "cream", skin: ["balanced", "dry", "combination"], avoidSkin: [], concerns: ["pigmentation", "radiance"], actives: [], gentle: true },
    { id: "toleriane-hydrating-cleanser", source: "lrp", step: "cleanse", use: ["am", "pm"], fragranceFree: true, texture: "cream", skin: ["dry", "balanced", "sensitive"], avoidSkin: ["oily"], concerns: ["hydration", "barrier"], actives: [], gentle: true },
    { id: "toleriane-purifying-cleanser", source: "lrp", step: "cleanse", use: ["am", "pm"], fragranceFree: true, texture: "foam", skin: ["oily", "combination", "balanced"], avoidSkin: ["dry"], concerns: ["barrier"], actives: [], gentle: true },
    { id: "effaclar-gel-cleanser", source: "lrp", step: "cleanse", use: ["am", "pm"], fragranceFree: true, texture: "foam", skin: ["oily"], avoidSkin: ["dry", "sensitive"], concerns: ["pores"], actives: ["bha"], gentle: false },
    { id: "thermal-spring-water", source: "lrp", step: "tone", use: ["am", "pm"], fragranceFree: true, texture: "water", skin: ["sensitive", "dry", "balanced", "combination"], avoidSkin: [], concerns: ["redness", "barrier", "hydration"], actives: [], gentle: true },
    { id: "serozinc", source: "lrp", step: "tone", use: ["am", "pm"], fragranceFree: true, texture: "water", skin: ["oily", "combination"], avoidSkin: ["dry"], concerns: ["pores"], actives: [], gentle: true },
    { id: "effaclar-clarifying", source: "lrp", step: "tone", use: ["am", "pm"], fragranceFree: true, texture: "water", skin: ["oily"], avoidSkin: ["dry", "sensitive"], concerns: ["pores", "texture"], actives: ["bha"], gentle: false },
    { id: "mela-b3-serum", source: "lrp", step: "treat", use: ["am", "pm"], fragranceFree: true, texture: "fluid", skin: ["balanced", "combination", "sensitive"], avoidSkin: [], concerns: ["pigmentation", "radiance"], actives: [], gentle: true },
    { id: "vitamin-c12-serum", source: "lrp", step: "treat", use: ["am"], fragranceFree: true, texture: "fluid", skin: ["balanced", "dry", "combination"], avoidSkin: [], concerns: ["wrinkles", "radiance", "texture"], actives: ["vitamin-c"], gentle: false },
    { id: "cicaplast-b5-serum", source: "lrp", step: "treat", use: ["am", "pm"], fragranceFree: true, texture: "fluid", skin: ["dry", "sensitive", "balanced"], avoidSkin: [], concerns: ["barrier", "hydration", "redness", "texture"], actives: [], gentle: true },
    { id: "rosaliac-ar", source: "lrp", step: "treat", use: ["am"], fragranceFree: true, texture: "fluid", skin: ["sensitive", "balanced"], avoidSkin: [], concerns: ["redness", "barrier"], actives: [], gentle: true },
    { id: "toleriane-double-repair", source: "lrp", step: "moisturize", use: ["am", "pm"], fragranceFree: true, texture: "cream", skin: ["dry", "balanced", "combination", "sensitive"], avoidSkin: [], concerns: ["hydration", "barrier"], actives: [], gentle: true },
    { id: "toleriane-double-repair-matte", source: "lrp", step: "moisturize", use: ["am", "pm"], fragranceFree: true, texture: "matte", skin: ["oily", "combination"], avoidSkin: ["dry"], concerns: ["hydration", "barrier"], actives: [], gentle: true },
    { id: "hydraphase-ha", source: "lrp", step: "moisturize", use: ["am", "pm"], fragranceFree: true, texture: "gel", skin: ["dry", "balanced", "combination"], avoidSkin: [], concerns: ["hydration"], actives: [], gentle: true },
    { id: "cicaplast-baume-b5", source: "lrp", step: "moisturize", use: ["am", "pm"], fragranceFree: true, texture: "balm", skin: ["dry", "sensitive"], avoidSkin: ["oily"], concerns: ["barrier", "redness", "hydration", "texture"], actives: [], gentle: true },
    { id: "anthelios-ultra-fluid", source: "lrp", step: "protect", use: ["am"], fragranceFree: true, texture: "fluid", skin: ["oily", "combination", "balanced", "sensitive"], avoidSkin: [], concerns: [], actives: [], gentle: true },
    { id: "anthelios-melt-in-milk", source: "lrp", step: "protect", use: ["am"], fragranceFree: true, texture: "cream", skin: ["dry", "combination", "balanced"], avoidSkin: [], concerns: [], actives: [], gentle: true },
    { id: "anthelios-mineral-tinted", source: "lrp", step: "protect", use: ["am"], fragranceFree: true, texture: "cream", skin: ["sensitive", "dry", "balanced"], avoidSkin: [], concerns: ["redness"], actives: [], gentle: true },
  ],
};

const SKIN_DIAG_STEP_DEFS = [
  { id: "cleanse", step: "Cleanse", minSize: 3 },
  { id: "tone", step: "Tone", minSize: 4 },
  { id: "treat", step: "Treat", minSize: 3 },
  { id: "moisturize", step: "Moisturize", minSize: 3 },
  { id: "protect", step: "Protect", minSize: 5 },
];

const SKIN_DIAG_COMPARE_LIMIT = 2;
const SKIN_DIAG_LUXURY_WINDOW = 3;
const SKIN_DIAG_STEP_PREF = { treat: 3, moisturize: 2, protect: 1, tone: 0.4, cleanse: 0 };

function skincareBrandName(brandId) {
  return SKINCARE_DB.brands[brandId]?.name || "";
}

function skincarePriceTier(brandId) {
  return SKINCARE_DB.brands[brandId]?.priceTier || "mass";
}

/**
 * @param {object} product
 * @param {{ skinFeel?: string|null, reactivity?: string|null, priorities?: string[], age?: number|null }} profile
 */
/** Map a raw recommender score onto the 0–100 match pill. Scores under 70 are not a match. */
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

function scoreSkincareProduct(product, profile) {
  let score = 68;
  const feel = profile.skinFeel;
  const skin = product.skin || [];
  const avoid = product.avoidSkin || [];
  if (feel && feel !== "unknown") {
    if (skin.includes(feel)) score += 14;
    else if (avoid.includes(feel)) score -= 16;
    else if (feel === "combination" && (skin.includes("oily") || skin.includes("dry"))) score += 4;
  } else {
    const oilyOnly = skin.length > 0 && skin.every((type) => type === "oily" || type === "combination");
    if (oilyOnly) score -= 8;
  }
  if (profile.reactivity === "major") {
    if (product.gentle) score += 10;
    if (product.fragranceFree) score += 6;
    if (product.actives && product.actives.length) score -= 26;
    if ((product.concerns || []).includes("redness") || (product.concerns || []).includes("barrier")) score += 6;
  } else if (profile.reactivity === "sometimes") {
    if (product.actives && product.actives.length) score -= 8;
    if (product.gentle) score += 4;
  }
  const prios = profile.priorities || [];
  const concerns = product.concerns || [];
  prios.forEach((concern, index) => {
    if (!concerns.includes(concern)) return;
    score += index === 0 ? 16 : index === 1 ? 10 : 6;
  });
  if (!prios.length && (concerns.includes("hydration") || concerns.includes("barrier"))) score += 4;
  if (feel === "dry" && (product.texture === "cream" || product.texture === "balm")) score += 6;
  if (feel === "dry" && (product.texture === "foam" || product.texture === "matte")) score -= 8;
  if (feel === "oily" && (product.texture === "gel" || product.texture === "foam" || product.texture === "fluid" || product.texture === "matte")) score += 6;
  if (feel === "oily" && product.texture === "balm") score -= 10;
  if (typeof profile.age === "number" && profile.age >= 40) {
    if (concerns.includes("wrinkles") || concerns.includes("firmness") || concerns.includes("fine-lines")) score += 4;
  }
  return score;
}

function routineStepCount(routine) {
  if (routine === "full") return 5;
  if (routine === "complete") return 4;
  return 3;
}

/**
 * @param {object[]} products resolved catalog rows
 * @param {{ routine?: string|null, skinFeel?: string|null, reactivity?: string|null, priorities?: string[], age?: number|null }} answers
 */
function recommendSkincareRoutine(products, answers) {
  const size = routineStepCount(answers && answers.routine);
  const profile = {
    skinFeel: answers && answers.skinFeel,
    reactivity: answers && answers.reactivity,
    priorities: (answers && answers.priorities) || [],
    age: answers && answers.age,
  };
  const steps = SKIN_DIAG_STEP_DEFS.filter((step) => size >= step.minSize);
  const ranked = {};
  steps.forEach((step) => {
    ranked[step.id] = products
      .filter((product) => product.step === step.id)
      .map((product) => ({ product, score: scoreSkincareProduct(product, profile) }))
      .sort((a, b) => b.score - a.score || a.product.title.localeCompare(b.product.title));
  });

  let luxury = null;
  steps.forEach((step) => {
    const rows = ranked[step.id];
    if (!rows.length) return;
    const best = rows[0].score;
    const high = rows.find((row) => skincarePriceTier(row.product.brandId) === "high");
    if (!high || high.score < best - SKIN_DIAG_LUXURY_WINDOW) return;
    const rank = high.score + (SKIN_DIAG_STEP_PREF[step.id] || 0);
    if (!luxury || rank > luxury.rank) {
      luxury = { stepId: step.id, product: high.product, score: high.score, rank };
    }
  });

  const brandUses = {};
  return steps
    .map((step) => {
      const rows = ranked[step.id];
      const ordered = rows
        .map((row) => ({
          ...row,
          adj: row.score - (brandUses[row.product.brandId] || 0) * 6,
        }))
        .sort((a, b) => b.adj - a.adj || b.score - a.score);
      const chosen = [];
      const seen = new Set();
      const consider = (row) => {
        if (!row || chosen.length >= SKIN_DIAG_COMPARE_LIMIT) return;
        const brandId = row.product.brandId;
        if (seen.has(brandId)) return;
        if (skincarePriceTier(brandId) === "high" && (!luxury || luxury.product.id !== row.product.id)) return;
        chosen.push(row);
        seen.add(brandId);
      };
      for (const row of ordered) consider(row);
      if (luxury && luxury.stepId === step.id && !seen.has(luxury.product.brandId)) {
        const row = rows.find((item) => item.product.id === luxury.product.id);
        if (row) {
          if (chosen.length >= SKIN_DIAG_COMPARE_LIMIT) chosen.pop();
          chosen.push(row);
        }
      }
      chosen.sort((a, b) => b.score - a.score);
      chosen.forEach((row) => {
        brandUses[row.product.brandId] = (brandUses[row.product.brandId] || 0) + 1;
      });
      const cohortScores = rows.map((row) => row.score);
      const picks = chosen.map((row, index) => {
        const match = skinDiagMatchFromScore(row.score, cohortScores);
        return {
          ...row.product,
          match: index === 0 ? Math.max(86, match) : match,
        };
      });
      return {
        id: step.id,
        step: step.step,
        productId: picks[0] ? picks[0].id : "",
        alternatives: picks.slice(1).map((pick) => pick.id),
        picks,
      };
    })
    .filter((step) => step.picks.length);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SKINCARE_DB,
    recommendSkincareRoutine,
    scoreSkincareProduct,
    skinDiagMatchFromScore,
    skincarePriceTier,
  };
}
