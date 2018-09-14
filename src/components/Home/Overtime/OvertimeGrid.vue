<template>
  <div id="OvertimeGrid">
    <table>
      <thead>
        <tr>
          <th>
            日付
            <span class="arrow"></span>
          </th>
          <th>
            PJコード
            <span></span>
          </th>
          <th>
            時間
            <span></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detail in details" :key="detail.No">
          <td v-for="column in detail.columns" :key="column">{{column}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('Chart',{
      details(state) {
        console.log('Grid')
        for(var i =0; i < state.overtimeColloctions.persons.length; i++){
          var person = state.overtimeColloctions.persons[i]
          if(person.no == state.selectedPerson){
            return person.details
          }
        }
        return state.overtimeColloctions.persons[0].Details
      }
    })
  }
}
</script>

<style scoped>
#OvertimeGrid{
  margin-left: 50px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
  height: 500px;
  overflow: auto;
}
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
  border-spacing : 2px;
  border-collapse : separate ;
}
th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
td {
  background-color: #f9f9f9;
}
th, td {
  min-width: 200px;
  padding: 10px 20px;
}
th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

</style>

