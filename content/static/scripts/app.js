'use strict';

const app = new Vue({
    el: '.app',
    template: `
        <div>
            <overview :overviewListWithoutGoals="overviewListWithoutGoals" />
            <tabbar :currentTab="currentTab" :listOfTabs="listOfTabs" @change-tab="changeTab" />

            <attribute v-if="currentTab === 0" :meta="listOfTabs[0]" :attributList="attribute" @button-click="buttonClick" @show-descr="showDescr" :charSave="charSave"/>

            <fertigkeiten v-if="currentTab === 1"/>
            <handicaps v-if="currentTab === 2"/>
            <talente v-if="currentTab === 3"/>
        </div>
    `,
    data: {
        charSave: {},
        handicaps: [],
        talents: [],
        attribute: [],
        currentTab: 0
    },
    methods: {
        changeTab(id) {
            this.currentTab = id;
        },
        buttonClick({type, id, value}) {
            if (type === 'attribute') {
                this.charSave.attribute.liste[id] = value;
            }
        },
        showDescr({type, id}) {
            if (type === 'attribute') {
                let attributeEntry = this.attribute.find(a => a.id === id);
                attributeEntry.show = !attributeEntry.show;
            }
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
                    value: typeof this.charSave.attribute === 'undefined' ? '': this.charSave.attribute.punkte,
                    goal: 0
                },
                {
                    id: 1,
                    name: 'Fertigkeiten',
                    value: typeof this.charSave.fertigkeiten === 'undefined' ? '': this.charSave.fertigkeiten.punkte,
                    goal: 0
                },
                {
                    id: 2,
                    name: 'Handicaps',
                    value: typeof this.charSave.handicaps === 'undefined' ? '': this.charSave.handicaps.punkte,
                    goal: 0
                },
                {
                    id: 3,
                    name: 'Talente',
                    value: typeof this.charSave.talente === 'undefined' ? '': this.charSave.talente.punkte,
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
                    name: 'Parade/Zielwert',
                    value: 2,
                    additional: ' + Kämpfen/2'
                },
                {
                    name: 'Robustheit',
                    value: '2 + Kon/2',
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
    },
});
