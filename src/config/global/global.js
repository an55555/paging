/**
 * Created by 兰江州 on 2017/9/16.
 */
module.exports={
    install(Vue,options){
        Vue.prototype.$onePageLine=5;
        Vue.prototype.$jsonToParams=function (arg) {
            var arr=[]
            for(var i in arg){
                arr.push(i+'='+arg[i])
            }
            if(arr.length){
                return "?"+arr.join("&")
            }else{
                return
            }

        }
        Vue.prototype.$httpGet=function (dataAPI,arg,fn) {
            var xhr=new XMLHttpRequest()
            xhr.onreadystatechange=function () {
                if(xhr.readyState==0){

                }
                if(xhr.readyState==1){

                }
                if(xhr.readyState==2){

                }
                if(xhr.readyState==3){

                }
                if(xhr.readyState==4){
                    if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                        if(Object.prototype.toString.call(xhr.responseText)!="[object Object]"){
                            fn(JSON.parse(xhr.responseText))
                        }else{
                            fn(xhr.responseText)
                        }
                    }else{
                        console.log("request was unsuccessful"+xhr.status)
                    }
                }

            }
            xhr.open("get",dataAPI+this.$jsonToParams(arg),true)
            xhr.send(null)
        };
        Vue.prototype.$httpPost=function (dataAPI,arg,fn) {
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function () {
                if(xhr.readyState==0){

                }
                if(xhr.readyState==1){

                }
                if(xhr.readyState==2){

                }
                if(xhr.readyState==3){

                }
                if(xhr.readyState==4){
                    if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                        if(Object.prototype.toString.call(xhr.responseText)!="[object Object]"){
                            fn(JSON.parse(xhr.responseText))
                        }else{
                            fn(xhr.responseText)
                        }

                    }else{
                        console.log("request was unsuccessful"+xhr.status)
                    }
                }

            }
            var argData=new FormData()
            for(var i in arg){
                argData.append(i,arg[i])
            }
            xhr.open("post",dataAPI,true)
            xhr.send(argData)
        };
    }
}