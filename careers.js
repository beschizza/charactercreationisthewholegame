
function careers() { 
		console.log("checking for careers -1/2");
console.log ("cadet? " + storyCadet["played"]);

/*	╔═══════════════════════════════════════════════════╗
	║ special jobs and statuses triggered 		 		║
	║	by meeting certain combinations of stat			║
	║ 	  win bonus points for each advancement			║ 
	╚═══════════════════════════════════════════════════╝	*/
	
	if (character.STR + character.DEX + character.INT > 52 && storyLordEngineer["played"] == 0) {				openStory (storyLordEngineer);		}
	else if (character.STR + character.DEX + character.WIS > 52 && storyLordJustice["played"] == 0) {			openStory (storyLordJustice);		}
	else if (character.STR + character.DEX + character.CHA > 52 && storyLordConstable["played"] == 0) {			openStory (storyLordConstable);		}
	else if (character.STR + character.INT + character.WIS > 52 && storyLordTreasurer["played"] == 0) {			openStory (storyLordTreasurer);		}
	else if (character.STR + character.INT + character.CHA > 52 && storyLordChamberlain["played"] == 0) {		openStory (storyLordChamberlain);	}	
	else if (character.STR + character.WIS + character.CHA > 52 && storyLordMarshal["played"] == 0) {			openStory (storyLordMarshal);		}	
	else if (character.DEX + character.INT + character.WIS > 52 && storyLordAmbassador["played"] == 0) {		openStory (storyLordAmbassador);	}
	else if (character.DEX + character.INT + character.CHA > 52 && storyLordChancellor["played"] == 0) {		openStory (storyLordChancellor);	}	
	else if (character.DEX + character.WIS + character.CHA > 52 && storyLordSpymaster["played"] == 0) {			openStory (storyLordSpymaster);		}	
	else if (character.INT + character.WIS + character.CHA > 52 && storyLordArchmage["played"] == 0) {			openStory (storyLordArchmage);		}
	
	else if (character.STR + character.INT > 36 && storyCleric["played"] == 0 ) {						openStory (storyCleric);		}
	else if (character.STR + character.DEX > 36 && storyRogue["played"] == 0 ) {						openStory (storyRogue);			}
	else if (character.STR + character.WIS > 36 && storyPaladin["played"] == 0 ) {						openStory (storyPaladin);		}
	else if (character.STR + character.CHA > 36 && storyWarlord["played"] == 0 ) {						openStory (storyWarlord);		}
	else if (character.INT + character.DEX > 36 && storyIllusionist["played"] == 0 ) {					openStory (storyIllusionist);	}
	else if (character.INT + character.WIS > 36 && storyMagus["played"] == 0 ) {						openStory (storyMagus);			}
	else if (character.INT + character.CHA > 36 && storySeducer["played"] == 0 ) {						openStory (storySeducer);		}
	else if (character.DEX + character.WIS > 36 && storyRanger["played"] == 0 ) {						openStory (storyRanger);		}
	else if (character.DEX + character.CHA > 36 && storyBandit["played"] == 0 ) {						openStory (storyBandit);		}
	else if (character.WIS + character.CHA > 36 && storyMagister["played"] == 0 ) {						openStory (storyMagister);		}

	else if (character.DEX > 18 && character.job == "Thief" 		&& storyLockbreaker["played"] == 0 ) { 		openStory (storyLockbreaker);}
	else if (character.CHA > 18 && character.job == "Bard" 			&& storyTroubador["played"] == 0 ) { 		openStory (storyTroubador);}
	else if (character.STR > 18 && character.job == "Soldier" 		&& storyOfficer["played"] == 0 ) { 			openStory (storyOfficer);}
	else if (character.INT > 18 && character.job == "Witch" 		&& storySorceror["played"] == 0 ) {			openStory (storySorceror);}
	else if (character.WIS > 18 && character.job == "Scholar" 		&& storyDiplomat["played"] == 0 ) { 		openStory (storyDiplomat);}

		else if (character.STR > 16 && character.job == "Foreman" 		&& storyMerchant["played"] == 0 ) { 		openStory (storyMerchant);}
		else if (character.INT > 16 && character.job == "Technician" 	&& storyEngineer["played"] == 0 ) { 		openStory (storyEngineer);}
		else if (character.DEX > 16 && character.job == "Hunter" 		&& storyRanger["played"] == 0 ) { 			openStory (storyRanger);}
		else if (character.WIS > 16 && character.job == "Scholar" 		&& storyProfessor["played"] == 0 ) { 		openStory (storyProfessor);}
		else if (character.CHA > 16 && character.job == "Courtesan"  	&& storyProcurer["played"] == 0 ) { 		openStory (storyProcurer);}
		
	else if (character.STR > 15 && character.job == "Guard" 		&& storySoldier["played"] == 0 ) { 			openStory (storySoldier);}
	else if (character.INT > 15 && character.job == "Acolyte" 		&& storyWitch["played"] == 0 ) { 			openStory (storyWitch);}
	else if (character.DEX > 15 && character.job == "Cutpurse" 		&& storyThief["played"] == 0 ) { 			openStory (storyThief);}
	else if (character.WIS > 15 && character.job == "Courier" 		&& storyScholar["played"] == 0 ) { 			openStory (storyScholar);}
	else if (character.CHA > 15 && character.job == "Actor"  		&& storyBard["played"] == 0 ) { 			openStory (storyBard);}

		else if (character.STR > 13 && character.job == "Docker" 		&& storyForeman["played"] == 0 ) {			openStory (storyForeman);}
		else if (character.INT > 13 && character.job == "Mechanic" 		&& storyTechnician["played"] == 0 ) {		openStory (storyTechnician);}
		else if (character.DEX > 13 && character.job == "Tracker" 		&& storyRanger["played"] == 0 ) {			openStory (storyHunter);}
		else if (character.WIS > 13 && character.job == "Researcher" 	&& storyScholar["played"] == 0 ) {			openStory (storyScholar);}
		else if (character.CHA > 13 && character.job == "Entertainer" 	&& storyCourtesan["played"] == 0 ) {		openStory (storyCourtesan);}
	
	else if (character.STR > 12 && character.job == "Cadet" 		&& storyGuard["played"] == 0 ) {			openStory (storyGuard);}
	else if (character.INT > 12 && character.job == "Apprentice" 	&& storyAcolyte["played"] == 0 ) {			openStory (storyAcolyte);}
	else if (character.DEX > 12 && character.job == "Pickpocket" 	&& storyCutpurse["played"] == 0 ) {			openStory (storyCutpurse);}
	else if (character.WIS > 12 && character.job == "Cupbearer" 	&& storyCourier["played"] == 0 ) {			openStory (storyCourier);}
	else if (character.CHA > 12 && character.job == "Stagehand" 	&& storyActor["played"] == 0 ) {			openStory (storyActor);}

		else if (storyCadet["played"] != 0  && storyDocker["played"] == 0 && character.job != "Cadet") {				openStory (storyDocker);}
		else if (storyApprentice["played"] != 0  && storyMechanic["played"] == 0 && character.job != "Apprentice") {	openStory (storyMechanic);}
		else if (storyPickpocket["played"] != 0  && storyTracker["played"] == 0 && character.job != "Pickpocket") {		openStory (storyTracker);}
		else if (storyCupbearer["played"] != 0  && storyResearcher["played"] == 0 && character.job != "Cupbearer") {	openStory (storyResearcher);}
		else if (storyStagehand["played"] != 0  && storyEntertainer["played"] == 0 && character.job != "Stagehand") {	openStory (storyEntertainer);}
	
	else if (character.highestStat() == "STR" && character.STR > 10  && storyCadet["played"] == 0 ) {						openStory (storyCadet);}
	else if (character.highestStat() == "INT" && character.INT > 10 && storyApprentice["played"] == 0) { openStory(storyApprentice); }
	else if (character.highestStat() == "DEX" && character.DEX > 10 && storyPickpocket["played"] == 0) { openStory(storyPickpocket); }
	else if (character.highestStat() == "WIS" && character.WIS > 10 && storyCupbearer["played"] == 0) { openStory(storyCupbearer); }
	else if (character.highestStat() == "CHA" && character.CHA > 10 && storyStagehand["played"] == 0) { openStory(storyStagehand); }



	
	/*	╔═══════════════════════════════════════╗
		║ LOW STATS							 	║
		║									 	║
		║ When low on points, can redistribute	║ 
		╚═══════════════════════════════════════╝	*/
	
	else if (character.STR == character.DEX == character.INT == character.WIS == character.CHA) { openStory (storyJackofall); }
	

	
	else if (character.STR < 7 && storyFrail["played"] == 0 ) { openStory (storyFrail); 		}
	else if (character.STR < 8 && storyFeeble["played"] == 0 ) { openStory (storyFeeble); 		}
	else if (character.STR < 9 && storyWeakling["played"] == 0 ) { openStory (storyWeakling);	}
	
	
	else if (character.DEX < 9 && storyClumsy["played"] == 0 ) { openStory (storyClumsy); 		}
	else if (character.DEX < 8 && storyHamfisted["played"] == 0 ) { openStory (storyHamfisted); 	}
	else if (character.DEX < 7 && storyBungling["played"] == 0 ) { openStory (storyBungling); 	}
	
	else if (character.INT < 9 && storyDense["played"] == 0 ) { openStory (storyDense); 		}
	else if (character.INT < 8 && storyStupid["played"] == 0 ) { openStory (storyStupid); 		}
	else if (character.INT < 7 && storyMindless["played"] == 0 ) { openStory (storyMindless); 	}
	
	else if (character.WIS < 9 && storyNaive["played"] == 0 ) { openStory (storyNaive); 		}
	else if (character.WIS < 8 && storyIgnorant["played"] == 0 ) { openStory (storyIgnorant); 	}
	else if (character.WIS < 7 && storyWitless["played"] == 0 ) { openStory (storyWitless); 	}
	
	else if (character.CHA < 9 && storyUnsociable["played"] == 0 ) { openStory (storyUnsociable); 	}
	else if (character.CHA < 8 && storyOdious["played"] == 0 ) { openStory (storyOdious); 		}
	else if (character.CHA < 7 && storyRepulsive["played"] == 0 ) { openStory (storyRepulsive); 	}
	
	
	/*	╔═══════════════════════════════════════╗
		║ EXTREMES							 	║
		║									 	║
		║ 										║ 
		╚═══════════════════════════════════════╝	*/
	

	else if (character.STR	< 8 	&& character.DEX > 16 && storyLithe["played"] == 0 ) {	openStory (storyLithe);		}  
	else if (character.STR	< 8 	&& character.INT > 16 && storyNerd["played"] == 0 ) {	openStory (storyNerd);			}  
	else if (character.STR	< 8 	&& character.WIS > 16 && storyBookish["played"] == 0 ) {	openStory (storyBookish);		}  
	else if (character.STR	< 8 	&& character.CHA > 16 && storyGlamorous["played"] == 0 ) {	openStory (storyGlamorous);	}  
	else if (character.DEX	< 8 	&& character.STR > 16 && storyRuffian["played"] == 0 ) {	openStory (storyRuffian);		}  
	else if (character.DEX	< 8 	&& character.INT > 16 && storyAbsentminded["played"] == 0 ) {	openStory (storyAbsentminded);	}  
	else if (character.DEX	< 8 	&& character.WIS > 16 && storyDeskbound["played"] == 0 ) {	openStory (storyDeskbound);	}  
	else if (character.DEX	< 8 	&& character.CHA > 16 && storyBeatific["played"] == 0 ) {	openStory (storyBeatific);		}
	else if (character.INT	< 8 	&& character.STR > 16 && storyBrute["played"] == 0 ) {	openStory (storyBrute);		}  
	else if (character.INT	< 8 	&& character.DEX > 16 && storyReckless["played"] == 0 ) {	openStory (storyReckless);		}  
	else if (character.INT	< 8 	&& character.WIS > 16 && storySnob["played"] == 0 ) {	openStory (storySnob);			}  
	else if (character.INT	< 8 	&& character.CHA > 16 && storyBimbo["played"] == 0 ) {	openStory (storyBimbo);		}  
	else if (character.WIS	< 8 	&& character.STR > 16 && storyHothead["played"] == 0 ) {	openStory (storyHothead);		}  
	else if (character.WIS	< 8 	&& character.DEX > 16 && storyKleptomaniac["played"] == 0 ) {	openStory (storyKleptomaniac);	}  
	else if (character.WIS	< 8 	&& character.INT > 16 && storySavant["played"] == 0 ) {	openStory (storySavant);		}  
	else if (character.WIS	< 8 	&& character.CHA > 16 && storyCocky["played"] == 0 ) {	openStory (storyCocky);		}  
	else if (character.CHA	< 8 	&& character.STR > 16 && storyHooligan["played"] == 0 ) {	openStory (storyHooligan);		}  
	else if (character.CHA	< 8 	&& character.DEX > 16 && storySnake["played"] == 0 ) {	openStory (storySnake);		}  
	else if (character.CHA	< 8 	&& character.INT > 16 && storyImperious["played"] == 0 ) {	openStory (storyImperious);	}  
	else if (character.CHA	< 8 	&& character.WIS > 16 && storySmug["played"] == 0 ) {	openStory (storySmug);			}  
	else {
		// nothing happened, just carry on with the next turn
		console.log("nothing happened, just carry on with the next turn -2/2");
		nextTurn();
	}
	
}
