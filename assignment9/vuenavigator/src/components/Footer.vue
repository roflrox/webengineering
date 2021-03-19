<template>
  <footer id="Navigatorfooter">
    Footer: <a href="Sitemap.html">Sitemap</a> <a href="Sitemap.html">Home</a> <a href="Sitemap.html">News</a> <a href="Sitemap.html">Contact</a> <a href="Sitemap.html">About</a>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
footer {
  grid-area: footer;
  background-color: black;
  color: white;
  font-size: 25px;
  text-align: center;


}

#Navigatorfooter a {
  color: white;
  font-size: 15px;
}
</style>
