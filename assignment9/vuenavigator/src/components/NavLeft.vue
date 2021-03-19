<template>
  <div  class="Navigatorleft">
    <ul class="Navigatorul" id="Navigatorleftul">
      <h1 v-for="data in mydata">{{data}}</h1>
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
      console.log(newValue)
      this.updateItems(newValue)

    },
    content(newValue, oldValue) {
      console.log(newValue)

    }
  },
  methods: {
    updateItems(input) {
  console.log(this.content[input])
      let result = []
      Object.keys(this.content[input]).forEach(function (key){
        result.push(key)
      })
      this.mydata = result
    },
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
