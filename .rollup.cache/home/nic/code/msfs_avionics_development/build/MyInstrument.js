/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />
import { FSComponent } from "@microsoft/msfs-sdk";
import { MyComponent } from "./MyComponent";
class MyInstrument extends BaseInstrument {
    // Note that this class contains the property templateID,
    // which returns a string.This property must be provided and
    // the returned string must match the name of your instrument
    // template you provided in the HTML, in this case MyInstrument.
    get templateID() {
        return "MyInstrument";
    }
    connectedCallback() {
        //! Always call super.connectedCallback() first
        //! thing in any implementation of BaseInstrument.connectedCallback().
        //! The base class does important work that is necessary for your 
        //! instrument to function inside its implementation.Failing to call
        //! super will cause your instrument to fail during load.
        super.connectedCallback();
        FSComponent.render(FSComponent.buildComponent(MyComponent, null), document.getElementById("InstrumentContent"));
    }
}
registerInstrument("my-instrument", MyInstrument);
//# sourceMappingURL=MyInstrument.js.map