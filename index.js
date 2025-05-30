let home_score = document.getElementById("home-score")
let guest_score = document.getElementById("guest-score")

let home = 0
let guest = 0

function addOneHome() {
    home += 1
    home_score.textContent = home
}

function addTwoHome() {
    home += 2
    home_score.textContent = home
}

function addThreeHome() {
    home += 3
    home_score.textContent = home
}

function addOneGuest() {
    guest += 1
    guest_score.textContent = guest
}

function addTwoGuest() {
    guest += 2
    guest_score.textContent = guest
}

function addThreeGuest() {
    guest += 3
    guest_score.textContent = guest
}

function reset() {
    home = 0
    guest = 0
    home_score.textContent = home
    guest_score.textContent = guest
}