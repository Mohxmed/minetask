import Logo from "@/assets/identity/minetask.png";
import DarkLogo from "@/assets/identity/minetask-dark.png";

function IconLogo() {
  const imgStyle = "size-12";
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
    </div>
  );
}

export default IconLogo;
