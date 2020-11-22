<template>
  <div class="index container">
    <div class="card" v-for="food in foods" :key="food.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteFood(food.id)">delete</i>
        <h2 class="amber-text text-darken-4">{{ food.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in food.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: "Index",
  data() {
    return {
      foods: []
    }
  }, 
  methods: {
    deleteFood(id) {
      // Delete doc from firestore
      db.collection('foods').doc(id).delete()
      .then(() => {
        this.foods = this.foods.filter(food => {
          return food.id != id
        })
      })
    }
  }, 
  created(){
    // fetch data from firestore
    db.collection('foods').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let food = doc.data()
        food.id = doc.id
        this.foods.push(food)
      })
      });
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
}

.index .delete {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li {
  display: inline-block;
}
</style>
