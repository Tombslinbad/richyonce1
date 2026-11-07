import { Garment, CommissionOrder } from '../types';

export const INITIAL_GARMENTS: Garment[] = [
  {
    id: 'emerald-monarch-agbada',
    title: 'The Emerald Monarch Agbada',
    subtitle: 'Hand-loomed silk, chevron gold embroidery & scepter',
    price: '₦5,200,000',
    numericPrice: 5200000,
    category: 'agbada',
    lookCode: 'Look 01 • Masterpiece',
    badge: 'Masterpiece Nº 01 • Emerald Scepter',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEUSiTY50VstAVvbIFEE_8kHJH-tk5kXrJGpBvY3ee8LWtMblMpXh71ZlIYUCo_f07Cxn_Do44RN61vzFp_nPOfcHc1TiG47-4g3l3_RGMslHCkJ96JVTIANRKGi4CKsZI3h5IfrGguBIteo3eKKw0USVR22vlsuo5sJ_PL7RsN5TeHXvd4VW66MvGdq52ufFA3MiTwy7Ws9bJtnKQ0jZmmhJhVchGPOIV0DknXpJURfdx-2E9bWfJNK10wbMdMAUBFc',
    alt: 'Majestic lime and emerald Agbada ensemble with intricate golden chevron embroidery, matching fila cap, beaded royal neckwear, holding ceremonial scepter',
    description: 'MAIN CHARACTER ENERGY ONLY—bold, audacious, limitless. Hand-embroidered regalia for sovereigns of modern style. Crafted in heavyweight hand-loomed emerald silk faille with precision architectural shoulder pleating and pure gold metallic chevron threadwork.',
    details: [
      'Hand-woven Emerald Silk Faille (420 GSM)',
      'High-density 24k metallic gold chevron threadwork along collar and chest',
      'Accompanied by hand-carved ceremonial ebony and gold-foil scepter',
      'Matching sculpted three-tier Fila cap with subtle beadwork',
      'Triple-lined silk satin lining with hidden inner phone & card breast pouch'
    ],
    provenance: 'Lagos Victoria Island Atelier',
    artisanHours: 120,
    materials: ['Hand-loomed Emerald Silk', 'Metallic Gold Thread', 'Beaded Obsidian', 'Carved Ebony'],
    silhouettes: ['Grand Agbada', 'Architectural Fila', 'Ceremonial Scepter'],
    inStock: true,
    limitedEdition: true,
    featured: true
  },
  {
    id: 'crimson-dynasty',
    title: 'The Crimson Dynasty',
    subtitle: 'Dual-regalia statement nuptial court ensemble',
    price: '₦6,300,000',
    numericPrice: 6300000,
    category: 'nuptials',
    lookCode: 'Look 08 • Limited Commission',
    badge: 'Imperial Nuptials',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZJKqhJCJab2Ceo5SncRkYQaOc3cSacxjq4t4zUXP_g31ztXMjXiz17Ff1USkupexUb0bbgrKHmlXEu-Fq526c-3xolrxL3pv4_Szso5ep_FFk17SyhVZIVy9O8yfRhTca_kt8wAsqS13cJtfcOAehIfHXaXbbVvZ4No6oYCAgjtQ3zF97d3tEYp9IgYeG7eAjGKR9QVEf2xyxUeiQBgx3niywk20m7Cl3OB3jSxdnXDlCRcrl17PFIj6TjO6mAOmVok',
    alt: 'Imperial Red Velvet & Gold Royal Couple in bespoke ceremonial gown with tiered coral beads, carved staff, and structured capelet',
    description: 'A dual-regalia statement. Hand-carved okpu agbidi cap with cowrie shell bands, accompanied by architectural floor-sweeping red silk cape and handcrafted coral regalia. Tailored specifically for state matrimonial ceremonies.',
    details: [
      'Heavyweight crimson silk faille draped capelet with geometric square shoulder cut',
      'Bespoke bridal structured mermaid gown with tiered Edo coral neckwear',
      'Hand-carved authentic Okpu Agbidi cap with polished cowrie bands',
      'Hand-turned mahogany ceremonial cane with brass ferrule',
      'Over 160 artisan hours of hand-embroidery and coral stringing'
    ],
    provenance: 'Lagos Atelier & Benin Coral Guild',
    artisanHours: 160,
    materials: ['Crimson Silk Faille', 'Authentic Edo Coral Beads', 'Cowrie Shells', 'Hand-turned Mahogany'],
    silhouettes: ['Floor-Sweeping Capelet', 'Structured Bridal Corsetry', 'Okpu Agbidi Cap'],
    inStock: true,
    limitedEdition: true,
    featured: true
  },
  {
    id: 'forest-velvet-agbada',
    title: 'Forest Velvet Agbada',
    subtitle: 'Crushed forest velvet with ceremonial raven staff',
    price: '₦4,750,000',
    numericPrice: 4750000,
    category: 'agbada',
    lookCode: 'Look 14 • Haute Regalia',
    badge: 'Couture Statement',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAuI5cJvTI3uA5uT2zAy06nXhDX9wZtbntf8fPv3zmDvUvy3djan0rZOTYIcOlIdg8BkJMjtV1ye8v4Wap2EkvSKkMBMUMMuNCqFRdifFVmpdXrZXjERs5QVHjSXCmuLpGUbMfYykxO5Cmqx9FqutxLHxAu6iqBJ9IrOnKogGlTo-grFuJMxZpfA_yR1qsjZUBaFq-40qTVhkuSfIh6IMVCqUgChq1vgRQ-zp49yKlWqjhBUEq6hu6XMTv-LlG6f9M79c',
    alt: 'Forest Green Velvet Agbada with silver filigree neckline, layered obsidian beads, ceremonial raven staff, and royal sculpted fila cap',
    description: 'Heavyweight crushed forest velvet hand-stitched with silver crystal beads, paired with the sculpted ceremonial raven crest staff. Tailored for state gala appearances and foreign dignitary ceremonies.',
    details: [
      'Lustrous crushed deep emerald forest velvet with liquid drape',
      'Silver filigree threadwork around high standing neckline',
      'Multi-tiered obsidian and glass bead neckpiece with silver spacers',
      'Cast-bronze and obsidian ceremonial raven scepter',
      'Sculpted architectural fila cap with silver stitch accent'
    ],
    provenance: 'Victoria Island Master Workshop',
    artisanHours: 110,
    materials: ['Crushed Forest Velvet', 'Silver Crystal Beads', 'Obsidian Beads', 'Cast Bronze Scepter'],
    silhouettes: ['Grand Agbada', 'Fila Cap', 'Raven Crest Staff'],
    inStock: true,
    limitedEdition: true,
    featured: true
  },
  {
    id: 'lion-crest-obsidian-tunic',
    title: 'Lion Crest Obsidian Tunic',
    subtitle: 'Gold thread lion head embroidered raw silk',
    price: '₦3,950,000',
    numericPrice: 3950000,
    category: 'isiagu',
    lookCode: 'Look 05 • Bespoke Motif',
    badge: 'Bespoke Motif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifet588Jdq_HkzZyQim_EV1uSzWGjM5flRi3upu72iIV8p7K9Rc_AmW1Amt5kKFHrQGYe0DX5JkmXUv-tYyJ-zutuHhzTirNeUjXAz5Jwpq5kFFKDDhwoKn2XMYhbuumUHWKOGX4496xSSLLeDaZMYVvtzZrFTHItsQn9rnOXcI_gUgmyRMuiK8OoeK7QiiqWdO2CV6_SEX7vR6kVhQ1bCjYlvtm5mQEzmAfH-EY4Z8sDP6v--eeMBI0BoV_QZduvHdI',
    alt: 'Lion Head Embellished Obsidian Regalia worn with royal Igbo okpu cap and embroidered ostrich feather fan',
    description: 'Featuring an intricate gold thread lion head centerpiece embroidered over obsidian raw silk. Complete with hand-beaded ebony beads and personalized ceremonial fan.',
    details: [
      'Obsidian raw silk sloper with side structural vent slits',
      '3D-raised gold thread lion emblem centerpiece with 48,000 stitches',
      'Hand-beaded ebony and polished amber rosary regalia',
      'Customized ostrich feather and leather ceremonial fan',
      'Traditional Igbo Okpu chieftain cap with gold insignia'
    ],
    provenance: 'Enugu & Lagos Collaborative Atelier',
    artisanHours: 95,
    materials: ['Raw Obsidian Silk', '24k Gold Wire Thread', 'Ebony Beads', 'Ostrich Feathers'],
    silhouettes: ['Isiagu Chieftain Tunic', 'Ceremonial Fan', 'Chieftain Okpu'],
    inStock: true,
    limitedEdition: false,
    featured: true
  },
  {
    id: 'gilded-brocade-court',
    title: 'Gilded Brocade Court',
    subtitle: 'Metallic floral lace and chocolate satin tunic',
    price: '₦7,200,000 Pair',
    numericPrice: 7200000,
    category: 'nuptials',
    lookCode: 'Look 19 • Haute Couple Edit',
    badge: 'Haute Couple Edit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFOBy-0iyK1s7eiCyILN765QEwjK0tZP77cLC9yl_ripCQFkE80qCtDbgN0ZfGzMdmnEpW9MyzYJ_--pM2SAG9Bf-1wOhq8rXzfG5BqQLLPqHpv4IJeGxrBbCJdxx2bXzlWGJVwcObGkGcjb4_nfT4FfS-AjnoDliSQXmbR2cSvfTa9Ib2RyvN3ZYX9Rrc9BBYqSEqVMQgN8BhhnKdE9YokUR8innE7Rzsa0gNxCF6AbK3qXjoqkiXqDNd3uXfAuXv64E',
    alt: 'Gold Brocade Royal Couple in glistening golden structured capelet gown and regal chocolate damask tunic',
    description: 'Glistening metallic floral lace and structural shoulder architectural folds paired with chocolate satin tunic adorned with gilded feline crest.',
    details: [
      'Dual matching couple coronation commission',
      'Women’s capelet bodice in French gilded floral metallic brocade',
      'Men’s chocolate satin tunic with raised gold wire lion head',
      'Layered waist sash with hand-beaded gold tassels',
      'Includes bespoke consultation with Lead Creative Director'
    ],
    provenance: 'Victoria Island & London Mayfair Salon',
    artisanHours: 180,
    materials: ['Gilded Floral Brocade', 'Chocolate Silk Satin', 'Metallic Gold Lace', 'Hand-turned Wooden Scepter'],
    silhouettes: ['Architectural Capelet Gown', 'Feline Crest Tunic'],
    inStock: true,
    limitedEdition: true,
    featured: true
  },
  {
    id: 'crimson-capelet-regalia',
    title: 'Crimson Capelet Regalia',
    subtitle: 'Geometric square shoulder profile in structural silk',
    price: '₦4,400,000',
    numericPrice: 4400000,
    category: 'capes',
    lookCode: 'Look 11 • Drape Study',
    badge: 'Architectural Drape',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3fFtruxL6saMNSJlDgqD5m5EjvsUeYRpyR2TutumycwmkwEmnJQvlKDTW8ax-B-ZaqaalYmXX03szFfTikKOSlP6s7klR5jvuHaMJaSzykBc6ZciSU2V5BrOOlJIY-ofSekZVxWu4_b9AV9vcN2Hc_j06nMlMXAulZNSXTMqcVHBuHM_GYuWEfIzXY6YFkE0qIvUe4-5djp1muFvC6JbdRoLY1dRJs35WSXDl9G9SBL-bibyh3H9viLj21W7I1cHGDWo',
    alt: 'Rear architectural profile of sculpted red capelet regalia with cowrie cap and sovereign cane',
    description: 'Geometric square shoulder profile tailored in structural silk faille, draped to perfection to create dramatic presence upon entering any ceremonial hall.',
    details: [
      'Square cantilever shoulder line with reinforced structural canvas',
      'Floor-skimming back drape with central embroidered monogram crest',
      'Lined in fluid gold Habotai silk for whisper-quiet movement',
      'Reinforced high collar with hidden magnetic closure',
      'Ideal for state banquets, diplomatic receptions, and royal processions'
    ],
    provenance: 'Savile Row & Lagos Atelier Team',
    artisanHours: 85,
    materials: ['Structural Red Silk Faille', 'Gold Habotai Silk Lining', 'Savile Row Canvas Interfacing'],
    silhouettes: ['Square-Shoulder Capelet', 'Floor Drape'],
    inStock: true,
    limitedEdition: false,
    featured: true
  },
  {
    id: 'double-breasted-red-blazer',
    title: 'The Sovereign Red Double-Breasted Blazer',
    subtitle: 'Sharp tailored modern wool-silk blend with gold bullion buttons',
    price: '₦1,750,000',
    numericPrice: 1750000,
    category: 'ready-to-wear',
    lookCode: 'Look 02 • Modern Tailoring',
    badge: 'Ready-To-Wear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATSBRqEQkJ6gj45vsgaltkmjW6u6I6jyosf42uLRnloRxfakBary0D4aP8Q0xFZYsU2IkKzaZ8SITdATc29gAOw6wB4TK7f21VvV7jInsSSQn5By5pO1uFtyuJ9khdhWLc_IBTErWLWfVb3QKBriDevTmJ-rI1mNtab4NI5ZBOZSR_S2LC-U7xow_JIlKtuBPGzLBcI4yzFKMzk4tCKoDSgyildzWRJiulAtcOsOHFcxRzlIeKSL3ojxPUkVr2GE6kkWg',
    alt: 'Modern tailored double-breasted red blazer with gold button accents on luxury architectural colonnade',
    description: 'Contemporary African sartorialism at its zenith. Precision double-breasted cut with peak lapels, crafted in vibrant crimson wool-silk and punctuated by custom-cast gold coin crest buttons.',
    details: [
      'Super 150s Crimson Wool blended with Mulberry Silk',
      'Full floating horsehair canvas construction for lifetime shape memory',
      'Double-breasted 6x2 button stance with working horn cuff buttonholes',
      'Gilded Richyonce insignia buttons cast in Lagos metal foundry',
      'Bespoke gold contrast interior piping and double back vents'
    ],
    provenance: 'Savile Row Precision Workshop',
    artisanHours: 55,
    materials: ['Super 150s Wool-Silk', 'Horsehair Canvas', 'Cast Gold Insignia Buttons'],
    silhouettes: ['Peak Lapel Double-Breasted Blazer', 'Tailored Trousers'],
    inStock: true,
    limitedEdition: false,
    featured: false
  },
  {
    id: 'traditional-lion-isiagu',
    title: 'Imperial Lion Pattern Isiagu Regalia',
    subtitle: 'Vibrant scarlet velvet with dense lion motif and coral regalia',
    price: '₦2,800,000',
    numericPrice: 2800000,
    category: 'isiagu',
    lookCode: 'Look 04 • Chieftain Line',
    badge: 'Traditional Couture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF0_wXtw_t7sjVs_v435AeOhj0voQCezAYMPZ70DzqMN9l1UvEHIapMYFBrkQwAcKaxjupB7ivaf_hQLXqZn4-sFaKpegq7ywTLHTyHgkbfTN3F3LHiPkEK_2oQv9LA1qA19QOYnuXdaYWn82mt2OuGnzcppQxyYWQhoJmO20nw2nAnnJn15eupnxBzk7GYcPqwPhRKsGF09qb7grUDjC3epTfuj01AU6_WJ4BWKl3Z2Br2hrcC9ffq52cFTrfKLJB0ws',
    alt: 'Traditional Couture: Red Lion pattern Isiagu tunic with beaded necklaces and ceremonial feather cap',
    description: 'The definitive symbol of sovereign Igbo majesty. Scarlet ceremonial velvet jacquard woven with iconic lion head crests, tailored with relaxed regal ease and accompanied by handcrafted coral beads.',
    details: [
      'Bespoke woven velvet damask with embossed lion motifs',
      'Side split hem designed for natural stride and throne seating',
      'Includes authentic Edo coral bead necklace with ceremonial pendant',
      'Hand-crafted red velvet chieftain cap with eagle feather sleeve',
      'Monogrammed internal pocket with gold silk thread'
    ],
    provenance: 'Enugu & Lagos Atelier',
    artisanHours: 70,
    materials: ['Embossed Velvet Jacquard', 'Edo Coral Beads', 'Eagle Feather Sleeve', 'Silk Lining'],
    silhouettes: ['Chieftain Isiagu Tunic', 'Ceremonial Cap'],
    inStock: true,
    limitedEdition: false,
    featured: false
  },
  {
    id: 'wine-velvet-sovereign-robe',
    title: 'Seated Sovereign Wine Velvet Robe',
    subtitle: 'Deep wine velvet with intricate metallic threadwork & scepter',
    price: '₦5,700,000',
    numericPrice: 5700000,
    category: 'bespoke',
    lookCode: 'Look 16 • Private Service',
    badge: 'Private Service',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXHesWDf5PhdQ2b-B-V2i2tziyWBuiZtLMaQqenwNePQbH8_RjTdN7T8SVQCW9hFQ42vbMT3GmXStnB-BZMMMOZLaqu1-r5RX09f1B_KQbRRk0uzOkv1R80HeKF70F2ggSCTFFpkMBAZLS96ch1e4aNAFXA2qkkdcQ3nwad7N5kHgG_g1G2CAx6Lqev7icZmoUVPjrPRD380NyQN90gANIEUchMdUdzYLS9B5cr8GsesNe1SuSe7TmeGJn6FS7tpPgp5I',
    alt: 'Bespoke service: Seated sovereign in deep wine velvet embroidered ceremonial robe and matching cap with staff',
    description: 'Crafted exclusively through private atelier consultation. Opulent deep wine velvet hand-embroidered with genealogical heraldic crests, matched with a hand-carved ebony command scepter.',
    details: [
      'Italian crushed silk velvet in imperial deep burgundy',
      'Over 140 hours of hand-embroidery along lapels, chest, and cuffs',
      'Carved African blackwood scepter with brass ferrule',
      'Personalized heraldic family crest woven into back panel',
      'Includes private in-person fitting with Master Chukwudi'
    ],
    provenance: 'Private Salon — Victoria Island & Mayfair',
    artisanHours: 140,
    materials: ['Italian Wine Silk Velvet', 'African Blackwood', 'Gold Bullion Thread', 'Bronze Scepter'],
    silhouettes: ['Sovereign Robe', 'Chieftain Cap', 'Command Scepter'],
    inStock: true,
    limitedEdition: true,
    featured: true
  },
  {
    id: 'ceremonial-ebony-staff-accents',
    title: 'Sovereign Scepter & Coral Regalia Set',
    subtitle: 'Hand-carved ceremonial ebony staff with cowrie cap & coral regalia',
    price: '₦1,250,000',
    numericPrice: 1250000,
    category: 'artifacts',
    lookCode: 'Artifact Nº 03 • Regalia',
    badge: 'Artifacts',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVaZTO8dVSLXZhiTdpsxXyorkSq2TUwyzmbYqgmhx7WR2b2RX-pk8w9TZh2J9iu4dHRxmuxSqqC6qx1as7hkGUOltmeqYYrCTiVQZ7FJU_xZ4i9O6Qzp0kHNA4qcjMkIeiOVpJUlA-Gh0xiB5eCNJw6RMUGLMpJyZ95iVtpt1J5nErbx_ELCMZi_cd_1gEW_cWh16mGumsQQO8S-aJ58jN5hFoU4hpLd1RNqxhDs40iWWBehps3x_Vvk1_UmpCQpLvBZE',
    alt: 'Traditional accents: Hand-carved ceremonial ebony staff, cowrie-lined red cap and coral beaded jewelry',
    description: 'The essential accoutrements of coronation and celebration. Hand-carved from sacred ebony wood with symbolic bird and leopard totems, accompanied by authentic Edo coral wrist and neck beads.',
    details: [
      'Solid African ebony wood hand-turned and oiled to a velvet luster',
      'Authentic raw cylindrical Edo coral bead strings (certified natural)',
      'Hand-sewn cowrie shell band along royal red felt cap',
      'Comes in velvet-lined cedar keepsake presentation box',
      'Each piece blessed and engraved with unique atelier seal'
    ],
    provenance: 'Benin Royal Woodworkers Guild',
    artisanHours: 45,
    materials: ['Sacred Ebony Wood', 'Natural Edo Coral', 'Cowrie Shells', 'Cedar Presentation Box'],
    silhouettes: ['Ceremonial Staff', 'Royal Cap', 'Coral Wristlets'],
    inStock: true,
    limitedEdition: false,
    featured: false
  }
];

