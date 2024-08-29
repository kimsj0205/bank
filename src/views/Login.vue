<template>
  <div class="login">
    <div class="inner">
      <h2>로그인</h2>
      <fieldset>
        <form action="#">
        <legend style="display: none;">로그인</legend>
          <input type="text" class="submit-item" placeholder="아이디 입력" v-model="userData.id">
          <input type="password" class="submit-item" placeholder="비밀번호 입력" v-model="userData.password">
        </form>
      </fieldset>
    <div class="login_button">
      <button class="submit-item btn" type="submit" :disabled="btnDisabled">로그인</button>
    </div>
    <ul class="btn_group">
      <li><a href="javascript:void(0)">공인인증서 로그인</a></li>
      <li><a href="javascript:void(0)">간편인증서 로그인</a></li>
      <li><a href="javascript:void(0)">NH인증서 로그인</a></li>
    </ul>
    <button class="join_membership"><span>아직 회원이 아니라면?</span><span>회원가입 &gt;</span></button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      userData :{
        id : '',
        password : ''
      },
      btnDisabled:true,
    }
  },
  watch: {
    userData:{
      handler(e) {
        e.id === '' || e.password === '' ? (this.btnDisabled = true) : (this.btnDisabled = false);
      },
      deep: true,
    }

  }
}
</script>
<style lang="scss" scoped>
  .login{
    margin:50px;
    text-align: center;
    .inner{
      padding:30px;
      width:500px;
      height:500px;
      box-sizing: border-box;
      background: var(--gray-color);
      border-radius:10px;
      h2{
        font-size:30px;
        margin-bottom:30px;
        font-weight: bold;
        color:var(--main-color);
      }
      fieldset{
        margin:0 auto;
        width:100%;
        form{
          input{
            width:100%;
            height:50px;
            line-height:48px;
            border:1px solid var(--gray-color);
            border-radius: 4px;;
            margin:0 auto;
            padding:0 20px;
            box-sizing: border-box;
            font-size:14px;
            &:first-of-type{
              margin-bottom:10px;
            }
          }
        }
      }
      .login_button{
        padding:10px 0;
        .submit-item{
          width:100%;
          height:50px;
          margin-top:30px;
          background: var(--gold-color);
          border:1px solid var(--gray-color);
          border-radius: 5px;
          font-size:16px;
          font-weight: bold;
          color:#fff;
          cursor:pointer;
          &:disabled{
            cursor:default;
            color:#fff;
            background:var(--black-gray-color)
          }
        }
      }
    .btn_group{
      padding: 10px;
      border-top:1px solid #d4d4d4;
      display:flex;
      align-items: center;
      justify-content: space-between;
      height:50px;
      li{
        position:relative;
        &:nth-of-type(2){
          a:before{
            position:absolute;
            display:block;
            content:"";
            width:1px;
            height:15px;
            background: #d4d4d4;
            left:-20px;
          }
          a:after{
            position:absolute;
            display:block;
            content:"";
            width:1px;
            height:15px;
            top:0;
            background: #d4d4d4;
            right:-20px;
          }
        }

      }
    }
    .join_membership{
      cursor:pointer;
      width:100%;
      height:40px;
      display:flex;
      justify-content: space-between;
      border:1px solid #ececec;
      align-items: center;
      background: #fff;
      padding:0 20px;
      border-radius: 5px;
      span{
        color:var(--dark-gray-color);
      }
      span:last-child{
        font-weight: bold;
      }
    }
    }
  }
</style>