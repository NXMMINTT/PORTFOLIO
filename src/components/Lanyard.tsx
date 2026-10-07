"use client";

// ป้ายห้อยคอ 3 มิติ ลากเล่นได้ — ดัดแปลงจาก React Bits Lanyard
// https://reactbits.dev/components/lanyard (MIT + Commons Clause, © David Haz)
// โมเดลการ์ดอยู่ที่ public/lanyard/card.glb ส่วนหน้า/หลังการ์ดและลายสายวาดจาก profile
import { Environment, Lightformer, useGLTF, useTexture } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree, type ThreeElement, type ThreeEvent } from "@react-three/fiber";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
  type RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { emoji3dUrl } from "@/components/Decor";
import { profile } from "@/data/profile";

extend({ MeshLineGeometry, MeshLineMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: Partial<ThreeElement<typeof MeshLineMaterial>>;
  }
}

const CARD_GLB = "/lanyard/card.glb";
// จุดแขวนอยู่กลางคอลัมน์ซ้าย (ห่างขอบซ้าย canvas 230px) หรือกลาง canvas ถ้าจอแคบ
const ANCHOR_PX = 230;

// หน้าการ์ดในโมเดลใช้ครึ่งซ้ายของ texture atlas ส่วนหลังใช้ครึ่งขวา (วัดจาก card.glb)
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };
// วาดรูปหน้า/หลังให้สัดส่วนตรงกับพื้นที่บน atlas (1678x1677) จะได้ไม่โดนครอป
const TEX_W = 800;
const TEX_H = Math.round(TEX_W / ((0.5 * 1678) / (0.755 * 1677)));

const C = {
  blue: "#2f6be4",
  blueDark: "#1d4fc4",
  ink: "#1f2a44",
  muted: "#5b6478",
  pink: "#e8459b",
  paper: "#fbfaf5",
  yellow: "#fbbf24",
};

function cssFont(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function grid(ctx: CanvasRenderingContext2D, color: string, step = 40) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  for (let x = step; x < TEX_W; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, TEX_H);
    ctx.stroke();
  }
  for (let y = step; y < TEX_H; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(TEX_W, y);
    ctx.stroke();
  }
}

function drawFront(ctx: CanvasRenderingContext2D, photo: HTMLImageElement | null) {
  const pixel = cssFont("--font-pixel", "monospace");
  const heading = cssFont("--font-heading", "sans-serif");
  const body = cssFont("--font-body", "sans-serif");

  ctx.fillStyle = C.paper;
  ctx.fillRect(0, 0, TEX_W, TEX_H);
  grid(ctx, "rgba(47,107,228,0.08)");

  // แถบหัวบัตร (ด้านบนสุดโดนตัวหนีบบังบางส่วน)
  ctx.fillStyle = C.blue;
  ctx.fillRect(0, 0, TEX_W, 260);
  ctx.textAlign = "center";
  ctx.fillStyle = "#fff";
  ctx.font = `700 64px ${pixel}`;
  ctx.fillText("PORTFOLIO", TEX_W / 2, 180);
  ctx.fillStyle = C.yellow;
  ctx.font = `700 30px ${pixel}`;
  ctx.fillText("2026", TEX_W / 2, 230);

  // รูป
  const px = 200;
  const py = 320;
  const ps = 400;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 6;
  roundRect(ctx, px, py, ps, ps, 36);
  ctx.fill();
  if (photo) {
    // ครอปรูปให้เต็มกรอบสี่เหลี่ยมมุมมน (แบบ object-fit: cover)
    const s = Math.min(photo.width, photo.height);
    ctx.save();
    roundRect(ctx, px, py, ps, ps, 36);
    ctx.clip();
    ctx.drawImage(photo, (photo.width - s) / 2, (photo.height - s) / 2, s, s, px, py, ps, ps);
    ctx.restore();
  }
  roundRect(ctx, px, py, ps, ps, 36);
  ctx.stroke();

  // ชื่อ
  ctx.fillStyle = C.blue;
  ctx.font = `700 76px ${pixel}`;
  ctx.fillText(profile.nickname, TEX_W / 2, 835);
  ctx.fillStyle = C.ink;
  ctx.font = `500 42px ${heading}`;
  ctx.fillText(profile.name, TEX_W / 2, 900);

  // ตำแหน่ง
  ctx.font = `600 32px ${body}`;
  const role = profile.role;
  const rw = ctx.measureText(role).width + 56;
  ctx.fillStyle = C.pink;
  roundRect(ctx, (TEX_W - rw) / 2, 945, rw, 58, 29);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.fillText(role, TEX_W / 2, 985);

  ctx.fillStyle = C.muted;
  ctx.font = `400 28px ${body}`;
  ctx.fillText(`📍 ${profile.location}`, TEX_W / 2, 1080);

  // แถบท้าย
  ctx.fillStyle = C.ink;
  ctx.fillRect(0, TEX_H - 56, TEX_W, 56);
  ctx.fillStyle = C.yellow;
  ctx.font = `400 22px ${pixel}`;
  ctx.fillText("✦ ACCESS: ALL AREAS ✦", TEX_W / 2, TEX_H - 20);
}