export const SAMPLE_ORDERS: CommissionOrder[] = [
  {
    orderId: 'RY-LAGOS-8821',
    clientName: 'Prince Adebayo Ogundipe',
    clientEmail: 'adebayo.o@lagosroyalty.ng',
    garmentTitle: 'The Emerald Monarch Agbada',
    date: 'Oct 24, 2026',
    status: 'embroidery',
    progressPercent: 68,
    currentStageHours: 84,
    totalHours: 120,
    estimatedDelivery: 'Nov 18, 2026',
    trackingCode: 'DHL-EXPRESS-ROYAL-901844',
    destinationCity: 'Victoria Island, Lagos',
    totalAmount: '₦5,200,000',
    stages: [
      {
        title: 'Phase 1: Anatomical Drape & Posture Drafting',
        desc: '3D posture metrics translated into bespoke paper sloper by Master Pattern Cutter.',
        completed: true,
        hoursLogged: 16
      },
      {
        title: 'Phase 2: Hand-Loom Silk Weaving',
        desc: 'Emerald raw silk loomed with metallic chevron ground on traditional wooden looms.',
        completed: true,
        hoursLogged: 32
      },
      {
        title: 'Phase 3: High-Density Metallic Threadwork',
        desc: 'Artisan Amina hand-couching 24k gold bullion wire across collar and shoulder lines.',
        completed: false,
        current: true,
        hoursLogged: 84
      },
      {
        title: 'Phase 4: Structural Assembly & Basting',
        desc: 'Hand-sewing lining, hidden interior pockets, and matching architectural fila.',
        completed: false,
        hoursLogged: 0
      },
      {
        title: 'Phase 5: White-Glove Handcrafted Cedar Courier Box',
        desc: 'Inspected under atelier halogen array, sealed with wax crest, dispatched by courier.',
        completed: false,
        hoursLogged: 0
      }
    ]
  },
  {
    orderId: 'RY-MAYFAIR-4402',
    clientName: 'Lord & Lady Sterling-Cole',
    clientEmail: 'sterling.cole@mayfairclub.co.uk',
    garmentTitle: 'The Crimson Dynasty (Haute Couple)',
    date: 'Oct 12, 2026',
    status: 'assembly',
    progressPercent: 88,
    currentStageHours: 142,
    totalHours: 160,
    estimatedDelivery: 'Nov 10, 2026',
    trackingCode: 'BRITISH-DIPLOMATIC-BAG-7731',
    destinationCity: 'Mayfair, London',
    totalAmount: '₦6,300,000',
    stages: [
      {
        title: 'Phase 1: Anatomical Drape & Posture Drafting',
        desc: 'Virtual video fitting completed with Savile Row fitting director.',
        completed: true,
        hoursLogged: 20
      },
      {
        title: 'Phase 2: Hand-Loom Silk Weaving',
        desc: 'Crimson silk faille dyed with natural vegetable rubia pigments.',
        completed: true,
        hoursLogged: 40
      },
      {
        title: 'Phase 3: High-Density Metallic Threadwork & Coral',
        desc: 'Cowrie band placement on Okpu Agbidi cap and Edo coral regalia assembly.',
        completed: true,
        hoursLogged: 75
      },
      {
        title: 'Phase 4: Structural Assembly & Final Basting',
        desc: 'Final basting stitch check and mahogany cane fitting.',
        completed: false,
        current: true,
        hoursLogged: 142
      },
      {
        title: 'Phase 5: Diplomatic Courier Dispatch to London',
        desc: 'Direct courier hand-delivery to Mayfair residence.',
        completed: false,
        hoursLogged: 0
      }
    ]
  },
  {
    orderId: 'RY-MANHATTAN-1190',
    clientName: 'Kofi Mensah (Met Gala Ensemble)',
    clientEmail: 'kofi@mensahventures.com',
    garmentTitle: 'Lion Crest Obsidian Tunic',
    date: 'Nov 01, 2026',
    status: 'drafting',
    progressPercent: 25,
    currentStageHours: 24,
    totalHours: 95,
    estimatedDelivery: 'Dec 02, 2026',
    trackingCode: 'FEDEX-PRIORITY-ONE-88390',
    destinationCity: 'Tribeca, New York',
    totalAmount: '₦3,950,000',
    stages: [
      {
        title: 'Phase 1: Anatomical Drape & Posture Drafting',
        desc: 'Anatomical measurements verified for red-carpet walking posture.',
        completed: true,
        hoursLogged: 24
      },
      {
        title: 'Phase 2: Hand-Loom Silk Weaving',
        desc: 'Obsidian raw silk faille woven to exact 380 GSM specification.',
        completed: false,
        current: true,
        hoursLogged: 12
      },
      {
        title: 'Phase 3: High-Density Lion Head Needlework',
        desc: 'Gold wire 3D embroidery of majestic feline crest.',
        completed: false,
        hoursLogged: 0
      },
      {
        title: 'Phase 4: Structural Assembly & Ceremonial Fan',
        desc: 'Ostrich feather trimming and ebony bead finishing.',
        completed: false,
        hoursLogged: 0
      },
      {
        title: 'Phase 5: White-Glove Dispatch to New York',
        desc: 'Private fitting check at The Mark Hotel, Manhattan.',
        completed: false,
        hoursLogged: 0
      }
    ]
  }
];
