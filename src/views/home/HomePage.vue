<template>
  <div class="home">
    <!-- header -->
    <div class="header">
      <div class="text">Pressing</div>
      <div class="location">
        <van-icon name="location-o" />
        <span>Jason course</span>
        <van-icon name="arrow" />
      </div>
    </div>
<!-- main -->
    <div class="main">
      <div class="main-bg">
        <div class="search">
          <input type="text">
          <div class="search-text">Search</div>
        </div>
        <div class="sort">
          <div class="big-sort">
             <div v-for="(item, index) in big_sort" :key="index">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`"></use>
              </svg>
                {{item.item}}
             </div>
          </div>

          <div class="small-sort">
            <div v-for="(item, index) in small_sort" :key="index">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`"></use>
              </svg>
                {{item.item}}
             </div>
          </div>
        </div>
      </div>
      <van-tabs v-model:active="active" class="van-tabs">
      <van-tab 
        v-for="(item, index) in content_nav_list"
        :title = "item.tab"
        :key = "index"
        >
        <NavList :navList="item.data"/>
        </van-tab>
    </van-tabs>
  
    </div>
    
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import NavList from './cpns/NavList.vue'


export default {
  components: {
    NavList,
  },
  setup() {
    const data = reactive({
      big_sort: [
        {
          item: 'Bon Plans',
          icon: 'icon-ganxidian',
        },
        {
          item: 'Chemise',
          icon: 'icon-hangfuganxi-icon',
        },
        {
          item: 'Manteaux',
          icon: 'icon-ganxi1',
        },
        {
          item: 'Costumes',
          icon: 'icon-xifu',
        },
        {
          item: 'Robes',
          icon: 'icon-yifu1',
        },
      ],

      small_sort: [
        {
          item: "Services",
          icon: "icon-xiyiji",
        },
        {
          item: "Panier",
          icon: "icon-yifulanzi",
        },
        {
          item: "Accessoires",
          icon: "icon-xiyi",
        }, {
          item: "Produits",
          icon: "icon-xiyiye",
        }, {
          item: "Shorts",
          icon: "icon-tubiao-budaijianbian_huaban1",
        }, {
          item: "Chaussettes",
          icon: "icon-tubiao-budaijianbian_huaban2",
        }, {
          item: "Chaussures",
          icon: "icon-tubiao-budaijianbian_huaban",
        }, {
          item: "Bébé",
          icon: "icon-yingeryifu",
        }, {
          item: "Lessive",
          icon: "icon-xiyiye1",
        }, {
          item: "Washing",
          icon: "icon-mianxingxiyifu",
        },
      ],

      content_nav_list: [
        {
          tab:"Prestations",
          data: [
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
          ]
        },

        {
          tab:"Activités",
          data: [
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
          ]
        },
        {
          tab:"Services",
          data: [
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
          ]
        },
        {
          tab:"Diverses",
          data: [
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
            {
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },{
              pic:"https://img.freepik.com/photos-gratuite/homme-tenant-pile-vetements-propres_23-2149117026.jpg?w=900&t=st=1685820939~exp=1685821539~hmac=42d69dc114020304dbc5b0bac7490d44c2a2f61e1d6703c8649fbd405c60e02f",
              title:"Par lot",
              sales:"1000",
              price:"20",
              label: ["Bon plan", "Recommandé"],

            },
          ]
        },

        

      ]
    });

    const { big_sort, small_sort, content_nav_list } = toRefs(data);

    return {
      big_sort,
      small_sort,
      content_nav_list
    };
  },
};
</script>

<style lang="less" scoped>

.header {
  background-image: linear-gradient(#ffc400, #fff);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 40px 20px;
  .text {
    font-size: 20px;
    font-weight: 600;
  }
  .location {
    span {
      margin: 0 5px;

    }
    font-size: 14px;
  }
}
.main {
  margin-top: -30px;
  .main-bg {
    background-image: linear-gradient(#fff, #f5f5f5);
    padding:10px 20px 0 20px;
    border-radius: 30px 30px 0 0;

    .search{
    position: relative;
    input {
      width: 100%;
      border: 1px solid #ffc400;
      border-radius: 20px;
      height: 30px;
    }
    .search-text {
      position: absolute;
      right: -6px;
      top: 1px;
      background-color: #ffc400;
      border-radius: 16px;
      width:50px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      text-align: center;
    }
  }

   .sort {
    padding: 20px 0;
    .big-sort {
      display: flex;
      font-size: 12px;
      div{
        flex:1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 50px;
          height: 50px;
          margin-bottom: 5px;
        }
      }


    }

    .small-sort {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      font-size: 12px;
      div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 20%;
      }
      .icon {
        width: 20px;
        height: 20px;
        margin: 10px;
      }
    }
  }
  }

  .van-tabs {
    padding: 0 20px 10px;
  }


 
 
}

</style>