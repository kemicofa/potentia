import * as THREE from 'three';

const SNOW_INITIAL_Y_POSITION = 10;
const SNOW_PARTICLE_RADIUS = 1/100;
const SNOW_PARTICLE_FALL_SPEED = -0.01;

const MIN_SNOW_PARTICLES_TO_SPAWN = 10;
const MAX_SNOW_PARTICLES_TO_SPAWN = 100;

const getRandomNumber = (min: number, max: number) =>  Math.random() * (max - min) + min;

const getRandomSnowParticlesToSpawn = () => getRandomNumber(MIN_SNOW_PARTICLES_TO_SPAWN, MAX_SNOW_PARTICLES_TO_SPAWN);

const buildSnowParticle = (radius: number) => {
    const geometry = new THREE.CircleGeometry(radius);
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    return new THREE.Mesh( geometry, material );
}

const spawnSnowParticles = (count: number) => {
    const particles: THREE.Mesh[] = [];

    for(let i = 0; i < count; i++) {
        const particle = buildSnowParticle(SNOW_PARTICLE_RADIUS);
        particle.position.y = SNOW_INITIAL_Y_POSITION;
        particle.position.x = getRandomNumber(-10, 10);
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

    const snowParticles: THREE.Mesh[] = [];

    camera.position.z = 5;


    const clock = new THREE.Clock();
    let elapsed = 0;
    let delta = 0;
    let time = 0;

    function shouldSpawnParticles() {
        return time > 1 && Math.floor(time) % 2 === 0;
    }

    function update() {
        if(shouldSpawnParticles()) {
            time = 0;
            const numberOfSnowParticlesToSpawn = getRandomSnowParticlesToSpawn();
            const newSnowParticles = spawnSnowParticles(numberOfSnowParticlesToSpawn);
            snowParticles.push(...newSnowParticles);
            scene.add(...newSnowParticles);
        }

        for(const snowParticle of snowParticles) {
            snowParticle.translateY(SNOW_PARTICLE_FALL_SPEED);
        }
    }

    function animate() {
        requestAnimationFrame( animate );
        delta = clock.getDelta();
        time += delta;
        elapsed = clock.getElapsedTime();
        update();
        renderer.render( scene, camera );
    }

    animate();
}
