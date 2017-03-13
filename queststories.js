
/* stories for Character Creation Is The Whole Game 

THIS RETURNS PART OF A STORY FOR A GIVEN JOB TITLE

to be 3 types: one-off stories that go with particular jobs or stat extremes
multiple-part stories that go with jobs, completion leads to a unique job offer 

poignant family stories with five episodes: teenager, adult, middle age and completion. played at 17, 27, 37 and 47

each episode no more than 200 characters

*/

function generateQuestStory() {	
	if (character.job == "Kiddo") { //jobless youths get flavor text based on highest stat
		var flavorText =  "When not " + pick(storyFlavor[highestStat]) + ", ";
	}
	else {
		var flavorText = "between " + pick(storyFlavor[character.job]) + " and " + pick(storyFlavor[character.job]) + ", "
	}

	updateStory(flavorText + " " + elixir.name + ", returning with <span style='color:#ff0'>" + elixir.gold + "g</span>, earning <span style='color:#0F0'>" + elixir.exp + "xp</span>, and finding " + " <span class='items'>" + newItem + "</span>");
}
	




var storyFlavor = [];

storyFlavor["Kiddo"] = new Array('the days pass','you become obsessed with','you master','you become adept at','countless hours are lost to','many days are spent','thousands of hours disappear','yet another moon spent','twelve months pass','a year passes');

storyFlavor["STR"] = new Array('chopping timber at the mill','mucking out the stables','hauling bricks at the kiln','loading cargo at the docks','unloading crates at the warehouse','bashing rocks in the mines','getting into fights');

storyFlavor["DEX"] = new Array('learning to pick locks','sneaking around at night','exploring the city’s alleys - and rooftops','crawling into places you should not','mixing dangerous chemicals','crafting clever disguises');

storyFlavor["INT"] = new Array('solving and creating riddles','dreaming of intricate magic','winning arguments with adults','talking to the acolytes','completing tasks without any apparent effort','studying esoteric mysteries','reading odd books');

storyFlavor["WIS"] = new Array('with your studies','reading old books ','studying dusty tomes','following the town crier around','practicing foreign accents','learning to write and read the old tongue');

storyFlavor["CHA"] = new Array('talking grown-ups into unwise decisions','chatting up your peers','learning to play an instrument','reciting classic plays','learning how to apply makeup','dedicatedly following fashion','working on your public speaking','powdering your wigs');

/* job based stories */

storyFlavor["Cadet"] = new Array('performing drills in rain and shine','brawling in dingy pubs','training in the arts of war','polishing the brass','learning the heft and dance of steel');

//and so on

storyFlavor["Apprentice"] = new Array('sweeping up magical precipitations','organizing the potion ingredients','cleaning the wizards’ lavatories','dusting sorcerous artifacts','guarding facile mysteries');

storyFlavor["Pickpocket"] = new Array('lurking in the marketplaces','listening for the jangle of coinpurses','gleefully evading the watchmen','conning tourists in the street','securing that which is insecure');

storyFlavor["Cupbearer"] = new Array('listening quietly to rumors','rifling through important papers','standing by as powerful people negotiate','absorbing the manners of court','watching political intrigues');

storyFlavor["Stagehand"] = new Array('scrubbing and sweeping the boards','crafting cunning props','friggin’ in the riggin’','striking sets and building flats','helping actors with their lines');

storyFlavor["Docker"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Foreman"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Merchant"] = new Array('haulin','brawlin','herpin','derpin');

storyFlavor["Tracker"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Hunter"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Ranger"] = new Array('haulin','brawlin','herpin','derpin');

storyFlavor["Mechanic"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Technician"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Engineer"] = new Array('haulin','brawlin','herpin','derpin');

storyFlavor["Researcher"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Scholar"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Professor"] = new Array('haulin','brawlin','herpin','derpin');

storyFlavor["Entertainer"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Courtesan"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Procurer"] = new Array('haulin','brawlin','herpin','derpin');

storyFlavor["Playwrite"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Professor"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Provost"] = new Array('haulin','brawlin','herpin','derpin');
		
storyFlavor["Servant"] = new Array('haulin','brawlin','herpin','derpin');
	storyFlavor["Butler"] = new Array('haulin','brawlin','herpin','derpin');
		storyFlavor["Seneschal"] = new Array('haulin','brawlin','herpin','derpin');


storyFlavor["Guard"] = new Array('standing bored outide the barbican','hauling troublemakers to the drunk tank','challenging smugglers and thieves','protecting the crown jewels','sleeping against your halberd');

storyFlavor["Acolyte"] = new Array('introducing yourself to the mysteries','exploring your magical talents','memorizing spells and cantrips','spending long nights in the arcane library','learning sorcerous gestures');

storyFlavor["Cutpurse"] = new Array('slipping gemstones out of pockets','hoodwinking even the smartest merchants','gulling tourists','sneaking with ease through the crowds','keenly hunting the juiciest purses');

storyFlavor["Courier"] = new Array('getting to read the most fascinating secrets','shuttling rumors to and fro','pacing the halls of power and learning','escorting valuable items and papers','wishing you were a more distinctive typeface');

