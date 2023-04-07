import { HEIGHT_PX, IMAGE_DATA_BASE64, WIDTH_PX } from "@/logic/constants";
import Image from "next/image";

const ImageWithData = () => {
  return (
    <>
      <h2>ImageWithData</h2>
      <Image
        src={`data:image;base64,${IMAGE_DATA_BASE64}`}
        alt={""}
        width={WIDTH_PX}
        height={HEIGHT_PX}
      />
    </>
  );
};

export default ImageWithData;
