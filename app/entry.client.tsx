import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./shared/mocks/browser/worker');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
}
prepare()
  .catch((error) => {
    if (import.meta.env.DEV) {
      console.error('Failed to start MSW worker. Continuing without mocks.', error);
    }
  })
  .then(() => {
    startTransition(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <HydratedRouter />
        </StrictMode>
      );
    });
  });
