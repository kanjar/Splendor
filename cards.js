var splendorContents = {
    /*bonuses: {
        white: 0,
        blue: 1,
        green: 2,
        red: 3,
        black: 4,
        gold: 5
    },*/
    decks: ['deck1', 'deck2', 'deck3'],
    deck1: [{
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 3, 0, 0, 0]
    }, {
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 0, 2, 1]
    }, {
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 1, 1, 1, 1]
    }, {
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 2, 0, 0, 2]
    }, {
        prestige: 1,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 4, 0, 0]
    }, {
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 1, 2, 1, 1]
    }/*, {
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 2, 2, 0, 1]
    }, {
        prestige: 0,
        bonus: [1, 0, 0, 0, 0],
        cost: [3, 1, 0, 0, 1]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [1, 0, 0, 0, 2]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 0, 0, 0, 3]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [1, 0, 1, 1, 1]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 0, 2, 0, 2]
    }, {
        prestige: 1,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 0, 0, 4, 0]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [1, 0, 1, 2, 1]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [1, 0, 2, 2, 0]
    }, {
        prestige: 0,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 1, 3, 1, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [2, 1, 0, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 0, 0, 3, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [1, 1, 0, 1, 1]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 2, 0, 2, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 0, 0, 0, 4]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [1, 1, 0, 1, 2]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 1, 0, 2, 2]
    }, {
        prestige: 0,
        bonus: [0, 0, 1, 0, 0],
        cost: [1, 3, 1, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 2, 1, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [3, 0, 0, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [1, 1, 1, 0, 1]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [2, 0, 0, 2, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 0, 1, 0],
        cost: [4, 0, 0, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [2, 1, 1, 0, 1]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [2, 0, 1, 0, 2]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 1, 0],
        cost: [1, 0, 0, 1, 3]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 2, 1, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 3, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [1, 1, 1, 1, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [2, 0, 2, 0, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 4, 0, 0, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [1, 2, 1, 1, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [2, 2, 0, 1, 0]
    }, {
        prestige: 0,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 1, 3, 1]
    }*/],
    deck2: [{
        prestige: 2,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 0, 5, 0]
    }, {
        prestige: 3,
        bonus: [1, 0, 0, 0, 0],
        cost: [6, 0, 0, 0, 0]
    }, {
        prestige: 1,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 3, 2, 2]
    }, {
        prestige: 2,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 1, 4, 2]
    }, {
        prestige: 1,
        bonus: [1, 0, 0, 0, 0],
        cost: [2, 3, 0, 3, 0]
    }, {
        prestige: 2,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 0, 5, 3]
    }, {
        prestige: 2,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 5, 0, 0, 0]
    }, {
        prestige: 3,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 6, 0, 0, 0]
    }, {
        prestige: 1,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 2, 2, 3, 0]
    }, {
        prestige: 2,
        bonus: [0, 1, 0, 0, 0],
        cost: [2, 0, 0, 1, 4]
    }, {
        prestige: 1,
        bonus: [0, 1, 0, 0, 0],
        cost: [0, 2, 3, 0, 3]
    }, {
        prestige: 2,
        bonus: [0, 1, 0, 0, 0],
        cost: [5, 3, 0, 0, 0]
    }, {
        prestige: 2,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 0, 5, 0, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 0, 6, 0, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 1, 0, 0],
        cost: [2, 3, 0, 0, 2]
    }, {
        prestige: 1,
        bonus: [0, 0, 1, 0, 0],
        cost: [3, 0, 2, 3, 0]
    }, {
        prestige: 2,
        bonus: [0, 0, 1, 0, 0],
        cost: [4, 2, 0, 0, 1]
    }, {
        prestige: 2,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 5, 3, 0, 0]
    }, {
        prestige: 2,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 0, 0, 0, 5]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 0, 0, 6, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 0, 1, 0],
        cost: [2, 0, 0, 2, 3]
    }, {
        prestige: 2,
        bonus: [0, 0, 0, 1, 0],
        cost: [1, 4, 2, 0, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 3, 0, 2, 3]
    }, {
        prestige: 2,
        bonus: [0, 0, 0, 1, 0],
        cost: [3, 0, 0, 0, 5]
    }, {
        prestige: 2,
        bonus: [0, 0, 0, 0, 1],
        cost: [5, 0, 0, 0, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 0, 0, 6]
    }, {
        prestige: 1,
        bonus: [0, 0, 0, 0, 1],
        cost: [3, 2, 2, 0, 0]
    }, {
        prestige: 2,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 1, 4, 2, 0]
    }, {
        prestige: 1,
        bonus: [0, 0, 0, 0, 1],
        cost: [3, 0, 3, 0, 2]
    }, {
        prestige: 2,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 5, 3, 0]
    }],
    deck3: [{
        prestige: 4,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 0, 0, 0, 7]
    }, {
        prestige: 5,
        bonus: [1, 0, 0, 0, 0],
        cost: [3, 0, 0, 0, 7]
    }, {
        prestige: 4,
        bonus: [1, 0, 0, 0, 0],
        cost: [3, 0, 0, 3, 6]
    }, {
        prestige: 3,
        bonus: [1, 0, 0, 0, 0],
        cost: [0, 3, 3, 5, 3]
    }, {
        prestige: 4,
        bonus: [0, 1, 0, 0, 0],
        cost: [7, 0, 0, 0, 0]
    }, {
        prestige: 5,
        bonus: [0, 1, 0, 0, 0],
        cost: [7, 3, 0, 0, 0]
    }, {
        prestige: 4,
        bonus: [0, 1, 0, 0, 0],
        cost: [6, 3, 0, 0, 3]
    }, {
        prestige: 3,
        bonus: [0, 1, 0, 0, 0],
        cost: [3, 0, 3, 3, 5]
    }, {
        prestige: 4,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 7, 0, 0, 0]
    }, {
        prestige: 5,
        bonus: [0, 0, 1, 0, 0],
        cost: [0, 7, 3, 0, 0]
    }, {
        prestige: 4,
        bonus: [0, 0, 1, 0, 0],
        cost: [3, 6, 3, 0, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 1, 0, 0],
        cost: [5, 3, 0, 3, 3]
    }, {
        prestige: 4,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 0, 7, 0, 0]
    }, {
        prestige: 5,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 0, 7, 3, 0]
    }, {
        prestige: 4,
        bonus: [0, 0, 0, 1, 0],
        cost: [0, 3, 6, 3, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 1, 0],
        cost: [3, 5, 3, 0, 3]
    }, {
        prestige: 4,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 0, 7, 0]
    }, {
        prestige: 5,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 0, 7, 3]
    }, {
        prestige: 4,
        bonus: [0, 0, 0, 0, 1],
        cost: [0, 0, 3, 6, 3]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 1],
        cost: [3, 3, 5, 3, 0]
    }],
    nobles: [{
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [3, 3, 0, 0, 3]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [0, 3, 3, 3, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [3, 0, 0, 3, 3]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [0, 0, 4, 4, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [0, 4, 4, 0, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [0, 0, 0, 4, 4]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [4, 0, 0, 0, 4]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [3, 3, 3, 0, 0]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [0, 0, 3, 3, 3]
    }, {
        prestige: 3,
        bonus: [0, 0, 0, 0, 0],
        cost: [4, 4, 0, 0, 0]
    }]
};
