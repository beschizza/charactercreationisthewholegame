/* light quest places */



var places1what = new Array ('toil away in','empty out','clean up','restore','clean out','scour','loot','raid','explore','get lost in');
var places1why = new Array ('infested','filthy','haunted','decrepid','nasty','disgusting','unpleasant','smelly');
var places1 = new Array('cellars','sewers','barns','mansions','toilets','tenements','basements','hovels','winecellars','granaries','chapels');


var places2what = new Array ('infiltrate','empty out','clean up','carve up','clean out','bungle into','loot','raid','explore','get lost in','talk your way out of','wreck','smash up');
var places2why = new Array ('vile','bandit','thieves','ghostly','dank','sinister','demonic');
var places2 = new Array('dungeon','reliqiary','catacomb','forest','swamp','church','glen','fen','bog','glade','cove','cavern','cavern','fane','dell');
var places2flavor = new Array('Clouds','Forests','Wrath','Awe','Dreams','Gloom','Chaos','Blood','Murmurs','Venom','Hearts','Souls','Cages','Shadows','Fear','Bones','Dread','Howls','Webs','Darkness','Cold','Cries','Graves','Stars','Fog','Mists','Delusions','Whispers')

var places2titles = new Array('Phantasm','Validator','Humiliator','Coveter','Malefactor','Antagonist','Monster','Enemy','Deviant','Deviator','Hunter','Retaliator','Deflator','Recluse','Hermit','Wraith','Master','Overseer','Sorceror','Witch','Arrogator','Aggressor','Baron','Avenger','Reprisor','Succubus','Leviathan','Behemoth','Lamia','Harpy','Vampire','Gorgon','Incubus','Demon','Devil','Seraphim','Valkyrie','Savage')

var places3what = new Array ('infiltrate','empty out','clean up','carve up','clean out','bungle into','loot','raid','explore','get lost in','talk your way out of','wreck','smash up');
var places3bosses = new Array('Abaddon','Adramelech','Agares','Ahriman','Alastor','Palladio','Trump','Nicodemus','Asmodeus','Astaroth','Astarte','Astaroth','Azazel','Cratos','Barbatos','Valetoth','Beelzebub','Beleth','Belial','Belphegor','Berith','Lilith','Daityas','Dantalion','Decarabia','Demon','Eligos','Abigor','Ereshkor','Erinyes','Eurynome','Garuda','Fenrir','Gorgon','Hagetha','Iblis','Kappas','Hecate','Marax','Lucifer','Mammon','Baalberith','Ornias','Nybbas','Umbra','Moloch','Orobas','Rahova','Sylphid','Shaxxas','Valefor','Malefor','Zagan','Ifrita','Volacor');
var places3why = new Array ('rebel','princely','great','merchants','fortified','rank','gruesome','awesome');
var places3 = new Array('palace','halls','encampment','cathedral','guild','castle','fleet','army');




/* Function to generate a quest */

quest = function(l) {
	
var elixir = {
	name: "quest",
	exp: 1,
	gold: 1
	}
	
	switch(true) {
    case (l < 3):
        var word1 = pick(places1why);
		var word2 = pick(places1);
		elixir.name = "you " + pick(places1what) + " <span style='color:#060'>" + word1 + " " + word2 + "</span>";
		elixir.gold = 1 + Math.ceil((Math.random()*l));
		elixir.exp = 5 + (Math.ceil((Math.random()*10)))*l;
        break;
	case (l < 5):
		var word1 = pick(places2why);
		var word2 = pick(places2);
		elixir.name = "you " + pick(places2what) + " the <span style='color:#393'>" +  word1 + " " + word2 + "</span>";	
        elixir.gold = 2 + Math.ceil((Math.random()*l));
		elixir.exp = 10 + (Math.ceil((Math.random()*10)))*l;
		break;
	case (l < 7):
		var word1 = pick(places2why);
		var word2 = pick(places2);
		var word3 = pick(places2flavor);
		elixir.name = "you " + pick(places2what) + " the <span style='color:#3f3'>" +  word1 + " " + word2 + " of " + word3 + "</span>" ;    
        elixir.gold = 4 + Math.ceil((Math.random()*l));
		elixir.exp = 20 + (Math.ceil((Math.random()*10)))*l;
		break;
	case (l < 10):
		var word1 = pick(places2titles);
		var word2 = pick(places2);
		var word3 = pick(places2flavor);
		elixir.name = "you " + pick(places2what) + " the <span style='color:#6f6'>" +  word1 + "'s " + word2 + " of " + word3 + "</span>" ;    
        elixir.gold = 8 + Math.ceil((Math.random()*l));
		elixir.exp = 40 + (Math.ceil((Math.random()*10)))*l;
		break;
    case (l > 9):
		var word1 = pick(places3bosses);
		var word2 = pick(places3why);
		var word3 = pick(places3);
		elixir.name = "you " + pick(places2what) + " in <span style='color:#afa'>"+   word1 + "'s " + word2 + " " + word3 + "</span>";
        elixir.gold = 16 + Math.ceil((Math.random()*l));
		elixir.exp = 80 + (Math.ceil((Math.random()*10)))*l;
		break;
    
    }

	return elixir;
	
}







