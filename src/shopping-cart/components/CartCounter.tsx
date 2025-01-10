'use client';
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
    value?: number
}

// interface ICounterResponse {
//     count: number
// }

// // const getApiCounter = async():Promise<ICounterResponse> => {
// //     const data: ICounterResponse = await fetch('/api/counter').then(res => res.json());
// //     return data;
// // }

export default function CartCounter({ value = 0 }:Props ) {

    const numProduc = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch( initCounterState( value ) );
    },[])

    // useEffect(() => {
    //     getApiCounter()
    //         .then(({ count }) => dispatch( initCounterState( count ) ))
    // },[ dispatch ])

    return (
        <>
            <span className="text-9xl">{numProduc}</span>

            <div className="flex">
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch( substractOne() )}

                >
                    -1
                </button>
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch( addOne() )}
                >
                    +1
                </button>
            </div>
        </>
    )
}