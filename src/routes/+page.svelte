<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
      const response = await fetch('/api/data');
      const result = await response.json();

      if (result.error) {
          return { props: { bills: [] } };
      }

      return { props: { bills: result.data } };
  };
</script>

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
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";

    export let bills: { title: string }[] = [];
</script>

<div class="flex min-h-screen w-full flex-col">
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Bills Kamala Harris has Supported</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">43242</div>
            <p class="text-muted-foreground text-xs">Details on supported bills</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Bills Kamala Harris has Voted Against</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">4232432</div>
            <p class="text-muted-foreground text-xs">Details on opposed bills</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Bills Donald Trump has Signed into Law</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">342234</div>
            <p class="text-muted-foreground text-xs">Details on signed bills</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Bills Donald Trump has Vetoed</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">432432</div>
            <p class="text-muted-foreground text-xs">Details on vetoed bills</p>
          </Card.Content>
        </Card.Root>
      </div>
      <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card.Root class="xl:col-span-2">
          <Card.Header class="flex flex-row items-center">
            <div class="grid gap-2">
              <Card.Title>Recent Bills Supported</Card.Title>
              <Card.Description>Details on recent supported bills</Card.Description>
            </div>
            <Button href="/Bills-Supported" size="sm" class="ml-auto gap-1">
              View All
              <ArrowUpRight class="h-4 w-4" />
            </Button>
          </Card.Header>
          <Card.Content>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Bill</Table.Head>
                  <Table.Head class="xl:table-column hidden">Type</Table.Head>
                  <Table.Head class="xl:table-column hidden">Status</Table.Head>
                  <Table.Head class="xl:table-column hidden">Date</Table.Head>
                  <Table.Head class="text-right">Action</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <div class="font-medium">H.R.1234</div>
                    <div class="text-muted-foreground hidden text-sm md:inline">#each</div>
                  </Table.Cell>
                  <Table.Cell class="xl:table-column hidden">Bill</Table.Cell>
                  <Table.Cell class="xl:table-column hidden">
                    <Badge class="text-xs" variant="outline">Passed</Badge>
                  </Table.Cell>
                  <Table.Cell class="md:table-cell xl:table-column hidden lg:hidden">2021-07-15</Table.Cell>
                  <Table.Cell class="text-right">Supported</Table.Cell>
                </Table.Row>
                <!-- Add more rows as needed -->
              </Table.Body>
            </Table.Root>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Recent Bills Opposed</Card.Title>
          </Card.Header>
          <Card.Content class="grid gap-8">
            <div class="flex items-center gap-4">
              <Avatar.Root class="hidden h-9 w-9 sm:flex">
                <Avatar.Image src="/avatars/01.png" alt="Avatar" />
                <Avatar.Fallback>HR</Avatar.Fallback>
              </Avatar.Root>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">H.R.5678</p>
                <p class="text-muted-foreground text-sm">Education Reform Act</p>
              </div>
              <div class="ml-auto font-medium">Opposed</div>
            </div>
            <!-- Add more entries as needed -->
          </Card.Content>
        </Card.Root>
      </div>
    </main>
</div>

{#each bills as bill}
  <h1>{bill.title}</h1>
{/each}

<h1>yerrrr</h1>