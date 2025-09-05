import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from './components/ui/button/index.js';
import { PlusIcon } from '@heroicons/react/24/outline/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mx-auto w-fit">
      <Button size="xs">
        <PlusIcon />
        Add
      </Button>
      <Button size="sm">
        <PlusIcon />
        Add
      </Button>
      <Button size="md">
        <PlusIcon />
        Add
      </Button>
      <Button size="lg">
        <PlusIcon />
        Add
      </Button>
      <Button size="xl">
        <PlusIcon />
        Add
      </Button>
    </div>
    <div className="mx-auto w-fit">
      <Button size="xs" variant="outlined">
        <PlusIcon />
        Add
      </Button>
      <Button size="sm" variant="outlined">
        <PlusIcon />
        Add
      </Button>
      <Button size="md" variant="outlined">
        <PlusIcon />
        Add
      </Button>
      <Button size="lg" variant="outlined">
        <PlusIcon />
        Add
      </Button>
      <Button size="xl" variant="outlined">
        <PlusIcon />
        Add
      </Button>
    </div>
    <div className="mx-auto w-fit">
      <Button size="xs" shape="rounded">
        <PlusIcon />
        Add
      </Button>
      <Button size="sm" shape="rounded">
        <PlusIcon />
        Add
      </Button>
      <Button size="md" shape="rounded">
        <PlusIcon />
        Add
      </Button>
      <Button size="lg" shape="rounded">
        <PlusIcon />
        Add
      </Button>
      <Button size="xl" shape="rounded">
        <PlusIcon />
        Add
      </Button>
    </div>
    <div className="mx-auto w-fit">
      <Button size="xs" shape="circular">
        <PlusIcon />
      </Button>
      <Button size="sm" shape="circular">
        <PlusIcon />
      </Button>
      <Button size="md" shape="circular">
        <PlusIcon />
      </Button>
      <Button size="lg" shape="circular">
        <PlusIcon />
      </Button>
      <Button size="xl" shape="circular">
        <PlusIcon />
      </Button>
    </div>
  </StrictMode>
);
