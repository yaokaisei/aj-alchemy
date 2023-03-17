/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/yaokaisei/works/___LocalDate___/Blender-nikeAirJordan1/aj1.gltf -t
*/
/* eslint-disable react/no-unknown-property */
import type * as THREE from 'three';
import { type GroupProps } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { type GLTF } from 'three-stdlib';
import { useMaterial } from '@src/stores/materialState';

type GLTFResult = GLTF & {
  nodes: {
    leftBackDown: THREE.Mesh;
    leftBackLittlePart: THREE.Mesh;
    leftBackMid: THREE.Mesh;
    leftBackTop: THREE.Mesh;
    leftCentral: THREE.Mesh;
    leftCircle: THREE.Mesh;
    leftDownWithHoles: THREE.Mesh;
    leftFrontPart: THREE.Mesh;
    leftFrontWithHoles: THREE.Mesh;
    leftInserts: THREE.Mesh;
    leftLabelFront: THREE.Mesh;
    leftLogo: THREE.Mesh;
    leftMainSole: THREE.Mesh;
    leftMiddleWithHoles: THREE.Mesh;
    leftSwoosh: THREE.Mesh;
    leftSoleLogo: THREE.Mesh;
    leftSeams: THREE.Mesh;
    leftShoelace: THREE.Mesh;
    leftTongue: THREE.Mesh;
    leftTopRound: THREE.Mesh;
    leftTubes: THREE.Mesh;
    leftUnderFeet: THREE.Mesh;
    leftUnderSolePlate: THREE.Mesh;
    rightBackDown001: THREE.Mesh;
    rightBackLittlePart001: THREE.Mesh;
    rightBackMid001: THREE.Mesh;
    rightBackTop: THREE.Mesh;
    rightCentral: THREE.Mesh;
    rightCircle: THREE.Mesh;
    rightDownWithHoles: THREE.Mesh;
    rightFrontPart: THREE.Mesh;
    rightFrontWithHoles: THREE.Mesh;
    rightInserts: THREE.Mesh;
    rightLabelFront: THREE.Mesh;
    rightLogo: THREE.Mesh;
    rightMainSole: THREE.Mesh;
    rightMiddleWithHoles: THREE.Mesh;
    rightSwoosh: THREE.Mesh;
    rightSoleLogo: THREE.Mesh;
    rightSeams: THREE.Mesh;
    rightShoelace: THREE.Mesh;
    rightTongue: THREE.Mesh;
    rightTopRound: THREE.Mesh;
    rightTubes: THREE.Mesh;
    rightUnderFeet: THREE.Mesh;
    rightUnderSolePlate: THREE.Mesh;
  };
  materials: {
    Foxing: THREE.MeshStandardMaterial;
    HealOverlay: THREE.MeshStandardMaterial;
    Heal: THREE.MeshStandardMaterial;
    Quarter: THREE.MeshStandardMaterial;
    Sole: THREE.MeshStandardMaterial;
    QuarterOverlay: THREE.MeshStandardMaterial;
    Tip: THREE.MeshStandardMaterial;
    Vamp: THREE.MeshStandardMaterial;
    LabelLeft: THREE.MeshStandardMaterial;
    Logo: THREE.MeshStandardMaterial;
    Eyestay: THREE.MeshStandardMaterial;
    Swoosh: THREE.MeshStandardMaterial;
    Midsole: THREE.MeshStandardMaterial;
    Laces: THREE.MeshStandardMaterial;
    Tongue: THREE.MeshStandardMaterial;
    Main: THREE.MeshStandardMaterial;
    LabelRight: THREE.MeshStandardMaterial;
  };
};

/** glbファイルのパス */
const MODEL_PATH = '/aj-alchemy/gltf/model_air-jordan-1.gltf';

