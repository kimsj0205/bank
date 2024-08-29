<template>
  <div class="news">
    <div class="inner">
      <div class="text_group" data-aos="fade-right"
      data-aos-duration="1000">
        <span>News</span>
        <h2 >농협의 새로운 소식을<br> 만나보세요.</h2>
        <ul class="gnb" data-aos="fade-right"
        data-aos-duration="2500">
          <li :class="{active: isActiveA}"><a href="javascript:void(0)" @click="eventActiveA"  >공지사항</a>
            <div class="news_contents">
              <ul :class="{active: isActiveA}">
                <li><span class="new_news">New!</span><a href="javascript:void(0)">인터넷 FX딜링 HTS 거래 약정서 개정 안내</a></li>
                <li><span class="new_news">New!</span><a href="javascript:void(0)">압류방지계좌 약관 개정 안내</a></li>
                <li><a href="javascript:void(0)">주택도시기금대출 상품 내용 개정 안내</a></li>
                <li><a href="javascript:void(0)">예금금리 변경 안내</a></li>
                <li><a href="javascript:void(0)">금융거래목적 확인 의무화 안내</a></li>
              </ul>
            </div>
          </li>
          <li :class="{active: isActiveB}" @click="eventActiveB">보안소식
            <div class="news_contents">
              <ul :class="{active: isActiveB}">
                <li><span class="new_news">New!</span><a href="javascript:void(0)">농협 앱 사칭 등 악성앱/스미싱(피싱) 주의 알림</a></li>
                <li><span class="new_news">New!</span><a href="javascript:void(0)">보이스피싱 발생 시 대응 요령</a></li>
                <li><a href="javascript:void(0)">개인(금융)정보 노출 시 전기통신금융사기 피해자 조치사항</a></li>
                <li><a href="javascript:void(0)">본인계좌 일괄지급정지 서비스 주요 안내사항</a></li>
                <li><a href="javascript:void(0)">	[긴급] 조합 사칭 금융사기 주의 안내</a></li>
              </ul>
            </div>
          </li>
          <li>보안서비스</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      isActiveA : true,
      isActiveB : false,
    }
  },
  methods :{
    eventActiveA(){
      this.isActiveA = !this.isActiveA;
      this.isActiveB = !this.isActiveA;
    },
    eventActiveB(){
      this.isActiveB = !this.isActiveB;
      this.isActiveA = !this.isActiveB;
    }
  }
}
</script>
<style lang="scss" scoped>
  .news{
    width:100%;
    margin:200px 0 100px;
    .inner{
      height:350px;
      display:flex;
      justify-content: space-between;
      .text_group{
        width:100%;
        position: relative;
        span{
          color:var(--main-color);
          font-weight:500;
        }
        h2{
          width:400px;
          font-size:40px;
          line-height:50px;
          padding:10px 0;
          
        }
        .gnb{
          position:relative;
          >li{
            width:400px;
            cursor:pointer;
            font-size:20px;
            padding:20px 0;
            box-sizing: border-box;
            transition:.3s;
            &.active{
              color:var(--main-color);
              font-weight: 700;
              font-size:22px;
              
            }
            &:hover{
              color:var(--main-color);
              font-weight: 700;
              font-size:22px;
              
            }
            .news_contents{
              width:800px;
              position:absolute;
              left:400px;
              top:-140px;
              ul{
                display:none;
                &.active{
                  display:block;
                }
                >li{
                  display:flex;
                  padding:20px;
                  align-items: center;
                  font-size:16px;
                  border-bottom:1px solid #d1d1d1;
                  position:relative;
                  font-weight: 300;
                  color:#333;
                  &:first-of-type{
                    border-top:1px solid #d1d1d1;
                  }
                  &:before{
                    content:'';
                    display:block;
                    width:5px;
                    height:5px;
                    background-color:#afcbdf;
                    top:50%;
                    left:0;
                    position:absolute;
                    border-radius:50%;
                  }
                  .new_news{
                    color:#fff;
                    background: var(--main-color);
                    padding:5px 10px;
                    border-radius: 3px;
                    display:block;
                    margin-right:10px;
                  }
                  a{
                    display:block;
                    
                  }
                  
                }
              }
            }
            >&.active{
              color:var(--main-color);
              font-weight: 700;
            }
            >&:hover{
                color:var(--main-color);
                font-weight:700;
              
            }
          }
        }
      }
    }
  }
</style>