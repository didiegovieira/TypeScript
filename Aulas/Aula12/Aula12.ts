

type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})


//[LOG]: "O eixo x é: 101"

//[LOG]: "O eixo y é: 50"