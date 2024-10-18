import Image from "next/image";

export default function AuthLayout({children}:
    Readonly<{
    children: React.ReactNode;
  }>) {
    return( 
    <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
    <div className="place-content-center place-self-center">
        <div className="flex items-center flex-col my-5 bottom-5 relative">
     <Image src="/oxxo-logo.svg" alt="Logo de ocso" width={250} height={0}
     /> 
        </div>
        {children}
        </div>
    </div>
    );
}