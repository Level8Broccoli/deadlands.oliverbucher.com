'use strict';

const app = new Vue({
    el: '.app',
    template: `
        <div>
            <overview :overviewList="overviewList" />
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
        overviewList() {
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
                    name: 'Bewegung',
                    value: '12 Meter',
                },
                {
                    name: 'Parade/Zielwert',
                    value: 0,
                },
                {
                    name: 'Robustheit',
                    value: '2 + Kon/2 + Panzerung'
                },
                {
                    name: 'Talente',
                    value: '1'
                },
                {
                    name: 'Startkapital',
                    value: 250
                },
                {
                    name: 'Grit',
                    value: 1
                }
            ];
        }
    }
});
