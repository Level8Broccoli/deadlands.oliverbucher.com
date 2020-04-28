'use strict';

Vue.component('overview', {
    template: `
        <div class="message is-dark">
            <div class="message-header">
                <p>
                    Übersicht
                    <span>{{ characterName }}</span>
                </p>
            </div>
            <div class="message-body">
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control" v-for="entry in overviewListWithoutGoals">
                        <div class="tags has-addons">
                            <span class="tag is-dark">{{ entry.name }}</span>
                            <span class="tag">{{ entry.value }}{{ entry.additional }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['overviewListWithoutGoals', 'charSave'],
    computed: {
        characterName() {
            return this.charSave.name ? `für ${this.charSave.name}` : '';
        },
    }

});

Vue.component('tabbar', {
    template: `
        <div class="tabs">
            <ul>
                <li v-for="tab in listOfTabs" :class="tab.id == currentTab ? 'is-active' : ''">
                    <a @click="changeTab(tab.id)">{{ tab.name }} &nbsp; <span v-if="!isNaN(tab.value)" class="tag" :class="tab.goal !== tab.value ? 'is-danger' : 'is-success'">{{ tab.value }}</span>
                    </a>
                </li>
            </ul>
        </div>
    `,
    props: ['currentTab', 'listOfTabs'],
    methods: {
        changeTab(id) {
            this.$emit('change-tab', id);
        }
    }
});

Vue.component('charinfo', {
    template: `
<div>
    <h2 class="subtitle">{{ meta.name }}</h2>
    <div class="field">
        <label class="label">Charaktername</label>
        <div class="control">
            <input class="input" type="text" v-model="charSave.name">
        </div>
    </div>
    <div class="field">
        <label class="label">Notizen</label>
        <div class="control">
            <textarea class="textarea" v-model="charSave.notes" rows="20"></textarea>
        </div>
    </div>
</div>
    `,
    props: ['meta', 'charSave'],
});

Vue.component('attribute-entry', {
    template: `
<tbody>
    <tr>
        <td>
            <button :title="'Würfle ' + attribute.name" class="button is-info is-light is-small" @click="rollDice(attribute)">&#9850;</button>
        </td>
        <td>
            <a @click="show = !show">{{ attribute.name }}</a>
        </td>
        <td>
            <button class="button is-info" @click="buttonClick(4, attribute.id)">&hearts;</button>
        </td>
        <td>
            <button class="button" :class="renderButton(6, attribute.id)" @click="buttonClick(6, attribute.id)" v-html="getButtonContent(6, attribute.id)"></button>
        </td>
        <td>
            <button class="button" :class="renderButton(8, attribute.id)" @click="buttonClick(8, attribute.id)" v-html="getButtonContent(8, attribute.id)"></button>
        </td>
        <td>
            <button class="button" :class="renderButton(10, attribute.id)" @click="buttonClick(10, attribute.id)" v-html="getButtonContent(10, attribute.id)"></button>
        </td>
        <td>
            <button class="button" :class="renderButton(12, attribute.id)" @click="buttonClick(12, attribute.id)" v-html="getButtonContent(12, attribute.id)"></button>
        </td>
    </tr>
    <tr v-if="show">
        <td colspan="6">{{ attribute.descr }}</td>
    </tr>
</tbody>
    `,
    props: ['attribute', 'charSave'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        buttonClick(value, id) {
            this.$emit('button-click', {
                type: 'attribute',
                value,
                id
            });
        },
        renderButton(value, id) {
            const savedValue = this.charSave.attribute.liste[id];
            return value <= savedValue ? 'is-success' : 'is-light';
        },
        getButtonContent(value, id) {
            const savedValue = this.charSave.attribute.liste[id];
            return value <= savedValue ? '&hearts;' : '&times;';
        },
        rollDice(attribute) {
            const id = attribute.id;
            const savedValue = this.charSave.attribute.liste[id] || 4;
            this.$emit('roll-dice', {
                comment: `${attribute.name} (W${savedValue})`,
                dice: savedValue,
                wild: true
            });
        },
    },
});

Vue.component('attribute', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th></th>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>W4</th>
                <th>W6</th>
                <th>W8</th>
                <th>W10</th>
                <th>W12</th>
            </tr>
            <attribute-entry v-for="attribute in attributList" :attribute="attribute" :key="attribute.id" :charSave="charSave" @button-click="buttonClick" @roll-dice="rollDice" />
        </table>
    </div>
</div>
`,
    props: ['meta', 'attributList', 'charSave'],
    methods: {
        buttonClick(input) {
            this.$emit('button-click', input);
        },
        rollDice(obj) {
            this.$emit('roll-dice', obj);
        }
    },
});

