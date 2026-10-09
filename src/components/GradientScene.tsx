import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

/** The WebGL scene; split out so three.js only downloads when it will actually run. */
export default function GradientScene({ animate }: { animate: boolean }) {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0 }}
      pixelDensity={1}
      fov={45}
      pointerEvents="none"
      powerPreference="low-power"
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate={animate ? 'on' : 'off'}
        uSpeed={0.12}
        uStrength={1.6}
        uDensity={1.2}
        uFrequency={5.5}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        color1="#e3ebf6"
        color2="#a8cdee"
        color3="#a8e0d8"
        reflection={0.1}
        brightness={1.1}
        grain="off"
        lightType="3d"
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={2.8}
        cameraZoom={9.1}
      />
    </ShaderGradientCanvas>
  );
}
