import Link from "next/link";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

export type NavigationItemType = {
  id: string;
  Icon: IconType;
  ActiveIcon: IconType;
  text: string;
  url: string;
};

const NavigationItem: React.FC<NavigationItemType> = ({
  Icon,
  ActiveIcon,
  text,
  url,
}) => {
  const router = useRouter();
  return (
    <Link href={!!url ? url : ""} passHref>
      <div className="flex items-center gap-2 group transition-all cursor-pointer">
        {router.pathname === url ? (
          <ActiveIcon className={`w-6 h-6`} color={"#fd4300"} />
        ) : (
          <Icon className={`w-6 h-6`} color={"#5e5e5e"} />
        )}
        <h2
          className={`text-medium ${
            router.pathname === url ? "text-primary" : "text-[#5e5e5e]"
          } group-hover:underline`}
        >
          {text}
        </h2>
      </div>
    </Link>
  );
};

export default NavigationItem;
