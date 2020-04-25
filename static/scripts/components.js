'use strict';

Vue.component('tabbar', {
    template: `
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="tab.id == currentTab ? 'is-active' : ''">
                    <a @click="changeTab(tab.id)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
    `,
    props: ['currentTab'],
    data() {
        return {
            tabs: [{
                    id: 0,
                    name: 'Attribute'
                },
                {
                    id: 1,
                    name: 'Fertigkeiten'
                },
                {
                    id: 2,
                    name: 'Handicaps'
                }, {
                    id: 3,
                    name: 'Talente'
                }
            ]
        }
    },
    methods: {
        changeTab(id) {
            this.$emit('change-tab', id);
        }
    }
});
