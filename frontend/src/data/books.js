const books = [
    {
        id: 1,
        title: 'Atomic Habits',
        author: 'James Clear',
        category: 'Self Improvement',
        description:
            'Atomic Habits is a practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results.',
        cover: '/books/Atomic_habits.jpg',
        chapters: [
            {
                id: 1,
                title: 'The Surprising Power of Atomic Habits',
                content: [
                    'Small changes can create remarkable results over time.',
                    'Habits are the small decisions and actions we repeat every day.',
                    'When these actions become consistent, they can have a powerful impact on our lives.',
                ],
            },
            {
                id: 2,
                title: 'How Your Habits Shape Your Identity',
                content: [
                    'Every action you take is a vote for the person you want to become.',
                    'Changing your habits can gradually change the way you see yourself.',
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        category: 'Fiction',
        description:
            'The Alchemist is a story about following your dreams, discovering your purpose, and listening to your heart.',
        cover: '/books/Alchemist.jfif',
        chapters: [
            {
                id: 1,
                title: 'The Beginning of the Journey',
                content: [
                    'Every journey begins with a decision to move forward.',
                    'The story follows a young dreamer who wants to discover his purpose.',
                    'Along the way, he learns that the journey itself can be as important as the destination.',
                ],
            },
            {
                id: 2,
                title: 'Following the Dream',
                content: [
                    'Dreams can guide us toward experiences we never expected.',
                    'The important thing is to keep moving forward even when the path is uncertain.',
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        category: 'Finance',
        description:
            'Rich Dad Poor Dad explores different approaches to money, financial education, investing, and building long-term wealth.',
        cover: '/books/rich-dad-poor-dad.jfif',
        chapters: [
            {
                id: 1,
                title: 'Rich Dad, Poor Dad',
                content: [
                    'Financial education can change the way we understand money.',
                    'People can have very different ideas about earning, saving, and investing.',
                    'Learning how money works is an important step toward making better financial decisions.',
                ],
            },
            {
                id: 2,
                title: 'The Rich Do Not Work for Money',
                content: [
                    'Understanding the difference between working for money and making money work for you can change your financial perspective.',
                    'Financial knowledge helps people make more informed decisions about their future.',
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        category: 'Finance',
        description:
            'The Psychology of Money explores how behavior, emotions, and personal experiences influence the way people think about money and wealth.',
        cover: '/books/psychology-of-money.jfif',
        chapters: [
            {
                id: 1,
                title: 'No One Is Crazy',
                content: [
                    'People make financial decisions based on their personal experiences.',
                    'What seems irrational to one person may make sense when we understand that person’s history and circumstances.',
                    'Our relationship with money is influenced by emotions, experiences, and the environment around us.',
                ],
            },
            {
                id: 2,
                title: 'Luck and Risk',
                content: [
                    'Success and failure are often influenced by both decisions and circumstances.',
                    'Understanding risk helps us make better decisions when the future is uncertain.',
                ],
            },
        ],
    },
]

export default books
