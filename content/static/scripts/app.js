'use strict';

const app = new Vue({
    el: '.app',
    template: `<tabbar :currentTab="currentTab" @change-tab="changeTab" />`,
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
    }
});
