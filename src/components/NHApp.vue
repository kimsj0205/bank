<template>
  <div class="appEvent">
    <img src="../assets/nhbank_app.jpg" alt="">
    <div class="inner">
      <div class="text_group" data-aos="fade-up"
      data-aos-duration="1000">
        <h2>NH 스마트 뱅크</h2>
        <p>이제 집에서도 간편하게! 내 손 안으로 즐기는 NH</p>
      </div>
      <div class="QR" data-aos="fade-up"
      data-aos-duration="2000">
        <a href="javascript:void(0)" class="product">
          <img src="../assets/qr.png" alt="">
          <h6>구글 플레이스토어 바로가기</h6>
        </a>
        <a href="javascript:void(0)" class="product">
          <img src="../assets/qr.png" alt="">
          <h6>앱스토어 바로가기</h6>
        </a>
      </div>
      <div class="app_sub" data-aos="fade-up"
      data-aos-duration="1000" data-aos-delay="200">
        <img src="../assets/app_sub.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { createApp, router } from "vue";
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


export default {
  
}
</script>
<style lang="scss" scoped>
  .appEvent{
    overflow: hidden;
    position:relative;
    width:100%;
    height:600px;
    background: rgba(0, 0, 0, 0.151);
    >img{
      right:0;
      position:absolute;
      width:800px;
      z-index:-1;
    }
    .inner{
      .text_group{
        height:180px;
        box-sizing: border-box;
        padding:50px 0;
        color:var(--main-color);
        h2{
          font-size:60px;
          font-weight: bold;
          padding-bottom:20px;
        }
        p{color:#000;}
      }
      .QR{
        display:flex;
        gap:30px;
        .product{
          text-align: center;
          background-color:rgba(255, 255, 255, 0.425);
          width:250px;
          height:250px;
          border-radius: 20px;
          h6{
            font-weight: 700;
          }
          img{
            display:block;
            margin:0 auto;
            width:200px;
          }
        }

      }
      .app_sub{
        img{
          width:350px;
          position:absolute;
          bottom:-250px;
          right:10%;
        }
      }
    }

  }
</style>