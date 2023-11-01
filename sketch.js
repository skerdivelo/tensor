function setup() {

    const values = [];
    for(let i = 0; i < 15; i++){
        values[i] = random(0, 100);
    }
    const shape = [5, 3];
    const data = tf.tensor(values, shape);
    //const data = tf.tensor([0, 0, 127,45324,345,453,5334,35,34,345,23,456,345,456,345], [5,3]); //creo un tensor che ha 2 matrici da 2x2 (2x2x2=8 numeri)
    data.print();
}
setup();