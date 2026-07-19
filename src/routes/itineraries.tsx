import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/itineraries")({
  component: ItinerariesLayout,
});

function ItinerariesLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
