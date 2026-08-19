let camera = {

    x:0,
    y:0,


    shake(){

        return Math.sin(
        Date.now()/100
        ) * planePhysics.roll / 10;

    }


};