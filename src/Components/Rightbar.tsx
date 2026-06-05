import { Search } from "lucide-react"

export const Rightbar = () => {
  return (
    <div className="w-[300px] h-full bg-[#0c0c0e] border-l border-zinc-800/80 py-7 px-5 flex flex-col gap-6 select-none">
      {/* Header */}
      <div className="flex flex-col gap-1 px-1">
        <h2 className="text-lg font-bold tracking-tight text-white">Actions Library</h2>
        <p className="text-xs text-zinc-500">Drag actions to your dock buttons</p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input 
          type="text" 
          placeholder="Search actions..." 
          className="w-full bg-[#080809] border border-zinc-800/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
        />
      </div>

      {/* Placeholder content for premium look */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-3">
          <Search className="w-5 h-5 text-zinc-600" />
        </div>
        <span className="text-sm font-medium text-zinc-400">No actions found</span>
        <span className="text-xs text-zinc-600 mt-1">Actions will appear as you build your library</span>
      </div>
    </div>
  )
}
