
const SkeletonLoader = () => {
    return (
        <div className="min-w-[300px] maxn-h-[340px] border-2 border-gray-200 rounded-lg shadow-md">
            <div className="w-full h-[240px] bg-gray-200 rounded-t-lg animate-pulse"></div>
            <div className="p-4 flex flex-col justify-between ">
                <h2 className="text-xl font-semibold mb-2 line-clamp-1 bg-gray-200 h-6 w-3/4 animate-pulse"></h2>

                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-gray-200 h-6 w-20 animate-pulse"></span>
                    <span className="line-through text-gray-500 bg-gray-200 h-6 w-24 animate-pulse"></span>
                </div>
                <div className="flex items-center gap-2 mb-4 mt-2">
                    <span className="font-semibold text-gray-700 bg-gray-200 h-6 w-32 animate-pulse"></span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex ">
                        <span className="material-symbols-outlined text-base bg-gray-200 p-2 rounded-full animate-pulse"></span>
                        <span className="material-symbols-outlined text-base bg-gray-200 p-2 rounded-full animate-pulse"></span>
                        <span className="material-symbols-outlined text-base bg-gray-200 p-2 rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
