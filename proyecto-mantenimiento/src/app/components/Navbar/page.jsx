import Link from "next/link";
import { BiUser } from "react-icons/bi";

function Navbar() {
  return (
        <div className="flex min-w-full h-80 items-center justify-center absolute mt-60 md:mt-44">
            <div className="flex items-center justify-between h-full sm:flex-row sm:w-full sm:h-full md:flex-row md:justify-around md:w-full md:h-full ">
                <div className="flex flex-col items-center justify-center w-full mx-4 md:flex-row">
                    <Link href={"/"} className="
                        flex items-center justify-center 
                        text-white border-2 
                        rounded-md w-60 h-20 mx-4 m-10 
                        bg-transparent
                        hover:bg-slate-800 drop-shadow-lg">

                        <div className="flex justify-center items-center text-xl">hola</div>
                    </Link>
                    <Link href={"/"} className="
                        flex items-center justify-center 
                        text-white border-2 rounded-md w-60 h-20 mx-4 m-10 
                        bg-transparent
                        hover:bg-slate-800 drop-shadow-lg">
                            
                        <div className="flex justify-center items-center text-xl">
                            <BiUser/>
                            <h3 className="pl-2 flex items-center justify-center">Iniciar Sesion</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar