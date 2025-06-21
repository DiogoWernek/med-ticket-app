import Wave from "react-wavify";
import logo from "../assets/logowaves.svg"

const WaveHeader = () => {
  return (
    <div className="relative w-full h-[80px] bg-[#A294F9] overflow-hidden">
      <Wave
        fill="#F5F5F5"
        paused={false}
        className="absolute bottom-0 w-full"
        options={{
          height: 130,
          amplitude: 20,
          speed: 0.1,
          points: 3,
        }}
      />

      <Wave
        fill="#F5F5F5"
        paused={false}
        className="absolute bottom-0 w-full opacity-70"
        options={{
          height: 130,
          amplitude: 15,
          speed: 0.1,
          points: 4,
        }}
      />

      <Wave
        fill="#F5F5F5"
        paused={false}
        className="absolute bottom-0 w-full opacity-70"
        options={{
          height: 130,
          amplitude: 10,
          speed: 0.1,
          points: 2,
        }}
      />

      <div className="relative z-10 text-start p-5">
        <img src={logo} alt="Logo MedTicket" />
      </div>
    </div>
  );
};

export default WaveHeader;
