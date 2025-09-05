import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Button} from "./components/ui/button/index.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mx-auto w-fit">
      <Button>Save</Button>
    </div>
  </StrictMode>,
)
