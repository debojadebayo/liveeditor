import Image from "next/image";
import Link from "next/link";

const Header = ({children}: HeaderProps) => {
    return(
        <div className="flex justify-between w-full py-2 px-4">
            <Link href="/" className="md:flex-1">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Logo with name"
                    width={120}
                    height={32}
                    className="hidden md:block" 
                
                />
                <Image
                    src="/asset/icons/logo-icon.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-2 md:hidden" 
                />
            </Link>
            {children}
        </div>
    )
}

export default Header