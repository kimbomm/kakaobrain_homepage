import Vue from 'vue'
export default async function (context) {
  if (process.env.NODE_ENV !== 'production' && !context.route.name) {
    context.redirect('/404.html')
  }
  // if (!route.name) redirect('/404.html')
  // const isDark = !(route.path == "/" || route.path == "/openminicon")
  // store.commit("setIsDark", isDark)
}
