'use strict';

Vue.component('overview', {
    template: `
        <div class="message is-dark">
            <div class="message-header">
                <p>
                    Übersicht
                    <span>{{ characterName }}</span>
                </p>
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
    props: ['overviewListWithoutGoals', 'charSave'],
    computed: {
        characterName() {
            return this.charSave.name ? `für ${this.charSave.name}` : '';
        },
    }

});

Vue.component('tabbar', {
    template: `
        <div class="tabs">
            <ul>
                <li v-for="tab in listOfTabs" :class="tab.id == currentTab ? 'is-active' : ''">
                    <a @click="changeTab(tab.id)">{{ tab.name }} &nbsp; <span v-if="!isNaN(tab.value)" class="tag" :class="tab.goal !== tab.value ? 'is-danger' : 'is-success'">{{ tab.value }}</span>
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

Vue.component('charinfo', {
    template: `
<div>
    <h2 class="subtitle">{{ meta.name }}</h2>
    <div class="field">
        <label class="label">Charaktername</label>
        <div class="control">
            <input class="input" type="text" v-model="charSave.name">
        </div>
    </div>
    <div class="field">
        <label class="label">Notizen</label>
        <div class="control">
            <textarea class="textarea" v-model="charSave.notes" rows="20"></textarea>
        </div>
    </div>
</div>
    `,
    props: ['meta', 'charSave'],
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
            <tbody v-for="attribute in attributList">
                <tr>
                    <td>
                        <a @click="showDescr(attribute.id)">{{ attribute.name }}</a> <br /> <small v-show="attribute.show">{{ attribute.descr }}</small>
                    </td>
                    <td>
                        <button class="button is-info" @click="buttonClick(4, attribute.id)">&hearts;</button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(6, attribute.id)" @click="buttonClick(6, attribute.id)" v-html="getButtonContent(6, attribute.id)"></button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(8, attribute.id)" @click="buttonClick(8, attribute.id)" v-html="getButtonContent(8, attribute.id)"></button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(10, attribute.id)" @click="buttonClick(10, attribute.id)" v-html="getButtonContent(10, attribute.id)"></button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(12, attribute.id)" @click="buttonClick(12, attribute.id)" v-html="getButtonContent(12, attribute.id)"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`,
    props: ['meta', 'attributList', 'charSave'],
    methods: {
        buttonClick(value, id) {
            this.$emit('button-click', {
                type: 'attribute',
                value,
                id
            });
        },
        showDescr(id) {
            this.$emit('show-descr', {
                type: 'attribute',
                id
            });
        },
        renderButton(value, id) {
            const savedValue = this.charSave.attribute.liste[id];
            return value <= savedValue ? 'is-success' : 'is-light';
        },
        getButtonContent(value, id) {
            const savedValue = this.charSave.attribute.liste[id];
            return value <= savedValue ? '&hearts;' : '&times;';
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
            <tbody v-for="fertigkeit in fertigkeitenList">
                <tr>
                    <td>
                        <a @click="reset(fertigkeit.id)" class="delete is-small"></a>
                        <a @click="showDescr(fertigkeit.id)">{{ fertigkeit.name }}</a>
                        <small>{{ fertigkeit.attr }}</small>
                        <br />
                        <small v-show="fertigkeit.show">{{ fertigkeit.descr }}</small>
                    </td>
                    <td>
                        <button v-if="fertigkeit.startValue" class="button is-link" @click="buttonClick(4, fertigkeit.id)">&hearts;</button>
                        <button v-else class="button" @click="buttonClick(4, fertigkeit.id)" v-html="getButtonContent(4, fertigkeit.id)" :class="renderButton(4, fertigkeit)"></button>
                    </td>
                    <td>
                        <button class="button" @click="buttonClick(6, fertigkeit.id)" v-html="getButtonContent(6, fertigkeit.id)" :class="renderButton(6, fertigkeit)"></button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(8, fertigkeit)" @click="buttonClick(8, fertigkeit.id)" v-html="getButtonContent(8, fertigkeit.id)"></button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(10, fertigkeit)" @click="buttonClick(10, fertigkeit.id)" v-html="getButtonContent(10, fertigkeit.id)"></button>
                    </td>
                    <td>
                        <button class="button" :class="renderButton(12, fertigkeit)" @click="buttonClick(12, fertigkeit.id)" v-html="getButtonContent(12, fertigkeit.id)"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    `,
    props: ['meta', 'attributList', 'fertigkeitenList', 'charSave'],
    methods: {
        showDescr(id) {
            this.$emit('show-descr', {
                type: 'fertigkeit',
                id
            });
        },
        buttonClick(value, id) {
            this.$emit('button-click', {
                type: 'fertigkeit',
                value,
                id
            });
        },
        getButtonContent(value, id) {
            const savedValue = this.charSave.fertigkeiten.liste[id];
            return value <= savedValue ? '&hearts;' : '&times;';
        },
        reset(id) {
            this.$emit('reset-fertigkeit', id);
        },
        renderButton(value, fert) {
            const savedValue = this.charSave.fertigkeiten.liste[fert.id];

            const list = this.charSave.attribute.liste;
            let attrValue = 4;
            if (typeof list[fert.attr] !== 'undefined') {
                attrValue = list[fert.attr];
            }

            if (value <= savedValue) {
                return 'is-success';
            } else if (value > attrValue) {
                return 'is-danger is-light';
            } else {
                return 'is-light';
            }
        },
    }
});

Vue.component('handicap-entry', {
    template: `
<tbody>
    <tr>
        <td>
            <a @click="show = !show">{{ handicap.name }}</a>
        </td>
        <td>
            <div v-if="handicap.tags" class="tags">
                <span class="tag" v-for="tag in handicap.tags" :class="tag === 'deadlands' ? 'is-danger is-light': ''">{{ tag }}</span>
            </div>
        </td>
        <td>
            <button v-if="handicap.points.includes(1)" class="button" :class="renderButton(1, handicap.id)" @click="buttonClick(1, handicap.id)" v-html="getButtonContent(1, handicap.id)"></button>
        </td>
        <td>
            <button v-if="handicap.points.includes(2)" class="button" :class="renderButton(2, handicap.id)" @click="buttonClick(2, handicap.id)" v-html="getButtonContent(2, handicap.id)"></button>
        </td>
    </tr>
    <tr v-if="show">
        <td colspan="4">{{ handicap.descr }}</td>
    </tr>
</tbody>
    `,
    props: ['handicap', 'charSave'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        renderButton(value, id) {
            const savedValue = this.charSave.handicaps.liste[id];

            if (value === savedValue) {
                return 'is-success';
            } else if (value === 2) {
                return 'is-danger is-light';
            } else {
                return 'is-light';
            }
        },
        buttonClick(value, id) {
            this.$emit('button-click', {
                type: 'handicap',
                value,
                id
            });
        },
        getButtonContent(value, id) {
            const savedValue = this.charSave.handicaps.liste[id];
            return value === savedValue ? '&hearts;' : '&times;';
        },
    },
});

Vue.component('handicaps', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>Tags</th>
                <th>Leicht</th>
                <th>Schwer</th>
            </tr>
            <handicap-entry v-for="handicap in handicapListe" :handicap="handicap" :key="handicap.id" :charSave="charSave" @button-click="buttonClick"/>
        </table>
    </div>
</div>
    `,
    props: ['handicapListe', 'meta', 'charSave'],
    methods: {
        showDescr(id) {
            this.$emit('show-descr', {
                type: 'handicap',
                id
            });
        },
        buttonClick(input) {
            this.$emit('button-click', input);
        },
    },
});

Vue.component('talent-entry', {
    template: `
<tbody>
    <tr>
        <td>
            <button class="button" :class="renderButton(talent.id)" @click="buttonClick(talent.id)" v-html="getButtonContent(talent.id)"></button>
        </td>
        <td>
            <a @click="show = !show">{{ talent.name }}</a>
        </td>
        <td>
            <div v-if="talent.tags" class="tags">
                <span class="tag" v-for="tag in talent.tags" :class="tag === 'deadlands' ? 'is-danger is-light': 'is-warning is-light'">{{ tag }}</span>
            </div>
        </td>
        <td>
            <div v-if="talent.req" class="tags">
                <span class="tag" v-for="tag in talent.req" :class="tag.includes('+') ? 'is-info is-light': ''">{{ tag }}</span>
            </div>
        </td>
    </tr>
    <tr v-if="show">
        <td colspan="4">{{ talent.descr }}</td>
    </tr>
</tbody>
    `,
    props: ['talent', 'charSave'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        renderButton(id) {
            return this.charSave.talente.liste.includes(id) ? 'is-success' : 'is-light';
        },
        buttonClick(id) {
            this.$emit('button-click', {
                type: 'talent',
                id
            });
        },
        getButtonContent(id) {
            return this.charSave.talente.liste.includes(id) ? '&hearts;' : '&times;';
        },
    },
});

Vue.component('talente', {
    template: `
<div>
    <h2>Erklärung:</h2>
    <p v-html="meta.descr"></p>
    <br />
    <div class="table-container">
        <table class="table is-striped is-hoverable is-fullwidth">
            <tr>
                <th></th>
                <th><h1 class="subtitle">{{ meta.name }}</h1></th>
                <th>Tags</th>
                <th>Voraussetzungen</th>
            </tr>
            <talent-entry v-for="talent in talentListe" :talent="talent" :key="talent.id" :charSave="charSave" @button-click="buttonClick"/>
        </table>
    </div>
</div>
    `,
    props: ['talentListe', 'meta', 'charSave'],
    methods: {
        buttonClick(input) {
            this.$emit('button-click', input);
        },
    }
});
