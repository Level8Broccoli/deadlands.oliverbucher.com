'use strict';

Vue.component('overview', {
    template: `
        <div class="message is-dark">
            <div class="message-header">
                <p>Übersicht</p>
            </div>
            <div class="message-body">
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control" v-for="entry in overviewList">
                        <div class="tags has-addons">
                            <span class="tag is-dark">{{ entry.name }}</span>
                            <span class="tag is-delete">{{ entry.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['overviewList']
});

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
