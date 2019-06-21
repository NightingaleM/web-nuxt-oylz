export default function ({ $axios, redirect, app }) {
  $axios.onRequest(config => {
    return config
  })

  $axios.onResponse(response => response)

  $axios.onError(error => {
    console.log(error)
    return error
  })
}
