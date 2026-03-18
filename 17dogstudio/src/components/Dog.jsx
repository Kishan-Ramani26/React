import { useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";

function dog() {
  const scene = useGLTF("/Model/dog.drc.glb");

  useThree(({ camera, scene, gl }) => {
    camera.position.set(0, 0, 1.2);
    scene.background = null;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(scene.animations, scene.scene );

  const dogtexture = useTexture({
    normalMap: "public/dog_normals.jpg",
    sampleMatcap: "/Matcap/mat-2.png",
  });

  dogtexture.normalMap.flipY = false;
  dogtexture.sampleMatcap.colorSpace = THREE.SRGBColorSpace;

  const branchesTexture = new THREE.Texture({
    normalMap: "public/branches_normals.jpeg",
  });


  scene.scene.traverse((child) => {
    if (child.name.includes("DOGSTUDIO")) {
      child.material = new THREE.MeshMatcapMaterial({
        map: dogtexture.normalMap,
        normalMap: dogtexture.normalMap,
        matcap: dogtexture.sampleMatcap,
      });
    }
    if (child.name.includes("BRANCHS")) {
      child.material = new THREE.MeshMatcapMaterial({
        map: branchesTexture.normalMap,
        normalMap: branchesTexture.normalMap,
      });
    }
  });

  return (
    <>
      <primitive
        object={scene.scene}
        position={[0.45, -1.8, 0]}
        rotation={[0, Math.PI / 4.5, 0]}
        scale={[3, 3, 3]}
        animation={actions}
      />
      <directionalLight position={[0, 5, 5]} intensity={10} color={0xffffff} />
      <OrbitControls
        enableDamping={true}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
    </>
  );
}

export default dog;
