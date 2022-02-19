import React from "react";

// LedDisplay component que gera um svg com os números da tela de display
const LedDisplay = (props) => {
  //valores para montar o preenchimento dos números recebidos
  const lookUpValues = [123, 10, 55, 31, 78, 93, 125, 11, 127, 95];
  //valores para montar o svg, como largura, altura, encurvamento, tamanho, tamanho da borda, cores e valores para renderizar
  const {
    width,
    height,
    skew,
    ledSize,
    barSize,
    borderCol,
    colorPrimary,
    colorSecondary,
    value,
  } = {
    colorSecondary: props.foregroundCol,
    colorPrimary: props.backgroundCol,
    borderCol: props.borderCol,
    ledSize: +props.ledSize,
    width: +props.width,
    value: +lookUpValues[props.displayValue],
    skew: "skewX(" + props.skew + ")",
    height: +props.width * 2 + +props.ledSize * 3,
    barSize: +props.width - +props.ledSize * 2,
  };

  // retorna o svg gerado de acordo com os valores passado acima.
  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <svg width={+width + 9} height={+height} transform={skew}>
        <rect
          x={ledSize}
          y="0"
          rx="2"
          ry="2"
          width={barSize}
          height={ledSize}
          style={{
            fill: `${(value & 1) === 1 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
        <rect
          x={barSize + ledSize}
          y={ledSize}
          rx="2"
          ry="2"
          width={ledSize}
          height={barSize}
          style={{
            fill: `${(value & 2) === 2 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
        <rect
          x={ledSize}
          y={barSize + ledSize}
          rx="2"
          ry="2"
          width={barSize}
          height={ledSize}
          style={{
            fill: `${(value & 4) === 4 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
        <rect
          x={barSize + ledSize}
          y={barSize + ledSize * 2}
          rx="2"
          ry="2"
          width={ledSize}
          height={barSize}
          style={{
            fill: `${(value & 8) === 8 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
        <rect
          x={ledSize}
          y={barSize * 2 + ledSize * 2}
          rx="2"
          ry="2"
          width={barSize}
          height={ledSize}
          style={{
            fill: `${(value & 16) === 16 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
        <rect
          x="0"
          y={barSize + ledSize * 2}
          rx="2"
          ry="2"
          width={ledSize}
          height={barSize}
          style={{
            fill: `${(value & 32) === 32 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
        <rect
          x="0"
          y={ledSize}
          rx="2"
          ry="2"
          width={ledSize}
          height={barSize}
          style={{
            fill: `${(value & 64) === 64 ? colorPrimary : colorSecondary}`,
            stroke: borderCol,
          }}
        />
      </svg>
    </div>
  );
};

export default LedDisplay;
