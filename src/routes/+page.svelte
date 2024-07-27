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
    import * as Popover from "$lib/components/ui/popover";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    export let data = { posts: [] };  // Provide a default value
    console.log('Received data:', data);  // Log the received data
</script>


<div class="flex min-h-screen w-full flex-col">
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Bills Vetoed by Donald Trump</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">10</div>
            <p class="text-muted-foreground text-xs">While Trump did not veto a specific healthcare bill, his veto of the National Defense Authorization Act for Fiscal Year 2021 included provisions that impacted healthcare for military personnel and veterans, such as funding for military health programs and facilities.</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Presidential Documents signed by Donald Trump </Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">894</div>
            <p class="text-muted-foreground text-xs">Trump signed a presidential memorandum directing the Health and Human Services (HHS) to expedite the development of a plan to reduce prescription drug prices. This action was part of his administration’s efforts to make medications more affordable for Americans.</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Bills Donald Trump has Signed into Law</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">243</div>
            <p class="text-muted-foreground text-xs">The SUPPORT for Patients and Communities Act, signed into law on October 24, 2018, was a comprehensive bill aimed at addressing the opioid crisis. It included measures to improve access to addiction treatment, expand telemedicine for substance use disorder treatment, and enhance efforts to prevent opioid misuse.</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Executive Orders Donald Trump has Signed</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">220</div>
            <p class="text-muted-foreground text-xs">On June 24, 2019, Trump signed an executive order to improve price transparency in healthcare. The order directed federal agencies to require hospitals to publicly disclose their negotiated rates with insurance companies, as well as the prices of various medical services and procedures, to help consumers make more informed decisions about their healthcare.</p>
          </Card.Content>
        </Card.Root>
      </div>
      <div class="w-full">
        <Card.Root class="w-full">
          <Card.Header class="flex flex-row items-center">
            <div class="grid gap-2">
              <Card.Title>Presidential Documents Donald Trump Has signed</Card.Title>
              <Card.Description>(Excluding Proclamations as they are typically symbolic in nature)</Card.Description>
            </div>
            <!-- <Button href="/" size="sm" class="ml-auto gap-1">
              Ask Questions About Specific Documents with AI
              <ArrowUpRight class="h-4 w-4" />
            </Button> -->
          </Card.Header>
          <Card.Content>
            <Table.Root class="w-full">
              <Table.Header>
                <Table.Row>
                  <Table.Head>Details</Table.Head>
                  <Table.Head class="text-right">Document Number</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {#if data.posts && data.posts.length > 0}
                  {#each data.posts as post (post.id)}
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-normal">{post.title}</div>
                        <div class="text-secondary-foreground hidden text-sm md:inline font-semibold">{post.publication_date}</div>
                        <div class="text-secondary-foreground hidden text-sm md:inline font-semibold ">
                          <a href="{post.pdf_url}" target="_blank" class="text-ring hover:underline">
                            {post.pdf_url}
                          </a>
                        </div>
                      </Table.Cell>
                      <Table.Cell class="xl:table-column hidden">
                        <Badge class="text-xs" variant="outline">Passed</Badge>
                      </Table.Cell>
                      <Table.Cell class="text-right">{post.document_number}</Table.Cell>
                    </Table.Row>
                  {/each}
                {:else}
                  <Table.Row>
        
                  </Table.Row>
                {/if}
              </Table.Body>
            </Table.Root>
          <!-- </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Bills Vetoed</Card.Title>
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
