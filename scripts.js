function translate(word){
    word = word.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.split('');
    let firstLetter= word[0];
    if(vowels.includes(firstLetter)){
        word = word.join('');
        return word + 'way';
    }
    else{
        while (true){
            let firstLetter= word.splice(0, 1);
            word.push(firstLetter);
            if(vowels.includes(word[0])){
                break;
            }
        }
    }
    word = word.join('');
    return word + 'ay';
}
// console.log(translate('artichoke'))
// console.log(translate('edamame'))
console.log(translate('iceberg'))
// console.log(translate('potato'))
// console.log(translate('broccoli'))
// console.log(translate('string'))
// console.log(translate('ARTICHOKE'))