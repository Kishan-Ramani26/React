import { useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function dog() {
  const scene = useGLTF("/Model/dog.drc.glb");

  useThree(({ camera, scene, gl }) => {
    camera.position.set(0, 0, 1.5);
    scene.background = null;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(scene.animations, scene.scene);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  // const texture = useTexture(
  //   {
  //     normalMap: "/dog_normals.jpg",
  //     sampleMatcap: "/Matcap/mat-2.png",
  //     branchesNormalMap: "/branches_normals.jpeg",
  //   },
  //   (texture) => {
  //     texture.flipY = false;
  //     texture.colorSpace = THREE.SRGBColorSpace;
  //   },
  // );

  const [normalMap, sampleMatcap] = useTexture([
    "/dog_normals.jpg",
    "/Matcap/mat-2.png",
  ]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const [branchesNormalMap, branchMap] = useTexture([
    "/branches_normals.jpeg",
    "/branches_diffuse.jpeg",
  ]).map((texture) => {
    texture.flipY = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const dogmaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMatcap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchesNormalMap,
    map: branchMap,
  });

  scene.scene.traverse((child) => {
    if (child.name.includes("DOGSTUDIO")) {
      child.material = dogmaterial;
    }
    if (child.name.includes("BRANCHS")) {
      child.material = branchMaterial;
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
        <directionalLight
          position={[0, 5, 5]}
          intensity={10}
          color={0xffffff}
        />
    </>
  );
}

export default dog;
