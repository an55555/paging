# paging

```html
  <paging-com   :dataPage="getPageData" v-on:transmitActIndex="getActIndexPage" v-on:dataLoading="pageGetDataStart" ref="paging"></paging-com>
```

**配置参数**

```javascript
getPageData:{
            httpUrl:'/group/getGroupList',  //分页绑定的接口
            arg:{                          //接口参数
                groupName:'',    
                state:7
            },
            findType:'page', //如果直接根据页数查询,如果没有配置此项，默认按字段起始页查询（可无）
            translate:{  //字段名转换
                resTotal:'iTotalRecords',//回调的总条数名字，默认为iTotalRecords（可无）
                startRow:'startRow2',//开始页名字，默认startRow（可无）
                pageSize：'pageSize2',//查询页数,默认pageSize（可无）
            },
            actIndex:0,    //保存当前显示的数据是第几条开始的
            dataTotal:'', //保存一数据总数
            count:'',//保存页数总数
            actPage:''//保存当前是第几页
        },
```

**分页开始获取数据的回调**

```javascript
pageMarkGetDataStart:function () {
  this.loading.loadingDataMark=true
},
```

**接收分页取得的数据**

```javascript
getActIndexPage:function (res,actIndex,dataTotal,count,actPage) {
      this.modelData=res.groups;
      this.$nextTick(function(){
          this.loading.loadingData=false  //隐藏加载动画
      })
      this.getPageData.actIndex=actIndex
      this.getPageData.dataTotal=dataTotal
      this.getPageData.count=count;
      this.getPageData.actPage=actPage
  },
```

**手动触发分页获取数据**

```javascript
 this.$refs.paging.getData()
```

**取消默认获取数据**

使用组件的地方添加属性 waitData

```html
  <paging-com   :dataPage="getPageData" waitData=true v-on:transmitActIndex="getActIndexPage" v-on:dataLoading="pageGetDataStart" ref="paging"></paging-com>
```
