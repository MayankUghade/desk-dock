
import { useState } from "react"
import { 
  LayoutGrid, 
  Code, 
  Bot, 
  Settings, 
} from "lucide-react"

function Leftbar() {
  const [activeTab, setActiveTab] = useState<string>("role-docks")
  
  const mainNavItems = [
    { id: "my-docks", label: "My Docks", icon: LayoutGrid },
    { id: "role-docks", label: "Role-Based Docks", icon: Code },
    { id: "agents", label: "Agents", icon: Bot },
  ]

  return (
    <div className="w-[270px] h-full bg-[#0c0c0e] border-r border-zinc-800/80 py-7 px-4 flex flex-col justify-between select-none">
      <div className="flex flex-col gap-8">
        {/* Header/Logo */}
        <div className="flex items-center gap-3 px-3 py-1">
          <div className="relative flex items-center justify-center">
          <img src="/logo2.png" alt="logo" className="w-[30px] h-[3opx]"/>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            DeskDock
          </h1>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-col gap-1.5">
          {mainNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-left border ${
                  isActive
                    ? "bg-zinc-800/60 text-zinc-100 border-zinc-700/40 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 border-transparent"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive ? "text-zinc-200" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Settings (Bottom) */}
      <div className="border-t border-zinc-900 pt-4 mt-auto">
        <button
          onClick={() => setActiveTab("settings")}
          className={`group flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-left border ${
            activeTab === "settings"
              ? "bg-zinc-800/60 text-zinc-100 border-zinc-700/40 shadow-sm"
              : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 border-transparent"
          }`}
        >
          <Settings
            className={`w-5 h-5 transition-colors duration-200 ${
              activeTab === "settings" ? "text-zinc-200" : "text-zinc-500 group-hover:text-zinc-300"
            }`}
          />
          <span>Settings</span>
        </button>
      </div>
    </div>
  )
}

export default Leftbar