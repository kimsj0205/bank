<template>
    <a href="javascript:void(0)">
      <div class="figure">
      <img :src="`${cardlist.src}`" alt="">
        </div>
        <div class="text_group">
          <h4>{{ cardlist.product }}</h4>
          <p>{{ cardlist.explanation }}</p>
        </div>
      </a>
</template>
<script>
export default {
  props : {
    cardlist :{
      type: Object,
      required : true,
      default: {}
    }
  }
}
</script>
<style lang="scss" scoped>
    .swiper-wrapper{
      .swiper-slide{
        padding:30px;
        flex-direction: column;
        a{
          position: relative;
          display:block;
          .text_group{
          padding:30px;
          h4{
            width:100%;
            font-size:20px;
            margin-bottom:10px;
          }
          p{
            color:var(--black-gray-color);
            font-size:12px;
          }
          
        }
        .figure{
          width:150px;
          overflow: hidden;
          position:relative;
          margin:0 auto;
          box-shadow: 1px 3px 4px #b9aeaeec;
          border-radius:10px;
          >img{
            width:150px;
            margin:0 auto;
          }
          &:before{
              position:absolute;
              top:0;
              left:-75%;
              z-index:2;
              display:block;
              content:'';
              width:50%;
              height:100%;
              background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
              background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
              -webkit-transform: skewX(-25deg);
              transform: skewX(-25deg);
              opacity: 0;
            }
            &:hover:before{
                -webkit-animation: shine .75s;
              animation: shine .75s;
              }
        }
        }

      }
    }
</style>