export default ({ $axios, redirect }) => {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url, config)
    // if (config.url === '/media/image') {
    //   config.headers['Content-Type'] = 'multipart/form-data'
    // }
  })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code) {
  //     redirect('/error')
  //   }
  // })
}
