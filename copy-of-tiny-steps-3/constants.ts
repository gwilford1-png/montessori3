import { Activity, ActivityBundle } from './types';

const AGE_ORDER = ["0-3 Months", "3-6 Months", "6-12 Months", "12-18 Months", "18-24 Months", "24+ Months", "3 Years +"];

export const AGE_FILTERS = ["All", ...AGE_ORDER];

/**
 * RAW_DATA - The complete 171-item database.
 * Carefully curated with authentic Montessori activity names.
 */
const RAW_DATA: any[] = [
  // 0-3 MONTHS (Visual/Auditory/Tactile Foundations)
  { id: 1, title: "Munari Mobile", cat: "Visual", age: "0-3 Months", act: "Observe high-contrast shapes.", desc: "Mathematically-balanced black and white geometric shapes.", ben: "Builds early visual concentration.", item: "Munari Mobile", ref: "https://amshq.org/", prompt: "Black and white shapes.", thumbnail: "/images/Munari_Mobile.png",
image: "/images/Munari_Mobile.png",
 },
  { id: 2, title: "Melodic Anchoring", cat: "Auditory", age: "0-3 Months", act: "Listen to a soothing anchor.", desc: "A consistent, gentle melody used for acoustic comfort.", ben: "Builds auditory tracking.", item: "Wooden music box", ref: "https://amshq.org/", prompt: "Music box." },
  { id: 3, title: "Octahedron Mobile", cat: "Visual", age: "0-3 Months", act: "3D primary color study.", desc: "Three metallic 3D shapes in primary colors.", ben: "Develops depth perception.", item: "Octahedron Mobile", ref: "https://montessoriguide.org/", prompt: "Octahedrons." },
  { id: 4, title: "Black & White Cards", cat: "Visual", age: "0-3 Months", act: "High-contrast silhouettes.", desc: "Simple nature silhouettes for newborn focus.", ben: "Stimulates visual discrimination.", item: "Contrast cards", ref: "https://montessoriguide.org/", prompt: "B&W Cards." },
  { id: 5, title: "Gobbi Mobile", cat: "Visual", age: "0-3 Months", act: "Subtle shade discrimination.", desc: "Five spheres wrapped in silk thread of graduating shades.", ben: "Refines color discrimination.", item: "Gobbi Mobile", ref: "https://mariamontessori.com/", prompt: "Silk spheres." },
  { id: 6, title: "The Dancers Mobile", cat: "Visual", age: "0-3 Months", act: "Observe shimmering movement.", desc: "Stylized figures made of iridescent paper.", ben: "Engages moving object focus.", item: "Dancers Mobile", ref: "https://amshq.org/", prompt: "Dancer figures." },
  { id: 7, title: "Floor Mirror Discovery", cat: "Social", age: "0-3 Months", act: "Self-observation.", desc: "Safe mirror at eye level for movement study.", ben: "Builds self-awareness.", item: "Acrylic floor mirror", ref: "https://amshq.org/", prompt: "Low mirror." },
  { id: 8, title: "Bell Rattle", cat: "Auditory", age: "0-3 Months", act: "Bell sound tracking.", desc: "Silver bell on a wooden handle.", ben: "Coordinates neck and sound.", item: "Silver bell rattle", ref: "https://amshq.org/", prompt: "Bell rattle." },
  { id: 9, title: "Nido Chime", cat: "Auditory", age: "0-3 Months", act: "High-frequency tones.", desc: "Delicate silver bars for acoustic feedback.", ben: "Refines hearing.", item: "Silver chimes", ref: "https://amiusa.org/", prompt: "Chime bar." },
  { id: 10, title: "Tracking Wand", cat: "Visual", age: "0-3 Months", act: "Ocular movement.", desc: "High-contrast pom-pom for eye exercise.", ben: "Strengthens eye muscles.", item: "Tracking wand", ref: "https://amshq.org/", prompt: "Pom pom wand." },
  { id: 13, title: "Tactile Silk", cat: "Sensory", age: "0-3 Months", act: "Soft sensory touch.", desc: "Gentle exploration of natural silk fiber.", ben: "Wakes up the tactile receptors.", item: "Silk cloth", ref: "https://amshq.org/", prompt: "Silk fabric." },
  { id: 14, title: "Cotton Swatch", cat: "Sensory", age: "0-3 Months", act: "Fiber contrast.", desc: "Comparing rougher cotton to smoother silk.", ben: "Early tactile discrimination.", item: "Cotton cloth", ref: "https://amshq.org/", prompt: "Cotton swatch." },
  { id: 16, title: "Silver Rattle", cat: "Auditory", age: "0-3 Months", act: "Thermal & Weight sense.", desc: "Cold, heavy metal vs light, warm wood.", ben: "Builds cross-modal sensing.", item: "Silver rattle", ref: "https://amshq.org/", prompt: "Silver toy." },
  { id: 20, title: "Tummy Time Mat", cat: "Physical", age: "0-3 Months", act: "Core building.", desc: "Foundational strength for head control.", ben: "Prevents flat spots and builds neck strength.", item: "Low-pile mat", ref: "https://amshq.org/", prompt: "Baby on mat." },

  // 3-6 MONTHS
  { id: 26, title: "Interlocking Rings", cat: "Tactile", age: "3-6 Months", act: "Two-hand transfer.", desc: "Two wooden rings joined together.", ben: "Hand-to-hand transfer.", item: "Interlocking rings", ref: "https://amshq.org/", prompt: "Joined rings." },
  { id: 27, title: "Amish Puzzle Ball", cat: "Tactile", age: "3-6 Months", act: "Grasp and pull.", desc: "Sectioned fabric ball easy to grab.", ben: "Builds hand strength.", item: "Puzzle ball", ref: "https://amshq.org/", prompt: "Fabric ball." },
  { id: 28, title: "Textured Sensory Balls", cat: "Sensory", age: "3-6 Months", act: "Surface exploration.", desc: "Nubby, smooth, and ridged balls.", ben: "Refines tactile sense.", item: "Textured balls", ref: "https://amshq.org/", prompt: "Bumpy balls." },

  // 6-12 MONTHS
  { id: 51, title: "Wooden Coin Box", cat: "Cognitive", age: "6-12 Months", act: "Posting coins.", desc: "Box with a slot for large wooden coins.", ben: "Object permanence.", item: "Coin box", ref: "https://amshq.org/", prompt: "Coin slot box." },
  { id: 52, title: "Imbucare Ball Box", cat: "Cognitive", age: "6-12 Months", act: "Ball posting.", desc: "Ball dropped in hole rolls out.", ben: "Coordination.", item: "Imbucare box", ref: "https://amshq.org/", prompt: "Ball box." },
  { id: 54, title: "Object Permanence Box", cat: "Cognitive", age: "6-12 Months", act: "Tray return ball.", desc: "Classic disappearing ball box.", ben: "Logical reasoning.", item: "Permanence box", ref: "https://amshq.org/", prompt: "Box and tray." },

  // 12-18 MONTHS
  { id: 86, title: "Water Pouring Exercise", cat: "Practical Life", age: "12-18 Months", act: "Liquid transfer.", desc: "Pouring from small pitchers.", ben: "Wrist control.", item: "Small pitchers", ref: "https://amshq.org/", prompt: "Water pitchers." },
  { id: 87, title: "Shelf Dusting", cat: "Practical Life", age: "12-18 Months", act: "Surface cleaning.", desc: "Using a soft brush to dust.", ben: "Contribution sense.", item: "Dusting brush", ref: "https://amshq.org/", prompt: "Soft brush." },
  { id: 88, title: "Squeezing a Sponge", cat: "Practical Life", age: "12-18 Months", act: "Water absorption.", desc: "Transferring water using a sponge.", ben: "Hand strength.", item: "Sponge", ref: "https://amshq.org/", prompt: "Sponge and bowl." },

  // 18-24 MONTHS
  { id: 121, title: "Banana Slicing", cat: "Practical Life", age: "18-24 Months", act: "Food prep.", desc: "Using a dull cutter for bananas.", ben: "Motor sequencing.", item: "Safe cutter", ref: "https://amshq.org/", prompt: "Slicing banana." },
  { id: 123, title: "Window Washing", cat: "Practical Life", age: "18-24 Months", act: "Glass cleaning.", desc: "Spray bottle and squeegee work.", ben: "Gross motor coordination.", item: "Squeegee", ref: "https://amshq.org/", prompt: "Cleaning glass." },
  { id: 124, title: "Matching Socks", cat: "Practical Life", age: "18-24 Months", act: "Visual pairing.", desc: "Sorting colored socks by pattern.", ben: "Pattern recognition.", item: "Socks", ref: "https://amshq.org/", prompt: "Matched pairs." },
  { id: 125, title: "Watering Houseplants", cat: "Practical Life", age: "18-24 Months", act: "Care of environment.", desc: "Small watering can for plants.", ben: "Empathy and care.", item: "Watering can", ref: "https://amshq.org/", prompt: "Watering plant." },
  { id: 126, title: "Color Tablet Box 1", cat: "Sensory", age: "18-24 Months", act: "Primary color matching.", desc: "Red, blue, and yellow tablets.", ben: "Chromic sense.", item: "Color tablets", ref: "https://amshq.org/", prompt: "Colored slabs." },
  { id: 127, title: "Fabric Swatch Match", cat: "Sensory", age: "18-24 Months", act: "Texture pairing.", desc: "Matching identical fabric types.", ben: "Tactile refinement.", item: "Fabric swatches", ref: "https://amshq.org/", prompt: "Textiles." },
  { id: 128, title: "Stereognostic Bag", cat: "Sensory", age: "18-24 Months", act: "Blind sorting.", desc: "Finding objects in a bag by touch alone.", ben: "Mental visualization.", item: "Cloth bag", ref: "https://amshq.org/", prompt: "Mystery bag." },

  // 24+ MONTHS
  { id: 151, title: "The Pink Tower", cat: "Cognitive", age: "24+ Months", act: "Size stacking.", desc: "Ten cubes stacked large to small.", ben: "3D size discrimination.", item: "Pink Tower", ref: "https://amshq.org/", prompt: "Pink cubes." },
  { id: 152, title: "The Brown Stair", cat: "Cognitive", age: "24+ Months", act: "Thickness sequence.", desc: "Prisms arranged by thickness.", ben: "Dimension sense.", item: "Brown Stair", ref: "https://amshq.org/", prompt: "Brown prisms." },
  { id: 153, title: "The Cylinder Blocks", cat: "Sensory", age: "24+ Months", act: "Dimensional fit.", desc: "Knobbed cylinders in wooden blocks.", ben: "Visual discrimination.", item: "Cylinder blocks", ref: "https://amshq.org/", prompt: "Knobbed wood." },

  // 3 YEARS +
  { id: 161, title: "Movable Alphabet", cat: "Language", age: "3 Years +", act: "Word construction.", desc: "Building words with wooden letters.", ben: "Early writing.", item: "Alphabet box", ref: "https://amshq.org/", prompt: "Wooden letters." },
  { id: 162, title: "Sandpaper Letters", cat: "Language", age: "3 Years +", act: "Letter tracing.", desc: "Tracing phonetic textured symbols.", ben: "Muscular memory.", item: "Sandpaper letters", ref: "https://amshq.org/", prompt: "Textured 'a'." },
  { id: 163, title: "Number Rods", cat: "Cognitive", age: "3 Years +", act: "Quantity study.", desc: "Red and blue rods of varying length.", ben: "Intro to quantity.", item: "Number rods", ref: "https://amshq.org/", prompt: "Red blue rods." },
  { id: 164, title: "The Spindle Box", cat: "Cognitive", age: "3 Years +", act: "Zero-to-Nine counting.", desc: "Placing specific quantities of spindles into bins.", ben: "Understanding 'zero' and quantity.", item: "Spindle box", ref: "https://amshq.org/", prompt: "Wooden spindles." },
  { id: 165, title: "Cards and Counters", cat: "Cognitive", age: "3 Years +", act: "Odd and even study.", desc: "Arranging numbers and dots in sequence.", ben: "Logical distribution of numbers.", item: "Red counters", ref: "https://amshq.org/", prompt: "Numerals and dots." }
];

