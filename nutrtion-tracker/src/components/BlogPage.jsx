import "./BlogPage.css"
import BlogHeader from "./BlogHeader"
import BlogCTA from "./BlogCTA"
import BlogArticle from "./BlogArticle"

function BlogPage() {
const articles = [
{
    id: 1,
    title: "Health Benefits of Cream Cheese",
    image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%201.09.42%E2%80%AFPM-SGHtE4zJWHGPq5t1wQEYgw4SbeV1oT.png",
    content:
    "Some people think of cream cheese as a decadent splurge, while others view it as beneficial in the same way they regard Greek yogurt as a healthful option. Cream cheese is a dairy product made mainly from milk, cream,",
    alt: "Cream cheese on a plate",
},
{
    id: 2,
    title: "Non-Dairy Coffee Creamers",
    image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%201.09.27%E2%80%AFPM-i0frtGJdn9IAvjoHw879n8IqHucvum.png",
    content:
    "On its own, coffee is a very low-calorie drink that actually provides some antioxidant benefits as well. A cup of black joe will run you only 5 calories and contains no added sugar or fat. However, coffee creamers can add a surprising way more",
    alt: "Pouring cream into coffee",
},
{
    id: 3,
    title: "6 Health Benefits of Spinach",
    image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%201.09.27%E2%80%AFPM-i0frtGJdn9IAvjoHw879n8IqHucvum.png",
    content:
    "Spinach (Spinacia oleracea), native to central Asia, is one of the most versatile leafy green vegetables. It contains vitamins and antioxidants that protect you from chronic diseases and promote brain, heart, and eye health.",
    alt: "Person eating spinach",
},
{
    id: 4,
    title: "How Much Sugar Should You Eat In a Day?",
    image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%201.09.14%E2%80%AFPM-8bz8rwgNhcK8EG9aGpPy6A1tcC2RuI.png",
    content:
    "Sugar can taste delicious, and it provides a quick source of energy. However, many people are becoming more mindful of what they eat, including how much sugar is too much. Popular diets describe the benefits of cutting out sugar and carbohydrates, but not all sugars",
    alt: "People eating desserts",
},
{
    id: 5,
    title: "5-Ingredient Meals for Weight Loss",
    image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%201.09.14%E2%80%AFPM-8bz8rwgNhcK8EG9aGpPy6A1tcC2RuI.png",
    content:
    "If weight loss is one of your goals, you may think egg whites and grilled chicken are the only things you can eat. Although these foods are great to include in any diet, including one focused on weight loss, you may be surprised at how many foods you can include in your weight loss",
    alt: "Healthy meal with shrimp and vegetables",
},
]

return (
<div className="blog-page">
    <BlogHeader />
    <main className="blog-content">
    <BlogCTA />
    <div className="articles-container">
        {articles.map((article) => (
        <BlogArticle
            key={article.id}
            title={article.title}
            image={article.image}
            content={article.content}
            alt={article.alt}
        />
        ))}
    </div>
    </main>
</div>
)
}

export default BlogPage