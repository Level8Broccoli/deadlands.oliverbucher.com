<template>
  <div>
    <label class="label">Import / Export</label>
    <div class="buttons" style="align-items: inherit">
      <button class="button  is-info" @click="exportAsJson">
        <span class="file-icon">
          <font-awesome-icon :icon="['fad', 'download']" />
        </span>
        Export
      </button>
      <div class="file is-danger">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name="resume"
            @change="loadJsonFile"
          />
          <span class="file-cta">
            <span class="file-icon">
              <font-awesome-icon :icon="['fad', 'upload']" />
            </span>
            <span class="file-label">
              Import
            </span>
          </span>
        </label>
      </div>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button is-static">
          Deine ID
        </a>
      </p>
      <p class="control is-expanded">
        <input
          class="input is-family-monospace"
          type="text"
          disabled
          :value="charSave.id"
        />
      </p>
      <div class="control">
        <button v-if="show" class="button" @click="show = !show">
          <span class="file-icon">
            <font-awesome-icon :icon="['fad', 'times']" />
          </span>
        </button>
        <button v-else class="button" @click="show = !show">
          <span class="file-icon">
            <font-awesome-icon :icon="['fad', 'edit']" />
          </span>
        </button>
      </div>
    </div>
    <div v-show="show" class="field">
      <div class="control">
        <textarea
          rows="25"
          :value="JSON.stringify(charSave)"
          class="textarea is-family-monospace custom-new-save"
        ></textarea>
      </div>
    </div>
    <div v-show="show" class="control">
      <button class="button is-success" @click="saveTextarea">
        <span class="file-icon">
          <font-awesome-icon :icon="['fad', 'save']" />
        </span>
        Speichern
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterImportExport',
  data() {
    return { show: false }
  },
  computed: {
    charSave() {
      return this.$store.state.charSave
    }
  },
  methods: {
    saveTextarea() {
      const newSave = document.querySelector('.custom-new-save').value
      let parse
      try {
        parse = JSON.parse(newSave)
        this.$store.commit('charSave/loadFromSave', parse)
      } catch (error) {
        console.error(error, newSave)
      }
    },
    loadJsonFile(e) {
      const reader = new FileReader()
      const file = e.target.files[0]
      reader.onload = (e) => {
        const newSave = e.target.result
        let parse
        try {
          parse = JSON.parse(newSave)
          this.$store.commit('charSave/loadFromSave', parse)
        } catch (error) {
          console.error(error, newSave)
        }
      }

      reader.readAsText(file)
    },
    exportAsJson() {
      const exportObj = this.charSave
      const date = new Date()
      const exportName = `${date.toISOString().split('T')[0]}_${
        this.charSave.id
      }`

      const dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(exportObj))
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute('href', dataStr)
      downloadAnchorNode.setAttribute('download', exportName + '.json')
      document.body.appendChild(downloadAnchorNode) // required for firefox
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    }
  }
}
</script>
