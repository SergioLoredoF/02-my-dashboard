import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoHeartOutline, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { MdOutlineCatchingPokemon } from "react-icons/md";

interface IMenuItems {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

const menuItems: IMenuItems[] = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        subTitle: 'Visualización',
        title: 'Dashboard'
    }, 
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        subTitle: 'Contador client side',
        title: 'Counter'
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdOutlineCatchingPokemon size={40} />,
        subTitle: 'Generación estática',
        title: 'Pokemons'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        subTitle: 'Generación cliente',
        title: 'Pokemons fav'
    }
]

export const Sidebar = () => {
    return (
        <div id="menu" 

        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll">
           
            <div id="logo" className="my-4 px-2">
                <h1 className="text-lg md:text-2xl font-bold text-white flex flex-row items-center">
                    <IoLogoReact className="mr-2"/>
                    <span>SiQuema</span>
                    <span className="text-blue-500">Cuh</span>
    
                </h1>
                <p className="text-slate-500 text-sm">Mis experimentos</p>
            </div>

            <div id="profile" className="px-2 py-10">
                <p className="text-slate-500">Bienvenido</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image 
                            className="rounded-full w-8 h-8" 
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                            alt="Avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Sergio Loredo
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-2">

                {
                    menuItems.map(item => <SidebarMenuItem key={item.path} {...item} />)
                }
            </div>
        </div>
    )
}