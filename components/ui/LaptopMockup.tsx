"use client";

type Props = {
  title: string;
  color: string;
};

export default function LaptopMockup({ title, color }: Props) {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="w-full max-w-[340px]">
        {/* Laptop Screen */}
        <div className="overflow-hidden rounded-t-2xl border border-white/10 bg-[#0B1020] shadow-2xl">
          {/* macOS Top Bar */}
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#111827] px-3 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <div className="ml-auto h-2 w-16 rounded bg-white/20" />
          </div>

          {/* App UI */}
          <div className={`h-48 bg-gradient-to-br ${color} p-3`}>
            {/* Sidebar */}
            <div className="flex h-full gap-3">
              <div className="w-12 rounded-lg bg-black/20 p-2">
                <div className="mb-2 h-2 w-6 rounded bg-white/40" />
                <div className="space-y-1">
                  <div className="h-5 rounded bg-white/10" />
                  <div className="h-5 rounded bg-white/20" />
                  <div className="h-5 rounded bg-white/10" />
                </div>
              </div>

              {/* Main */}
              <div className="flex-1 rounded-lg bg-white/10 p-2 backdrop-blur">
                <div className="h-3 w-24 rounded bg-white/70" />
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="h-10 rounded bg-white/20" />
                  <div className="h-10 rounded bg-white/15" />
                  <div className="col-span-2 h-16 rounded bg-white/10" />
                </div>

                <div className="mt-3 space-y-1">
                  <div className="h-2 rounded bg-white/40" />
                  <div className="h-2 w-4/5 rounded bg-white/25" />
                  <div className="h-2 w-3/5 rounded bg-white/20" />
                </div>
              </div>
            </div>

            <div className="mt-3 text-center text-xs font-semibold text-white/90">
              {title}
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="mx-auto h-3 w-[94%] rounded-b-full bg-zinc-400/40" />
      </div>
    </div>
  );
}