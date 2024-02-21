import { useDraggable } from '@dnd-kit/core'

export const Mg = ({
  content,
  name,
  gm_template_id
}) => {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: gm_template_id,
    data: {name, content, gm_template_id},
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div className="border-4 w-[calc(50%-1.25rem)] border-light-secondary rounded-xl p-5" ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <p className="font-bold text-light-primary text-2xl">{name}</p>
      <ul>
        {
          content.map((e, idx) =>
            <li key={idx} className="text-lg">
              {e}
            </li>
          )
        }
      </ul>
    </div>
  )
}