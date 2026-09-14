const ReaderSettings = ({
    fontSize,
    setFontSize,
    theme,
    setTheme,
}) => {
    return (
        <div className="absolute right-0 top-12 z-10 w-64 rounded-xl border border-gray-200 bg-white p-5 shadow-lg">

            {/* Font Size */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900">
                    Font Size
                </h3>

                <div className="mt-3 flex gap-2">
                    <button
                        type="button"
                        onClick={() => setFontSize('text-base')}
                        className={`rounded-lg border px-3 py-2 text-sm ${fontSize === 'text-base'
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        A
                    </button>

                    <button
                        type="button"
                        onClick={() => setFontSize('text-lg')}
                        className={`rounded-lg border px-3 py-2 text-base ${fontSize === 'text-lg'
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        A
                    </button>

                    <button
                        type="button"
                        onClick={() => setFontSize('text-xl')}
                        className={`rounded-lg border px-3 py-2 text-lg ${fontSize === 'text-xl'
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        A
                    </button>
                </div>
            </div>

            {/* Theme */}
            <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900">
                    Theme
                </h3>

                <div className="mt-3 space-y-2">
                    <button
                        type="button"
                        onClick={() => setTheme('light')}
                        className={`w-full rounded-lg border px-3 py-2 text-left text-sm ${theme === 'light'
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        Light
                    </button>

                    <button
                        type="button"
                        onClick={() => setTheme('sepia')}
                        className={`w-full rounded-lg border px-3 py-2 text-left text-sm ${theme === 'sepia'
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        Sepia
                    </button>

                    <button
                        type="button"
                        onClick={() => setTheme('dark')}
                        className={`w-full rounded-lg border px-3 py-2 text-left text-sm ${theme === 'dark'
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        Dark
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ReaderSettings
