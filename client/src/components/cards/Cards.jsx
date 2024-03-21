import Card from "../card/Card";
import "./Cards.css";

const Cards = () => {
  const data = [
    {
      id: 1,
      heading: "Creative Collage Crafting",
      work: "Design a collage of your favorite memories. Create a mood board for your dream vacation Craft a vision board for your goals and aspirations.",
    },
    {
      id: 2,
      heading: "Adventure in Artistic Exploration",
      work: "Design a collage of your favorite memories. Create a mood board for your dream vacation Craft a vision board for your goals and aspirations.",
    },
    {
      id: 3,
      heading: "Culinary Creativity Challenge",
      work: "Design a collage of your favorite memories. Create a mood board for your dream vacation Craft a vision board for your goals and aspirations.",
    },
    {
      id: 4,
      heading: "Digital Doodle Delight",
      work: "Design a collage of your favorite memories. Create a mood board for your dream vacation Craft a vision board for your goals and aspirations.",
    },
    {
      id: 5,
      heading: "Garden of Growth: Green Thumb Edition",
      work: "Design a collage of your favorite memories. Create a mood board for your dream vacation Craft a vision board for your goals and aspirations.",
    },
    {
      id: 6,
      heading: "Literary Journey: Write Your Own Adventure",
      work: "Design a collage of your favorite memories. Create a mood board for your dream vacation Craft a vision board for your goals and aspirations.",
    },
  ];

  return (
    <>
      <div className="cards-container">
        {data.map((item) => (
          <Card val={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Cards;
