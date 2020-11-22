<template>
  <div v-if="food" class="edit-food container">
    <h2>Edit {{ food.title }} recipe</h2>
    <form @submit.prevent="EditFood">
      <div class="field title">
        <label for="title">Food Title</label>
        <input type="text" name="title" v-model="food.title" />
      </div>
      <div v-for="(ing, index) in food.ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient:</label>
        <input
          type="text"
          name="ingredient"
          v-model="food.ingredients[index]"
        />
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient"
          >Add an ingredient (Click tab for one more)</label
        >
        <input
          type="text"
          name="add-ingredient"
          @keydown.tab.prevent="addIng"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <button class="btn amber darken-4">Update Food</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditFood',
    data() {
        return {
            food: null,
            another: null,
            feedback: null,
            
        }
    }, 
    methods: {
        EditFood(){
            if(this.food.title){
             this.feedback = null
             // create a slug
             this.food.slug = slugify(this.food.title, {
               replacement: '-',
               remove: /[$*_+.()'"!\-:@]/g,
               lower: true
             })
             db.collection('foods').doc(this.food.id).update({
               title: this.food.title, 
               ingredients: this.food.ingredients,
               slug: this.food.slug
             }).then(() => {
              this.$router.push({name: 'Index'})
             }).catch(err => {
               console.log(err)
             })
           }else{
             this.feedback = "You must enter a food title"
           }
        },

         addIng(){
            if(this.another){
                this.food.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add an ingredients'
            }
        },
            deleteIng(ing){
             this.food.ingredients = this.food.ingredients.filter(ingredient => {
              return ingredient != ing
             })
         }
     },
    created(){
        let ref = db.collection('foods').where('slug', '==', this.$route.params.food_slug)
        ref.get().then(snapshot =>{
            snapshot.forEach(doc => {
               this.food = doc.data()
               this.food.id = doc.id
            })
        })
    }
}
</script>

<style>
.edit-food {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-food h2 {
  font-size: 2em;
  margin: 20px auto;
}

.edit-food .field {
  margin: 20px auto;
  position: relative;
}

.edit-food .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>