import { Activity, Bell, CheckCircle2, Search } from "lucide-react";

export function DashboardMockup() {
  const activities = [
    "HEFAMAA Renewal Completed",
    "EMR System Deployment In Progress",
    "HealthPortal Onboarding Completed",
    "Cloud Support Ticket Resolved",
  ];

  return (
    <div className="relative mx-auto w-full max-w-[650px] rotate-[2deg] rounded-[28px] border border-white/15 bg-[#080514] p-3 shadow-[0_42px_90px_rgba(0,0,0,.52)]">
      <div className="rounded-[20px] border border-white/10 bg-[#120D24] p-5">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg bg-white/10 text-white">
              <span className="text-sm font-black">H</span>
            </div>
            <span className="text-sm font-bold text-white">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-white/55">
            <Search className="size-4" />
            <Bell className="size-4" />
            <div className="size-7 rounded-full bg-gradient-to-br from-accent to-purple-500" />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.64fr_1.36fr]">
          <aside className="hidden rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-xs text-white/45 lg:block">
            {["Overview", "Projects", "Clients", "Pages", "Reports", "Settings"].map((item) => (
              <div
                className="mb-4 rounded-lg px-3 py-2 last:mb-0 first:bg-white/10 first:text-white"
                key={item}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Total Projects", "24", "+18.9%"],
                ["Active Clients", "32", "+27.7%"],
                ["Success Rate", "98%", "+4.2%"],
              ].map(([label, value, delta]) => (
                <div className="rounded-2xl border border-white/8 bg-white/[0.05] p-4" key={label}>
                  <p className="text-xs text-white/55">{label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <strong className="text-2xl font-black text-white">{value}</strong>
                    <span className="text-[10px] font-bold text-emerald-300">{delta}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-[1.22fr_.78fr]">
              <div className="rounded-2xl border border-white/8 bg-white/[0.05] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">Project Progress</p>
                  <Activity className="size-4 text-accent" />
                </div>
                <div className="relative h-40 overflow-hidden rounded-xl bg-[#0B0717] p-3">
                  <div className="absolute inset-x-4 bottom-9 top-5 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px)] bg-[length:100%_28px]" />
                  <svg className="relative h-full w-full" viewBox="0 0 320 150" fill="none">
                    <path
                      d="M10 116 C45 102 55 58 86 76 C118 94 127 38 162 52 C194 65 199 107 230 83 C260 60 270 34 310 54"
                      stroke="#8B5CF6"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 116 C45 102 55 58 86 76 C118 94 127 38 162 52 C194 65 199 107 230 83 C260 60 270 34 310 54"
                      stroke="#FF6F61"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.05] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">Recent Activities</p>
                  <span className="text-[10px] font-bold text-purple-200">View All</span>
                </div>
                <div className="space-y-3">
                  {activities.map((activity) => (
                    <div className="flex gap-2 text-xs text-white/70" key={activity}>
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-10 right-10 h-5 rounded-b-[22px] bg-gradient-to-r from-[#111] via-[#2B2440] to-[#080808]" />
    </div>
  );
}
