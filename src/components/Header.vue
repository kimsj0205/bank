<template>
  <header>
    <div class="inner">
      <h1><RouterLink to="/" active-class="active"><img src="../assets/logo.png" alt=""></RouterLink></h1>
      <div class="top">
        <form action="#">
          <select name="languages" id="lang" class="languages">
            <option value="select">Language</option>
            <option value="한국어">한국어</option>
            <option value="English">English</option>
            <option value="日本語">日本語</option>
            <option value="中國語">中國語</option>
          </select>
        </form>
        <RouterLink to="/login" active-class="active">로그인</RouterLink>
        <a href="javascript:void(0)">환경설정</a>
      </div>
      <div class="menu">
        <ul class="gnb">
          <li><a href="javascript:void(0)">은행안내</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">CEO인사말</a></li>
              <li><a href="javascript:void(0)">기업이념</a></li>
              <li><a href="javascript:void(0)">연혁</a></li>
              <li><a href="javascript:void(0)">조직도</a></li>
              <li><a href="javascript:void(0)">찾아오시는길</a></li>
              <li><a href="javascript:void(0)">영업점안내</a></li>
              <li><a href="javascript:void(0)">공고</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">윤리경영</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">윤리경영소개</a></li>
              <li><a href="javascript:void(0)">윤리경영추진전략</a></li>
              <li><a href="javascript:void(0)">윤리경영추진경과</a></li>
              <li><a href="javascript:void(0)">윤리경영시스템</a></li>
              <li><a href="javascript:void(0)">자주묻는질문</a></li>
              <li><a href="javascript:void(0)">신고제도</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">금융소비자보호</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">금융소비자보호</a></li>
              <li><a href="javascript:void(0)">금융소비자보호체계</a></li>
              <li><a href="javascript:void(0)">고객의 소리</a></li>
              <li><a href="javascript:void(0)">금융소비자보호공시</a></li>
              <li><a href="javascript:void(0)">금융소비자보호우수사례</a></li>
              <li><a href="javascript:void(0)">금융소비자정보</a></li>
              <li><a href="javascript:void(0)">금융소비자보호 금융정보포털</a></li>
              <li><a href="javascript:void(0)">보이스피싱 피해예방</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">기업지배구조</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">이사회</a></li>
              <li><a href="javascript:void(0)">이사회 공시</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">경영정보</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">공시</a></li>
              <li><a href="javascript:void(0)">재무현황</a></li>
              <li><a href="javascript:void(0)">국제신용등급</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">ESG경영</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">ESG경영</a></li>
              <li><a href="javascript:void(0)">사회공헌</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">채용정보</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">인재상</a></li>
              <li><a href="javascript:void(0)">인사제도</a></li>
              <li><a href="javascript:void(0)">채용절차</a></li>
              <li><a href="javascript:void(0)">FAQ</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">홍보센터</a>
            <ul class="submenu">
              <li><a href="javascript:void(0)">NH뉴스</a></li>
              <li><a href="javascript:void(0)">영상광고</a></li>
              <li><a href="javascript:void(0)">인쇄광고</a></li>
              <li><a href="javascript:void(0)">CI</a></li>
              <li><a href="javascript:void(0)">연차보고서</a></li>
              <li><a href="javascript:void(0)">올원프렌즈 캐릭터</a></li>
              <li><a href="javascript:void(0)">스포츠단</a></li>
              <li><a href="javascript:void(0)">NH WM마스터즈</a></li>
              <li><a href="javascript:void(0)">NH농협은행 10년사</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script >
export default {
  
}
</script>
<style lang="scss" scoped>
  header{
    width:100%;
    height:120px;
    border-bottom:1px solid var(--gray-color);
    background: #ffffff;
    .inner{
      h1{
        height:60px; line-height:80px; float:left;
      }
      .top{
        height:60px; display:flex;justify-content: flex-end;
        gap:10px;
        line-height:60px;
        a{
          transition:.5s;
          border-radius: 15px;
          margin:10px 0;
          line-height:40px;
          position:relative;
        }
        a:hover{
          background:var(--main-color);
          color:#fff;
          border-radius: 10px; font-weight:700
        }
        form{
          padding:0 20px;
          .languages{
            width:150px;
            padding:5px;
            border:1px solid #b4b4b4;
            border-radius:3px;
            border-radius: 4px;
            padding: 5px 30px 5px 10px;
          }
          &:focus{
            border:1px solid var(--main-color)
          }
        }
        a{
          padding:0 40px;
        }
      }
      .gnb{
        display:flex; justify-content: center;  height:60px; gap:10px;
        >li{
          position:relative;
          flex:1;
          >a{
            display:block;
            line-height:60px; text-align:center;
          }
          ul{
            display:none;
            position:absolute;
            z-index:99;
            top:60px;
            left:0;
            width:250px;
            background: #fff;
            outline:1px solid var(--gray-color);
            li{
              line-height:40px;
              padding-left:20px;
              box-sizing:border-box;
              a{
                display:block;
              }
            }
            li:hover{
              background: var(--main-color);
              color:#fff;
            }
            li:last-child{
              border-bottom:3px solid var(--main-color)
            }
          }
        }
        >li:hover{
          ul{
            display:block;
          }
          >a{
            outline:1px solid var(--gray-color)
          }
        }
      }
    }
  }
</style>