Vue.component('fertigkeiten-entry', {
    template: `
<tbody>
    <tr>
        <td>
            <button class="button is-info is-light is-small" :title="'Würfle ' + fertigkeit.name" @click="rollDice(fertigkeit)">&#9850;</button>
        </td>
        <td>
            <a @click="reset(fertigkeit.id)" class="delete is-small"></a>
            <a @click="show = !show">{{ fertigkeit.name }}</a>
            <small>{{ fertigkeit.attr }}</small>
        </td>
        <td>
            <button v-if="fertigkeit.startValue" class="button is-link" @click="buttonClick(4, fertigkeit.id)">&hearts;</button>
            <button v-else class="button" @click="buttonClick(4, fertigkeit.id)" v-html="getButtonContent(4, fertigkeit.id)" :class="renderButton(4, fertigkeit)"></button>
        </td>
        <td>
            <button class="button" @click="buttonClick(6, fertigkeit.id)" v-html="getButtonContent(6, fertigkeit.id)" :class="renderButton(6, fertigkeit)"></button>
        </td>
        <td>
            <button class="button" :class="renderButton(8, fertigkeit)" @click="buttonClick(8, fertigkeit.id)" v-html="getButtonContent(8, fertigkeit.id)"></button>
        </td>
        <td>
            <button class="button" :class="renderButton(10, fertigkeit)" @click="buttonClick(10, fertigkeit.id)" v-html="getButtonContent(10, fertigkeit.id)"></button>
        </td>
        <td>
            <button class="button" :class="renderButton(12, fertigkeit)" @click="buttonClick(12, fertigkeit.id)" v-html="getButtonContent(12, fertigkeit.id)"></button>
        </td>
    </tr>
    <tr v-if="show">
        <td colspan="6">{{ fertigkeit.descr }}</td>
    </tr>
</tbody>
    `,
    props: ['fertigkeit', 'charSave'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        buttonClick(value, id) {
            this.$emit('button-click', {
                type: 'fertigkeit',
                value,
                id
            });
        },
        getButtonContent(value, id) {
            const savedValue = this.charSave.fertigkeiten.liste[id];
            return value <= savedValue ? '&hearts;' : '&times;';
        },
        reset(id) {
            this.$emit('reset-fertigkeit', id);
        },
        renderButton(value, fert) {
            const savedValue = this.charSave.fertigkeiten.liste[fert.id];

            const list = this.charSave.attribute.liste;
            let attrValue = 4;
            if (typeof list[fert.attr] !== 'undefined') {
                attrValue = list[fert.attr];
            }

            if (value <= savedValue) {
                return 'is-success';
            } else if (value > attrValue) {
                return 'is-danger is-light';
            } else {
                return 'is-light';
            }
        },
        rollDice(fertigkeit) {
            const id = fertigkeit.id;
            let savedValue = this.charSave.fertigkeiten.liste[id];
            let modifications = [];
            if (!savedValue && fertigkeit.startValue) {
                savedValue = 4;
            }
            if (!savedValue) {
                modifications.push({
                    name: 'Ungeübt',
                    value: -2
                });
                savedValue = 4;
            }
            this.$emit('roll-dice', {
                comment: `${fertigkeit.name} (W${savedValue})`,
                dice: savedValue,
                wild: true,
                modifications,
            });
        },
    },
});

