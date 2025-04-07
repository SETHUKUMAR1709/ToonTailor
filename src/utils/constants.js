// Character options
export const RACES = ['Human', 'Elf', 'Dwarf', 'Orc', 'Halfling'];
export const CLASSES = ['Warrior', 'Mage', 'Rogue', 'Cleric', 'Ranger'];
export const GENDERS = ['Male', 'Female'];

// Default attributes by class
export const CLASS_ATTRIBUTES = {
  Warrior: { strength: 14, dexterity: 12, constitution: 14, intelligence: 8, wisdom: 10, charisma: 10 },
  Mage: { strength: 8, dexterity: 10, constitution: 10, intelligence: 16, wisdom: 14, charisma: 12 },
  Rogue: { strength: 10, dexterity: 16, constitution: 10, intelligence: 12, wisdom: 10, charisma: 14 },
  Cleric: { strength: 10, dexterity: 10, constitution: 12, intelligence: 10, wisdom: 16, charisma: 14 },
  Ranger: { strength: 12, dexterity: 14, constitution: 12, intelligence: 10, wisdom: 14, charisma: 10 },
};

// Race bonuses
export const RACE_BONUSES = {
  Human: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
  Elf: { dexterity: 2, intelligence: 1, wisdom: 1 },
  Dwarf: { constitution: 2, strength: 2, wisdom: 1 },
  Orc: { strength: 3, constitution: 2, intelligence: -1 },
  Halfling: { dexterity: 2, charisma: 1, strength: -1 },
};

