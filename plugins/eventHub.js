class EventHub {
  cache = {}
  on(eventname, fn) {
    this.cache[eventname] = this.cache[eventname] || []
    this.cache[eventname].push(fn)
  }
  emit(eventname, data) {
    (this.cache[eventname] || []).forEach(e => e(data))
  }
  off(eventname, fn) {
    this.cache[eventname] = this.cache[eventname] || []
    let index = this.cache[eventname].indexOf(fn)
    if (index < 0) {
      return
    }
    this.cache[eventname].splice(index, 1)
  }
}
const eventHub = new EventHub
export default eventHub