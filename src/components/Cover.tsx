import cover from "../assets/cover.jpg";

export const Cover = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden  h-40">
      <div className="relative w-screen h-44 ">
        <img
          src={cover}
          className=" object-cover h-screen w-[60rem] absolute -top-24 -left-0 "
        />
      </div>
    </div>
  );
};
