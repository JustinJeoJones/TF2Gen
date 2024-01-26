//Value setup
let classes = [
    {
        name: "Scout",
        weapons: ["Shotgun", "Pistol", "Drink", "Thrown", "Melee"]
    },
    {
        name: "Solider",
        weapons: ["Rocket", "Shotgun", "Banner", "Boots",  "Melee"]
    },
    {
        name: "Pyro",
        weapons: ["Flame Thrower", "Shotgun", "Flare Gun", "Thrown", "Back", "Melee"]
    },
    {
        name: "Demoman",
        weapons: ["Grenade Launcher", "Boots", "Back", "Stickybomb", "Shield", "Melee"]
    },
    {
        name: "Heavy",
        weapons: ["Minigun", "Shotgun", "Lunchbox", "Melee"]
    },
    {
        name: "Engineer",
        weapons: ["Shotgun", "Pistol", "Wrangler", "Robot Arm", "Wrench"]
    },
    {
        name: "Medic",
        weapons: ["Syringe Gun", "Medi Gun", "Melee"]
    },
    {
        name: "Sniper",
        weapons: ["Sniper Rifle", "Bow", "SMG", "Thrown", "Back", "Melee"]
    },
    {
        name: "Spy",
        weapons: ["Revolver", "Knife", "Watch", "Sapper"]
    }
];

let DmgPos = [
    "+!1% Damage Bonus",
    "+!1% Faster Firing Speed",
    "+!1% Bonus Damage to buildings",
    "+!1% Bonus Damage when above 50% HP",
    "+!1% Bonus Damage when under 50% HP",
    "100% critical hit vs non-burning players",
    "100% critical hit vs burning players",
    "100% critical hit vs disguised players",
    "100% critical hit vs stunned players",
    "100% minicrits vs burning players",
    "+!1 Health on Hit",
    "+!1% Max Health restore on Hit",
    "On kill: !1 seconds of Crits",
    "On kill: !1 seconds of Mini-Crits",
    "+!1% Damage increase on hit",
    "Always Crits from behind",
    "Mini-crits burning targets and extinguishes them. Damage increases based on remaining duration of afterburn.",
    "+!1 seconds of bleed on hit",
    "!1 successful hit(s) in a row always crits.",
    "Attack deliver a highly concentrated dose of Mad Milk. Duration increases per hit to a max of !1 seconds.",
    "On Hit: One target at a time is Marked-For-Death, causing all damage taken to be mini-crits",
    "Mini-crits targets launched airborne by explosions, grapple hooks or rocket packs",
    "Attacks pierce damage resistance effects and bonuses",
    "Crits on headshot"
];
let DmgNeg = [
    "-!1% Damage Penalty",
    "-!1% Slower Firing Speed",
    "-!1% Damage Penalty to buildings",
    "-!1% Damage Penalty when above 50% HP",
    "-!1% Damage Penalty when under 50% HP",
    "-!1 Health on Hit",
    "-!1% Max Health lose on Hit",
    "On Miss: Hit yourself. Idiot.",
    "No headshots"
];
let ClipPos =[
    "On kill: +!1 clip size",
    "+!1 clip size",
    "+!1% clip size"
];
let ClipNeg = [
    "-!1 clip size",
    "-!1% clip size",
    "On kill: -!1 clip size",
];
let BuffPos = [
    "+!1 Health Regenerated while active",
    "+!1 Health Regenerated",
    "+!1 Max Health",
    "+!1% Max Health",
    "!1% Shorter Swap Speed",
    "+!1% Fire Resistence",
    "+!1% Fire Resistence while Deployed",
    "+!1% Explosive Resistence",
    "+!1% Explosive Resistence while Deployed",
    "+!1% Bullet Resistence",
    "+!1% Bullet Resistence while Deployed",
    "+!1% Melee Resistence",
    "+!1% Melee Resistence while Deployed",
    "+!1% Damage Resistence",
    "+!1% Damage Resistence while Deployed",
    "+!1% Move Speed",
    "+!1% Move Speed while Deployed",
    "+!1% increased air Control",
    "+!1% greater jump height when active",
    "+!1% bonus healing from all sources",
    "+!1% bonus healing from Medic sources",
    "+!1% bonus healing from MedPacks",
];
let BuffNeg = [
    "-!1 Health Drain while active",
    "-!1 Health Drain",
    "-!1 Max Health",
    "-!1% Max Health",
    "!1% Longer Swap Speed",
    "-!1% Fire Resistence",
    "-!1% Fire Resistence while Deployed",
    "-!1% Explosive Resistence",
    "-!1% Explosive Resistence while Deployed",
    "-!1% Bullet Resistence",
    "-!1% Bullet Resistence while Deployed",
    "-!1% Melee Resistence",
    "-!1% Melee Resistence while Deployed",
    "-!1% Damage Resistence",
    "-!1% Damage Resistence while Deployed",
    "-!1% Move Speed",
    "-!1% Move Speed while Deployed",
    "-!1% decreased air Control",
    "-!1% lesser jump height when active",
    "-!1% healing from all sources",
    "-!1% healing from Medic sources",
    "-!1% healing from MedPacks",
    "Maximum health is drained while item is active"
];

