<template>
  <div  class="Navigatorleft">
    <ul class="Navigatorul" id="Navigatorleftul">
      <h1 v-for="data in mydata"  v-on:click="clicked">{{data}}</h1>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavLeft",
  data(){
    return {mydata:[]}
  },
  computed: mapState(['current','content']),
  watch: {
    current(newValue, oldValue) {
      this.updateItems(newValue)

    },
  },
  methods: {
    updateItems(input) {
      let result = []
      Object.keys(this.content[input]).forEach(function (key){
        result.push(key)
      })
      this.mydata = result
    },
    clicked(item) {
      this.$store.dispatch('updateCurrentHeader',item.target.textContent)

    }

  }
}
</script>

<style scoped>
.Navigatorleft {
  grid-area: left;
  background-color: #C38081;
  color: white;
  font-size: 25px;
}
</style>
