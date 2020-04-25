'use strict';

Vue.component('overview', {
    template: `
        <div class="message is-dark">
            <div class="message-header">
                <p>Übersicht</p>
            </div>
            <div class="message-body">
                <div class="field is-grouped is-grouped-multiline">
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
    props: ['overviewListWithoutGoals']
});

Vue.component('tabbar', {
    template: `
        <div class="tabs">
            <ul>
                <li v-for="tab in listOfTabs" :class="tab.id == currentTab ? 'is-active' : ''">
                    <a @click="changeTab(tab.id)">{{ tab.name }} &nbsp; <span class="tag" :class="tab.goal !== tab.value ? 'is-danger' : 'is-success'">{{ tab.value }}</span>
                    </a>
                </li>
            </ul>
        </div>
    `,
    props: ['currentTab', 'listOfTabs'],
    methods: {
        changeTab(id) {
            this.$emit('change-tab', id);
        }
    }
});

Vue.component('attribute', {
    template: `
<div>
    <h2 class="subtitle">{{ meta.name }}</h2>
    <p v-html="meta.descr"></p>
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th></th>
                <th>W4</th>
                <th>W6</th>
                <th>W8</th>
                <th>W10</th>
                <th>W12</th>
            </tr>
            <tr v-for="attribute in attributList">
                <td>One</td>
                <td>One</td>
                <td>One</td>
                <td>One</td>
                <td>One</td>
                <td>One</td>
            </tr>
        </table>
    </div>
</div>
`,
    props: ['meta', 'attributList']
});
Vue.component('fertigkeiten', {
    template: `
<div>
    <h2 class="subtitle">Fertigkeiten</h2>
</div>
    `,
});
Vue.component('handicaps', {
    template: `
<div>
    <h2 class="subtitle">Handicaps</h2>
</div>
    `,
});
Vue.component('talente', {
    template: `
<div>
    <h2 class="subtitle">Talente</h2>
</div>
    `,
});
