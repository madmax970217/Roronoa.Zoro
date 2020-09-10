<template>
  <el-carousel :interval="3000" height="830px">
    <el-carousel-item v-for="(item,index) in items" :key="index">
      <img :src="item.img"/>
      <h3>123465</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        url:'',
                        img:'/images/4.jpg'
                    },
                    {
                        url:'',
                        img:'/images/5.jpg'
                    },
                    {
                        url:'',
                        img:'/images/6.jpg'
                    },
                    {
                        url:'',
                        img:'/images/7.jpg'
                    },
                    {
                        url:'',
                        img:'/images/1.jpg'
                    },
                    {
                        url:'',
                        img:'/images/2.jpg'
                    },
                    {
                        url:'',
                        img:'/images/3.jpg'
                    },
                    {
                        url:'',
                        img:'/images/8.jpg'
                    },
                ],
                callleft:0
            }
        }
    }
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}
</style>