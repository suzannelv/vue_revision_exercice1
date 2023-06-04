<template>
  <div class="storeDetails">
    <HeaderPage title="SHOP"/>
    <div class="content">
      <div class="img"></div>
      <div class="foodStore">
        <!-- <div class="sort">

        </div> -->
        <div class="name">
          {{ title }}
          <img :src="img" alt="" class="store-img">
        </div>

        <van-tabs color="#ffc400">
          <van-tab v-for="(item, index) in storeData" :title="item.name">
            <PressingList :index="index" :pressingData="item.data"/>
          </van-tab>
        </van-tabs>

      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import HeaderPage from '@/components/HeaderPage.vue';
import PressingList  from "./cpns/PressingList.vue"
export default {
  components: {
    HeaderPage,
    PressingList
  },
  setup(){
    let data = reactive({
      title: "Pressing",
      img:"https://img.freepik.com/photos-gratuite/nature-morte-dit-non-fast-fashion_23-2149669584.jpg?w=360&t=st=1685825949~exp=1685826549~hmac=8bf897edb206ef6e6d98251dec00ae98b4db0bc562a55c828d15874b8c698f52",
      storeData: [
        {
          name: "Order",
          data: {
            content: "Order",
            item: [
              {
                text: "Hot",
                children: [
                 {
                  pic: "https://img.freepik.com/photos-gratuite/portrait-femme-mignonne-positive-energique-regardant-directement-camera-bonheur_176532-9138.jpg?w=740&t=st=1685883863~exp=1685884463~hmac=0e8df47355504e8dec3416c04d8960e302031c2a2adf993b7bf77365297d779f",
                  title: "Hot",
                  num: 0,
                  price: "20€",
                  id: 1,
                  add: true
                 }
                ]
              },
              {
                text: "Soldes",
                children: [
                  {
                    pic:"https://img.freepik.com/photos-gratuite/portrait-femme-mignonne-positive-energique-regardant-directement-camera-bonheur_176532-9138.jpg?w=740&t=st=1685883863~exp=1685884463~hmac=0e8df47355504e8dec3416c04d8960e302031c2a2adf993b7bf77365297d779f",
                    title: "Soldes",
                    num: 0,
                    price: "25€",
                    id: 5,
                    add:true
                  },
                  {
                    pic:"https://img.freepik.com/photos-gratuite/portrait-femme-mignonne-positive-energique-regardant-directement-camera-bonheur_176532-9138.jpg?w=740&t=st=1685883863~exp=1685884463~hmac=0e8df47355504e8dec3416c04d8960e302031c2a2adf993b7bf77365297d779f",
                    title: "Soldes",
                    num: 0,
                    price: "25€",
                    id: 5,
                    add:true
                  },
                ]
              }
            ]
          }
        },
        {
          name: "Commentaires",
          data: {
            content:"Commentaires"
          }

        },
        {
          name: "Boutique",
          data: {
            content: "boutique",
          }
        }
      ]
    });
    
    return {
      ...toRefs(data)
    }
  }
}

</script>

<style lang="less" scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;

    overflow-y: auto;
    .img {
      background: url("https://img.freepik.com/photos-gratuite/tas-serviettes-vue-adoucisseur-linge_23-2148251769.jpg?w=900&t=st=1685825317~exp=1685825917~hmac=6079b867a466ac9b5e980b42422244088c8e687fa3bd4493db136636bf0daeb3") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodStore {
      height: 500px;
      background-color: white;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;
      .sort {
        margin-top: 10px;

      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img{
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;

        }

    }
  }
}
}
</style>