import React from "react";
import { WineData } from "../model";

const WineCard: React.FC<WineData> = ({
  id,
  region,
  country,
  varietal,
  name,
}) => {
  return <div>{name}</div>;
};

export default WineCard;
