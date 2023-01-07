<script>
import { useStore } from '../store.js';
export default {
  name: "mainView",
  setup() {
    const store = useStore();
    // console.log(store);
    // console.log(store.$state);
    return {store};
  }
}
</script>

<template>
  <div>
    <div class="cme">
      <div class="hw">
        <h2 class="title">语文作业</h2>
        <pre><p>{{ store.chinese }}</p></pre>
      </div>
      <div class="hw">
        <h2 class="title">数学作业</h2>
        <pre><p>{{ store.math }}</p></pre>
      </div>
      <div class="hw">
        <h2 class="title">英语作业</h2>
        <pre><p>{{ store.english }}</p></pre>
      </div>
    </div>
    <div class="others">
      <div class="hw">
        <h2 class="title">通用作业</h2>
        <pre><p>{{ store.basic }}</p></pre>
      </div>
      <div class="hw">
        <h2 class="title">信息作业</h2>
        <pre><p>{{ store.cs }}</p></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hw {
  margin-left: 30px;
  margin-top: 30px;
  width: 400px;
  height: 290px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 10px;
  backdrop-filter: blur(8px);
}
.title {
  margin: 10px;
  font-size: 30px;
}
p {
  margin: 10px;
}
.cme {
  display: flex;
}
.others {
  display: flex;
}
pre {
  font-size: 27px;
  line-height: 30px;
}
</style>
