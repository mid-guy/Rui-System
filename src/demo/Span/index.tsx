export default function Span({ children, ...rest }: any) {
  return (
    <div
      style={{
        textAlign: "left",
        fontSize: 12,
        padding: "4px",
        color: "black",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
