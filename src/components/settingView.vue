<script>
// import { ipcRenderer } from 'electron';
import { useStore } from '../store.js';

export default {
  name: "settingView",
  setup() {
    const store = useStore();
    return {store}
  },
  data() {
    return {
      // subjectStatus: 'xinxi',
      // prvContent: this.$pinia.state.value.homework.math
    };
  },
  methods: {
    addCn() {
      this.store.chinese = document.getElementById("inputs").value    
      // this.$pinia.state.value.homework.status=0;
      // console.log(this.$pinia.state.value.homework.status);
      // this.prvContent = this.$pinia.state.value.homework.chinese;
    },
    addMat() {
      this.store.math = document.getElementById("inputs").value;
      // this.$pinia.state.value.homework.status=1;
      // this.store.$state.math = document.getElementById("inputs").value;
      // console.log(this.$pinia.state.value.homework.status);
      // this.prvContent = this.$pinia.state.value.homework.math;
    },
    addEn() {
      this.store.english = document.getElementById("inputs").value;
      // this.$pinia.state.value.homework.status=2;
      // console.log(this.$pinia.state.value.homework.status);
      // this.prvContent = this.$pinia.state.value.homework.english;
      // this.store.$state.english = document.getElementById("inputs").value;
    },
    addComm() {
      // this.$pinia.state.value.homework.status=3;
      // console.log(this.$pinia.state.value.homework.status);
      this.store.basic = document.getElementById("inputs").value;
    },
    addCs() {
      // this.$pinia.state.value.homework.status=4;
      // console.log(this.$pinia.state.value.homework.status);
      // // console.log(store)
      this.store.cs = document.getElementById("inputs").value;
    }
  },
}
</script>

<template>
  <div>
    <button class="btnx fst" @click="addCn">语文</button>
    <button class="btnx" @click="addMat">数学</button>
    <button class="btnx" @click="addEn">英语</button>
    <button class="btnx" @click="addComm">通用</button>
    <button class="btnx" @click="addCs">信息</button>
    <textarea name="hw" id="inputs" cols="28" rows="10" placeholder="输入作业">{{ content }}</textarea>
    <!-- <button class="btn" @click="submit">上传</button> -->
    <!-- <button class="btn" @click="quit">quit</button> -->
  </div>
</template>

<style>
.btnx {
  width: 50px;
  height: 30px;
  margin-left: 2%;
  margin-top: 10%;
}
.fst {
  margin-left: 75%;
}
.btn {
  width: 50px;
  height: 30px;
  font-size: 1em;
}
.btn:first {
  margin-left: 95%;
  margin-top: 50%;
}
#inputs {
  /* display: block; */
  margin-left: 75%;
  margin-top: 2%;
  font-size: 20px;
}
textarea {
  background-color: rgba(255,255,255,0.4);
  border-radius: 10px;
  backdrop-filter: blur(8px);
}
</style>
