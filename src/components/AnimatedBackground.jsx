import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 50;
    camera.position.y = 0;
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (!mountRef.current) return;
    mountRef.current.appendChild(renderer.domElement);

    // Create falling stars
    const createStars = () => {
      const geometry = new THREE.BufferGeometry();
      const count = 500;
      
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count);
      const sizes = new Float32Array(count);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = Math.random() * 200 - 100; // x
        positions[i3 + 1] = Math.random() * 200 - 50; // y
        positions[i3 + 2] = Math.random() * 200 - 100; // z
        
        velocities[i] = Math.random() * 0.2 + 0.1;
        sizes[i] = Math.random() * 2 + 0.5;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        map: createStarTexture(),
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    // Create star texture
    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(0.5, 'rgba(255,200,200,0.3)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      
      return new THREE.CanvasTexture(canvas);
    };

    const stars = createStars();
    scene.add(stars);

    // Animation
    const animate = () => {
      const positions = stars.geometry.attributes.position.array;
      const velocities = stars.geometry.attributes.velocity.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= velocities[i/3]; // Move stars down
        
        // Reset position when star goes below view
        if (positions[i + 1] < -100) {
          positions[i] = Math.random() * 200 - 100;
          positions[i + 1] = 100;
          positions[i + 2] = Math.random() * 200 - 100;
        }
      }
      
      stars.geometry.attributes.position.needsUpdate = true;
      
      // Rotate camera slightly based on mouse position
      camera.rotation.y = mouse.x * 0.1;
      camera.rotation.x = -mouse.y * 0.1;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Mouse movement tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      scene.remove(stars);
      stars.geometry.dispose();
      stars.material.dispose();
      renderer.dispose();
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at center, rgba(20, 20, 40, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)'
      }}
    />
  );
};

export default AnimatedBackground;