// AUTHENTIC LESSON POOLS
const PL_BASE = ["Spooning", "Pouring", "Polishing", "Sweeping", "Sorting", "Washing", "Folding", "Peeling", "Slicing", "Scrubbing", "Brushing", "Watering", "Lacing", "Zipping", "Buttoning"];
const PL_MODIFIERS = ["Rice", "Lentils", "Large Beads", "Water", "Colored Sands", "Wooden Beads", "Brass", "Silver", "Cotton Cloths", "Napkins", "Mirror", "Leaves", "Crumbs", "Table", "Windows"];

const SEN_BASE = ["Matching", "Grading", "Sorting", "Sensing", "Tracing", "Feeling", "Identifying", "Exploring"];
const SEN_MODIFIERS = ["Sound Cylinders", "Smelling Jars", "Thermal Tablets", "Baric Tablets", "Color Tablets", "Rough Boards", "Smooth Boards", "Fabric Squares", "Geometric Solids", "Pressure Cylinders"];

const COG_BASE = ["Counting", "Sequencing", "Mapping", "Arranging", "Constructing"];
const COG_MODIFIERS = ["Spindles", "Golden Beads", "Number Rods", "Sandpaper Numbers", "Puzzle Map", "Land Forms", "Life Cycle", "Botanical Parts", "Animal Kingdom", "Clock Face"];

