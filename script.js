
let turn_move=0
function procedure(btn) {
    const btn_id = document.getElementById(btn)
    const para = document.querySelector("p")

    if ((check_valid(btn))) {
        let turn_player = turn()
        btn_id.innerHTML = turn_player
        if (check_win(turn_player)) {
            para.textContent = `${turn_player} wins`
            new_game()
        }
        if (check_draw()) {

            para.textContent = "match drawn"
            new_game()
        }
    }

}


function check_valid(btn) {
    const btn_id = document.getElementById(btn)
    if (btn_id.innerHTML === "X" || btn_id.innerHTML === "O") {
        console.log("no");
        return false;
    }
    return true
}
function turn() {
 


    if (turn_move === 0) {
        turn_move=1
        return "X"
    }
    else{
       turn_move=0
        return "O"
    }
}
// function turn() {
//     let temp = 0;
//     let btn_id
//     for (let i = 1; i <= 9; i++) {
//         btn_id = document.getElementById(`btn${i}`)

//         if (btn_id.innerHTML === "X") {
//             temp = temp + 1;
//         }
//         else if (btn_id.innerHTML === "O") {
//             temp = temp - 1;
//         }
//     }


//     if (temp === 0) {
//         return "X"
//     }
//     return "O"
// }
function check_win(move) {
    let btn_id_1;
    let btn_id_2;
    let btn_id_3;
    for (let i = 1; i <= 9;) {
        btn_id_1 = document.getElementById(`btn${i++}`)
        btn_id_2 = document.getElementById(`btn${i++}`)
        btn_id_3 = document.getElementById(`btn${i++}`)

        if (btn_id_1.innerHTML === move && btn_id_2.innerHTML === move && btn_id_3.innerHTML === move) {

            return true
        }
    }
    for (let i = 1; i <= 9;) {
        btn_id_1 = document.getElementById(`btn${i}`)
        i += 3
        btn_id_2 = document.getElementById(`btn${i}`)
        i += 3
        btn_id_3 = document.getElementById(`btn${i}`)

        if (btn_id_1.innerHTML === move && btn_id_2.innerHTML === move && btn_id_3.innerHTML === move) {

            return true
        }
        if (i == 9) {
            break; 2
        }
        i -= 5

    }
    i = 1;
    btn_id_1 = document.getElementById(`btn${i}`)
    i += 4
    btn_id_2 = document.getElementById(`btn${i}`)
    i += 4
    btn_id_3 = document.getElementById(`btn${i++}`)
    if (btn_id_1.innerHTML === move && btn_id_2.innerHTML === move && btn_id_3.innerHTML === move) {

        return true
    }
    i = 3;
    btn_id_1 = document.getElementById(`btn${i}`)
    i += 2
    btn_id_2 = document.getElementById(`btn${i}`)
    i += 2
    btn_id_3 = document.getElementById(`btn${i++}`)
    if (btn_id_1.innerHTML === move && btn_id_2.innerHTML === move && btn_id_3.innerHTML === move) {

        return true
    }
    return false

}
function check_draw() {
    let btn_id
    for (let i = 1; i <= 9; i++) {
        btn_id = document.getElementById(`btn${i}`)

        if (btn_id.innerHTML !== "X" && btn_id.innerHTML !== "O") {
            return false
        }

    }
    return true
}
function new_game() {
    for (let i = 1; i <= 9; i++) {
        btn_id = document.getElementById(`btn${i}`)

       btn_id.innerHTML=""

    }
}
