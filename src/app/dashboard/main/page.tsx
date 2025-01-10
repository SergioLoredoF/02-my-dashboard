import { SimpleWidget } from "@/components";
import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Información general'
}

export default function MainPage() {
    return(
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">DashBoard</h1>
            <span className="text-xl">Información general</span>

            <WidgetsGrid />
        </div>
    )
}