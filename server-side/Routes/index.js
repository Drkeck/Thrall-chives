const clientForm = require('./newClientForm.js');
const profile = require('./Profile.js');

async function routeManager (args, tree) {
    console.log(tree)
    switch (args) {
        case "newClient":
            return clientForm()
        case "Profile":
        case "FindClient":
            //thing
            return profile()
        case "home":
        case "back":
            // completely random thought but make a game where you unlock the guide showing the hidden treasures by leveling up.
            // could make it a path to gear a specific way (good example would be a tutorial, or a seasonal event.)
            // or you can make the entire path moduler..
            // this is just rougelights, but we need to implament it deeper, make it a rougeHEAVY where we write possible ways the game plays out depending on what abilities you lucked into
            // this could be an interesting considering everyone's play experience would be unique making the replayability immense.
            // kinda like dark souls style too, where its more about how you use the base tools you are given.
            // could get really creative with the equipables too.
            // would have to break it up into loot tables, granted it still would be fun to have a chance at broken abilities right off the bat.
            // could tweak the precentages dependent on difficulty.
            // this is basically risk of rains items but with abilities. the complete random shuffle is if the player has specific abilities.
            // new game plus would just be collecting all the abilities over random rng events making it possible to change the story outcome based on what you have equiped at what time.
            // this effectively makes a game with an infinate amout of time lines
            // a sequal to this would be a nightmare to make.


            // another idea, make a encryption method to store data that only the acting users can access and read, like an information vault.
            // since every encryption would be random with the guidelines for said randomness would be random in its self decrypting any information from users would basically be moot, you would need the key
            // this sort of encrryption probabaably already exists. (ps. could encrypt every single message this way so it would basically be changing its patterns making it even harder to decode)

            // i wonder if you could make a central library for language basically building it down to a series of numbers that you pull from to formulate a word, a sentence, a paragraph, a.... this is just encryption.
            return "back"
        default:
            return
    }

}
module.exports = routeManager