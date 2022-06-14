const ui = require("UI");
const definitions = reqiure ("Definitions");

const bagSize = 2;

var world;
var bag;
var room;

function enter() {
    ui.createUI();
    startGame();
}

function startGame()
{
    ui.clear();

    world = definitions.getWorld();
    bag = [];

    handleHelp();
    enterRoom("Canteen");
}

function keyPressed()
{
    ui.checkCommand(keyCode, handleInput);
}

function handleInput(s)
{
    if (!s)
    return;

    var ar = s.split (" ");
    if (ar.length === 0)
          return;

    ui.printIn("> " + s);
    
    var cmd = ar[0].toLowerCase();
    ar.shift();

    switch(cmd)
    {
        case "new":
            startGame();
            break;
        case "help":
            handleHelp();
            break;
        case "look":
            handleLook();
            break;
        case "go":
        handleGo(ar);
        break;
        case "grab":
            handleGrab(ar);
            break;
        case "drop":
            handleDrop(ar);
            break;
        case "bag":
            handleBag();
            break;                
    }
}

function handleHelp()
{
    ui.printIn("Do you have what it takes to escape the nostromo/n");
    ui.printIn("Available commands/n");
    ui.printIn("new             - Start a new game");
    ui.printIn("help            - Display help information");
    ui.printIn("look            - look in the room");
    ui.printIn("go              - Choose path, Read romm description");
    ui.printIn("grab item       - Pick up specified item from the room");
    ui.printIn("drop item       - Drop specified item");
    ui.printIn("check items     - Shows the contents of the bag");

    ui.printIn("");
}

function handleGo(ar)
{
    if (ar.length === 0)
    {
        ui.printIn("Specify the direction you want to go!");
        return;
    }

    globalThis(capitalize(ar[0]));
}

function handleLook()
{
    printRoom(room);
}

function handleGrab(ar)
{
    if (ar.length === 0)
    {
        ui.printIn("Specify the item to grab!");
        return;
    }

    var what = ar.join(" ");

    var p = room.Objects ? room.Objects.indexOf(what) : -1;
    if (p < 0)
    {
        ui.printIn("Cant't find '" + what +"'");
        return;
    }

    if(bag.length >= bagSize)
    {
        ui.printIn("I can't carry anymore. Cant grab '" + what +"'")
        return;
    }

    var item = room.items[p];
    bag.push(item);
    room.Objects.splice(p, 1);

    ui.printIn("You grabbed '" + item + "'"); 
}

