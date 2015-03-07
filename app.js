(function () {
    'use strict';
    var Game,
        Deck,
        Player,
        Tokens;
    Game = {
        players: [],
        decks: [],
        activePlayerId: 0,
        lastRound: false,
        gamebody: document.querySelector('#gamebody'),
        getActivePlater: function () {
            return this.players[this.activePlayerId];
        },
        nextPlayer: function () {
            if (++this.activePlayerId >= this.players.length) {
                if (this.lastRound) {
                    alert('game ended');
                    alert(this.gameResult());
                }
                this.activePlayerId = 0;
            }
            this.getActivePlater().setActiveState(true);
        },
        gameResult: function () {
            this.players.sort(function (a, b) {
                if (a.prestige > b.prestige) {
                    return 1;
                }
                if (a.prestige < b.prestige) {
                    return 1;
                }
                if (a.cardsCounter < b.cardsCounter) {
                    return 1;
                }
                if (a.cardsCounter > b.cardsCounter) {
                    return 1;
                }
                return 0;
            });
            var result = 'Game result:';
            this.players.forEach(function(player, idx){
                result += "\n" + (idx+1) + ' ' + player.name + ' (prestige points: ' + player.prestigePoints + ', cards: ' + player.cardsCounter + ')';
            });
            return result;
        }
    };
    window.g = Game;

    Tokens = {
        tokens: [0, 0, 0, 0, 0, 0],
        activeTokens: [0, 0, 0, 0, 0, 0],
        elements: [],
        tokensReturned: function (idx, value) {
            this.tokens[idx] += value;
            this.elements[idx].innerHTML = this.tokens[idx];
            console.log('GAME.tokens', this.tokens);
        },
        adjustTokens: function (players) {
            var a = players === 4 ? 7 : players === 3 ? 5 : 4;
            this.tokens = [a, a, a, a, a, 5];
        },
        renderTokens: function (target) {
            var i,
                wrapper = document.createElement('div'),
                self = this,
                clickHandler = function (tokenId) {
                    return function () {
                        var firstAt = self.activeTokens.indexOf(1);
                        var secondAt = firstAt > -1 ? self.activeTokens.indexOf(1, firstAt + 1) : -1;
                        var player = Game.getActivePlater();
                        if (firstAt === -1) {
                            self.activeTokens[tokenId] = 1;
                            self.pickUpToken(tokenId);
                        } else if (self.activeTokens[tokenId] === 1 && secondAt === -1 && self.tokens[tokenId] > 2) {
                            self.activeTokens[tokenId] = 0;
                            self.pickUpToken(tokenId);
                            player.tokens[tokenId] += 2;
                            player.updateDetails().endTurn();
                        } else if (self.activeTokens[tokenId] !== 1) {
                            if (self.activeTokens.indexOf(1, firstAt + 1) > -1) {
                                self.activeTokens[firstAt] = 0;
                                player.tokens[firstAt] ++;
                                self.activeTokens[secondAt] = 0;
                                player.tokens[secondAt] ++;
                                self.pickUpToken(tokenId);
                                player.tokens[tokenId] ++;
                                player.updateDetails().endTurn();
                            } else {
                                self.activeTokens[tokenId] = 1;
                                self.pickUpToken(tokenId);
                            }
                        }
                        //TODO: update player tokens + alerts
                    };
                };
            wrapper.classList.add('tokens');
            for (i = 0; i < 5; i++) {
                this.elements[i] = document.createElement('div');
                this.elements[i].innerHTML = this.tokens[i];
                this.elements[i].addEventListener('click', clickHandler(i));
                this.elements[i].classList.add('token');
                this.elements[i].classList.add('token-type' + i);
                wrapper.appendChild(this.elements[i]);
            }
            this.elements[i] = document.createElement('div');
            this.elements[i].innerHTML = this.tokens[i];
            this.elements[i].classList.add('token');
            this.elements[i].classList.add('token-type' + i);
            wrapper.appendChild(this.elements[i]);
            target.appendChild(wrapper);
        },
        pickUpToken: function (idx) {
            this.tokens[idx] --;
            this.elements[idx].innerHTML = this.tokens[idx];
        }
    };

    function initGame() {
        if (!splendorContents) {
            console.error('Missing game content! [cards.js]');
            return;
        }
        initPlayers([
            {
                name: 'Aaaa',
                color: '#ccf'
            },
            {
                name: 'Bbbb',
                color: '#eee'
            }
        ]);
        initDecks(splendorContents);
        Tokens.adjustTokens(1);
        initBoard();
    }

    function initPlayers(options) {
        options = options || [];
        options.forEach(function (data) {
            data.idx = Game.players.length;
            var player = new Player(data);
            Game.players.push(player);
            //player.createGameArea(Game.gamebody);
        });
        //Game.players[0].setActiveState(true);
    }

    function initDecks(cards) {
        shuffleDeck(cards.nobles);
        cards.decks.forEach(function (deckId) {
            shuffleDeck(cards[deckId]);
            Game.decks.push(new Deck(cards[deckId], Game.decks.length));
        });
    }

    function initBoard() {
        Game.players.forEach(function (player) {
            player.createGameArea(Game.gamebody);
        });
        Game.players[0].setActiveState(true);
        Game.decks.forEach(function (deck) {
            deck.createDeckArea(Game.gamebody);
        });
        Tokens.renderTokens(Game.gamebody);
    }

    function shuffleDeck(deck) {
        deck.sort(function () {
            return 0.5 - Math.random();
        });
    }

    Player = function (options) {
        var self = this;
        this.name = options.name || 'Player ' + options.idx;
        this.color = options.color || false;
        this.idx = options.idx;
        this.prestigePoints = 0;
        this.cardsTotalBonus = [0, 0, 0, 0, 0];
        this.cardsCounter = 0;
        this.reservedCards = [];
        this.tokens = [0, 0, 0, 0, 0, 0];
        this.createGameArea = function (target) {
            var name = document.createElement('h1');
            name.innerHTML = this.name;
            self.element = document.createElement('div');
            self.element.appendChild(name);
            self.element.classList.add('playerArea');
            if (self.color) {
                self.element.style.backgroundColor = self.color;
            }
            self.detailsElement = document.createElement('div');
            self.element.appendChild(self.detailsElement);
            target.appendChild(self.element);
            self.updateDetails();
        };
        this.updateDetails = function () {
            self.detailsElement.innerHTML = JSON.stringify(self.tokens) + '<br/>' + JSON.stringify(self.cardsTotalBonus) + '<br/>' + self.prestigePoints;
            return self;
        };
        this.endTurn = function () {
            console.log('nextP');
            self.setActiveState(false);
            if (self.prestigePoints > 15) {
                Game.lastRound = true;
                alert(self.name + ' wygral! (prawie)');
                Game.nextPlayer();
            } else {
                Game.nextPlayer();
            }

            return self;
        };
        this.setActiveState = function (active) {
            if (active) {
                this.element.classList.add('playerArea--active');
            } else {
                this.element.classList.remove('playerArea--active');
            }
        };
        this.canAfford = function (card) {
            var sum = 0,
                needed;
            needed = card.cost.map(function (cost, idx) {
                var needed = 0;
                if (self.cardsTotalBonus[idx] + self.tokens[idx] < cost) {
                    needed = cost - self.cardsTotalBonus[idx] - self.tokens[idx];
                    sum += needed;
                }
                return needed;
            });
            console.warn(card.cost, self.cardsTotalBonus, self.tokens);
            console.log(sum, needed, self.tokens[5]);
            if (self.tokens[5] < sum) {
                return {
                    result: false,
                    needed: needed
                };
            }
            return {
                result: true
            };
        };
        this.payForCard = function (card) {
            card.cost.forEach(function (cost, idx) {
                cost -= self.cardsTotalBonus[idx];
                if (cost > 0) {
                    console.log('use tokens');
                    if (self.tokens[idx] >= cost) {
                        self.tokens[idx] -= cost;
                        console.log('paid with tokens', cost);
                        Tokens.tokensReturned(idx, cost);
                        cost = 0;
                    } else if (self.tokens[5] >= cost - self.tokens[idx]) {
                        cost -= self.tokens[idx];
                        console.log('paid with tokens', self.tokens[idx]);
                        Tokens.tokensReturned(idx, self.tokens[idx]);
                        self.tokens[idx] = 0;
                        self.tokens[5] -= cost;
                        console.log('paid with gold', cost);
                        Tokens.tokensReturned(5, cost);
                        cost = 0;
                    }
                }
            });
        };
        this.drawCard = function (deck, cardId, slotId) {
            var card = deck.cards[cardId];
            var canAfford = self.canAfford(card);
            if (canAfford.result) {
                console.log('yay! new card');
                self.cardsCounter++;
                self.payForCard(card);
                card.bonus.forEach(function (bonus, idx) {
                    self.cardsTotalBonus[idx] += bonus;
                });
                self.prestigePoints += card.prestige;
                card.player = self.idx;
                deck.updateCardDetails(slotId);
                self.updateDetails().endTurn();
                //TODO: update Nobles
            } else {
                var r = confirm("Would you like to reserve a development card?");
                if (r === true) {
                    if (self.reservedCards.length < 4) {
                        self.reservedCards.push();
                        self.tokens[5]++;
                        Tokens.pickUpToken(5);
                        deck.updateCardDetails(slotId);
                        self.updateDetails().endTurn();
                    } else {
                        alert('Sorry. You already have 3 reserved cards!');   
                    }
                }
            }
        };
    };

    Deck = function (cards, idx) {
        this.cards = cards || [];
        this.idx = idx;
        this.elements = {};
        this.activeCards = 0;
        this.createDeckArea = function (target) {
            var i,
                self = this,
                clickHandler,
                element;
            clickHandler = function (slotId) {
                return function (event) {
                    console.log('clicked', slotId);
                    var cardId = event.currentTarget.dataset.cardId;
                    if (cardId > -1) {
                        Game.getActivePlater().drawCard(self, cardId, slotId);
                    }
                };
            };
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.classList.add('deck-wrapper');
            this.elements.deck = document.createElement('div');
            this.elements.deck.classList.add('deck');
            this.elements.wrapper.appendChild(this.elements.deck);
            this.elements.wrapper.appendChild(this.elements.deck);
            this.elements.slots = [];
            for (i = 0; i < 4; i++) {
                element = document.createElement('div');
                this.elements.wrapper.appendChild(element);
                this.elements.slots.push(element);
                this.elements.slots[i].dataset.deckId = this.idx;
                this.elements.slots[i].classList.add('card-slot');
                this.elements.slots[i].addEventListener('click', clickHandler(i));
                this.updateCardDetails(i);
                target.appendChild(this.elements.wrapper);
            }
        };
        this.drawCard = function (playerId) {
            if (this.activeCards < this.cards.length) {
                this.cards[this.activeCards].player = playerId || -1;
                this.cards[this.activeCards].id = this.activeCards;
                return this.cards[this.activeCards++];
            } else {
                return false;
            }
        };
        this.updateCardDetails = function (slotId) {
            var card = this.drawCard();
            if (card) {
                this.elements.slots[slotId].dataset.cardId = card.id;
            } else {
                this.elements.slots[slotId].dataset.cardId = -1;
            }
            this.elements.slots[slotId].innerHTML = '' /*slotId + JSON.stringify(card)*/ ;
            this.renderCardBonus(this.elements.slots[slotId], card.bonus);
            this.renderCardCost(this.elements.slots[slotId], card.cost);
            this.renderCardPrestige(this.elements.slots[slotId], card.prestige);
        };
        this.renderCardBonus = function (target, bonus) {
            bonus = bonus || [];
            target.dataset.bonus = bonus.indexOf(1);
        };
        this.renderCardPrestige = function (target, prestige) {
            prestige = prestige || 0;
            var element;
            if (prestige > 0) {
                element = document.createElement('div');
                element.classList.add('card-prestige');
                element.dataset.prestige = prestige;
                target.appendChild(element);
            }
        };
        this.renderCardCost = function (target, cost) {
            var parent;
            if (cost && cost.length === 5) {
                parent = document.createElement('div');
                parent.classList.add('card-cost-wrapper');
                cost.forEach(function (item, idx) {
                    var element;
                    if (item) {
                        element = document.createElement('div');
                        element.classList.add('card-cost');
                        element.classList.add('card-cost--type' + idx);
                        element.dataset.value = item;
                        parent.appendChild(element);
                    }
                });
                target.appendChild(parent);
            }
        };
        console.log(cards);
    };

    initGame();
})();