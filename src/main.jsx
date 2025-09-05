import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Button} from "./components/ui/button/index.js";
import {PlusIcon} from "@heroicons/react/24/outline/index.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mx-auto w-fit">
      <Button size="xs">Save</Button>
      <Button size="sm">Save</Button>
      <Button size="md">Save</Button>
      <Button size="lg">Save</Button>
      <Button size="xl">Save</Button>
    </div>
    <div className="mx-auto w-fit">
      <Button size="xs" shape="rounded">Save</Button>
      <Button size="sm" shape="rounded">Save</Button>
      <Button size="md" shape="rounded">Save</Button>
      <Button size="lg" shape="rounded">Save</Button>
      <Button size="xl" shape="rounded">Save</Button>
    </div>
    <div className="mx-auto w-fit">
      <Button size="xs" shape="circular"><PlusIcon className="size-6"/></Button>
      <Button size="sm" shape="circular"><PlusIcon className="size-6"/></Button>
      <Button size="md" shape="circular"><PlusIcon className="size-6"/></Button>
      <Button size="lg" shape="circular"><PlusIcon className="size-6"/></Button>
      <Button size="xl" shape="circular"><PlusIcon className="size-6"/></Button>
    </div>
  </StrictMode>,
)
