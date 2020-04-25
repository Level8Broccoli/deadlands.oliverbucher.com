'use strict';

const app = new Vue({
    el: '.app',
    template: `
        <div>
            <overview :overviewListWithoutGoals="overviewListWithoutGoals" />
            <tabbar :currentTab="currentTab" :listOfTabs="listOfTabs" @change-tab="changeTab" />

            <attribute v-if="currentTab === 0" :meta="listOfTabs[0]" :attributList="attribute" @button-click="buttonClick" @show-descr="showDescr" :charSave="charSave"/>

            <fertigkeiten v-if="currentTab === 1" :meta="listOfTabs[1]" :attributList="attribute" :fertigkeitenList="fertigkeiten" @button-click="buttonClick" @show-descr="showDescr" @reset-fertigkeit="resetFertigkeit" :charSave="charSave"/>

            <handicaps v-if="currentTab === 2"/>
            <talente v-if="currentTab === 3"/>
        </div>
    `,
    data: {
        charSave: {
            attribute: {
                liste: {}
            },
            fertigkeiten: {
                liste: []
            },
            talente: {
                liste: []
            },
            handicaps: {
                liste: []
            }
        },
        handicaps: [],
        talents: [],
        attribute: [],
        fertigkeiten: [],
        currentTab: 1
    },
    methods: {
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
            }
        },
        showDescr({
            type,
            id
        }) {
            if (type === 'attribute') {
                let attributeEntry = this.attribute.find(a => a.id === id);
                attributeEntry.show = !attributeEntry.show;
            } else if (type === 'fertigkeit') {
                let fertigkeitenEntry = this.fertigkeiten.find(a => a.id === id);
                fertigkeitenEntry.show = !fertigkeitenEntry.show;
            }
        },
        getFertigkeit(id) {
            const list = this.fertigkeiten;
            return list.find(f => f.id === id);
        },
        getAttributeValue(attr) {
            const list = this.charSave.attribute.liste;
            console.log(list);
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
        listOfTabs() {
            if (this.charSave === {}) {
                return [];
            }
            return [{
                    id: 0,
                    name: 'Attribute',
                    descr: 'Die 5 Attribute beginnen alle bei einem <strong>W4</strong> Würfel. Pro Punkt kannst du ein Attribut um einen Würfel verbessern.<br /><em>Beispiel: W4 -> W8 kostet dich 2 Punkte.</em> ',
                    value: this.getAttributsPunkte,
                    goal: 0
                },
                {
                    id: 1,
                    name: 'Fertigkeiten',
                    descr: 'Ein paar Fertigkeiten haben einen Startwert (blau markiert) von W4. Du kannst weitere Punkte verteilen, wie bei den Attributen.<br /><strong>Achtung: Die Fertigkeiten sind abhängig von je einem passenden Attribut. Wenn du eine Fertigkeit auf einen Wert steigerst, der den dazugehörigen Attributswert übersteigt, kostet das 2 Punkte!</strong> (leicht rot markiert)',
                    value: this.getFertigkeitenPunkte,
                    goal: 0
                },
                {
                    id: 2,
                    name: 'Handicaps',
                    value: typeof this.charSave.handicaps === 'undefined' ? '' : this.charSave.handicaps.punkte,
                    goal: 0
                },
                {
                    id: 3,
                    name: 'Talente',
                    value: typeof this.charSave.talente === 'undefined' ? '' : this.charSave.talente.punkte,
                    goal: 0
                },
            ];
        },
        overviewListWithoutGoals() {
            return [{
                    name: 'Bewegung',
                    value: '12 Meter',
                },
                {
                    name: 'Rasse',
                    value: 'Mensch'
                },
                {
                    name: 'Parade/Zielwert',
                    value: 2,
                    additional: ' + Kämpfen/2'
                },
                {
                    name: 'Robustheit',
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
                const attrValue = this.getAttributeValue(fert.attr);

                let sum = 0;
                console.log(key, value, fert.attr, attrValue);
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
            return 12 - total;
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
    },
});
