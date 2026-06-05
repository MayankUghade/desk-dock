import Leftbar from "./Components/Leftbar"
import { Topbar } from "./Components/Topbar"
import { Rightbar } from "./Components/Rightbar"

function App() {
  return (
    <div className="w-full h-full flex bg-[#080809] text-white">
      {/* Left Sidebar */}
      <Leftbar />
      
      {/* Central Content Container */}
      <div className="flex-1 h-full flex flex-col min-w-0">
        {/* Topbar (confined to central content area) */}
        <Topbar />
        
        {/* Work Area / Main Workspace */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Center grid/content will be placed here */}
          <div className="flex items-center justify-center h-full text-zinc-600 text-sm">
            Grid content area
          </div>
        </div>
      </div>

      {/* Right Sidebar (spans top-to-bottom) */}
      <Rightbar />
    </div>
  )
}

export default App
