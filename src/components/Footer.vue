<template>
  <footer>
    <div class="inner">
      <div class="top">
        <ul class="footerMenu">
          <li><a href="javascript:void(0)">보호금융상품등록부</a></li>
          <li class="accent"><a href="javascript:void(0)">개인정보처리방침</a></li>
          <li class="accent"><a href="javascript:void(0)">신용정보활용체제</a></li>
          <li><a href="javascript:void(0)">그룹내고객정보제공내역조회</a></li>
          <li><a href="javascript:void(0)">개인신용정보제공사실조회</a></li>
          <li><a href="javascript:void(0)">경영공시</a></li>
        </ul>
        <form action="#">
          <select name="family_menu" id="lang" class="family_menu">
            <option value="select">계열사 / 관련 사이트</option>
            <option value="농협중앙회">농협중앙회</option>
            <option value="NH농협은행">NH농협은행</option>
            <option value="NH농협금융지주">NH농협금융지주</option>
            <option value="NH농협생명">NH농협생명</option>
            <option value="NH농협손해보험">NH농협손해보험</option>
            <option value="NH투자증권">NH투자증권</option>
          </select>
        </form>
      </div>
      <div class="copyright">
        <h2><img src="../assets/logo.png" alt=""></h2>
        <address>
          <p><span>농협은행 전용 1661-3000, 1522-3000</span><span>농 축협 전용 1661-2100, 1522-2100</span></p>
          <p><span>공용 1588-2100 / 1544-2100</span><span>해외 82-2-3704-1004</span></p>
          <small>Copyright NH Bank. All Right Reserved.</small>
        </address>
      </div>
    </div>

  </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  footer{
    color:#ffffff;
    width:100%;
    background: #1f2358;
    height:300px;
    .top{
      display:flex; align-items: center; 
      justify-content: space-between;
      .family_menu{
        width:200px;
        padding:5px;
        border:1px solid #b4b4b4;
        border-radius:3px;
        option{
          border-radius: none;
        }
      }
      .footerMenu{
        height:70px;
        display:flex;
        justify-content: center;
        gap:30px;
        align-items: center;
        li{
          font-size:14px;
          &.accent{
            font-weight:700;
            color:var(--main-color);
          }
        }
      }
    }

    .copyright{
      h2{
        filter: brightness(0) invert(1);
      }
      address{
        p{
          padding:10px 0;
        }
      }
    }
  }
</style>