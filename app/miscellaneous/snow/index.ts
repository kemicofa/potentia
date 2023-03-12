import * as THREE from 'three';

const SNOW_PARTICLE_RADIUS = 1/70;
const SNOW_PARTICLE_FALL_SPEED = -0.01;

const getRandomWindBias = (elapsed: number) => Math.sin(elapsed * 0.3) * 0.05;

const getRandomNumber = (min: number, max: number) =>  Math.random() * (max - min) + min;

const buildSnowParticle = (radius: number) => {
    const geometry = new THREE.CircleGeometry(radius);
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    return new THREE.Mesh( geometry, material );
}

const spawnSnowParticles = (count: number) => {
    const particles: THREE.Mesh[] = [];

    for(let i = 0; i < count; i++) {
        const particle = buildSnowParticle(SNOW_PARTICLE_RADIUS);
        particle.position.y = getRandomNumber(-10, 10);
        particle.position.x = getRandomNumber(-50, 50);
        particle.position.z = getRandomNumber(-10, 0)
        particles.push(particle);
    }

    return particles;
}

export const initSnowSystem = (parent: HTMLElement): void => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    parent.appendChild( renderer.domElement );

    const snowParticles: THREE.Mesh[] = spawnSnowParticles(4000);
    scene.add(...snowParticles);

    camera.position.z = 5;

    const clock = new THREE.Clock();
    let elapsed = 0;
    let windBias = 0;

    function update() {
        windBias = getRandomWindBias(elapsed);
        for(const snowParticle of snowParticles) {
            if(snowParticle.position.y < -10) {
                snowParticle.position.y = 10;
            }
            snowParticle.translateX(windBias + getRandomNumber(-0.005, 0.005));
            snowParticle.translateY(SNOW_PARTICLE_FALL_SPEED + getRandomNumber(-0.005, 0.005));
        }
    }

    function animate() {
        requestAnimationFrame( animate );
        elapsed = clock.getElapsedTime();
        update();
        renderer.render( scene, camera );
    }

    animate();
}
