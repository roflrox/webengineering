<template>
  <div class="home">
    <Header></Header>
    <NavLeft></NavLeft>
    <NavContent></NavContent>
    <NavRight></NavRight>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import NavContent from "@/components/NavContent";
import Footer from "@/components/Footer";
import NavLeft from "@/components/NavLeft";
import NavRight from "@/components/NavRight";




export default {
  name: 'Home',
  components: {
    NavRight,
    NavLeft,
    NavContent,
    Footer,
    Header,
  },
  mounted() {
    this.$store.dispatch("init");
  }
}
</script>

<style>
.home {
  display: grid;
  min-height: 98vh;
  grid-template-columns: 1.5fr 6fr 1.5fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-areas: "header header header"
                          "left center right"
                        "footer footer footer"
}

@media screen and (max-width: 1024px) {
  lit-content {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "left center"
                                     "right right"
                                     "footer footer";
  }
}

@media screen and (max-width: 640px) {
  lit-content {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: "left"
                                     "center"
                                     "right"
                                     "footer";
  }
}
</style>
