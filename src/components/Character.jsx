/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/character.glb -o src/components/Character.jsx -r public
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export function Character({ animation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/dumdum1.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.24).play();
    return () => actions?.[animation]?.fadeOut(0.24);
  }, [animation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="fall_guys">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh name="body" geometry={nodes.body.geometry} material={materials['Material.001']} skeleton={nodes.body.skeleton} />
          <skinnedMesh name="eye" geometry={nodes.eye.geometry} material={materials['Material.002']} skeleton={nodes.eye.skeleton} />
          <skinnedMesh name="hand-" geometry={nodes['hand-'].geometry} material={materials['Material.001']} skeleton={nodes['hand-'].skeleton} />
          <skinnedMesh name="leg" geometry={nodes.leg.geometry} material={materials['Material.001']} skeleton={nodes.leg.skeleton} />
        </group>
        <mesh name="BézierCircle" geometry={nodes.BézierCircle.geometry} material={materials['Material.003']} position={[-0.309, 2.11,0.6446]} rotation={[-Math.PI / 2, 0, 0]} scale={0.233}>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.004']} position={[2.696, -0.119, 0.3]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.877, -0.046, -0.992]} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload("/models/dumdum1.glb");