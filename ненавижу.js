let x = 0, z = 0
x = prompt()

//document.write(x, z)

function calculate(){
    for(let a = -1; a < x; a += 0.2){
        if(0.1 <= x && x <= 0.5){
            z = 5*x
        }
        else if(x > 10) {
            z = Math.pow(x, 3)
        }
        else {
            z = 4*x-x/2
        }
    }
}
document.write(z)


