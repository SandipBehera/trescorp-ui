import React from 'react';

const Card = ({ title, content }) => (
  <div className="card bg-gray-800  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
    <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-yellow-500">{title}</h2>
    <p>{content}</p>
  </div>
);

const CardGrid = ({cards,grid}) => {
  

  return (
    <div className="container mx-auto p-4">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${grid || '4'} gap-4`}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
