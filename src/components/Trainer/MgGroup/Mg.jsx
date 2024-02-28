import { DragOverlay, useDraggable } from '@dnd-kit/core'

export const Mg = ({
  content,
  name,
  gm_template_id,
  idx
}) => {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: [idx] + gm_template_id,
    data: {name, content, gm_template_id},
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
      <div className="border-4 w-fit border-light-secondary bg-light-secondary rounded-xl p-5" ref={setNodeRef} {...attributes} {...listeners} style={style}>
        <p className="font-bold text-light-primary text-2xl md:text-xl">{name}</p>
        <ul>
          {
            content.map((e, idx) =>
              <li key={idx} className="text-lg md:text-sm">
                {e}
              </li>
            )
          }
        </ul>
      </div>
  )
}