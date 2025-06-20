import Wave from "react-wavify";
import logo from "../assets/logowaves.svg"

const WaveHeader = () => {
  return (
    <div className="relative w-full h-[180px] bg-[#b8a7f5] overflow-hidden">
      <Wave
        fill="red"
        paused={false}
        className="absolute bottom-0 w-full"
        options={{
          height: 40,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />

      <Wave
        fill="blue"
        paused={false}
        className="absolute bottom-0 w-full opacity-70"
        options={{
          height: 50,
          amplitude: 25,
          speed: 0.2,
          points: 5,
        }}
      />

      <Wave
        fill="purple"
        paused={false}
        className="absolute bottom-0 w-full opacity-70"
        options={{
          height: 50,
          amplitude: 25,
          speed: 0.2,
          points: 5,
        }}
      />

      <div className="relative z-10 text-start p-5">
        <img src={logo} alt="Logo MedTicket" />
      </div>
    </div>
  );
};

export default WaveHeader;
