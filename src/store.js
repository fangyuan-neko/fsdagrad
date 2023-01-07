import { defineStore } from "pinia";

export const useStore = defineStore('homework', {
  state: () => ({
    'chinese': `Chinese`,
    'math': `Math`,
    'english': `English`,
    'basic': `General Technology`,
    'cs': `Computer Science`,
    'status': 0
  })
});