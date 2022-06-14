function getWorld() {
return{
    rooms : [
        {
            "Name" : "Canteen",
            "Description" : "a round dining table in the centre, there is a Terminal on the other side, but you cannot access it you will have to use your keycard to access the main control terminal on the command deck",
            "East" : "Escape Pods",
            "West" : "Hyper Sleep Vault",
            "South" : "Bridge",
            "DoorWest" : "keycard"
        },
        {
            "Name" : "Escape Pods",
            "West" : "Canteen",
            "Items" : ["keycard","M314 motion tracker" ]
        },
        {
            "Name" : "Hyper Sleep Vault",
            "East" : "Canteen",
            "Objects" : ["flamethrower"],
        },
        {
            "Name" : "Command Deck",
            "Description": "",
            "North" : "Canteen",
            "South" : " Narcissus",
            "DoorSouth" : "keycard",
            "East" : "Basement",
        },
        {
            "Name" : "Basement",
        },
        {
            "Name" : " Narcissus",
            "GameWin" : true
        }

    ]};
}