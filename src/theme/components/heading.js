const baseStyle = {
  color: "black.900",
  fontFamily: "Hiragino Kaku Gothic Pro",
};
const sizes = {
  "2xl": {
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "131%",
  },
  xl: {
    fontSize: "48px",
    fontWeight: 700,
  },
  s: {
    fontSize: "12px",
    fontWeight: 700,
  },
  md: {
    fontSize: "16px",
    fontWeight: 700,
  },
  xs: {
    fontSize: "10px",
    fontWeight: 600,
  },
  lg: {
    fontSize: "20px",
    fontWeight: 700,
  },
};
const defaultProps = {
  size: "md",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
