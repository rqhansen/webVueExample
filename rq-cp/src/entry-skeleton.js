import Vue from 'vue'
import Skeleton1 from '@/components/skeleton/Skeleton1.vue'
import Skeleton2 from '@/components/skeleton/Skeleton2.vue'
export default new Vue({
    components: {
        Skeleton1,
        Skeleton2
    },
    template: `
    <div>
      <skeleton1 id="skeleton1" style="display:none"/>
      <skeleton2 id="skeleton2" style="display:none"/>
    </div>`
})
