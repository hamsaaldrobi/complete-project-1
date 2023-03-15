import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function RootEventLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default RootEventLayout;