export const Aj1Model: React.FC<GroupProps> = ({ ...props }): JSX.Element => {
  const { nodes, materials } = useGLTF(MODEL_PATH) as unknown as GLTFResult;
  const { getMaterialColor } = useMaterial();

  return (
    <group {...props} dispose={null}>
      <>
        <mesh
          geometry={nodes.leftBackDown.geometry}
          material={materials.Foxing}
          material-color={getMaterialColor('Foxing')}
          position={[1.32, -0.23, 0.92]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.leftBackLittlePart.geometry}
          material={materials.Foxing}
          material-color={getMaterialColor('Foxing')}
          position={[1.65, 0.44, 0.89]}
          rotation={[1.56, 0.07, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.leftBackMid.geometry}
          material={materials.HealOverlay}
          material-color={getMaterialColor('Heal Overlay')}
          position={[0.9, 0.76, 1]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          geometry={nodes.leftBackTop.geometry}
          material={materials.Heal}
          material-color={getMaterialColor('Heal')}
          position={[1.06, 1.09, 0.97]}
          rotation={[Math.PI, -0.26, Math.PI]}
        />
        <mesh
          geometry={nodes.leftCentral.geometry}
          material={materials.Quarter}
          material-color={getMaterialColor('Quarter')}
          position={[0.47, 0.0, 1.09]}
          rotation={[Math.PI, -0.34, Math.PI]}
        />
        <mesh
          geometry={nodes.leftCircle.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-1.32, -1.02, 0.82]}
          rotation={[Math.PI / 2, 0, -2.05]}
        />
        <mesh
          geometry={nodes.leftDownWithHoles.geometry}
          material={materials.QuarterOverlay}
          material-color={getMaterialColor('Quarter Overlay')}
          position={[-0.86, -0.16, 1.2]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.leftFrontPart.geometry}
          material={materials.Tip}
          material-color={getMaterialColor('Tip')}
          position={[-1.62, -0.46, 1.1]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.leftFrontWithHoles.geometry}
          material={materials.Vamp}
          material-color={getMaterialColor('Vamp')}
          position={[-1.63, -0.23, 1.11]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          geometry={nodes.leftInserts.geometry}
          material={materials.Heal}
          material-color={getMaterialColor('Heal')}
          position={[0.61, 0.48, 1.01]}
          rotation={[Math.PI, -0.34, Math.PI]}
        />
        <mesh
          geometry={nodes.leftLabelFront.geometry}
          material={materials.LabelLeft}
          material-color={getMaterialColor('Label')}
          position={[0.26, 1.5, 1.11]}
          rotation={[1.6, -0.91, 1.6]}
        />
        <mesh
          geometry={nodes.leftLogo.geometry}
          material={materials.Logo}
          material-color={getMaterialColor('Logo')}
          position={[0.87, 0.75, 1.64]}
          rotation={[0.11, 0.21, -0.36]}
        />
        <mesh
          geometry={nodes.leftMainSole.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-0.38, -1, 1.04]}
          rotation={[Math.PI / 2, 0, -2.05]}
        />
        <mesh
          geometry={nodes.leftMiddleWithHoles.geometry}
          material={materials.Eyestay}
          material-color={getMaterialColor('Eyestay')}
          position={[-0.01, 0.62, 1.09]}
          rotation={[Math.PI / 2, 0.6, -Math.PI]}
        />
        <mesh
          geometry={nodes.leftSwoosh.geometry}
          material={materials.Swoosh}
          material-color={getMaterialColor('Swoosh')}
          position={[0.78, 0.08, 0.988]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.leftSoleLogo.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-0.16, -1.02, 1.18]}
          rotation={[Math.PI / 2, 0, -2.05]}
        />
        <mesh
          geometry={nodes.leftSeams.geometry}
          material={materials.Midsole}
          material-color={getMaterialColor('Midsole')}
          position={[-0.37, -0.67, 1.06]}
          rotation={[-1.57, -0.02, -1.57]}
          scale={0.04}
        />
        <mesh
          geometry={nodes.leftShoelace.geometry}
          material={materials.Laces}
          material-color={getMaterialColor('Laces')}
          position={[-0.4, 0.44, 1.11]}
          rotation={[-Math.PI, 1.56, -Math.PI]}
        />
        <mesh
          geometry={nodes.leftTongue.geometry}
          material={materials.Tongue}
          material-color={getMaterialColor('Tongue')}
          position={[0.02, 0.68, 1.13]}
          rotation={[Math.PI / 2, -1.02, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.leftTopRound.geometry}
          material={materials.Main}
          position={[0.94, 1.24, 0.99]}
          rotation={[Math.PI, -0.26, Math.PI]}
        />
        <mesh
          geometry={nodes.leftTubes.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-1.35, -0.99, 1.06]}
          rotation={[Math.PI / 2, 0, -2.05]}
        />
        <mesh
          geometry={nodes.leftUnderFeet.geometry}
          material={materials.Midsole}
          material-color={getMaterialColor('Midsole')}
          position={[-0.23, -0.69, 1.03]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          geometry={nodes.leftUnderSolePlate.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-0.31, -0.96, 1.08]}
          rotation={[Math.PI / 2, 0, -2.05]}
        />
      </>
      <>
        <mesh
          geometry={nodes.rightBackDown001.geometry}
          material={materials.Foxing}
          material-color={getMaterialColor('Foxing')}
          position={[1.3, -0.29, -0.92]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightBackLittlePart001.geometry}
          material={materials.Foxing}
          material-color={getMaterialColor('Foxing')}
          position={[1.63, 0.38, -0.89]}
          rotation={[-1.56, -0.07, -Math.PI / 2]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightBackMid001.geometry}
          material={materials.HealOverlay}
          material-color={getMaterialColor('Heal Overlay')}
          position={[0.87, 0.71, -1]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightBackTop.geometry}
          material={materials.Heal}
          material-color={getMaterialColor('Heal')}
          position={[1.04, 1.04, -0.97]}
          rotation={[-Math.PI, 0.26, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightCentral.geometry}
          material={materials.Quarter}
          material-color={getMaterialColor('Quarter')}
          position={[0.45, -0.05, -1.08]}
          rotation={[-Math.PI, 0.34, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightCircle.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-1.34, -1.08, -0.82]}
          rotation={[-Math.PI / 2, 0, 1.09]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightDownWithHoles.geometry}
          material={materials.QuarterOverlay}
          material-color={getMaterialColor('Quarter Overlay')}
          position={[-0.88, -0.22, -1.21]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightFrontPart.geometry}
          material={materials.Tip}
          material-color={getMaterialColor('Tip')}
          position={[-1.64, -0.52, -1.11]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightFrontWithHoles.geometry}
          material={materials.Vamp}
          material-color={getMaterialColor('Vamp')}
          position={[-1.66, -0.29, -1.12]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightInserts.geometry}
          material={materials.Heal}
          material-color={getMaterialColor('Heal')}
          position={[0.59, 0.42, -1.01]}
          rotation={[-Math.PI, 0.34, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightLabelFront.geometry}
          material={materials.LabelRight}
          material-color={getMaterialColor('Label')}
          position={[0.24, 1.44, -1.11]}
          rotation={[-1.6, 0.91, -1.54]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightLogo.geometry}
          material={materials.Logo}
          material-color={getMaterialColor('Logo')}
          position={[0.85, 0.69, -1.64]}
          rotation={[-0.11, -0.21, 2.78]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightMainSole.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-0.4, -1.05, -1.04]}
          rotation={[-Math.PI / 2, 0, 1.09]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightMiddleWithHoles.geometry}
          material={materials.Eyestay}
          material-color={getMaterialColor('Eyestay')}
          position={[-0.03, 0.56, -1.09]}
          rotation={[-Math.PI / 2, -0.6, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightSwoosh.geometry}
          material={materials.Swoosh}
          material-color={getMaterialColor('Swoosh')}
          position={[0.76, 0.02, -0.985]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightSoleLogo.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-0.18, -1.08, -1.18]}
          rotation={[-Math.PI / 2, 0, 1.09]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightSeams.geometry}
          material={materials.Midsole}
          material-color={getMaterialColor('Midsole')}
          position={[-0.39, -0.73, -1.06]}
          rotation={[1.57, 0.02, 1.57]}
          scale={-0.04}
        />
        <mesh
          geometry={nodes.rightShoelace.geometry}
          material={materials.Laces}
          position={[-0.42, 0.38, -1.12]}
          rotation={[Math.PI, -1.56, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightTongue.geometry}
          material={materials.Tongue}
          material-color={getMaterialColor('Tongue')}
          position={[0, 0.62, -1.13]}
          rotation={[-Math.PI / 2, 1.02, -Math.PI / 2]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightTopRound.geometry}
          material={materials.Main}
          position={[0.92, 1.19, -0.99]}
          rotation={[-Math.PI, 0.26, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightTubes.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-1.37, -1.05, -1.06]}
          rotation={[-Math.PI / 2, 0, 1.09]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightUnderFeet.geometry}
          material={materials.Midsole}
          material-color={getMaterialColor('Midsole')}
          position={[-0.25, -0.75, -1.03]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={-1}
        />
        <mesh
          geometry={nodes.rightUnderSolePlate.geometry}
          material={materials.Sole}
          material-color={getMaterialColor('Sole')}
          position={[-0.33, -1.02, -1.08]}
          rotation={[-Math.PI / 2, 0, 1.09]}
          scale={-1}
        />
      </>
    </group>
  );
};

useGLTF.preload(MODEL_PATH);