Vue.component('fertigkeiten', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th></th>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>W4</th>
                <th>W6</th>
                <th>W8</th>
                <th>W10</th>
                <th>W12</th>
            </tr>
            <fertigkeiten-entry v-for="fertigkeit in fertigkeitenList" :fertigkeit="fertigkeit" :key="fertigkeit.id" :charSave="charSave" @button-click="buttonClick" @reset-fertigkeit="resetFertigkeit" @roll-dice="rollDice"/>
        </table>
    </div>
</div>
    `,
    props: ['meta', 'attributList', 'fertigkeitenList', 'charSave'],
    methods: {
        buttonClick(input) {
            this.$emit('button-click', input);
        },
        resetFertigkeit(input) {
            this.$emit('reset-fertigkeit', input);
        },
        rollDice(obj) {
            this.$emit('roll-dice', obj);
        }
    },

});

Vue.component('handicap-entry', {
    template: `
<tbody>
    <tr>
        <td>
            <a @click="show = !show">{{ handicap.name }}</a>
        </td>
        <td>
            <div v-if="handicap.tags" class="tags">
                <span class="tag" v-for="tag in handicap.tags" :class="tag === 'deadlands' ? 'is-danger is-light': ''">{{ tag }}</span>
            </div>
        </td>
        <td>
            <button v-if="handicap.points.includes(1)" class="button" :class="renderButton(1, handicap.id)" @click="buttonClick(1, handicap.id)" v-html="getButtonContent(1, handicap.id)"></button>
        </td>
        <td>
            <button v-if="handicap.points.includes(2)" class="button" :class="renderButton(2, handicap.id)" @click="buttonClick(2, handicap.id)" v-html="getButtonContent(2, handicap.id)"></button>
        </td>
    </tr>
    <tr v-if="show">
        <td colspan="4">{{ handicap.descr }}</td>
    </tr>
</tbody>
    `,
    props: ['handicap', 'charSave'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        renderButton(value, id) {
            const savedValue = this.charSave.handicaps.liste[id];

            if (value === savedValue) {
                return 'is-success';
            } else if (value === 2) {
                return 'is-danger is-light';
            } else {
                return 'is-light';
            }
        },
        buttonClick(value, id) {
            this.$emit('button-click', {
                type: 'handicap',
                value,
                id
            });
        },
        getButtonContent(value, id) {
            const savedValue = this.charSave.handicaps.liste[id];
            return value === savedValue ? '&hearts;' : '&times;';
        },
    },
});

Vue.component('handicaps', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>Tags</th>
                <th>Leicht</th>
                <th>Schwer</th>
            </tr>
            <handicap-entry v-for="handicap in handicapListe" :handicap="handicap" :key="handicap.id" :charSave="charSave" @button-click="buttonClick"/>
        </table>
    </div>
</div>
    `,
    props: ['handicapListe', 'meta', 'charSave'],
    methods: {
        showDescr(id) {
            this.$emit('show-descr', {
                type: 'handicap',
                id
            });
        },
        buttonClick(input) {
            this.$emit('button-click', input);
        },
    },
});

Vue.component('talent-entry', {
    template: `
<tbody>
    <tr>
        <td>
            <button class="button" :class="renderButton(talent.id)" @click="buttonClick(talent.id)" v-html="getButtonContent(talent.id)"></button>
        </td>
        <td>
            <a @click="show = !show">{{ talent.name }}</a>
        </td>
        <td>
            <div v-if="talent.tags" class="tags">
                <span class="tag" v-for="tag in talent.tags" :class="tag === 'deadlands' ? 'is-danger is-light': 'is-warning is-light'">{{ tag }}</span>
            </div>
        </td>
        <td>
            <div v-if="talent.req" class="tags">
                <span class="tag" v-for="tag in talent.req" :class="tag.includes('+') ? 'is-info is-light': ''">{{ tag }}</span>
            </div>
        </td>
    </tr>
    <tr v-if="show">
        <td colspan="4">{{ talent.descr }}</td>
    </tr>
</tbody>
    `,
    props: ['talent', 'charSave'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        renderButton(id) {
            return this.charSave.talente.liste.includes(id) ? 'is-success' : 'is-light';
        },
        buttonClick(id) {
            this.$emit('button-click', {
                type: 'talent',
                id
            });
        },
        getButtonContent(id) {
            return this.charSave.talente.liste.includes(id) ? '&hearts;' : '&times;';
        },
    },
});