// Available equipment by class
export const CLASS_EQUIPMENT = {
  
    tops: {
      bl_australia: "Kangaroo T-Shirt",
      t_akatsuki: "Akatsuki Hoodie",
      b_tee: "Black T-Shirt",
      b_qferrari: "Ferrari Top",
      bl_jacket: "Blue Jacket",
      bl_puffer: "Blue Puffer",
      disco_tee: "Disco T-Shirt",
      fringe_jacket: "Fringe Jacket",
      g_varsity: "Varsity Top",
      gingham_shirt: "Checked Shirt",
      hawain_shirt: "Hawaiian Shirt",
      p_bbjersey: "BB Jersey",
      poncho: "Poncho Shirt",
      r_suittop: "Red Suit Top",
      t_lightening: "Lightning Jacket",
      w_heartshirt: "Heart Shirt",
      w_pokemon: "Pokeball Hoodie",
      y_starhoodie: "Star Hoodie"
    },
    pants: {
      beach_shorts: "Beach Shorts",
      bl_frill_pant: "Frill Pants",
      bnw_wrap_around: "Black & White Wrap Around",
      br_pants: "Brown Pants",
      b_ripped_jeans: "Ripped Jeans",
      camo_pants: "Camo Pants",
      denim_shorts: "Denim Shorts",
      dino_pants: "Dinosaur Pants",
      fringe_pants: "Fringe Pants",
      g_shorts: "Green Shorts",
      g_stripe_pants: "Striped Pants",
      lb_baggy: "Baggy Jeans",
      lb_patch_jeans: "Patch Jeans",
      motocross_pants: "Motocross Pants",
      pi_tskirt: "Pink Tennis Skirt",
      p_sweats: "Sweatpants",
      p_tskirt: "Purple Skirt",
      rainbow_tights: "Rainbow Tights",
      r_shorts: "Red Shorts",
      r_suitpant: "Red Suit Pants",
      star_pyjama: "Star Pajamas",
      zip_pants: "Zipper Pants"
    },
    foots: {
      bl_gum_boots: "Blue Gum Boots",
      b_boots: "Black Boots",
      b_hightops: "Black High Tops",
      flower_shoe: "Flower Shoes",
      frog_shoe: "Frog Shoes",
      gem_shoe: "Gem Shoes",
      joker_shoe: "Joker Shoes",
      monster_shoe: "Monster Shoes",
      mu_afshoe: "African Style Shoes",
      pencil_shoe: "Pencil Shoes",
      p_crocs: "Purple Crocs",
      p_formalshoe: "Formal Shoes",
      royal_shoe: "Royal Shoes",
      r_converse: "Red Converse",
      r_jordans: "Red Jordans",
      skates: "Skates",
      tall_boots: "Tall Boots",
      thunder_shoe: "Thunder Shoes",
      traffic_shoe: "Traffic Shoes",
      w_samba: "White Samba Shoes"
    },
    hairs:  {
      shortdreads:"Short Dreads",
      afrolong:"Afro Long",
      boxbraids:"Box Braids",
      Curlylong:"Curly Long",
      bigafro:"Big Afro"
    },
    hats: {
      bl_durag: "Black Durag",
      bl_spike_helmet: "Black Spike Helmet",
      bl_turban: "Black Turban",
      broken_egg: "Broken Egg Hat",
      bunny_ears: "Bunny Ears Hat",
      b_hijab: "Black Hijab",
      cat_beanie: "Cat Beanie",
      elf_hat: "Elf Hat",
      goat_hat: "Goat Hat",
      gr_skullcap: "Green Skullcap",
      g_headband: "Green Headband",
      luffyhat: "Luffy Hat",
      mu_flowerband: "Multicolor Flower Band",
      ninjaband: "Ninja Band",
      orange_hat: "Orange Hat",
      panda_cap: "Panda Cap",
      pirate: "Pirate Hat",
      pompom_beanie: "Pompom Beanie",
      r_fisherman: "Red Fisherman Hat",
      r_sikhboi: "Red Sikh Turban",
      star_band: "Star Band",
      traffic_cone: "Traffic Cone Hat",
      wing_cap: "Winged Cap",
      w_smilebucket: "White Smile Bucket Hat",
      yamulke: "Yamulke"
    },
    accessories: {
      bl_glasses: "Black Glasses",
      b_dogtag: "Dog Tag",
      b_moustache: "Moustache",
      b_sunglasses: "Black Sunglasses",
      camera: "Camera",
      chain: "Gold Chain",
      clown_nose: "Clown Nose",
      headphones: "Headphones",
      hotchoco_glove: "Hot Chocolate Glove",
      lb_tinypurse: "Tiny Purse",
      left_heart: "Left Heart Accessory",
      measuretape: "Measuring Tape",
      right_heart: "Right Heart Accessory",
      r_bow: "Red Bow",
      r_bowtie: "Red Bowtie",
      smiley_badge: "Smiley Badge",
      t_facemask: "Face Mask",
      whiskers: "Whiskers"
    },
    bags: {
      bat_bag: "Bat Bag",
      bear_bag: "Bear Bag",
      bottle_bag: "Bottle Bag",
      b_bag: "Black Backpack",
      cow_bag: "Cow Bag",
      jetpack: "Jetpack",
      skateboard: "Skateboard",
      traveller_bag: "Traveller Bag",
      tsguitar: "Tiny Guitar",
      turtle_bag: "Turtle Bag",
      wings: "Wings Backpack"
    }  
};

export const hairColors = {Black:"b_", Pink:"pi_", Brown:"br_", Red:"r_", Grey:"gr_", Blue:"bl_", Purple:"p_", Yellow:"y_"};
// Special abilities by class
export const CLASS_ABILITIES = {
  Warrior: ['Rage', 'Heavy Strike', 'Shield Wall', 'Taunt'],
  Mage: ['Fireball', 'Ice Nova', 'Teleport', 'Arcane Shield'],
  Rogue: ['Backstab', 'Stealth', 'Poison Strike', 'Evasion'],
  Cleric: ['Divine Light', 'Heal', 'Smite', 'Prayer of Protection'],
  Ranger: ['Aimed Shot', 'Beast Companion', 'Track', 'Nature\'s Blessing']
};



// Race abilities
export const RACE_ABILITIES = {
  Human: ['Versatility', 'Adaptability'],
  Elf: ['Night Vision', 'Magic Resistance', 'Archery Mastery'],
  Dwarf: ['Stonework', 'Poison Resistance', 'Darkvision'],
  Orc: ['Berserker Rage', 'Intimidation', 'Endurance'],
  Halfling: ['Lucky', 'Stealth', 'Nimble']
};