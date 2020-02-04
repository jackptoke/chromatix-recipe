
<template>
  <div class="tab-container">
      <div class="input-container">
        <TextInput :index=1 />
        <TextInput :index=2 />
        <TextInput :index=3  />
        <MyButton />
      </div>
      <div class="x-container">
          <div v-if="loading" class="loading">
              <font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin fa-3x myspin"/>
          </div>

          <div v-if="error" class="error">
            {{ error }}
          </div>

          <div v-if="this.recipes" class="content">
            <RecipeCard v-for="recipe in this.recipes" :key="recipe.id" :recipe="recipe"/>
          </div>
      </div>
  </div>
  
</template>

<script>
// import TextInput from '@/components/TextInput';
// import Button from '@/components/Button';
import RecipeCard from '@/components/RecipeCard.vue'
import { mapState } from 'vuex'
import RecipeService from '@/services/RecipeService.js';
// import store from '@/store/store'

export default {
  data () {
    return {
      loading: false,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  methods: {
      async fetchData () {
          
          this.error = this.post = null
          this.loading = true
          const numOfRecipes = 20;
          await RecipeService.getRecipes(["eggplant", "tomato", "garlic"], numOfRecipes)
          .then((response, err) =>{
              // eslint-disable-next-line no-console
              console.log("Loaded...");
              // eslint-disable-next-line no-console
              console.log(response);
              this.loading = false;
              if (err) {
                this.error = err.toString();
              } 
              else {
              const recipes = response.data.hits.map(recipeObj => recipeObj.recipe);
              //  recipes = response.data.hits;
              // eslint-disable-next-line no-console
              
              this.$store.commit("SET_RECIPES", {recipes: recipes});
              // eslint-disable-next-line no-console
              console.log("loaded...");
          }
         })
        .catch(err =>{
            // eslint-disable-next-line no-console
            console.log(err);   
        })
    }
  },
  components: {
    RecipeCard
  },
   computed: {
    ...mapState(['recipes', 'ingredients'])
  }
}
</script>

<style>
.loading{
  margin: 50px auto;
  width: 70vw;
  height: 50px;
  /* border: 1px solid blue; */
}
.myspin{
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
.tab-container {
  margin: 0 auto;
  align-items: center;
  background-color: #1d1d1d;
  /* height: 80px; */
  /* border: 1px solid red; */
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
  background-color: white;
  margin-top: 0px;
  padding: 30px 30px;
  /* border: 1px solid blue; */
  /* width: 70vw; */
  /* min-height: calc(100vh-4  00px); */
  min-height: 500px;
  width: calc(70vw-60);
}

.BtnView{
  width: 25%;
  background-color: orange;
  color: white;
  font-size: 1.5em;
}

</style>
