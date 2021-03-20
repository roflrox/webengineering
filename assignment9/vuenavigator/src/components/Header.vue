<template>
  <header id="Navigatorheader">
    <h2 id="Navigatorh2">Header</h2>
    <ul class="Navigatorul" id="Navigatorulheader">
      <button v-for="item in items"  v-on:click="clicked">{{item}}</button>
    </ul>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Header.vue",
  data(){
    return {items:[]}
  },



  computed: mapState(['content']),
  watch: {
    content(newValue, oldValue) {


      let result = []
      Object.keys(newValue).forEach(function (key){
        result.push(key)
      })
     this.updateItems(result)
      return result
    }
  },
  methods:{
    updateItems(input){
      this.items = input
    },
    clicked(item) {
      this.$store.dispatch('updateCurrent',item.target.textContent)

    }
  }
}
</script>

<style scoped>
#Navigatorh2 {
  color: white;
  margin-top: 0;
}

#Navigatorheader {
  background-color: #C34C51;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
  grid-area: header;
}

.Navigatorul {
  list-style-type: none;
  text-align: left;
  padding-bottom: 2vh;
  margin-bottom: 0;
}

#Navigatorheader .Navigatorul .Navigatorli {
  display: inline;
  font-size: 20px;
  font-family: Arial;
  background-color: #67709B;
  border: 3px groove #EDEDED;
  border-radius: 20px;
  padding: 0 2vw;
}

.Navigatorul .Navigatorli {
  display: block;
  font-size: 20px;
  font-family: Arial;
  background-color: #67709B;
  border: 3px groove #EDEDED;
  border-radius: 20px;
  margin-bottom: 1em;
  width: 6vw;
  padding: 0 2vw;
}
</style>
