function shapeshiffter(text, left ,right){
    text = text.split('');
    for(let i = 0; i < left; i++)    text.push(text.shift());      
    for(let i = 0; i < right; i++)   text.unshift(text.pop());
    return text.join('');
}
console.log(shapeshiffter('Rahul' , 4 , 1));
