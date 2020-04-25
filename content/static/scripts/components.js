'use strict';

Vue.component('overview', {
    template: `
        <div class="message is-dark">
            <div class="message-header">
                <p>Übersicht</p>
            </div>
            <div class="message-body">
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control" v-for="entry in overviewListWithGoals">
                        <div class="tags has-addons">
                            <span class="tag is-dark">{{ entry.name }}</span>
                            <span class="tag" :class="entry.goal !== entry.value ? 'is-danger' : 'is-success'">{{ entry.value }}{{ entry.additional }}</span>
                        </div>
                    </div>
                    <hr />
                    <div class="control" v-for="entry in overviewListWithoutGoals">
                        <div class="tags has-addons">
                            <span class="tag is-dark">{{ entry.name }}</span>
                            <span class="tag">{{ entry.value }}{{ entry.additional }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['overviewListWithGoals', 'overviewListWithoutGoals']
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