function drawBack(ctx: CanvasRenderingContext2D) {
  const pixel = cssFont("--font-pixel", "monospace");
  const body = cssFont("--font-body", "sans-serif");

  ctx.fillStyle = C.blue;
  ctx.fillRect(0, 0, TEX_W, TEX_H);
  grid(ctx, "rgba(255,255,255,0.16)", 44);

  ctx.textAlign = "center";
  ctx.fillStyle = "#fff";
  ctx.font = `700 92px ${pixel}`;
  ctx.fillText("MIND", TEX_W / 2, TEX_H / 2 - 30);
  ctx.fillText("MINT", TEX_W / 2, TEX_H / 2 + 70);
  ctx.fillStyle = C.yellow;
  ctx.fillText(".", TEX_W / 2 + 190, TEX_H / 2 + 70);

  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = `500 30px ${body}`;
  ctx.fillText(profile.email, TEX_W / 2, TEX_H - 110);
}

function drawBand(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = C.ink;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = C.blue;
  ctx.fillRect(0, 8, w, h - 16);
  ctx.fillStyle = "#fff";
  ctx.font = `700 52px ${cssFont("--font-pixel", "monospace")}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${profile.nickname} ✦`, w / 2, h / 2 + 2);
}

function toDataURL(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext("2d")!);
  return canvas.toDataURL("image/png");
}

type BadgeImages = { front: string; back: string; band: string };

