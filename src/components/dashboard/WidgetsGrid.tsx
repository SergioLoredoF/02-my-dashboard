'use client';
import { useAppSelector } from "@/store";;
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
    const count = useAppSelector( state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title={count.toString()}
            subTitle="Número"
            href="/dashboard/counter"
            label={'Contadors'}
            icon={ <IoCafeOutline size={50} className="text-blue-500" /> }
            key={'Contador'}
        />       
    </div>
  )
}
