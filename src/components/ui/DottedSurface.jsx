import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cn } from '../../lib/utils';

export function DottedSurface({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Dots
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsCount = 3000;
    const posArray = new Float32Array(dotsCount * 3);

    for (let i = 0; i < dotsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    dotsGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const dotsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.6,
    });

    const dotsMesh = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dotsMesh);

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      dotsMesh.rotation.x += 0.0003;
      dotsMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      dotsGeometry.dispose();
      dotsMaterial.dispose();
    };
  }, []);

  return (
    <div className={cn('absolute inset-0', className)}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.7) 70%)',
        }}
      />
    </div>
  );
}