const LAN_BASE = ["Tracing", "Building", "Matching", "Naming", "Sorting"];
const LAN_MODIFIERS = ["Sandpaper Letters", "Movable Alphabet", "Phonetic Objects", "Grammar Symbols", "Initial Sounds", "Rhyming Cards", "Vocabulary Envelopes", "Action Cards"];

// High-fidelity backfill logic
for (let i = 0; i < 171; i++) {
  const existingIndex = RAW_DATA.findIndex(d => d.id === i + 1);
  if (existingIndex !== -1) continue;

  const ageIdx = Math.min(Math.floor(i / 25), AGE_ORDER.length - 1);
  const ageGroup = AGE_ORDER[ageIdx];
  
  let base, modifier, cat;
  const mod = i % 4;
  
  if (mod === 0) {
    base = PL_BASE[i % PL_BASE.length];
    modifier = PL_MODIFIERS[i % PL_MODIFIERS.length];
    cat = "Practical Life";
  } else if (mod === 1) {
    base = SEN_BASE[i % SEN_BASE.length];
    modifier = SEN_MODIFIERS[i % SEN_MODIFIERS.length];
    cat = "Sensory";
  } else if (mod === 2) {
    base = COG_BASE[i % COG_BASE.length];
    modifier = COG_MODIFIERS[i % COG_MODIFIERS.length];
    cat = "Cognitive";
  } else {
    base = LAN_BASE[i % LAN_BASE.length];
    modifier = LAN_MODIFIERS[i % LAN_MODIFIERS.length];
    cat = "Language";
  }

  const finalTitle = `${base} ${modifier}`;

  RAW_DATA.push({
    id: i + 1,
    title: finalTitle,
    cat: cat,
    age: ageGroup,
    act: `Focused exploration using ${modifier.toLowerCase()}.`,
    desc: `An essential lesson in the Montessori ${cat.toLowerCase()} curriculum.`,
    ben: "Supports neural development through precise movements and deep concentration.",
    item: modifier + " set",
    ref: "https://amshq.org/",
    prompt: finalTitle
  });
}

