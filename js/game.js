// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "farm.gif",
    levels: {

        start: {
            message: "Your on a farm and you want potatos",
            choices: [
                {
                    text: "Walk to the Farmer",
                    nextLevel: "Farm",
                },

                {
                    text: "Walk to the dog",
                    nextLevel: "Dead",
                },
            ]
        },

        Farm: {
            background_image: "forest.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have permission find potatos!",
            choices: [
                {
                    text: "Speak to the farmer",
                    nextLevel: "Produce",
                },
                {
                    text: "Look around",
                    nextLevel: "Dead",
                },
            ]
        },
Produce: {
            background_image: "produce.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Ask kindly to see potatos",
            choices: [
                {
                    text: "Ask to see produce",
                    nextLevel: "vegetables",
                },
                {
                    text: "Demand to see potatos",
                    nextLevel: "Dead",
                },
            ]
        },
   vegetables: {
            background_image: "source.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "What was a potato again?",
            choices: [
                {
                    text: "talk to vegetables",
                    nextLevel: "OnePotato",
                },
                {
                    text: "talk to fruits",
                    nextLevel: "Dead",
                },
            ]
        },
       OnePotato: {
            background_image: "giphy.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You want to get as many as possible**FLASH WARNING**",
            choices: [
                {
                    text: "Ask to many potatos",
                    nextLevel: "DancingPotato",
                },
                {
                    text: "Demand to see leader",
                    nextLevel: "Dead",
                },
            ]
        },
       DancingPotato: {
            background_image: "dancing_potatos.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You Won magic potatos!",
            choices: [
                {
                    text: "You Won",
                    nextLevel: "start",
                },
             
            ]
        },
        
  
        Dead: {
             background_image: "shaving_potatos.gif",
            message: "You have been turned into a potaot who shaved himself",
            choices: [
                {
                    text: "you have basically died",
                    nextLevel: "start",
                },
            ]
        },


    }
};
