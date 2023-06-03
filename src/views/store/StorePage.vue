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
          <img src="https://img.freepik.com/photos-gratuite/nature-morte-dit-non-fast-fashion_23-2149669584.jpg?w=360&t=st=1685825949~exp=1685826549~hmac=8bf897edb206ef6e6d98251dec00ae98b4db0bc562a55c828d15874b8c698f52" alt="" class="store-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import HeaderPage from '@/components/HeaderPage.vue';
export default {
  components: {
    HeaderPage,
  },
  setup(){
    let data = reactive({
      title: "Pressing",
      img:""
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