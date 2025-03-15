export const ArticleSkeleton = () => {
    return (
        <div className="p-2 sm:p-0">
            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[65vw] h-8 sm:w-[40rem] sm:h-12 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200  w-[95vw] h-[15rem] sm:w-[40rem] sm:h-[25rem] mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[4rem] h-2 sm:w-[10rem] sm:h-4 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[95vw] sm:w-[40rem] sm:h-12 mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[95vw] sm:w-[40rem] sm:h-12 mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[95vw] sm:w-[40rem] sm:h-12 mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[95vw] sm:w-[40rem] sm:h-12 mb-4`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[2rem] h-4 sm:w-[10rem] sm:h-6`}>
                <div className="invisible">Loading...</div>
            </div>
        </div>
    );
}