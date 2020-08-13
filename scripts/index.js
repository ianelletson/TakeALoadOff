console.log("Hellow world!")

Hooks.on("init", function() {
    console.log("This runs on init");
});

Hooks.on("ready", function() {
    console.log("This runs once core init is read and game data is available")
});
