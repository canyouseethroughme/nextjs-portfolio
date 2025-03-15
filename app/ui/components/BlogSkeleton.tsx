export const BlogSkeleton = () => {
    return (
        <div>
            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[15rem] sm:w-[40rem] sm:h-12 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[15rem] h-[5rem] sm:w-[40rem] sm:h-[15rem] mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[4rem] h-1 sm:w-[10rem] sm:h-4 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

        </div>
    );
}