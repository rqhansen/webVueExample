<template>
  <div class="rq-agree">
    <vux-header :hasBack="true"
                @click-left="$router.go(-1)">
      <span slot="center">rq手游开户协议</span>
    </vux-header>
    <div class="agree-wrapper">
      <div class="agree-content">
        <p class="title">一. 服务协议的接纳</p>
        <p class="content">合法购彩年龄的用户在注册过程中勾选"同意"《rq手游开户协议》即表示用户完全接受本协议项下的全部条款。在任何情况下，用户使用rq手游的任何服务，即视为用户完全同意并接受本服务协议，受到本服务协议的指引和约束。</p>
        <p class="title">二. 服务协议的修订与新增</p>
        <p class="content">
          rq手游有权在必要时修改服务条款，服务条款一旦发生变动，将会在重要页面上提示修改内容。如果用户不同意所改动的内容，用户可以主动取消获得的相关服务。如果用户继续享用服务，则视为接受服务条款的变动。 rq手游将不时提供其它服务，而这些其它服务可能是受不同的服务条款和条件约束的，若新服务未发布服务条款和条件时，则适用于本条款，其它未尽事宜，rq手游有限公司拥有最终解释权利。
        </p>
        <p class="title">三. 相关定义</p>
        <p class="item">
          1、用户：指在rq手游注册登记，并得到rq手游在线认可，有资格享受rq手游服务的注册会员。
        </p>
        <p class="item">
          2、购彩帐户：指用户按rq手游的要求，在rq手游网站上设立的账户。购彩账户用于存放用户通过rq手游各充值渠道充值现金和购彩中奖的奖金。
        </p>
        <p class="title">四. 本协议服务范围</p>
        <p class="content">
          本协议服务范围包括：提供购买彩票的平台；提供彩票相关资讯；提供在线预付支付结算服务。彩种包括高频彩和低频彩等。
        </p>
        <p class="title">五. 用户资料隐私和安全</p>
        <p class="content">
          rq手游承诺对用户注册资料隐私信息绝对保密。rq手游对用户注册信息提供最大限度的安全保障。同时，用户务必对其用户密码、个人帐号等信息自行保密，免被盗用或篡改。另外每个用户都要对其帐户中的所有活动和事件负全责。用户若发现任何非法使用用户帐号或安全漏洞的情况，请立即与rq手游联系。
        </p>
        <p class="title">六. 免责条款</p>
        <p class="tip">发生下列情况时，rq手游不予承担任何法律责任：</p>
        <p class="item">1、用户资料泄露：由于用户将密码告知他人或与他人共享注册帐户，或由于用户的疏忽，由此导致的任何个人资料泄露，以及由此产生的纠纷。无论何种原因导致的用户资料未授权使用、修改，用户密码、个人帐号或注册信息被未授权篡改、盗用而产生的一切后果。</p>
        <p class="item">
          2、不可抗力及不可预见的情势发生：不可抗力和不可预见情势包括：自然灾害、政府行为、罢工、战争等；黑客攻击、计算机病毒侵入或发作、政府管制、彩票发行和销售机构的原因、彩票出票机或服务的故障、网络故障、国家政策变化、法律法规之变化等。因不可抗力和不可预见情势造成：暂时性关闭。因不可抗力和不可预见的情势造成本协议不能履行的。
        </p>
        <p class="item">
          3、用户原因或第三方原因造成损失：由于用户自身原因、或违反法律法规，以及第三方的原因，造成用户无法使用彩票服务或产生其他损失的。
        </p>
        <p class="item">
          4、用户使用链接或下载资料产生的损害：由于使用与rq手游链接的其它网站，或者使用通过rq手游下载或取得的资料，造成用户资料泄露、用户电脑系统损坏等情况及由此而导致的任何争议和后果。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agreement'
}
</script>

<style lang="scss" scoped>
.rq-agree {
  .agree-wrapper {
    height: calc(100vh - 88px);
    overflow: scroll;
    .agree-content {
      padding: 30px;
    }
    .title {
      color: #ec0022;
      font-size: 24px;
    }
    .content {
      margin: 20px 0;
      font-size: 16px;
      text-indent: 30px;
    }
    .item {
      @extend .content;
    }
    .tip {
      @extend .content;
      text-indent: 60px;
    }
  }
}
</style>