Vue.component('talente', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th></th>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>Tags</th>
                <th>Voraussetzungen</th>
            </tr>
            <talent-entry v-for="talent in talentListe" :talent="talent" :key="talent.id" :charSave="charSave" @button-click="buttonClick"/>
        </table>
    </div>
</div>
    `,
    props: ['talentListe', 'meta', 'charSave'],
    methods: {
        buttonClick(input) {
            this.$emit('button-click', input);
        },
    }
});

Vue.component('custom-dice', {
    template: `
<nav class="level is-mobile">
    <div class="level-item has-text-centered">
    <div>
        <p class="title"><button title="Wirf einen W4 Würfel" class="button is-light" @click="rollDice(4)">W 4</button></p>
    </div>
    </div>
    <div class="level-item has-text-centered">
    <div>
        <p class="title"><button title="Wirf einen W6 Würfel" class="button is-info is-light" @click="rollDice(6)">W 6</button></p>
    </div>
    </div>
    <div class="level-item has-text-centered">
    <div>
        <p class="title"><button title="Wirf einen W8 Würfel" class="button is-primary is-light" @click="rollDice(8)">W 8</button></p>
    </div>
    </div>
    <div class="level-item has-text-centered">
    <div>
        <p class="title"><button title="Wirf einen W10 Würfel" class="button is-success is-light" @click="rollDice(10)">W 10</button></p>
    </div>
    </div>
    <div class="level-item has-text-centered">
    <div>
        <p class="title"><button title="Wirf einen W12 Würfel" class="button is-warning is-light" @click="rollDice(12)">W 12</button></p>
    </div>
    </div>
    <div class="level-item has-text-centered">
    <div>
        <p class="title"><button title="Lösche die Würfelchronik" class="button is-danger is-light" @click="clearHistory">Chronik löschen</button></p>
    </div>
    </div>
</nav>
    `,
    methods: {
        rollDice(num) {
            this.$emit('roll-dice', {
                comment: `Manueller Wurf (W${num})`,
                dice: num,
                wild: false
            });
        },
        clearHistory() {
            this.$emit('clear-dice-history');
        }
    },
});

Vue.component('dice-history-entry', {
    template: `
<tr>
    <td>
        <button title="Wurf wiederholen" class="button is-light is-info" @click="reroll(dice)">&#9850;</button>
    </td>
    <td>
        {{ dice.comment }}
        <div class="has-text-weight-bold"><small>{{ dice.timestamp }}</small></div>
    </td>
    <td>
        <div class="buttons">
            <button v-for="die in dice.rollNormal" class="button is-light" :class="renderDice(die.rolled, die.dice)">{{ die.rolled }}</button>
        </div>
    </td>
    <td>
        <div class="buttons">
            <button v-for="die in dice.rollWild" class="button is-light" :class="renderDice(die.rolled, die.dice)">{{ die.rolled }}</button>
        </div>
    </td>
    <td>
        <div class="buttons">
            <button v-for="mod in dice.modifications" class="button is-light" :class="mod.value < 0 ? 'is-danger' : 'is-success'">{{ mod.name }} {{ mod.value }}</button>
        </div>
    </td>
    <td>
        <button class="button" :class="renderResult(dice.result)">{{ dice.result.value }}</button>
    </td>
    <td>
        <div v-if="dice.result.success" class="has-text-success">Erfolg!</div>
        <div v-else-if="dice.result.critFailure" class="has-text-danger">Snake Eyes!</div>
        <div v-else class="has-text-warning">Fehlschlag</div>
        <div v-if="dice.result.raise === 1" class="has-text-info">1 Steigerung</div>
        <div v-if="dice.result.raise > 1" class="has-text-info">{{ dice.result.raise }} Steigerungen</div>
    </td>
</tr>
    `,
    props: ['dice'],
    methods: {
        renderDice(result, die) {
            if (result === 1) {
                return 'is-danger';
            }
            if (result === die) {
                return 'is-success';
            }
            return '';
        },
        renderResult(result) {
            if (result.raise > 0) {
                return 'is-primary';
            }
            if (result.success) {
                return 'is-success';
            }
            if (result.critFailure) {
                return 'is-danger';
            }
            return 'is-warning';
        },
        reroll(roll) {
            const rerollPrefix = '[Reroll]';
            const comment = roll.comment.includes(rerollPrefix) ? roll.comment : `${rerollPrefix} ${roll.comment}`;
            const dice = roll.rollNormal[0].dice;
            const wild = roll.rollWild.length > 0;
            const modifications = roll.modifications;

            this.$emit('roll-dice', {
                comment,
                dice,
                wild,
                modifications
            });
        },
    },
});

Vue.component('dice-history', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <custom-dice @roll-dice="rollDice" @clear-dice-history="clearDiceHistory"/>
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th></th>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>Wurf</th>
                <th>Wild Die (W6)</th>
                <th>Modifikationen</th>
                <th>Ergebnis</th>
                <th></th>
            </tr>
            <dice-history-entry v-for="(dice, index) in diceHistory" :dice="dice" :key="index" @roll-dice="rollDice"/>
            <tr v-if="diceHistory.length === 0">
                <td></td>
                <td colspan="6">
                    <span class="is-italic">Würfelchronik leer</span>
                </td>
            </tr>
        </table>
    </div>
</div>
    `,
    props: ['meta', 'diceHistory'],
    methods: {
        rollDice(obj) {
            this.$emit('roll-dice', obj);
        },
        clearDiceHistory() {
            this.$emit('clear-dice-history');
        }
    }
});

