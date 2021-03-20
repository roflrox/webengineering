<template>


  <div  id="Navigatorcenter" >
      {{mydata.content}}
  </div>


</template>

<script>
import {mapState} from "vuex";
export default {
name: "NavContent",


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
      content(newValue, oldValue) {


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


#Navigatorcenter {
  background-color: #649EBA;
  grid-area: center;
  color: white;
}






</style>
