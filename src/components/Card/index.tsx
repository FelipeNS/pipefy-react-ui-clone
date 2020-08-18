import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container, Label } from "./styles";

interface Data {
  data: ICard;
  index: number;
  listIndex: number;
}
export interface ICard {
  id: number;
  content: string;
  labels: Array<string>;
  user?: string;
}

interface CardItem {
  type: string;
  index: number;
  listIndex: number;
}

const Card: React.FC<Data> = ({ data, index, listIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: CardItem, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      const targetCenter = targetSize
        ? (targetSize.bottom - targetSize.top) / 2
        : 0;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop =
        draggedOffset && targetSize ? draggedOffset.y - targetSize.top : 0;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar" />}
    </Container>
  );
};

export default Card;
