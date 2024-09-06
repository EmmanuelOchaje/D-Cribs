import { Link } from "react-router-dom";

const SignUpImages = () => {
  const imagesArr = [
    {
      src: "./images/crib.jpg",
      alt: "Image-1",
    },
    {
      src: "./images/crib2.jpg",
      alt: "Image-1",
    },
    {
      src: "./images/crib4.jpg",
      alt: "Image-1",
    },
  ];
  return (
    <div className="images">
      <h2 className="header">
        <Link to="/">D-Cribs.</Link>
      </h2>
      <img src={imagesArr[2].src} className="image" />
    </div>
  );
};

export default SignUpImages;
