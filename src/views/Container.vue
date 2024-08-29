<template>
  <section class="visual">
    <div class="inner">
      <MainSlide></MainSlide>
    </div>
  </section>
  <div class="contents">
    <Section2/>
    <Section1></Section1>
    <div class="about">
      <Cards/>
      <News/>
      <NHApp/>
    </div>
  </div>

</template>
<script>
import MainSlide from '../components/MainSlide.vue';
import Section1 from '../components/Section1.vue'
import Section2 from '../components/Section2.vue';
import News from '../components/News.vue';
import Cards from '../components/Cards.vue';
import NHApp from '../components/NHApp.vue';


export default {
  components:{
    MainSlide,
    Section1,
    Section2,
    News,
    Cards,
    NHApp
  }
}
</script>
<style lang="scss" scoped>
  .visual{
    background:url(../assets/mainbackground.png) no-repeat center/cover;
    height:550px;
  }
</style>