/** วาดรูปหน้าการ์ด หลังการ์ด และลายสาย หลังฟอนต์และรูปโปรไฟล์โหลดเสร็จ */
function useBadgeImages() {
  const [images, setImages] = useState<BadgeImages | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = (src: string | null) =>
      new Promise<HTMLImageElement | null>((resolve) => {
        if (!src) return resolve(null);
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
      });
    // ใช้รูปจริงก่อน ถ้าโหลดไม่ได้ค่อยใช้อีโมจิ 3D แทน
    const photo = load(profile.photo).then((img) => img ?? load(emoji3dUrl("👩‍💻")));

    Promise.all([document.fonts.ready, photo]).then(([, img]) => {
      if (cancelled) return;
      setImages({
        front: toDataURL(TEX_W, TEX_H, (ctx) => drawFront(ctx, img)),
        back: toDataURL(TEX_W, TEX_H, drawBack),
        band: toDataURL(512, 128, (ctx) => drawBand(ctx, 512, 128)),
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return images;
}

const segmentProps: RigidBodyProps = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 4,
  linearDamping: 4,
};

type LerpedBody = RapierRigidBody & { lerped?: THREE.Vector3 };

const getLerped = (body: LerpedBody) => {
  if (!body.lerped) body.lerped = new THREE.Vector3().copy(body.translation());
  return body.lerped;
};

type BandProps = {
  images: BadgeImages;
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
};

function Band({ images, maxSpeed = 50, minSpeed = 0, isMobile = false }: BandProps) {
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null!);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LerpedBody>(null!);
  const j2 = useRef<LerpedBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const [v] = useState(() => ({
    vec: new THREE.Vector3(),
    ang: new THREE.Vector3(),
    rot: new THREE.Vector3(),
    dir: new THREE.Vector3(),
  }));

  const { nodes, materials } = useGLTF(CARD_GLB) as unknown as {
    nodes: Record<"card" | "clip" | "clamp", THREE.Mesh>;
    materials: Record<"base" | "metal", THREE.MeshStandardMaterial>;
  };
  const bandTexture = useTexture(images.band, (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
  });
  const frontTex = useTexture(images.front);
  const backTex = useTexture(images.back);

  // วางรูปหน้า/หลังลงบน texture atlas ของการ์ด
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map!;
    const baseImg = baseMap.image as HTMLImageElement;
    const AW = baseImg.width;
    const AH = baseImg.height;
    const canvas = document.createElement("canvas");
    canvas.width = AW;
    canvas.height = AH;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(baseImg, 0, 0, AW, AH);

    const drawFitted = (img: HTMLImageElement, rect: typeof FRONT_UV_RECT) => {
      const rx = rect.x * AW;
      const ry = rect.y * AH;
      const rw = rect.w * AW;
      const rh = rect.h * AH;
      const scale = Math.max(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, rx + (rw - dw) / 2, ry + (rh - dh) / 2, dw, dh);
      ctx.restore();
    };
    drawFitted(frontTex.image as HTMLImageElement, FRONT_UV_RECT);
    drawFitted(backTex.image as HTMLImageElement, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    return composite;
  }, [frontTex, backTex, materials.base.map]);

  const [curve] = useState(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);
    c.curveType = "chordal";
    return c;
  });
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const { width } = useThree((s) => s.size);
  const viewportWidth = useThree((s) => s.viewport.width);
  const anchorX = (Math.min(width / 2, ANCHOR_PX) / width - 0.5) * viewportWidth;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (!hovered) return;
    document.body.style.cursor = dragged ? "grabbing" : "grab";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    const { vec, ang, rot, dir } = v;
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        const lerped = getLerped(ref.current);
        const d = Math.max(0.1, Math.min(1, lerped.distanceTo(ref.current.translation())));
        lerped.lerp(ref.current.translation(), delta * (minSpeed + d * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(getLerped(j2.current));
      curve.points[2].copy(getLerped(j1.current));
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, false);
    }
  });

  return (
    <>
      <group position={[anchorX, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? "kinematicPosition" : "dynamic"}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              e.nativeEvent.preventDefault(); // กันไม่ให้ลากแล้วไปเลือกข้อความบนหน้า
              (e.target as Element).setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(v.vec.copy(card.current.translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.55}
                metalness={0.1}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={new THREE.Vector2(1000, isMobile ? 2000 : 1000)}
          useMap={1}
          map={bandTexture}
          repeat={new THREE.Vector2(-4, 1)}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(CARD_GLB);

export default function Lanyard({ className = "" }: { className?: string }) {
  const images = useBadgeImages();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={className}>
      {/* รับ event จากทั้งหน้า เพราะตัว canvas เป็น pointer-events: none ให้คลิกข้อความด้านล่างได้ */}
      <Canvas
        camera={{ position: [0, 0, 9], fov: 25 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: true }}
        flat
        eventSource={document.body}
        onCreated={(state) =>
          state.setEvents({
            // แปลงตำแหน่งเมาส์บนหน้าเป็นพิกัดของ canvas (canvas ไม่ได้เต็มจอ)
            compute: (event, s) => {
              const r = s.gl.domElement.getBoundingClientRect();
              s.pointer.set(((event.clientX - r.left) / r.width) * 2 - 1, -((event.clientY - r.top) / r.height) * 2 + 1);
              s.raycaster.setFromCamera(s.pointer, s.camera);
            },
          })
        }
      >
        <ambientLight intensity={1} />
        <Physics gravity={[0, -40, 0]} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          {images && <Band images={images} isMobile={isMobile} />}
        </Physics>
        <Environment blur={0.75} environmentIntensity={0.6}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}
