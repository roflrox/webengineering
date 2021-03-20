<template>
  <div id="Navigatorright">
  <a v-for="refs in mydata.references" v-bind:href="refs">{{refs}}</a>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavRight",
  data(){
    return {mydata:""}
  },
  computed: mapState(['currentHeader','current','content']),
  watch: {
    currentHeader(newValue,oldValue){
      this.updateCenter(newValue)
    },
    current(newValue, oldValue) {
      this.mydata =""

    },


  },
  methods: {
    updateCenter(newValue) {
      let curr = this.content[this.current]
      let msg =curr[newValue]

      this.mydata = msg
    }
  }
}

</script>

<style scoped>
#Navigatorright {
  grid-area: right;
  background-color: #C38081;
  color: white;
  font-size: 25px;
}
</style>
