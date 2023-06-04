<template>
  <div class="store-list" v-if="index === 0">
    <van-tree-select
        v-model:main-active-index="activeIndex"
        height="88vw"
        :items="items"
        @click="navClick"
      >
      <template #content>
        <div v-for="(item, index) in subItem" class="item-bg">
          <PressingListItem :item="item"/>

        </div>
      </template>
    </van-tree-select>
  </div>

  <div v-else>
    {{ pressingData.content}}
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import PressingListItem from './PressingListItem.vue'
  export default {
    components: {
      PressingListItem
    },
    props: ["index", "pressingData"],

    setup(props){
      let data= reactive({
        activeIndex: 0,
        items: [],
        subItem:[]
      })

      // 初始化数据
      const initData=()=>{
        let newArray=[]
        props.pressingData?.item?.forEach((item, index)=>{
          newArray.push({
            text:item.text
          }) 
          if(data.activeIndex === index){
            data.subItem=item.children
          }
          
        })
        data.items=newArray
       
      }
      initData()
      const navClick =(i)=>{
        // console.log(i)
        data.activeIndex=i
        initData()
      }

      return {
        ...toRefs(data),
        navClick
      }
    }
  }
</script>

<style lang="less" scoped>
.store-list{
  margin-top: 20px;
  .item-bg {
    padding:10px;
  }
}
/deep/ .van-tree-select_item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-itel--select::before {
  background-color:  #ffc400;
}
</style>