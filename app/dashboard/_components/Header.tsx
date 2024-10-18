import Image from "next/image";

export default function Header (){
    return(
        <div className="w-screen h-[10vh] bg-orange-200 px-10">
        <Image src="oxxo-logo.svg" width={100} height={0} alt="Ocso logo" draggable={false}/>
        </div>
    );
}