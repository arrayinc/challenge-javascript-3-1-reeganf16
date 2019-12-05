// *** YOUR ANSWER BELOW ***

function beerSong(startN) {
    for(let i = startN; i > 0; i--) {
        console.log(`${i} bottles of beer on the wall. ${i} bottles of beer. You take one down. Pass it around. ${i-1} bottles of beer on the wall.`);
    }
    console.log('The beer is gone!');
}

beerSong(99);