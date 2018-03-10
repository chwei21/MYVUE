new Vue({
    el:'#app',
    data:{
        //购物车中的数据
        shopListArr:[],
        isSelectedAll:false,
        totalPrice:0
    },
    mounted(){
        //请求本地数据
        this.getLocalData();
    },
    // filter:{
    //     moneyForm(money){
    //         return '￥'+ money;
    //     }
    // },
    methods:{
        //请求本地数据
        getLocalData(){
            // GET /someUrl
            this.$http.get('data/cart.json').then(response => {
                const res=response.body;
                if(res){
                    this.shopListArr=res.allShops.shopList;
                }
                }, response => {
                    alert('请求数据失败！')
                });
        },
        singerShopPrice(shop,flag){
            if(flag){
                shop.shopNumber +=1;
            }else{
                shop.shopNumber -=1;
                if(shop.shopNumber<=1){
                    shop.shopNumber=1;
                    return;
                }
            }
        },

        selecoArr(flag){
            this.isSelectedAll=!flag;
            //遍历数据
            this.shopListArr.forEach((value,index)=>{
                if(typeof value.checked==='undefind'){
                    this.$set(value,'checked',!flag);
            }else{
                    value.checked=!flag;
            }
            });
        },
        getAllShop(){
            let totalP
        }

    }
})