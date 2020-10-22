<template>
  <div class="weather level-center">
    ICON <br />
    {{ temperature }}°C <br />
    {{ sunniness }} <br />
    <p>
      last update {{ text.approvedTime }}
    </p>
  </div>
</template>

<script tag="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      message: this.text
    }
  },
  computed: {
    temperature () {
      return this.message.timeSeries[0].parameters[11].values[0]
    },
    sunniness () {
      const x = this.message.timeSeries[0].parameters[6].values[0]
      switch (true) {
        case (x < 2): return "It's really sunny."
        case (x < 5): return "It's kinda sunny."
        case (x < 8): return "It's not really sunny."
        case (x === 8): return 'balls.'
        default: return "It's somewhere between kinda sunny and not sunny at all."
      }
    }
  },
  weatherSymbol () {
    return 'NotImplemented'
  }
})
</script>
  <style>
  .weather {
    animation: 5s appear;
    margin: auto;
    margin-left: 30px;
  }
  p {
    opacity: 0.4;
    font-style: oblique;
    font-size: 5;
  }

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
