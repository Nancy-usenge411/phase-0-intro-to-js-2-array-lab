let cats = [ 'Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat( Ralph){
    cats.push( 'Ralph')
}

function destructivelyPrependCat( Bob){
    cats.unshift( 'Bob')
}

function destructivelyRemoveLastCat( Bob){
    cats.pop( 'Bob')
}

function destructivelyRemoveFirstCat( Ralph){
    cats.shift( 'Ralph')
}

function appendCat( Bob){
    const copyOfCats =cats.slice( Bob);

    copyOfCats.push( Bob);
    return copyOfCats;
}

function prependCat( Arnold){
    const newCats =[ 'Arnold', ...cats];
    return newCats;
}

function removeLastCat( Garfield){
    const newCats = cats.slice(0,-1)
    return newCats;
}

function removeFirstCat( Arnold){
    const newCats =cats.slice(1);
    return newCats;
}
