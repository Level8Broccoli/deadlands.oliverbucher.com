<template
  ><div class="box">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div><p class="title has-text-weight-bold">Legende</p></div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Startwert</p>
          <p class="title">
            <GameButton button-type="fixed" />
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Ausgewählt</p>
          <p class="title">
            <GameButton button-type="checked" />
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">kostet 1 Punkt</p>
          <p class="title">
            <GameButton button-type="point1" />
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">kostet 2 Punkte</p>
          <p class="title">
            <GameButton button-type="point2" />
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Würfeln</p>
          <p class="title">
            <GameButton button-type="roll" />
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'ButtonLegend',
  components: { GameButton }
}
</script>
