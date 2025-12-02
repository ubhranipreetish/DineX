export default function QuantityControl({ quantity, onIncrease, onDecrease, size = 'md' }) {
    const sizeClasses = {
        sm: 'w-6 h-6 text-sm',
        md: 'w-8 h-8 text-base',
        lg: 'w-10 h-10 text-lg'
    };

    const buttonSize = sizeClasses[size] || sizeClasses.md;

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={onDecrease}
                disabled={quantity <= 0}
                className={`${buttonSize} rounded-lg bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold transition-all active:scale-95 flex items-center justify-center shadow-md cursor-pointer`}
            >
                −
            </button>
            <span className={`${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-base'} font-bold min-w-[2rem] text-center`}>
                {quantity}
            </span>
            <button
                onClick={onIncrease}
                className={`${buttonSize} rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold transition-all active:scale-95 flex items-center justify-center shadow-md cursor-pointer`}
            >
                +
            </button>
        </div>
    );
}
