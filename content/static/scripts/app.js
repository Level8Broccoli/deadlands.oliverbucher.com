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
                    name: 'Attributspunkte',
                    value: 5,
                    goal: 0
                },
                {
                    name: 'Fertigkeitspunkte',
                    value: 12,
                    goal: 0
                },
                {
                    name: 'Talente',
                    value: 1,
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
                    value: 0,
                },
                {
                    name: 'Robustheit',
                    value: '2 + Kon/2',
                    additional: '+ Panzerung'
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
