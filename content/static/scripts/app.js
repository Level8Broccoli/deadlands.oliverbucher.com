'use strict';

const app = new Vue({
    el: '.app',
    template: `
        <div>
            <overview :overviewListWithGoals="overviewListWithGoals" :overviewListWithoutGoals="overviewListWithoutGoals" />
            <tabbar :currentTab="currentTab" @change-tab="changeTab" />
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
        overviewListWithGoals() {
            return [{
                    name: 'Attributs-Punkte',
                    value: this.attribute.punkte,
                    goal: 0
                },
                {
                    name: 'Fertigkeits-Punkte',
                    value: this.fertigkeiten.punkte,
                    goal: 0
                },
                {
                    name: 'Handicap-Punkte',
                    value: this.handicaps.punkte,
                    goal: 0
                },
                {
                    name: 'Talent-Punkte',
                    value: this.talente.punkte,
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