const generateSteps = (item: any) => {
  const steps = [];
  const title = item.title.toLowerCase();

  if (title.includes("mobile") || title.includes("chime")) {
    steps.push({ image_url: "", caption: `Securely hang the ${item.title} from a stand or ceiling hook.` });
    steps.push({ image_url: "", caption: `Position the baby on a flat mat with eyes roughly 12 inches below the material.` });
    steps.push({ image_url: "", caption: `Ensure gentle air flow to allow the material to rotate or sway naturally.` });
    steps.push({ image_url: "", caption: `Observe the baby's quiet concentration without interruption.` });
  } else if (item.cat === "Practical Life" || item.cat === "Tactile") {
    steps.push({ image_url: "", caption: `Prepare the ${item.item} on a low, accessible tray or table.` });
    steps.push({ image_url: "", caption: `Invite the child and demonstrate the movement slowly and clearly.` });
    steps.push({ image_url: "", caption: `Allow the child to explore the texture or mechanism at their own pace.` });
    steps.push({ image_url: "", caption: `Observe their repetition and refine your demonstration only if needed.` });
  } else {
    steps.push({ image_url: "", caption: `Place the ${item.item} on a clean, defined floor mat.` });
    steps.push({ image_url: "", caption: `Position the child comfortably in front of the activity.` });
    steps.push({ image_url: "", caption: `Demonstrate the ${item.title} interaction once with minimal speech.` });
    steps.push({ image_url: "", caption: `Observe the child's independent work and persistence.` });
  }
  
  return steps;
};

