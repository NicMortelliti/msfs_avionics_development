import { FSComponent, DisplayComponent, VNode } from "@microsoft/msfs-sdk";

//? What's going on with the <any> tag?
export class MyComponent extends DisplayComponent<any> {
  public render(): VNode {
    return <div class="my-component">Hello World!</div>;
  }
}
