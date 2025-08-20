    // Skeleton componenet
    export const SkeletonCard = () => (
        <div className="w-full border rounded-lg p-4 shadow mb-6 animate-pulse">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1 space-y-2">
                    <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                    <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
            </div>
        </div>
    );