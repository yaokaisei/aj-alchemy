import type { ContactShadowsProps, CenterProps } from '@react-three/drei';
import type React from 'react';
import { Center, Bounds, ContactShadows } from '@react-three/drei';
import { useState } from 'react';

type StageShadows = Partial<ContactShadowsProps> & {
  offset?: number;
  /** Shadow bias, default: -0.0001 */
  bias?: number;
  /** Shadow normal bias, default: 0 */
  normalBias?: number;
  /** Shadow map size, default: 1024 */
  size?: number;
};

interface StageProps {
  shadows?: StageShadows;
  /** The lighting intensity, default: 0.5 */
  intensity?: number;
  /** To adjust centering, default: undefined */
  center?: Partial<CenterProps>;
}

export const Stage: React.FC<JSX.IntrinsicElements['group'] & StageProps> = ({
  children,
  center,
  intensity = 0.5,
  shadows,
  ...props
}) => {
  const shadowOffset = shadows?.offset ?? 0;

  const [{ radius, height }, set] = useState({
    radius: 0,
    width: 0,
    height: 100,
    depth: 0,
  });

  // 状態が更新されたかどうかを管理するフラグを追加
  const [hasCentered, setHasCentered] = useState(false);

  return (
    <>
      <directionalLight intensity={intensity} />
      <ambientLight intensity={intensity / 2} />

      <Bounds fit margin={1} observe {...props}>
        {/* <Center
          {...center}
          // position={[0, shadowOffset / 2, 0]}
          // onCentered={(props) => {
          //   if (!hasCentered) { // 最初の一回のみ実行
          //     const { width, height, depth, boundingSphere } = props;
          //     set({ radius: boundingSphere.radius, width, height, depth });
          //     setHasCentered(true); // 状態が更新されたことをマーク
          //   }
          // }}
        >
        </Center> */}
        {children}
      </Bounds>

      <group position={[0, -height / 2 - shadowOffset / 2, 0]}>
        <ContactShadows scale={radius * 4} far={radius} blur={2} {...shadows} />
      </group>
    </>
  );
};
