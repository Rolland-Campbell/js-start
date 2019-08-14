let cat = {
  name: "Mr. Snibbly",
  petCount: 0,
  moods: [
    {
      status: "Happy",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9"
    },
    {
      status: "Irritated",
      img: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs="
    },
    {
      status: "Bitey",
      img: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6"
    },
    {
      status: "Blood Thirsty",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS"
    }
  ]
}


function catnip() {
  cat.petCount = 0
  draw()
}



//increase pet count
//and update
function pet(times) {
  if (cat.petCount < 20) {
    cat.petCount += times
    draw()
  }
}

//decrease pet count
// and update

function feed() {
  if (cat.petCount > 0) {
    cat.petCount--
    draw()
  }
}



function draw() {

  let nameElement = document.querySelector("#cat-name")
  let petCountElement = document.querySelector("#cat-pet-count")
  let imageElement = document.querySelector("#cat-image")
  let statusElement = document.querySelector("#cat-status")

  statusElement.classList.remove("text-danger", "text-warning")
  if (cat.petCount >= 10) {
    statusElement.classList.add("text-danger")
  } else if (cat.petCount >= 5) {
    statusElement.classList.add("text-warning")
  }

  let moodIndex = checkMood()

  let moodObj = cat.moods[moodIndex]

  nameElement.textContent = cat.name
  petCountElement.textContent = cat.petCount.toString()
  imageElement.src = moodObj.img
  statusElement.textContent = moodObj.status

}

function checkMood() {
  if (cat.petCount >= 20) {
    return 3
  } else if (cat.petCount >= 10) {
    return 2
  } else if (cat.petCount >= 5) {
    return 1
  }
  return 0
}


draw()