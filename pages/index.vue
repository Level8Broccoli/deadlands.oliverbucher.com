<template>
  <div>
    <div>
      <div class="level">
        <div class="level-left">
          <h1 class="title">Erstelle deinen Hombre</h1>
        </div>
        <div class="level-right">
          <button class="button">Sortierung: Default</button>
        </div>
      </div>
      <div class="message is-dark">
        <div class="message-header">
          <p>
            Übersicht
            <span></span>
          </p>
        </div>
        <div class="message-body">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">Rasse</span>
                <span class="tag">Mensch</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">Bewegung</span>
                <span class="tag">12 Meter</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">Parade/Zielwert (Kämpfen)</span>
                <span class="tag">2</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">Robustheit (Konstitution)</span>
                <span class="tag">6 + Panzerung</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">Startkapital</span>
                <span class="tag">250$</span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">Grit</span> <span class="tag">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs is-fullwidth">
        <ul>
          <li class="is-active">
            <a
              >Allgemein &nbsp;
              <!----></a
            >
          </li>
          <li class="">
            <a>Attribute &nbsp; <span class="tag is-danger">4</span></a>
          </li>
          <li class="">
            <a>Fertigkeiten &nbsp; <span class="tag is-danger">12</span></a>
          </li>
          <li class="">
            <a>Handicaps &nbsp; <span class="tag is-danger">4</span></a>
          </li>
          <li class="">
            <a>Talente &nbsp; <span class="tag is-danger">3</span></a>
          </li>
          <li class="">
            <a
              >Würfelchronik &nbsp;
              <!----></a
            >
          </li>
        </ul>
      </div>
      <div>
        <h2 class="subtitle">Allgemein</h2>
        <div class="field">
          <label class="label">Charaktername</label>
          <div class="control"><input type="text" class="input" /></div>
        </div>
        <div class="field">
          <label class="label">Notizen</label>
          <div class="control">
            <textarea rows="20" class="textarea"></textarea>
          </div>
        </div>
      </div>
      <!---->
      <!---->
      <!---->
      <!---->
      <!---->
      <br />
      <!---->
      <!---->
    </div>
  </div>
</template>

<script>
export default {}
</script>
