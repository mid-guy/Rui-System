import img from '../../assets/img/jisoo.jpeg'
export const Avatar = () => {
  return (
    <div style={{ position: "relative" }}>
      <svg
        style={{
          height: 36,
          width: 36
        }}
      >
        <mask id="jsc_c_4h">
          <circle cx="18" cy="18" fill="white" r="18" />
          <circle
            cx="31"
            cy="31"
            fill="black"
            r="6"
          />
        </mask>
        <g mask="url(#jsc_c_4h)">
          <image
            style={{
              height: 36,
              width: 36
            }}
            x="0"
            y="0"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            xlinkHref={img}
          ></image>
          <circle
            style={{
              strokeWidth: 2,
              fill: "none",
              stroke: "rgba(255, 255, 255, 0.05)"
            }}
            cx="18"
            cy="18"
            r="18"
          ></circle>
        </g>
      </svg>
      <div
        style={{
          bottom: 9,
          right: 5,
          transform: "translate(50%, 50%)",
          position: "absolute",
          borderRadius: "50%"
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            backgroundColor: "#00A400",
            borderRadius: "50%"
          }}
        />
      </div>
    </div>
  );
};
