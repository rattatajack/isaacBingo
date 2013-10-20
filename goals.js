easyGoals = [
"Eyeball Item|eyeball|Inner eye, Mom's contacts, Mom's eye, Tech, Tech 2, Peeper, Polyphemus, Cain's eye, Pinky eye",
"Item With \"Head\" In The Name|head",
"15 Separate Coins on Floor in One Room|15coins|One ROOM not one FLOOR. Nickels and dimes count as 1 coin each",
"Poison an Enemy|poison",
"Any Form of Flight|fly|Hanged Man Card, Ponies, Bible, Shears, or Permanent Flight items",
"Satisfy a Slot Machine|satisfySlot|Destroy a slot machine by giving pennies",
"Beat a Full Fistula, Teratoma, or Envy|asteroidBoss",
"Item From an Angel Room|angelRoom|An angel room item from some other source doesn't count",
"Suit Card|suitCard|2 of some suit or Ace of Spades",
"Kill a Gurdy (Jr or Sr)|gurdy",
"Bomb a Normal Beggar|bombBeggar",
"2 Meat Cubes|meatSphere",
"55 Coins|55coins",
"10 Keys|10keys",
"20 Bombs|20bombs",
"Kill a Green Champion Mob or Boss|greenChamp",
"Satisfy a Sacrifice Room|satisfySacRoom|Sacrifice rooms are the ones with spikes inside, not teeth in the door. You must get a treasure from it.",
"Teleport Out of a Boss Fight|teleportBoss",
"Any Mushroom|mushroom",
"Syringe Item|syringe",
"Fire a Homing Tear|homing|Followers' homing tears count",
"Bomb a Demon Beggar|bombDemonBeggar",
"2 Items With \"Mom\" in the Name|momItems",
"Read a Book|readABook|(not a sports page, not a magazine)",
"3 different pills|3pills|Must be on a single run",
"Multishot|multishot|Quad Shot, Triple Shot, Tammy's Head, Loki's Horns, Mom's Eye, Harlequin Baby, Rainbow Baby",
]

mediumGoals = [
"Full Clear XL Floor Past Basement|fullClearXL|All normal rooms and the boss",
"Permanent Flight|permaFlight|Ponies don't count",
"100 Combined Bombs, Keys, Coins|100combinedThings|Example : 50 coins + 30 bombs + 20 Keys",
"Map or Compass|permaMap",
"3 Orbitals|3orbitals|Black fly, meat cube, dagger, guardian angel (not red or blue flies)",
"Health Drop Follower|healthFollower|Lil chad, the relic",
"2 Items That Move and Shoot|2shootingFollowers|Any baby follower, meat sphere, etc",
"3 Devil Deals|3devilDeals|Must be on a single run. Finding devil items outside a deal room doesn't count",
"Clear a Boss Challenge Room|bossChallengeRoom|These are the rooms you have to be at 1hp or less to enter",
"Enter 3 Super Secret Rooms|3superSecret|Must be on a single run",
"Destroy a Golden Poop|destroyGoldPoop",
"Permanent 6 Damage Bars|maxDamageBars|Sword stat.",
"Max Tears Up Bars|maxTearsBars|Arrow stat",
"4 Range Bars|6rangeBars|Bow stat",
"6 Speed Bars|6speedBars|Foot stat",
"Shoot a Beam or Laser|beam|Brimstone, Shoop da whoop, Tech 1, Tech 2, Robo baby",
"Satisfy a Normal Beggar|satisfyBeggar|Make it disappear with coins",
"7 Red Heart Containers|7redHearts|Empty ones count",
"12 Total Health Containers (any color)|12health|Empty ones count",
"Satisfy a Blood Bank|satisfyBank|Obtain IV Bag or Blood Bag from it",
"2 Guppy Items|2guppy|Head, Tail, Paw, Dead Cat. Hairball doesn't count",
"Skatole|skatole",
"Kill a Super or Ultra Sin Miniboss|specialSin",
"Cut Something|cutSomething|Knife, Dagger, Shears, Blood rights, Razor blade",
"Kill a Boss Without Shooting or Space Items or Bombs|bossOrbitals|For example, with orbitals",
"Gold Key|goldKey|Dad's Key doesn't count",
"Beat Heart Without Ever Using a Space Item|killHeartNoSpace",
"Beat Heart With 1 Heart|heart1heart|Start the heart fight at 1 or less health and don't go above 1 until it dies. Blue and white hearts count as health.",
"Resurrection|resurrection|Die with 1UP, Ankh, Dead Cat",
]

hardGoals = [
"Beat Blue Baby|blueBaby",
"Beat Heart Without Shooting or Space Items During Fight|heartNoShooting|For example, with bombs and orbitals. Anything that uses the shooting controls is shooting.",
"Beat Heart Without Getting an Item from a Treasure Room|heartNoTreasure|From Basement to Heart",
"Beat Heart Without Ever Gaining Red Heart Containers|heartNoContainers|From Basement to Heart",
"Beat Satan Without Opening any Chests|satanNoChest|From Basement to Satan",
"Beat Satan Without Using any Bombs on the Run|satanNoBombs|From Basement to Satan. If you get a room that needs bombs to progress then you're screwed.",
"Beat Satan Without Shopping|satanNoShop|From Basement to Satan. Gambling is not shopping.",
"Fart on Satan|fartOnSatan|Needs to actually poison him. Phase 1 of the fight doesn't count.",
"Full Clear Sheol|fullClearSheol",
"Beat Isaac Without Opening any Chests|isaacNoChest|From Basement to Isaac",
"Beat Isaac Without Using any Bombs on the Run|isaacNoBombs|From Basement to Isaac",
"Beat Isaac Without Shopping|isaacNoShop|From Basement to Isaac",
"Damage Isaac With Pee or Holy Water|peeIsaac|Isaac the boss, not Isaac the player character",
"Full Clear Cathedral|fullClearCath|All normal rooms and the boss",
"No Damage on Womb 2 or XL|noHitWomb2|Health can't go down for any reason",
"Full Clear and No Damage Caves 1 and 2 or XL|noHitCaves|All normal rooms and the boss. Health can't go down for any reason",
];


var exclusions = [
["fartOnSatan", "poison"],
["permaFlight", "fly"],
["satanNoBombs", "satanNoChest", "satanNoShop"],
["isaacNoBombs", "isaacNoChest", "isaacNoShop"],
["satanNoBombs", "isaacNoBombs"],
["satanNoChest", "isaacNoChest"],
["satanNoShop", "isaacNoShop"],
["meatSphere", "2shootingFollowers"],
["100combinedThings", "55coins"],
["noHitWomb2", "noHitCaves"],
];
