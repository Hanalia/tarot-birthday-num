
import { useState } from "react";
import Image from "next/image";

const Card = (props) => {

  const tarotMap = {
    0: { name: "The Fool", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg" },
    1: { name: "The Magician", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg" },
    2: { name: "The High Priestess", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg" },
    3: { name: "The Empress", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg" }
  }

  console.log(props)
  console.log(tarotMap[props.cardType])

  return (
    <div>
      <Image
        src={tarotMap[props.cardType].image}
        alt=""
        height={667 * 0.4}
        width={375 * 0.4}
      />
    </div>
  );
};

export default Card;
