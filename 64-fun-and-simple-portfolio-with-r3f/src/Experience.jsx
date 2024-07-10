import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
} from '@react-three/drei';

export default function Experience() {
  const computer = useGLTF(
    'https://threejs-journey.com/resources/models/macbook_model.gltf'
  );
  return (
    <>
      <Environment preset='city' />
      <color args={['#241a1a']} attach='background' />

      <PresentationControls global>
        <Float rotationIntensity={0.4}>
          <primitive position-y={-1.2} object={computer.scene} />
        </Float>
      </PresentationControls>
    </>
  );
}
