let step = 0
const maxSteps = 5
const executeInterval = 200

function downloadNotes() {
  let k = 0
  for (let j = 0; j < 10; j++) {
    (function(k) {
      setTimeout(() => {
          console.log("[1]", step, k, j)
      }, k * executeInterval);
    })(k);
    k++
  }

  (function(k) {
    setTimeout(() => {
      console.log("[2]", step, k)
    }, k * executeInterval)
  })(k)
  k++

  (function(k) {
    setTimeout(() => {
      if (step < maxSteps) {
        console.log("[3]", step, k)
        step++
        downloadNotes()
        console.log("[4]")
      } else {
        console.log("downloaded")
      }
    }, k * executeInterval)
  })(k)
  k++
}

downloadNotes()

// outputs:
// [1] 0 0 0
// [1] 0 1 1
// [1] 0 2 2
// [1] 0 3 3
// [1] 0 4 4
// [1] 0 5 5
// [1] 0 6 6
// [1] 0 7 7
// [1] 0 8 8
// [1] 0 9 9
// [2] 0 10
// [3] 0 11
// [4]
// [1] 1 0 0
// [1] 1 1 1
// [1] 1 2 2
// [1] 1 3 3
// [1] 1 4 4
// [1] 1 5 5
// [1] 1 6 6
// [1] 1 7 7
// [1] 1 8 8
// [1] 1 9 9
// [2] 1 10
// [3] 1 11
// [4]
// [1] 2 0 0
// [1] 2 1 1
// [1] 2 2 2
// [1] 2 3 3
// [1] 2 4 4
// [1] 2 5 5
// [1] 2 6 6
// [1] 2 7 7
// [1] 2 8 8
// [1] 2 9 9
// [2] 2 10
// [3] 2 11
// [4]
// [1] 3 0 0
// [1] 3 1 1
// [1] 3 2 2
// [1] 3 3 3
// [1] 3 4 4
// [1] 3 5 5
// [1] 3 6 6
// [1] 3 7 7
// [1] 3 8 8
// [1] 3 9 9
// [2] 3 10
// [3] 3 11
// [4]
// [1] 4 0 0
// [1] 4 1 1
// [1] 4 2 2
// [1] 4 3 3
// [1] 4 4 4
// [1] 4 5 5
// [1] 4 6 6
// [1] 4 7 7
// [1] 4 8 8
// [1] 4 9 9
// [2] 4 10
// [3] 4 11
// [4]
// [1] 5 0 0
// [1] 5 1 1
// [1] 5 2 2
// [1] 5 3 3
// [1] 5 4 4
// [1] 5 5 5
// [1] 5 6 6
// [1] 5 7 7
// [1] 5 8 8
// [1] 5 9 9
// [2] 5 10
// downloaded