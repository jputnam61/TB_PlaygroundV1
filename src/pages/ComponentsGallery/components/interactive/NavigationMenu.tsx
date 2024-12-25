import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Navigation Menu</h4>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-testid="menu-trigger">
              Menu Item
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[200px] space-y-2">
                <div 
                  className="cursor-pointer hover:bg-muted p-2 rounded"
                  data-testid="sub-menu-1"
                >
                  Sub Menu Item 1
                </div>
                <div 
                  className="cursor-pointer hover:bg-muted p-2 rounded"
                  data-testid="sub-menu-2"
                >
                  Sub Menu Item 2
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}