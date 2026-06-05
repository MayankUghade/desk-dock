import { Pencil, Smartphone, Save } from "lucide-react"

export const Topbar = () => {
  return (
    <div className="w-full border-b border-zinc-800/80 bg-[#0c0c0e]/30 backdrop-blur-md px-8 py-5 flex items-center justify-between select-none">
      {/* Left Section: Title & Description */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-bold tracking-tight text-white">Your Dock</h2>
        </div>
        <p className="text-[13px] text-zinc-400">
          Edit and arrange your buttons. Changes appear live on your phone.
        </p>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Preview on Phone Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/80 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-150 cursor-pointer">
          <Smartphone className="w-4 h-4" />
          <span>Preview on Phone</span>
        </button>

        {/* Save Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all duration-150 shadow-md shadow-red-600/10 hover:shadow-red-500/20 active:scale-95 cursor-pointer">
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
      </div>
    </div>
  )
}
