import { FSComponent, DisplayComponent } from "@microsoft/msfs-sdk";
// * <any> is used to indicate the `MyComponent` class extends
// * the `DisplayComponent` class with a type parameter of `any`,
// * which means that the class can receive any type of data as input.
export class MyComponent extends DisplayComponent {
    render() {
        return FSComponent.buildComponent("div", { class: "my-component" }, "Hello World!");
    }
}
//# sourceMappingURL=MyComponent.js.map