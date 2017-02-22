
var junk = new Array('dust','mold','crumbs','carpets','rugs','stools','mugs','eggcups','spoons','pins','bricks')

var animals = new Array('fox','stoat','vole','mole','lemur','gerbil','hampster','rabbit','deer','elk','capybara','kitten','tiger','lion','panther','dog','bear','fish','mackerel','salmon','oarfish','coelacanth','shark','sea monster','crab','frog','toad','axolotl','newt','lizard','crocodile','snake','turtle','chameleon','butterfly','ant','wasp','leech','worm','spider','bird','nightingale','crow','duck','chicken','peacock','parrot','raptor','falcon','hawk','jellyfish','urchin','trilobite','starfish','monkey','gorilla','horse','zebra','donkey','giraffe','elephant','mammoth','troll','goblin','mermaid','harpy','minotaur','centaur','elf','gnome','slime','gel','dryad','medusa','manticore','basilisk','dinosaur','wyvern','wyrm','parasite','alien','ghost','skeleton','zombie','ghoul','vampire')

var professions = new Array('warrior','paladin','barbarian','knight','soldier','centurion','guard','ranger','rogue','archer','pathfinder','mage','wizard','sorcerer','spellcaster','magician','monk','warlock','priest','druid','ninja','samurai','overseer','invoker','summoner','alchemist','herbalist','chef','cook','merchant','builder','engineer','demolitionist','scientist','astronomer','occultist','diviner','jester','scribe','painter','singer','dancer','acrobat','philosopher','traveler','explorer','assassin','guardian','keeper','templar','undertaker','animal keeper','bandit','acolyte','queen','king','prince','princess','emperor','empress','servant','maid','peasant','rancher','worker','pilot','captain','sailor','admiral','pirate','drunkard','fool');

var elementals = new Array('water','fire','ice','lava','acid','poison','earth','flora','fauna','metal','rock','light','darkness','mind','time','matter','void','space','life','death','undeath','arcane','magic','blood','wind');

var prefix = new Array('holy','saint','blessed','magic','enchanted','guardian','angelic','godly','hallowed','unholy','cursed','banished','voodoo','demonic','hellish','sentient','singing','dreaming','cosmic','galactic','astral','rainbow','prismatic','aquatic','aerial','burning','shocking','earthen','plasmic','sharp','piercing','screaming','laughing','talking','blinding','shiny','luminous','glowing','spiked','barbed','studded','vorpal','gilded','ornate','engraved','gnarled','twisted','corrupted','plain','mundane','rough','tarnished','dull','clouded','clear','bright','pure','reflecting','mirrored','shimmering','parasitic','healing','venomous','ghostly','kaleidoscopic','mysterious','confusing','lost','ancient','forgotten','heirloom','starfallen','otherwordly','tentacled','winged','seeing','eldritch','necrotic','necromantic','meteoritic','vanishing','oscillating','vibrating','pulsating','sizzling','shivering','humming','droning','buzzing','changing','morphing','shifting','extraordinary','gigantic','colossal','miniature','farseeing','seering','divining','fractal','recursive','dimensional','ferocious','fierce','vengeful','glorious','puzzling');

var suffix = new Array('of knowledge','of massacre','of bloodshed','of murder','of berserking','of bloodthirst','of war','of diplomacy','of seduction','of lies','of truth','of glory','of corruption','of deceit','of wrath','of calm','of silence','of noise','of curse','of blessing','of healing','of mending','of day','of night','of dusk','of dawn','of dreams','of nightmares','of kings','of queens','of farsight','of teleportation','of communication','of translocation','of shining','of darkness','of necromancy','of transfer','of draining','of luck','of fortune','of misery','of smoke','of fog','of mist','of gravity','of providence','of talent','of skill','of flight','of velocity','of strength','of protection','of stamina','of charisma','of energy','of focus','of runes','of glyphs','of wonders','of marvels');

var weapon = new Array('','dagger','mace','sickle','club','morningstar','shortspear','longspear','quarterstaff','staff','scepter','wand','focus','spear','crossbow','quiver of dart','quiver of bolt','quiver of arrows','quiver','javelin','sling','throwing axe','axe','knife','cleaver','hammer','handaxe','pick','sap','shortsword','battleaxe','flail','longsword','rapier','scimitar','trident','warhammer','falchion','glaive','greataxe','greatclub','greatsword','guisarme','halberd','lance','scythe','longbow','composite longbow','shortbow','composite shortbow','kama','nunchaku','sai','siangham','bastard sword','whip','bolas','repeating crossbow','shuriken','grenade','bomb');

var gems = new Array('agate','alexandrite','chrysoberyl','andalusite','axinite','benitoite','aquamarine','beryl','bixbite','cassiterite','chrysocolla','chrysoprase','clinohumite','cordierite','danburite','diamond','diopside','dioptase','dumortierite','emerald','feldspar','amazonite','labradorite','moonstone','sunstone','garnet','hessonite','hambergite','hematite','jade','jadeite','nephrite','jasper','kornerupine','kunzite','lapis lazuli','malachite','opal','peridot','prehnite','pyrite','quartz','agate','amethyst','aventurine','citrine','chalcedony','onyx','rhodochrosite','ruby','sapphire','spinel','sugilite','tanzanite','zoisite','topaz','turquoise','tourmaline','variscite','vesuvianite','zeolite','zircon','crystal','amber','ammolite','bone','copal','coral','ivory','jet','nacre','pearl','fossil','bone','skull','glyph','rune');

var worthless = new Array('broken','tarnished','old','dusty','dirty','uninteresting','mundane','plain-looking','wet','decayed','corroded','ruined','moldy','useless','dull','ordinary','ornemental','unpleasant','collectible','nasty','smelly','rusty','icky','dirty','gross');

var book = new Array('scroll','book','tome ','codex','volume','compendium','atlas','encyclopedia','engraved slab') 

var equipment = new Array('boots','clogs','gloves','gauntlets','light shield','heavy shield','tower shield','buckler','crest','padded armor','leather armor','studded leather armor','chain shirt','hide armor','scale mail armor','chainmail','breastplate','splint mail armor','banded mail armor','half-plate armor','full plate armor','bundle of vestments','helmet','helm','horned helm','hauberk','tiara','hat','crown','headband','cloak','cape','robe','garb','ring','amulet','necklace','charm','bracelet','brooch','medallion','pendant','belt');



getItem = function (level) {
	
	var item;
	
	if (level<3) {
		 item = pick(worthless) + " " + pick(junk) ;
	}
	else {
		
		var sortOfItem = Math.floor(Math.random(1)*10);

		
		switch(true) {
			case (sortOfItem <6 ): sortOfItem=weapon; break;
			case (sortOfItem == 6): sortOfItem=book; break;
			case (sortOfItem == 7): sortOfItem=gems; break;
			default: sortOfItem=equipment; break;
		}
		
		var nameOfItem = Math.floor(Math.random(1)*10);
		//console.log(nameOfItem);
		switch(true) {
			case (nameOfItem < 5): item = pick(sortOfItem) + " of the " + pick(animals) ; break;
			case (nameOfItem == 6): item = pick(sortOfItem) + " of the " + pick(professions) ; break;
			case (nameOfItem == 7): item = pick(sortOfItem) + " of the " + pick(prefix) + " " + pick(animals); break;
			case (nameOfItem == 8): item = pick(prefix) + " " +  pick(sortOfItem) + " of the " +  pick(animals); break;
			default: item = pick(sortOfItem) + " " + pick(suffix) ; break;
					
	}
	}
	console.log(item);
	return (item);
}

