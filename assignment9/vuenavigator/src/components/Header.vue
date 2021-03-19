<template>
  <header id="Navigatorheader">
    <h2 id="Navigatorh2">Header</h2>
    <ul class="Navigatorul" id="Navigatorulheader">
    </ul>
  </header>
</template>

<script>
export default {
name: "Header.vue"
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
