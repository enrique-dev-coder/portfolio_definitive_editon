'use client';
/* eslint-disable */
import { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../lib/model';

const DudeSpinner = () => {
  return (
    <div className="spinner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_38_6)">
          <path
            d="M6.5 14.5001C6.50013 14.1021 6.65835 13.7205 6.93984 13.4392C7.22133 13.1579 7.60304 12.9999 8.001 13.0001C8.39896 13.0002 8.78056 13.1584 9.06187 13.4399C9.34317 13.7214 9.50113 14.1031 9.501 14.5011C9.50087 14.899 9.34265 15.2806 9.06116 15.5619C8.77967 15.8432 8.39796 16.0012 8 16.0011C7.60204 16.0009 7.22044 15.8427 6.93913 15.5612C6.65783 15.2797 6.49987 14.898 6.5 14.5001ZM8.34187e-08 8.00005C6.57414e-05 7.803 0.0389423 7.6079 0.11441 7.42587C0.189878 7.24385 0.300459 7.07847 0.43984 6.93919C0.579221 6.7999 0.744671 6.68943 0.926745 6.61408C1.10882 6.53873 1.30395 6.49999 1.501 6.50005C1.69805 6.50012 1.89315 6.539 2.07518 6.61446C2.2572 6.68993 2.42258 6.80051 2.56187 6.93989C2.70116 7.07927 2.81163 7.24472 2.88697 7.4268C2.96232 7.60887 3.00107 7.804 3.001 8.00105C3.00087 8.39901 2.84265 8.78062 2.56116 9.06192C2.27967 9.34323 1.89796 9.50119 1.5 9.50105C1.10204 9.50092 0.720437 9.34271 0.439133 9.06121C0.157828 8.77972 -0.000132519 8.39801 8.34187e-08 8.00005ZM13 8.00005C13.0001 7.803 13.0389 7.6079 13.1144 7.42587C13.1899 7.24385 13.3005 7.07847 13.4398 6.93919C13.5792 6.7999 13.7447 6.68943 13.9267 6.61408C14.1088 6.53873 14.304 6.49999 14.501 6.50005C14.698 6.50012 14.8932 6.539 15.0752 6.61446C15.2572 6.68993 15.4226 6.80051 15.5619 6.93989C15.7012 7.07927 15.8116 7.24472 15.887 7.4268C15.9623 7.60887 16.0011 7.804 16.001 8.00105C16.0009 8.39901 15.8427 8.78062 15.5612 9.06192C15.2797 9.34323 14.898 9.50119 14.5 9.50105C14.102 9.50092 13.7204 9.34271 13.4391 9.06121C13.1578 8.77972 12.9999 8.39801 13 8.00005ZM1.904 3.40405C1.90407 3.207 1.94294 3.0119 2.01841 2.82987C2.09388 2.64785 2.20446 2.48247 2.34384 2.34319C2.48322 2.2039 2.64867 2.09343 2.83075 2.01808C3.01282 1.94273 3.20795 1.90399 3.405 1.90405C3.60205 1.90412 3.79715 1.943 3.97918 2.01846C4.1612 2.09393 4.32658 2.20451 4.46587 2.34389C4.60516 2.48327 4.71563 2.64872 4.79097 2.8308C4.86632 3.01287 4.90507 3.208 4.905 3.40505C4.90487 3.80301 4.74665 4.18462 4.46516 4.46592C4.18367 4.74722 3.80196 4.90519 3.404 4.90505C3.00604 4.90492 2.62444 4.74671 2.34313 4.46521C2.06183 4.18372 1.90387 3.80201 1.904 3.40405ZM11.096 12.5961C11.0961 12.1981 11.2543 11.8165 11.5358 11.5352C11.8173 11.2539 12.199 11.0959 12.597 11.0961C12.995 11.0962 13.3766 11.2544 13.6579 11.5359C13.9392 11.8174 14.0971 12.1991 14.097 12.5971C14.0969 12.995 13.9387 13.3766 13.6572 13.6579C13.3757 13.9392 12.994 14.0972 12.596 14.0971C12.198 14.0969 11.8164 13.9387 11.5351 13.6572C11.2538 13.3757 11.0959 12.994 11.096 12.5961ZM1.904 12.5961C1.90407 12.399 1.94294 12.2039 2.01841 12.0219C2.09388 11.8399 2.20446 11.6745 2.34384 11.5352C2.48322 11.3959 2.64867 11.2854 2.83075 11.2101C3.01282 11.1347 3.20795 11.096 3.405 11.0961C3.60205 11.0961 3.79715 11.135 3.97918 11.2105C4.1612 11.2859 4.32658 11.3965 4.46587 11.5359C4.60516 11.6753 4.71563 11.8407 4.79097 12.0228C4.86632 12.2049 4.90507 12.4 4.905 12.5971C4.90487 12.995 4.74665 13.3766 4.46516 13.6579C4.18367 13.9392 3.80196 14.0972 3.404 14.0971C3.00604 14.0969 2.62444 13.9387 2.34313 13.6572C2.06183 13.3757 1.90387 12.994 1.904 12.5961ZM11.096 3.40405C11.0961 3.0061 11.2543 2.62449 11.5358 2.34319C11.6752 2.2039 11.8407 2.09343 12.0227 2.01808C12.2048 1.94273 12.4 1.90399 12.597 1.90405C12.794 1.90412 12.9892 1.943 13.1712 2.01846C13.3532 2.09393 13.5186 2.20451 13.6579 2.34389C13.7972 2.48327 13.9076 2.64872 13.983 2.8308C14.0583 3.01287 14.0971 3.208 14.097 3.40505C14.0969 3.80301 13.9387 4.18462 13.6572 4.46592C13.3757 4.74722 12.994 4.90519 12.596 4.90505C12.198 4.90492 11.8164 4.74671 11.5351 4.46521C11.2538 4.18372 11.0959 3.80201 11.096 3.40405Z"
            fill="purple"
          />
        </g>
        <defs>
          <clipPath id="clip0_38_6">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const DudeContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="w-full h-full p-4 relative"
    // className="voxel-dog"
    // m="auto"
    // mt={['-20px', '-60px', '-120px']}
    // mb={['-40px', '-140px', '-200px']}
    // w={[280, 480, 640]}
    // h={[280, 480, 640]}
    // position="relative"
  >
    {children}
  </div>
));

const Dude = () => {
  function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
  }
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  // const urlDogGLB =
  //   (process.env.NODE_ENV === 'production'
  //     ? 'https://craftzdog.global.ssl.fastly.net/homepage'
  //     : '') + '/dog.glb';
  const urlDudeGLB = '3D/dude.glb';
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;

    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;

    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      // Habilitar sombras en el renderer
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 1;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      camera.near = 0.01;
      camera.far = 50000;

      const ambientLight = new THREE.AmbientLight(0xcccccc, 3);

      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
      directionalLight.castShadow = true;
      directionalLight.position.set(2, 2, 2);
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      scene.add(directionalLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, urlDudeGLB, {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <DudeContainer ref={refContainer}>
      {loading && <DudeSpinner />}
    </DudeContainer>
  );
};
Dude.displayName = 'Dude';
export default Dude;
