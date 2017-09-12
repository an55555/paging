<template>
<div>
    <div class="lpagination" v-if="count>0">
      <span class="paging">
            <a v-if="actIndex!=1" @click="actIndex=1">首页</a>
            <a v-if="actIndex>1" @click="actIndex--" class="iconfont">&#xe697;</a>
            <a v-if="actIndex>3&&count>5" style="cursor: auto">...</a>
            <a v-for="(item,index) in pagingNum" :class="{pageAct:item==actIndex}" v-if="index<count" @click="actIndex=item*1">{{item}}</a>
            <a v-if="actIndex<(count-2)&&count>5" style="cursor: auto">....</a>
            <a v-if="actIndex<count"  @click="actIndex++" class="iconfont">&#xe6a7;</a>
            <a v-if="actIndex!=count" @click="actIndex=count">末页</a>
      </span>
  <!--      <span class="gotoPage" style="margin-left: 0">
        共{{totalRecords}}条记录
      </span>-->
        <span class="gotoPage">
            每页显示
            <select  class="pageSelect" v-model="pageLength">
                <option v-for="item in pageSelectArr"  :value="item" >{{item}}条/页</option>
            </select>条
        </span>
        <span class="gotoPage" v-if="count>5">
            跳至<input v-model="gotoPageNum" type="number" min="1" :max="count"  class="pageNumInput" @blur="pageNumKeyup">页<a class="pageGotoBtn" @click="actIndex=gotoPageNum*1">确定</a>
        </span>
    </div>
</div>
</template>
<script>
    export default{
        props: ['dataPage','waitData'],
        data(){
            return {
//                count:Math.ceil(this.totalRecords/this.$onePageLine),
                getDataPage:this.dataPage,
                actIndex:1,  //默认显示第一页
                gotoPageNum:1,//跳转至
                pageLength:this.dataPage.pageSelect?this.dataPage.pageSelect[0]:this.$onePageLine,//每页显示几条
                totalRecords:'',//数据总数
                /*配置相关*/
                pageSelectArr:this.dataPage.pageSelect||[10,15,20,30],//页数选择，默认[10,15,20,30]
                resTotal:(this.dataPage.translate&&this.dataPage.translate.iTotalRecords)?this.dataPage.translate.iTotalRecords:'iTotalRecords' , //反馈回来的数据总数变量名
                startRow:(this.dataPage.translate&&this.dataPage.translate.iTotalRecords)?this.dataPage.translate.startRow:'startRow' , //起始页变量名 默认“startRow”
                pageSize:(this.dataPage.translate&&this.dataPage.translate.iTotalRecords)?this.dataPage.translate.pageSize:'pageSize' , //查询页数变量名 默认“pageSize”
            }
        },
        computed:{
            count:function () {  //总页数
              return Math.ceil(this.totalRecords/this.pageLength)
            },
            pagingNum:function () {
                if(this.count<=5){
                    return [1,2,3,4,5]
                }else{
                    if(this.actIndex<=3){
                        return [1,2,3,4,5]
                    }else if(this.actIndex>=this.count-2){
                        return [this.count-4,this.count-3,this.count-2,this.count-1,this.count]
                    }else{
                        return [this.actIndex-2,this.actIndex-1,this.actIndex,this.actIndex+1,this.actIndex+2]
                    }
                }
            },

        },

        methods:{
            pageNumKeyup:function () {  //输入跳转页面格式检查
                this.gotoPageNum=this.gotoPageNum<=0?this.gotoPageNum=1:this.gotoPageNum>this.count?this.count:this.gotoPageNum
            },
            getData:function () {  //获取数据
                this.$emit('dataLoading',true)
                this.getDataPage.arg[this.startRow]=!this.dataPage.findType?(this.actIndex-1)*this.pageLength:this.actIndex
                this.getDataPage.arg[this.pageSize]=this.pageLength
                this.$httpPost(this.getDataPage.httpUrl,this.getDataPage.arg,function (res) {
                    this.totalRecords=res[this.resTotal]
                    this.$emit('transmitActIndex',res,this.pageLength*(this.actIndex-1),this.totalRecords,this.count,this.actIndex)
                }.bind(this))
            },

        },
        watch:{
            'totalRecords':function () {
                if(this.totalRecords==0) return
                if(this.actIndex>Math.ceil(this.totalRecords/this.pageLength)){
                    this.actIndex=Math.ceil(this.totalRecords/this.pageLength)
                }
            },

            'actIndex':function () {
                this.getData(this.actIndex);
            },
            'pageLength':function () {
                this.actIndex=1
                this.getData(this.actIndex);
            },
        },
        mounted:function () {
            if(!this.waitData){
                this.getData();
            }

        }
    }
</script>
<style scoped>
    body{
        font: 14px Helvetica Neue,Helvetica,PingFang SC,\5FAE\8F6F\96C5\9ED1,Tahoma,Arial,sans-serif;
    }
    *{
        box-sizing: border-box!important;
    }

    .lpagination{
        margin: 10px 0;
        spanst-style: none;
        color: #999;
        text-align: center;
        /*text-align: left;*/
    }
    .lpagination span, .lpagination .gotoPage a{
        vertical-align: middle;
        display: inline-block;
        border-radius: 3px;
        overflow: hidden;

    }
    .lpagination  .paging{
        font-size: 0;
        border: 1px solid #e2e2e2;
        border-right: 0;
    }
    .lpagination .pageSelect{
        border: 1px solid #e2e2e2;
        margin: 0 5px ;
        cursor: pointer;
        height: 28px;
        border-radius: 3px;
    }
    .lpagination  .paging a,.lpagination .gotoPage a{
        display: inline-block;
        padding:0 15px;
        line-height: 26px;
        border-right: 1px solid #e2e2e2;
        color: #333;
        cursor: pointer;
        font-size: 12px;
        /*margin:0 0 0 -1px ;*/
        background: #fff;
    }
    .lpagination .paging .pageAct{
        background: #3c98e6;
        /*background: #009688;*/
        color: #fff;
    }
    .lpagination .gotoPage{margin: 0 7px}
    .lpagination .pageNumInput{
        height: 28px;
        line-height: 28px;
        border: 1px solid #e2e2e2;
        border-radius: 2px;
        vertical-align: top;
        background-color: #fff;
        width: 50px;
        margin: 0 5px;
        text-align: center;
        outline: none;
        box-sizing: border-box!important;
    }
    .lpagination .gotoPage a.pageGotoBtn{
        border: 1px solid #e2e2e2;
        margin-left: 7px;
    }

</style>
