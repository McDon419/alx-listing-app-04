<<<<<<< HEAD
import { PillProps } from", "@/interfaces"
=======
import { PillProps } from "@/interfaces";
>>>>>>> 0ecb443 (Added Button.tsx and modified index.ts)

interface PillProps {
  title: string
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;