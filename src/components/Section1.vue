<template>
  <section class="quick-service .scroll-spy">
    <hr role="tournament2">
    <div class="inner" >
      <span>NH만의 특별한 서비스</span>
      <h4 data-aos="fade-right" data-aos-duration="1000">NH 뱅크의<br>특별한 서비스를 만나보세요</h4>
      <div class="item_box" ref="showItem" data-aos="fade-right" data-aos-duration="3000">
        <div class="item">
          <img src="../assets/quickMenu1.jpg" alt="">
          <div class="text_group">
            <p>카드 자동납부 서비스</p>
            <a href="javascript:void(0)">바로가기 &gt;</a>
          </div>
        </div>
        <div class="item">
          <img src="../assets/quickMenu2.jpg" alt="">
          <div class="text_group">
            <p>OTT 할인 서비스</p>
            <a href="javascript:void(0)">바로가기 &gt;</a>
          </div>
        </div>
        <div class="item">
          <img src="../assets/quickMenu3.jpg" alt="">
          <div class="text_group">
            <p>공연 할인 서비스</p>
            <a href="javascript:void(0)">바로가기 &gt;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
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

export default {

}
</script>
<style lang="scss" scoped>
  .quick-service{
    padding:80px 0;
    hr[role="tournament2"] {
      border: 0px solid;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 140, 186, 0.75), rgba(0, 0, 0, 0));
      margin-bottom: 100px;
      display: block;
    }
    hr[role="tournament2"]::before {
      position: absolute;
      background-color: #fff;
      border: 1px solid;
      border-color: #008cba;
      border-left: 0px solid;
      border-top: 0px solid;
      padding: 10px;
      transform: rotate(45deg);
      left: 50%;
      margin: -10px 0px 0px -22px;
      content: "";
  }
    span{
      color:var(--main-color);
      display:block;
      font-weight:600;
    }
    .item_box{
      padding-top:30px;
      display:flex;
      gap:30px;
      .item{
        display:flex;
        flex-direction: column;
        align-content: center;
        width:calc(100% / 3);
        border:1px solid var(--gray-color);
        border-radius:15px;
        box-shadow:2px 2px 5px #ececec;
        flex-wrap: wrap;
        .text_group{
          padding:20px;
          a{
            display:block;
            background-color:#789ab9;
            width:150px;
            height:30px;
            text-align:center;
            line-height:30px; color:#fff;border-radius:5px;
            transition:.3s;
            &:hover{
            outline:1px solid var(--gray-color);
            background-color:#fff;
            color:var(--main-color);
            box-shadow: 2px 2px 2px #ececec;
            font-weight: 700;
          }
          }
          p{
            font-size:20px;
            padding-bottom:20px;
          }
        }
        img{
          width:100%;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
      }
    }
  }
  h4{
    padding:20px 0;
    font-size:40px;
    font-weight:500;
  }
  

</style>