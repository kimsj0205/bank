<template>
  <div class="card">
    <div class="inner">
      <div class="main_text_group" data-aos="fade-left"
      data-aos-duration="1000">
        <span>card</span>
        <h2>NH농협의 핫한 카드들을 <br> 만나보세요</h2>
      </div>
      <swiper
    :slidesPerView="5"
    :spaceBetween="10"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    data-aos="fade-left"
        data-aos-duration="3000"
  >
  <swiper-slide v-for="cardlist in cardlist" :key="cardlist.id" :cardlist="cardlist">
    <CardSlide :cardlist="cardlist"/>
  </swiper-slide>
  </swiper>
    </div>
  </div>
</template>
<script>
 // Import Swiper Vue.js components
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import CardSlide from '../components/CardSlide.vue';
// Import Swiper styles
import 'swiper/scss';
import { createApp, router, Vue } from "vue";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createApp({
    created() {
        AOS.init();
    },
  el: '#app',
  router,
  render: h => h(App)
})


// import required modules
export default {
  components: {
    CardSlide,
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      cardlist :[
        {id : '1', product :'zgm 할인카드', explanation: '언제 어디서든 결제하면 5% 적립!', src: require('../assets/card1.png')},
        {id : '2', product :'올바른 FLEX 카드', explanation: 'CGV, 롯데시네마 30% 청구할인', src: require('../assets/card2.png')},
        {id : '3', product :'GS리테일 농협카드', explanation: 'GS리테일 이용시 최대 2% 적립', src: require('../assets/card3.png')},
        {id : '4', product :'zgm.고향으로 카드', explanation: '이용금액 0.1%를 지역사회에 환원', src: require('../assets/card4.png')},
        {id : '5', product :'NH 농협 위카드', explanation: '대중교통, 편의점 할인 20%', src: require('../assets/card5.png')},
        {id : '6', product :'올바른SAFE카드', explanation: '대출 보유 시 매월 최대 6,000 NH포인트 적립', src: require('../assets/card6.png')},
        {id : '7', product :'KT수퍼할부카드', explanation: 'KT 이용시 통신료 할인이 가능한 제휴카드', src: require('../assets/card7.png')},
        {id : '8', product :'NH농협 K-패스카드', explanation: '버스/지하철/택시/철도 10%청구할인', src: require('../assets/card8.png')}
      ]
    }
  },
  setup() {
    return {
      // modules: [Pagination],
    };
  },
};
</script>
<style lang="scss" scoped>
.main_text_group{
  text-align: center;
  margin-top:50px;
  span{
    color:var(--main-color);
    font-weight:500;
  }
  h2{
    font-size:40px;
    line-height:50px;
  }
}
  .swiper {
    width:1200px;
    box-shadow: none;
    margin:0 auto;
  }
</style>