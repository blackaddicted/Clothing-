/* ==========================================================================
   MAISON NOIR — Product Catalog & Shared Data
   ========================================================================== */

const PRODUCTS = [
  {
    id: "mn-001",
    name: "The Tailored Wool Coat",
    category: "Women",
    tags: ["new", "premium"],
    price: 18900,
    sizes: ["S", "M", "L", "XL"],
    look: "01",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop"
    ],
    description: "Cut from double-faced Italian wool, this coat holds its shape without holding you back. A single interior button keeps the line clean from the outside — no visible closures, no fuss. Fully lined in bemberg cupro.",
    fabric: "92% wool, 8% cashmere. Dry clean only.",
    bestseller: true
  },
  {
    id: "mn-002",
    name: "Structured Blazer, Ivory",
    category: "Women",
    tags: ["premium"],
    price: 14500,
    sizes: ["XS", "S", "M", "L"],
    look: "02",
    images: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80&auto=format&fit=crop"
    ],
    description: "A blazer built like a jacket, not a suggestion. Structured shoulders, a nipped waist, and a length that sits precisely at the hip. Wear it buttoned as outerwear or open over a slip dress.",
    fabric: "70% wool, 28% polyester, 2% elastane.",
    bestseller: true
  },
  {
    id: "mn-003",
    name: "Silk Slip Dress, Noir",
    category: "Women",
    tags: ["new"],
    price: 12900,
    sizes: ["XS", "S", "M", "L"],
    look: "03",
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=900&q=80&auto=format&fit=crop"
    ],
    description: "Bias-cut to move with you rather than against you. Adjustable straps, a cowl neckline front and back. The kind of dress that needs nothing else to finish the look.",
    fabric: "100% mulberry silk.",
    bestseller: false
  },
  {
    id: "mn-004",
    name: "Merino Turtleneck",
    category: "Women",
    tags: [],
    price: 7900,
    sizes: ["XS", "S", "M", "L", "XL"],
    look: "04",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80&auto=format&fit=crop"
    ],
    description: "Fine-gauge merino, knitted to sit close without clinging. A wardrobe constant under blazers, coats, or entirely on its own.",
    fabric: "100% extrafine merino wool.",
    bestseller: false
  },
  {
    id: "mn-005",
    name: "Pleated Midi Skirt",
    category: "Women",
    tags: ["new"],
    price: 9800,
    sizes: ["XS", "S", "M", "L"],
    look: "05",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format&fit=crop"
    ],
    description: "Knife pleats set with heat, not stitching — they hold their line wash after wash. Sits high at the waist with a concealed side zip.",
    fabric: "100% recycled polyester satin.",
    bestseller: false
  },
  {
    id: "mn-006",
    name: "Notch-Lapel Suit Jacket",
    category: "Men",
    tags: ["premium"],
    price: 21500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    look: "06",
    images: [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80&auto=format&fit=crop"
    ],
    description: "A half-canvas construction that softens with age rather than wearing out. Two-button front, single vent, room in the shoulder for a layer underneath.",
    fabric: "100% Australian wool.",
    bestseller: true
  },
  {
    id: "mn-007",
    name: "Cotton Oxford Shirt",
    category: "Men",
    tags: [],
    price: 6500,
    sizes: ["S", "M", "L", "XL"],
    look: "07",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&q=80&auto=format&fit=crop"
    ],
    description: "A dress shirt that also does Tuesdays. Mother-of-pearl buttons, a clean placket, and a hem cut to stay tucked.",
    fabric: "100% long-staple cotton.",
    bestseller: true
  },
  {
    id: "mn-008",
    name: "Waxed Field Jacket",
    category: "Men",
    tags: ["new", "premium"],
    price: 17800,
    sizes: ["S", "M", "L", "XL"],
    look: "08",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=900&q=80&auto=format&fit=crop"
    ],
    description: "British waxed cotton over a wool-blend lining. Four bellows pockets, a corduroy collar that softens with wear, built to outlast the season it was bought for.",
    fabric: "Waxed cotton shell, wool-blend lining.",
    bestseller: false
  },
  {
    id: "mn-009",
    name: "Wool-Blend Trousers",
    category: "Men",
    tags: [],
    price: 8900,
    sizes: ["S", "M", "L", "XL"],
    look: "09",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=80&auto=format&fit=crop"
    ],
    description: "A tapered leg with just enough break at the ankle. Side-adjuster tabs mean no belt required, though it will happily wear one.",
    fabric: "78% wool, 20% polyester, 2% elastane.",
    bestseller: false
  },
  {
    id: "mn-010",
    name: "Leather Structured Tote",
    category: "Premium",
    tags: ["premium", "new"],
    price: 24900,
    sizes: ["One Size"],
    look: "10",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop"
    ],
    description: "Vegetable-tanned leather that darkens with handling. A structured base holds its shape empty or full; an interior zip pocket keeps the essentials found.",
    fabric: "Full-grain vegetable-tanned leather.",
    bestseller: true
  },
  {
    id: "mn-011",
    name: "Cashmere Wrap Coat",
    category: "Premium",
    tags: ["premium"],
    price: 32900,
    sizes: ["XS", "S", "M", "L"],
    look: "11",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop"
    ],
    description: "100% cashmere, woven at a mill that has made little else since 1932. A wrap closure with a self-tie belt, no buttons to catch or lose.",
    fabric: "100% cashmere.",
    bestseller: false
  },
  {
    id: "mn-012",
    name: "Silk Tailored Trousers",
    category: "Premium",
    tags: ["premium", "new"],
    price: 15900,
    sizes: ["XS", "S", "M", "L"],
    look: "12",
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=900&q=80&auto=format&fit=crop"
    ],
    description: "Wide-leg trousers in a silk-cotton blend with enough weight to fall clean. A concealed hook-and-bar closure keeps the front uninterrupted.",
    fabric: "60% silk, 40% cotton.",
    bestseller: false
  }
];

const REVIEWS = [
  { name: "Anjali R.", rating: 5, text: "The wool coat is worth every rupee. It still looks new after a whole winter of daily wear, and the fit is exactly as described." },
  { name: "Karthik M.", rating: 5, text: "Ordered the suit jacket for a wedding. The tailoring is genuinely a level above what I expected for the price." },
  { name: "Divya S.", rating: 4, text: "Beautiful packaging, beautiful clothes. Sizing ran slightly large so I'd size down, but the quality is unmistakable." },
  { name: "Rohan V.", rating: 5, text: "The oxford shirt has replaced three others in my rotation. Fabric feels substantial, not the flimsy cotton you get elsewhere." }
];

/* ---------- helpers ---------- */

function formatPrice(rupees) {
  return "₹" + Math.round(rupees).toLocaleString("en-IN");
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, count);
}
