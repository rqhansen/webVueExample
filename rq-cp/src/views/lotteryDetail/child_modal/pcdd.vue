<template>
  <div class="pcdd-betting balls">
    <div class="balls-wapper">
      <div class="all-balls">
          <span v-for="(ball,ballIndex) of ballsList"
                  :key="ballIndex"
                  :class="{'selected':ball.selected}"
                  @click="chooseBall(ball,ballIndex)">{{ball}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['bettingPlay','code'],
  data(){
    return {
      layout:{layout:{}},
      ballsList:[],//号码数据
      isMultipleRate:false, //单多赔率标识
      // btns:[], //多选框选择的结果
      selectedBalls : [], //选择的号码结果
      lotteryPlayId:'',//玩法Id
      computeNote:{}, //不同玩法的算法
    }
  },
  watch:{
    bettingPlay:{
      handler(newVal){
        this.init(newVal);
      },
      deep:true
    }
  },
  methods:{
    chooseBall(item,idx){
      if (!item.selected) {
        this.selectedBalls.push(item)
      } else {
        this.selectedBalls = this.selectedBalls.filter(value => value.ball !== item.ball);
      }
      let balls = this.selectedBalls.map(value => value.ball);
      let num = this.computeNote[this.lotteryPlayId](balls.join(','))
      this.$set(this.result, 'num', num);
      let copylist = JSON.parse(JSON.stringify(this.ballsList));
      copylist[idx].selected = !item.selected
      this.ballsList = copylist;
    },
    hanlderOdds(){
      let rates = this.layout.rates;
      rates.length>1?this.isMultipleRate = true :this.isMultipleRate=false;
      this.ballsList.forEach(item =>{
        item.balls = item.balls.reduce((acc,curr,idx)=>{
         acc.push({ball:curr,selected:false,odds:this.isMultipleRate?rates[idx].maxOdds:null});
         return acc;
        },[])
      })
    },
    init(newVal){
        this.computeNote = require(`./common_modal/${this.code}.js`).default;
        this.selectedBalls = [];
        this.layout = newVal.layout;
        this.lotteryPlayId = newVal.lotteryPlayId;
        this.ballsList = newVal.layout.layout;
        this.hanlderOdds();
    }
  },
  created(){
    this.init(this.bettingPlay);
  }
}
</script>

<style>
</style>
