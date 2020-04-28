<template>
  <div class="tabs is-fullwidth">
    <ul>
      <li
        v-for="tab in tabList"
        :key="tab.id"
        :class="tab.link === $route.path ? 'is-active' : ''"
      >
        <NuxtLink :to="tab.link">
          {{ tab.name }} &nbsp;
          <span v-if="tab.points && tab.points !== 0" class="tag is-danger">{{
            tab.points
          }}</span>
          <span v-if="tab.notification" class="tag is-success">&#9964;</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavTabs',
  props: {
    tabList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
