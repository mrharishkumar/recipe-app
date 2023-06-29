import logo from "./logo.png";

export interface BrandProps {
  align?: any;
  width?: string | number;
  padding?: number;
}

const Brand = ({ align, width, padding }: BrandProps) => {
  const style = {
    float: align ? align : "left",
    paddingTop: padding ? `${padding / 2}px` : "20px",
    paddingBottom: padding ? `${padding / 2}px` : "20px",
    paddingLeft: padding ? `${padding}px` : "40px",
    paddingRight: padding ? `${padding}px` : "40px",
  };
  return (
    <div style={{ width: width || "100vw" }}>
      <img style={style} src={logo} alt="aramark-logo" width={"100px"} />
    </div>
  );
};

export default Brand;
