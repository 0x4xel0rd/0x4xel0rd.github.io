import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFluid } from "@funtech-inc/use-shader-fx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

interface FluidSimulaterProps {
  inkColor: string;
}

function FluidSimulater({ inkColor }: FluidSimulaterProps) {
  const { size, viewport } = useThree();

  const { texture, render: updateFluid } = useFluid({
    size: {
      width: size.width,
      height: size.height,
    },
    dpr: 0.5,
    curlStrength: 100,
    densityDissipation: 0.99,
    pressureDissipation: 0.9,
    pressureIterations: 20,
    splatRadius: 0.2,
    velocityAcceleration: 10,
    velocityDissipation: 0.995,
  });

  useFrame((state) => updateFluid(state));

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        blending={THREE.AdditiveBlending}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function SmokeBackground() {
  const style = getComputedStyle(document.documentElement);
  const bgColor = style.getPropertyValue("--bg-color").trim();
  const inkColor = style.getPropertyValue("--font-color").trim();

  const { theme, setTheme } = useContext(ThemeContext);

  console.log(
    "theme = ",
    theme,
    "bgColor = ",
    bgColor,
    "inkColor = ",
    inkColor
  );

  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
      onCreated={({ gl }) => {
        gl.domElement.style.pointerEvents = "auto";
      }}
      key={`${bgColor}-${inkColor}`}
    >
      <color attach="background" args={[bgColor]} />
      <FluidSimulater inkColor={inkColor} key={inkColor} />
    </Canvas>
  );
}

export default SmokeBackground;
