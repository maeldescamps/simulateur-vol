const planePhysics = {

    altitude: 1000,
    speed: 200,
    verticalSpeed: 0,

    pitch: 0,
    roll: 0,

    throttle: 0.5,


    update(){

        // moteur
        let thrust = this.throttle * 0.8;


        // résistance de l'air
        let drag = this.speed * 0.002;


        // accélération
        this.speed += thrust - drag;



        // portance
        let lift = 
        (this.speed / 100) * 
        Math.cos(this.pitch);



        // gravité
        this.verticalSpeed += 
        lift - 0.098;



        // altitude
        this.altitude += 
        this.verticalSpeed;



        // limites

        if(this.altitude < 0){

            this.altitude = 0;
            this.verticalSpeed = 0;

        }


        if(this.speed < 0)
            this.speed = 0;


    }


};