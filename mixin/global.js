import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      language: state => state.language
    })
  },
  async mounted() {
    window.scrollTo(0, 0)
  },
  beforeDestroy() {},
  methods: {}
}
