const executeInterval = 200

const virtualScroll = !!document.querySelector("#virtual-note-list-id")
let scrollArea = document.querySelector("#virtual-note-list-id") || document.querySelector("#note-list-block")

const noteSet = new Set()
started = false
let lastScrollTop = scrollArea.scrollTop

function downloadNotes(startName, endName) {
  let noteList = document.querySelectorAll("#note-list-block .note-container")
  let noteNames = document.querySelectorAll("#note-list-block .note-container .heading span")
  // let noteContents = document.querySelectorAll("#note-list-block .note-container .content span")
  let cardHeight = noteList[0].clientHeight
  let noteListLen = noteList.length

  console.log(noteNames[0].textContent, noteNames[noteListLen - 1].textContent)

  let k = 0
  for (let j = 0; j < noteListLen; j++) {
    let noteName = noteNames[j].textContent
    // let noteContent = noteContents[j].textContent.substring(0, 30)
    // if (noteSet.has(noteContent)) {
    //   continue
    // }
    // noteSet.add(noteContent)

    if (startName && !started) {
      if (noteName === startName) {
        started = true
        console.log("started", startName)
      } else {
        continue
      }
    } else {
      started = true
    }

    if (noteSet.has(noteName)) {
      setTimeout(() => {
        console.log("duplicate note name, move the previous notes first", noteName)
      }, k * executeInterval)
      k++
      return
    }
    noteSet.add(noteName);

    if (endName && noteName === endName) {
      setTimeout(() => {
        console.log("endName reached", endName)
      }, k * executeInterval)
      k++
      return
    }

    (function (k) {
      setTimeout(() => {
        noteList[j].click()
        console.log("noteCardClicked", noteName)
      }, k * executeInterval)
    })(k)
    k++

    (function (k) {
      setTimeout(() => {
        const exportBtn = document.querySelector('.v-contextmenu>div>li.v-contextmenu-submenu li:nth-child(3)')
        exportBtn.click()
        console.log("exportBtnClicked", noteName)
      }, k * executeInterval)
    })(k)
    k++
  }

  if (!virtualScroll) {
    (function (k) {
      setTimeout(() => {
        console.log("downloaded", noteSet.keys())
      }, k * executeInterval)
    })(k)
    k++
    return
  }

  (function (k) {
    setTimeout(() => {
      scrollArea.scrollBy(0, cardHeight * noteListLen)
      console.log("scrolled", noteListLen)
    }, k * executeInterval)
  })(k)
  k++

  // (function (k, lastScrollTop, scrollArea, noteSet, endName) {
  setTimeout(() => {
    if (lastScrollTop !== scrollArea.scrollTop) {
      lastScrollTop = scrollArea.scrollTop
      console.log("downloading more notes")
      downloadNotes(startName, endName)
    } else {
      console.log("downloaded", noteSet.keys())
    }
  }, k * executeInterval)
  // })(k, lastScrollTop, scrollArea, noteSet, endName)
  k++
}

const startName = "10月31日"
const endName = ""
downloadNotes(startName, endName)