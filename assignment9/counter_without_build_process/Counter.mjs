export default {
    template: `<div> <h1>Counter</h1>
                <button :style="{'padding': '2rem', 'font-size': '3rem' }"
                @click="increment">{{count}}</button>
               </div> `,
    data() {
        return {count: 0}
    },
    methods: {
        increment() {
            this.count++
        }
    }
}