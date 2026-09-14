const ChapterList = ({
    chapters,
    currentChapterIndex,
    onChapterSelect,
}) => {
    return (
        <aside className="rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Table of Contents
            </h3>

            <div className="space-y-2">
                {chapters.map((chapter, index) => (
                    <button
                        key={chapter.id}
                        type="button"
                        onClick={() => onChapterSelect(index)}
                        className={`w-full rounded-lg px-4 py-3 text-left text-sm transition ${currentChapterIndex === index
                            ? 'bg-black text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <span className="font-medium">
                            Chapter {index + 1}
                        </span>

                        <span className="mt-1 block text-xs opacity-75">
                            {chapter.title}
                        </span>
                    </button>
                ))}
            </div>
        </aside>
    )
}

export default ChapterList
