'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/libs';

function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  onRequestClose,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & {
  onRequestClose?: () => void;
}) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const startYRef = React.useRef<number | null>(null);
  const draggedRef = React.useRef(false);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    startYRef.current = e.clientY;
    draggedRef.current = false;
    contentRef.current?.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (startYRef.current == null) return;
    const deltaY = e.clientY - startYRef.current;
    if (deltaY <= 0) return;
    draggedRef.current = true;
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(${Math.min(deltaY, 120)}px)`;
    }
  }

  function onPointerUp() {
    const content = contentRef.current;
    const started = startYRef.current;
    startYRef.current = null;
    if (!content || started == null) return;
    const translateY = parseFloat(content.style.transform.replace(/[^0-9.-]/g, '')) || 0;
    content.style.transition = 'transform 150ms ease-out';
    if (translateY > 40 && draggedRef.current) {
      content.style.transform = 'translateY(100%)';
      onRequestClose?.();
    } else {
      content.style.transform = '';
    }
    setTimeout(() => {
      if (content) content.style.transition = '';
    }, 160);
  }

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={contentRef}
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content glass-sm fixed z-50 flex h-auto flex-col px-4 my-4',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className
        )}
        {...props}>
        <div
          className="mx-auto mt-3 mb-2 h-1.5 w-12 rounded-full bg-white/40 group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
