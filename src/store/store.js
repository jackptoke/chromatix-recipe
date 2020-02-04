import Vue from 'vue';
import Vuex from 'vuex';
import RecipeService from '@/services/RecipeService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ingredients: ["", "", ""],
    recipes: null /*[
      { label: "Chicken Curry", healthLabels: ["potato", "chicken", "tomatoes"], image: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/buffalo-wings.jpg", url: "https://www.marthastewart.com/353269/baked-potato-snack" },
      { label: "Chicken Curry", healthLabels: ["potato", "chicken", "tomatoes"], image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/07/texas-bbq-medley-.jpg?itok=5oSXHSK4", url: "https://www.marthastewart.com/353269/baked-potato-snack" },
      { label: "Chicken Curry", healthLabels: ["potato", "chicken", "tomatoes"], image: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/buffalo-wings.jpg", url: "https://www.marthastewart.com/353269/baked-potato-snack" }
    ]*/,
    recipe: {label: "Chicken Curry", ingredients: ["potato", "chicken", "tomatoes"], image: "@/assets/logo.png"},
    numberOfRecipes: 20
  },

  mutations: {
    SET_RECIPES(state, payload) {
      const {recipes} = payload;
      state.recipes = [...recipes];
    },
    SET_INGREDIENT(state, payload) {
      const {ingredient, index} = payload;
      state.ingredients[index] = ingredient;
      // eslint-disable-next-line no-console
      console.log(index + ": " + state.ingredients[index] );
      
    }
  },

  getters: {
    getRecipeByTitle: state => title => {
      return state.recipes.find(recipe => recipe.label === title)
    }
  },

  actions: {
      fetchRecipes({ commit, state }) {
        return RecipeService.getRecipes(state.ingredients, state.numberOfRecipes)
          .then(response => {
            commit('SET_RECIPES', response.hits);
          })
          .catch(error => {
            throw new Error(error);
          });
      },
      fetchRecipe({ commit, getters, state }, title) {
        if (title == state.recipe.label) {
          return state.event;
        }

        const recipe = getters.getEventById(title);

        if (recipe) {
          commit('SET_RECIPE', recipe)
          return recipe
        } else {
          return RecipeService.getRecipe(title).then(response => {
            commit('SET_RECIPE', response.hits[0])
            return response.hits[0];
          });
        }
      }
  }
});

