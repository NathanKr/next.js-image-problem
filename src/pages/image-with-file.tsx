import { HEIGHT_PX, WIDTH_PX } from "@/logic/constants";
import Image from "next/image";

const ImageWithFile = () => {
  return (
    <>
      <h2>ImageWithFile</h2>
      <Image src="/lion.jpg" alt={""} width={WIDTH_PX} height={HEIGHT_PX} />
    </>
  );
};

export default ImageWithFile;
