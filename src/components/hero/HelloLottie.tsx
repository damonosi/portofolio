import { Player } from "@lottiefiles/react-lottie-player";
import TextBubble from "./TextBubble";
const HelloLottie = ({ className }: { className?: string }) => {
  return (
    <div className="group">
      <div className="  -translate-x-44 translate-y-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <TextBubble className=" " />
      </div>
      <Player
        autoplay
        loop
        src="lottie/hello.json"
        className={`w-96 h-96 ${className} `}
      ></Player>
    </div>
  );
};

export default HelloLottie;
