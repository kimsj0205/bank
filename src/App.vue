<template>
  <vueHeader/>
  <RouterView/>
  <Footer/>
</template>

<script>
import '@/scss/reset.scss' ;
import '@/scss/custom.scss' ;
import '@/scss/font.css';
import vueHeader from './components/Header.vue';
import Container from './views/Container.vue';
import Footer from './components/Footer.vue';




export default {
  components: {
    vueHeader,
    Container,
    Footer
  }
}
</script>

<style lang="scss">

</style>
