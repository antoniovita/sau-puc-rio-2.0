import Link from "next/link";

export const NivelamentosTable = () => {
    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4 px-6">
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                Disciplinas
                </h2>
                <Link href={""} className="px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200 sm:px-6 sm:py-2.5">
                Ver mais
                </Link>
            </div>
        </div>
     );
}
 
export default NivelamentosTable;