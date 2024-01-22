import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { useState } from "react";

export default function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`flex gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-8" />
        </a>
      </div>
      <form action="/" className={`md:flex gap-4 flex-grow justify-center  ${showFullWidthSearch ? "flex" : "hidden"}`}>
      <Button onClick={() => setShowFullWidthSearch(false)} className={showFullWidthSearch ? "flex" : "hidden"} size="icon">
            <ArrowLeft />
          </Button>
        <div className="flex flex-grow max-w-[900px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary shadow-inner shadow-secondary px-5 py-1 w-full focus:border-blue-500 outline-none"
          />
          <Button className="rounded-r-full  border border-secondary border-l-0  px-5 py-2 flex-shrink-0" variant="ghost">
            <Search />
          </Button>
        </div>
        <Button size="icon">
          <Mic />
        </Button>
      </form>
      <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} variant={"ghost"} size={"icon"} className="md:hidden">
          <Search />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Upload />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Bell />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <User />
        </Button>
      </div>
    </div>
  );
}
