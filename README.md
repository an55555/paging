# paging

**[Demo](https://an55555.github.io/paging-VUE/dist/)**

```html
     <paging-data
                :dataPage="getPageData"
                v-on:transmitData="pageCallback"
                v-on:dataLoading="pageGetDataStart"
                ref="paging">
        </paging-data>
```

**配置参数**

```javascript
getPageData:{
           httpUrl:'/group/getGroupList',  //分页绑定的接口
           arg:{                          //接口参数
               groupName:'',    
               state:7
                  },
           findType:'page', //直接根据页数查询,如果没有配置此项，默认按字段起始位置查询（可无）
                 pageSelect:[5,10],//自定义每页显示几条选项
           translate:{  //字段名转换（可无）
                         resTotal:'totalCount',//回调的总条数名字，默认为iTotalRecords（可无）
                            startRow:'curPage',//开始页名字，默认startRow（可无）
                            pageSize:'pageSize2',//查询页数,默认pageSize（可无）
           },
             pageInfo:{  //分页相关信息
                             actIndex:'',//actIndex:保存当前显示的数据是第几条开始的
                             dataTotal:'',//dataTotal:保存一数据总数
                             count:'',// count:保存页数总数
                             pageLength:''//每页几条
                         }
}
```

**分页开始获取数据的回调**

```javascript
pageGetDataStart:function () {
  this.loading.loadingDataMark=true
},
```

**接收分页取得的数据**

```javascript
       pageCallback:function (res,pageInfo) {
                this.modelData=res.data;
                this.$nextTick(function(){
                    this.loading.loadingData=false  //隐藏加载动画
                })
                
                this.getPageData.pageInfo=pageInfo
            },
```

**手动触发分页获取数据**

```javascript
 this.$refs.paging.getData()
```

**取消默认获取数据**

使用组件的地方添加属性 waitData

```html
<paging-data
        :dataPage="getPageData"
        v-on:transmitData="pageCallback"
        v-on:dataLoading="pageGetDataStart"
        waitData=true 
        ref="paging">
</paging-data>

```
