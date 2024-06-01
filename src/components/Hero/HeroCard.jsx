import React from 'react';
import Card from './Card';

const CardColour = ['yellow', 'black', 'green', 'black', 'yellow'];

const colorMap = {
  yellow: { bgColor: 'bg-orange-300', top: 'top-80' },
  black: { bgColor: 'bg-gray-900', top: 'top-60' },
  green: { bgColor: 'bg-emerald-400', top: 'top-40' },
};

function HeroCard() {
  return (
    <div className="h-full bg-green-50 flex w-106  overflow-hidden relative right-2">
      {CardColour.map((color, index) => (
        <Card key={index} colorConfig={colorMap[color]} color={color} />
      ))}
    </div>
  );
}

export default HeroCard;
