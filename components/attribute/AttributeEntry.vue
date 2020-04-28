<template>
  <tbody>
    <tr>
      <td>
        <button
          :title="'Würfle ' + attribute.name"
          class="button is-info is-light is-small"
          @click="rollDice(attribute)"
        >
          &#9850;
        </button>
      </td>
      <td>
        <a @click="show = !show">{{ attribute.name }}</a>
      </td>
      <td>
        <button class="button is-info" @click="buttonClick(4, attribute.id)">
          &hearts;
        </button>
      </td>
      <td>
        <button
          class="button"
          :class="renderButton(6, attribute.id)"
          @click="buttonClick(6, attribute.id)"
          v-html="getButtonContent(6, attribute.id)"
        ></button>
      </td>
      <td>
        <button
          class="button"
          :class="renderButton(8, attribute.id)"
          @click="buttonClick(8, attribute.id)"
          v-html="getButtonContent(8, attribute.id)"
        ></button>
      </td>
      <td>
        <button
          class="button"
          :class="renderButton(10, attribute.id)"
          @click="buttonClick(10, attribute.id)"
          v-html="getButtonContent(10, attribute.id)"
        ></button>
      </td>
      <td>
        <button
          class="button"
          :class="renderButton(12, attribute.id)"
          @click="buttonClick(12, attribute.id)"
          v-html="getButtonContent(12, attribute.id)"
        ></button>
      </td>
    </tr>
    <tr v-if="show">
      <td colspan="6">{{ attribute.descr }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'AttributeEntry'
}
</script>

<style></style>
