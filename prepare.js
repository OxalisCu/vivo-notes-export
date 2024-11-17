const executeInterval = 500
let scrollArea = document.querySelector("#note-list-block")
let change = true
let totop = true
let lastScrollTop = -1
let k = 0

const id = setInterval(() => {
  if (lastScrollTop !== scrollArea.scrollTop) {
    lastScrollTop = scrollArea.scrollTop
    scrollArea.scrollBy(0, 100000)
    console.log("scroll more")
  } else if (change) {
    if (!document.querySelector("#virtual-note-list-id")) {
      console.log("virtual scroll area not found")
      change = false
      return
    }
    scrollArea = document.querySelector("#virtual-note-list-id")
    scrollArea.scrollBy(0, 100000)
    change = false
    console.log("change scroll area")
  } else if (totop) {
    scrollArea.scrollTo(0, -1)
    totop = false
    console.log("scroll to top")
    console.log("scroll end")
    clearInterval(id)
  }
}, executeInterval)