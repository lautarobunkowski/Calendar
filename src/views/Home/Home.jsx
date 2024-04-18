import { Avatar, AvatarFallback, AvatarImage } from "../../components/Avatar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full max-w-[860px] mx-auto flex flex-col items-center px-[15px] sm:px-[30px] py-[25px]">
      <div className="pt-8 max-w-[320px]">
        <Avatar className="w-16 h-16 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-slate-500"></AvatarFallback>
        </Avatar>
        <div className="mt-2">
          <h1 className="text-md text-gray-600 font-semibold ">Juan Da Rosa</h1>
          <p className="text-sm my-4 text-gray-500">
            Reserva tu corte en el horario disponible que más cómodo te quede.
            ¡Te espero!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap max-w-[900px] mx-auto w-full">
        <Link
          to="corte de pelo/calendar"
          className="flex-initial basis-[calc(50%_-_40px)] min-h-[180px] max-w-[500px] flex-shrink border-t m-5 p-5 w-full font-bold hover:bg-gray-200"
        >
          <button className="flex items-center">
            <div className=" rounded-full w-6 h-6 bg-violet-600 mr-4 "></div>
            <p className="text-black text-lg text-left">Corte de pelo</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
