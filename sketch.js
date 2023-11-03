function setup() {
    const values = [];
    for(let i = 0; i < 30; i++){
        values[i] = random(0, 100);
    }
    const shape = [2, 5, 3];
    const data = tf.tensor3d(values, shape, 'int32');
    //tf.scalar = 1 valore esempio: tf.scalar(3.14);
    //tf.tensor1d = 1 dimensione esempio: tf.tensor1d([1,2,3,4,5]);(array)
    //tf.tensor2d = 2 dimensioni esempio: tf.tensor2d([1,2,3,4,5,6], [2,3]);(array, [righe, colonne])
    //tf.tensor3d = 3 dimensioni esempio: tf.tensor3d([1,2,3,4,5,6], [2,3,1]);(array, [righe, colonne, matrici])
    //tf.tensor = n dimensioni (puoi inserire quello che vuoi)
    //const data = tf.tensor([0, 0, 127,45324,345,453,5334,35,34,345,23,456,345,456,345], [5,3]); //creo un tensor che ha 2 matrici da 2x2 (2x2x2=8 numeri)
    data.print();
}
setup();