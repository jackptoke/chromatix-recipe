<template>
    <div class="TContainer">
        <label>  </label>
        <div class="button" v-on:click="onClick" >View Recipes</div>
    </div>
</template>

<script>
import RecipeService from '@/services/RecipeService.js';
import { mapState } from 'vuex';

export default {
    methods: {
    onClick(){
        const numOfRecipes = 5;
        RecipeService.getRecipes(this.ingredients, numOfRecipes)
        .then(response =>{
            const recipes = response.data.hits.map(recipeObj => recipeObj.recipe);
            //  recipes = response.data.hits;
            // eslint-disable-next-line no-console
            
            this.$store.commit("SET_RECIPES", {recipes: recipes});
            // eslint-disable-next-line no-console
            console.log("loaded...");
        })
        .catch(err =>{
            // eslint-disable-next-line no-console
            console.log(err);   
        })
       
    }
  },
   computed: {
    ...mapState(['ingredients'])
  }
}
</script>
<style scoped>
    .TContainer{
        margin: 37px 20px;
    }

    .button {
        color: white;
        display: block;
        width: 100px;
        border: none;
        background-color: #f38200;
        padding: 10px 10px;
        font-size: 15px;
        cursor: pointer;
        text-align: center;
        /* border: 1px solid blue; */
    }

</style>