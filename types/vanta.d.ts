declare module "vanta/dist/vanta.fog.min" {
  type VantaEffect = { destroy: () => void };

  type VantaFogOptions = {
    el: HTMLElement | null;
    THREE: object;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    speed?: number;
    zoom?: number;
  };

  export default function FOG(options: VantaFogOptions): VantaEffect;
}
