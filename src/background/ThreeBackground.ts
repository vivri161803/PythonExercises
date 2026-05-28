import * as THREE from 'three';
import { config } from '../config';

export class ThreeBackground {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particleSystems: THREE.Points[] = [];
  private mouse: THREE.Vector2;
  private raycaster: THREE.Raycaster;

  private originalPositions: Float32Array[] = [];
  private colorArrays: Float32Array[] = [];
  private baseColor: THREE.Color;
  private highlightColor: THREE.Color;

  constructor(containerId: string) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`Container ${containerId} not found`);
    this.container = el;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 250;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    this.mouse = new THREE.Vector2(-9999, -9999);
    this.raycaster = new THREE.Raycaster();

    this.baseColor = new THREE.Color(config.theme.particleColor);
    this.highlightColor = new THREE.Color(config.theme.accentColor);

    this.initParticles();
    this.addEventListeners();
    this.animate();
  }

  private createCharTexture(char: string): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#e0e0e0';
      ctx.font = 'bold 48px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char, 32, 32);
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private initParticles() {
    const chars = '!@#$%^&*()_+}|{"'.split('');
    const positionsList: number[][] = chars.map(() => []);
    const origPosList: number[][] = chars.map(() => []);
    const colorsList: number[][] = chars.map(() => []);

    const step = 10; // Grid step (smaller = denser)
    const gridCols = 300; // Wider to cover ultra-wide monitors
    const gridRows = 200; // Taller to ensure full coverage

    // Create a uniform grid
    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const x = (c - gridCols / 2) * step;
        const y = (r - gridRows / 2) * step;
        const z = 0; // Flat matrix

        const charIdx = Math.floor(Math.random() * chars.length);

        positionsList[charIdx].push(x, y, z);
        origPosList[charIdx].push(x, y, z);
        // Push R, G, B, A (4 items)
        colorsList[charIdx].push(this.baseColor.r, this.baseColor.g, this.baseColor.b, 0.3);
      }
    }

    for (let i = 0; i < chars.length; i++) {
      if (positionsList[i].length === 0) continue;

      const geometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(positionsList[i]);
      const colorArray = new Float32Array(colorsList[i]);

      geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 4)); // itemSize 4 for RGBA

      const texture = this.createCharTexture(chars[i]);

      const material = new THREE.PointsMaterial({
        size: 7, // User preferred size
        map: texture,
        transparent: true,
        opacity: 1.0, // Let vertex colors dictate alpha
        vertexColors: true,
        depthWrite: false,
        blending: THREE.NormalBlending
      });

      const points = new THREE.Points(geometry, material);

      this.originalPositions.push(new Float32Array(origPosList[i]));
      this.colorArrays.push(colorArray);
      this.particleSystems.push(points);

      this.scene.add(points);
    }
  }

  private addEventListeners() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouseWorld = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(plane, mouseWorld);

    if (!mouseWorld) return;

    for (let s = 0; s < this.particleSystems.length; s++) {
      const points = this.particleSystems[s];
      const positions = points.geometry.attributes.position.array as Float32Array;
      const colors = points.geometry.attributes.color.array as Float32Array;
      const origPos = this.originalPositions[s];

      for (let i = 0; i < positions.length / 3; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const ix4 = i * 4;

        const ox = origPos[ix];
        const oy = origPos[iy];

        // No continuous wave drift to keep the grid uniform
        positions[ix] = ox;
        positions[iy] = oy;

        const px = positions[ix];
        const py = positions[iy];

        const dx = px - mouseWorld.x;
        const dy = py - mouseWorld.y;
        const distSq = dx * dx + dy * dy;

        const interactionRadius = 800; // User preferred radius

        if (distSq < interactionRadius) {
          const force = (interactionRadius - distSq) / interactionRadius;
          // Subtly repel particles near mouse
          positions[ix] += dx * force * 0.1;
          positions[iy] += dy * force * 0.1;

          // Highlight and make fully opaque
          colors[ix4] = this.highlightColor.r;
          colors[ix4 + 1] = this.highlightColor.g;
          colors[ix4 + 2] = this.highlightColor.b;
          colors[ix4 + 3] = 1.0;
        } else {
          // Fade back to base color and opacity
          colors[ix4] += (this.baseColor.r - colors[ix4]) * 0.1;
          colors[ix4 + 1] += (this.baseColor.g - colors[ix4 + 1]) * 0.1;
          colors[ix4 + 2] += (this.baseColor.b - colors[ix4 + 2]) * 0.1;
          colors[ix4 + 3] += (0.3 - colors[ix4 + 3]) * 0.1;
        }
      }

      points.geometry.attributes.position.needsUpdate = true;
      points.geometry.attributes.color.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
