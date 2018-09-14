<template>
  <div id="OvertimeCard">
    <select class="monthSelect">
      <option value="test1">8月度</option>
    </select>
    <div class="cardArea">
      <div class="card" v-for="person in persons" :key="person.no" :id="person.no" @click="changeDetail">
        <h4>{{person.name}}</h4>
        <p>{{person.time}}/h</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState('Chart',{
      persons(state) {
        return state.overtimeColloctions.persons
      }
    })
  },
  methods: {
    ...mapActions({
      CreateOvertimeCard: 'Chart/GetOvertimeCollection',
      ChangeSelectedPerson: 'Chart/ChangeSelectedPerson'
    }),
    changeDetail(e){
      this.ChangeSelectedPerson(e.target.parentElement.id)
    }
  },
  mounted(){
    console.log('moutend')
  }
}
</script>

<style scoped>
select{
  font-size: 30px;
  border:1px solid #ddd;
  padding:5px 20px 10px 20px;
  box-sizing:border-box;
  margin: 0% 25% 5% 25%;
}
.cardArea{
  height: 350px;
  overflow: auto;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #F2F5A9;
  border-color: black;
  font-size:20px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
.card:hover {
  background-color: rgb(236, 240, 121);
}
</style>

