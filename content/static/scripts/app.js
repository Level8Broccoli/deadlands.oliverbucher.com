'use strict';

const app = new Vue({
    el: '.app',
    template: `
        <div>
            <overview :overviewListWithoutGoals="overviewListWithoutGoals" />
            <tabbar :currentTab="currentTab" :listWithGoals="listWithGoals" @change-tab="changeTab" />
        </div>
    `,
    data: {
        charSave: {},
        handicaps: [],
        talents: [],
        currentTab: 0
    },
    methods: {
        changeTab(id) {
            this.currentTab = id;
        }
    },
    computed: {
        listWithGoals() {
            return [{
                    id: 0,
                    name: 'Attribute',
                    value: this.charSave.attribute.punkte,
                    goal: 0
                },
                {
                    id: 1,
                    name: 'Fertigkeiten',
                    value: this.charSave.fertigkeiten.punkte,
                    goal: 0
                },
                {
                    id: 2,
                    name: 'Handicaps',
                    value: this.charSave.handicaps.punkte,
                    goal: 0
                },
                {
                    id: 3,
                    name: 'Talente',
                    value: this.charSave.talente.punkte,
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
