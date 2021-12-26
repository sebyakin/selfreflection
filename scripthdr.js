import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.116.1/build/three.module.js';

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from 'https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/utils/RoughnessMipmapper.js';
import { ColladaLoader } from 'https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/loaders/ColladaLoader.js';

var container, stats, controls;
var camera, scene, renderer;

var raycaster, mouse;
var isMouseDown = false;

// mouse controls
var mouseX = 0;
var mouseY = 0;

// preloader
let clock, mixer;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();


function init() {

	container = document.createElement( 'div' );
	container.classList.add('canvas-wrapper');
	document.body.appendChild( container );
	


// camera settings
	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 200;
	camera.position.y = 900;

	scene = new THREE.Scene();

// preloader
	clock = new THREE.Clock();

	THREE.DefaultLoadingManager.onLoad = function ( ) {

		console.log( 'Loading Complete!');
		loading.classList.add('preloader-done')
		content.classList.remove('content-loading')
		headline.classList.add('appearing')
		text.classList.add('appearing')
		technical.classList.add('appearing')

		setTimeout( () => {
			analyse.textContent = 'Your virtual identity is ready.'
			analyse.classList.remove('blink')
			button.classList.remove('hidden')    
		  }, 4000)
	
	};
	



	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2()

	new RGBELoader()
		.setDataType( THREE.UnsignedByteType )
		.setPath( 'skybox/' )
		.load( 'photo-min.hdr', function ( texture ) {

		var envMap = pmremGenerator.fromEquirectangular( texture ).texture;

		scene.background = envMap;
		scene.environment = envMap;

		texture.dispose();
		pmremGenerator.dispose();

		render();

		var roughnessMipmapper = new RoughnessMipmapper( renderer );

		var loader = new GLTFLoader().setPath( '3d/' );
		loader.load( 'mesh2.gltf', function ( gltf ) {


			gltf.scene.traverse( function ( child ) {

				if ( child.isMesh ) {

					roughnessMipmapper.generateMipmaps( child.material );

				}

			} );

			scene.add( gltf.scene );




			roughnessMipmapper.dispose();

			render();

		} );

	} );


	// render
	renderer = new THREE.WebGLRenderer( { antialias: true, powerPreference: "high-performance" } );

	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 0.8;
	renderer.outputEncoding = THREE.sRGBEncoding;
	container.appendChild( renderer.domElement );

	var pmremGenerator = new THREE.PMREMGenerator( renderer );
	pmremGenerator.compileEquirectangularShader();

	window.addEventListener( 'resize', onWindowResize, false );

	document.addEventListener("mousemove", onMouseMove);

	render();

}

// mouse controls
function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

	mouseX = ( event.clientX - windowHalfX ) * 0.5;
	mouseY = ( event.clientY - windowHalfY ) * 0.5;

}

// mouse controls + preloader

function render() {

		requestAnimationFrame( render );
	
		camera.position.x += ( mouseX - camera.position.x ) * .01;
		camera.position.y += ( - mouseY - camera.position.y ) * .01;


		camera.lookAt( scene.position );

		const delta = clock.getDelta();

		if ( mixer !== undefined ) mixer.update( delta );

		renderer.render(scene, camera);

}
// preloader
function onTransitionEnd( event ) {

	event.target.remove();

}

window.addEventListener('DOMContentLoaded', init);
