<script lang="ts">
    import Activity from "lucide-svelte/icons/activity";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import CircleUser from "lucide-svelte/icons/circle-user";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import DollarSign from "lucide-svelte/icons/dollar-sign";
    import Menu from "lucide-svelte/icons/menu";
    import Package2 from "lucide-svelte/icons/package-2";
    import Search from "lucide-svelte/icons/search";
    import Users from "lucide-svelte/icons/users";
  
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
  </script>
  
  <header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
    <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a href="/" class="flex items-center gap-2 text-lg font-semibold md:text-base">

       
      </a>
      <a href="/" class="text-foreground hover:text-foreground transition-colors">Information on Legislation Enacted By Donald Trump</a>
      <!-- <a href="/Bills-Supported" class="text-muted-foreground hover:text-foreground transition-colors">Bills Supported</a>
      <a href="/Bills-Opposed" class="text-muted-foreground hover:text-foreground transition-colors">Bills Opposed</a> -->
      <!-- <a href="/Analytics" class="text-muted-foreground hover:text-foreground transition-colors">Analytics</a> -->
    </nav>
    <Sheet.Root>
      <Sheet.Trigger asChild let:builder>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="/" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <a href="/" class="hover:text-foreground">Dashboard</a>
          <a href="/Analytics" class="text-muted-foreground hover:text-foreground">Analytics</a>
        </nav>
      </Sheet.Content>
    </Sheet.Root>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <!-- <form class="ml-auto flex-1 sm:flex-initial">
        <div class="relative">
          <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
          <Input type="search" placeholder="This doesn't work..." class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
        </div> 
      </form> -->
      <!-- <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root> -->
    </div>
  </header>
  