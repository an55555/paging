<template>
    <div id="example">
    <span class="btn" style="margin-bottom: 10px" @click="$refs.paging.getData()" >重新获取当前页数据</span>
        <span class="" style="margin-bottom: 10px" v-show="loading.loadingData">获取数据中...</span>
        <div class="tableOutBox " style="min-height: 300px;position: relative">
            <span class="loadAni" v-show="loading.loadingData"></span>
            <table  class="tableStyle" v-show="!loading.loadingData">
                <thead>
                <tr>
                    <th  class="firstTd"><p class="th-p">序号</p></th> <th><p class="th-p">用户名</p></th> <th><p class="th-p">管理员</p></th> <th><p class="th-p">角色</p></th> <th><p class="th-p">分组</p></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in modelData">
                    <td  class="firstTd"><p class="td-p">{{getPageData.pageInfo.pageLength*(getPageData.pageInfo.actIndex-1)+index+1}}</p></td>
                    <td><p class="td-p">{{item.award_count}}</p></td>
                    <td><p class="td-p">{{item.badge_id}}</p></td>
                    <td><p class="td-p">{{item.link}}</p></td>
                    <td><p class="td-p">{{item.name}}</p></td>
                </tr>

                </tbody>
            </table>
        </div>
        <paging-data
                :dataPage="getPageData"
                v-on:transmitData="pageCallback"
                v-on:dataLoading="pageGetDataStart"
                ref="paging">
        </paging-data>
        <div style="text-align: center;color: orangered">
            分页组件内调用接口的函数名为$httpGet（src/config/global/global.js中声明的）
        </div>

    </div>
</template>

<script>
    export default {
        components:{
            'paging-data':r=>require.ensure([], () => r(require('./components/paging.vue')), 'paging'),
        },
        data () {
            return {
                modelData:[],
                getPageData:{
                    httpUrl:'https://api.stackexchange.com/2.2/badges',  //分页绑定的接口
                    arg:{                          //接口参数
                        order:'desc',
                        sort:'rank',
                        site:'stackoverflow'
                    },
                    findType:'page', //直接根据页数查询,如果没有配置此项，默认按字段起始位置查询（可无）
//                    pageSelect:[5,10],
                    translate:{  //字段名转换（可无）
                        resTotal:'quota_max',//回调的总条数名字，默认为iTotalRecords（可无）
                        startRow:'page',//开始页名字，默认startRow（可无）
                        pageSize:'pagesize',//查询页数,默认pageSize（可无）
                    },
                    pageInfo:{
                        actIndex:'',//actIndex:保存当前显示的数据是第几条开始的
                        dataTotal:'',//dataTotal:保存一数据总数
                        count:'',// count:保存页数总数
                        pageLength:''//每页几条
                    }
                },
                loading:{
                    loadingData:false
                }
            }
        },
        methods:{
            /*开始请求数据*/
            pageGetDataStart:function () {
                this.loading.loadingData=true
            },
            /*获得数据后的回调*/
            pageCallback:function (res,pageInfo) {
                this.modelData=res.items;
                this.$nextTick(function(){
                    this.loading.loadingData=false  //隐藏加载动画
                })
                
                this.getPageData.pageInfo=pageInfo
            },

        },
        mounted(){
/*            this.$postHttp("http://imoocnote.calfnote.com/inter/getClasses.php",{curPage:'5'},function (res) {
                
            })*/
        }
    }
</script>

<style>
    @import "https://an55555.github.io/CSS-Layout/style-l.css";
    .timeBox{
        display: inline-block;

    }
    h1.sayHello{
        padding: 0 40px;
    }
    #example{
        padding: 0 40px;

    }
    .tableStyle {
        min-width: 100%;
        background: #fff;
        border-collapse:collapse;  /*重叠的border合度为一条线*/
        /*控制cellpadding-单元格间距-单元边沿与单元内容之间的空间*/
        margin: 0;
        padding: 0;
    }

    .tableStyle td, .tableStyle th {
        text-align: left;
        border: solid 1px #cccccc;
        padding:0; /*控制cellpadding-单元格间距*/
    }
    .tableStyle th {  background: #f3f3f3;  }
    .tableStyle th .th-p{
        color: #666;
        font-weight: bold;
        word-break: keep-all;   /*th里的内容强制不换行，即最小宽度为字段宽度*/
    }

    .tableStyle td.firstTd {
        width: 50px;
        text-align: center;
    }
    .tableStyle td {
        white-space: normal;
        word-break: break-all;
        /*background-clip: padding-box;*/
    }
    .tableStyle .td-p,
    .tableStyle .th-p{
        padding: 10px;
        margin: 0;
    }
    .tableStyle tr:nth-child(even){  background: #fafafa;  }
    .tableStyle .tableCheckBox{position: relative;top: 1px}
    /*.tableStyle tr:hover{  background: #f5f5f5}*/
    .loadAni{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border:solid 3px #3c98e6;
        position: absolute;
        animation: rote 2s infinite;
        left: 50%;
        margin-left: -30px;
        top: 50px;
    }
    .loadAni:after{
        content: '';
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -5px;
        top: -6px;
    }
    @keyframes rote {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }

</style>