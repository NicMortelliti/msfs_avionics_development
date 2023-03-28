import { FSComponent, DisplayComponent, VNode } from "@microsoft/msfs-sdk";

// * <any> is used to indicate the `MyComponent` class extends
// * the `DisplayComponent` class with a type parameter of `any`,
// * which means that the class can receive any type of data as input.
export class MyComponent extends DisplayComponent<any> {
  public render(): VNode {
    return <div class="my-component">Hello World!</div>;
  }
}
