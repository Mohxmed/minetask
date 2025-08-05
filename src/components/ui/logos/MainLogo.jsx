import Logo from "@/assets/identity/minetask.png";
import DarkLogo from "@/assets/identity/minetask-dark.png";

function MainLogo() {
  const imgStyle = "size-7 max-md:size-9";
  return (
    <div className="flex items-center justify-center gap-1">
      <img
        className={`${imgStyle} dark:hidden`}
        src={Logo}
        alt="Minetask logo"
      />
      <img
        className={`${imgStyle} hidden dark:block`}
        src={DarkLogo}
        alt="Minetask logo"
      />

      <p className="text-2xl max-md:hidden dark:text-white">
        Mine
        <span>task</span>
      </p>
    </div>
  );
}

export default MainLogo;
