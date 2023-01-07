<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import mainView from './components/mainView.vue';
import settingView from './components/settingView.vue';
import clockDash from './components/clockDash.vue';
import { ipcRenderer, contextBridge } from 'electron';
import './assets/reset.css';

export default {
  components: { mainView, settingView, clockDash },
  data() {
    return {
      currentComponent: 'mainView',
    }
  },
	methods: {
		sumbit() {
			ipcRenderer.send("sumbit", "ipcMain")
		}
	}
}
</script>

<template>
  <div class="main-view">
    <clock-dash class="clock"></clock-dash>
    <div class="packing">
      <button class="switch" @click="this.currentComponent = 'mainView'">主页</button>
      <button class="switch" @click="this.currentComponent = 'settingView'">设置</button>
      <button class="switch" @click="submit">退出</button>
    </div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<style scoped>
.main-view {
  width: 100vw;
  height: 100vh;
  background: url('./assets/BingWallpaper.jpg') center/100% 100% no-repeat;
}
.packing {
  display: flex;
  margin-left: 80%;
  padding-top: 6%;
}
.clock {
  padding: 30px;
  -webkit-app-region: drag;
}
</style>
