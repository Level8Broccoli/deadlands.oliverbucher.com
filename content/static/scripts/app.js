'use strict';

const app = new Vue({
    el: '.app',
    template: `
<div>
    <div class="level">
        <div class="level-left">
            <h1 class="title">Erstelle deinen Hombre</h1>
        </div>
        <div class="level-right">
            <button class="button" :class="classSorted" @click="sorted = !sorted">Sortierung: {{ typeSorted }}</button>
        </div>
    </div>

    <overview :overviewListWithoutGoals="overviewListWithoutGoals" :charSave="charSave" />


    <tabbar :currentTab="currentTab" :listOfTabs="listOfTabs" @change-tab="changeTab" />

    <charinfo v-if="currentTab === 0" :meta="listOfTabs[0]" :charSave="charSave" />

    <attribute v-if="currentTab === 1" :meta="listOfTabs[1]" :attributList="attribute" @button-click="buttonClick" :charSave="charSave" @roll-dice="rollDice"/>

    <fertigkeiten v-if="currentTab === 2" :meta="listOfTabs[2]" :attributList="attribute" :fertigkeitenList="fertigkeiten" @button-click="buttonClick" @reset-fertigkeit="resetFertigkeit" :charSave="charSave" @roll-dice="rollDice" :sorted="sorted"/>

    <handicaps v-if="currentTab === 3" :handicapListe="handicaps" :meta="listOfTabs[3]" :charSave="charSave" @button-click="buttonClick" :sorted="sorted"/>

    <talente v-if="currentTab === 4" :talentListe="talents" :meta="listOfTabs[4]" :charSave="charSave" @button-click="buttonClick" :sorted="sorted" />

    <dice-history v-if="currentTab === 5" :meta="listOfTabs[5]" @roll-dice="rollDice" @clear-dice-history="clearDiceHistory" :diceHistory="diceHistory"/>

    <br />

    <button-legend v-if="currentTab !== 0 && currentTab !== 5" />

    <last-dice-roll :lastRoll="diceHistory[0]" @roll-dice="rollDice" v-model="showLastRoll" v-if="showLastRoll" @close-popup="showLastRoll = false" @switch-to-history="currentTab = 5" />
</div>
    `,
    data: {
        charSave: {
            attribute: {
                liste: {}
            },
            fertigkeiten: {
                liste: {}
            },
            handicaps: {
                liste: {}
            },
            talente: {
                liste: []
            },
            name: '',
            notes: ''
        },
        handicaps: [],
        talents: [],
        attribute: [],
        fertigkeiten: [],
        diceHistoryArray: [],
        showLastRoll: false,
        sorted: false,
        currentTab: 0
    },
    mounted() {
        if (localStorage.getItem('charSave')) {
            try {
                this.charSave = JSON.parse(localStorage.getItem('charSave'));
            } catch (error) {
                console.error(error);
                console.error(localStorage.getItem('charSave'));
            }
        }
    },
    watch: {
        charSave: {
            handler() {
                const parsed = JSON.stringify(this.charSave);
                localStorage.setItem('charSave', parsed);
            },
            deep: true,
        },
    },
    methods: {
        clearDiceHistory() {
            this.diceHistory.splice(0, this.diceHistory.length);
        },
        rollDice({
            comment,
            dice,
            wild,
            modifications
        }) {
            const time = new Date();
            const timestamp = `${time.getHours()}.${time.getMinutes()} Uhr (${time.getSeconds()}.${time.getMilliseconds()})`;

            let rollNormal = [];
            let totalNormal = 0;
            while (true) {
                const rolled = Math.ceil(Math.random() * dice);
                totalNormal += rolled;
                rollNormal.push({
                    dice,
                    rolled
                });
                if (rolled !== dice) {
                    break;
                }
            }

            const WILD_DICE = 6;
            let rollWild = [];
            let totalWild = 0;
            if (wild) {
                while (true) {
                    const rolled = Math.ceil(Math.random() * WILD_DICE);
                    totalWild += rolled;
                    rollWild.push({
                        dice: WILD_DICE,
                        rolled
                    });
                    if (rolled !== WILD_DICE) {
                        break;
                    }
                }
            }

            let biggerTotal = Math.max(totalNormal, totalWild);
            if (modifications) {
                for (let i = 0; i < modifications.length; i++) {
                    const mod = modifications[i];
                    biggerTotal += mod.value;
                }
            }

            let result = {
                value: biggerTotal,
                success: biggerTotal >= 4,
                critFailure: totalNormal === 1 && totalWild === 1,
                raise: Math.floor(biggerTotal / 4) - 1
            };

            this.diceHistoryArray.push({
                time,
                timestamp,
                rollNormal,
                rollWild,
                modifications,
                result,
                comment
            });

            this.showLastRoll = true;
        },
        changeTab(id) {
            this.currentTab = id;
        },
        buttonClick({
            type,
            id,
            value
        }) {
            if (type === 'attribute') {
                this.$set(this.charSave.attribute.liste, id, value);
            } else if (type === 'fertigkeit') {
                this.$set(this.charSave.fertigkeiten.liste, id, value);
            } else if (type === 'handicap') {
                const list = this.charSave.handicaps.liste;
                if (list[id] === value) {
                    this.$delete(list, id);
                } else {
                    this.$set(list, id, value);
                }
            } else if (type === 'talent') {
                const list = this.charSave.talente.liste;
                if (list.includes(id)) {
                    list.splice(list.indexOf(id), 1);
                } else {
                    list.push(id);
                }
            }
        },
        getFertigkeit(id) {
            const list = this.fertigkeiten;
            return list.find(f => f.id === id);
        },
        getAttributeValue(attr) {
            const list = this.charSave.attribute.liste;
            if (typeof list === 'undefined' || typeof list[attr] === 'undefined') {
                return 4;
            }
            return list[attr];
        },
        resetFertigkeit(id) {
            const list = this.charSave.fertigkeiten.liste;
            this.$delete(list, id);
        },
    },
    computed: {
        classSorted() {
            if (this.sorted) {
                return 'is-link';
            }
        },
        typeSorted() {
            if (this.sorted) {
                return 'Sortiert';
            }
            return 'Default';
        },
        diceHistory() {
            return this.diceHistoryArray.sort((a, b) => a.time < b.time);
        },
        listOfTabs() {
            if (this.charSave === {}) {
                return [];
            }
            return [{
                    id: 0,
                    name: 'Allgemein',
                },
                {
                    id: 1,
                    name: 'Attribute',
                    descr: 'Die 5 Attribute beginnen alle bei einem <strong>W4</strong> Würfel. Pro Punkt kannst du ein Attribut um einen Würfel verbessern.<br /><em>Beispiel: W4 -> W8 kostet dich 2 Punkte.</em> ',
                    value: this.getAttributsPunkte,
                    goal: 0
                },
                {
                    id: 2,
                    name: 'Fertigkeiten',
                    descr: 'Ein paar Fertigkeiten haben einen Startwert (blau markiert) von W4. Du kannst weitere Punkte verteilen, wie bei den Attributen.<br /><strong>Achtung: Die Fertigkeiten sind abhängig von je einem passenden Attribut. Wenn du eine Fertigkeit auf einen Wert steigerst, der den dazugehörigen Attributswert übersteigt, kostet das 2 Punkte!</strong> (leicht rot markiert)',
                    value: this.getFertigkeitenPunkte,
                    goal: 0
                },
                {
                    id: 3,
                    name: 'Handicaps',
                    descr: 'Wähle hier deine Handicaps. Leichte Handicaps sind 1 Punkt Wert; Schwere Handicaps 2.',
                    value: this.getHandicapPunkte,
                    goal: 0
                },
                {
                    id: 4,
                    name: 'Talente',
                    descr: 'Suche dir die Talente aus, die deinen Charakter zu etwas ganz besonderem machen. Achte dabei jedoch auf die Spalte Voraussetzung!',
                    value: this.getTalentPunkte,
                    goal: 0
                },
                {
                    id: 5,
                    name: 'Würfelchronik',
                    descr: 'Hier findest du deine letzten Würfelwürfe.',
                },
            ];
        },
        overviewListWithoutGoals() {
            return [{
                    name: 'Rasse',
                    value: 'Mensch'
                },
                {
                    name: 'Bewegung',
                    value: '12 Meter',
                },
                {
                    name: 'Parade/Zielwert (Kämpfen)',
                    value: 2 + this.kaempfen / 2,
                },
                {
                    name: 'Robustheit (Konstitution)',
                    value: 2 + this.konstitution,
                    additional: ' + Panzerung'
                },
                {
                    name: 'Startkapital',
                    value: 250,
                    additional: '$'
                },
                {
                    name: 'Grit',
                    value: 1
                }
            ];
        },
        getAttributsPunkte() {
            const list = this.charSave.attribute.liste;
            let total = 0;
            for (let [_, value] of Object.entries(list)) {
                total += value - 4;
            }
            return 5 - total / 2;
        },
        getFertigkeitenPunkte() {
            const list = this.charSave.fertigkeiten.liste;
            let total = 0;
            for (let [key, value] of Object.entries(list)) {
                const fert = this.getFertigkeit(key);
                if (typeof fert !== 'undefined') {
                    const attrValue = this.getAttributeValue(fert.attr);

                    let sum = 0;
                    if (attrValue >= value) {
                        sum = value;
                    } else {
                        sum = value + (value - attrValue);
                    }
                    if (typeof fert.startValue !== 'undefined') {
                        total += sum / 2 - 2;
                    } else {
                        total += sum / 2 - 1;
                    }
                }
            }
            return 12 - total;
        },
        getHandicapPunkte() {
            const list = this.charSave.handicaps.liste;
            let total = 0;
            for (let [_, value] of Object.entries(list)) {
                total += value;
            }
            return 4 - total;
        },
        getTalentPunkte() {
            return 3 - this.charSave.talente.liste.length;
        },
        fertigkeitenMitStartValue() {
            const list = this.fertigkeiten;
            let total = 0;
            for (let index in list) {
                total += typeof list[index].startValue === 'undefined' ? 0 : 1;
            }
            return total;
        },
        konstitution() {
            const list = this.charSave.attribute.liste;
            if (typeof list.Konstitution === 'undefined') {
                return 4;
            }
            return list.Konstitution;
        },
        kaempfen() {
            const list = this.charSave.fertigkeiten.liste;
            if (typeof list.Kaempfen === 'undefined') {
                return 0;
            }
            return list.Kaempfen;
        },
    },
});