let ProjectilesPos = [
    "+!1 Projectiles",
    "+!1% Projectiles",
    "+!1% Projectile Speed",
    "+!1% Projectile Spread",
    "Fires a special bolt that can repair friendly buildings"
];
let ProjectilesNeg = [
    "-!1 Projectiles",
    "-!1% Projectiles",
    "-!1% Projectile Speed",
    "+!1% Projectile Spread"
];
let MeleePos = [
    "Melee attacks mini-crit while airborne.",
    "This Weapon has a large melee range and deploys and holsters slower",
    "!1% increased melee attack range"
];
let MeleeNeg = [
    "!1% decreased melee attack range"
];
let Charge = [
    "Generate Rage by dealing damage. When fully charged, press the Special-Attack key to activate knockback",
    "Build energy by healing teammates. When fully charged, press the Special-Attack key to deploy a frontal projectile shield.",
];


//Methods
function GenerateWeapon(){
    let targetClass = GetRandom(classes);
    console.log(targetClass);
    let weapon = GetRandom(targetClass.weapons);
    console.log(weapon)

    buffs = GetStats(weapon);
    console.log(buffs)

    let hasCharge = Math.floor(Math.random() * 10) == 0;
    let pos = [FormatText(GetRandom(buffs.positive))];
    let neg = [FormatText(GetRandom(buffs.negative))];

    for(let i = 0; i < 3; i++){
        if(Math.floor(Math.random() * 4) == 0){
            pos.push(FormatText(GetRandom(buffs.positive)));
        }
        if(Math.floor(Math.random() * 4) == 0){
            neg.push(FormatText(GetRandom(buffs.negative)));
        }
    }

    let newWeapon = {
        className: targetClass.name,
        type: weapon,
        positives: pos,
        negatives: neg,
        charge: hasCharge? FormatText(GetRandom(Charge)) : null
    };
    DisplayWeapon(newWeapon);
}

function DisplayWeapon(weapon){
    console.log(weapon);
    //main
    document.querySelector("#class").innerText = weapon.className;
    document.querySelector("#weapon").innerText = weapon.type;
    document.querySelector("#positive").innerHTML = "";
    weapon.positives.forEach(element => {
        document.querySelector("#positive").innerHTML += `<li>${element}</li>`;
    });
    document.querySelector("#negative").innerHTML = "";
    weapon.negatives.forEach(element => {
        document.querySelector("#negative").innerHTML += `<li>${element}</li>`;
    });
    document.querySelector("#charge").innerText = weapon.charge != null ? weapon.charge : "";

    //history
    document.querySelector("#history").innerHTML += `
    <p id="class">${weapon.className}</p>
    <p id="weapon">${weapon.type}</p>
    <p id="charge">${weapon.charge != null ? weapon.charge : ""}</p>
    <ul id="positive">`
    weapon.positives.forEach(element => {
        document.querySelector("#history").innerHTML += `<li>${element}</li>`;
    });
    document.querySelector("#history").innerHTML += 
    `</ul>
    <ul id="negative">`
    weapon.negatives.forEach(element => {
        document.querySelector("#history").innerHTML += `<li>${element}</li>`;
    });
    document.querySelector("#history").innerHTML += 
    `</ul> <br />`
}

