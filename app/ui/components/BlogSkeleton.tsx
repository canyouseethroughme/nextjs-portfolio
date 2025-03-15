export const BlogSkeleton = () => {
    return (
        <div>
            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[40rem] h-12 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[40rem] h-[15rem] mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-[10rem] h-4 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

        </div>
    );
}