storyFlavor["Actor"] = new Array('impressing the troupe with your skills','silvering your tongue with wit and wisdom','delivering lines on cue','tripping over the sets you made','learning to shed tears on demand');

storyFlavor["Soldier"] = new Array('campaigning abroad','brawling with the city guard','getting yelled at by officers','mastering the martial arts','polishing your boots');

storyFlavor["Witch"] = new Array('mastering the magic arts','casting hexes and producing rabbits','getting involved in the deeper mysteries','shadowing the archmage','researching arcane secrets');

storyFlavor["Thief"] = new Array('pulling off daring robbering','emptying merchants’ bags','entering and breaking wealthy homes','coshing guards and looting pockets','liberating gemstones and gold');

storyFlavor["Scholar"] = new Array('transcribing ancient texts','advising wealthy lords and merchants','teaching rich kids how to get richer','whispering secrets in powerful ears','spreading official rumors');

storyFlavor["Bard"] = new Array('mastering your instruments','beguiling any who dare to listen','transporting people to other worlds','creating memes and retiring gifs','singing silly love songs');

storyFlavor["Officer"] = new Array('training the cadets','drilling the corps','teaching merchants to defend themselves','brawling, always brawling,','defeating your enemies in single combat');

storyFlavor["Sorceror"] = new Array('conducting secret research in the highest towers','training the acolytes a secret or two','creating new spells for old wizards','scowling at false secular knowledge','turning lead into `gold`');

storyFlavor["Lockbreaker"] = new Array('banking that which is in the wrong bank','organizing audacious heists','raiding merchants’ safes','emptying the most secure vaults','training the pickpockets');

storyFlavor["Troubador"] = new Array('outclassing the greatest bards','writing epic poems','perfecting the finest instruments','performing for huge audiences','fleeing rabid fans');

storyFlavor["Cleric"] = new Array('helping others remember which lord to obey','soliciting donations from the faithful','guarding the sacraments','safekeeping the church*s most important mysteries','guarding the collection plate');

storyFlavor["Rogue"] = new Array('hiring your muscle to the highest bidder','stretching the law in the name of duty','swashbuckling by night and day','threatening cutpurses and coinmasters alike','brawling by day, brawling by night,');

storyFlavor["Paladin"] = new Array('chopping off infidel heads','soliciting donations with steel','sharpening the most important sacraments','exfiltrating other religions’ secrets','becoming inappropriately involved in banking');

storyFlavor["Warlord"] = new Array('enjoying tax revenues','raising a small but useful force','establishing your fiefdom','clearing bandits from the county','hosting raucious banquets');

storyFlavor["Seducer"] = new Array('mastering the intricacies of court life','bedding servants and stealing secrets','spreading rumors and savage lies','manipulating public opinion','bending all who will listen to your will');

storyFlavor["Magus"] = new Array('liasing with the secular colleges','advising the greatest powers in the land','exploring magic’s more sanguine avenues','providing sorcerous services for the court','ensuring the demons are properly secured');

storyFlavor["Illusionist"] = new Array('exploring magic’s criminal applications','causing profit to disappear into your pockets','mastering the many kinds of deception','making powerful people see things that aren’t there','hiding the obvious in plain sight');

storyFlavor["Ranger"] = new Array('learning the order and disorder of nature','forgetting the complexities of city life','becoming one with the forest','considering the virtues you do not possess','eating much better in the wild');

storyFlavor["Bandit"] = new Array('leading your motley crew of troublemakers','lightening the load of passing noblemen','raiding the richest villages in the land','sailing the high seas in search of plunder','lurking in the woods');

storyFlavor["Magister"] = new Array('outwitting the wizards in the halls of power','ensuring secular learning reigns supreme','employing the lands’ finest scholars','manufacturing "ancient" scrolls','ensnarling your enemies in bureacracy');

storyFlavor["LordEngineer"] = new Array('Spending the kingdom\'s cash on mad machines','causing mysterious explosions','draining the actual swamp');
storyFlavor["LordJustice"] = new Array('signing death warrants','dusting off your wigs','extending the reach of jurisprudence');
storyFlavor["LordConstable"] = new Array('leading needless marches','breeding pigs','collecting donations');
storyFlavor["LordTreasurer"] = new Array('constructing vaults','swimming in oceans of coin','having inflation explained to you');
storyFlavor["LordChamberlain"] = new Array('undermining all others','sneering at nobles','polishing the privy seal');
storyFlavor["LordAmbassador"] = new Array('keeping a safe distance','learning languages','silvering thine own tongue');
storyFlavor["LordChancellor"] = new Array('keeping the king happy','undermining the Lord Chamberlain','checking others\' power');
storyFlavor["LordSpymaster"] = new Array('sneaking','hiring assassins','skulking');
storyFlavor["LordArchmage"] = new Array('living in a realm of total abstraction','laughing maniacally','turning Lord Chamberlain into a frog');
storyFlavor["LordMarshal"] = new Array('raising new legions','assuring others\' loyalty','suppressing rebellions');

