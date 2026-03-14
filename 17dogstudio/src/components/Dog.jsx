import { useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";



function dog() {
  // useThree(({ camera, scene }) => {
  //   camera.position.set(0, 0, 3);
  //   scene.background = null;
  // });

  const scene = useGLTF("/Model/dog.drc.glb");
  
  return (
    <>
      <primitive object={scene.scene} position={[0, 0, 0]} scale={[2, 2, 2]}  />
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
