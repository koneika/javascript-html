let a = []
let temp

for(let i = 0; i < 10; ++i) {
    a[i] = Math.random()*50
    if (a[i] < 15) {
        --i
    }
}
document.write(a)
for(let j = 0; j < 10; ++j){
    for(let i = 0; i < 10; ++i){
        if(a[i] > a[i+1]){
            temp = a[i]
            a[i] = a[i+1]
            a[i+1] = temp;
        }
    }
}
document.write(a)