function GetRandom(value){
    return value[Math.floor(Math.random() * value.length)];
}

function FormatText(text){
    return text.replace("!1", Math.floor(Math.random() * 100)+1);
}

//returns two arrays in one object. A list of positive buffs and a list of negative debuffs
function GetStats(weaponType) {
    const positive = GetWeaponBuffs(weaponType);
    const negative = GetWeaponDebuffs(weaponType);

    return { positive, negative };
}

//returns an array of all possible buffs
function GetWeaponBuffs(weaponType){
    if (weaponType === 'Shotgun') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Pistol') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Drink') {
        return [...BuffPos];
    } else if (weaponType === 'Thrown') {
        return [...DmgPos, ...BuffPos];
    } else if (weaponType === 'Melee') {
        return [...DmgPos, ...BuffPos];
    } else if (weaponType === 'Rocket') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Banner') {
        return [...BuffPos];
    } else if (weaponType === 'Boots') {
        return [...BuffPos];
    } else if (weaponType === 'Flame Thrower') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Flare Gun') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Back') {
        return [...BuffPos];
    } else if (weaponType === 'Grenade Launcher') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Stickybomb') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Shield') {
        return [...BuffPos];
    } else if (weaponType === 'Minigun') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Lunchbox') {
        return [...BuffPos];
    } else if (weaponType === 'Wrangler') {
        return [...BuffPos];
    } else if (weaponType === 'Robot Arm') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Wrench') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Syringe Gun') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Medi Gun') {
        return [...BuffPos];
    } else if (weaponType === 'Sniper Rifle') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Bow') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'SMG') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Revolver') {
        return [...DmgPos, ...ClipPos, ...BuffPos];
    } else if (weaponType === 'Knife') {
        return [...DmgPos, ...BuffPos];
    } else if (weaponType === 'Watch') {
        return [...BuffPos];
    } else if (weaponType === 'Sapper') {
        return [...BuffPos];
    } else {
        console.log("Unknown weapon type");
        return []
    }
}
//returns an array of all possible debuffs
function GetWeaponDebuffs(weaponType) {
    if (weaponType === 'Shotgun') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Pistol') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Drink') {
        return [...BuffNeg];
    } else if (weaponType === 'Thrown') {
        return [...DmgNeg, ...BuffNeg];
    } else if (weaponType === 'Melee') {
        return [...DmgNeg, ...BuffNeg];
    } else if (weaponType === 'Rocket') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Banner') {
        return [...BuffNeg];
    } else if (weaponType === 'Boots') {
        return [...BuffNeg];
    } else if (weaponType === 'Flame Thrower') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Flare Gun') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Back') {
        return [...BuffNeg];
    } else if (weaponType === 'Grenade Launcher') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Stickybomb') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Shield') {
        return [...BuffNeg];
    } else if (weaponType === 'Minigun') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Lunchbox') {
        return [...BuffNeg];
    } else if (weaponType === 'Wrangler') {
        return [...BuffNeg];
    } else if (weaponType === 'Robot Arm') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Wrench') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Syringe Gun') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Medi Gun') {
        return [...BuffNeg];
    } else if (weaponType === 'Sniper Rifle') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Bow') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'SMG') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Revolver') {
        return [...DmgNeg, ...ClipNeg, ...BuffNeg];
    } else if (weaponType === 'Knife') {
        return [...DmgNeg, ...BuffNeg];
    } else if (weaponType === 'Watch') {
        return [...BuffNeg];
    } else if (weaponType === 'Sapper') {
        return [...BuffNeg];
    } else {
        console.log("Unknown weapon type");
        return [];
    }
}