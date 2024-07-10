import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from '@react-three/drei';

export default function Experience() {
  const computer = useGLTF(
    'https://threejs-journey.com/resources/models/macbook_model.gltf'
  );
  return (
    <>
      <Environment preset='city' />
      <color args={['#241a1a']} attach='background' />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.7}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#010101'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive position-y={-1.2} object={computer.scene}>
            <Html
              transform
              wrapperClass='htmlScreen'
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={'https://jgifford.dev/'} />
            </Html>
          </primitive>
          <Text
            fontSize={0.8}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign='center'
            font='bangers-v20-latin-regular.woff'
          >
            Hi, I'm Jake!
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={4} blur={2.4} />
    </>
  );
}
