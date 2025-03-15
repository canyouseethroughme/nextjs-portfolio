export const BlogSkeleton = () => {
    return (
        <div className="p-2 sm:p-0">
            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[65vw] sm:w-[40rem] sm:h-12 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[95vw] h-[8rem] sm:w-[40rem] sm:h-[15rem] mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[4rem] h-1 sm:w-[10rem] sm:h-4 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className="w-[95vw] sm:w-[40rem] flex justify-center">
                <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-center w-16 h-4 sm:h-6 mb-6`}>
                    <div className="invisible">Loading...</div>
                </div>
            </div>

        </div>
    );
}