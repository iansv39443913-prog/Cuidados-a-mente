import Svg, { Path } from 'react-native-svg';

type PuzzleProps = {
  size?: number;
  color?: string;
  opacity?: number;
  variant?: number;
};

export default function Puzzle({
  size = 60,
  color = '#AE65C4',
  opacity = 0.18,
  variant = 1,
}: PuzzleProps) {
  const paths: Record<number, string> = {
    // Peça 1 — encaixe em cima e saliência à direita
    1: `
      M 20 20
      H 40
      V 30
      C 40 38, 45 42, 50 42
      C 55 42, 60 38, 60 30
      V 20
      H 80
      V 40
      H 70
      C 62 40, 58 45, 58 50
      C 58 55, 62 60, 70 60
      H 80
      V 80
      H 20
      V 60
      H 30
      C 38 60, 42 55, 42 50
      C 42 45, 38 40, 30 40
      H 20
      Z
    `,

    // Peça 2 — saliência em cima e encaixe à direita
    2: `
      M 20 20
      H 40
      V 10
      C 40 2, 45 -2, 50 -2
      C 55 -2, 60 2, 60 10
      V 20
      H 80
      V 40
      H 70
      C 62 40, 58 45, 58 50
      C 58 55, 62 60, 70 60
      H 80
      V 80
      H 60
      V 70
      C 60 62, 55 58, 50 58
      C 45 58, 40 62, 40 70
      V 80
      H 20
      Z
    `,

    // Peça 3 — encaixe à esquerda e saliência embaixo
    3: `
      M 20 20
      H 80
      V 40
      H 70
      C 62 40, 58 45, 58 50
      C 58 55, 62 60, 70 60
      H 80
      V 80
      H 60
      V 90
      C 60 98, 55 102, 50 102
      C 45 102, 40 98, 40 90
      V 80
      H 20
      V 60
      H 30
      C 38 60, 42 55, 42 50
      C 42 45, 38 40, 30 40
      H 20
      Z
    `,

    // Peça 4 — saliência à esquerda e encaixe embaixo
    4: `
      M 20 20
      H 80
      V 80
      H 60
      V 70
      C 60 62, 55 58, 50 58
      C 45 58, 40 62, 40 70
      V 80
      H 20
      V 60
      H 10
      C 2 60, -2 55, -2 50
      C -2 45, 2 40, 10 40
      H 20
      Z
    `,

    // Peça 5 — duas saliências
    5: `
      M 20 20
      H 40
      V 10
      C 40 2, 45 -2, 50 -2
      C 55 -2, 60 2, 60 10
      V 20
      H 80
      V 40
      H 90
      C 98 40, 102 45, 102 50
      C 102 55, 98 60, 90 60
      H 80
      V 80
      H 20
      V 60
      H 10
      C 2 60, -2 55, -2 50
      C -2 45, 2 40, 10 40
      H 20
      Z
    `,

    // Peça 6 — encaixes em cima e embaixo
    6: `
      M 20 20
      H 40
      V 30
      C 40 38, 45 42, 50 42
      C 55 42, 60 38, 60 30
      V 20
      H 80
      V 80
      H 60
      V 70
      C 60 62, 55 58, 50 58
      C 45 58, 40 62, 40 70
      V 80
      H 20
      Z
    `,

    // Peça 7 — saliência em cima e encaixe à esquerda
    7: `
      M 20 20
      H 40
      V 10
      C 40 2, 45 -2, 50 -2
      C 55 -2, 60 2, 60 10
      V 20
      H 80
      V 80
      H 20
      V 60
      H 30
      C 38 60, 42 55, 42 50
      C 42 45, 38 40, 30 40
      H 20
      Z
    `,

    // Peça 8 — encaixe em cima e saliência embaixo
    8: `
      M 20 20
      H 40
      V 30
      C 40 38, 45 42, 50 42
      C 55 42, 60 38, 60 30
      V 20
      H 80
      V 80
      H 60
      V 90
      C 60 98, 55 102, 50 102
      C 45 102, 40 98, 40 90
      V 80
      H 20
      Z
    `,
  };

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <Path
        d={paths[variant] || paths[1]}
        fill={color}
        opacity={opacity}
      />
    </Svg>
  );
}
