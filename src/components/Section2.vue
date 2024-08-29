<template>
  <div class="quick_prev_bank_list">
    <div class="inner">
      <ul class="menu align-center expanded text-center SMN_effect-21">
        <li><a href="javascript:void(0)"><img src="../assets/quick1.png" alt="">큰글뱅킹</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick2.png" alt="">거래내역</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick3.png" alt="">즉시이체</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick4.png" alt="">계좌조회</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick5.png" alt="">예금가입</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick6.png" alt="">펀드가입</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick7.png" alt="">대출가입</a></li>
        <li><a href="javascript:void(0)"><img src="../assets/quick8.png" alt="">빠른조회</a></li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  
}
</script>
<style lang="scss" scoped>
.quick_prev_bank_list{
  width:100%;
  height:200px;
  background:#f8f8f8ec;
  .menu{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:30px;
    height: 200px;
    li{
      width:calc(100% / 8);
      img{
        display:block;
        padding:10px 0;
        margin:0 auto;
      }
      a{
        font-weight:bold;
        display:block;
        padding: 15px 25px;
        position:relative;
        text-align:center;

      }
      a:before, a:after{
        content:"";
        width:0;
        height:2px;
        background:rgb(106, 188, 255);
        position:absolute;
        top:0;
        left:50px;
        transition:all 0.3s ease 0s;
      }
      a:after{
        top:auto;
        bottom:0;
      }
      > a:hover:before,> a:hover:after{
        width:100%;
        left:0;
      }
    }
  }
}
  
</style>