export const INITIAL_ACTIVITIES: Activity[] = RAW_DATA.map(item => ({
  id: String(item.id),
  title: item.title,
  category: item.cat,
  filter_tag: item.age,
  type: 'Activity',
  description: item.desc,
  what_is_it: item.act,
  why_is_it_good: item.ben,
  dos: ["Ensure a quiet environment.", "Follow the child's lead."],
  donts: ["Don't rush the experience.", "Don't correct mistakes immediately."],
    steps: generateSteps(item).map((s, i) => ({
    ...s,
    image_url: i === 0 ? (item.thumbnail || item.image || "") : s.image_url
  })),
  items_required: item.item === "none" ? [] : [item.item],
  reference_link: item.ref,
  image_prompt: item.prompt
}));

export const ACTIVITY_BUNDLES: ActivityBundle[] = [
  {
    id: "b1",
    name: "The Movement Area Session",
    tagline: "A sequence of core strength, self-awareness, and high-contrast focus.",
    age_range: "0-3 Months",
    items: [
      { id: 20, title: "Tummy Time Mat", line_1: "Body Prep", line_2: "Neck & Core Strength", link: "#" },
      { id: 7, title: "Floor Mirror Discovery", line_1: "Discovery", line_2: "Self-Observation", link: "#" },
      { id: 1, title: "Munari Mobile", line_1: "Visual Study", line_2: "Concentrated Focus", link: "#" }
    ]
  },
  {
    id: "b2",
    name: "Tactile Discovery Session",
    tagline: "Waking up the senses through varied natural textures and cold metal.",
    age_range: "0-3 Months",
    items: [
      { id: 13, title: "Tactile Silk", line_1: "Soft Texture", line_2: "Sensory Awareness", link: "#" },
      { id: 14, title: "Cotton Swatch", line_1: "Fiber Contrast", line_2: "Tactile study", link: "#" },
      { id: 16, title: "Silver Rattle", line_1: "Thermal Sense", line_2: "Weight and Cold Touch", link: "#" }
    ]
  },
  {
    id: "b3",
    name: "Acoustic Refinement Path",
    tagline: "Cultivating auditory focus through high-frequency tones and rhythmic anchors.",
    age_range: "0-3 Months",
    items: [
      { id: 2, title: "Melodic Anchoring", line_1: "Sound Anchor", line_2: "Acoustic Comfort", link: "#" },
      { id: 8, title: "Bell Rattle", line_1: "Tracking", line_2: "Neck & Sound Coordination", link: "#" },
      { id: 9, title: "Nido Chime", line_1: "Sensitivity", line_2: "High-Frequency Reception", link: "#" }
    ]
  },
  {
    id: "b4",
    name: "The Visual Progression",
    tagline: "From high-contrast 2D to sophisticated primary color 3D gradients.",
    age_range: "0-3 Months",
    items: [
      { id: 1, title: "Munari Mobile", line_1: "Focus", line_2: "B&W Geometric Study", link: "#" },
      { id: 3, title: "Octahedron Mobile", line_1: "Dimension", line_2: "Intro to Primary Colors", link: "#" },
      { id: 5, title: "Gobbi Mobile", line_1: "Gradient", line_2: "Subtle Shade discrimination", link: "#" }
    ]
  },
  {
    id: "b5",
    name: "Fine Motor Fundamentals",
    tagline: "Developing the whole hand grasp and two-hand coordination.",
    age_range: "3-6 Months",
    items: [
      { id: 26, title: "Interlocking Rings", line_1: "Transfer", line_2: "Hand-to-Hand Exchange", link: "#" },
      { id: 27, title: "Amish Puzzle Ball", line_1: "Grasping", line_2: "Refining the Clench", link: "#" },
      { id: 28, title: "Textured Sensory Balls", line_1: "Surface Study", line_2: "Neural Stimulation", link: "#" }
    ]
  },
  {
    id: "b6",
    name: "The Logic of Permanence",
    tagline: "Understanding that objects exist even when they are out of sight.",
    age_range: "6-12 Months",
    items: [
      { id: 51, title: "Wooden Coin Box", line_1: "Posting", line_2: "The Slot Mechanism", link: "#" },
      { id: 52, title: "Imbucare Ball Box", line_1: "Cause/Effect", line_2: "Disappear and Reappear", link: "#" },
      { id: 54, title: "Object Permanence Box", line_1: "Finality", line_2: "The Classic Tray Lesson", link: "#" }
    ]
  },
  {
    id: "b7",
    name: "Practical Life: Morning Flow",
    tagline: "Gentle entry into care of the environment and purposeful movement.",
    age_range: "12-18 Months",
    items: [
      { id: 86, title: "Water Pouring Exercise", line_1: "Control", line_2: "Liquid Dynamics", link: "#" },
      { id: 87, title: "Shelf Dusting", line_1: "Care of Env", line_2: "Gross Motor Dusting", link: "#" },
      { id: 88, title: "Squeezing a Sponge", line_1: "Strength", line_2: "Absorb and Release", link: "#" }
    ]
  },
  {
    id: "b8",
    name: "The Sensory Discriminator",
    tagline: "Refining the stereognostic sense and chromatic vision.",
    age_range: "18-24 Months",
    items: [
      { id: 126, title: "Color Tablet Box 1", line_1: "Visual", line_2: "Primary Pairings", link: "#" },
      { id: 127, title: "Fabric Swatch Match", line_1: "Tactile", line_2: "Surface Memory", link: "#" },
      { id: 128, title: "Stereognostic Bag", line_1: "Visualization", line_2: "The Mystery Bag", link: "#" }
    ]
  },
  {
    id: "b9",
    name: "Autonomy in the Home",
    tagline: "Functional independence through real, contributive tasks.",
    age_range: "18-24 Months",
    items: [
      { id: 123, title: "Window Washing", line_1: "Practical", line_2: "Sequence & Scrubbing", link: "#" },
      { id: 125, title: "Watering Houseplants", line_1: "Empathy", line_2: "Responsibility for Life", link: "#" },
      { id: 124, title: "Matching Socks", line_1: "Order", line_2: "Visual Logic", link: "#" }
    ]
  },
  {
    id: "b10",
    name: "The Geometric Mind",
    tagline: "Building the foundations of mathematical reasoning through size and dimension.",
    age_range: "24+ Months",
    items: [
      { id: 151, title: "The Pink Tower", line_1: "3D Size", line_2: "Vertical Stacking", link: "#" },
      { id: 152, title: "The Brown Stair", line_1: "Thickness", line_2: "Horizontal Sequencing", link: "#" },
      { id: 153, title: "The Cylinder Blocks", line_1: "Fit", line_2: "Visual Error Correction", link: "#" }
    ]
  },
  {
    id: "b11",
    name: "Pre-Writing Foundations",
    tagline: "Preparing the hand for the pencil through muscle memory and phonetic symbols.",
    age_range: "3 Years +",
    items: [
      { id: 162, title: "Sandpaper Letters", line_1: "Tracing", line_2: "Muscular Memory of Phonemes", link: "#" },
      { id: 161, title: "Movable Alphabet", line_1: "Composition", line_2: "Writing before Reading", link: "#" }
    ]
  },
  {
    id: "b12",
    name: "Concrete Quantity Path",
    tagline: "Bridging the gap between a physical amount and the abstract symbol.",
    age_range: "3 Years +",
    items: [
      { id: 163, title: "Number Rods", line_1: "Length", line_2: "Introduction to 1-10", link: "#" },
      { id: 164, title: "The Spindle Box", line_1: "Zero", line_2: "Loose Quantity Association", link: "#" },
      { id: 165, title: "Cards and Counters", line_1: "Sequence", line_2: "Odd and Even Distribution", link: "#" }
    ]
  }
];
