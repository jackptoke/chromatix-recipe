import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: `https://api.edamam.com`,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   timeout: 10000
// });

export default {
  getRecipes(ingredients, numberOfRecipes){
      let querie = '';
      ingredients.forEach((ingredient, index) => {
          querie += `${ingredient}`;
          if(index != ingredients.length-1)
              querie += "&";
      });
      const url = `https://api.edamam.com/search?app_id=6c59e1a7&app_key=d9046e54b94c824d1df4a13e00651e01&from=0&to=${numberOfRecipes}&q=${querie}`;
      // eslint-disable-next-line no-console
      console.log(url);
      return axios.get(url);
  },
  getRecipe(label){
      const url = `https://api.edamam.com/search?app_id=6c59e1a7&app_key=d9046e54b94c824d1df4a13e00651e01&from=0&to=${1}&q=${label}`;
      return axios.get(url);
  }
}
