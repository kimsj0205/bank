<template>
  <div class="section_slide">
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
    :pagination="{
      clickable: true,
      dynamicBullets: true
    }"
    
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../assets/mainslide1.png" alt="">
    </swiper-slide>
    <swiper-slide><img src="../assets/mainslide2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/mainslide3.png" alt=""></swiper-slide>
    ...
  </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/scss';

  import 'swiper/scss/pagination';
  import 'swiper/scss/navigation';
  import 'swiper/scss/autoplay';

  // import required modules
  import { Pagination,Navigation, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        
        modules: [Pagination, Autoplay,Navigation],
      };
    },

  };
</script>
<style lang="scss">
.section_slide{
  position: relative;
}


  .swiper {
  margin:0;
  padding:0;
  width: 700px;
  border-radius:20px;
  border:3px solid #fff;
  top:60px;
  box-shadow: 2px 3px 15px #ececec;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev:after, .swiper-button-next:after{
  content:'';
}
.swiper-button-prev:after{
  content:url(../assets/arrow_back.svg);
}
.swiper-button-next:after{
  content:url(../assets/arrow_forward.svg);
}
</style>