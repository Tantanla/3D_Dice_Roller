import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const css = {
  code: ".body.svelte-17aotks.svelte-17aotks{background-color:#232323}.ui-controls.svelte-17aotks.svelte-17aotks{position:absolute;width:100%;max-width:500px;font-family:inherit;user-select:none;padding:10px;pointer-events:none;left:30px;bottom:10px}.score.svelte-17aotks.svelte-17aotks{font-weight:bold;color:#ffffff}.ui-controls.svelte-17aotks span.svelte-17aotks{display:inline-block;min-width:1.8em;color:#fd9b6b}.ui-controls.svelte-17aotks #roll-btn.svelte-17aotks{background-color:#098642;font-weight:bold;color:#ffffff;border:none;padding:1em 1.5em;border-radius:1.5em;text-decoration:none;display:inline-block;cursor:pointer;margin:2em 0 0 0;transition:background-color 0.2s, transform 0.1s;pointer-events:auto}.ui-controls.svelte-17aotks #roll-btn.svelte-17aotks:active{transform:translateY(2px)}.ui-controls.svelte-17aotks #roll-btn.svelte-17aotks:hover{background-color:#098642}.dropbtn.svelte-17aotks.svelte-17aotks{background-color:#098642;font-weight:bold;color:#ffffff;border:none;padding:1em 1.5em;border-radius:1.5em;text-decoration:none;display:inline-block;cursor:pointer;transition:background-color 0.2s, transform 0.1s;pointer-events:auto}.dropbtn.svelte-17aotks.svelte-17aotks:hover{background-color:#35a162;color:black}.dropdown.svelte-17aotks.svelte-17aotks{display:inline-block;background-color:#098642;font-weight:bold;color:#ffffff;border:none;border-radius:1.5em;text-decoration:none;cursor:pointer;pointer-events:auto}.dropdown-content.svelte-17aotks.svelte-17aotks{display:none;position:absolute;background-color:#098642;min-width:160px;overflow:auto}.dropdown.svelte-17aotks:hover .dropdown-content.svelte-17aotks{display:block;left:30%}#item.svelte-17aotks.svelte-17aotks{color:#ffffff\n}canvas.svelte-17aotks.svelte-17aotks{position:absolute;bottom:30%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport '../app.css'\\n\\timport { onMount } from 'svelte';\\n\\timport * as THREE from 'three';\\n\\timport {OrbitControls} from '../../node_modules/three/examples/jsm/controls/OrbitControls';\\n\\timport * as CANNON from 'cannon-es';\\n    import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js'\\n\\n\\n    let canvas,renderer,scene,camera,diceMesh,physicsWorld,scoreResult;\\n\\n\\tconst params = {\\n\\t\\tnumberOfDice: 0,\\n\\t\\tsegments: 40,\\n        edgeRadius: .08,\\n        notchRadius: .12,\\n        notchDepth: .1,\\n\\t}\\n\\tconst diceArray = [];\\n\\tvar diceNumber = 0;\\n    \\n//组件挂载时初始化画面和物理世界\\nonMount(() =>{\\n    initPhysics();\\n    // console.log('mount1'); \\n    initScene();\\n    // console.log('mount2');   \\n})\\n\\n\\n\\n\\n//初始化场景\\nfunction initScene(){\\n\\t\\trenderer = new THREE.WebGLRenderer({\\n\\t\\t\\talpha: true,\\n\\t\\t\\tantialias: true,\\n\\t\\t\\tcanvas: canvas\\n\\t\\t});   \\n\\t\\trenderer.shadowMap.enabled = true;\\n\\t\\trenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\\n\\t\\tscene = new THREE.Scene();\\n\\t\\tcamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 300)\\n\\t\\tcamera.position.set(0, 1, 4).multiplyScalar(7);\\n        \\n\\t\\tupdateSceneSize(); \\n        const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);\\n        scene.add(ambientLight);\\n        const topLight = new THREE.PointLight(0xffffff, 3);\\n        scene.add(topLight);\\n        topLight.position.set(8, 15, 0);\\n        topLight.castShadow = true;\\n        topLight.shadow.mapSize.width = 2048;\\n        topLight.shadow.mapSize.height = 2048;\\n        topLight.shadow.camera.near = 5;\\n        topLight.shadow.camera.far = 400;\\n        scene.add(topLight);       \\n\\t\\tconst controls = new OrbitControls(camera, renderer.domElement);\\n\\t\\tcontrols.enableDamping = true\\n\\t\\tcreateFloor();\\n        diceMesh = createDiceMesh();\\n\\n        for (let i = 0; i < params.numberOfDice; i++) {\\n        diceArray.push(createDice());\\n        addDiceEvents(diceArray[i]);\\n        }        \\n        throwDice();\\n        render();\\n        console.log('scene inited');    \\n}\\n\\n\\n//创建物理世界\\nfunction initPhysics(){\\n    physicsWorld = new CANNON.World({\\n        allowSleep: true,\\n        gravity: new CANNON.Vec3(0, -50, 0),\\n    })\\n    physicsWorld.defaultContactMaterial.restitution = .3;\\n    console.log('physicworldcreated');    \\n}\\n\\nfunction createMore(){\\n    //清理\\n    diceArray.forEach(\\n        dice=>{\\n        physicsWorld.removeBody(dice.body)\\n        scene.remove(dice.mesh)\\n    })\\n    diceArray.length = 0\\n    //创建\\n    for (let i = 0; i < diceNumber; i++) {\\n        diceArray.push(createDice());\\n        addDiceEvents(diceArray[i]);\\n    }\\n    throwDice();\\n    // console.log('createmore');\\n    \\n}\\n\\nfunction create1(){\\n    diceNumber = 1;\\n    createMore()\\n}\\nfunction create2(){\\n    diceNumber = 2;\\n    createMore();\\n}\\nfunction create3(){\\n    diceNumber = 3;\\n    createMore();\\n}\\nfunction create4(){\\n    diceNumber = 4;\\n    createMore();\\n}\\nfunction create5(){\\n    diceNumber = 5;\\n    createMore();\\n}\\nfunction create6(){\\n    diceNumber = 6;\\n    createMore();\\n}\\n\\n\\nfunction createFloor(){\\n    const floor = new THREE.Mesh(\\n        new THREE.PlaneGeometry(500, 500),\\n        new THREE.ShadowMaterial({\\n            opacity: .1\\n        })\\n    )\\n    floor.receiveShadow = true;\\n    floor.position.y = -7;\\n    floor.quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * .5);\\n    scene.add(floor);\\n\\n    const floorBody = new CANNON.Body({\\n        type: CANNON.Body.STATIC,\\n        shape: new CANNON.Plane(),\\n    });\\n    floorBody.position.copy(floor.position);\\n    floorBody.quaternion.copy(floor.quaternion);\\n    physicsWorld.addBody(floorBody);\\n    // console.log('createLfloor');\\n    \\n}\\n\\nfunction createDiceMesh() {\\n    const boxMaterialOuter = new THREE.MeshStandardMaterial({\\n        color: 0xeeeeeee,\\n    })\\n    const boxMaterialInner = new THREE.MeshStandardMaterial({\\n        color: 0x000000,\\n        roughness: 0,\\n        metalness: 1,\\n        side: THREE.DoubleSide\\n    })\\n    const diceMesh = new THREE.Group();\\n    const innerMesh = new THREE.Mesh(createInnerGeometry(), boxMaterialInner);\\n    // console.log('createinner');\\n    \\n    const outerMesh = new THREE.Mesh(createBoxGeometry(), boxMaterialOuter);\\n    outerMesh.castShadow = true;\\n    diceMesh.add(innerMesh, outerMesh);\\n    // console.log('mesh');\\n    return diceMesh;\\n}\\n\\nfunction createDice(){\\n    const mesh = diceMesh.clone();\\n    scene.add(mesh);\\n\\n    const body = new CANNON.Body({\\n        mass: 1,\\n        shape: new CANNON.Box(new CANNON.Vec3(.5, .5, .5)),\\n        sleepTimeLimit: .1\\n    });\\n    physicsWorld.addBody(body);\\n// console.log('createdice');\\n    \\n    return {mesh, body};\\n}\\n\\nfunction createBoxGeometry() {\\n\\nlet boxGeometry = new THREE.BoxGeometry(1, 1, 1, params.segments, params.segments, params.segments);\\n\\nconst positionAttr = boxGeometry.attributes.position;\\nconst subCubeHalfSize = .5 - params.edgeRadius;\\n\\n\\nfor (let i = 0; i < positionAttr.count; i++) {\\n\\n\\tlet position = new THREE.Vector3().fromBufferAttribute(positionAttr, i);\\n\\n\\tconst subCube = new THREE.Vector3(Math.sign(position.x), Math.sign(position.y), Math.sign(position.z)).multiplyScalar(subCubeHalfSize);\\n\\tconst addition = new THREE.Vector3().subVectors(position, subCube);\\n\\n\\tif (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.y) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {\\n\\t\\taddition.normalize().multiplyScalar(params.edgeRadius);\\n\\t\\tposition = subCube.add(addition);\\n\\t} else if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.y) > subCubeHalfSize) {\\n\\t\\taddition.z = 0;\\n\\t\\taddition.normalize().multiplyScalar(params.edgeRadius);\\n\\t\\tposition.x = subCube.x + addition.x;\\n\\t\\tposition.y = subCube.y + addition.y;\\n\\t} else if (Math.abs(position.x) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {\\n\\t\\taddition.y = 0;\\n\\t\\taddition.normalize().multiplyScalar(params.edgeRadius);\\n\\t\\tposition.x = subCube.x + addition.x;\\n\\t\\tposition.z = subCube.z + addition.z;\\n\\t} else if (Math.abs(position.y) > subCubeHalfSize && Math.abs(position.z) > subCubeHalfSize) {\\n\\t\\taddition.x = 0;\\n\\t\\taddition.normalize().multiplyScalar(params.edgeRadius);\\n\\t\\tposition.y = subCube.y + addition.y;\\n\\t\\tposition.z = subCube.z + addition.z;\\n\\t}\\n\\n\\tconst notchWave = (v) => {\\n\\t\\tv = (1 / params.notchRadius) * v;\\n\\t\\tv = Math.PI * Math.max(-1, Math.min(1, v));\\n\\t\\treturn params.notchDepth * (Math.cos(v) + 1.);\\n\\t}\\n\\tconst notch = (pos) => notchWave(pos[0]) * notchWave(pos[1]);\\n\\n\\tconst offset = .23;\\n\\n\\tif (position.y === .5) {\\n\\t\\tposition.y -= notch([position.x, position.z]);\\n\\t} else if (position.x === .5) {\\n\\t\\tposition.x -= notch([position.y + offset, position.z + offset]);\\n\\t\\tposition.x -= notch([position.y - offset, position.z - offset]);\\n\\t} else if (position.z === .5) {\\n\\t\\tposition.z -= notch([position.x - offset, position.y + offset]);\\n\\t\\tposition.z -= notch([position.x, position.y]);\\n\\t\\tposition.z -= notch([position.x + offset, position.y - offset]);\\n\\t} else if (position.z === -.5) {\\n\\t\\tposition.z += notch([position.x + offset, position.y + offset]);\\n\\t\\tposition.z += notch([position.x + offset, position.y - offset]);\\n\\t\\tposition.z += notch([position.x - offset, position.y + offset]);\\n\\t\\tposition.z += notch([position.x - offset, position.y - offset]);\\n\\t} else if (position.x === -.5) {\\n\\t\\tposition.x += notch([position.y + offset, position.z + offset]);\\n\\t\\tposition.x += notch([position.y + offset, position.z - offset]);\\n\\t\\tposition.x += notch([position.y, position.z]);\\n\\t\\tposition.x += notch([position.y - offset, position.z + offset]);\\n\\t\\tposition.x += notch([position.y - offset, position.z - offset]);\\n\\t} else if (position.y === -.5) {\\n\\t\\tposition.y += notch([position.x + offset, position.z + offset]);\\n\\t\\tposition.y += notch([position.x + offset, position.z]);\\n\\t\\tposition.y += notch([position.x + offset, position.z - offset]);\\n\\t\\tposition.y += notch([position.x - offset, position.z + offset]);\\n\\t\\tposition.y += notch([position.x - offset, position.z]);\\n\\t\\tposition.y += notch([position.x - offset, position.z - offset]);\\n\\t}\\n\\n\\tpositionAttr.setXYZ(i, position.x, position.y, position.z);\\n}\\n\\n\\nboxGeometry.deleteAttribute('normal');\\nboxGeometry.deleteAttribute('uv');\\nboxGeometry = BufferGeometryUtils.mergeVertices(boxGeometry);\\n\\nboxGeometry.computeVertexNormals();\\nconsole.log();\\n\\nreturn boxGeometry;\\n}\\n\\nfunction createInnerGeometry(){\\n    const baseGeometry = new THREE.PlaneGeometry(1 - 2 * params.edgeRadius, 1 - 2 * params.edgeRadius);\\n    const offset = .48;\\n    const mergedGeometry = BufferGeometryUtils.mergeGeometries([\\n        baseGeometry.clone().translate(0, 0, offset),\\n        baseGeometry.clone().translate(0, 0, -offset),\\n        baseGeometry.clone().rotateX(.5 * Math.PI).translate(0, -offset, 0),\\n        baseGeometry.clone().rotateX(.5 * Math.PI).translate(0, offset, 0),\\n        baseGeometry.clone().rotateY(.5 * Math.PI).translate(-offset, 0, 0),\\n        baseGeometry.clone().rotateY(.5 * Math.PI).translate(offset, 0, 0),\\n    ], false);\\n    return mergedGeometry;\\n\\n}\\n\\nfunction addDiceEvents(dice) {\\n    dice.body.addEventListener('sleep', (e) => {\\n\\n        dice.body.allowSleep = false;\\n\\n        const euler = new CANNON.Vec3();\\n        e.target.quaternion.toEuler(euler);\\n\\n        const eps = .1;\\n        let isZero = (angle) => Math.abs(angle) < eps;\\n        let isHalfPi = (angle) => Math.abs(angle - .5 * Math.PI) < eps;\\n        let isMinusHalfPi = (angle) => Math.abs(.5 * Math.PI + angle) < eps;\\n        let isPiOrMinusPi = (angle) => (Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps);\\n\\n\\n        if (isZero(euler.z)) {\\n            if (isZero(euler.x)) {\\n                showRollResults(1);\\n            } else if (isHalfPi(euler.x)) {\\n                showRollResults(4);\\n            } else if (isMinusHalfPi(euler.x)) {\\n                showRollResults(3);\\n            } else if (isPiOrMinusPi(euler.x)) {\\n                showRollResults(6);\\n            } else {\\n                // landed on edge => wait to fall on side and fire the event again\\n                dice.body.allowSleep = true;\\n            }\\n        } else if (isHalfPi(euler.z)) {\\n            showRollResults(2);\\n        } else if (isMinusHalfPi(euler.z)) {\\n            showRollResults(5);\\n        } else {\\n            // landed on edge => wait to fall on side and fire the event again\\n            dice.body.allowSleep = true;\\n        }\\n    });\\n}\\n\\nfunction showRollResults(score) {\\n    if (scoreResult === '') {\\n        scoreResult += score;\\n    } else {\\n        scoreResult += ('+' + score);\\n    }\\n    // console.log('scoreResult='+scoreResult);\\n    \\n}\\n\\nfunction render() {\\n    physicsWorld.fixedStep();\\n\\n    for (const dice of diceArray) {\\n        dice.mesh.position.copy(dice.body.position)\\n        dice.mesh.quaternion.copy(dice.body.quaternion)\\n    }\\n\\n    renderer.render(scene, camera);\\n    requestAnimationFrame(render);\\n   \\n}\\n\\nfunction updateSceneSize() {\\n    camera.aspect = window.innerWidth / window.innerHeight;\\n    camera.updateProjectionMatrix();\\n    renderer.setSize(window.innerWidth, window.innerHeight);\\n}\\n\\nfunction throwDice() {\\n    scoreResult = '';\\n\\n    diceArray.forEach((d, dIdx) => {\\n\\n        d.body.velocity.setZero();\\n        d.body.angularVelocity.setZero();\\n\\n        d.body.position = new CANNON.Vec3(dIdx*Math.random(),dIdx*Math.random(), dIdx*1.5);\\n        d.mesh.position.copy(d.body.position);\\n\\n        // let REL = [6,1,1];\\n\\n        // d.mesh.rotation.set(...REL);\\n        d.mesh.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())\\n    //    console.log('d.mesh',d.mesh);\\n        d.mesh.castShadow = true\\n\\n\\n        d.body.quaternion.copy(d.mesh.quaternion);\\n\\n        const force = 3;// + 5 * Math.random();\\n        d.body.applyImpulse(\\n            new CANNON.Vec3(-force, force, 0),\\n            new CANNON.Vec3(0, 0, .2)\\n        );\\n\\n        d.body.allowSleep = true;\\n    });\\n}\\n\\n\\n\\t\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>3d-dice_roller</title>\\n\\n</svelte:head>\\n\\n<section class=\\"body\\">\\n\\t<!-- <Dice /> -->\\n\\t<canvas bind:this={canvas} on:click={create6}></canvas>\\n\\t<div class=\\"ui-controls\\">\\n        <div class=\\"score\\">Score点数: \\n            <!-- <span id=\\"score-result\\"></span> -->\\n            <span contenteditable=\\"true\\"\\n            bind:innerHTML={scoreResult}>\\n            </span>\\n        </div>\\n        <p id=\\"item\\">按住shift拖住鼠标移动可控制观察视角</p>\\n           <button id=\\"roll-btn\\" on:click={create6}>\\n               <p>throw the dice</p>\\n               <p>点击丢出骰子</p>\\n            </button>\\n            <button class=\\"dropdown\\">\\n                <a href=\\"#\\" class=\\"dropbtn\\">\\n                    <p>number of dice</p>\\n                    <p>选择丢出骰子数量</p>\\n                    <div class=\\"dropdown-content\\">\\n                       <button id=\\"number1\\" on:click={create1}>1</button>\\n                       <button id=\\"number2\\" on:click={create2}>2</button>\\n                       <button id=\\"number3\\" on:click={create3}>3</button>\\n                       <button id=\\"number4\\" on:click={create4}>4</button>\\n                       <button id=\\"number5\\" on:click={create5}>5</button>\\n                       <button id=\\"number6\\" on:click={create6}>6</button>\\n                    </div>\\n                </a>\\n            </button>\\n    </div>\\n</section>\\n\\n<style>\\n.body{\\n    background-color: #232323;\\n}\\n.ui-controls {\\n\\t/* position: relative; */\\n\\tposition: absolute;\\n\\n\\twidth: 100%;\\n\\tmax-width: 500px;\\n\\tfont-family: inherit;\\n\\tuser-select: none;\\n\\t/* line-height: 1.5; */\\n\\tpadding: 10px;\\n\\tpointer-events: none;\\n\\tleft: 30px;\\n\\tbottom: 10px;\\n\\t}\\n\\t.score {\\n\\tfont-weight: bold;\\n    color:#ffffff;\\n    }\\n\\t.ui-controls span {\\n\\tdisplay: inline-block;\\n\\tmin-width: 1.8em;\\n\\tcolor: #fd9b6b;\\n}\\n\\n.ui-controls #roll-btn {\\n\\tbackground-color: #098642;\\n\\tfont-weight: bold;\\n\\tcolor: #ffffff;\\n\\tborder: none;\\n\\tpadding: 1em 1.5em;\\n\\tborder-radius: 1.5em;\\n\\ttext-decoration: none;\\n\\tdisplay: inline-block;\\n\\tcursor: pointer;\\n\\tmargin: 2em 0 0 0;\\n\\ttransition: background-color 0.2s, transform 0.1s;\\n\\tpointer-events: auto;\\n}\\n.ui-controls #roll-btn:active {\\n\\ttransform: translateY(2px);\\n}\\n.ui-controls #roll-btn:hover {\\n\\tbackground-color: #098642;\\n}\\n/* 为每个链接设定样式 */\\n.dropbtn {\\n\\tbackground-color: #098642;\\n\\tfont-weight: bold;\\n\\tcolor: #ffffff;\\n\\tborder: none;\\n\\tpadding: 1em 1.5em;\\n\\tborder-radius: 1.5em;\\n\\ttext-decoration: none;\\n\\tdisplay: inline-block;\\n\\tcursor: pointer;\\n\\t/* margin: 2em 0 0 0; */\\n\\ttransition: background-color 0.2s, transform 0.1s;\\n\\tpointer-events: auto;\\n}\\n.dropbtn:hover\\n{\\n\\tbackground-color: #35a162;\\n\\tcolor: black;\\n}\\n\\n.dropdown {\\n\\tdisplay: inline-block;\\n\\tbackground-color: #098642;\\n\\tfont-weight: bold;\\n\\tcolor: #ffffff;\\n\\tborder: none;\\n\\tborder-radius: 1.5em;\\n\\ttext-decoration: none;\\n\\tcursor: pointer;\\n\\tpointer-events: auto;\\n\\n}    \\n.dropdown-content {\\n\\t/* 隐藏菜单 */\\n\\tdisplay: none;\\n\\tposition: absolute;\\n\\tbackground-color: #098642;\\n\\t/* 设置链接元素的最小宽度 */\\n\\tmin-width: 160px;\\n\\t/* box-shadow: 0px 8px 16px 0px rgba(13, 180, 185, 0.2); */\\n\\toverflow: auto;\\n} \\n\\n.dropdown:hover .dropdown-content {\\n\\tdisplay: block;\\n\\tleft: 30%;\\n}\\n#item{\\n    color:#ffffff\\n}\\ncanvas{\\n    position: absolute;\\n    bottom: 30%;\\n}\\n</style>\\n"],"names":[],"mappings":"AA4aA,mCAAK,CACD,gBAAgB,CAAE,OACtB,CACA,0CAAa,CAEZ,QAAQ,CAAE,QAAQ,CAElB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,OAAO,CACpB,WAAW,CAAE,IAAI,CAEjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,IAAI,CACpB,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IACR,CACA,oCAAO,CACP,WAAW,CAAE,IAAI,CACd,MAAM,OACN,CACH,2BAAY,CAAC,mBAAK,CAClB,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,OACR,CAEA,2BAAY,CAAC,wBAAU,CACtB,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,aAAa,CAAE,KAAK,CACpB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CACjD,cAAc,CAAE,IACjB,CACA,2BAAY,CAAC,wBAAS,OAAQ,CAC7B,SAAS,CAAE,WAAW,GAAG,CAC1B,CACA,2BAAY,CAAC,wBAAS,MAAO,CAC5B,gBAAgB,CAAE,OACnB,CAEA,sCAAS,CACR,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,aAAa,CAAE,KAAK,CACpB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,OAAO,CAEf,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CACjD,cAAc,CAAE,IACjB,CACA,sCAAQ,MACR,CACC,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KACR,CAEA,uCAAU,CACT,OAAO,CAAE,YAAY,CACrB,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACpB,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OAAO,CACf,cAAc,CAAE,IAEjB,CACA,+CAAkB,CAEjB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,OAAO,CAEzB,SAAS,CAAE,KAAK,CAEhB,QAAQ,CAAE,IACX,CAEA,wBAAS,MAAM,CAAC,gCAAkB,CACjC,OAAO,CAAE,KAAK,CACd,IAAI,CAAE,GACP,CACA,mCAAK,CACD,MAAM,OAAO;AACjB,CACA,oCAAM,CACF,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GACZ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scoreResult;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-z20y5e_START -->${$$result.title = `<title>3d-dice_roller</title>`, ""}<!-- HEAD_svelte-z20y5e_END -->`, ""} <section class="body svelte-17aotks"> <canvas class="svelte-17aotks"${add_attribute()}></canvas> <div class="ui-controls svelte-17aotks"><div class="score svelte-17aotks">Score点数: 
             <span contenteditable="true" class="svelte-17aotks" data-svelte-h="svelte-1wgfluw">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(scoreResult)}</span></div> <p id="item" class="svelte-17aotks" data-svelte-h="svelte-4y9sh9">按住shift拖住鼠标移动可控制观察视角</p> <button id="roll-btn" class="svelte-17aotks" data-svelte-h="svelte-1cjqd08"><p>throw the dice</p> <p>点击丢出骰子</p></button> <button class="dropdown svelte-17aotks"><a href="#" class="dropbtn svelte-17aotks"><p data-svelte-h="svelte-btbpv">number of dice</p> <p data-svelte-h="svelte-1ygini5">选择丢出骰子数量</p> <div class="dropdown-content svelte-17aotks"><button id="number1" data-svelte-h="svelte-c0a720">1</button> <button id="number2" data-svelte-h="svelte-1578r51">2</button> <button id="number3" data-svelte-h="svelte-ijlrum">3</button> <button id="number4" data-svelte-h="svelte-1v5hpqj">4</button> <button id="number5" data-svelte-h="svelte-igiufw">5</button> <button id="number6" data-svelte-h="svelte-dr621t">6</button></div></a></button></div> </section>`;
});
export {
  Page as default
};
