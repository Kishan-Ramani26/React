import { useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";
import { use, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin once at module load
if (gsap && gsap.registerPlugin) gsap.registerPlugin(ScrollTrigger);

function Dog() {
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

  const [normalMap, sampleMatcap, matcap3] = useTexture([
    "/dog_normals.jpg",
    "/Matcap/mat-2.png",
    "/Matcap/mat-3.png",
  ]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  // Load branches normal and diffuse (color) map
  const [branchesNormalMap, branchesDiffuseMap] = useTexture([
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

  // Use MeshStandardMaterial for correct diffuse map rendering
  const branchMaterial = new THREE.MeshStandardMaterial({
    normalMap: branchesNormalMap,
    map: branchesDiffuseMap,
  });

  scene.scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name.includes("DOGSTUDIO")) {
        child.material = dogmaterial;
      }
      if (child.name.toUpperCase().includes("BRANCH")) {
        child.material = branchMaterial;
      }
    }
  });

  const modelRef = useRef(scene.scene);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-1",
        endTrigger: ".section-3",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    tl.to(
      modelRef.current.position,
      {
        z: "-=1",
        y: "+=0.6",
        ease: "none",
      },
      "<",
    );

    tl.to(modelRef.current.rotation,{
      y:"+=0.3"
    },"<")

    tl.to(
      modelRef.current.scale,
      {
        x: 2.5,
        y: 2.5,
        z: 2.5,
        ease: "none",
      },
      "<",
    );
    tl.to(modelRef.current.rotation, {
      x: `+=${Math.PI * 0.1}`,
      ease: "none",
    });
  }, []);

  return (
    <>
      <primitive
        ref={modelRef}
        object={scene.scene}
        position={[0.45, -1.8, 0.2]}
        rotation={[0, Math.PI / 5, 0]}
        scale={[3, 3, 3]}
      />
      <directionalLight position={[0, 5, 5]} intensity={10} color={0xffffff} />
    </>
  );
}

export default Dog;
