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
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>W4</th>
                <th>W6</th>
                <th>W8</th>
                <th>W10</th>
                <th>W12</th>
            </tr>
            <tr v-for="attribute in attributList">
                <td><a @click="showDescr(attribute.id)">{{ attribute.name }}</a> <br /> <small v-show="attribute.show">{{ attribute.descr }}</small></td>
                <td><button class="button is-info" @click="buttonClick(4, attribute.id)">&hearts;</button></td>
                <td>
                    <button class="button" :class="checkStatus(6, attribute.id) ? 'is-success' : 'is-danger'" @click="buttonClick(6, attribute.id)" v-html="getButtonContent(6, attribute.id)"></button>
                </td>
                <td>
                    <button class="button" :class="checkStatus(8, attribute.id) ? 'is-success' : 'is-danger'" @click="buttonClick(8, attribute.id)" v-html="getButtonContent(8, attribute.id)"></button>
                </td>
                <td>
                    <button class="button" :class="checkStatus(10, attribute.id) ? 'is-success' : 'is-danger'" @click="buttonClick(10, attribute.id)" v-html="getButtonContent(10, attribute.id)"></button>
                </td>
                <td>
                    <button class="button" :class="checkStatus(12, attribute.id) ? 'is-success' : 'is-danger'" @click="buttonClick(12, attribute.id)" v-html="getButtonContent(12, attribute.id)"></button>
                </td>
            </tr>
        </table>
    </div>
</div>
`,
    props: ['meta', 'attributList', 'charSave'],
    methods: {
        buttonClick(value, id){
            this.$emit('button-click', {type: 'attribute', value, id});
        },
        showDescr(id) {
            this.$emit('show-descr', {type: 'attribute', id});
        },
        checkStatus(value, id) {
            const savedValue = this.charSave.attribute.liste[id];
            return value <= savedValue;
        },
        getButtonContent(value, id) {
            return this.checkStatus(value, id) ? '&hearts;' : '&times;';
        },
    },
    computed: {
        attributeValues() {
            return this.charSave.attribute.liste;
        },
    }
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
