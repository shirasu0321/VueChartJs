<template>
  <div id="Overtime">
    <OvertimeCard class="sameLine"/>
    <OvertimeGrid class="sameLine"/>
  </div>
</template>

<script>
import OvertimeGrid from './OvertimeGrid'
import OvertimeCard from './OvertimeCard'

export default {
  components: {
    OvertimeGrid,
    OvertimeCard
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

#OvertimeCard{
  margin-top: 50px;
  margin-left: 80px;
}
.sameLine{
  float: left;
}
</style>

