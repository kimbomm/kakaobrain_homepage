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
    this.scrollBody.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },
  beforeDestroy() {},
  methods: {}
}