Vue.component('button-legend', {
    template: `
<div class="box">
    <nav class="level is-mobile">
        <div class="level-item has-text-centered">
        <div>
            <p class="title has-text-weight-bold">Legende</p>
        </div>
        </div>
        <div class="level-item has-text-centered">
        <div>
            <p class="heading">Standardwert</p>
            <p class="title"><button class="button is-info">♥</button></p>
        </div>
        </div>
        <div class="level-item has-text-centered">
        <div>
            <p class="heading">Ausgewählt</p>
            <p class="title"><button class="button is-success">♥</button></p>
        </div>
        </div>
        <div class="level-item has-text-centered">
        <div>
            <p class="heading">1 Punkt</p>
            <p class="title"><button class="button is-light">×</button></p>
        </div>
        </div>
        <div class="level-item has-text-centered">
        <div>
            <p class="heading">2 Punkte</p>
            <p class="title"><button class="button is-danger is-light">×</button></p>
        </div>
        </div>
        <div class="level-item has-text-centered">
        <div>
            <p class="heading">Würfeln</p>
            <p class="title"><button class="button is-info is-light">&#9850;</button></p>
        </div>
        </div>
    </nav>
</div>
    `,
});


Vue.component('last-dice-roll', {
    template: `
<div class="container custom-roll-popup">
    <article class="message" :class="colorMessage()" v-show="value">
        <div class="message-header">
            <p>Letzter Wurf</p>
            <button class="delete" aria-label="delete" @click="closeDicePopUp"></button>
        </div>
        <div class="message-body">
            <table class="table is-striped is-hoverable is-fullwidth">
                <tr>
                    <th></th>
                    <th>Beschreibung</th>
                    <th>Wurf</th>
                    <th>Wild Die (W6)</th>
                    <th>Modifikationen</th>
                    <th>Ergebnis</th>
                    <th></th>
                </tr>
                <dice-history-entry v-if="lastRoll" :dice="lastRoll" @roll-dice="rollDice"/>
            </table>
            <div class="has-text-right">
                <a @click="switchToHistory">
                    <span class="tag">zur Würfelchronik &rarr;</span>
                </a>
            </div>
        </div>
    </article>
</div>
    `,
    props: ['lastRoll', 'value'],
    methods: {
        rollDice(obj) {
            this.$emit('roll-dice', obj);
        },
        colorMessage() {
            const result = this.lastRoll.result;
            if (result.raise > 0) {
                return 'is-primary';
            }
            if (result.success) {
                return 'is-success';
            }
            if (result.critFailure) {
                return 'is-danger';
            }
            return 'is-warning';
        },
        closeDicePopUp() {
            this.$emit('close-popup');
        },
        switchToHistory() {
            this.$emit('switch-to-history');
        }
    }
});
