const atmosphere = {


density(altitude){

    return Math.exp(
        -altitude / 8500
    );

},


wind(){

    return Math.sin(
        Date.now()/3000
    ) * 5;

}


};