<template>
  <div class="SearchPanel">
    <p style="font-size:26px;">{{ selected.text }}</p>
    <div class="conditionArea">
      <input type="text" placeholder="" v-model='txtCondiVal' class="conditionTxt" />
      <select v-model="selected" class="conditionSelectKinds">
        <option v-for="option in options" :key="option.value" v-bind:value="{ value: option.value, text: option.text }">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="chkscript">
      <button class="chkAll">全選択</button>
      <button class="releaseAll">全解除</button>
    </div>
    <div class="selectArea">
      <ul id="chklst">
        <li :key="result.No" v-for="result in results">
          <input type="checkbox" class="checkbox" :value="result.No" @click="ClickCheckBox">
          <span class="ResultName" >{{result.Name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: { value: '1', text: '' },
      options: [
        { text: '社員氏名',       value: '1' },
        { text: 'プロジェクト名', value: '2' },
        { text: 'チーム名',       value: '3' },
        { text: '工程コード',     value: '4' },
        { text: '詳細コード',     value: '5' }
      ],
      results: [
        {No: 48018, Name:"平井美寿希"},
        {No: 45000, Name:"伊賀清高"}
      ]
    }
  },
  created: function () {
    this.selected = this.options.find(i => i.value === this.selected.value);
  },
  methods: {
    ClickCheckBox: function(e){
      console.log(e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.SearchPanel{
  heigh:90%;
}
.conditionArea {
  border:solid 1px #ccc;
  border-radius:8px;
  width: 32vw;
  padding: 3px;
  text-align: right;
  display:inline-block;
}
.conditionTxt {
  border:solid 0px #ccc;
  width: 18vw;
  padding: 5px;
  text-align: left;
  margin-top:0.5vh;
  display:inline-block;
  font-size:24px;
}
.conditionSelectKinds {
  border:solid 1px #ccc;
  background: #cccfff;
  width: 12vw;
  display:inline-block;
  font-size:16px;
}
.chkscript {
    border:solid 0px #ccc;
    width: 32vw;
    height: 5vh;
    padding: 3px;
    text-align: left;
  }
.chkAll {
  border:solid 1px #ccc;
  background: #fff;
  border-radius:8px;
  width: 15vw;
  height: 4vh;
  padding: 3px;
  text-align: cnter;
  display:inline-block;
}
.releaseAll {
    border:solid 1px #ccc;
    background: #fff;
    border-radius:8px;
    width: 15vw;
    height: 4vh;
    padding: 3px;
    text-align: cnter;
    display:inline-block;
    margin:0px 0px 0px 1vw;
  }
.selectArea {
    border:solid 1px #ccc;
    border-radius:8px;
    width: 32vw;
    height: 58vh;
    padding: 3px;
    text-align: left;
  }
ul {
  border:solid 0px #ccc;
  width: 28vw;
  height: 50vh;
  margin:3vh 0px 0px 1vw;
  font-size:16px;
  overflow:auto;
}
.checkbox {
  width:24px;
  height:24px;
}
.ResultName{
  display:inline-block;
  padding-bottom:15px;
  vertical-align:middle;
  font-size:26px;
}
</style>
