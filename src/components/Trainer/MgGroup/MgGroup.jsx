import { AddNew } from '../AddNew';
import { Mg } from './Mg';

export const MgGroup = () => {
  return (
    <section className="flex flex-row w-[40%] h-full overflow-auto gap-5 border-4 border-light-secondary rounded-xl p-5">
      <AddNew className="w-[50%]"/>
      <Mg />
    </section>
  );
};