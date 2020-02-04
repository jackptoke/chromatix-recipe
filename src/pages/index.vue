<template>
  <div class="tab-container">
      <div class="input-container">
        <TextInput :index=1 />
        <TextInput :index=2 />
        <TextInput :index=3  />
        <MyButton />
      </div>
      <div class="x-container">
        <RecipeCard v-for="recipe in this.recipes" :key="recipe.id" :recipe="recipe"/>
      </div>
  </div>
  
</template>

<script>

// import TextInput from '@/components/TextInput';
// import Button from '@/components/Button';
import RecipeCard from '@/components/RecipeCard.vue'
import { mapState } from 'vuex'
// import store from '@/store/store'

export default {

  components: {
    RecipeCard
  },
   computed: {
    ...mapState(['recipes', 'ingredients'])
  }
}
</script>

<style>
.tab-container {
  margin: 0 auto;
  align-items: center;
  background-color: #1d1d1d;
  /* height: 80px; */
  width: 70vw;
}
.input-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* align-items: flex-end; */
  /* border: 1px solid pink; */
}

.x-container{
  background-color: whitesmoke;
  margin-top: 20px;
  /* border: 1px solid blue; */
  /* width: 70vw; */
  /* min-height: calc(100vh-4  00px); */
  min-height: 500px;
  width: 70vw;
}

.BtnView{
  width: 25%;
  background-color: orange;
  color: white;
  font-size: 1.5em;
}

</style>
